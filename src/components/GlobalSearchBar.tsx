import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, BookOpen, Youtube, Sliders, Image as ImageIcon, 
  HelpCircle, X, ChevronRight, Sparkles, CornerDownLeft
} from 'lucide-react';
import { Language, VideoItem, PosterItem, FAQItem } from '../types';
import { learningModules, videoTutorials, awarenessPosters, faqData, LearningModule } from '../data';

export type SearchResultType = 'module' | 'video' | 'setting' | 'poster' | 'faq';

export interface SearchResultItem {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  rawItem: any;
}

interface GlobalSearchBarProps {
  lang: Language;
  onSelectResult: (type: SearchResultType, item: any) => void;
  placeholder?: string;
}

export default function GlobalSearchBar({ lang, onSelectResult, placeholder }: GlobalSearchBarProps) {
  const [query, setQuery] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Settings predefined search targets
  const settingsSearchItems = [
    {
      id: "setting_font",
      type: 'setting' as const,
      title: lang === 'te' ? "పెద్ద అక్షరాలు & ఫాంట్ సైజు" : lang === 'ta' ? "பெரிய எழுத்துக்கள் (Font Size)" : lang === 'hi' ? "बड़े अक्षर व फॉन्ट साइज" : "Large Text & Font Size",
      subtitle: lang === 'te' ? "వృద్ధులకు సులభంగా చదవడానికి అక్షరాల పరిమాణం పెంచడం" : lang === 'ta' ? "முதியவர்கள் படிக்க எழுத்துக்களைப் பெரிதாக்குதல்" : lang === 'hi' ? "आंखों के तनाव बिना फोन के अक्षर बड़े करना" : "Increase font size for seniors to read comfortably",
      badge: "Setting",
      badgeColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300",
      rawItem: { category: 'display' }
    },
    {
      id: "setting_sound",
      type: 'setting' as const,
      title: lang === 'te' ? "రింగ్‌టోన్ శబ్దం & లౌడ్ స్పీకర్" : lang === 'ta' ? "ரிங்டோன் ஒலி & ஸ்பீக்கர்" : lang === 'hi' ? "रिंगटोन और लाउडस्पीकर की आवाज" : "Ringtone & Speaker Loudness",
      subtitle: lang === 'te' ? "కాల్స్ మిస్ కాకుండా రింగ్‌టోన్ పెంచడం మరియు వైబ్రేషన్" : lang === 'ta' ? "ரிங்டோன் ஒலி அளவு மற்றும் வைப்ரேஷன்" : lang === 'hi' ? "कॉल न छूटने के लिए रिंगटोन तेज करना और वाइब्रेशन" : "Adjust volume sliders and enable vibrate on ring",
      badge: "Setting",
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
      rawItem: { category: 'sound' }
    },
    {
      id: "setting_hotspot",
      type: 'setting' as const,
      title: lang === 'te' ? "పర్సనల్ హాట్‌స్పాట్ & వై-ఫై" : lang === 'ta' ? "போர்ட்டபிள் ஹாட்ஸ்பாட் & வைஃபை" : lang === 'hi' ? "पर्सनल हॉटस्पॉट और वाई-फाई" : "Personal Hotspot & Wi-Fi",
      subtitle: lang === 'te' ? "పిల్లల చదువుల కోసం మీ ఫోన్ నుండి ఇంటర్నెట్ షేర్ చేయడం" : lang === 'ta' ? "குடும்பத்திற்கு ஹாட்ஸ்பாட் மூலம் இணையம் தருவது" : lang === 'hi' ? "बच्चों की पढ़ाई के लिए फोन से इंटरनेट शेयर करना" : "Share phone mobile internet with family or laptop",
      badge: "Setting",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
      rawItem: { category: 'wifi' }
    },
    {
      id: "setting_pin",
      type: 'setting' as const,
      title: lang === 'te' ? "4 అంకెల స్క్రీన్ లాక్ పిన్" : lang === 'ta' ? "4 இலக்க திரைப் பூட்டு PIN" : lang === 'hi' ? "4 अंकों का स्क्रीन लॉक पिन" : "4-Digit Screen Lock PIN",
      subtitle: lang === 'te' ? "బ్యాంక్ ఖాతాలు మరియు వాట్సాప్ రక్షణ కోసం రహస్య పిన్" : lang === 'ta' ? "வங்கி கணக்கு மற்றும் வாட்ஸ்அப் பாதுகாப்பு" : lang === 'hi' ? "फोन और व्हाट्सएप को सुरक्षित रखने के लिए पिन" : "Prevent unauthorized access to bank apps and messages",
      badge: "Setting",
      badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
      rawItem: { category: 'security' }
    },
    {
      id: "setting_storage",
      type: 'setting' as const,
      title: lang === 'te' ? "వాట్సాప్ మెమరీ క్లీనప్" : lang === 'ta' ? "வாட்ஸ்அப் மெமரி சுத்தம்" : lang === 'hi' ? "व्हाट्सएप स्टोरेज सफाई" : "WhatsApp Memory Cleanup",
      subtitle: lang === 'te' ? "ఫోటోలు పోకుండా అనవసర జంక్ వీడియోలను తొలగించడం" : lang === 'ta' ? "பழைய வீடியோக்களை நீக்கி போன் வேகத்தை கூட்டுதல்" : lang === 'hi' ? "फोटो खोए बिना फालतू वीडियो हटाकर मेमोरी खाली करना" : "Clear duplicate festival videos without losing photos",
      badge: "Setting",
      badgeColor: "bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300",
      rawItem: { category: 'storage' }
    },
    {
      id: "setting_battery",
      type: 'setting' as const,
      title: lang === 'te' ? "ఎక్స్‌ట్రీమ్ బ్యాటరీ సేవర్" : lang === 'ta' ? "பேட்டரி சேவர் முறை" : lang === 'hi' ? "एक्सट्रीम बैटरी सेवर" : "Extreme Battery Saver",
      subtitle: lang === 'te' ? "కరెంట్ లేనప్పుడు ఫోన్ బ్యాటరీ 2 రోజులు ఆగేలా చేయడం" : lang === 'ta' ? "மின்சாரம் இல்லாத போது பேட்டரியை நீட்டிக்க" : lang === 'hi' ? "बिजली कटने पर बैटरी 2 दिन चलाने का तरीका" : "Extend phone runtime during village electricity cuts",
      badge: "Setting",
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
      rawItem: { category: 'battery' }
    },
    {
      id: "setting_emergency",
      type: 'setting' as const,
      title: lang === 'te' ? "అత్యవసర హెల్ప్‌లైన్ SOS 112" : lang === 'ta' ? "அவசர உதவி SOS 112" : lang === 'hi' ? "आपातकालीन SOS हेल्पलाइन 112" : "Emergency SOS (112)",
      subtitle: lang === 'te' ? "పవర్ బటన్ 3 సార్లు నొక్కితే పోలీసులకు కాల్ & లొకేషన్" : lang === 'ta' ? "பவர் பட்டன் 3 முறை அழுத்தினால் காவல்துறைக்கு தகவல்" : lang === 'hi' ? "पावर बटन 3 बार दबाने पर तुरंत पुलिस व परिजनों को मदद" : "Press power button 3 times for immediate police assistance",
      badge: "Setting",
      badgeColor: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
      rawItem: { category: 'emergency' }
    }
  ];

  // Quick search keywords
  const popularKeywords = [
    { label: "UPI PIN", query: "UPI PIN" },
    { label: "DigiLocker", query: "DigiLocker" },
    { label: "Font Size", query: "Font" },
    { label: "Hotspot", query: "Hotspot" },
    { label: "1930 Helpline", query: "1930" },
    { label: "WhatsApp Voice", query: "WhatsApp" },
    { label: "Mandi Prices", query: "Mandi" }
  ];

  // Filter matching items
  const results: SearchResultItem[] = [];
  const q = query.trim().toLowerCase();

  if (q.length > 0) {
    // 1. Search Learning Modules
    learningModules.forEach((m) => {
      const titleMatch = (m.title[lang] || m.title.en).toLowerCase().includes(q);
      const subMatch = (m.sub[lang] || m.sub.en).toLowerCase().includes(q);
      const stepsMatch = m.steps.some(s => 
        (s.title[lang] || s.title.en).toLowerCase().includes(q) || 
        (s.desc[lang] || s.desc.en).toLowerCase().includes(q)
      );

      if (titleMatch || subMatch || stepsMatch) {
        results.push({
          id: `mod_${m.id}`,
          type: 'module',
          title: m.title[lang] || m.title.en,
          subtitle: m.sub[lang] || m.sub.en,
          badge: "Chapter",
          badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
          rawItem: m
        });
      }
    });

    // 2. Search Video Tutorials
    videoTutorials.forEach((v) => {
      const titleMatch = (v.title[lang] || v.title.en).toLowerCase().includes(q);
      const descMatch = (v.description[lang] || v.description.en).toLowerCase().includes(q);
      const catMatch = v.category.toLowerCase().includes(q);

      if (titleMatch || descMatch || catMatch) {
        results.push({
          id: `vid_${v.id}`,
          type: 'video',
          title: v.title[lang] || v.title.en,
          subtitle: `${v.category} • ${v.duration} min • ${v.description[lang] || v.description.en}`,
          badge: "Video",
          badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300",
          rawItem: v
        });
      }
    });

    // 3. Search Settings
    settingsSearchItems.forEach((s) => {
      if (s.title.toLowerCase().includes(q) || s.subtitle.toLowerCase().includes(q) || s.id.toLowerCase().includes(q)) {
        results.push(s);
      }
    });

    // 4. Search Awareness Posters
    awarenessPosters.forEach((p) => {
      const titleMatch = (p.title[lang] || p.title.en).toLowerCase().includes(q);
      const descMatch = (p.description[lang] || p.description.en).toLowerCase().includes(q);

      if (titleMatch || descMatch) {
        results.push({
          id: `post_${p.id}`,
          type: 'poster',
          title: p.title[lang] || p.title.en,
          subtitle: p.description[lang] || p.description.en,
          badge: "Poster",
          badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
          rawItem: p
        });
      }
    });

    // 5. Search FAQs
    faqData.forEach((f, idx) => {
      const qMatch = (f.question[lang] || f.question.en).toLowerCase().includes(q);
      const aMatch = (f.answer[lang] || f.answer.en).toLowerCase().includes(q);

      if (qMatch || aMatch) {
        results.push({
          id: `faq_${idx}`,
          type: 'faq',
          title: f.question[lang] || f.question.en,
          subtitle: f.answer[lang] || f.answer.en,
          badge: "FAQ",
          badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
          rawItem: f
        });
      }
    });
  }

  // Handle item click
  const handleItemClick = (item: SearchResultItem) => {
    onSelectResult(item.type, item.rawItem);
    setIsOpen(false);
    setQuery('');
  };

  // Keyboard navigation on dropdown
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleItemClick(results[selectedIndex]);
      }
    }
  };

  return (
    <div ref={containerRef} className="relative flex-1 max-w-xs sm:max-w-sm lg:max-w-md" id="global_search_container">
      {/* Search Input Box */}
      <div className="relative flex items-center">
        <Search className="absolute left-3 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setSelectedIndex(0);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || (lang === 'te' ? "పాఠాలు, వీడియోలు, సెట్టింగ్స్ వెతకండి..." : lang === 'ta' ? "பாடங்கள், வீடியோக்கள், அமைப்புகளைத் தேடுங்கள்..." : lang === 'hi' ? "अध्याय, वीडियो और सेटिंग्स खोजें..." : "Search chapters, videos, settings...")}
          className="w-full bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-xl pl-9 pr-14 py-1.5 text-xs text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-emerald-500 focus:bg-white dark:focus:bg-slate-900 transition-all shadow-2xs"
          id="global_search_input"
        />
        
        {/* Clear or Keyboard Shortcut badge */}
        <div className="absolute right-2.5 flex items-center gap-1">
          {query ? (
            <button
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono font-semibold text-slate-400 bg-slate-200/60 dark:bg-slate-700/60 border border-slate-300 dark:border-slate-600 rounded">
              ⌘K
            </kbd>
          )}
        </div>
      </div>

      {/* Dropdown Floating Results */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 overflow-hidden max-h-[420px] flex flex-col animate-fade-in">
          
          {/* Quick chips if query is empty */}
          {query.trim().length === 0 ? (
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                <Sparkles className="w-3 h-3 text-emerald-500" />
                <span>Popular Village Searches:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {popularKeywords.map((k) => (
                  <button
                    key={k.label}
                    onClick={() => {
                      setQuery(k.query);
                      inputRef.current?.focus();
                    }}
                    className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
                  >
                    {k.label}
                  </button>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 leading-snug">
                Type any keyword to search across 16 Learning Chapters, 16 Videos, Phone Settings, and Posters.
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60">
              <div className="px-3.5 py-2 bg-slate-50 dark:bg-slate-950 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                <span>{results.length} Matches Found</span>
                <span className="flex items-center gap-1">
                  <span>Press</span>
                  <CornerDownLeft className="w-3 h-3" />
                  <span>to jump</span>
                </span>
              </div>

              {results.map((res, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={res.id}
                    onClick={() => handleItemClick(res)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left p-3 flex items-start gap-3 cursor-pointer transition-colors ${
                      isSelected 
                        ? 'bg-emerald-500/10 dark:bg-emerald-900/20' 
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <div className="mt-0.5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex-shrink-0">
                      {res.type === 'module' && <BookOpen className="w-4 h-4 text-emerald-600" />}
                      {res.type === 'video' && <Youtube className="w-4 h-4 text-rose-600" />}
                      {res.type === 'setting' && <Sliders className="w-4 h-4 text-cyan-600" />}
                      {res.type === 'poster' && <ImageIcon className="w-4 h-4 text-purple-600" />}
                      {res.type === 'faq' && <HelpCircle className="w-4 h-4 text-amber-600" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider ${res.badgeColor}`}>
                          {res.badge}
                        </span>
                        <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 truncate">
                          {res.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 leading-normal">
                        {res.subtitle}
                      </p>
                    </div>

                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 self-center" />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-6 text-center space-y-2">
              <Search className="w-6 h-6 text-slate-300 mx-auto" />
              <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
                No matching results found for "{query}"
              </p>
              <p className="text-[11px] text-slate-400">
                Try searching for 'UPI', 'Font', 'Hotspot', 'DigiLocker', 'Aadhaar', or 'WhatsApp'.
              </p>
            </div>
          )}

          {/* Footer note */}
          <div className="p-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
            <span>Instant search across all platform resources</span>
            <kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[9px]">ESC to close</kbd>
          </div>
        </div>
      )}
    </div>
  );
}
