import React, { useState } from 'react';
import { 
  Wifi, Smartphone, Sun, Moon, Type, Volume2, ShieldCheck, 
  Lock, Key, Bell, Battery, Trash2, Globe, AlertTriangle, 
  HelpCircle, CheckCircle2, ChevronRight, ToggleLeft, ToggleRight,
  Sliders, Info, PhoneCall
} from 'lucide-react';
import { Language } from '../types';

interface SmartphoneSettingsProps {
  currentLanguage: Language;
}

export default function SmartphoneSettings({ currentLanguage }: SmartphoneSettingsProps) {
  // Simulator interactive state
  const [mobileDataOn, setMobileDataOn] = useState(true);
  const [wifiOn, setWifiOn] = useState(true);
  const [hotspotOn, setHotspotOn] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'huge'>('large');
  const [brightness, setBrightness] = useState(70);
  const [darkModeSim, setDarkModeSim] = useState(false);
  const [ringVolume, setRingVolume] = useState(85);
  const [vibrateOnCall, setVibrateOnCall] = useState(true);
  const [screenLockType, setScreenLockType] = useState('PIN (4-Digit)');
  const [batterySaver, setBatterySaver] = useState(false);
  const [locationPermission, setLocationPermission] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const l = currentLanguage;

  const t = (en: string, te: string, ta: string, hi: string) => {
    if (l === 'te') return te;
    if (l === 'ta') return ta;
    if (l === 'hi') return hi;
    return en;
  };

  const categories = [
    { id: 'all', label: t('All Settings', 'అన్ని సెట్టింగ్‌లు', 'அனைத்து அமைப்புகள்', 'सभी सेटिंग्स') },
    { id: 'network', label: t('Network & Data', 'నెట్‌వర్క్ & డేటా', 'நெட்வொர்க் & டேட்டா', 'नेटवर्क और डेटा') },
    { id: 'display', label: t('Display & Fonts', 'డిస్ప్లే & అక్షరాలు', 'திரை & எழுத்து அளவு', 'डिस्प्ले और फॉन्ट') },
    { id: 'sound', label: t('Sound & Ring', 'రింగ్‌టోన్ & సౌండ్', 'ஒலி & ரிங்டோன்', 'ध्वनि और रिंगटोन') },
    { id: 'security', label: t('Lock & Security', 'స్క్రీన్ లాక్ & భద్రత', 'திரைப் பூட்டு & பாதுகாப்பு', 'स्क्रीन लॉक और सुरक्षा') },
    { id: 'privacy', label: t('Privacy & Apps', 'యాప్ అనుమతులు', 'தனியுரிமை & செயலிகள்', 'गोपनीयता और ऐप्स') },
    { id: 'emergency', label: t('Emergency SOS', 'అత్యవసర హెల్ప్‌లైన్', 'அவசர உதவி எண்', 'आपातकालीन एसओएस') },
  ];

  const settingsCards = [
    {
      id: 'data',
      category: 'network',
      icon: Smartphone,
      color: 'bg-emerald-500/10 text-emerald-600',
      title: t('Mobile Data (Internet)', 'మొబైల్ డేటా (ఇంటర్నెట్)', 'மொபைல் டேட்டா (இணையம்)', 'मोबाइल डेटा (इंटरनेट)'),
      desc: t(
        'Controls 4G/5G mobile internet on your SIM card. Turn it off when sleeping or when connected to Wi-Fi to save battery and conserve your daily 1.5GB recharge pack.',
        'మీ సిమ్ కార్డు 4G/5G ఇంటర్నెట్‌ను ఆన్/ఆఫ్ చేయండి. రాత్రి పూట లేదా వైఫై ఉన్నప్పుడు ఆపివేస్తే రోజువారీ డేటా ప్యాక్ ఆదా అవుతుంది.',
        'உங்கள் சிம் கார்டு இணையத்தை இயக்கவும். தூங்கும் போது அல்லது வைஃபை இருக்கும் போது இதை அணைத்தால் தினசரி டேட்டா மிச்சமாகும்.',
        'अपने सिम कार्ड का इंटरनेट चालू या बंद करें। रात में या वाई-फाई होने पर इसे बंद रखने से आपका 1.5GB दैनिक डेटा बचता है।'
      ),
      tip: t('How to open on phone: Pull down from top of screen, tap the two arrows icon.', 'ఫోన్ పై నుండి కిందకు వేలితో లాగి మొబైల్ డేటా గుర్తును తాకండి.', 'போன் திரையின் மேலிருந்து கீழே இழுத்து டேட்டா ஐகானைத் தொடவும்.', 'फोन स्क्रीन को ऊपर से नीचे खींचें और डेटा आइकन पर टैप करें।'),
      interactive: (
        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${mobileDataOn ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
              {mobileDataOn ? t('Mobile Data: ON (Connected)', 'మొబైల్ డేటా: ఆన్ లో ఉంది', 'மொபைல் டேட்டா: ஆன்', 'मोबाइल डेटा: चालू है') : t('Mobile Data: OFF (Saving Data)', 'మొబైల్ డేటా: ఆఫ్ (డేటా ఆదా)', 'மொபைல் டேட்டா: ஆஃப்', 'मोबाइल डेटा: बंद है')}
            </span>
          </div>
          <button
            onClick={() => setMobileDataOn(!mobileDataOn)}
            className="text-emerald-600 dark:text-emerald-400 cursor-pointer"
          >
            {mobileDataOn ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-400" />}
          </button>
        </div>
      )
    },
    {
      id: 'wifi',
      category: 'network',
      icon: Wifi,
      color: 'bg-blue-500/10 text-blue-600',
      title: t('Wi-Fi Connection', 'వై-ఫై (Wi-Fi) కనెక్షన్', 'வை-ஃபை (Wi-Fi) இணைப்பு', 'वाई-फाई (Wi-Fi) कनेक्शन'),
      desc: t(
        'Connects to village panchayat Wi-Fi, bank office, or home routers without using your phone recharge balance. Turn off when walking on roads to save battery.',
        'గ్రామ పంచాయతీ, బ్యాంకు లేదా ఇంటి వై-ఫైకి ఉచితంగా కనెక్ట్ అవ్వండి. రోడ్డుపై వెళ్ళేటప్పుడు ఆపివేస్తే బ్యాటరీ ఆదా అవుతుంది.',
        'ஊராட்சி மையம் அல்லது அரசு மையங்களில் உள்ள இலவச வைஃபை உடன் இணைக்க உதவும்.',
        'गांव के पंचायत भवन या घर के वाई-फाई से मुफ्त इंटरनेट चलाने के लिए। बाहर जाने पर इसे बंद रखें ताकि बैटरी बचे।'
      ),
      tip: t('Look for lock icon next to network names; locked networks need a password from the owner.', 'లాక్ గుర్తు ఉన్న వైఫైలకు పాస్‌వర్డ్ అవసరం.', 'பூட்டு சின்னம் உள்ள வைஃபைக்கு கடவுச்சொல் தேவைப்படும்.', 'ताला लगे वाई-फाई में पासवर्ड दर्ज करना होता है।'),
      interactive: (
        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200">
            {wifiOn ? t('Wi-Fi: ON (Searching Village Routers)', 'వై-ఫై: ఆన్ (కనెక్ట్ అయింది)', 'வை-ஃபை: ஆன்', 'वाई-फाई: चालू') : t('Wi-Fi: OFF', 'వై-ఫై: ఆఫ్', 'வை-ஃபை: ஆஃப்', 'वाई-फाई: बंद')}
          </span>
          <button
            onClick={() => setWifiOn(!wifiOn)}
            className="text-blue-600 dark:text-blue-400 cursor-pointer"
          >
            {wifiOn ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-400" />}
          </button>
        </div>
      )
    },
    {
      id: 'fontsize',
      category: 'display',
      icon: Type,
      color: 'bg-purple-500/10 text-purple-600',
      title: t('Font & Text Size (Elderly Mode)', 'అక్షరాల పరిమాణం (పెద్ద అక్షరాలు)', 'எழுத்து அளவு (பெரிய எழுத்துக்கள்)', 'फॉन्ट का आकार (बड़े अक्षर)'),
      desc: t(
        'Makes all text in WhatsApp, messages, and contacts larger and easier to read without straining eyes or wearing reading glasses.',
        'వాట్సాప్ మరియు ఫోన్ లోని అక్షరాలను పెద్దవిగా మార్చి కంటికి శ్రమ లేకుండా సులభంగా చదువుకునేలా చేస్తుంది.',
        'வாட்ஸ்அப் மற்றும் போனில் உள்ள எழுத்துக்களைப் பெரிதாக்கி எளிதாகப் படிக்க உதவும்.',
        'व्हाट्सएप और फोन के सभी अक्षरों को बड़ा करता है ताकि बिना चश्मे के आसानी से पढ़ा जा सके।'
      ),
      tip: t('Go to Settings -> Display -> Font Size -> Drag the slider to Large.', 'సెట్టింగ్స్ -> డిస్ప్లే -> ఫాంట్ సైజు -> లార్జ్ ఎంచుకోండి.', 'அமைப்புகள் -> திரை -> எழுத்து அளவு -> பெரியது தேர்ந்தெடுக்கவும்.', 'सेटिंग्स -> डिस्प्ले -> फॉन्ट साइज में जाकर बड़ा चुनें।'),
      interactive: (
        <div className="space-y-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <div className="flex justify-between items-center text-xs font-bold">
            <span>{t('Selected Size:', 'ఎంచుకున్న పరిమాణం:', 'தேர்ந்தெடுக்கப்பட்ட அளவு:', 'चुना गया आकार:')} {fontSize.toUpperCase()}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {(['normal', 'large', 'huge'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFontSize(s)}
                className={`py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${fontSize === s ? 'bg-purple-600 text-white shadow-xs' : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
              >
                {s === 'normal' ? 'Normal (100%)' : s === 'large' ? 'Large (130%)' : 'Huge (160%)'}
              </button>
            ))}
          </div>
          <p className={`p-2 bg-white dark:bg-slate-900 rounded-lg text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all ${fontSize === 'normal' ? 'text-xs' : fontSize === 'large' ? 'text-sm font-semibold' : 'text-base font-bold'}`}>
            {t('Sample Preview: Village Doctor 9845123456', 'నమూనా: గ్రామ డాక్టర్ 9845123456', 'மாதிரி: கிராம மருத்துவர் 9845123456', 'नमूना: ग्राम डॉक्टर 9845123456')}
          </p>
        </div>
      )
    },
    {
      id: 'brightness',
      category: 'display',
      icon: Sun,
      color: 'bg-amber-500/10 text-amber-600',
      title: t('Screen Brightness & Outdoor Visibility', 'స్క్రీన్ బ్రైట్‌నెస్ & వెలుతురు', 'திரை வெளிச்சம் (Brightness)', 'स्क्रीन ब्राइटनेस (चमक)'),
      desc: t(
        'Increase brightness when standing under direct sunlight in farms to clearly see incoming calls. Lower it at night to protect your eyes and battery.',
        'పొలంలో ఎండలో ఉన్నప్పుడు స్క్రీన్ స్పష్టంగా కనిపించడానికి బ్రైట్‌నెస్ పెంచండి. రాత్రి పూట తగ్గించండి.',
        'வெயிலில் இருக்கும் போது வெளிச்சத்தை அதிகரிக்கவும். இரவில் கண் பாதுகாப்புக்காகக் குறைக்கவும்.',
        'खेत या धूप में स्क्रीन साफ देखने के लिए ब्राइटनेस बढ़ाएं और रात में आंखों की सुरक्षा के लिए कम करें।'
      ),
      tip: t('Enable "Auto-Brightness" so phone adjusts automatically indoors and outdoors.', 'ఆటో-బ్రైట్‌నెస్ ఆన్ చేసుకుంటే ఫోన్ దానంతట అదే సర్దుబాటు చేసుకుంటుంది.', 'Auto-Brightness ஆன் செய்தால் சூழலுக்கு ஏற்ப மாறும்.', 'ऑटो-ब्राइटनेस ऑन रखें ताकि धूप और छांव में फोन खुद स्क्रीन सेट करे।'),
      interactive: (
        <div className="space-y-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300">
            <span>{t('Brightness Level', 'వెలుతురు స్థాయి', 'வெளிச்ச அளவு', 'चमक का स्तर')}</span>
            <span className="font-mono text-amber-600">{brightness}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(Number(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>
      )
    },
    {
      id: 'lock',
      category: 'security',
      icon: Lock,
      color: 'bg-rose-500/10 text-rose-600',
      title: t('Screen Lock (PIN / Pattern)', 'స్క్రీన్ లాక్ (పిన్ లేదా ప్యాటర్న్)', 'திரைப் பூட்டு (PIN / Pattern)', 'स्क्रीन लॉक (पिन या पैटर्न)'),
      desc: t(
        'The most critical setting! A 4-digit PIN lock stops strangers or shopkeepers from opening your bank accounts, OTPs, or private photos if your mobile is forgotten.',
        'అత్యంత ముఖ్యమైన భద్రత! మొబైల్ పోయినా ఇతరులు మీ బ్యాంక్ ఖాతాలు, ఫోటోలు, ఓటీపీలు చూడకుండా నిరోధిస్తుంది.',
        'மிக முக்கியமான பாதுகாப்பு! உங்கள் போன் தவறினால் பிறர் வங்கி விவரங்களைத் திறப்பதைத் தடுக்கும்.',
        'सबसे जरूरी सुरक्षा! 4 अंकों का पिन सेट करने से फोन खोने पर भी कोई आपके बैंक खाते या निजी फोटो नहीं देख सकता।'
      ),
      tip: t('Never use simple numbers like 1234, 0000, or your birth year as your phone PIN.', '1234, 0000 లేదా మీ పుట్టిన సంవత్సరాన్ని ఎప్పుడూ పిన్ గా పెట్టవద్దు.', '1234 அல்லது 0000 போன்ற எளிய எண்களை வைக்கக் கூடாது.', '1234, 0000 या जन्म का साल कभी भी पिन न बनाएं।'),
      interactive: (
        <div className="space-y-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-slate-700 dark:text-slate-300">{t('Active Protection:', 'ప్రస్తుత లాక్ రకం:', 'பூட்டு வகை:', 'वर्तमान सुरक्षा:')}</span>
            <span className="text-emerald-600 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded-sm">
              ✓ {screenLockType}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[11px] font-bold">
            {['PIN (4-Digit)', 'Pattern Lock', 'Fingerprint'].map((type) => (
              <button
                key={type}
                onClick={() => setScreenLockType(type)}
                className={`py-1.5 rounded-lg cursor-pointer transition-colors ${screenLockType === type ? 'bg-rose-600 text-white' : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'volume',
      category: 'sound',
      icon: Volume2,
      color: 'bg-indigo-500/10 text-indigo-600',
      title: t('Ringtone & Incoming Call Volume', 'రింగ్‌టోన్ శబ్దం మరియు వైబ్రేషన్', 'ரிங்டோன் ஒலி அளவு', 'रिंगटोन और कॉल वॉल्यूम'),
      desc: t(
        'Set high volume and enable vibration so you never miss urgent calls from family, village officers, or doctors even in noisy markets.',
        'సంతలో లేదా వాహనాల రణగొణ ధ్వనుల్లో కూడా ముఖ్యమైన కాల్స్ మిస్ అవ్వకుండా రింగ్‌టోన్ వాల్యూమ్ మరియు వైబ్రేషన్ ఆన్ చేసుకోండి.',
        'சந்தை போன்ற சத்தமான இடங்களில் அவசர அழைப்புகளைத் தவறவிடாமல் இருக்க அதிர்வு (Vibration) வைக்கவும்.',
        'शोरगुल वाले बाजार में भी जरूरी फोन कॉल न छूटे, इसके लिए रिंगटोन की आवाज तेज रखें और वाइब्रेशन चालू रखें।'
      ),
      tip: t('Press the physical side volume-up button to raise call sounds instantly.', 'ఫోన్ పక్కనున్న వాల్యూమ్ అప్ బటన్ నొక్కి శబ్దం పెంచవచ్చు.', 'போனின் பக்கவாட்டு பட்டனை அழுத்தி ஒலியை அதிகரிக்கலாம்.', 'फोन के साइड वाले वॉल्यूम बटन को दबाकर आवाज तुरंत बढ़ाएं।'),
      interactive: (
        <div className="space-y-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <div className="flex justify-between items-center text-xs font-bold">
            <span>{t('Ringtone Volume', 'రింగ్ వాల్యూమ్', 'ரிங்டோன் அளவு', 'रिंगटोन आवाज')}</span>
            <span className="font-mono text-indigo-600">{ringVolume}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={ringVolume}
            onChange={(e) => setRingVolume(Number(e.target.value))}
            className="w-full accent-indigo-500 cursor-pointer"
          />
          <div className="flex items-center justify-between pt-1 border-t border-slate-200 dark:border-slate-700">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              {t('Vibrate for Incoming Calls', 'కాల్ వచ్చినప్పుడు వైబ్రేట్ అవ్వాలి', 'அழைப்பின் போது அதிர வேண்டும்', 'कॉल आने पर वाइब्रेट हो')}
            </span>
            <button
              onClick={() => setVibrateOnCall(!vibrateOnCall)}
              className="text-indigo-600 dark:text-indigo-400 cursor-pointer"
            >
              {vibrateOnCall ? <ToggleRight className="w-7 h-7" /> : <ToggleLeft className="w-7 h-7 text-slate-400" />}
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'permissions',
      category: 'privacy',
      icon: ShieldCheck,
      color: 'bg-teal-500/10 text-teal-600',
      title: t('App Permissions (Camera & Location)', 'యాప్ అనుమతులు (కెమెరా & లొకేషన్)', 'செயலி அனுமதிகள் (கேமரா & இருப்பிடம்)', 'ऐप अनुमतियां (कैमरा और लोकेशन)'),
      desc: t(
        'Check which downloaded apps are allowed to see your location or access your camera. Revoke permissions from gaming or flashlight apps that ask for your contacts.',
        'గేమ్స్ లేదా సాధారణ టార్చ్ లైట్ యాప్‌లు మీ కాంటాక్ట్స్ లేదా లొకేషన్ అడిగితే వాటిని రద్దు చేయండి.',
        'தேவையற்ற விளையாட்டுகள் அல்லது செயலிகளுக்கு கேமரா மற்றும் தொடர்பு அனுமதிகளை வழங்கக் கூடாது.',
        'गेम या टॉर्च वाले ऐप यदि आपके फोन के कॉन्टैक्ट्स या कैमरे की अनुमति मांगें, तो तुरंत मना कर दें।'
      ),
      tip: t('Settings -> Apps -> Permissions Manager -> Check Camera & Contacts.', 'సెట్టింగ్స్ -> యాప్స్ -> పర్మిషన్ మేనేజర్ లో కెమెరా, కాంటాక్ట్స్ చెక్ చేయండి.', 'அமைப்புகள் -> செயலிகள் -> அனுமதி மேலாளரில் சரிபார்க்கவும்.', 'सेटिंग्स -> ऐप्स -> परमिशन मैनेजर में जाकर कैमरा और कॉन्टैक्ट्स जांचें।'),
      interactive: (
        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <div>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-100 block">
              {t('GPS Location Access', 'జీపీఎస్ లొకేషన్ యాక్సెస్', 'GPS இருப்பிட அனுமதி', 'जीपीएस लोकेशन एक्सेस')}
            </span>
            <span className="text-[10px] text-slate-500">
              {locationPermission ? t('Allowed only for Google Maps', 'గూగుల్ మ్యాప్స్‌కు మాత్రమే అనుమతించబడింది', 'மேப்ஸுக்கு மட்டும் அனுமதி', 'केवल गूगल मैप्स के लिए अनुमत') : t('Disabled globally', 'ఆపివేయబడింది', 'முடக்கப்பட்டது', 'बंद है')}
            </span>
          </div>
          <button
            onClick={() => setLocationPermission(!locationPermission)}
            className="text-teal-600 dark:text-teal-400 cursor-pointer"
          >
            {locationPermission ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-400" />}
          </button>
        </div>
      )
    },
    {
      id: 'emergency',
      category: 'emergency',
      icon: AlertTriangle,
      color: 'bg-red-500/10 text-red-600',
      title: t('Emergency SOS & National Helplines', 'అత్యవసర ఎస్ఓఎస్ (హెల్ప్‌లైన్లు)', 'அவசர உதவி (SOS & 112)', 'आपातकालीन एसओएस और हेल्पलाइन 112/1930'),
      desc: t(
        'Configure your phone to automatically dial Police & Ambulance (112) or Cybercrime (1930) by pressing the power button rapidly 5 times in an emergency.',
        'అత్యవసర సమయంలో పవర్ బటన్‌ను 5 సార్లు వేగంగా నొక్కితే ఆటోమేటిక్‌గా పోలీస్/అంబులెన్స్ (112) కు కాల్ వెళ్లేలా అమర్చుకోండి.',
        'அவசர காலத்தில் பவர் பட்டனை 5 முறை அழுத்தினால் 112 எண்ணுக்கு அழைப்பு போகும் வசதியைச் செயல்படுத்தவும்.',
        'मुसीबत के समय पावर बटन को 5 बार तेजी से दबाने पर सीधे 112 पुलिस या 1930 साइबर हेल्पलाइन पर कॉल लग जाता है।'
      ),
      tip: t('Add your son, daughter, or neighbor as an "Emergency Contact" on your lock screen.', 'లాక్ స్క్రీన్ పై మీ కుటుంబ సభ్యుల ఎమర్జెన్సీ నంబర్ కనిపించేలా పెట్టండి.', 'திரைப் பூட்டில் அவசர தொடர்பு எண்ணை இணைக்கவும்.', 'लॉक स्क्रीन पर अपने परिवार का इमरजेंसी नंबर जोड़ें।'),
      interactive: (
        <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-xl space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-red-700 dark:text-red-400">
            <span>{t('Saved Emergency Numbers', 'సేవ్ చేయబడిన ఎమర్జెన్సీ నంబర్లు', 'அவசர எண்கள்', 'आपातकालीन नंबर')}</span>
            <span className="font-mono bg-red-500/20 px-2 py-0.5 rounded-sm">112 & 1930 Active</span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">
            {t(
              'National Emergency 112 (Police, Fire, Ambulance) works even without SIM card balance!',
              'జాతీయ అత్యవసర నంబర్ 112 కు బ్యాలెన్స్ లేకపోయినా ఉచితంగా కాల్ చేయవచ్చు!',
              'சிம் கார்டில் பணம் இல்லாவிட்டாலும் 112-க்கு இலவசமாக அவசர அழைப்பு செல்லும்!',
              '112 नंबर पर बिना किसी मोबाइल बैलेंस के भी मुफ्त आपातकालीन कॉल लग जाता है!'
            )}
          </p>
        </div>
      )
    },
    {
      id: 'battery',
      category: 'network',
      icon: Battery,
      color: 'bg-yellow-500/10 text-yellow-600',
      title: t('Battery Saver & Junk Media Cleaning', 'బ్యాటరీ సేవర్ & నిల్వ క్లీనింగ్', 'பேட்டரி சேமிப்பு & மெமரி சுத்தம்', 'बैटरी सेवर और स्टोरेज की सफाई'),
      desc: t(
        'Extend battery life when traveling by turning on Battery Saver. Regularly delete forwarded video clips in WhatsApp to prevent phone from hanging.',
        'ప్రయాణాల్లో ఉన్నప్పుడు బ్యాటరీ సేవర్ ఆన్ చేయండి. ఫోన్ స్లో కాకుండా ఉండటానికి వాట్సాప్ వీడియోలను ఎప్పటికప్పుడు డిలీట్ చేయండి.',
        'பயணத்தின் போது பேட்டரி சேவரை இயக்கவும். போன் ஹேங் ஆகாமல் இருக்க வாட்ஸ்அப் பழைய வீடியோக்களை அழிக்கவும்.',
        'सफर के दौरान बैटरी सेवर चालू रखें। फोन हैंग होने से बचाने के लिए व्हाट्सएप के फालतू वीडियो डिलीट करते रहें।'
      ),
      tip: t('Avoid using the mobile phone while it is plugged into a wall charger.', 'ఛార్జింగ్ లో పెట్టి ఫోన్ ఎప్పుడూ మాట్లాడవద్దు.', 'சார்ஜ் போடும் போது போனில் பேச வேண்டாம்.', 'चार्जिंग के दौरान फोन पर कभी बात न करें।'),
      interactive: (
        <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
          <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
            {batterySaver ? t('Battery Saver: ON (Extends Life)', 'బ్యాటరీ సేవర్: ఆన్ లో ఉంది', 'பேட்டரி சேவர்: ஆன்', 'बैटरी सेवर: चालू है') : t('Battery Saver: OFF', 'బ్యాటరీ సేవర్: ఆఫ్', 'பேட்டரி சேவர்: ஆஃப்', 'बैटरी सेवर: बंद है')}
          </span>
          <button
            onClick={() => setBatterySaver(!batterySaver)}
            className="text-amber-500 cursor-pointer"
          >
            {batterySaver ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8 text-slate-400" />}
          </button>
        </div>
      )
    }
  ];

  const filteredCards = settingsCards.filter((card) => {
    const matchesCategory = activeCategory === 'all' || card.category === activeCategory;
    const matchesSearch = 
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in" id="view_smartphone_settings">
      {/* Header */}
      <div className="space-y-1 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div className="flex items-center gap-2">
          <span className="p-2 bg-emerald-500/10 text-emerald-600 rounded-xl">
            <Sliders className="w-6 h-6" />
          </span>
          <div>
            <h2 className="text-xl lg:text-2xl font-extrabold text-slate-800 dark:text-white">
              {t('Smartphone Settings Guide & Simulator', 'స్మార్ట్‌ఫోన్ సెట్టింగ్‌ల గైడ్ & సిమ్యులేటర్', 'ஸ்மார்ட்போன் அமைப்புகள் வழிகாட்டி', 'स्मार्टफोन सेटिंग्स गाइड और सिम्युलेटर')}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">
              {t(
                'Learn how to adjust mobile data, volume, large fonts, screen locks, and emergency numbers on any Android phone.',
                'మొబైల్ డేటా, అక్షరాల సైజు, రింగ్‌టోన్ వాల్యూమ్, మరియు స్క్రీన్ లాక్ ఎలా అమర్చుకోవాలో ఇక్కడ సులభంగా నేర్చుకోండి.',
                'டேட்டா, எழுத்து அளவு, ரிங்டோன் மற்றும் திரைப் பூட்டுகளை எவ்வாறு அமைப்பது என எளிமையாக அறிக.',
                'मोबाइल डेटा, बड़े अक्षर, रिंगटोन आवाज, स्क्रीन लॉक और इमरजेंसी नंबर कैसे सेट करें, यहां सीखें।'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('Search settings (e.g. font, lock, wifi, battery)...', 'సెట్టింగ్‌లను వెతకండి (ఉదా: డేటా, లాక్, వాల్యూమ్)...', 'அமைப்புகளைத் தேடுங்கள்...', 'सेटिंग्स खोजें (जैसे डेटा, लॉक, फॉन्ट)...')}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-850 dark:text-white focus:outline-emerald-500"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors flex-shrink-0 ${activeCategory === c.id ? 'bg-emerald-600 text-white shadow-xs' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-800'}`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className={`p-2.5 rounded-xl ${card.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </span>
                  <h3 className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                    {card.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {card.desc}
                </p>

                {/* Practical Tip */}
                <div className="p-2.5 bg-emerald-500/5 border border-emerald-500/15 rounded-xl text-[11px] text-emerald-800 dark:text-emerald-300 flex items-start gap-1.5 font-medium">
                  <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-emerald-600" />
                  <span>{card.tip}</span>
                </div>
              </div>

              {/* Interactive Widget */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  {t('Live Phone Simulator Toggle:', 'లైవ్ ఫోన్ సిమ్యులేటర్:', 'நேரடி மாதிரி செயல்பாடு:', 'लाइव सिम्युलेटर:')}
                </span>
                {card.interactive}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
