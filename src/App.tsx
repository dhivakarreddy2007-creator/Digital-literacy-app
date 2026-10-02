import React, { useState, useEffect } from 'react';
import { 
  Layout, BookOpen, ClipboardList, Award, Image as ImageIcon, 
  Youtube, HelpCircle, ShieldCheck, Moon, Sun, Type, 
  Menu, X, ChevronRight, Download, Database, Lock, 
  LogOut, MapPin, User, Smartphone, Search, Check, 
  AlertCircle, ChevronDown, CheckCircle2, Trophy, Loader2, Sparkles, Send, Bell,
  Globe, MessageSquare, Landmark, Play, Eye, FileText, ExternalLink,
  Sliders, Mic, Ticket, Share2, Printer, Volume2, VolumeX
} from 'lucide-react';

import { Language, SurveyResponse, UserProgress, PosterItem, VideoItem } from './types';
import { translations } from './services/translations';
import { quizQuestions } from './services/quizData';
import { 
  monitorAuth, loginWithGoogle, logoutOfApp, 
  submitSurvey, getAllSurveys, registerCertificate, 
  saveUserProgress, getUserProgress, isFirebaseConnected, SimpleUser 
} from './services/storage';

import AudioNarrator from './components/AudioNarrator';
import { downloadCertificatePDF } from './components/CertificatePDF';
import { downloadAdminReportPDF } from './components/AdminReportPDF';
import DashboardCharts from './components/DashboardCharts';
import SmartphoneSettingsGuide from './components/SmartphoneSettingsGuide';
import GlobalSearchBar, { SearchResultType } from './components/GlobalSearchBar';
import { ChapterQuizHub } from './components/ChapterQuizHub';
import HelpFaqAssistant from './components/HelpFaqAssistant';
import { learningModules, videoTutorials, awarenessPosters, faqData, badgesList, LearningModule } from './data';

