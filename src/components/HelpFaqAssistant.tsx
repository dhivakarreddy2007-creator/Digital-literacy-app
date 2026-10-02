import React, { useState } from 'react';
import { 
  HelpCircle, Search, Sparkles, Send, Volume2, VolumeX, 
  AlertTriangle, PhoneCall, ExternalLink, CheckCircle2, 
  ChevronDown, ChevronUp, Bot, Loader2, MessageSquare, 
  ShieldCheck, RefreshCw, Bus, Smartphone, CreditCard,
  Zap, FileText, ArrowRight
} from 'lucide-react';
import { Language, FAQItem } from '../types';
import { realWorldSolutions, RealWorldSolution } from '../services/realWorldSolutionsData';

interface HelpFaqAssistantProps {
  lang: Language;
  faqList: FAQItem[];
  onSubmitFeedback: (data: { name: string; email: string; message: string }) => void;
  feedbackSuccess: boolean;
}

export default function HelpFaqAssistant({ 
  lang, 
  faqList, 
  onSubmitFeedback, 
  feedbackSuccess 
}: HelpFaqAssistantProps) {
  // Search state for solutions & FAQs
  const [problemSearchQuery, setProblemSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedSolutionId, setExpandedSolutionId] = useState<string | null>(realWorldSolutions[0].id);

  // AI Assistant States
  const [aiQuestion, setAiQuestion] = useState<string>('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Audio Speech state
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  // Feedback form state
  const [feedbackName, setFeedbackName] = useState<string>('');
  const [feedbackEmail, setFeedbackEmail] = useState<string>('');
  const [feedbackMsg, setFeedbackMsg] = useState<string>('');

  // Quick prompt chips
  const quickPrompts: Record<Language, { text: string; query: string }[]> = {
    en: [
      { text: "📱 I lost my phone, what do I need to do?", query: "I lost my phone what I need to do immediately step by step?" },
      { text: "🚌 Missed bus with online ticket - refund?", query: "I missed my bus but I bought my ticket what should I do for the ticket money?" },
      { text: "🛒 Need new phone, which company is best?", query: "I need to change my mobile I want to buy a new phone which company is best?" },
      { text: "💸 UPI money debited but shopkeeper didn't get it", query: "Money was debited from my bank via UPI but shopkeeper says not received. What to do?" },
      { text: "⚡ Electricity bill cut tonight SMS - fake?", query: "I received an SMS that electricity power will be disconnected tonight at 9:30 PM. Is it real or fake scam?" },
      { text: "👮 WhatsApp video call from police / CBI officer", query: "Someone in police uniform is calling on WhatsApp video saying I am under digital arrest. What to do?" }
    ],
    te: [
      { text: "📱 నా ఫోన్ పోయింది, నేను వెంటనే ఏం చేయాలి?", query: "నా మొబైల్ ఫోన్ పోయింది నేను వెంటనే ఏమి చేయాలి?" },
      { text: "🚌 బస్సు మిస్సయింది, టికెట్ డబ్బులు ఎలా రావాలి?", query: "నేను ఆన్‌లైన్‌లో బస్సు టికెట్ కొన్నాను కానీ బస్సు మిస్సయింది. టికెట్ డబ్బులు ఎలా వస్తాయి?" },
      { text: "🛒 కొత్త ఫోన్ కొనాలి, ఏ కంపెనీ మంచిది?", query: "నేను కొత్త మొబైల్ కొనాలనుకుంటున్నాను ఏ కంపెనీ ఫోన్ మంచిది?" },
      { text: "💸 యూపీఐ డబ్బులు కట్ అయ్యాయి కానీ రాలేదు", query: "యూపీఐ ద్వారా డబ్బులు కట్ అయ్యాయి కానీ అవతలి వారికి రాలేదు ఏం చేయాలి?" },
      { text: "⚡ కరెంట్ బిల్లు ఎస్సెమ్మెస్ వచ్చింది - నిజమా?", query: "ఈ రాత్రి 9:30 గంటలకు కరెంట్ కట్ అవుతుందని ఎస్సెమ్మెస్ వచ్చింది ఇది నిజమా కాదా?" },
      { text: "👮 నకిలీ పోలీస్ వీడియో కాల్ వచ్చింది", query: "పోలీస్ డ్రెస్‌లో వీడియో కాల్ చేసి డిజిటల్ అరెస్ట్ అని బెదిరిస్తున్నారు ఏం చేయాలి?" }
    ],
    ta: [
      { text: "📱 போன் தொலைந்துவிட்டது, என்ன செய்ய வேண்டும்?", query: "எனது போன் தொலைந்துவிட்டது உடனடியாக என்ன செய்ய வேண்டும்?" },
      { text: "🚌 பேருந்து தவறிவிட்டது, டிக்கெட் பணம் வருமா?", query: "நான் பஸ் டிக்கெட் எடுத்தேன் ஆனால் பேருந்து போய்விட்டது டிக்கெட் பணம் எப்படி திரும்பப் பெறுவது?" },
      { text: "🛒 புதிய போன் வாங்க எந்த கம்பெனி சிறந்தது?", query: "நான் புதிய போன் வாங்க வேண்டும் எந்த நிறுவனம் சிறந்தது?" },
      { text: "💸 பணம் பிடித்தம் ஆனது ஆனால் கடைக்கு போகவில்லை", query: "UPI பணம் பிடித்தம் ஆனது ஆனால் கடைக்காரருக்கு வரவில்லை என்ன செய்வது?" },
      { text: "⚡ மின்சார இணைப்பு துண்டிப்பு மெசேஜ் - உண்மையா?", query: "மின் கட்டணம் கட்டாததால் மின்சாரம் துண்டிக்கப்படும் என மெசேஜ் வந்துள்ளது உண்மையா?" },
      { text: "👮 போலி போலீஸ் வீடியோ கால் மிரட்டல்", query: "வீடியோ காலில் போலீஸ் உடையில் வந்து டிஜிட்டல் அரெஸ்ட் என மிரட்டுகிறார்கள் என்ன செய்வது?" }
    ],
    hi: [
      { text: "📱 मेरा फोन खो गया है, मैं तुरंत क्या करूं?", query: "मेरा मोबाइल फोन खो गया है मुझे तुरंत क्या करना चाहिए?" },
      { text: "🚌 बस छूट गई, टिकट का पैसा वापस कैसे मिलेगा?", query: "मेरी ऑनलाइन बस छूट गई टिकट का रिफंड पाने के लिए क्या करना होगा?" },
      { text: "🛒 नया फोन खरीदना है, कौन सी कंपनी सबसे अच्छी है?", query: "मुझे नया फोन लेना है कौन सी मोबाइल कंपनी सबसे अच्छी और टिकाऊ है?" },
      { text: "💸 पैसे कट गए लेकिन दुकानदार को नहीं मिले", query: "यूपीआई से पैसे कट गए लेकिन दुकानदार के खाते में नहीं पहुंचे क्या करें?" },
      { text: "⚡ रात को बिजली कटने का एसएमएस आया है - क्या सच है?", query: "आज रात 9:30 बजे बिजली कटने का मैसेज आया है क्या यह फर्जी है?" },
      { text: "👮 नकली पुलिस का वीडियो कॉल आया है", query: "व्हाट्सएप वीडियो कॉल पर पुलिस बनकर डिजिटल अरेस्ट की धमकी दे रहे हैं क्या करें?" }
    ]
  };

  // Call Gemini API on server-side (/api/ai/ask)
  const handleAskAi = async (customQuery?: string) => {
    const q = customQuery || aiQuestion;
    if (!q.trim()) return;

    setAiLoading(true);
    setAiError(null);
    setAiAnswer(null);

    try {
      const res = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          language: lang,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to get answer from AI Assistant');
      }

      setAiAnswer(data.answer);
    } catch (err: any) {
      console.warn('AI API error, providing local knowledge solution:', err);
      // Resilient Fallback to offline solution
      const lower = q.toLowerCase();
      const matched = realWorldSolutions.find(sol => 
        sol.keywords.some(k => lower.includes(k.toLowerCase())) ||
        sol.question[lang].toLowerCase().includes(lower)
      );

      if (matched) {
        setAiAnswer(
          `**${matched.question[lang]}**\n\n` +
          `🚨 **Immediate 1st Step:** ${matched.immediateAction[lang]}\n\n` +
          `**Step-by-step Solution:**\n` +
          matched.steps[lang].map(s => `- ${s}`).join('\n') + '\n\n' +
          `📞 **Official Helpline:** ${matched.helpline.name} (${matched.helpline.number})`
        );
      } else {
        setAiError(
          lang === 'te' 
            ? 'క్షమించండి, సర్వర్ కనెక్ట్ కాలేదు. దయచేసి క్రింది ప్రశ్నలు మరియు పరిష్కారాలను చూడండి.'
            : lang === 'ta'
            ? 'மன்னிக்கவும், இணைய இணைப்பு இல்லை. தயவுசெய்து கீழே உள்ள தீர்வுகளைப் பார்க்கவும்.'
            : lang === 'hi'
            ? 'माफ कीजिए, सर्वर से संपर्क नहीं हो पाया। कृपया नीचे दिए गए समाधान देखें।'
            : 'Sorry, could not connect to AI service. Please explore our prepared solutions below.'
        );
      }
    } finally {
      setAiLoading(false);
    }
  };

  // Speech read-out
  const speakText = (text: string, id: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Clean markdown asterisks for smooth speech
    const cleanText = text.replace(/[*#_]/g, '');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const langCodes: Record<Language, string> = {
      en: 'en-IN',
      te: 'te-IN',
      ta: 'ta-IN',
      hi: 'hi-IN'
    };
    utterance.lang = langCodes[lang] || 'en-IN';
    utterance.rate = 0.9;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  // Filter real-world solutions based on search input & category
  const filteredSolutions = realWorldSolutions.filter(sol => {
    const matchesCat = activeCategory === 'all' || sol.category === activeCategory;
    if (!matchesCat) return false;

    if (!problemSearchQuery.trim()) return true;
    const q = problemSearchQuery.toLowerCase();
    const qMatch = sol.question[lang].toLowerCase().includes(q) || sol.question.en.toLowerCase().includes(q);
    const scMatch = sol.scenario[lang].toLowerCase().includes(q);
    const kwMatch = sol.keywords.some(k => k.toLowerCase().includes(q));

    return qMatch || scMatch || kwMatch;
  });

  // Filter standard FAQs
  const filteredFaqs = faqList.filter(faq => {
    if (!problemSearchQuery.trim()) return true;
    const q = problemSearchQuery.toLowerCase();
    return faq.question[lang].toLowerCase().includes(q) || faq.answer[lang].toLowerCase().includes(q);
  });

  const categories = {
    all: { en: "All Problems", te: "అన్ని సమస్యలు", ta: "அனைத்து பிரச்சனைகள்", hi: "सभी समस्याएं" },
    lost_device: { en: "Lost Phone & Hardware", te: "ఫోన్ పోయినప్పుడు", ta: "தொலைந்த போன்", hi: "फोन खोने पर" },
    tickets: { en: "Bus & Train Tickets", te: "బస్సు & రైలు టికెట్లు", ta: "பேருந்து & ரயில்", hi: "बस व ट्रेन टिकट" },
    buying_phone: { en: "Buying New Mobile", te: "కొత్త ఫోన్ ఎంపిక", ta: "புதிய போன் தேர்வு", hi: "नया फोन चुनाव" },
    upi_banking: { en: "UPI & Money Disputes", te: "యూపీఐ & బ్యాంకింగ్", ta: "UPI வங்கி சிக்கல்கள்", hi: "यूपीआई व बैंक" },
    scams: { en: "Fake Scams & Cybercrime", te: "సైబర్ మోసాలు", ta: "மோசடி எச்சரிக்கை", hi: "साइबर फ्रॉड" }
  };

  return (
    <div className="space-y-8 animate-fade-in" id="help_faq_assistant_section">
      {/* SECTION 1: AI DIGITAL LITERACY ASSISTANT */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-indigo-500/30 space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="p-3 bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 rounded-2xl shadow-inner">
              <Bot className="w-7 h-7" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 font-extrabold">
                  Gemini 3.8 Flash AI
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
                AI Digital Literacy Assistant
              </h2>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-indigo-200/90 leading-relaxed font-medium">
          {lang === 'te' 
            ? 'మీ మొబైల్ పోయినా, బస్సు టికెట్ డబ్బులు రాకపోయినా, కొత్త ఫోన్ ఏది కొనాలో అర్థం కాకపోయినా ఇక్కడ అడగండి. క్షణాల్లో సరళమైన తెలుగులో మార్గదర్శనం పొందండి.'
            : lang === 'ta'
            ? 'போன் தொலைந்தால், பஸ் டிக்கெட் ரீபண்ட், அல்லது புதிய போன் வாங்குவது குறித்த உங்கள் சந்தேகங்களை இங்கு கேளுங்கள். எளிய தமிழில் பதில் கிடைக்கும்.'
            : lang === 'hi'
            ? 'फोन खो गया हो, बस का टिकट रिफंड चाहिए हो, या नया मोबाइल चुनना हो—अपनी भाषा में कोई भी सवाल पूछें और तुरंत सरल समाधान पाएं।'
            : 'Ask any question about lost phones, bus/train ticket refunds, choosing the best smartphone to buy, UPI payment errors, or scam warnings.'}
        </p>

        {/* Quick prompt chips */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-indigo-300 tracking-wider uppercase">
            {lang === 'te' ? 'తరచూ అడిగే ప్రశ్నలు (నొక్కండి):' : lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்:' : lang === 'hi' ? 'ज्यादा पूछे जाने वाले सवाल (क्लिक करें):' : 'Tap to Ask Common Doubts:'}
          </span>
          <div className="flex flex-wrap gap-2 pt-1">
            {quickPrompts[lang].map((chip, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAiQuestion(chip.query);
                  handleAskAi(chip.query);
                }}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all cursor-pointer text-left"
              >
                {chip.text}
              </button>
            ))}
          </div>
        </div>

        {/* AI Question Input Box */}
        <div className="relative pt-1">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-1.5 focus-within:ring-2 focus-within:ring-indigo-400">
            <input
              type="text"
              value={aiQuestion}
              onChange={(e) => setAiQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAskAi();
              }}
              placeholder={
                lang === 'te'
                  ? 'మీ సందేహం లేదా సమస్య ఇక్కడ టైప్ చేయండి (ఉదా: నా ఫోన్ పోయింది, నేను ఏం చేయాలి?)...'
                  : lang === 'ta'
                  ? 'உங்கள் பிரச்சனையை இங்கு தட்டச்சு செய்யவும் (எ.கா: போன் தொலைந்துவிட்டது, என்ன செய்ய வேண்டும்?)...'
                  : lang === 'hi'
                  ? 'अपनी समस्या या सवाल यहां टाइप करें (जैसे: मेरा फोन खो गया है, मैं क्या करूं?)...'
                  : 'Type your question or problem (e.g. I lost my phone what I need to do?)...'
              }
              className="w-full px-4 py-2.5 bg-transparent text-white placeholder-indigo-200/60 text-xs sm:text-sm font-medium focus:outline-none"
              id="ai_assistant_query_input"
            />
            <button
              onClick={() => handleAskAi()}
              disabled={aiLoading || !aiQuestion.trim()}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer shrink-0"
              id="ai_assistant_submit_btn"
            >
              {aiLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Thinking...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Ask AI</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* AI Answer Display Card */}
        {aiAnswer && (
          <div className="bg-slate-950/90 border border-indigo-500/40 p-5 rounded-2xl space-y-4 animate-fade-in shadow-2xl">
            <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-black uppercase tracking-wider text-indigo-300">
                  AI Solution & Recommendation
                </h4>
              </div>

              {/* Audio Listen for AI Answer */}
              <button
                onClick={() => speakText(aiAnswer, 'ai_response')}
                className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl transition-colors cursor-pointer ${
                  speakingId === 'ai_response'
                    ? 'bg-amber-500 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-indigo-200'
                }`}
              >
                {speakingId === 'ai_response' ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>Stop Audio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Listen Aloud</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-100 leading-relaxed space-y-2 whitespace-pre-wrap font-medium">
              {aiAnswer}
            </div>

            {/* Quick Emergency Helplines Reminder Bar */}
            <div className="pt-3 border-t border-indigo-500/20 flex flex-wrap items-center gap-2 text-[11px] text-indigo-200">
              <span className="font-bold text-white">Emergency Helplines:</span>
              <a href="tel:1930" className="px-2 py-0.5 bg-red-500/20 text-red-300 border border-red-500/30 rounded-md font-mono font-bold hover:underline">
                Cyber Fraud: 1930
              </a>
              <a href="tel:112" className="px-2 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-md font-mono font-bold hover:underline">
                Police/SOS: 112
              </a>
              <a href="tel:139" className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md font-mono font-bold hover:underline">
                Railways: 139
              </a>
              <a href="tel:1947" className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-md font-mono font-bold hover:underline">
                Aadhaar: 1947
              </a>
            </div>
          </div>
        )}

        {aiError && (
          <div className="p-4 bg-red-500/20 border border-red-500/40 rounded-xl text-xs text-red-200 font-semibold">
            {aiError}
          </div>
        )}
      </div>

      {/* SECTION 2: SEARCH BAR FOR REAL WORLD PROBLEMS & FAQS */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="space-y-0.5">
            <h2 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-2">
              <HelpCircle className="w-5.5 h-5.5 text-emerald-600" />
              <span>Real-World Solutions & Village FAQs</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Browse prepared guides for real-life issues: lost phones, bus refunds, ATM issues, fake calls, and new phone buying.
            </p>
          </div>

          <span className="text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-xl shrink-0">
            {filteredSolutions.length} Solutions
          </span>
        </div>

        {/* Search Bar Input */}
        <div className="relative">
          <input
            type="text"
            value={problemSearchQuery}
            onChange={(e) => setProblemSearchQuery(e.target.value)}
            placeholder={
              lang === 'te'
                ? 'సమస్య కోసం వెతకండి (ఉదా: ఫోన్ పోయింది, బస్సు టికెట్, కొత్త మొబైల్, ఏటీఎం, కరెంట్ బిల్లు)...'
                : lang === 'ta'
                ? 'பிரச்சனையை தேடுங்கள் (எ.கா: போன் தொலைந்தது, பேருந்து ரீபண்ட், புதிய போன், ஏடிஎம்)...'
                : lang === 'hi'
                ? 'समस्या खोजें (जैसे: खोया फोन, बस टिकट, नया मोबाइल, एटीएम, बिजली बिल)...'
                : 'Type your question or problem (e.g. lost phone, bus ticket, new mobile, atm, electricity bill)...'
            }
            className="w-full pl-11 pr-10 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 placeholder-slate-400 shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
            id="search_real_world_problems_input"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          {problemSearchQuery && (
            <button
              onClick={() => setProblemSearchQuery('')}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {Object.entries(categories).map(([catKey, labels]) => (
            <button
              key={catKey}
              onClick={() => setActiveCategory(catKey)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === catKey
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {labels[lang]}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 3: REAL-WORLD PROBLEM SOLUTION CARDS */}
      <div className="space-y-4">
        {filteredSolutions.map((sol) => {
          const isExpanded = expandedSolutionId === sol.id;
          const isSpeaking = speakingId === sol.id;

          const urgencyColor = 
            sol.urgency === 'critical' ? 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/30' :
            sol.urgency === 'high' ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30' :
            'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30';

          return (
            <div 
              key={sol.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4 transition-all hover:border-emerald-500/40"
            >
              {/* Header with expand toggle */}
              <div 
                className="flex items-start justify-between gap-3 cursor-pointer select-none"
                onClick={() => setExpandedSolutionId(isExpanded ? null : sol.id)}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-md border ${urgencyColor}`}>
                      {sol.urgency.toUpperCase()} PRIORITY
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      {sol.category.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100">
                    {sol.question[lang]}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {sol.scenario[lang]}
                  </p>
                </div>

                <button className="p-2 text-slate-400 hover:text-slate-600 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* URGENT 1ST STEP BANNER */}
              <div className="bg-red-500/10 border-l-4 border-red-500 p-3.5 rounded-r-xl space-y-1">
                <span className="text-[11px] font-black uppercase text-red-700 dark:text-red-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  Immediate First Action:
                </span>
                <p className="text-xs sm:text-sm font-bold text-red-950 dark:text-red-200 leading-relaxed">
                  {sol.immediateAction[lang]}
                </p>
              </div>

              {/* EXPANDABLE STEP-BY-STEP SOLUTION */}
              {isExpanded && (
                <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800 animate-fade-in">
                  <div className="space-y-2.5">
                    <span className="text-xs font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                      Step-by-Step Resolution Roadmap:
                    </span>
                    <div className="space-y-2">
                      {sol.steps[lang].map((stepText, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold bg-slate-50 dark:bg-slate-950 p-3 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{stepText}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Official Helpline Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap items-center gap-2">
                      {sol.helpline.url ? (
                        <a
                          href={sol.helpline.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm transition-colors"
                        >
                          <span>{sol.helpline.actionLabel}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : null}

                      <a
                        href={`tel:${sol.helpline.number}`}
                        className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-bold text-xs px-4 py-2 rounded-xl inline-flex items-center gap-1.5 shadow-sm transition-colors"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Call {sol.helpline.name} ({sol.helpline.number})</span>
                      </a>
                    </div>

                    {/* Audio Listen Button */}
                    <button
                      onClick={() => {
                        const fullNarrative = `${sol.question[lang]}. Immediate Step: ${sol.immediateAction[lang]}. Steps: ${sol.steps[lang].join('. ')}. Helpline: ${sol.helpline.name} ${sol.helpline.number}.`;
                        speakText(fullNarrative, sol.id);
                      }}
                      className={`flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl transition-colors cursor-pointer ${
                        isSpeaking
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="w-4 h-4" />
                          <span>Stop Voice</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4" />
                          <span>Listen Aloud ({lang.toUpperCase()})</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* SECTION 4: STANDARD VILLAGE FAQS LIST */}
      <div className="space-y-4 pt-4">
        <h3 className="text-base font-extrabold text-slate-800 dark:text-white flex items-center gap-2">
          <FileText className="w-4.5 h-4.5 text-emerald-600" />
          <span>General Village Digital FAQs</span>
        </h3>

        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 p-4 sm:p-5 rounded-2xl space-y-2"
            >
              <h4 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                Q: {faq.question[lang]}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-3.5 border-l-2 border-emerald-500 font-medium">
                A: {faq.answer[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: COMMUNITY FEEDBACK & PROJECT CONTACT */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl space-y-4" id="feedback_contact_block">
        <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>Community Feedback & Project Contact</span>
        </h3>
        
        {feedbackSuccess ? (
          <div className="p-4 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-xl border border-emerald-500/20">
            ✓ Thank you! Your feedback has been logged securely for the B.Tech Community Service Project team.
          </div>
        ) : (
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitFeedback({
                name: feedbackName,
                email: feedbackEmail,
                message: feedbackMsg
              });
            }} 
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-slate-600 dark:text-slate-300">
              <div className="space-y-1">
                <label>Your Name / Village</label>
                <input 
                  type="text" 
                  required
                  value={feedbackName}
                  onChange={(e) => setFeedbackName(e.target.value)}
                  placeholder="e.g. Ramesh, Rampur" 
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                />
              </div>
              <div className="space-y-1">
                <label>Mobile Number or Email</label>
                <input 
                  type="text" 
                  required
                  value={feedbackEmail}
                  onChange={(e) => setFeedbackEmail(e.target.value)}
                  placeholder="e.g. 9876543210" 
                  className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500" 
                />
              </div>
            </div>

            <div className="space-y-1 text-xs font-bold text-slate-600 dark:text-slate-300">
              <label>Message / Suggestion for the Village</label>
              <textarea 
                rows={3} 
                required
                value={feedbackMsg}
                onChange={(e) => setFeedbackMsg(e.target.value)}
                placeholder="Share your experience or report an issue with the app..." 
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-medium focus:outline-none focus:ring-1 focus:ring-emerald-500" 
              />
            </div>

            <button 
              type="submit" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl cursor-pointer shadow-md transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
