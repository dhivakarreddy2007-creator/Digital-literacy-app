import React, { useState, useEffect } from 'react';
import { 
  Trophy, Star, CheckCircle2, XCircle, ArrowRight, ArrowLeft, 
  RotateCcw, Sparkles, Volume2, ShieldCheck, Award, BookOpen,
  Smartphone, CreditCard, Landmark, FileText, AlertTriangle, 
  Globe, MessageSquare, Sliders, Mic, Ticket, Lock, Unlock, Play
} from 'lucide-react';
import { Language, UserProgress, QuizQuestion } from '../types';
import { chapterQuizMetaList, getChapterLevelQuestions, ChapterQuizMeta } from '../services/chapterQuizData';

interface ChapterQuizHubProps {
  lang: Language;
  userProgress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  onUnlockCert?: (score: number, chapterTitle?: string) => void;
  initialChapterId?: string | null;
  initialLevel?: (1 | 2 | 3) | null;
  onNavigateToLearnModule?: (moduleId: string) => void;
}

export const ChapterQuizHub: React.FC<ChapterQuizHubProps> = ({
  lang,
  userProgress,
  onUpdateProgress,
  onUnlockCert,
  initialChapterId,
  initialLevel,
  onNavigateToLearnModule
}) => {
  // Navigation states: 'hub' | 'levels' | 'quiz' | 'result'
  const [viewState, setViewState] = useState<'hub' | 'levels' | 'quiz' | 'result'>('hub');
  const [selectedChapter, setSelectedChapter] = useState<ChapterQuizMeta>(chapterQuizMetaList[0]);
  const [selectedLevel, setSelectedLevel] = useState<1 | 2 | 3>(1);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  // Quiz active session states
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [levelScore, setLevelScore] = useState<number>(0);

  // If initial props are passed (e.g. from learning module link)
  useEffect(() => {
    if (initialChapterId) {
      const found = chapterQuizMetaList.find(c => c.chapterId === initialChapterId);
      if (found) {
        setSelectedChapter(found);
        if (initialLevel) {
          startLevelQuiz(found, initialLevel);
        } else {
          setViewState('levels');
        }
      }
    }
  }, [initialChapterId, initialLevel]);

  // Compute stats across all chapters
  const totalLevels = chapterQuizMetaList.length * 3;
  let passedLevelsCount = 0;
  let totalStarsCollected = 0;

  chapterQuizMetaList.forEach(ch => {
    [1, 2, 3].forEach(lvl => {
      const key = `${ch.chapterId}_lvl${lvl}`;
      const score = userProgress.quizHighScores[key] || 0;
      if (score >= 70) passedLevelsCount++;
      if (score >= 90) totalStarsCollected += 3;
      else if (score >= 70) totalStarsCollected += 2;
      else if (score >= 50) totalStarsCollected += 1;
    });
  });

  // Helper to start level quiz
  const startLevelQuiz = (chapter: ChapterQuizMeta, level: 1 | 2 | 3) => {
    setSelectedChapter(chapter);
    setSelectedLevel(level);
    const questions = getChapterLevelQuestions(chapter.chapterId, level);
    setActiveQuestions(questions);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setLevelScore(0);
    setViewState('quiz');
  };

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const submitAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    const currentQ = activeQuestions[currentIdx];
    if (selectedOption === currentQ.correctIndex) {
      setLevelScore(prev => prev + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const advanceNextQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);

    if (currentIdx + 1 < activeQuestions.length) {
      setCurrentIdx(prev => prev + 1);
    } else {
      // Finished level
      const finalScorePercent = (levelScore + (selectedOption === activeQuestions[currentIdx].correctIndex ? 1 : 0)) * 10;
      const key = `${selectedChapter.chapterId}_lvl${selectedLevel}`;
      const currentHigh = userProgress.quizHighScores[key] || 0;
      const newHigh = Math.max(currentHigh, finalScorePercent);

      const updatedScores = {
        ...userProgress.quizHighScores,
        [key]: newHigh,
        "general": Math.max(userProgress.quizHighScores["general"] || 0, finalScorePercent)
      };

      const updatedBadges = [...userProgress.badges];
      if (finalScorePercent >= 70 && !updatedBadges.includes(`badge_${selectedChapter.chapterId}`)) {
        updatedBadges.push(`badge_${selectedChapter.chapterId}`);
      }
      if (finalScorePercent >= 90 && !updatedBadges.includes('quiz_champion')) {
        updatedBadges.push('quiz_champion');
      }

      onUpdateProgress({
        ...userProgress,
        quizHighScores: updatedScores,
        badges: updatedBadges
      });

      setViewState('result');

      // Trigger certificate choice if passed
      if (finalScorePercent >= 70 && onUnlockCert) {
        onUnlockCert(finalScorePercent, selectedChapter.title[lang]);
      }
    }
  };

  // Text-to-speech speaker
  const speakQuestion = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (lang === 'hi') utterance.lang = 'hi-IN';
      else if (lang === 'te') utterance.lang = 'te-IN';
      else if (lang === 'ta') utterance.lang = 'ta-IN';
      else utterance.lang = 'en-IN';
      window.speechSynthesis.speak(utterance);
    }
  };

  // Helper icon render
  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case 'Smartphone': return <Smartphone className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'MessageSquare': return <MessageSquare className={className} />;
      case 'CreditCard': return <CreditCard className={className} />;
      case 'Landmark': return <Landmark className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Shield': return <ShieldCheck className={className} />;
      case 'AlertTriangle': return <AlertTriangle className={className} />;
      case 'Sliders': return <Sliders className={className} />;
      case 'Mic': return <Mic className={className} />;
      case 'Ticket': return <Ticket className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  // =========================================================================
  // VIEW: LEVEL QUIZ ACTIVE
  // =========================================================================
  if (viewState === 'quiz') {
    const q = activeQuestions[currentIdx];
    const progressPercent = ((currentIdx + 1) / activeQuestions.length) * 100;

    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-fade-in" id="active_chapter_quiz_session">
        {/* Top Control Bar */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl flex items-center justify-between shadow-xs">
          <button
            onClick={() => setViewState('levels')}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Exit Level
          </button>

          <div className="text-center">
            <span className="text-[11px] font-bold font-mono uppercase text-emerald-600 dark:text-emerald-400">
              {selectedChapter.title[lang]}
            </span>
            <div className="text-xs font-extrabold text-slate-800 dark:text-slate-200">
              Level {selectedLevel} • Question {currentIdx + 1} of 10
            </div>
          </div>

          <div className="flex items-center gap-1 text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg">
            <Trophy className="w-3.5 h-3.5" /> Score: {levelScore}/10
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Box */}
        {q && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 space-y-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2.5 py-1 rounded-md">
                {q.category.toUpperCase()} • 10-QUESTION SPRINT
              </span>
              <button
                onClick={() => speakQuestion(q.question[lang])}
                title="Read question out loud"
                className="p-2 rounded-xl text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
              >
                <Volume2 className="w-4.5 h-4.5" />
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
              {q.question[lang]}
            </h3>

            {/* Options List */}
            <div className="space-y-3 pt-2">
              {q.options[lang].map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === q.correctIndex;

                let optStyle = "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:border-emerald-500 hover:bg-slate-50 dark:hover:bg-slate-800/80";

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optStyle = "bg-emerald-500/10 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold";
                  } else if (isSelected) {
                    optStyle = "bg-rose-500/10 border-rose-500 text-rose-800 dark:text-rose-300 font-bold";
                  } else {
                    optStyle = "opacity-50 border-slate-200 dark:border-slate-800 text-slate-500";
                  }
                } else if (isSelected) {
                  optStyle = "bg-emerald-500/15 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold shadow-xs";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswerSubmitted}
                    className={`w-full text-left p-4 rounded-2xl border flex items-center gap-3.5 transition-all cursor-pointer text-xs sm:text-sm ${optStyle}`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs font-mono shrink-0 ${isSelected || (isAnswerSubmitted && isCorrect) ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-relaxed">{opt}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation Section */}
            {isAnswerSubmitted && (
              <div className="bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20 p-4 sm:p-5 rounded-2xl space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-indigo-400 uppercase font-mono tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Safe Practice Explanation
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  {q.explanation[lang]}
                </p>
              </div>
            )}

            {/* Footer Buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              {!isAnswerSubmitted ? (
                <button
                  onClick={submitAnswer}
                  disabled={selectedOption === null}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl cursor-pointer transition-colors shadow-md"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={advanceNextQuestion}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm px-7 py-3 rounded-xl cursor-pointer transition-colors flex items-center gap-2 shadow-md"
                >
                  <span>{currentIdx + 1 === activeQuestions.length ? "Finish Level Results" : "Next Question"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // VIEW: LEVEL RESULTS SCREEN
  // =========================================================================
  if (viewState === 'result') {
    const passed = levelScore >= 7; // 70%+ pass
    const starsEarned = levelScore >= 9 ? 3 : levelScore >= 7 ? 2 : levelScore >= 5 ? 1 : 0;

    return (
      <div className="max-w-xl mx-auto py-8 text-center space-y-6 animate-fade-in" id="chapter_quiz_result_view">
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-emerald-500/10 blur-2xl pointer-events-none rounded-full" />

          {/* Trophy Avatar */}
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 text-white rounded-full flex items-center justify-center mx-auto shadow-lg relative">
            <Trophy className="w-12 h-12" />
            {passed && (
              <span className="absolute -top-1 -right-1 bg-amber-400 text-white p-1.5 rounded-full shadow-md animate-bounce">
                <Sparkles className="w-4 h-4 fill-current" />
              </span>
            )}
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
              {selectedChapter.title[lang]} • Level {selectedLevel}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {passed ? "Level Mastered Successfully!" : "Good Effort! Practice to Pass"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              You scored <span className="font-extrabold text-slate-900 dark:text-white text-base">{levelScore}</span> out of 10 questions ({levelScore * 10}%).
            </p>
          </div>

          {/* Stars display */}
          <div className="flex items-center justify-center gap-2 py-1">
            {[1, 2, 3].map((s) => (
              <Star 
                key={s}
                className={`w-8 h-8 ${s <= starsEarned ? 'text-amber-400 fill-amber-400 scale-110' : 'text-slate-200 dark:text-slate-700'}`} 
              />
            ))}
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
            {passed ? (
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                🎉 Passing score achieved! You unlocked Level {Math.min(3, selectedLevel + 1)} and updated your Village Digital Literacy score.
              </span>
            ) : (
              <span>
                To pass this level and unlock the next badge, you need at least 7/10 (70%). Review the chapter steps and give it another try!
              </span>
            )}
          </div>

          {/* Next Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {passed && selectedLevel < 3 && (
              <button
                onClick={() => startLevelQuiz(selectedChapter, (selectedLevel + 1) as 1 | 2 | 3)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-5 rounded-xl cursor-pointer transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Continue to Level {selectedLevel + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => startLevelQuiz(selectedChapter, selectedLevel)}
              className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm py-3 px-5 rounded-xl cursor-pointer transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retake Level {selectedLevel}</span>
            </button>

            <button
              onClick={() => setViewState('levels')}
              className="flex-1 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-xs sm:text-sm py-3 px-5 rounded-xl cursor-pointer transition-colors"
            >
              Back to Chapter
            </button>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW: SELECTED CHAPTER 3 LEVELS SELECTOR
  // =========================================================================
  if (viewState === 'levels') {
    return (
      <div className="space-y-6 max-w-4xl mx-auto animate-fade-in" id="chapter_levels_view">
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setViewState('hub')}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-emerald-600 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> All Chapters
          </button>

          {onNavigateToLearnModule && (
            <button
              onClick={() => onNavigateToLearnModule(selectedChapter.chapterId)}
              className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" /> Read Chapter Lessons
            </button>
          )}
        </div>

        {/* Chapter Header Banner */}
        <div className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-r ${selectedChapter.color} text-white shadow-lg space-y-3`}>
          <div className="flex items-center gap-3">
            <span className="p-3 bg-white/20 backdrop-blur-xs rounded-2xl">
              {renderIcon(selectedChapter.icon, "w-7 h-7")}
            </span>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">Chapter Quiz Bank</span>
              <h2 className="text-xl sm:text-2xl font-black">{selectedChapter.title[lang]}</h2>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-white/90 max-w-2xl font-medium leading-relaxed">
            Test your knowledge across 3 difficulty levels. Each level contains 10 questions crafted with village scenarios, explanations, and instant feedback.
          </p>
        </div>

        {/* 3 Level Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {selectedChapter.levels.map((lvl) => {
            const key = `${selectedChapter.chapterId}_lvl${lvl.level}`;
            const highScore = userProgress.quizHighScores[key] || 0;
            const isCompleted = highScore >= 70;
            const stars = highScore >= 90 ? 3 : highScore >= 70 ? 2 : highScore >= 50 ? 1 : 0;

            // Level unlocking logic: Level 1 always unlocked. Level 2 unlocked if Level 1 attempted/passed or open practice.
            const isUnlocked = lvl.level === 1 || true; // Keep all open for friendly rural access!

            return (
              <div
                key={lvl.level}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-5 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2.5 py-0.5 rounded-full">
                      Level {lvl.level}
                    </span>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3].map((s) => (
                        <Star 
                          key={s} 
                          className={`w-3.5 h-3.5 ${s <= stars ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                    {lvl.name[lang]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {lvl.description[lang]}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-400">10 Questions</span>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400">
                      Best: {highScore}%
                    </span>
                  </div>

                  <button
                    onClick={() => startLevelQuiz(selectedChapter, lvl.level)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl cursor-pointer transition-colors shadow-xs flex items-center justify-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{highScore > 0 ? "Retake Level" : "Start Level"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW: ALL CHAPTERS DIRECTORY (DEFAULT HUB)
  // =========================================================================
  const filteredChapters = activeCategoryFilter === 'all'
    ? chapterQuizMetaList
    : chapterQuizMetaList.filter(c => c.category === activeCategoryFilter);

  return (
    <div className="space-y-6 animate-fade-in" id="quiz_chapters_hub">
      {/* Top Banner with Stats */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full">
            <Trophy className="w-3.5 h-3.5" /> 3 Levels & 10 Questions Per Level
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight">
            Chapter-Wise Digital Quiz & Certification
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-medium leading-relaxed">
            Practice each chapter in 3 graded levels (Beginner, Intermediate, Advanced). Master all levels with 70%+ to earn digital literacy badges and verifiable certificates.
          </p>
        </div>

        {/* Quick Stats Pill */}
        <div className="flex gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
          <div className="text-center px-2">
            <div className="text-lg font-black text-amber-400 flex items-center justify-center gap-1">
              <Star className="w-4 h-4 fill-amber-400" /> {totalStarsCollected}
            </div>
            <div className="text-[10px] text-white/70 uppercase font-mono">Stars</div>
          </div>
          <div className="w-[1px] bg-white/20" />
          <div className="text-center px-2">
            <div className="text-lg font-black text-emerald-400">{passedLevelsCount}</div>
            <div className="text-[10px] text-white/70 uppercase font-mono">Levels Won</div>
          </div>
          <div className="w-[1px] bg-white/20" />
          <div className="text-center px-2">
            <div className="text-lg font-black text-white">{chapterQuizMetaList.length}</div>
            <div className="text-[10px] text-white/70 uppercase font-mono">Chapters</div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'all', label: 'All Chapters' },
          { id: 'smartphone', label: 'Smartphone' },
          { id: 'payments', label: 'UPI & Banking' },
          { id: 'security', label: 'Cyber Safety & Scams' },
          { id: 'government', label: 'Govt & Agriculture' },
          { id: 'communication', label: 'WhatsApp & Social' }
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveCategoryFilter(f.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all whitespace-nowrap ${
              activeCategoryFilter === f.id
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChapters.map((ch) => {
          // Check stars and completion for this chapter
          let chStars = 0;
          let chPassedLevels = 0;
          [1, 2, 3].forEach(lvl => {
            const score = userProgress.quizHighScores[`${ch.chapterId}_lvl${lvl}`] || 0;
            if (score >= 70) chPassedLevels++;
            if (score >= 90) chStars += 3;
            else if (score >= 70) chStars += 2;
            else if (score >= 50) chStars += 1;
          });

          return (
            <div
              key={ch.chapterId}
              onClick={() => {
                setSelectedChapter(ch);
                setViewState('levels');
              }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:shadow-lg hover:border-emerald-500/40 transition-all cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`p-3 rounded-2xl bg-gradient-to-br ${ch.color} text-white shadow-xs group-hover:scale-105 transition-transform`}>
                    {renderIcon(ch.icon, "w-5 h-5")}
                  </span>
                  <div className="flex items-center gap-1 bg-amber-500/10 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-md text-[11px] font-bold font-mono">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {chStars}/9 Stars
                  </div>
                </div>

                <h3 className="font-extrabold text-slate-900 dark:text-white text-base leading-snug group-hover:text-emerald-600 transition-colors">
                  {ch.title[lang]}
                </h3>

                {/* 3 Level Progress Indicators */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {[1, 2, 3].map((lvlNum) => {
                    const score = userProgress.quizHighScores[`${ch.chapterId}_lvl${lvlNum}`] || 0;
                    const passed = score >= 70;

                    return (
                      <div
                        key={lvlNum}
                        className={`p-2 rounded-xl text-center border text-[10px] font-bold ${
                          passed
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400'
                            : score > 0
                            ? 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-400'
                            : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-400'
                        }`}
                      >
                        <div>Lvl {lvlNum}</div>
                        <div className="font-mono">{score > 0 ? `${score}%` : '10 Qs'}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <span>Explore 3 Levels</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