export default function App() {
  // Locale & UI states with localStorage persistence
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved === 'te' || saved === 'ta' || saved === 'hi' || saved === 'en') ? (saved as Language) : 'en';
  });
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isLargeText, setIsLargeText] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleLanguageSelect = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('app_language', newLang);
    setIsLangDropdownOpen(false);
    if ('speechSynthesis' in window) {
      const feedback: Record<Language, string> = {
        en: "Language set to English",
        te: "భాష తెలుగుకి మార్చబడింది",
        ta: "மொழி தமிழாக மாற்றப்பட்டது",
        hi: "भाषा हिंदी में सेट हो गई है"
      };
      const utt = new SpeechSynthesisUtterance(feedback[newLang]);
      const codes: Record<Language, string> = { en: 'en-IN', te: 'te-IN', ta: 'ta-IN', hi: 'hi-IN' };
      utt.lang = codes[newLang] || 'en-IN';
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utt);
    }
  };

  // Modal active viewers
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);
  const [activePosterModal, setActivePosterModal] = useState<PosterItem | null>(null);
  const [adminExportingPdf, setAdminExportingPdf] = useState<boolean>(false);

  // Authentication & Progress states
  const [currentUser, setCurrentUser] = useState<SimpleUser | null>(null);
  const [progress, setProgress] = useState<UserProgress>({
    surveyCompleted: false,
    completedModules: [],
    quizHighScores: {},
    badges: []
  });
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  // Notifications
  const [notifications, setNotifications] = useState<string[]>([
    "Welcome! Take the Survey to begin your Digital Literacy journey.",
    "Practice quiz requires 70% (7/10 score) to unlock the Certificate."
  ]);

  // Learning views
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);

  // Contact / feedback state
  const [feedbackSuccess, setFeedbackSuccess] = useState<boolean>(false);
  const [feedbackName, setFeedbackName] = useState<string>('');
  const [feedbackMsg, setFeedbackMsg] = useState<string>('');

  // Video and Poster Searches
  const [videoSearch, setVideoSearch] = useState<string>('');
  const [videoFilter, setVideoFilter] = useState<string>('All');
  const [posterFilter, setPosterFilter] = useState<string>('all');
  const [speakingVideoId, setSpeakingVideoId] = useState<string | null>(null);

  const handleToggleVideoSpeech = (video: VideoItem) => {
    if (!('speechSynthesis' in window)) return;
    if (speakingVideoId === video.id) {
      window.speechSynthesis.cancel();
      setSpeakingVideoId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const text = `${video.title[lang]}. Category: ${video.category}. Duration: ${video.duration}. Audio Explanation: ${video.description[lang]}`;
    const utterance = new SpeechSynthesisUtterance(text);
    const langCodes: Record<Language, string> = {
      en: 'en-IN',
      te: 'te-IN',
      ta: 'ta-IN',
      hi: 'hi-IN'
    };
    utterance.lang = langCodes[lang] || 'en-IN';
    utterance.rate = 0.9;
    utterance.onend = () => setSpeakingVideoId(null);
    utterance.onerror = () => setSpeakingVideoId(null);
    setSpeakingVideoId(video.id);
    window.speechSynthesis.speak(utterance);
  };

  // Survey Form binds
  const [surveyForm, setSurveyForm] = useState({
    fullName: '',
    villageName: '',
    age: '',
    gender: 'Male',
    phoneNumber: '',
    educationLevel: 'Primary School',
    isSmartphoneUser: 'Yes',
    isInternetUser: 'No',
    hasDigitalAwareness: 'No'
  });
  const [surveySubmitting, setSurveySubmitting] = useState<boolean>(false);
  const [surveySaveMessage, setSurveySaveMessage] = useState<string>('');

  // Active Quiz trackers
  const [activeQuestions, setActiveQuestions] = useState<typeof quizQuestions>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [unlockedCert, setUnlockedCert] = useState<any>(null);
  const [quizTargetChapter, setQuizTargetChapter] = useState<string | null>(null);
  const [quizTargetLevel, setQuizTargetLevel] = useState<(1 | 2 | 3) | null>(null);

  // Admin section
  const [adminUsername, setAdminUsername] = useState<string>('');
  const [adminPassword, setAdminPassword] = useState<string>('');
  const [adminLoggedIn, setAdminLoggedIn] = useState<boolean>(false);
  const [adminLoginError, setAdminLoginError] = useState<string>('');
  const [adminSurveys, setAdminSurveys] = useState<SurveyResponse[]>([]);
  const [adminLoading, setAdminLoading] = useState<boolean>(false);

  // Load language preference and user auth on boot
  useEffect(() => {
    const unsub = monitorAuth((user) => {
      setCurrentUser(user);
      setAuthLoading(false);
      if (user) {
        // Load progress log
        getUserProgress(user.uid).then(prog => {
          setProgress(prog);
        });
      }
    });

    // Check for prior local configuration
    const savedDark = localStorage.getItem("dark_mode");
    if (savedDark === "true") setIsDark(true);
    const savedLarge = localStorage.getItem("large_text");
    if (savedLarge === "true") setIsLargeText(true);

    return () => unsub();
  }, []);

  // Update root system attributes
  useEffect(() => {
    localStorage.setItem("app_language", lang);
    localStorage.setItem("dark_mode", String(isDark));
    localStorage.setItem("large_text", String(isLargeText));
  }, [lang, isDark, isLargeText]);

  // Sync user progress to DB on modification
  const syncProgress = async (newProg: UserProgress) => {
    setProgress(newProg);
    if (currentUser) {
      await saveUserProgress(currentUser.uid, newProg);
    }
  };

  // Helper translation puller
  const t = (key: string): string => {
    return translations[lang][key] || translations['en'][key] || key;
  };

  // Text compiler to feed Audio Narrator
  const compilePageNarratorText = (): string => {
    if (selectedModule) {
      const parts = [
        selectedModule.title[lang],
        selectedModule.sub[lang],
      ];
      selectedModule.steps.forEach((s, idx) => {
        parts.push(`Step ${idx + 1}: ${s.title[lang]}`);
        parts.push(s.desc[lang]);
      });
      return parts.join(". ");
    }

    if (activeTab === 'home') {
      return `${t('heroTitle')}. ${t('heroSubtitle')}. Learn and participate in the survey to get Certified.`;
    }

    if (activeTab === 'survey') {
      return `${t('surveyTitle')}. ${t('surveySub')}. Provide Name, Village, Age, Education, Phone, and digital questions.`;
    }

    if (activeTab === 'quiz') {
      return `${t('quizTitle')}. ${t('quizSub')}`;
    }

    if (activeTab === 'settings') {
      return `${t('settingsTitle')}. ${t('settingsSub')}`;
    }

    if (activeTab === 'videos') {
      return `${t('videoTitle')}. ${t('videoSub')}`;
    }

    if (activeTab === 'chat') {
      return `Frequently Asked Questions. ${faqData.map(f => f.question[lang] + "? Answer: " + f.answer[lang]).join(". ")}`;
    }

    return t('appName');
  };

  // Global Search result navigation dispatcher
  const handleSearchResultSelect = (type: SearchResultType, item: any) => {
    setSelectedModule(null);
    setMobileMenuOpen(false);

    if (type === 'module') {
      setActiveTab('learn');
      setSelectedModule(item);
    } else if (type === 'video') {
      setActiveTab('videos');
      setActiveVideoModal(item);
    } else if (type === 'setting') {
      setActiveTab('settings');
    } else if (type === 'poster') {
      setActiveTab('gallery');
      setActivePosterModal(item);
    } else if (type === 'faq') {
      setActiveTab('chat');
    }
  };

  // Authenticate Admin
  const handleAdminVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUsername === 'admin' && adminPassword === 'admin123') {
      setAdminLoginError('');
      setAdminLoggedIn(true);
      setAdminLoading(true);
      try {
        const list = await getAllSurveys();
        setAdminSurveys(list);
      } catch (err) {
        console.error("Failed pulling surveys for admin dashboard:", err);
      } finally {
        setAdminLoading(false);
      }
    } else {
      setAdminLoginError('Check your credentials. Default username: admin, password: admin123');
    }
  };

  // Submit Community Survey
  const handleSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!surveyForm.fullName || !surveyForm.villageName || !surveyForm.phoneNumber || !surveyForm.age) {
      setSurveySaveMessage("Please complete all fields.");
      return;
    }

    setSurveySubmitting(true);
    setSurveySaveMessage('');

    try {
      const responseObj = await submitSurvey({
        fullName: surveyForm.fullName.trim(),
        villageName: surveyForm.villageName.trim(),
        age: parseInt(surveyForm.age, 10) || 0,
        gender: surveyForm.gender,
        phoneNumber: surveyForm.phoneNumber.trim(),
        educationLevel: surveyForm.educationLevel,
        isSmartphoneUser: surveyForm.isSmartphoneUser === 'Yes',
        isInternetUser: surveyForm.isInternetUser === 'Yes',
        hasDigitalAwareness: surveyForm.hasDigitalAwareness === 'Yes'
      });

      // Update progress state
      const updatedBadges = [...progress.badges];
      if (!updatedBadges.includes('survey_completed')) {
        updatedBadges.push('survey_completed');
      }

      const updatedProgress: UserProgress = {
        ...progress,
        surveyCompleted: true,
        badges: updatedBadges
      };

      await syncProgress(updatedProgress);

      setSurveySaveMessage(t('surveySuccess'));
      setNotifications(prev => [
        "Congratulations! You created a Village survey entry.",
        ...prev
      ]);
    } catch (err) {
      setSurveySaveMessage("Error saving response. Please retry.");
      console.error(err);
    } finally {
      setSurveySubmitting(false);
    }
  };

  // Initialize Practice Quiz with Random Questions
  const initPracticeQuiz = () => {
    setSelectedOptionIdx(null);
    setCurrentQuestionIdx(0);
    setQuizScore(0);
    setQuizSubmitted(false);
    setQuizFinished(false);

    // Shuffle and pick 10 random questions out of our 20+ questions list
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    setActiveQuestions(shuffled.slice(0, 10));
  };

  // Advance Quiz Question
  const handleOptionSelect = (idx: number) => {
    if (quizSubmitted) return;
    setSelectedOptionIdx(idx);
  };

  const submitQuestionAnswer = () => {
    if (selectedOptionIdx === null || quizSubmitted) return;
    
    // Check score
    const currentQ = activeQuestions[currentQuestionIdx];
    if (selectedOptionIdx === currentQ.correctIndex) {
      setQuizScore(prev => prev + 1);
    }
    setQuizSubmitted(true);
  };

  const nextQuestion = () => {
    setSelectedOptionIdx(null);
    setQuizSubmitted(false);

    if (currentQuestionIdx + 1 < activeQuestions.length) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      // Quiz finished complete score calculation
      setQuizFinished(true);
      const passed = quizScore >= 7; // 70%+ pass rate
      
      const updatedScores = { ...progress.quizHighScores, "general": Math.max(progress.quizHighScores["general"] || 0, quizScore * 10) };
      const updatedBadges = [...progress.badges];
      if (passed && quizScore * 10 >= 90 && !updatedBadges.includes('quiz_champion')) {
        updatedBadges.push('quiz_champion');
      }

      syncProgress({
        ...progress,
        quizHighScores: updatedScores,
        badges: updatedBadges
      });

      // Show certification registry choice if passed & survey filled
      if (passed && (progress.surveyCompleted || surveyForm.fullName)) {
        const activeName = surveyForm.fullName || currentUser?.displayName || "Participant";
        const activeVillage = surveyForm.villageName || "Local Village";
        
        registerCertificate(activeName, activeVillage, quizScore * 10).then(cert => {
          setUnlockedCert(cert);
        });
      }
    }
  };

  // Export Submissions as CSV (for Excel)
  const handleExportCSV = () => {
    if (adminSurveys.length === 0) return;
    const headers = ["ID,Full Name,Village,Age,Gender,Phone,Education,Smartphone,Internet,Digital Literacy,Date"];
    const rows = adminSurveys.map(s => {
      return `"${s.id}","${s.fullName}","${s.villageName}",${s.age},"${s.gender}","${s.phoneNumber}","${s.educationLevel}",${s.isSmartphoneUser},${s.isInternetUser},${s.hasDigitalAwareness},"${s.createdAt}"`;
    });
    
    const csvContent = "data:text/csv;charset=utf-8," + headers.concat(rows).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `BTech_CSP_Digital_Literacy_Surveys.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Submit Feedback / Contact Form
  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackName || !feedbackMsg) return;
    setFeedbackSuccess(true);
    setTimeout(() => {
      setFeedbackSuccess(false);
      setFeedbackName('');
      setFeedbackMsg('');
    }, 4000);
  };

  // Complete a Learning Module lesson
  const toggleCompleteModule = (moduleId: string) => {
    let list = [...progress.completedModules];
    if (list.includes(moduleId)) {
      list = list.filter(id => id !== moduleId);
    } else {
      list.push(moduleId);
    }

    // Allocate badges
    const updatedBadges = [...progress.badges];
    if (moduleId === 'smartphone_basics' && !updatedBadges.includes('smartphone_master')) {
      updatedBadges.push('smartphone_master');
    }
    if (moduleId === 'digital_payments' && !updatedBadges.includes('payments_ninja')) {
      updatedBadges.push('payments_ninja');
    }

    syncProgress({
      ...progress,
      completedModules: list,
      badges: updatedBadges
    });
  };

  return (
    <div className={`${isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} min-h-screen flex flex-col font-sans transition-colors duration-300 ${isLargeText ? 'font-large-text text-lg' : 'text-sm'}`} id="applet_viewport">
      
      {/* 1. Header Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-sm px-4 lg:px-6 py-3 flex items-center justify-between" id="app_header">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
            id="mobile_hamburger_btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold shadow-xs">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h1 className="text-sm lg:text-base font-extrabold text-gray-900 dark:text-white tracking-tight leading-none">
                {t('appName')}
              </h1>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold uppercase tracking-wider block mt-0.5">
                {t('cspHeader')}
              </span>
            </div>
          </div>
        </div>

        {/* Global Instant Search Bar */}
        <div className="flex-1 max-w-xs sm:max-w-sm lg:max-w-md mx-2 sm:mx-4">
          <GlobalSearchBar
            lang={lang}
            onSelectResult={handleSearchResultSelect}
            placeholder={t('globalSearchPlaceholder')}
          />
        </div>

        {/* Dynamic Controls / Accessibility */}
        <div className="flex items-center gap-2">
          {/* Language selection dropdown with robust click & touch handling */}
          <div className="relative">
            <button 
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:border-emerald-500 cursor-pointer shadow-xs transition-colors"
              title="Change Application Language"
              id="language_selector_btn"
              aria-expanded={isLangDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{lang === 'en' ? 'ENG' : lang === 'te' ? 'తెలుగు' : lang === 'ta' ? 'தமிழ்' : 'हिन्दी'}</span>
              <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLangDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsLangDropdownOpen(false)}
                />
                <div className="absolute right-0 top-full mt-1.5 bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden z-50 min-w-[170px] py-1">
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-700/50">
                    Select Language / భాష
                  </div>
                  {[
                    { code: 'en', native: 'English', sub: 'English (IN/US)', flag: '🇺🇸' },
                    { code: 'te', native: 'తెలుగు', sub: 'Telugu', flag: '🇮🇳' },
                    { code: 'ta', native: 'தமிழ்', sub: 'Tamil', flag: '🇮🇳' },
                    { code: 'hi', native: 'हिन्दी', sub: 'Hindi', flag: '🇮🇳' }
                  ].map((item) => (
                    <button
                      key={item.code}
                      onClick={() => handleLanguageSelect(item.code as Language)}
                      className={`w-full text-left px-3 py-2 text-xs font-semibold cursor-pointer flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700/60 ${lang === item.code ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-700 dark:text-slate-300'}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.flag}</span>
                        <div>
                          <span className="block leading-none font-bold">{item.native}</span>
                          <span className="text-[10px] text-slate-400">{item.sub}</span>
                        </div>
                      </div>
                      {lang === item.code && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Large text toggle */}
          <button 
            onClick={() => setIsLargeText(!isLargeText)}
            className={`p-2 rounded-lg border cursor-pointer hidden sm:block ${isLargeText ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600' : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            title="Toggle Accessibility Large Fonts"
            id="accessibility_mode_toggle"
          >
            <Type className="w-4 h-4" />
          </button>

          {/* Dark / light switch */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
            title="Toggle Theme Mode"
            id="dark_mode_toggle"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-500" />}
          </button>

          {/* User Sign In pill */}
          {authLoading ? (
            <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
          ) : currentUser ? (
            <div className="flex items-center gap-1.5 select-none bg-slate-50 dark:bg-slate-800 pl-2 pr-1 py-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="text-[10px] font-bold text-gray-700 dark:text-gray-300 max-w-[80px] truncate">
                {currentUser.displayName || currentUser.email}
              </span>
              <button 
                onClick={logoutOfApp}
                className="p-1 text-slate-400 hover:text-red-500 cursor-pointer" 
                title="Sign Out"
                id="sign_out_button"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button 
              onClick={loginWithGoogle}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg cursor-pointer flex items-center gap-1 shadow-sm"
              id="google_signin_button"
            >
              <User className="w-3 h-3" />
              <span>Login App</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Structural Body */}
      <div className="flex flex-1 relative overflow-hidden" id="app_body_container">
        
        {/* 2. Responsive Side Navigation Bar */}
        <nav className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transform lg:translate-x-0 transition-transform duration-300 lg:static flex flex-col justify-between ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} id="sidebar_nav">
          <div className="p-4 space-y-6">
            <div className="space-y-1.5">
              {[
                { id: 'home', icon: Layout, label: t('navHome') },
                { id: 'learn', icon: BookOpen, label: t('navLearn') },
                { id: 'settings', icon: Sliders, label: t('navSettings') },
                { id: 'videos', icon: Youtube, label: t('navVideos') },
                { id: 'survey', icon: ClipboardList, label: t('navSurvey') },
                { id: 'quiz', icon: Award, label: t('navQuiz') },
                { id: 'gallery', icon: ImageIcon, label: t('navGallery') },
                { id: 'chat', icon: HelpCircle, label: t('navChat') },
                { id: 'admin', icon: Database, label: t('navAdmin') }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedModule(null); // Close module details if open
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${activeTab === tab.id ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}
                  id={`nav_tab_${tab.id}`}
                >
                  <div className="flex items-center gap-3">
                    <tab.icon className="w-4 h-4 flex-shrink-0" />
                    <span>{tab.label}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-150 ${activeTab === tab.id ? 'rotate-90 text-white' : 'text-slate-400'}`} />
                </button>
              ))}
            </div>

            {/* Accessible Reading Guidelines reminder */}
            <div className="bg-emerald-500/5 dark:bg-emerald-900/5 border border-emerald-500/10 p-3.5 rounded-xl space-y-2">
              <span className="text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-mono font-bold px-1.5 py-0.5 rounded-sm">LEARNING METRICS</span>
              <div className="space-y-1 text-[11px] font-semibold text-slate-600 dark:text-slate-400">
                <div className="flex justify-between">
                  <span>Survey Completed:</span>
                  <span className={progress.surveyCompleted ? "text-emerald-600" : "text-amber-600"}>
                    {progress.surveyCompleted ? "✓ Done" : "✗ Pending"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Modules Finished:</span>
                  <span>{progress.completedModules.length} / {learningModules.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Practice Quiz Score:</span>
                  <span className="font-mono text-emerald-600">
                    {Object.keys(progress.quizHighScores).length > 0 ? Math.max(...Object.values(progress.quizHighScores) as number[]) : 0} %
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Stamp details & Cache Sync button */}
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-[10px] text-slate-400 font-medium">
            <p className="leading-tight">{t('footerNotes')}</p>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Verified CSP Applet</span>
              </div>
              <button
                onClick={() => {
                  if ('caches' in window) {
                    caches.keys().then((names) => Promise.all(names.map((name) => caches.delete(name))));
                  }
                  window.location.reload();
                }}
                className="text-[10px] font-mono text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer flex items-center gap-1"
                title="Force refresh to fetch newest changes immediately"
              >
                <span>v3.4 Sync</span>
                <span className="text-emerald-500 font-bold">● Live</span>
              </button>
            </div>
          </div>
        </nav>

        {/* 3. Dynamic Center App Display Viewport */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6" id="app_viewport_canvas">
          
          {/* A. Global Voice Guidance Control Panel */}
          <AudioNarrator 
            textToSpeak={compilePageNarratorText()} 
            currentLanguage={lang} 
          />

          {/* B. Tab Condition Controller */}

          {/* VIEW: HOME / HERO SECTION */}
          {activeTab === 'home' && (
            <div className="space-y-8 animate-fade-in" id="view_home">
              {/* Elegant Hero Banner */}
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-800 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-teal-500/10">
                {/* Floating decor particles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/15 rounded-full blur-2xl"></div>

                <div className="relative z-10 max-w-2xl space-y-4">
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold leading-none bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-full border border-emerald-500/30 uppercase tracking-widest">
                    <Sparkles className="w-3 h-3 text-emerald-400 animate-bounce" /> {t('cspHeader')}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                    {t('heroTitle')}
                  </h2>
                  <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed font-normal">
                    {t('heroSubtitle')}
                  </p>
                  
                  {/* Visual CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => setActiveTab('learn')}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-6 py-3 rounded-xl cursor-pointer transition-colors shadow-md flex items-center gap-2"
                      id="hero_start_learning_btn"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>{t('startLearning')}</span>
                    </button>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className="bg-teal-600/70 hover:bg-teal-600 text-white text-xs font-bold px-5 py-3 rounded-xl cursor-pointer transition-colors border border-teal-400/30 flex items-center gap-2 shadow-sm"
                      id="hero_settings_btn"
                    >
                      <Sliders className="w-4 h-4 text-emerald-300" />
                      <span>{t('navSettings')}</span>
                    </button>
                    {!progress.surveyCompleted && (
                      <button
                        onClick={() => setActiveTab('survey')}
                        className="bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-5 py-3 rounded-xl cursor-pointer transition-colors border border-white/20 flex items-center gap-1.5"
                        id="hero_survey_btn"
                      >
                        <ClipboardList className="w-4 h-4 text-emerald-300" />
                        <span>{t('takeSurvey')}</span>
                      </button>
                    )}
                  </div>

                  {/* Home Page Interactive Language Selector */}
                  <div className="pt-4 border-t border-white/15 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
                      <span className="font-extrabold flex items-center gap-1.5 text-emerald-200">
                        <Globe className="w-4 h-4 text-emerald-300" />
                        {lang === 'te' ? 'మీ భాషను ఎంచుకోండి (Select Language):' : lang === 'ta' ? 'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்:' : lang === 'hi' ? 'अपनी पसंदीदा भाषा चुनें:' : 'Select Your Preferred Language:'}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-300/80">
                        {lang === 'te' ? 'వీడియోలు & ఆడియో మీ భాషలోనే వస్తాయి' : lang === 'ta' ? 'வீடியோ மற்றும் ஆடியோ உங்கள் மொழியில் ஒலிக்கும்' : lang === 'hi' ? 'वीडियो व ऑडियो इसी भाषा में चलेंगे' : 'Videos & Voice will play in this language'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { code: 'en', native: 'English', sub: 'India / Global', flag: '🇺🇸' },
                        { code: 'te', native: 'తెలుగు', sub: 'Telugu', flag: '🇮🇳' },
                        { code: 'ta', native: 'தமிழ்', sub: 'Tamil', flag: '🇮🇳' },
                        { code: 'hi', native: 'हिन्दी', sub: 'Hindi', flag: '🇮🇳' }
                      ].map((item) => (
                        <button
                          key={item.code}
                          onClick={() => handleLanguageSelect(item.code as Language)}
                          className={`px-3 py-2.5 rounded-xl font-bold text-xs flex items-center justify-between cursor-pointer transition-all shadow-sm ${
                            lang === item.code
                              ? 'bg-white text-emerald-950 font-black shadow-md ring-2 ring-emerald-400 scale-[1.02]'
                              : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-base">{item.flag}</span>
                            <div className="text-left">
                              <span className="block leading-none font-bold">{item.native}</span>
                              <span className={`text-[9px] ${lang === item.code ? 'text-emerald-700 font-semibold' : 'text-emerald-200/70'}`}>{item.sub}</span>
                            </div>
                          </div>
                          {lang === item.code && <Check className="w-4 h-4 text-emerald-700 flex-shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Badges Section */}
              <div className="space-y-4" id="badges_tracking_block">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                    {lang === 'te' ? "మీ విజయాల బ్యాడ్జ్‌లు" : lang === 'ta' ? "உங்களின் வெற்றிகரமான பேட்ஜ்கள்" : lang === 'hi' ? "आपकी उपलब्धियां और बैज" : "Your Achievement Badges"}
                  </h3>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    {progress.badges.length} / {badgesList.length} Unlocked
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {badgesList.map((badge) => {
                    const isUnlocked = progress.badges.includes(badge.id);
                    return (
                      <div 
                        key={badge.id}
                        className={`p-4 rounded-2xl border flex flex-col items-center text-center space-y-3 transition-opacity ${isUnlocked ? `${badge.color} border-slate-200/60 dark:border-slate-800/60 opacity-100` : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-40 grayscale'}`}
                      >
                        <div className="w-10 h-10 bg-white/80 dark:bg-slate-800/80 rounded-full flex items-center justify-center shadow-xs">
                          {badge.iconName === 'FileCheck' && <ClipboardList className="w-5 h-5" />}
                          {badge.iconName === 'Smartphone' && <Smartphone className="w-5 h-5" />}
                          {badge.iconName === 'CreditCard' && <Layout className="w-5 h-5" />}
                          {badge.iconName === 'Award' && <Trophy className="w-5 h-5" />}
                        </div>
                        <div>
                          <h4 className="text-xs font-extrabold">{badge.title[lang]}</h4>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">{badge.description[lang]}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Learning Progress Tracking Widget / Next actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="next_actions_overview">
                
                {/* 1. Learning center widget */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-5 rounded-2xl space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="p-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                      <BookOpen className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Step 1</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 dark:text-slate-200">Study Modules</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Visit mobile, payment and safety guidelines complete with audio voice support.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('learn')}
                    className="w-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Read Lessons</span>
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* 2. Survey card */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-5 rounded-2xl space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`p-2 rounded-lg ${progress.surveyCompleted ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>
                      <ClipboardList className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Step 2</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 dark:text-slate-200">Village Survey</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Register your basic household digital ownership data to secure B.Tech project credit.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('survey')}
                    className="w-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{progress.surveyCompleted ? "View Survey Status" : "Take Survey Form"}</span>
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                </div>

                {/* 3. Certificate status */}
                <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-5 rounded-2xl space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
                      <Award className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Step 3</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 dark:text-slate-200">Practice Quiz & Certificate</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Qualify with a minimum 70% in the interactive test to obtain your official downloadable certificate.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('quiz')}
                    className="w-full bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Attempt Test Quiz</span>
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>

              {/* Live Notifications block */}
              <div className="bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-2" id="home_notif_panel">
                <h4 className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5 uppercase font-mono tracking-wider">
                  <Bell className="w-4 h-4 text-emerald-500" /> Rural Awareness Notices
                </h4>
                <div className="space-y-1.5 mt-2">
                  {notifications.map((notif, index) => (
                    <div key={index} className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0 animate-ping" />
                      <span>{notif}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* VIEW: LEARNING MODULES CLASSROOM */}
          {activeTab === 'learn' && (
            <div className="space-y-6 animate-fade-in" id="view_learning">
              {!selectedModule ? (
                // Overarching modules list Grid
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-xl lg:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                      {t('navLearn')} {t('categorySmartphone')}
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Select any of the primary curriculum topics to learn with full voice aid guidance.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {learningModules.map((module) => {
                      const isCompleted = progress.completedModules.includes(module.id);
                      return (
                        <div 
                          key={module.id} 
                          className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
                        >
                          <div className="space-y-3">
                            <div className="flex justify-between items-start">
                              <span className={`p-3 rounded-2xl bg-gradient-to-br ${module.color} text-white`}>
                                {(module.icon === 'PhoneCall' || module.icon === 'Smartphone') && <Smartphone className="w-5 h-5" />}
                                {module.icon === 'Globe' && <Globe className="w-5 h-5" />}
                                {module.icon === 'CreditCard' && <Layout className="w-5 h-5" />}
                                {module.icon === 'MessageSquare' && <MessageSquare className="w-5 h-5" />}
                                {module.icon === 'Landmark' && <Landmark className="w-5 h-5" />}
                                {module.icon === 'ShieldAlert' && <ShieldCheck className="w-5 h-5" />}
                                {module.icon === 'Sliders' && <Sliders className="w-5 h-5" />}
                                {module.icon === 'Mic' && <Mic className="w-5 h-5" />}
                                {module.icon === 'Ticket' && <Ticket className="w-5 h-5" />}
                                {module.icon === 'Wheat' && <Sparkles className="w-5 h-5" />}
                                {!['PhoneCall', 'Smartphone', 'Globe', 'CreditCard', 'MessageSquare', 'Landmark', 'ShieldAlert', 'Sliders', 'Mic', 'Ticket', 'Wheat'].includes(module.icon) && <BookOpen className="w-5 h-5" />}
                              </span>

                              <button
                                onClick={() => toggleCompleteModule(module.id)}
                                className={`flex items-center gap-1 border px-2 py-1 rounded-lg text-[10px] font-bold cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 ${isCompleted ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-600' : 'bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-500'}`}
                              >
                                <Check className="w-3 h-3" />
                                <span>{isCompleted ? "Completed" : "Mark Done"}</span>
                              </button>
                            </div>

                            <div>
                              <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">{module.title[lang]}</h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed truncate-2-lines h-10">
                                {module.sub[lang]}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 w-full pt-1">
                            <button
                              onClick={() => setSelectedModule(module)}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-1"
                            >
                              <span>Read Lesson</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                setQuizTargetChapter(module.id);
                                setQuizTargetLevel(1);
                                setActiveTab('quiz');
                              }}
                              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-xs"
                            >
                              <Trophy className="w-3.5 h-3.5" />
                              <span>Quiz (3 Levels)</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                // Active single chapter step-by-step layout
                <div className="space-y-6" id="active_chapter_view">
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => setSelectedModule(null)}
                      className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                    >
                      ← Back to Chapters list
                    </button>
                    
                    <span className="text-xs bg-slate-100 dark:bg-slate-800 font-mono font-bold px-2.5 py-1 rounded-lg text-slate-600 dark:text-slate-300">
                      Module Status: {progress.completedModules.includes(selectedModule.id) ? "✓ Completed Lesson" : "✗ Not marked complete yet"}
                    </span>
                  </div>

                  {/* Header visual */}
                  <div className="bg-slate-100 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800 space-y-1">
                    <h2 className="text-lg font-extrabold text-slate-800 dark:text-slate-100">{selectedModule.title[lang]}</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{selectedModule.sub[lang]}</p>
                  </div>

                  {/* Steps mapping */}
                  <div className="space-y-4">
                    {selectedModule.steps.map((step, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/65 p-5 rounded-2xl relative overflow-hidden flex flex-col md:flex-row gap-4 items-start">
                        {/* Number counter */}
                        <div className="w-8 h-8 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 rounded-full font-bold font-mono text-sm flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </div>
                        
                        <div className="space-y-1 flex-1">
                          <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                            {step.title[lang]}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                            {step.desc[lang]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Dedicated Chapter Quiz Lesson Banner with 3 Levels (10 Qs Each) */}
                  <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 p-5 sm:p-6 rounded-3xl space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="p-3 bg-amber-500 text-white rounded-2xl shadow-sm">
                          <Trophy className="w-6 h-6" />
                        </span>
                        <div>
                          <h3 className="font-extrabold text-slate-800 dark:text-white text-base">
                            {lang === 'te' ? 'ఈ పాఠం క్విజ్ పరీక్ష (3 స్థాయిలు - ప్రతి స్థాయిలో 10 ప్రశ్నలు)' :
                             lang === 'ta' ? 'இந்த பாடத்திற்கான வினாடி வினா (3 நிலைகள் - தலா 10 கேள்விகள்)' :
                             lang === 'hi' ? 'इस पाठ की क्विज परीक्षा (3 स्तर - प्रत्येक में 10 प्रश्न)' :
                             'Chapter Quiz Lesson (3 Graded Levels • 10 Questions Each)'}
                          </h3>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            {lang === 'te' ? 'ప్రతి స్థాయిలో 10 ప్రశ్నలు ఉంటాయి. 80%+ మార్కులు సాధించి స్టార్స్ మరియు సర్టిఫికెట్ అన్‌లాక్ చేయండి.' :
                             lang === 'ta' ? 'ஒவ்வொரு மட்டத்திலும் 10 கேள்விகள் உள்ளன. நட்சத்திரங்களை வெல்லுங்கள்.' :
                             lang === 'hi' ? 'प्रत्येक लेवल में 10 प्रश्न हैं। 80%+ स्कोर करके स्टार्स और डिजिटल सर्टिफिकेट हासिल करें।' :
                             'Test what you learned in this chapter. Score 80%+ to unlock stars and certificates.'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { lvl: 1 as const, name: { en: "Level 1: Beginner", te: "స్థాయి 1: ప్రాథమికం", ta: "நிலை 1: தொடக்க நிலை", hi: "लेवल 1: बुनियादी ज्ञान" }, desc: "10 Questions • Basics & Buttons" },
                        { lvl: 2 as const, name: { en: "Level 2: Intermediate", te: "స్థాయి 2: మధ్యస్థం", ta: "நிலை 2: இடைநிலை", hi: "लेवल 2: व्यावहारिक अभ्यास" }, desc: "10 Questions • Everyday Tasks" },
                        { lvl: 3 as const, name: { en: "Level 3: Safety Mastery", te: "స్థాయి 3: భద్రతా నిపుణత", ta: "நிலை 3: பாதுகாப்பு விழிப்புணர்வு", hi: "लेवल 3: साइबर सुरक्षा निपुणता" }, desc: "10 Questions • Scam Prevention" },
                      ].map((l) => (
                        <button
                          key={l.lvl}
                          onClick={() => {
                            setQuizTargetChapter(selectedModule.id);
                            setQuizTargetLevel(l.lvl);
                            setActiveTab('quiz');
                          }}
                          className="p-3.5 bg-white dark:bg-slate-900 border border-amber-500/30 hover:border-amber-500 rounded-2xl text-left transition-all hover:shadow-md cursor-pointer group flex flex-col justify-between"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono font-bold uppercase text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                                10 Questions
                              </span>
                              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                            </div>
                            <h4 className="font-extrabold text-xs text-slate-800 dark:text-slate-100 mt-1">
                              {l.name[lang]}
                            </h4>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400">
                              {l.desc}
                            </p>
                          </div>
                          <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 pt-2 block">
                            Start Level {l.lvl} Quiz →
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Village Safety tips block */}
                  <div className="bg-amber-500/5 dark:bg-amber-500/5 border border-amber-500/20 p-5 rounded-3xl space-y-2">
                    <h3 className="text-xs font-bold text-amber-700 dark:text-amber-400 font-mono tracking-wider uppercase">
                      Village Safety tips
                    </h3>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-semibold">
                      {selectedModule.tips[lang].map((tip, idx) => (
                        <li key={idx}>{tip}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-wrap justify-between items-center gap-3 pt-3">
                    <button
                      onClick={() => {
                        setSelectedModule(null);
                      }}
                      className="text-xs text-slate-500 hover:slate-700 font-bold border border-slate-200 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:border-slate-700 cursor-pointer"
                    >
                      Back to Classroom
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setQuizTargetChapter(selectedModule.id);
                          setQuizTargetLevel(1);
                          setActiveTab('quiz');
                        }}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer shadow-sm transition-colors flex items-center gap-1.5"
                      >
                        <Trophy className="w-4 h-4" />
                        <span>Practice Chapter Quiz (3 Levels)</span>
                      </button>

                      <button
                        onClick={() => toggleCompleteModule(selectedModule.id)}
                        className={`font-bold text-xs px-5 py-2.5 rounded-xl cursor-pointer shadow-sm transition-colors ${progress.completedModules.includes(selectedModule.id) ? 'bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}
                      >
                        {progress.completedModules.includes(selectedModule.id) ? "Mark Chapter Incomplete" : "Mark Chapter Completed & Earn Badge"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* VIEW: USER REGISTRATION / COMMUNITY DIGITAL SURVEY */}
          {activeTab === 'survey' && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-5 lg:p-7 rounded-3xl shadow-xs space-y-6 animate-fade-in" id="view_survey">
              <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-5">
                <h2 className="text-xl lg:text-2xl font-extrabold text-slate-800 dark:text-white flex items-center gap-2">
                  <ClipboardList className="w-5.5 h-6 text-emerald-600" />
                  {t('surveyTitle')}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">
                  {t('surveySub')}
                </p>
              </div>

              {surveySaveMessage && (
                <div className={`p-4 rounded-xl text-xs font-semibold ${surveySaveMessage.includes('successfully') ? 'bg-emerald-500/10 text-emerald-700' : 'bg-amber-500/10 text-amber-700'}`}>
                  {surveySaveMessage}
                </div>
              )}

              {progress.surveyCompleted ? (
                // Survey already filled state display
                <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-emerald-500/10 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/15 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 dark:text-slate-100">Survey Completed successfully</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto leading-relaxed">
                      You have registered with full village details. You are now fully qualified to attempt the practice quiz and download your project Certificate.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('quiz')}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl cursor-pointer shadow-sm transition-colors inline-block"
                  >
                    Go to Knowledge Quiz
                  </button>
                </div>
              ) : (
                // Form layout
                <form onSubmit={handleSurveySubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs font-bold text-slate-600 dark:text-slate-400">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="block">{t('fullName')} *</label>
                      <input
                        type="text"
                        required
                        value={surveyForm.fullName}
                        onChange={(e) => setSurveyForm({ ...surveyForm, fullName: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 dark:text-slate-100 focus:outline-emerald-500"
                        placeholder="e.g. Ramesh Kumar"
                      />
                    </div>

                    {/* Village Name */}
                    <div className="space-y-1.5">
                      <label className="block">{t('villageName')} *</label>
                      <input
                        type="text"
                        required
                        value={surveyForm.villageName}
                        onChange={(e) => setSurveyForm({ ...surveyForm, villageName: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 dark:text-slate-100 focus:outline-emerald-500"
                        placeholder="e.g. Madanapalle"
                      />
                    </div>

                    {/* Age */}
                    <div className="space-y-1.5">
                      <label className="block">{t('age')} *</label>
                      <input
                        type="number"
                        required
                        min="1"
                        max="120"
                        value={surveyForm.age}
                        onChange={(e) => setSurveyForm({ ...surveyForm, age: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 dark:text-slate-100 focus:outline-emerald-500"
                        placeholder="e.g. 42"
                      />
                    </div>

                    {/* Gender */}
                    <div className="space-y-1.5">
                      <label className="block">{t('gender')}</label>
                      <select
                        value={surveyForm.gender}
                        onChange={(e) => setSurveyForm({ ...surveyForm, gender: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 dark:text-slate-100 focus:outline-emerald-500 cursor-pointer"
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="block">{t('phoneNumber')} *</label>
                      <input
                        type="tel"
                        required
                        minLength={8}
                        maxLength={15}
                        value={surveyForm.phoneNumber}
                        onChange={(e) => setSurveyForm({ ...surveyForm, phoneNumber: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 dark:text-slate-100 focus:outline-emerald-500"
                        placeholder="Mobile number e.g. 9845120301"
                      />
                    </div>

                    {/* Education Level */}
                    <div className="space-y-1.5">
                      <label className="block">{t('educationLevel')}</label>
                      <select
                        value={surveyForm.educationLevel}
                        onChange={(e) => setSurveyForm({ ...surveyForm, educationLevel: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 dark:text-slate-100 focus:outline-emerald-500 cursor-pointer"
                      >
                        <option>Non-literate</option>
                        <option>Primary School</option>
                        <option>Secondary School (10th)</option>
                        <option>Intermediate (12th)</option>
                        <option>Graduate (B.Sc / B.A)</option>
                        <option>Graduate (B.Tech / Medical)</option>
                      </select>
                    </div>

                    {/* Smartphone Question */}
                    <div className="space-y-1.5 sm:col-span-2 border-t border-slate-50 dark:border-slate-800/50 pt-4">
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">{t('isSmartphoneUser')}</label>
                      <div className="flex gap-4">
                        {['Yes', 'No'].map(o => (
                          <label key={o} className="flex items-center gap-1.5 font-medium cursor-pointer text-slate-800 dark:text-slate-200">
                            <input
                              type="radio"
                              name="hasPhone"
                              value={o}
                              checked={surveyForm.isSmartphoneUser === o}
                              onChange={() => setSurveyForm({ ...surveyForm, isSmartphoneUser: o })}
                              className="accent-emerald-500 w-4.5 h-4.5 cursor-pointer"
                            />
                            <span>{lang === 'te' ? (o === 'Yes' ? 'అవును' : 'కాదు') : lang === 'ta' ? (o === 'Yes' ? 'ஆம்' : 'இல்லை') : lang === 'hi' ? (o === 'Yes' ? 'हाँ' : 'नहीं') : o}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Internet Question */}
                    <div className="space-y-1.5 sm:col-span-2 border-t border-slate-100/30 pt-3">
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">{t('isInternetUser')}</label>
                      <div className="flex gap-4">
                        {['Yes', 'No'].map(o => (
                          <label key={o} className="flex items-center gap-1.5 font-medium cursor-pointer text-slate-800 dark:text-slate-200">
                            <input
                              type="radio"
                              name="usesNet"
                              value={o}
                              checked={surveyForm.isInternetUser === o}
                              onChange={() => setSurveyForm({ ...surveyForm, isInternetUser: o })}
                              className="accent-emerald-500 w-4.5 h-4.5 cursor-pointer"
                            />
                            <span>{lang === 'te' ? (o === 'Yes' ? 'అవును' : 'కాదు') : lang === 'ta' ? (o === 'Yes' ? 'ஆம்' : 'இல்லை') : lang === 'hi' ? (o === 'Yes' ? 'हाँ' : 'नहीं') : o}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Digital Literacy Question */}
                    <div className="space-y-1.5 sm:col-span-2 border-t border-slate-100/30 pt-3">
                      <label className="block text-slate-700 dark:text-slate-300 font-bold mb-1">{t('hasDigitalAwareness')}</label>
                      <div className="flex gap-4">
                        {['Yes', 'No'].map(o => (
                          <label key={o} className="flex items-center gap-1.5 font-medium cursor-pointer text-slate-800 dark:text-slate-200">
                            <input
                              type="radio"
                              name="hasUpi"
                              value={o}
                              checked={surveyForm.hasDigitalAwareness === o}
                              onChange={() => setSurveyForm({ ...surveyForm, hasDigitalAwareness: o })}
                              className="accent-emerald-500 w-4.5 h-4.5 cursor-pointer"
                            />
                            <span>{lang === 'te' ? (o === 'Yes' ? 'అవును' : 'కాదు') : lang === 'ta' ? (o === 'Yes' ? 'ஆம்' : 'இல்லை') : lang === 'hi' ? (o === 'Yes' ? 'हाँ' : 'नहीं') : o}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Submission and Save button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="submit"
                      disabled={surveySubmitting}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl cursor-pointer transition-colors shadow-md flex items-center justify-center gap-2 w-full sm:w-auto"
                      id="survey_form_submit_btn"
                    >
                      {surveySubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Saving to Secure Storage...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{t('submitSurvey')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* VIEW: PRACTICE KNOWLEDGE QUIZ (CHAPTERS & 3 LEVELS - 10 QS PER LEVEL) */}
          {activeTab === 'quiz' && (
            <div className="space-y-6 animate-fade-in" id="view_quiz">
              <ChapterQuizHub
                lang={lang}
                userProgress={progress}
                onUpdateProgress={(updated) => syncProgress(updated)}
                initialChapterId={quizTargetChapter}
                initialLevel={quizTargetLevel}
                onUnlockCert={(score) => {
                  const activeName = surveyForm.fullName || currentUser?.displayName || "Rural Digital Learner";
                  const activeVillage = surveyForm.villageName || "Gram Panchayat";
                  registerCertificate(activeName, activeVillage, score).then(cert => {
                    setUnlockedCert(cert);
                  });
                }}
                onNavigateToLearnModule={(modId) => {
                  const found = learningModules.find(m => m.id === modId);
                  if (found) {
                    setSelectedModule(found);
                    setActiveTab('learn');
                  }
                }}
              />

              {unlockedCert && (
                <div className="p-5 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/10 border border-emerald-500/20 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="p-3 bg-emerald-500 text-white rounded-2xl shadow-xs">
                      <Award className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-800 dark:text-white">
                        Digital Literacy Certificate Ready!
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Certified for <span className="font-bold text-slate-800 dark:text-slate-200">{unlockedCert.userName}</span> ({unlockedCert.villageName}) with {unlockedCert.score}% Score.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => downloadCertificatePDF({
                      userName: unlockedCert.userName,
                      villageName: unlockedCert.villageName,
                      score: unlockedCert.score,
                      date: unlockedCert.date,
                      sha: unlockedCert.sha
                    })}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl cursor-pointer shadow-md inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Certificate PDF</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* VIEW: IMAGE GALLERY */}
          {activeTab === 'gallery' && (
            <div className="space-y-6 animate-fade-in" id="view_gallery">
              <div className="space-y-1">
                <h2 className="text-xl lg:text-2xl font-extrabold text-slate-800 dark:text-white flex items-center gap-2 leading-none">
                  <ImageIcon className="w-5.5 h-6 text-emerald-600" />
                  {t('galleryTitle')}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-2">
                  {t('gallerySub')}
                </p>
              </div>

              {/* Filters */}
              <div className="flex gap-2.5 overflow-x-auto border-b border-gray-100 dark:border-gray-800 pb-3 scrollbar-none">
                {['all', 'payments', 'security', 'smartphone', 'government', 'communication', 'accessibility', 'services', 'agriculture'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setPosterFilter(f)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize cursor-pointer transition-colors flex-shrink-0 ${posterFilter === f ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Dynamic Poster listing */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {awarenessPosters
                  .filter(p => posterFilter === 'all' || p.category === posterFilter)
                  .map((p) => (
                    <div 
                      key={p.id}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
                    >
                      <div>
                        <div 
                          onClick={() => setActivePosterModal(p)}
                          className="h-48 sm:h-52 overflow-hidden relative bg-slate-100 dark:bg-slate-950 cursor-pointer"
                        >
                          <img 
                            src={p.imageUrl} 
                            alt={p.title[lang]} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[9px] font-bold font-mono px-2 py-0.5 rounded-sm uppercase tracking-wider">
                            {p.category} poster
                          </span>
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-1.5">
                            <Eye className="w-4 h-4" />
                            <span>Click to Zoom & View</span>
                          </div>
                        </div>

                        <div className="p-4 space-y-1.5">
                          <h4 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                            {p.title[lang]}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                            {p.description[lang]}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0 border-t border-slate-50 dark:border-slate-800/10 flex justify-between items-center mt-2">
                        <button 
                          onClick={() => setActivePosterModal(p)}
                          className="text-emerald-600 dark:text-emerald-400 text-xs font-bold hover:underline cursor-pointer flex items-center gap-1.5"
                        >
                          <Eye className="w-3.5 h-3.5" /> View Infographic
                        </button>
                        
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const text = `🚨 *${p.title[lang]}*\n\n${p.description[lang]}\n\n📞 National Cyber Crime Helpline: 1930\nShared from Gramin Digital Saksharta Hub`;
                              window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
                            }}
                            title="Share on WhatsApp"
                            className="p-1 rounded-md text-emerald-600 hover:bg-emerald-50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                          <a 
                            href={p.imageUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            download={`${p.id}_poster.jpg`}
                            className="text-slate-400 hover:text-slate-600 text-xs font-semibold flex items-center gap-1"
                          >
                            <Download className="w-3.5 h-3.5" /> HD
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* VIEW: SMARTPHONE SETTINGS SIMULATOR */}
          {activeTab === 'settings' && (
            <SmartphoneSettingsGuide 
              lang={lang} 
              onNavigateToLearnModule={(modId) => {
                const found = learningModules.find(m => m.id === modId);
                if (found) {
                  setSelectedModule(found);
                  setActiveTab('learn');
                }
              }}
            />
          )}

          {/* VIEW: VIDEO TUTORIALS MAPS */}
          {activeTab === 'videos' && (
            <div className="space-y-6 animate-fade-in" id="view_videos">
              <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-5">
                <h2 className="text-xl lg:text-2xl font-extrabold text-slate-800 dark:text-white flex items-center gap-2 leading-none">
                  <Youtube className="w-6 h-6 text-red-600" />
                  {t('videoTitle')}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-2">
                  {t('videoSub')}
                </p>
              </div>

              {/* Search and Category Filter panel */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={videoSearch}
                    onChange={(e) => setVideoSearch(e.target.value)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-850 dark:text-white focus:outline-emerald-500"
                    placeholder="Search video tutorials (e.g. UPI, Aadhaar, DigiLocker, Calls, Hotspot, Settings)..."
                  />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
                  {['All', 'Smartphone', 'Internet', 'Payments', 'Communication', 'Government', 'Safety', 'Accessibility', 'Services', 'Agriculture'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setVideoFilter(f)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors flex-shrink-0 ${videoFilter === f ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Embedded video elements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoTutorials
                  .filter((v) => {
                    const matchesCategory = videoFilter === 'All' || v.category === videoFilter;
                    const matchesText = v.title[lang].toLowerCase().includes(videoSearch.toLowerCase()) || v.description[lang].toLowerCase().includes(videoSearch.toLowerCase());
                    return matchesCategory && matchesText;
                  })
                  .map((video) => (
                    <div 
                      key={video.id}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                    >
                      <div>
                        <div 
                          onClick={() => setActiveVideoModal(video)}
                          className="aspect-video w-full bg-slate-950 relative group/thumb cursor-pointer overflow-hidden"
                        >
                          <img 
                            src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                            alt={video.title[lang]}
                            className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="w-14 h-14 bg-red-600 group-hover/thumb:bg-red-700 text-white rounded-2xl flex items-center justify-center shadow-xl transition-transform group-hover/thumb:scale-110">
                              <Play className="w-7 h-7 fill-white translate-x-0.5" />
                            </div>
                          </div>
                          <div className="absolute bottom-2 right-2 bg-black/85 text-white text-[11px] font-mono px-2 py-0.5 rounded-md font-bold shadow-xs">
                            {video.duration}
                          </div>
                        </div>

                        <div className="p-4 space-y-1.5">
                          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                            <span className="uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                              {video.category}
                            </span>
                            <span>Duration: {video.duration}</span>
                          </div>
                          
                          <h4 
                            onClick={() => setActiveVideoModal(video)}
                            className="font-extrabold text-slate-800 dark:text-slate-100 text-sm mt-1.5 cursor-pointer hover:text-emerald-600 transition-colors"
                          >
                            {video.title[lang]}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 lines-clamp-3 leading-relaxed">
                            {video.description[lang]}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 pt-0 border-t border-slate-50 dark:border-slate-800/10 flex flex-wrap justify-between items-center gap-2 mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setActiveVideoModal(video)}
                            className="text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs transition-colors"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" /> Watch Video
                          </button>

                          <a
                            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold text-slate-500 hover:text-red-600 dark:hover:text-red-400 flex items-center gap-1 transition-colors px-2 py-1"
                            title="Open directly on YouTube"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>YouTube</span>
                          </a>
                        </div>

                        <button
                          onClick={() => handleToggleVideoSpeech(video)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
                            speakingVideoId === video.id
                              ? 'bg-amber-500 text-white shadow-xs animate-pulse'
                              : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100'
                          }`}
                        >
                          {speakingVideoId === video.id ? (
                            <>
                              <VolumeX className="w-3.5 h-3.5" />
                              <span>Stop Voice</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3.5 h-3.5" />
                              <span>Listen Audio ({lang.toUpperCase()})</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* VIEW: HELP CENTER FAQ, REAL-WORLD SOLUTIONS & AI ASSISTANT */}
          {activeTab === 'chat' && (
            <HelpFaqAssistant
              lang={lang}
              faqList={faqData}
              feedbackSuccess={feedbackSuccess}
              onSubmitFeedback={(data) => {
                setFeedbackName(data.name);
                setFeedbackMsg(data.message);
                setFeedbackSuccess(true);
                setTimeout(() => setFeedbackSuccess(false), 5000);
              }}
            />
          )}

          {/* VIEW: ADMIN dashboard */}
          {activeTab === 'admin' && (
            <div className="space-y-6 animate-fade-in" id="view_admin">
              {!adminLoggedIn ? (
                // Sign in portal
                <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border border-slate-250/65 dark:border-slate-800/80 p-6 sm:p-8 rounded-3xl space-y-6">
                  <div className="text-center space-y-1.5">
                    <span className="p-3 bg-emerald-500/10 text-emerald-600 rounded-full inline-block">
                      <Lock className="w-6 h-6" />
                    </span>
                    <h2 className="text-lg font-extrabold text-slate-800 dark:text-white">{t('adminLogin')}</h2>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                      Credentials required. Default value under development: <strong>admin</strong> / <strong>admin123</strong>
                    </p>
                  </div>

                  {adminLoginError && (
                    <div className="bg-red-500/10 text-red-600 p-3.5 rounded-xl text-xs font-semibold">
                      {adminLoginError}
                    </div>
                  )}

                  <form onSubmit={handleAdminVerify} className="space-y-4">
                    <div className="space-y-1.5 text-xs font-bold text-slate-500 dark:text-slate-400">
                      <label>{t('adminUser')}</label>
                      <input
                        type="text"
                        required
                        value={adminUsername}
                        onChange={(e) => setAdminUsername(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400"
                        placeholder="e.g. admin"
                      />
                    </div>

                    <div className="space-y-1.5 text-xs font-bold text-slate-500 dark:text-slate-400">
                      <label>{t('adminPass')}</label>
                      <input
                        type="password"
                        required
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3.5 py-2.5 font-medium text-slate-800 dark:text-slate-100 placeholder-slate-400"
                        placeholder="e.g. admin123"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 rounded-xl cursor-pointer shadow-md transition-colors"
                      id="admin_signin_submit_btn"
                    >
                      {t('adminLoginBtn')}
                    </button>
                  </form>
                </div>
              ) : (
                // Dashboard view containing visualizations
                <div className="space-y-6" id="admin_dashboard_content">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-100 dark:border-gray-800 pb-5 gap-4">
                    <div>
                      <h2 className="text-xl lg:text-2xl font-extrabold text-slate-800 dark:text-white flex items-center gap-2 leading-none">
                        <Database className="w-5.5 h-6 text-emerald-600" />
                        {t('adminTitle')}
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-semibold">
                        {t('adminSub')}
                      </p>
                    </div>

                    <div className="flex gap-2 w-full sm:w-auto">
                      <button
                        onClick={handleExportCSV}
                        disabled={adminSurveys.length === 0}
                        className="flex-1 sm:flex-initial bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold px-4 py-2.5 rounded-xl text-xs cursor-pointer transition-colors"
                        id="admin_csv_btn"
                      >
                        {t('exportExcel')}
                      </button>
                      <button
                        onClick={() => {
                          setAdminExportingPdf(true);
                          try {
                            downloadAdminReportPDF(adminSurveys);
                          } catch (err) {
                            console.error("PDF Export error:", err);
                          } finally {
                            setAdminExportingPdf(false);
                          }
                        }}
                        disabled={adminSurveys.length === 0 || adminExportingPdf}
                        className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold px-4 py-2.5 rounded-xl text-xs cursor-pointer transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                        id="admin_pdf_btn"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{adminExportingPdf ? "Generating..." : t('exportPdf')}</span>
                      </button>
                    </div>
                  </div>

                  {/* Summary Metric cards */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4" id="coordinator_stats_panel">
                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl flex flex-col justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Total Surveys</span>
                      <span className="text-2xl font-black text-emerald-600 dark:text-white font-mono">{adminSurveys.length}</span>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl flex flex-col justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Active Villages</span>
                      <span className="text-2xl font-black text-blue-500 dark:text-white font-mono">
                        {Array.from(new Set(adminSurveys.map(s => s.villageName))).length}
                      </span>
                    </div>

                    <div className="col-span-2 md:col-span-1 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl flex flex-col justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Database Sync state</span>
                      <span className="text-2xl font-black text-amber-500 dark:text-white font-mono flex items-center gap-1.5 leading-none">
                        <CheckCircle2 className="w-5.5 h-6 text-emerald-500" />
                        <span>{isFirebaseConnected ? "Firebase Live" : "Offline Storage"}</span>
                      </span>
                    </div>
                  </div>

                  {/* SVG Charts Area */}
                  {adminLoading ? (
                    <div className="py-20 flex justify-center items-center">
                      <Loader2 className="w-10 h-10 animate-spin text-emerald-600" />
                    </div>
                  ) : (
                    <DashboardCharts 
                      surveys={adminSurveys} 
                      currentLanguage={lang} 
                    />
                  )}

                  {/* Survey Responses table overview */}
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs">
                    <div className="p-4 border-b border-slice-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                      <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-xs uppercase font-mono tracking-wider">
                        Raw Village Registrations List
                      </h3>
                    </div>

                    {adminSurveys.length === 0 ? (
                      <div className="p-6 text-center text-xs text-slate-400">No data records stored inside storage.</div>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="bg-slate-100/50 dark:bg-slate-950 font-bold text-slate-500 font-mono tracking-wider border-b border-slate-200 dark:border-slate-800">
                              <th className="p-3.5">Name</th>
                              <th className="p-3.5">Village</th>
                              <th className="p-3.5">Age/Gender</th>
                              <th className="p-3.5">Phone</th>
                              <th className="p-3.5">Smartphone/Internet</th>
                              <th className="p-3.5">Pre-Awareness</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {adminSurveys.map((r) => (
                              <tr key={r.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300 font-semibold">
                                <td className="p-3.5 font-bold">{r.fullName}</td>
                                <td className="p-3.5">{r.villageName}</td>
                                <td className="p-3.5">{r.age} Yrs / {r.gender}</td>
                                <td className="p-3.5 font-mono text-slate-500">{r.phoneNumber}</td>
                                <td className="p-3.5 font-mono">
                                  {r.isSmartphoneUser ? "Smartphone ✓" : "✗ No Smart"} / {r.isInternetUser ? "Net ✓" : "✗ No Net"}
                                </td>
                                <td className="p-3.5">
                                  <span className={`px-2 py-0.5 rounded-sm font-mono text-[10px] font-bold ${r.hasDigitalAwareness ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>
                                    {r.hasDigitalAwareness ? "Yes" : "No"}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

        </main>
      </div>

      {/* Video Focus Theatre Modal */}
      {activeVideoModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActiveVideoModal(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl space-y-4 p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  {activeVideoModal.category} • {activeVideoModal.duration}
                </span>
                <h3 className="font-extrabold text-white text-base mt-1">
                  {activeVideoModal.title[lang]}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleVideoSpeech(activeVideoModal)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer ${
                    speakingVideoId === activeVideoModal.id
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                  }`}
                >
                  {speakingVideoId === activeVideoModal.id ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span>Stop Voice</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Listen Spoken Audio ({lang.toUpperCase()})</span>
                    </>
                  )}
                </button>

                <button 
                  onClick={() => setActiveVideoModal(null)}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoModal.youtubeId}?autoplay=1&rel=0`}
                title={activeVideoModal.title[lang]}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800">
              <a
                href={`https://www.youtube.com/watch?v=${activeVideoModal.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold bg-red-600/20 hover:bg-red-600/30 text-red-400 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer border border-red-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in YouTube App / Web</span>
              </a>

              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified Educational Tutorial • Lang: {lang.toUpperCase()}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-medium bg-slate-800/40 p-3 rounded-xl border border-slate-800">
              {activeVideoModal.description[lang]}
            </p>
          </div>
        </div>
      )}

      {/* Poster Zoom & Detail Modal */}
      {activePosterModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActivePosterModal(null)}
        >
          <div 
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  {activePosterModal.category} INFOGRAPHIC
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if ('speechSynthesis' in window) {
                      window.speechSynthesis.cancel();
                      const ut = new SpeechSynthesisUtterance(`${activePosterModal.title[lang]}. ${activePosterModal.description[lang]}`);
                      if (lang === 'hi') ut.lang = 'hi-IN';
                      else if (lang === 'te') ut.lang = 'te-IN';
                      else if (lang === 'ta') ut.lang = 'ta-IN';
                      else ut.lang = 'en-IN';
                      window.speechSynthesis.speak(ut);
                    }
                  }}
                  title="Read out loud"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setActivePosterModal(null)}
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto p-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950">
                <img 
                  src={activePosterModal.imageUrl} 
                  alt={activePosterModal.title[lang]} 
                  className="w-full max-h-[320px] object-cover"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-base">
                  {activePosterModal.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                  {activePosterModal.description[lang]}
                </p>
              </div>

              {/* Official Helplines Banner */}
              <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-xs font-mono">
                <div className="bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-xl text-rose-700 dark:text-rose-400 font-bold flex items-center gap-1.5">
                  <span>🚨 Cyber Crime: 1930</span>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 p-2.5 rounded-xl text-blue-700 dark:text-blue-400 font-bold flex items-center gap-1.5">
                  <span>🛡️ Emergency SOS: 112</span>
                </div>
              </div>

              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 dark:text-emerald-400">Village Awareness Notice</span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Share this safety guideline with village self-help groups (SHG), farmers, and youth clubs to prevent cyber fraud and educate digital learners.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const shareText = `🚨 *${activePosterModal.title[lang]}*\n\n${activePosterModal.description[lang]}\n\n📞 National Cyber Crime Helpline: 1930 | Emergency: 112\nShared from Gramin Digital Saksharta Hub`;
                      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
                    }}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Notice</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActivePosterModal(null)}
                    className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href={activePosterModal.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={`${activePosterModal.id}_poster.jpg`}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5" /> HD Poster
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
