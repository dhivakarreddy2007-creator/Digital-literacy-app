import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Square, RotateCcw, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface AudioNarratorProps {
  textToSpeak: string;
  currentLanguage: Language;
}

export default function AudioNarrator({ textToSpeak, currentLanguage }: AudioNarratorProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(0.9); // speed
  const [pitch, setPitch] = useState(1.0);
  const [voiceGender, setVoiceGender] = useState<'female' | 'male'>('female');
  const [hasVoiceSupport, setHasVoiceSupport] = useState(false);
  
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      synthRef.current = window.speechSynthesis;
      setHasVoiceSupport(true);
    }
    
    // Cleanup speech if component unmounts
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Sync speak cancel if language changes while reading
  useEffect(() => {
    if (isPlaying) {
      stopSpeaking();
    }
  }, [currentLanguage]);

  const selectVoiceForLanguage = (lang: Language) => {
    if (!synthRef.current) return null;
    const voices = synthRef.current.getVoices();
    
    // Locate specific voice codes
    let matchTag = 'en-US';
    if (lang === 'te') matchTag = 'te';
    else if (lang === 'ta') matchTag = 'ta';
    else if (lang === 'hi') matchTag = 'hi';

    // Find best match matching tag + gender preference if possible
    let matches = voices.filter(v => v.lang.toLowerCase().startsWith(matchTag));
    if (matches.length === 0) {
      // broad fallback
      matches = voices.filter(v => v.lang.toLowerCase().startsWith('en'));
    }
    
    // Choose gender
    if (voiceGender === 'male') {
      const maleVoice = matches.find(v => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('google hindi'));
      return maleVoice || matches[0] || null;
    } else {
      const femaleVoice = matches.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('heera') || v.name.toLowerCase().includes('google hindi'));
      return femaleVoice || matches[0] || null;
    }
  };

  const startSpeaking = () => {
    if (!hasVoiceSupport || !synthRef.current || !textToSpeak) return;

    synthRef.current.cancel();

    // Clean plain text string for better audio response
    const cleanText = textToSpeak
      .replace(/<\/?[^>]+(>|$)/g, "") // remove HTML tags if any
      .substring(0, 1500); // safety cap

    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    // Set appropriate language tags
    if (currentLanguage === 'te') utterance.lang = 'te-IN';
    else if (currentLanguage === 'ta') utterance.lang = 'ta-IN';
    else if (currentLanguage === 'hi') utterance.lang = 'hi-IN';
    else utterance.lang = 'en-IN';

    // Set voice
    const matchedVoice = selectVoiceForLanguage(currentLanguage);
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.rate = rate;
    utterance.pitch = pitch;

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    setIsPlaying(true);
    setIsPaused(false);
    synthRef.current.speak(utterance);
  };

  const pauseSpeaking = () => {
    if (synthRef.current && isPlaying && !isPaused) {
      synthRef.current.pause();
      setIsPaused(true);
    }
  };

  const resumeSpeaking = () => {
    if (synthRef.current && isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
    } else {
      startSpeaking();
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  if (!hasVoiceSupport) {
    return (
      <div className="bg-amber-50 dark:bg-amber-950/20 text-amber-800 dark:text-amber-300 p-3 rounded-lg text-sm flex items-center gap-2" id="audionarrator_fallback">
        <VolumeX className="w-5 h-5 flex-shrink-0" />
        <span>Voice speech guidance is not fully configured on this browser. Try Chrome/Edge for voiceovers.</span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 hover:border-emerald-500/40 p-4 rounded-xl shadow-xs transition-all duration-300" id="audionarrator_panel">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Playback controls */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500 text-white rounded-full relative">
            <Volume2 className="w-5 h-5 animate-pulse" />
            {isPlaying && !isPaused && (
              <span className="absolute -inset-1 rounded-full border border-emerald-400 animate-ping opacity-75"></span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                {currentLanguage === 'te' ? "వాయిస్ సహాయకుడు" :
                 currentLanguage === 'ta' ? "குரல் வழிகாட்டி" :
                 currentLanguage === 'hi' ? "आवाज़ मार्गदर्शक" : "Voice Narrator Assistant"}
              </h4>
              <span className="flex items-center gap-0.5 text-[10px] bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded-full font-mono font-medium">
                <Sparkles className="w-3 h-3 text-emerald-600 animate-bounce" /> Accessible
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              {currentLanguage === 'te' ? "ఈ పేజీని గట్టిగా చదవడానికి ప్లే నొక్కండి." :
               currentLanguage === 'ta' ? "இந்த பக்கத்தை உரக்கக் கேட்க பிளே செய்யவும்." :
               currentLanguage === 'hi' ? "इस पृष्ठ को जोर से सुनने के लिए प्ले दबाएं।" : "Listen to this chapter read aloud automatically."}
            </p>
          </div>
        </div>

        {/* Action button grouping */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {!isPlaying ? (
            <button
              onClick={startSpeaking}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg cursor-pointer transition-colors shadow-xs"
              id="btn_play_audio"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              {currentLanguage === 'te' ? "చదవండి" : currentLanguage === 'ta' ? "வாசி" : currentLanguage === 'hi' ? "सुनें" : "Play Voice"}
            </button>
          ) : (
            <>
              {isPaused ? (
                <button
                  onClick={resumeSpeaking}
                  className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition-colors"
                  id="btn_resume_audio"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  {currentLanguage === 'te' ? "మళ్లీ ప్రారంభించు" : currentLanguage === 'ta' ? "தொடரு" : currentLanguage === 'hi' ? "पुनः शुरू" : "Resume"}
                </button>
              ) : (
                <button
                  onClick={pauseSpeaking}
                  className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition-colors"
                  id="btn_pause_audio"
                >
                  <Pause className="w-3.5 h-3.5" />
                  {currentLanguage === 'te' ? "ఆపండి" : currentLanguage === 'ta' ? "நிறுத்து" : currentLanguage === 'hi' ? "रोकें" : "Pause"}
                </button>
              )}
              <button
                onClick={stopSpeaking}
                className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-2 rounded-lg cursor-pointer transition-colors"
                id="btn_stop_audio"
              >
                <Square className="w-3.5 h-3.5 fill-current" />
                {currentLanguage === 'te' ? "ముగించు" : currentLanguage === 'ta' ? "முடி" : currentLanguage === 'hi' ? "बंद करें" : "Stop"}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Adjustments */}
      <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/60 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 dark:text-gray-400">
            {currentLanguage === 'te' ? "వేగం:" : currentLanguage === 'ta' ? "வேகம்:" : currentLanguage === 'hi' ? "गतिः" : "Speed:"}
          </span>
          <input
            type="range"
            min="0.6"
            max="1.5"
            step="0.1"
            value={rate}
            onChange={(e) => {
              setRate(parseFloat(e.target.value));
              if (isPlaying) startSpeaking(); // re-init with new speed
            }}
            className="w-24 accent-emerald-500 cursor-pointer"
          />
          <span className="font-mono text-[10px] text-gray-400 font-medium">({rate}x)</span>
        </div>

        {/* Voice pitch selector */}
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1 text-gray-500 dark:text-gray-400 cursor-pointer">
            <input
              type="radio"
              name="voiceGender"
              checked={voiceGender === 'female'}
              onChange={() => {
                setVoiceGender('female');
                if (isPlaying) setTimeout(() => startSpeaking(), 100);
              }}
              className="accent-emerald-500 cursor-pointer"
            />
            <span>{currentLanguage === 'te' ? "స్త్రీ స్వరం" : currentLanguage === 'ta' ? "பெண் குரல்" : currentLanguage === 'hi' ? "महिला" : "Female Voice"}</span>
          </label>
          <label className="flex items-center gap-1 text-gray-500 dark:text-gray-400 cursor-pointer">
            <input
              type="radio"
              name="voiceGender"
              checked={voiceGender === 'male'}
              onChange={() => {
                setVoiceGender('male');
                if (isPlaying) setTimeout(() => startSpeaking(), 100);
              }}
              className="accent-emerald-500 cursor-pointer"
            />
            <span>{currentLanguage === 'te' ? "పురుష స్వరం" : currentLanguage === 'ta' ? "ஆண் குரல்" : currentLanguage === 'hi' ? "पुरुष" : "Male Voice"}</span>
          </label>
        </div>
      </div>

      {/* Dynamic Animated Equalizer lines if speaking */}
      {isPlaying && !isPaused && (
        <div className="flex items-center justify-center gap-1.5 mt-2.5 h-5">
          <span className="w-1 bg-emerald-500 rounded-xs animate-bounce h-3" style={{ animationDelay: '0s' }}></span>
          <span className="w-1 bg-emerald-400 rounded-xs animate-bounce h-4" style={{ animationDelay: '0.15s' }}></span>
          <span className="w-1 bg-emerald-500 rounded-xs animate-bounce h-2" style={{ animationDelay: '0.3s' }}></span>
          <span className="w-1 bg-emerald-400 rounded-xs animate-bounce h-5" style={{ animationDelay: '0.45s' }}></span>
          <span className="w-1 bg-emerald-300 rounded-xs animate-bounce h-2" style={{ animationDelay: '0.6s' }}></span>
          <span className="w-1 bg-emerald-500 rounded-xs animate-bounce h-4" style={{ animationDelay: '0.75s' }}></span>
        </div>
      )}
    </div>
  );
}
