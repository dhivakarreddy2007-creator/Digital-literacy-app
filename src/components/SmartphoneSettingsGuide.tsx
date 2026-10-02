import React, { useState } from 'react';
import { 
  Sliders, Smartphone, Type, Volume2, Wifi, Radio, Shield, 
  Trash2, Globe, Battery, AlertTriangle, Check, ArrowRight, 
  Search, Sun, Moon, VolumeX, Sparkles, RefreshCw, Key,
  Lock, Eye, PhoneCall, Play, Bell, Info, Compass, ChevronRight,
  HelpCircle, CheckCircle2, ChevronDown
} from 'lucide-react';
import { Language } from '../types';
import { 
  phoneModelsDatabase, 
  PhoneModelInfo, 
  PhoneSettingItem, 
  searchPhoneModels 
} from '../services/phoneSettingsData';

interface SmartphoneSettingsGuideProps {
  lang: Language;
  onNavigateToLearnModule?: (moduleId: string) => void;
}

export default function SmartphoneSettingsGuide({ lang, onNavigateToLearnModule }: SmartphoneSettingsGuideProps) {
  // Model Search & Selection States
  const [modelSearchInput, setModelSearchInput] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<PhoneModelInfo>(phoneModelsDatabase[0]); // Default to OnePlus 9R
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState<boolean>(false);

  // Settings Feature Search & Filter States
  const [featureSearchQuery, setFeatureSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedSettingId, setExpandedSettingId] = useState<string | null>(null);

  // Spoken Audio State
  const [isSpeakingId, setIsSpeakingId] = useState<string | null>(null);

  // Interactive Simulator States
  const [simulatedFontSize, setSimulatedFontSize] = useState<number>(18);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [ringtoneVolume, setRingtoneVolume] = useState<number>(85);
  const [isPlayingRingtone, setIsPlayingRingtone] = useState<boolean>(false);
  const [wifiEnabled, setWifiEnabled] = useState<boolean>(true);
  const [hotspotEnabled, setHotspotEnabled] = useState<boolean>(false);
  const [hotspotName] = useState<string>("Village_Smart_Phone");
  const [hotspotPassword] = useState<string>("Gram@2026");
  const [selectedSim, setSelectedSim] = useState<'sim1' | 'sim2'>('sim1');
  const [simulatedPin, setSimulatedPin] = useState<string>('');
  const [pinConfirmed, setPinConfirmed] = useState<boolean>(false);
  const [storageCleaned, setStorageCleaned] = useState<boolean>(false);
  const [cleanedSize, setCleanedSize] = useState<string>('0 MB');
  const [batterySaverOn, setBatterySaverOn] = useState<boolean>(false);
  const [sosTested, setSosTested] = useState<boolean>(false);

  // Filtered phone models based on Search Bar 1
  const matchingModels = searchPhoneModels(modelSearchInput);

  // Filtered settings for selected model based on Search Bar 2 and Category
  const filteredSettings = selectedModel.settings.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    if (!matchesCategory) return false;

    if (!featureSearchQuery.trim()) return true;
    const q = featureSearchQuery.toLowerCase();
    const nameMatch = item.name[lang].toLowerCase().includes(q) || item.name.en.toLowerCase().includes(q);
    const pathMatch = item.menuPath.toLowerCase().includes(q);
    const explMatch = item.simpleExplanation[lang].toLowerCase().includes(q);
    const kwMatch = item.keywords.some(k => k.toLowerCase().includes(q));

    return nameMatch || pathMatch || explMatch || kwMatch;
  });

  // Sound play simulation
  const handleTestRingtone = () => {
    setIsPlayingRingtone(true);
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15);
        osc.frequency.setValueAtTime(1174.66, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.8);
      }
    } catch (e) {
      // Audio fallback
    }
    setTimeout(() => {
      setIsPlayingRingtone(false);
    }, 1500);
  };

  // Storage clean simulator
  const handleCleanStorage = () => {
    setCleanedSize('2.14 GB');
    setStorageCleaned(true);
  };

  // PIN keypad press
  const handleKeypadPress = (num: string) => {
    if (simulatedPin.length < 4) {
      const newPin = simulatedPin + num;
      setSimulatedPin(newPin);
      if (newPin.length === 4) {
        setPinConfirmed(true);
      }
    }
  };

  const handleKeypadClear = () => {
    setSimulatedPin('');
    setPinConfirmed(false);
  };

  // Speech Narration of Setting
  const speakSetting = (setting: PhoneSettingItem) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeakingId === setting.id) {
      window.speechSynthesis.cancel();
      setIsSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const textToSpeak = `${setting.name[lang]}. How to find it: ${setting.menuPath}. Explanation: ${setting.simpleExplanation[lang]}. Safety Tip: ${setting.ruralSafetyTip[lang]}`;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const langCodes: Record<Language, string> = {
      en: 'en-IN',
      te: 'te-IN',
      ta: 'ta-IN',
      hi: 'hi-IN'
    };
    utterance.lang = langCodes[lang] || 'en-IN';
    utterance.rate = 0.9;

    utterance.onend = () => setIsSpeakingId(null);
    utterance.onerror = () => setIsSpeakingId(null);

    setIsSpeakingId(setting.id);
    window.speechSynthesis.speak(utterance);
  };

  const tUI = {
    en: {
      heading: "Smartphone Model Settings & Visual Guide",
      subheading: "Type your exact mobile company name or model (like OnePlus 9R, Realme, Oppo, Samsung, Redmi) to see exact settings menu paths and plain-English explanations.",
      searchBar1Label: "Search Bar 1: Type Your Phone Company or Model",
      searchBar1Placeholder: "e.g. OnePlus 9R, Realme Narzo, Oppo A58, Samsung M15, Redmi Note...",
      searchBar2Label: "Search Bar 2: Search Specific Setting or Feature",
      searchBar2Placeholder: "Search settings e.g. hotspot, font size, battery, screen lock, storage...",
      quickPillsTitle: "Popular Mobile Models in Villages:",
      currentPhoneBadge: "Active Selected Phone:",
      osSkin: "Software Skin:",
      totalSettings: "settings available for this model",
      howToFind: "Exact Steps on Your Mobile:",
      whyLabel: "Why & When to Use It:",
      safetyTipLabel: "Village Safety Tip:",
      listenAudio: "Listen Audio Explanation",
      stopAudio: "Stop Voice",
      interactivePractice: "Interactive Settings Simulator (Try It Safely Below)",
      categories: {
        all: "All Settings",
        display: "Display & Font",
        network: "Hotspot & SIM",
        security: "Screen Lock & Security",
        storage: "Storage Cleaner",
        battery: "Battery Saver",
        emergency: "Emergency SOS 112",
        privacy: "App Permissions"
      }
    },
    te: {
      heading: "మీ మొబైల్ మోడల్ సెట్టింగ్స్ & వివరణల గైడ్",
      subheading: "మీ ఫోన్ కంపెనీ పేరు (ఉదా: OnePlus 9R, Realme, Oppo, Samsung, Redmi) టైప్ చేయండి. ఆ ఫోన్‌లో ఏ సెట్టింగ్ ఎక్కడ ఉంటుందో సరళమైన తెలుగులో సులభంగా తెలుసుకోండి.",
      searchBar1Label: "సెర్చ్ బార్ 1: మీ ఫోన్ కంపెనీ లేదా మోడల్ పేరు టైప్ చేయండి",
      searchBar1Placeholder: "ఉదా: OnePlus 9R, Realme Narzo, Oppo, Samsung M15, Redmi...",
      searchBar2Label: "సెర్చ్ బార్ 2: కావలసిన సెట్టింగ్ పేరు కోసం వెతకండి",
      searchBar2Placeholder: "ఉదా: హాట్‌స్పాట్, పెద్ద అక్షరాలు, బ్యాటరీ, స్క్రీన్ లాక్, మెమరీ...",
      quickPillsTitle: "గ్రామాల్లో ఎక్కువగా వాడే మోడల్స్:",
      currentPhoneBadge: "ఎంచుకున్న ఫోన్ మోడల్:",
      osSkin: "ఆపరేటింగ్ సిస్టమ్:",
      totalSettings: "సెట్టింగ్స్ వివరణలు అందుబాటులో ఉన్నాయి",
      howToFind: "మీ మొబైల్‌లో వెళ్లాల్సిన దారి:",
      whyLabel: "ఎందుకు మరియు ఎప్పుడు వాడాలి:",
      safetyTipLabel: "గ్రామస్తుల భద్రతా చిట్కా:",
      listenAudio: "తెలుగులో వాయిస్ వినండి",
      stopAudio: "వాయిస్ ఆపండి",
      interactivePractice: "లైవ్ సెట్టింగ్స్ సిమ్యులేటర్ (ఇక్కడే ప్రాక్టీస్ చేయండి)",
      categories: {
        all: "అన్ని సెట్టింగ్స్",
        display: "డిస్‌ప్లే & అక్షరాలు",
        network: "హాట్‌స్పాట్ & సిమ్",
        security: "స్క్రీన్ లాక్ & పిన్",
        storage: "మెమరీ క్లీనర్",
        battery: "బ్యాటరీ సేవర్",
        emergency: "అత్యవసర SOS 112",
        privacy: "యాప్ పర్మిషన్లు"
      }
    },
    ta: {
      heading: "உங்கள் மொபைல் மாடல் அமைப்புகள் & எளிய வழிகாட்டி",
      subheading: "உங்கள் போன் மாடல் பெயரை (OnePlus 9R, Realme, Oppo, Samsung, Redmi) தட்டச்சு செய்து, அந்த போனில் உள்ள அமைப்புகளை எளிய தமிழில் அறிந்து கொள்ளுங்கள்.",
      searchBar1Label: "தேடல் 1: உங்கள் போன் கம்பெனி அல்லது மாடல் பெயரை தட்டச்சு செய்யவும்",
      searchBar1Placeholder: "எ.கா: OnePlus 9R, Realme Narzo, Oppo, Samsung M15, Redmi...",
      searchBar2Label: "தேடல் 2: தேவையான அமைப்பைத் தேடுங்கள்",
      searchBar2Placeholder: "எ.கா: ஹாட்ஸ்பாட், எழுத்து அளவு, பேட்டரி, திரைப் பூட்டு, மெமரி...",
      quickPillsTitle: "அதிகம் பயன்படுத்தப்படும் போன்கள்:",
      currentPhoneBadge: "தேர்ந்தெடுக்கப்பட்ட போன்:",
      osSkin: "இயங்குதளம்:",
      totalSettings: "அமைப்புகள் உள்ளன",
      howToFind: "போனில் செல்ல வேண்டிய வழி:",
      whyLabel: "எப்போது பயன்படுத்த வேண்டும்:",
      safetyTipLabel: "பாதுகாப்பு குறிப்பு:",
      listenAudio: "தமிழில் விளக்கம் கேளுங்கள்",
      stopAudio: "ஒலியை நிறுத்துக",
      interactivePractice: "நேரடி பயிற்சி சிமுலேட்டர் (இங்கு செய்து பாருங்கள்)",
      categories: {
        all: "அனைத்து அமைப்புகள்",
        display: "எழுத்து & திரை",
        network: "ஹாட்ஸ்பாட் & சிம்",
        security: "திரைப் பூட்டு & PIN",
        storage: "மெமரி சுத்தம்",
        battery: "பேட்டரி சேவர்",
        emergency: "அவசர உதவி SOS 112",
        privacy: "செயலி அனுமதிகள்"
      }
    },
    hi: {
      heading: "स्मार्टफोन मॉडल सेटिंग्स और सरल गाइड",
      subheading: "अपनी मोबाइल कंपनी का नाम या मॉडल (जैसे OnePlus 9R, Realme, Oppo, Samsung, Redmi) टाइप करें और जानें कि आपके फोन में हर सेटिंग कहाँ है और उसका क्या मतलब है।",
      searchBar1Label: "सर्च बार 1: अपनी फोन कंपनी या मॉडल का नाम टाइप करें",
      searchBar1Placeholder: "जैसे: OnePlus 9R, Realme Narzo, Oppo, Samsung M15, Redmi...",
      searchBar2Label: "सर्च बार 2: किसी विशेष सेटिंग को खोजें",
      searchBar2Placeholder: "जैसे: हॉटस्पॉट, बड़े फॉन्ट, बैटरी, स्क्रीन लॉक, स्टोरेज...",
      quickPillsTitle: "गांवों में सबसे ज्यादा चलने वाले फोन:",
      currentPhoneBadge: "चुना हुआ फोन मॉडल:",
      osSkin: "ऑपरेटिंग सिस्टम:",
      totalSettings: "सेटिंग्स के विकल्प उपलब्ध हैं",
      howToFind: "फोन में जाने का सही रास्ता:",
      whyLabel: "क्यों और कब इस्तेमाल करें:",
      safetyTipLabel: "सुरक्षा सलाह:",
      listenAudio: "आवाज में पूरी बात सुनें",
      stopAudio: "आवाज बंद करें",
      interactivePractice: "इंटरैक्टिव सेटिंग्स अभ्यास (सुरक्षित रूप से चलाकर देखें)",
      categories: {
        all: "सभी सेटिंग्स",
        display: "डिस्प्ले व बड़े अक्षर",
        network: "हॉटस्पॉट व सिम",
        security: "स्क्रीन लॉक व पिन",
        storage: "स्टोरेज सफाई",
        battery: "बैटरी सेवर",
        emergency: "इमरजेंसी SOS 112",
        privacy: "ऐप परमिशन"
      }
    }
  };

  const ui = tUI[lang] || tUI.en;

  return (
    <div className="space-y-8 animate-fade-in" id="smartphone_settings_section">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-6 sm:p-8 rounded-3xl shadow-md space-y-3">
        <div className="flex items-center gap-3">
          <span className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
            <Smartphone className="w-7 h-7 text-white" />
          </span>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {ui.heading}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 font-medium">
              {ui.subheading}
            </p>
          </div>
        </div>

        {/* DUAL SEARCH BARS SECTION */}
        <div className="pt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* SEARCH BAR 1: PHONE COMPANY & MODEL SEARCH BAR */}
          <div className="space-y-1.5 relative">
            <label className="text-xs font-bold text-emerald-100 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-300" />
              <span>{ui.searchBar1Label}</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={modelSearchInput}
                onChange={(e) => {
                  setModelSearchInput(e.target.value);
                  setIsModelDropdownOpen(true);
                }}
                onFocus={() => setIsModelDropdownOpen(true)}
                placeholder={ui.searchBar1Placeholder}
                className="w-full pl-10 pr-10 py-3 bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-semibold rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                id="search_phone_model_input"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              {modelSearchInput && (
                <button
                  onClick={() => {
                    setModelSearchInput('');
                    setIsModelDropdownOpen(false);
                  }}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Model Suggestions Dropdown */}
            {isModelDropdownOpen && matchingModels.length > 0 && (
              <div className="absolute z-30 left-0 right-0 top-full mt-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl max-h-60 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
                {matchingModels.map((m) => (
                  <button
                    key={m.modelName}
                    onClick={() => {
                      setSelectedModel(m);
                      setModelSearchInput(m.modelName);
                      setIsModelDropdownOpen(false);
                    }}
                    className="w-full text-left p-3 hover:bg-emerald-50 dark:hover:bg-slate-800 flex items-center justify-between text-xs font-bold text-slate-800 dark:text-slate-100 transition-colors cursor-pointer"
                  >
                    <div>
                      <span className="font-extrabold text-emerald-700 dark:text-emerald-400 mr-2">[{m.brand}]</span>
                      <span>{m.modelName}</span>
                      <p className="text-[10px] text-slate-400 font-normal">{m.osVersion}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SEARCH BAR 2: SETTINGS OPTION / FEATURE SEARCH BAR */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-emerald-100 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-amber-300" />
              <span>{ui.searchBar2Label}</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={featureSearchQuery}
                onChange={(e) => setFeatureSearchQuery(e.target.value)}
                placeholder={ui.searchBar2Placeholder}
                className="w-full pl-10 pr-10 py-3 bg-white text-slate-800 placeholder-slate-400 text-xs sm:text-sm font-semibold rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                id="search_setting_feature_input"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              {featureSearchQuery && (
                <button
                  onClick={() => setFeatureSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quick Phone Brand / Model recommendation chips */}
        <div className="pt-2 border-t border-white/15">
          <span className="text-[11px] font-bold text-emerald-100 mr-2">{ui.quickPillsTitle}</span>
          <div className="inline-flex flex-wrap gap-1.5 mt-1">
            {phoneModelsDatabase.slice(0, 7).map((m) => (
              <button
                key={m.modelName}
                onClick={() => {
                  setSelectedModel(m);
                  setModelSearchInput(m.modelName);
                  setIsModelDropdownOpen(false);
                }}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  selectedModel.modelName === m.modelName 
                    ? 'bg-amber-400 text-slate-900 shadow-xs' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
              >
                {m.brand === 'OnePlus' && '🔴 '}
                {m.brand === 'Samsung' && '🔵 '}
                {m.brand === 'Realme' && '🟡 '}
                {m.brand === 'Redmi / Xiaomi' && '🟠 '}
                {m.brand === 'Oppo' && '🟢 '}
                {m.brand === 'Vivo' && '🟣 '}
                {m.brand === 'Motorola' && '⚪ '}
                {m.modelName.split('/')[0].trim()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ACTIVE SELECTED PHONE INFO BANNER */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-5 rounded-3xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 flex items-center justify-center font-extrabold text-lg">
            📱
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold rounded-md">
                {ui.currentPhoneBadge}
              </span>
              <span className="text-xs text-slate-400 font-semibold">
                {selectedModel.brand}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              {selectedModel.modelName}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {selectedModel.description[lang]} • <strong className="text-slate-700 dark:text-slate-300">{ui.osSkin} {selectedModel.osVersion}</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 px-4 py-2 rounded-xl">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>{filteredSettings.length} {ui.totalSettings}</span>
        </div>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex gap-2 overflow-x-auto border-b border-slate-200 dark:border-slate-800 pb-3 scrollbar-none">
        {Object.entries(ui.categories).map(([catKey, label]) => (
          <button
            key={catKey}
            onClick={() => setActiveCategory(catKey)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === catKey
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* DISPLAY MODEL SETTINGS LIST WITH DETAILED EXPLANATIONS */}
      <div className="space-y-4">
        {filteredSettings.length === 0 ? (
          <div className="p-8 text-center bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 space-y-2">
            <Sliders className="w-8 h-8 text-slate-400 mx-auto" />
            <h4 className="font-bold text-slate-700 dark:text-slate-200 text-sm">No settings matching your search</h4>
            <p className="text-xs text-slate-500">Try typing "font", "hotspot", "battery", or "screen lock" in Search Bar 2 above.</p>
          </div>
        ) : (
          filteredSettings.map((item, index) => {
            const isExpanded = expandedSettingId === item.id || filteredSettings.length <= 4;
            const isSpeaking = isSpeakingId === item.id;

            return (
              <div 
                key={item.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 shadow-xs transition-all hover:border-emerald-500/40 space-y-3"
              >
                {/* Setting Card Top Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        Setting #{index + 1}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        {item.category.toUpperCase()}
                      </span>
                    </div>
                    <h4 className="text-base font-black text-slate-900 dark:text-slate-100">
                      {item.name[lang]}
                    </h4>
                  </div>

                  {/* Audio Listen Button */}
                  <button
                    onClick={() => speakSetting(item)}
                    className={`flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer ${
                      isSpeaking
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100'
                    }`}
                  >
                    {isSpeaking ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5" />
                        <span>{ui.stopAudio}</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>{ui.listenAudio}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* EXACT MENU PATH DISPLAY */}
                <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200 break-all">
                    <span className="text-slate-400 font-sans mr-1">{ui.howToFind}</span>
                    <strong className="text-emerald-600 dark:text-emerald-400">{item.menuPath}</strong>
                  </div>
                </div>

                {/* SIMPLE EXPLANATION IN EASY TERMINOLOGY */}
                <div className="pl-3 border-l-2 border-emerald-500 space-y-1">
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold leading-relaxed">
                    {item.simpleExplanation[lang]}
                  </p>
                </div>

                {/* WHY USE IT & SAFETY TIP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-blue-500/5 border border-blue-500/15 p-3 rounded-xl space-y-1">
                    <span className="font-extrabold text-blue-700 dark:text-blue-400 flex items-center gap-1">
                      <HelpCircle className="w-3.5 h-3.5" />
                      {ui.whyLabel}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                      {item.whyUseIt[lang]}
                    </p>
                  </div>

                  <div className="bg-amber-500/5 border border-amber-500/15 p-3 rounded-xl space-y-1">
                    <span className="font-extrabold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5" />
                      {ui.safetyTipLabel}
                    </span>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                      {item.ruralSafetyTip[lang]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* INTERACTIVE SAFE SIMULATOR SECTION */}
      <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl space-y-6">
        <div className="space-y-1">
          <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            {ui.interactivePractice}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Practice adjusting fonts, testing loud ringtones, clearing WhatsApp cache, and emergency SOS safely on this simulated phone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SIMULATOR 1: FONT SIZE SLIDER */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-extrabold text-xs text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <Type className="w-4 h-4 text-emerald-600" />
                Live Font Size Slider
              </span>
              <span className="text-xs font-mono font-bold text-emerald-600">
                {simulatedFontSize}px {simulatedFontSize > 22 ? '(Extra Large)' : simulatedFontSize > 17 ? '(Large)' : '(Normal)'}
              </span>
            </div>

            <input
              type="range"
              min="14"
              max="28"
              step="2"
              value={simulatedFontSize}
              onChange={(e) => setSimulatedFontSize(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />

            <div 
              className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 rounded-xl leading-relaxed text-slate-800 dark:text-slate-100 font-semibold"
              style={{ fontSize: `${simulatedFontSize}px` }}
            >
              {lang === 'te' 
                ? 'ఉదాహరణ: డిజిటల్ గ్రామ సేవ. ధాన్యం క్వింటాల్ ధర రూ. 2,300. యూపీఐ పిన్ రహస్యంగా ఉంచండి.'
                : lang === 'ta'
                ? 'மாதிரி: நெல் விலை குவிண்டாலுக்கு ரூ. 2,300. UPI PIN யாருக்கும் பகிர வேண்டாம்.'
                : lang === 'hi'
                ? 'नमूना: डिजिटल ग्राम सेवा। धान का भाव ₹2,300/क्विंटल। यूपीआई पिन किसी को न बताएं।'
                : 'Sample Preview: Mandi Paddy Price: Rs 2,300/quintal. Never share your 4-digit UPI PIN.'}
            </div>
          </div>

          {/* SIMULATOR 2: LOUD RINGTONE TESTER */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-extrabold text-xs text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-emerald-600" />
                Ringtone Loudness Simulator
              </span>
              <span className="text-xs font-mono font-bold text-emerald-600">{ringtoneVolume}%</span>
            </div>

            <input
              type="range"
              min="20"
              max="100"
              value={ringtoneVolume}
              onChange={(e) => setRingtoneVolume(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />

            <button
              onClick={handleTestRingtone}
              className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                isPlayingRingtone 
                  ? 'bg-amber-500 text-white animate-pulse'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span>{isPlayingRingtone ? 'Playing Loud Ringtone Sound...' : 'Test Ringtone Speaker Volume'}</span>
            </button>
          </div>

          {/* SIMULATOR 3: WHATSAPP STORAGE CLEANER */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-extrabold text-xs text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <Trash2 className="w-4 h-4 text-red-500" />
                WhatsApp Memory Junk Cleaner
              </span>
              <span className="text-xs font-mono font-bold text-slate-500">
                {storageCleaned ? '✓ 2.14 GB Cleared' : '2.14 GB Junk Found'}
              </span>
            </div>

            <p className="text-xs text-slate-500">
              Clear duplicate festival videos safely without deleting your family photos or chat messages.
            </p>

            <button
              onClick={handleCleanStorage}
              className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                storageCleaned 
                  ? 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/30'
                  : 'bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900'
              }`}
            >
              <Trash2 className="w-4 h-4" />
              <span>{storageCleaned ? '✓ Phone Memory Successfully Cleaned!' : 'Clean Junk Cache Now'}</span>
            </button>
          </div>

          {/* SIMULATOR 4: EMERGENCY SOS TEST */}
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-extrabold text-xs text-slate-800 dark:text-slate-100 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                Emergency SOS (3x Power Button)
              </span>
              <span className="text-xs font-mono font-bold text-red-600">Helpline: 112</span>
            </div>

            <p className="text-xs text-slate-500">
              Simulates what happens when pressing the phone power button 3 times in danger: calls 112 and sends GPS coordinates.
            </p>

            <button
              onClick={() => {
                setSosTested(true);
                setTimeout(() => setSosTested(false), 4000);
              }}
              className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                sosTested
                  ? 'bg-red-600 text-white animate-bounce'
                  : 'bg-red-500/10 hover:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-500/30'
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>{sosTested ? '🚨 SOS Alert Dispatched to 112 & Family!' : 'Simulate 3x Power Button Press'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
