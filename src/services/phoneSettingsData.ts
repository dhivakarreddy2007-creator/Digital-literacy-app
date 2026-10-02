import { Language } from '../types';

export interface PhoneSettingItem {
  id: string;
  category: 'display' | 'sound' | 'network' | 'security' | 'storage' | 'battery' | 'emergency' | 'privacy' | 'calling';
  name: Record<Language, string>;
  menuPath: string;
  simpleExplanation: Record<Language, string>;
  whyUseIt: Record<Language, string>;
  ruralSafetyTip: Record<Language, string>;
  keywords: string[];
}

export interface PhoneModelInfo {
  brand: string;
  modelName: string;
  searchAliases: string[];
  osName: string;
  osVersion: string;
  description: Record<Language, string>;
  settings: PhoneSettingItem[];
}

// Reusable setting templates by OS architecture
// 1. OxygenOS (OnePlus) & ColorOS (Oppo) & Realme UI
const createOppoOnePlusRealmeSettings = (brand: string, osName: string): PhoneSettingItem[] => [
  {
    id: "font_size",
    category: "display",
    name: {
      en: "Font Size & Display Zoom (Make Text Large for Elders)",
      te: "ఫాంట్ సైజు మరియు డిస్‌ప్లే జూమ్ (పెద్ద అక్షరాలు)",
      ta: "எழுத்து அளவு & காட்சிப் பெரிதாக்குதல் (பெரிய எழுத்துக்கள்)",
      hi: "फॉन्ट साइज और डिस्प्ले ज़ूम (अक्षर बड़े करना)"
    },
    menuPath: "Settings ➔ Wallpapers & style ➔ Font ➔ Font size slider",
    simpleExplanation: {
      en: "Increases the letter size of letters on WhatsApp, SMS, and contacts so you can read comfortably without wearing reading glasses.",
      te: "వాట్సాప్, బ్యాంక్ ఎస్సెమ్మెస్‌లు మరియు కాంటాక్ట్ పేర్ల అక్షరాలు పెద్దవిగా మారతాయి, తద్వారా కళ్లజోడు లేకుండా సులభంగా చదవవచ్చు.",
      ta: "வாட்ஸ்அப், எஸ்எம்எஸ் மற்றும் போன் எண்களின் எழுத்துக்களைப் பெரிதாக்குகிறது. கண்ணாடி அணியாமல் எளிதாகப் படிக்கலாம்.",
      hi: "व्हाट्सएप, बैंक मैसेज और फोन नंबरों के अक्षर बड़े हो जाते हैं ताकि बिना चश्मा लगाए आसानी से पढ़ सकें।"
    },
    whyUseIt: {
      en: "Best for parents and grandparents to prevent eye strain and avoid misreading banking numbers.",
      te: "వృద్ధులకు కంటిపై భారం పడకుండా, బ్యాంక్ నంబర్లు స్పష్టంగా కనిపించడానికి ఉపయోగపడుతుంది.",
      ta: "பெரியவர்கள் கஷ்டப்படாமல் வங்கி குறுஞ்செய்திகளை படிக்க உதவுகிறது.",
      hi: "बुजुर्गों के लिए बेहद जरूरी है ताकि बैंक का ओटीपी या जरूरी नंबर गलत न पढ़ें।"
    },
    ruralSafetyTip: {
      en: "Slide to 'Large' or 'Very Large'. Never strain your eyes looking at tiny letters.",
      te: "'Large' లేదా 'Very Large' ఎంచుకోండి. చిన్న అక్షరాల కోసం కంటిపై ఒత్తిడి పెట్టవద్దు.",
      ta: "'Large' என்பதை தேர்வு செய்யுங்கள். சிறிய எழுத்துக்களைப் பார்த்து கண்களைக் கெடுத்துக் கொள்ளாதீர்கள்.",
      hi: "स्लाइडर को 'Large' पर सेट करें। छोटे अक्षरों से आंखों पर जोर न डालें।"
    },
    keywords: ["font", "text size", "large letters", "display", "zoom", "పెద్ద అక్షరాలు", "எழுத்து", "अक्षर बड़े"]
  },
  {
    id: "personal_hotspot",
    category: "network",
    name: {
      en: "Personal Hotspot (Share Internet with Children / Family)",
      te: "పర్సనల్ హాట్‌స్పాట్ (ఇతరులకు ఇంటర్నెట్ షేర్ చేయడం)",
      ta: "பர்சனல் ஹாட்ஸ்பாட் (குடும்பத்தினருக்கு இணையம் பகிர்தல்)",
      hi: "पर्सनल हॉटस्पॉट (परिवार व बच्चों को इंटरनेट देना)"
    },
    menuPath: "Settings ➔ Connection & sharing ➔ Personal hotspot ➔ Turn ON",
    simpleExplanation: {
      en: "Shares your mobile phone's 1.5GB daily data with children's tablets or family phones wirelessly like a Wi-Fi router.",
      te: "మీ ఫోన్‌లో ఉన్న డైలీ ఇంటర్నెట్ డేటాను వై-ఫై ద్వారా పిల్లల చదువుల కోసం లేదా కుటుంబ సభ్యుల ఫోన్‌లకు ఇవ్వవచ్చు.",
      ta: "உங்கள் போன் இணையத்தை வைஃபை மூலம் குடும்பத்தினரின் போன்களுக்கு பகிர்ந்தளிக்க உதவுகிறது.",
      hi: "आपके फोन के इंटरनेट को वाई-फाई की तरह चलाकर बच्चों की ऑनलाइन पढ़ाई या परिवार के फोन से जोड़ता है।"
    },
    whyUseIt: {
      en: "Helpful when family members run out of data or for school homework on laptops/tablets.",
      te: "కుటుంబంలో ఎవరికైనా డేటా అయిపోయినప్పుడు లేదా పిల్లల హోంవర్క్ కోసం చాలా ఉపయోగపడుతుంది.",
      ta: "குடும்பத்தில் யாருக்காவது ரீசார்ஜ் முடிந்தால் அவசரத்திற்கு இணையம் வழங்கலாம்.",
      hi: "परिवार में किसी का नेट खत्म हो जाने पर या स्कूल के काम के लिए उपयोगी है।"
    },
    ruralSafetyTip: {
      en: "ALWAYS set a secret 8-character password under 'Hotspot settings' so neighbors don't secretly finish your 1.5GB pack in 10 minutes!",
      te: "తప్పనిసరిగా 8 అంకెల రహస్య పాస్‌వర్డ్ పెట్టుకోండి, లేకపోతే ఇరుగుపొరుగు వారు మీ డేటాను 10 నిమిషాల్లో ఖాళీ చేస్తారు!",
      ta: "கட்டாயம் பாஸ்வேர்ட் போடவும்; இல்லையெனில் பக்கத்து வீட்டுக்காரர்கள் உங்கள் டேட்டாவை காலியாக்கி விடுவார்கள்!",
      hi: "हमेशा 8 अक्षरों का गुप्त पासवर्ड लगाएं, वरना पड़ोसी चुपके से आपका पूरा डेटा 10 मिनट में खत्म कर देंगे!"
    },
    keywords: ["hotspot", "wifi sharing", "internet share", "tethering", "హాట్‌స్పాట్", "ஹாட்ஸ்பாட்", "हॉटस्पॉट"]
  },
  {
    id: "sim_data_selection",
    category: "network",
    name: {
      en: "Dual SIM Selection for Mobile Data",
      te: "మొబైల్ డేటా కోసం సరైన సిమ్ ఎంపిక",
      ta: "இணைய பயன்பாட்டிற்கான சிம் தேர்வு",
      hi: "इंटरनेट चलाने के लिए सही सिम चुनना"
    },
    menuPath: "Settings ➔ Mobile network ➔ Internet (Select SIM 1 or SIM 2)",
    simpleExplanation: {
      en: "Tells the phone which SIM card has the active internet recharge pack so money is not deducted from your second SIM.",
      te: "ఏ సిమ్‌లో రీఛార్జ్ డేటా ఉందో ఆ సిమ్‌ను మాత్రమే ఇంటర్నెట్ కోసం ఎంచుకోవాలి. లేకపోతే రెండో సిమ్‌లోని మెయిన్ బ్యాలెన్స్ కట్ అవుతుంది.",
      ta: "எந்த சிம்மில் ரீசார்ஜ் பேக் உள்ளதோ அதை மட்டுமே இணையத்திற்கு தேர்வு செய்ய வேண்டும்.",
      hi: "जिस सिम में आपका रिचार्ज पैक है, उसी से इंटरनेट चलाएं ताकि दूसरी सिम से मुख्य बैलेंस न कट जाए।"
    },
    whyUseIt: {
      en: "Prevents accidental main balance deduction on your secondary calling SIM.",
      te: "రెండో సిమ్‌లో రీఛార్జ్ లేనప్పుడు మెయిన్ బ్యాలెన్స్ పైసలు కట్ కాకుండా కాపాడుతుంది.",
      ta: "இரண்டாவது சிம்மில் உள்ள மெயின் பேலன்ஸ் காலியாவதைத் தடுக்கிறது.",
      hi: "कॉलिंग वाली दूसरी सिम से गलती से पैसे कटने से बचाता है।"
    },
    ruralSafetyTip: {
      en: "Always turn OFF 'Auto switch data SIM' so it doesn't quietly consume your second SIM's money.",
      te: "'Auto switch data SIM' ఆప్షన్‌ను ఆఫ్ చేసి ఉంచండి.",
      ta: "'Auto switch' வசதியை ஆஃப் செய்து வைக்கவும்.",
      hi: "'Auto switch data SIM' को बंद रखें।"
    },
    keywords: ["sim", "dual sim", "mobile data", "sim 1 sim 2", "సిమ్", "சிம்", "सिम"]
  },
  {
    id: "screen_lock_security",
    category: "security",
    name: {
      en: "Lock Screen Password & Fingerprint (Protect UPI Apps)",
      te: "స్క్రీన్ లాక్ పాస్‌వర్డ్ మరియు వేలిముద్ర (యూపీఐ రక్షణ)",
      ta: "திரைப் பூட்டு & கைரேகை (வங்கி மற்றும் UPI பாதுகாப்பு)",
      hi: "स्क्रीन लॉक पासवर्ड और फिंगरप्रिंट (यूपीआई सुरक्षा)"
    },
    menuPath: "Settings ➔ Password & security ➔ Lock screen password (Set 6-digit PIN)",
    simpleExplanation: {
      en: "Locks your phone screen so thieves cannot open your PhonePe, Google Pay, or WhatsApp if your mobile is lost.",
      te: "ఫోన్ పోయినప్పుడు లేదా ఇతరులు తీసుకున్నప్పుడు మీ ఫోన్‌పే, జీపే, బ్యాంక్ యాప్స్ తెరవకుండా రక్షిస్తుంది.",
      ta: "போன் தொலைந்தால் திருடர்கள் உங்கள் கூகுள் பே அல்லது வாட்ஸ்அப்பை திறக்க முடியாதவாறு தடுக்கிறது.",
      hi: "फोन गुम होने पर कोई भी आपका फोनपे, गूगल पे या बैंक ऐप नहीं खोल पाएगा।"
    },
    whyUseIt: {
      en: "Crucial first line of defense for every smartphone owner in India.",
      te: "ప్రతి స్మార్ట్‌ఫోన్ వినియోగదారుడికి ఇది ప్రాథమిక రక్షణ కవచం.",
      ta: "ஸ்மார்ட்போன் வைத்திருக்கும் ஒவ்வொருவருக்கும் இது மிக அவசியமான பாதுகாப்பு.",
      hi: "हर मोबाइल यूजर के लिए सबसे जरूरी सुरक्षा कवच।"
    },
    ruralSafetyTip: {
      en: "NEVER use 1234, 0000, or your birth year as PIN. Keep a random 6-digit number that only you know.",
      te: "1234, 0000 లేదా పుట్టిన సంవత్సరాన్ని పిన్‌గా పెట్టవద్దు. మీకు మాత్రమే తెలిసిన 6 అంకెల నంబర్ పెట్టండి.",
      ta: "1234, 0000 அல்லது பிறந்த ஆண்டை பின் நம்பராக வைக்காதீர்கள்.",
      hi: "कभी भी 1234, 0000 या जन्म का साल पिन न बनाएं। 6 अंकों का सुरक्षित पिन रखें।"
    },
    keywords: ["screen lock", "pin", "password", "fingerprint", "security", "స్క్రీన్ లాక్", "திரைப் பூட்டு", "स्क्रीन लॉक"]
  },
  {
    id: "storage_cleanup",
    category: "storage",
    name: {
      en: "Clean Up Storage (Stop Phone Hanging without Losing Photos)",
      te: "స్టోరేజ్ క్లీనప్ (ఫోన్ హ్యాంగ్ అవ్వకుండా సురక్షిత క్లీనింగ్)",
      ta: "மெமரி சுத்தம் செய்தல் (போன் ஹேங் ஆகாமல் தடுப்பது)",
      hi: "स्टोरेज सफाई (बिना फोटो खोए फोन हैंग होना रोकें)"
    },
    menuPath: "Tools Folder ➔ Open 'Phone Manager' app ➔ Tap 'Clean Up Storage'",
    simpleExplanation: {
      en: "Safely clears WhatsApp junk video cache and duplicate files so your phone runs fast and smooth without deleting your family photos.",
      te: "వాట్సాప్ వీడియోల అనవసర జంక్ ఫైళ్లను తొలగిస్తుంది, దీనివల్ల మీ కుటుంబ ఫోటోలు పోకుండా ఫోన్ చాలా వేగంగా పనిచేస్తుంది.",
      ta: "வாட்ஸ்அப் பழைய வீடியோ கழிவுகளை நீக்கி போன் வேகமாக இயங்க உதவுகிறது, குடும்ப புகைப்படங்கள் அழியாது.",
      hi: "व्हाट्सएप के फालतू कचरे और डुप्लीकेट फाइलों को साफ करता है जिससे फोन तेज चलता है और जरूरी फोटो भी नहीं मिटते।"
    },
    whyUseIt: {
      en: "Fixes slow phone, WhatsApp download errors, and phone hanging issues.",
      te: "ఫోన్ స్లో అవ్వడం, వాట్సాప్ ఫోటోలు డౌన్‌లోడ్ కాకపోవడం వంటి సమస్యలను పరిష్కరిస్తుంది.",
      ta: "போன் மெதுவாக இயங்குவது மற்றும் வாட்ஸ்அப் பிரச்சனைகளை சரிசெய்கிறது.",
      hi: "फोन हैंग होने और मेमोरी फुल होने की समस्या को तुरंत ठीक करता है।"
    },
    ruralSafetyTip: {
      en: "Clean once every 15 days using the built-in official Phone Manager. Never install shady 3rd-party cleaner apps from unknown sites.",
      te: "ప్రతి 15 రోజులకు ఒకసారి ఫోన్‌లోని అధికారిక 'Phone Manager' యాప్ ద్వారా క్లీన్ చేయండి. బయటి క్లీనర్ యాప్స్ ఎక్కించవద్దు.",
      ta: "போனிலேயே இருக்கும் 'Phone Manager' மட்டுமே பயன்படுத்தவும்; தேவையற்ற வெளி ஆப்புகளை பதிவிறக்காதீர்கள்.",
      hi: "फोन में पहले से मौजूद 'Phone Manager' से ही साफ करें। बाहर से कोई फालतू क्लीनर ऐप डाउनलोड न करें।"
    },
    keywords: ["storage", "cleaner", "phone manager", "cache", "hang", "స్టోరేజ్", "மெமரி", "स्टोरेज"]
  },
  {
    id: "battery_saver",
    category: "battery",
    name: {
      en: "Super Power Saving Mode (Last 2 Days on Village Power Cuts)",
      te: "సూపర్ పవర్ సేవింగ్ మోడ్ (కరెంట్ లేనప్పుడు 2 రోజులు బ్యాటరీ)",
      ta: "சூப்பர் பவர் சேவிங் மோட் (மின்வெட்டின் போது 2 நாட்கள் பேட்டரி)",
      hi: "सुपर पावर सेविंग मोड (बिजली कटौती में 2 दिन तक बैटरी चलाएं)"
    },
    menuPath: "Settings ➔ Battery ➔ Turn ON 'Super power saving mode'",
    simpleExplanation: {
      en: "Turns the screen dark and restricts background apps so your remaining 20% battery can last for over 24 hours for emergency phone calls.",
      te: "స్క్రీన్‌ను డార్క్ మోడ్‌లోకి మార్చి అనవసర యాప్‌లను ఆపుతుంది, తద్వారా కేవలం 20% ఛార్జింగ్ ఉన్నా 24 గంటలకు పైగా కాల్స్ మాట్లాడుకోవచ్చు.",
      ta: "தேவையற்ற ஆப்புகளை முடக்கி, மீதமுள்ள 20% பேட்டரியைக் கொண்டு அவசர அழைப்புகளுக்கு 24 மணி நேரத்திற்கும் மேல் தாங்க வைக்கிறது.",
      hi: "स्क्रीन को ब्लैक करके सिर्फ जरूरी फोन कॉल चालू रखता है, जिससे 20% बैटरी भी पूरे 24 घंटे से ज्यादा चलती है।"
    },
    whyUseIt: {
      en: "Lifesaver during village power outages, thunderstorms, or while working in agricultural farm fields all day.",
      te: "పల్లెటూర్లలో కరెంట్ పోయినప్పుడు, పొలంలో పనిచేస్తున్నప్పుడు ఫోన్ స్విచ్ ఆఫ్ కాకుండా కాపాడుతుంది.",
      ta: "கிராமப்புற மின்வெட்டு மற்றும் விவசாய நிலங்களில் இருக்கும்போது மிகவும் பயனுள்ளது.",
      hi: "गांव में बिजली कटने पर या दिनभर खेत में काम करते समय फोन को बंद होने से बचाता है।"
    },
    ruralSafetyTip: {
      en: "When back home with electricity, just tap the exit arrow on top right to return to normal mode.",
      te: "కరెంట్ వచ్చాక పైన కుడివైపు ఉన్న ఎగ్జిట్ బాణం గుర్తు నొక్కి సాధారణ మోడ్‌లోకి రావచ్చు.",
      ta: "மின்சாரம் வந்தவுடன் மேலே உள்ள 'Exit' தொட்டு இயல்பு நிலைக்குத் திரும்பலாம்.",
      hi: "बिजली आने पर ऊपर दाईं ओर दिए गए 'Exit' बटन को दबाकर सामान्य मोड में आ जाएं।"
    },
    keywords: ["battery", "power saving", "super power saver", "charge", "బ్యాటరీ", "பேட்டரி", "बैटरी"]
  },
  {
    id: "emergency_sos",
    category: "emergency",
    name: {
      en: "Emergency SOS (Press Power Button 3 or 5 Times for 112)",
      te: "ఎమర్జెన్సీ SOS (పవర్ బటన్ నొక్కితే 112 పోలీసులకు కాల్)",
      ta: "அவசர உதவி SOS (பவர் பட்டனை அழுத்தினால் 112 காவல்துறை உதவி)",
      hi: "इमरजेंसी SOS (पावर बटन दबाने पर 112 पुलिस सहायता)"
    },
    menuPath: "Settings ➔ Safety & emergency ➔ Emergency SOS (Enable & add family contacts)",
    simpleExplanation: {
      en: "Rapidly pressing the Power Button 3 or 5 times automatically calls the national 112 emergency helpline and sends your live GPS location to your family.",
      te: "పవర్ బటన్‌ను వేగంగా 3 లేదా 5 సార్లు నొక్కితే వెంటనే 112 అత్యవసర పోలీసు నంబర్‌కు కాల్ వెళ్లి, మీ కుటుంబ సభ్యులకు లొకేషన్ మెసేజ్ వెళుతుంది.",
      ta: "பவர் பட்டனை வேகமாக 3 அல்லது 5 முறை அழுத்தினால் 112 அவசர உதவிக்கு தானாக அழைப்பு சென்று குடும்பத்தினருக்கு இருப்பிட தகவல் செல்லும்.",
      hi: "पावर बटन को तेजी से 3 या 5 बार दबाने पर तुरंत 112 पुलिस को कॉल लग जाता है और परिवार को आपकी सही लोकेशन पहुंच जाती है।"
    },
    whyUseIt: {
      en: "Essential for women safety, medical emergencies, night travel, or roadside accidents.",
      te: "మహిళల భద్రతకు, రాత్రి ప్రయాణాలలో లేదా ఆకస్మిక వైద్య అత్యవసర సమయాల్లో ప్రాణరక్షకం.",
      ta: "பெண்கள் பாதுகாப்பு மற்றும் இரவு நேர பயணங்களின் போது உயிர்காக்கும் வசதி.",
      hi: "महिलाओं की सुरक्षा, रात में सफर और अचानक बीमारी या दुर्घटना के समय जीवन रक्षक।"
    },
    ruralSafetyTip: {
      en: "Add at least 2 family mobile numbers under 'Emergency Contacts' so they receive your automatic SMS with Google Map link.",
      te: "'Emergency Contacts' లో కనీసం ఇద్దరు కుటుంబ సభ్యుల నంబర్లు సేవ్ చేసి ఉంచండి.",
      ta: "குடும்பத்தில் 2 பேரின் எண்களை இதில் சேர்த்து வைக்கவும்.",
      hi: "कम से कम 2 पारिवारिक नंबर 'Emergency Contacts' में जरूर जोड़ें।"
    },
    keywords: ["sos", "emergency", "112", "police", "power button", "ఎమర్జెన్సీ", "அவசர உதவி", "इमरजेंसी"]
  },
  {
    id: "app_permissions",
    category: "privacy",
    name: {
      en: "App Permissions (Stop Loan & Fake Apps Spying on Contacts/Camera)",
      te: "యాప్ పర్మిషన్స్ (కాంటాక్ట్స్ మరియు కెమెరా రక్షణ)",
      ta: "செயலி அனுமதிகள் (கேமரா & எண்கள் பாதுகாப்பு)",
      hi: "ऐप परमिशन (फर्जी ऐप को कैमरे व कॉन्टैक्ट चुराने से रोकें)"
    },
    menuPath: "Settings ➔ Privacy ➔ Permission manager ➔ Check 'Contacts' and 'Camera'",
    simpleExplanation: {
      en: "Shows which apps can secretly read your private phonebook or turn on camera/microphone. Turn OFF permissions for suspicious loan or gaming apps.",
      te: "ఏ యాప్‌లు మీ ఫోన్‌లోని కాంటాక్ట్స్ లేదా కెమెరా వాడుతున్నాయో చూపిస్తుంది. నకిలీ లోన్ యాప్‌ల నుండి పర్మిషన్లు తీసివేయవచ్చు.",
      ta: "எந்த செயலிகள் உங்கள் எண்களை திருடுகின்றன என பார்த்து அனுமதியை ரத்து செய்ய உதவுகிறது.",
      hi: "देखें कि कौन सा ऐप आपके कॉन्टैक्ट्स या कैमरे का इस्तेमाल कर रहा है और फर्जी लोन ऐप से परमिशन तुरंत हटाएं।"
    },
    whyUseIt: {
      en: "Prevents instant loan apps from stealing your family phone numbers for blackmailing.",
      te: "నకిలీ లోన్ యాప్‌లు మీ బంధువుల ఫోన్ నంబర్లు దొంగిలించి వేధించకుండా అడ్డుకుంటుంది.",
      ta: "கடன் செயலிகள் உங்கள் நண்பர்களின் எண்களைத் திருடி மிரட்டுவதைத் தடுக்கிறது.",
      hi: "फर्जी लोन ऐप को आपके रिश्तेदारों के नंबर चुराकर ब्लैकमेल करने से रोकता है।"
    },
    ruralSafetyTip: {
      en: "A calculator, torch, or simple game app NEVER needs permission to read your contacts or photos. Deny immediately!",
      te: "టార్చ్ లైట్ లేదా క్యాలిక్యులేటర్ యాప్‌లకు కాంటాక్ట్స్ పర్మిషన్ అవసరం లేదు. వెంటనే తీసేయండి!",
      ta: "டார்ச் லைட் அல்லது கால்குலேட்டர் ஆப்பிற்கு உங்கள் எண்கள் தேவைப்படாது; உடனே மறுக்கவும்!",
      hi: "टार्च या कैलकुलेटर ऐप को कभी कॉन्टैक्ट की जरूरत नहीं होती। तुरंत परमिशन 'Don't Allow' करें!"
    },
    keywords: ["permission", "privacy", "camera", "contacts", "loan app", "పర్మిషన్లు", "அனுமதிகள்", "परमिशन"]
  }
];

// 2. Samsung Galaxy (One UI) Settings
const createSamsungGalaxySettings = (): PhoneSettingItem[] => [
  {
    id: "samsung_font_size",
    category: "display",
    name: {
      en: "Font Size & Style (Samsung Easy Mode & Large Text)",
      te: "ఫాంట్ సైజు మరియు ఈజీ మోడ్ (శామ్‌సంగ్ పెద్ద అక్షరాలు)",
      ta: "எழுத்து அளவு & ஈஸி மோட் (சாம்சங் பெரிய எழுத்துக்கள்)",
      hi: "फॉन्ट साइज और ईज़ी मोड (सैमसंग बड़े अक्षर)"
    },
    menuPath: "Settings ➔ Display ➔ Font size and style (or Settings ➔ Display ➔ Easy mode ➔ Turn ON)",
    simpleExplanation: {
      en: "Samsung's exclusive 'Easy Mode' makes all app icons huge, text ultra-large, and keyboard buttons high-contrast yellow for seniors.",
      te: "శామ్‌సంగ్ 'Easy Mode' ద్వారా యాప్ ఐకాన్లు చాలా పెద్దవిగా మారి, అక్షరాలు స్పష్టంగా కనిపిస్తాయి. వృద్ధులకు చాలా సులభం.",
      ta: "சாம்சங்கின் 'Easy Mode' செயலிகளின் படங்களையும் எழுத்துக்களையும் மிகப் பெரிதாக்கி முதியவர்களுக்கு எளிதாக்குகிறது.",
      hi: "सैमसंग का 'Easy Mode' सभी ऐप आइकन और अक्षरों को बहुत बड़ा कर देता है जिससे बुजुर्गों को फोन चलाना बहुत आसान लगता है।"
    },
    whyUseIt: {
      en: "Perfect for parents who struggle with small touch icons.",
      te: "చిన్న అక్షరాలతో ఇబ్బంది పడే తల్లిదండ్రులకు ఇది వరం లాంటిది.",
      ta: "சிறிய எழுத்துக்களால் அவதிப்படும் பெரியவர்களுக்கு மிகவும் ஏற்றது.",
      hi: "जिन बुजुर्गों को स्क्रीन पर छूने में दिक्कत होती है, उनके लिए सबसे अच्छा है।"
    },
    ruralSafetyTip: {
      en: "Turn on 'Easy Mode' in 1 tap for elderly family members.",
      te: "పెద్దవారి కోసం ఒక్క ట్యాప్‌తో 'Easy Mode' ఆన్ చేయండి.",
      ta: "பெரியவர்களுக்கு 'Easy Mode' ஆன் செய்து கொடுங்கள்.",
      hi: "बुजुर्गों के फोन में 'Easy Mode' चालू कर दें।"
    },
    keywords: ["samsung", "easy mode", "font size", "large text", "శామ్‌సంగ్", "சாம்சங்", "सैमसंग"]
  },
  {
    id: "samsung_hotspot",
    category: "network",
    name: {
      en: "Mobile Hotspot & Tethering",
      te: "మొబైల్ హాట్‌స్పాట్ అమరిక",
      ta: "மொபைல் ஹாட்ஸ்பாட்",
      hi: "मोबाइल हॉटस्पॉट सेटिंग्स"
    },
    menuPath: "Settings ➔ Connections ➔ Mobile Hotspot and Tethering ➔ Mobile Hotspot ON",
    simpleExplanation: {
      en: "Shares your Samsung mobile internet connection via Wi-Fi with other phones and TV.",
      te: "మీ శామ్‌సంగ్ మొబైల్ డేటాను ఇతరులకు లేదా స్మార్ట్ టీవీకి వై-ఫై ద్వారా ఇస్తుంది.",
      ta: "உங்கள் சாம்சங் இணையத்தை மற்ற போன்கள் அல்லது டிவிக்கு பகிர்கிறது.",
      hi: "सैमसंग फोन के इंटरनेट को दूसरे मोबाइल या स्मार्ट टीवी से जोड़ने में मदद करता है।"
    },
    whyUseIt: {
      en: "Easy connectivity for children studying or family members.",
      te: "పిల్లల చదువుకు లేదా టీవీలో యూట్యూబ్ చూడటానికి ఉపయోగపడుతుంది.",
      ta: "வீட்டு டிவி அல்லது பிள்ளைகளின் படிப்புக்கு இணையம் தரலாம்.",
      hi: "बच्चों की पढ़ाई या स्मार्ट टीवी पर यूट्यूब चलाने के लिए।"
    },
    ruralSafetyTip: {
      en: "Tap 'Configure' inside Mobile Hotspot to set a strong password.",
      te: "'Configure' పై నొక్కి కఠినమైన పాస్‌వర్డ్ సెట్ చేసుకోండి.",
      ta: "பாஸ்வேர்டை மாற்றி கடினமான பாஸ்வேர்ட் வைக்கவும்.",
      hi: "पासवर्ड जरूर लगाएं ताकि कोई अन्य व्यक्ति आपका डेटा न उड़ा सके।"
    },
    keywords: ["hotspot", "connections", "wifi", "హాట్‌స్పాట్", "ஹாட்ஸ்பாட்", "हॉटस्पॉट"]
  },
  {
    id: "samsung_device_care",
    category: "storage",
    name: {
      en: "Device Care & Auto Optimization (Samsung Storage Cleaner)",
      te: "డివైస్ కేర్ మరియు ఆటో ఆప్టిమైజేషన్ (మెమరీ క్లీనర్)",
      ta: "டிவைஸ் கேர் & மெமரி சுத்தம் (சாம்சங் க்ளீனர்)",
      hi: "डिवाइस केयर (सैमसंग फोन मेमोरी क्लीनर)"
    },
    menuPath: "Settings ➔ Device care ➔ Tap 'Optimize now' (and tap Storage to clean)",
    simpleExplanation: {
      en: "Samsung's built-in doctor: 1-click scans for viruses, closes battery-draining apps, and frees up GBs of WhatsApp clutter.",
      te: "శామ్‌సంగ్ అధికారిక డాక్టర్ లాంటిది: ఒక్క నొక్కుతో వైరస్‌లను తొలగించి, ఫోన్‌ను ఫాస్ట్ చేస్తుంది.",
      ta: "சாம்சங்கின் அதிகாரப்பூர்வ கருவி: ஒரே கிளிக்கில் வைரஸ்களை நீக்கி மெமரியை காலியாக்குகிறது.",
      hi: "सैमसंग का अपना डॉक्टर: सिर्फ 1 क्लिक में फोन को वायरस से मुक्त करता है और फालतू फाइलें हटाकर फोन तेज करता है।"
    },
    whyUseIt: {
      en: "Keeps Samsung phones snappy for 4-5 years without slowing down.",
      te: "ఫోన్ 4-5 సంవత్సరాలైనా హ్యాంగ్ అవ్వకుండా వేగంగా పనిచేస్తుంది.",
      ta: "போன் பல ஆண்டுகள் புதிது போல இயங்க உதவுகிறது.",
      hi: "सैमसंग फोन को सालों-साल बिना हैंग हुए नया जैसा बनाए रखता है।"
    },
    ruralSafetyTip: {
      en: "Turn ON 'Auto restart when needed' inside Device Care so phone restarts automatically at night when you sleep.",
      te: "'Auto restart' ఆన్ చేస్తే రాత్రి నిద్రపోయే సమయంలో ఫోన్ ఆటోమేటిక్‌గా రీస్టార్ట్ అయ్యి ఫ్రెష్‌గా ఉంటుంది.",
      ta: "'Auto restart' ஆன் செய்து வைத்தால் இரவில் தானாக புதுப்பித்துக் கொள்ளும்.",
      hi: "'Auto restart' ऑन रखें ताकि रात में फोन अपने आप फ्रेश हो जाए।"
    },
    keywords: ["device care", "samsung clean", "storage", "virus scan", "డివైస్ కేర్", "டிவைஸ் கேர்", "डिवाइस केयर"]
  },
  {
    id: "samsung_lock_screen",
    category: "security",
    name: {
      en: "Lock Screen Type & Secure Lock Settings",
      te: "స్క్రీన్ లాక్ టైప్ (పిన్ లేదా ఫింగర్‌ప్రింట్)",
      ta: "திரைப் பூட்டு வகை (PIN அல்லது கைரேகை)",
      hi: "स्क्रीन लॉक प्रकार (पिन या फिंगरप्रिंट)"
    },
    menuPath: "Settings ➔ Lock screen ➔ Screen lock type (Choose PIN or Fingerprints)",
    simpleExplanation: {
      en: "Protects your Samsung phone with secure Knox hardware security so lost phones cannot be accessed by anyone.",
      te: "శామ్‌సంగ్ నాక్స్ సెక్యూరిటీ ద్వారా మీ బ్యాంక్ వివరాలు మరియు ఫోటోలకు అత్యున్నత రక్షణ లభిస్తుంది.",
      ta: "சாம்சங் நாக்ஸ் (Knox) பாதுகாப்பு மூலம் உங்கள் தகவல்களை யாரும் திருட முடியாது.",
      hi: "सैमसंग नॉक्स सुरक्षा के साथ फोन पूरी तरह सुरक्षित रहता है, कोई चोर इसे खोल नहीं सकता।"
    },
    whyUseIt: {
      en: "Safeguards your money and personal data.",
      te: "డబ్బులు మరియు ప్రైవేట్ ఫోటోలు సురక్షితంగా ఉంటాయి.",
      ta: "பணம் மற்றும் தனிப்பட்ட புகைப்படங்கள் பாதுகாக்கப்படும்.",
      hi: "पैसे और निजी फोटो सुरक्षित रहते हैं।"
    },
    ruralSafetyTip: {
      en: "Turn ON 'Lock instantly with Power button' under Secure lock settings.",
      te: "'Lock instantly with Power button' ఆన్ చేసి ఉంచండి.",
      ta: "பவர் பட்டன் அழுத்தியவுடன் லாக் ஆவதை உறுதி செய்யவும்.",
      hi: "पावर बटन दबाते ही तुरंत लॉक होने वाला ऑप्शन ऑन रखें।"
    },
    keywords: ["samsung lock", "pin", "knox", "fingerprint", "స్క్రీన్ లాక్", "திரைப் பூட்டு", "स्क्रीन लॉक"]
  }
];

// 3. Xiaomi / Redmi / Poco (MIUI & HyperOS) Settings
const createXiaomiRedmiSettings = (): PhoneSettingItem[] => [
  {
    id: "xiaomi_font",
    category: "display",
    name: {
      en: "Text Size & Full Screen Display",
      te: "టెక్స్ట్ సైజు (రెడ్‌మి పెద్ద అక్షరాలు)",
      ta: "எழுத்து அளவு (ரெட்மி)",
      hi: "टेक्स्ट साइज (रेडमी बड़े अक्षर)"
    },
    menuPath: "Settings ➔ Display ➔ Text size (Drag slider from XS to XXL)",
    simpleExplanation: {
      en: "Enlarges letters up to XXL so elders can read news and WhatsApp effortlessly.",
      te: "అక్షరాలను XXL పరిమాణం వరకు పెంచుకోవచ్చు, వృద్ధులకు వార్తలు మరియు వాట్సాప్ సులభంగా కనిపిస్తాయి.",
      ta: "எழுத்துக்களை XXL அளவுக்கு பெரிதாக்கலாம், முதியவர்கள் எளிதாக படிக்கலாம்.",
      hi: "अक्षरों को XXL साइज तक बड़ा कर सकते हैं ताकि बुजुर्ग आसानी से पढ़ सकें।"
    },
    whyUseIt: {
      en: "Clear vision and zero eye strain.",
      te: "స్పష్టమైన చూపు, కంటికి విశ్రాంతి.",
      ta: "கண்களுக்கு சிரமமின்றி தெளிவாக படிக்கலாம்.",
      hi: "आंखों पर जोर नहीं पड़ता।"
    },
    ruralSafetyTip: {
      en: "Also turn ON 'Reading mode' to turn screen warm at night for eye safety.",
      te: "రాత్రి వేళల్లో కంటి రక్షణ కోసం 'Reading mode' ఆన్ చేయండి.",
      ta: "இரவில் கண்களைப் பாதுகாக்க 'Reading mode' பயன்படுத்தவும்.",
      hi: "रात में आंखों की सुरक्षा के लिए 'Reading mode' ऑन रखें।"
    },
    keywords: ["xiaomi", "redmi", "text size", "font", "reading mode", "రెడ్‌మి", "ரெட்மி", "रेडमी"]
  },
  {
    id: "xiaomi_cleaner",
    category: "storage",
    name: {
      en: "Security App ➔ Cleaner & WhatsApp Cleaner",
      te: "సెక్యూరిటీ యాప్ ➔ క్లీనర్ & వాట్సాప్ క్లీనర్",
      ta: "செக்யூரிட்டி ஆப் ➔ க்ளீனர் (வாட்ஸ்அப் சுத்தம்)",
      hi: "सिक्योरिटी ऐप ➔ क्लीनर व व्हाट्सएप क्लीनर"
    },
    menuPath: "Home Screen ➔ Open green 'Security' app ➔ Tap 'Cleaner' & 'WhatsApp Cleaner'",
    simpleExplanation: {
      en: "Cleans out gigabytes of duplicate WhatsApp good morning videos without deleting family photos.",
      te: "కుటుంబ ఫోటోలు చెరిపివేయకుండా వేల సంఖ్యలో వచ్చే గుడ్ మార్నింగ్ వీడియోల చెత్తను తొలగిస్తుంది.",
      ta: "குடும்ப படங்கள் அழியாமல் தேவையற்ற வாட்ஸ்அப் வீடியோக்களை மட்டுமே நீக்கும்.",
      hi: "फैमिली फोटो हटाए बिना व्हाट्सएप के फालतू वीडियो और कचरे को साफ करता है।"
    },
    whyUseIt: {
      en: "Instantly frees 3GB-8GB memory when Redmi phone says 'Storage Space Running Out'.",
      te: "ఫోన్ మెమరీ ఫుల్ అయినప్పుడు 3GB నుండి 8GB వరకు ఖాళీ చేసి ఫోన్‌ను ఫాస్ట్ చేస్తుంది.",
      ta: "மெமரி நிரம்பிவிட்டதாக எச்சரிக்கும் போது பல ஜிபி இடத்தை மீட்கிறது.",
      hi: "जब फोन कहे कि 'मेमोरी भर गई है' तो 3 से 8 जीबी तुरंत खाली करता है।"
    },
    ruralSafetyTip: {
      en: "Always review before tapping 'Deep Clean'. Do not delete files under 'Photos'.",
      te: "'Deep Clean' చేసేటప్పుడు ఫోటోలు సెలెక్ట్ కాకుండా చూసుకోండి.",
      ta: "'Deep Clean' செய்யும் போது போட்டோக்கள் நீக்கப்படாமல் பார்த்துக்கொள்ளவும்.",
      hi: "'Deep Clean' करते समय फोटो पर टिक न लगाएं।"
    },
    keywords: ["security app", "cleaner", "redmi cleaner", "whatsapp cleaner", "క్లీనర్", "க்ளீனர்", "क्लीनर"]
  },
  {
    id: "xiaomi_hotspot",
    category: "network",
    name: {
      en: "Portable Hotspot & One-Time Data Limit",
      te: "పోర్టబుల్ హాట్‌స్పాట్ & డేటా లిమిట్",
      ta: "போர்ட்டபிள் ஹாட்ஸ்பாட் & டேட்டா வரம்பு",
      hi: "पोर्टेबल हॉटस्पॉट व डेटा लिमिट"
    },
    menuPath: "Settings ➔ Portable hotspot ➔ Set up portable hotspot",
    simpleExplanation: {
      en: "Share internet with family, with a special 'One-time data limit' feature so friends cannot finish more than 200MB!",
      te: "ఇతరులకు డేటా షేర్ చేయవచ్చు. 'One-time data limit' ద్వారా వారు 200MB కన్నా ఎక్కువ వాడకుండా లాక్ చేయవచ్చు!",
      ta: "மற்றவர்களுக்கு 200MB-க்கு மேல் இணையம் போகாதவாறு வரம்பு வைத்து பகிரலாம்!",
      hi: "हॉटस्पॉट चालू करें और 'One-time data limit' सेट कर दें ताकि कोई 200MB से ज्यादा आपका नेट न उड़ा सके!"
    },
    whyUseIt: {
      en: "Saves your daily 1.5GB pack from draining completely.",
      te: "మీ రోజువారీ 1.5GB ప్యాక్ మొత్తం ఖాళీ కాకుండా కాపాడుతుంది.",
      ta: "தினசரி 1.5GB பேக் காலியாவதை தடுக்கிறது.",
      hi: "दिनभर का 1.5 जीबी कोटा खत्म होने से बचाता है।"
    },
    ruralSafetyTip: {
      en: "Always set 'One-time data limit' to 500MB when lending internet to others.",
      te: "ఇతరులకు హాట్‌స్పాట్ ఇచ్చినప్పుడు లిమిట్ 500MB గా సెట్ చేయండి.",
      ta: "மற்றவர்களுக்கு ஹாட்ஸ்பாட் தரும்போது 500MB வரம்பு வைக்கவும்.",
      hi: "दूसरों को नेट देते समय लिमिट 500MB पर सेट रखें।"
    },
    keywords: ["portable hotspot", "hotspot limit", "redmi hotspot", "హాట్‌స్పాట్", "ஹாட்ஸ்பாட்", "हॉटस्पॉट"]
  }
];

// 4. Vivo / iQOO (Funtouch OS) Settings
const createVivoSettings = (): PhoneSettingItem[] => [
  {
    id: "vivo_font",
    category: "display",
    name: {
      en: "Display & Brightness ➔ Font Size",
      te: "ఫాంట్ సైజు మరియు పెద్ద అక్షరాలు (వివో)",
      ta: "எழுத்து அளவு (விவோ)",
      hi: "फॉन्ट साइज व बड़े अक्षर (वीवो)"
    },
    menuPath: "Settings ➔ Display & brightness ➔ Font size (Drag slider to maximum)",
    simpleExplanation: {
      en: "Enlarges letters across all Vivo menus and apps for easy reading.",
      te: "వివో ఫోన్‌లోని అన్ని మెనూలు మరియు యాప్స్ అక్షరాలను స్పష్టంగా పెద్దవిగా చేస్తుంది.",
      ta: "விவோ போனில் அனைத்து எழுத்துக்களையும் தெளிவாகப் படிக்க பெரிதாக்குகிறது.",
      hi: "वीवो फोन के सभी मेनू और ऐप के अक्षरों को बड़ा करता है।"
    },
    whyUseIt: {
      en: "Ensures seniors can read phone numbers and messages without straining.",
      te: "పెద్దవారు ఎలాంటి ఇబ్బంది లేకుండా నంబర్లు చదవడానికి సహాయపడుతుంది.",
      ta: "முதியவர்கள் சிரமமின்றி எண்களைப் படிக்க உதவுகிறது.",
      hi: "बुजुर्ग बिना परेशानी के नंबर और मैसेज पढ़ सकें।"
    },
    ruralSafetyTip: {
      en: "Also turn ON 'Eye Protection' mode to protect eyesight in dark rooms.",
      te: "రాత్రి వేళల్లో కంటి కోసం 'Eye Protection' ఆన్ చేయండి.",
      ta: "'Eye Protection' வசதியை ஆன் செய்யவும்.",
      hi: "'Eye Protection' चालू रखें।"
    },
    keywords: ["vivo", "font size", "display", "eye protection", "వివో", "விவோ", "वीवो"]
  },
  {
    id: "vivo_imanager",
    category: "storage",
    name: {
      en: "iManager App ➔ Space Clean Up & Virus Scan",
      te: "ఐ-మేనేజర్ యాప్ ➔ స్పేస్ క్లీనప్ & వైరస్ స్కాన్",
      ta: "iManager ஆப் ➔ மெமரி சுத்தம் & வைரஸ் சோதனை",
      hi: "iManager ऐप ➔ मेमोरी सफाई व वायरस स्कैन"
    },
    menuPath: "Home Screen ➔ Open 'iManager' app ➔ Tap 'Space cleanup'",
    simpleExplanation: {
      en: "Vivo's built-in phone booster safely clears junk cache and scans banking apps for fraud.",
      te: "వివో అధికారిక బూస్టర్: జంక్ ఫైళ్లను క్లీన్ చేసి బ్యాంకింగ్ యాప్స్ సురక్షితంగా ఉన్నాయో లేదో స్కాన్ చేస్తుంది.",
      ta: "விவோவின் பாதுகாப்பு கருவி: கழிவுகளை நீக்கி வங்கி ஆப்புகளை சோதிக்கிறது.",
      hi: "वीवो का अपना टूल: फोन का कचरा साफ करता है और बैंक ऐप सुरक्षित रखता है।"
    },
    whyUseIt: {
      en: "Stops Vivo phone hanging and speeds up internet loading.",
      te: "ఫోన్ హ్యాంగ్ అవ్వకుండా వేగాన్ని పెంచుతుంది.",
      ta: "போன் ஹேங் ஆவதை நிறுத்தி வேகத்தை அதிகரிக்கிறது.",
      hi: "फोन की स्पीड बढ़ाता है।"
    },
    ruralSafetyTip: {
      en: "Use iManager once a week for safe maintenance.",
      te: "వారానికి ఒకసారి ఐ-మేనేజర్ ద్వారా క్లీన్ చేయండి.",
      ta: "வாரத்திற்கு ஒருமுறை iManager பயன்படுத்தவும்.",
      hi: "हफ्ते में एक बार iManager से फोन साफ करें।"
    },
    keywords: ["imanager", "vivo clean", "space clean", "వైరస్ స్కాన్", "மெமரி", "आईमैनेजर"]
  }
];

// 5. Motorola / Stock Android (Moto & Pixel) Settings
const createMotorolaPixelSettings = (): PhoneSettingItem[] => [
  {
    id: "moto_font",
    category: "display",
    name: {
      en: "Display Size & Text (Clean Pure Android)",
      te: "డిస్‌ప్లే సైజు & పెద్ద టెక్స్ట్ (స్వచ్ఛమైన ఆండ్రాయిడ్)",
      ta: "எழுத்து அளவு (மோட்டோரோலா / பிக்சல்)",
      hi: "डिस्प्ले साइज व टेक्स्ट (मोटोरोला / पिक्सल)"
    },
    menuPath: "Settings ➔ Display ➔ Display size and text ➔ Increase Font & Display size",
    simpleExplanation: {
      en: "Motorola and Pixel have clean Google Android with zero ads. This increases both letter size and icon size together.",
      te: "మోటోరోలా ఫోన్లలో ఎలాంటి నకిలీ ప్రకటనలు ఉండవు. ఈ సెట్టింగ్ ద్వారా అక్షరాలు మరియు బటన్లు రెండూ పెద్దవిగా మారతాయి.",
      ta: "மோட்டோரோலாவில் விளம்பரங்கள் இருக்காது. எழுத்துக்களையும் ஐகான்களையும் எளிதாகப் பெரிதாக்கலாம்.",
      hi: "मोटोरोला में कोई फालतू विज्ञापन नहीं आते। इससे अक्षर और ऐप के आइकन दोनों बड़े हो जाते हैं।"
    },
    whyUseIt: {
      en: "Cleanest, easiest reading experience for rural elders.",
      te: "వృద్ధులకు అత్యంత పరిశుభ్రమైన, సులభమైన అనుభవం.",
      ta: "பெரியவர்களுக்கு மிகவும் எளிமையான அனுபவம்.",
      hi: "बुजुर्गों के लिए सबसे आसान और साफ-सुथरा अनुभव।"
    },
    ruralSafetyTip: {
      en: "Turn ON 'Bold text' toggle for dark, thick letters that are impossible to miss.",
      te: "'Bold text' ఆన్ చేస్తే అక్షరాలు లావుగా, స్పష్టంగా కనిపిస్తాయి.",
      ta: "'Bold text' ஆன் செய்தால் எழுத்துக்கள் தடிமனாகத் தெரியும்.",
      hi: "'Bold text' ऑन कर दें जिससे अक्षर मोटे और एकदम साफ दिखें।"
    },
    keywords: ["motorola", "moto", "pixel", "display size", "bold text", "మోటోరోలా", "மோட்டோரோலா", "मोटोरोला"]
  },
  {
    id: "moto_files_clean",
    category: "storage",
    name: {
      en: "Files by Google App ➔ Clean Junk",
      te: "గూగుల్ ఫైల్స్ యాప్ ➔ జంక్ క్లీనర్",
      ta: "Files by Google ஆப் ➔ குப்பைகளை நீக்குதல்",
      hi: "Files by Google ऐप ➔ कचरा साफ करें"
    },
    menuPath: "Open 'Files by Google' app ➔ Tap 'Clean' tab at bottom ➔ Tap 'Clean Junk files'",
    simpleExplanation: {
      en: "Official Google app removes temporary trash files without touching your photos or videos.",
      te: "గూగుల్ అధికారిక యాప్ ద్వారా ఫోటోలు పోకుండా కేవలం తాత్కాలిక వ్యర్థాలను సురక్షితంగా తొలగించవచ్చు.",
      ta: "கூகுளின் அதிகாரப்பூர்வ செயலி மூலம் பாதுகாப்பாக குப்பைகளை நீக்கலாம்.",
      hi: "गूगल के असली ऐप से फोन की फालतू फाइलें हटाएं, फोटो बिल्कुल सुरक्षित रहेंगी।"
    },
    whyUseIt: {
      en: "100% safe, verified by Google, zero risk of data loss.",
      te: "100% సురక్షితమైనది, డేటా పోయే ప్రమాదం ఉండదు.",
      ta: "100% பாதுகாப்பானது, எந்த தகவலும் அழியாது.",
      hi: "100% सुरक्षित, कोई डेटा डिलीट होने का खतरा नहीं।"
    },
    ruralSafetyTip: {
      en: "Never install random 'Master Clean' apps from web. Only use 'Files by Google'.",
      te: "బయటి క్లీనర్ యాప్స్ ఎక్కించవద్దు. గూగుల్ ఫైల్స్ మాత్రమే వాడండి.",
      ta: "தேவையற்ற க்ளீனர் ஆப்புகளை பதிவிறக்காதீர்கள்.",
      hi: "बाहरी क्लीनर ऐप कभी डाउनलोड न करें, सिर्फ Files by Google ही चलाएं।"
    },
    keywords: ["files by google", "moto clean", "junk clean", "గూగుల్ ఫైల్స్", "கூகுள் ஃபைல்ஸ்", "गूगल फाइल्स"]
  }
];

// Master Catalog of Popular Smartphone Models in India
export const phoneModelsDatabase: PhoneModelInfo[] = [
  // ONEPLUS
  {
    brand: "OnePlus",
    modelName: "OnePlus 9R / 9 / 9 Pro",
    searchAliases: ["oneplus 9r", "one plus 9r", "1+ 9r", "oneplus9r", "oneplus 9", "oneplus 9 pro"],
    osName: "OxygenOS",
    osVersion: "OxygenOS 13 / 14 (Android 13/14)",
    description: {
      en: "Fast and smooth smartphone running OxygenOS with Hasselblad camera and Warp/SuperVOOC fast charging.",
      te: "ఆక్సిజన్‌ఓఎస్ తో పనిచేసే సూపర్ ఫాస్ట్ వన్‌ప్లస్ 9R స్మార్ట్‌ఫోన్ మరియు వేగవంతమైన ఛార్జింగ్.",
      ta: "OxygenOS மூலம் அதிவேகமாக இயங்கும் ஒன்பிளஸ் 9R போன்.",
      hi: "ऑक्सीजन ओएस पर चलने वाला तेज वनप्लस 9R फोन।"
    },
    settings: createOppoOnePlusRealmeSettings("OnePlus", "OxygenOS")
  },
  {
    brand: "OnePlus",
    modelName: "OnePlus 10R / 11R / 12R",
    searchAliases: ["oneplus 10r", "one plus 10r", "oneplus 11r", "oneplus 12r", "oneplus 11", "oneplus 12", "11r", "12r"],
    osName: "OxygenOS",
    osVersion: "OxygenOS 14 (ColorOS Base)",
    description: {
      en: "Flagship series with 100W SuperVOOC charging, alert slider, and ultra-smooth 120Hz display.",
      te: "100W ఫాస్ట్ ఛార్జింగ్ మరియు అలర్ట్ స్లైడర్ గల వన్‌ప్లస్ ప్రీమియం మొబైల్.",
      ta: "100W அதிவேக சார்ஜிங் கொண்ட ஒன்பிளஸ் போன்.",
      hi: "100W फास्ट चार्जिंग वाला वनप्लस स्मार्टफोन।"
    },
    settings: createOppoOnePlusRealmeSettings("OnePlus", "OxygenOS")
  },
  {
    brand: "OnePlus",
    modelName: "OnePlus Nord CE 2 / CE 3 / CE 4 / Lite",
    searchAliases: ["oneplus nord ce", "nord ce 3 lite", "nord ce 4", "nord ce 2", "nord 3", "oneplus nord"],
    osName: "OxygenOS",
    osVersion: "OxygenOS 13 / 14",
    description: {
      en: "India's highest selling OnePlus mid-range series with 5G, long battery life, and clean software.",
      te: "భారతదేశంలో అత్యధికంగా అమ్ముడైన వన్‌ప్లస్ నార్డ్ సిరీస్ 5G ఫోన్.",
      ta: "இந்தியாவில் அதிகம் விற்பனையாகும் ஒன்பிளஸ் நார்ட் 5G போன்.",
      hi: "भारत में सबसे ज्यादा बिकने वाला वनप्लस नॉर्ड 5G फोन।"
    },
    settings: createOppoOnePlusRealmeSettings("OnePlus", "OxygenOS")
  },

  // REALME
  {
    brand: "Realme",
    modelName: "Realme 11 Pro / 12 Pro / 12 5G",
    searchAliases: ["realme 11 pro", "realme 12 pro", "realme 12", "realme 11", "realme 12 5g"],
    osName: "Realme UI",
    osVersion: "Realme UI 4.0 / 5.0",
    description: {
      en: "Popular camera-centric phone with curved display and Realme UI with easy village accessibility.",
      te: "రియల్‌మీ 11 ప్రో / 12 ప్రో మరియు రియల్‌మీ UI 5.0 సెట్టింగ్స్.",
      ta: "ரியல்மீ 11/12 ப்ரோ போனின் முக்கிய அமைப்புகள்.",
      hi: "रियलमी 11/12 प्रो फोन की जरूरी सेटिंग्स।"
    },
    settings: createOppoOnePlusRealmeSettings("Realme", "Realme UI")
  },
  {
    brand: "Realme",
    modelName: "Realme Narzo 50 / 60 / 70x / 70 Pro",
    searchAliases: ["realme narzo", "narzo 50", "narzo 60", "narzo 70x", "narzo 70 pro", "narzo"],
    osName: "Realme UI",
    osVersion: "Realme UI 4.0 / 5.0",
    description: {
      en: "High-value budget 5G phone designed for gaming, big battery, and fast daily tasks.",
      te: "భారీ బ్యాటరీ మరియు ఫాస్ట్ ప్రాసెసర్ గల రియల్‌మీ నార్జో సిరీస్ ఫోన్.",
      ta: "அதிக பேட்டரி கொண்ட ரியல்மீ நார்சோ போன்.",
      hi: "बड़ी बैटरी वाला रियलमी नार्जो 5G फोन।"
    },
    settings: createOppoOnePlusRealmeSettings("Realme", "Realme UI")
  },
  {
    brand: "Realme",
    modelName: "Realme C53 / C55 / C67",
    searchAliases: ["realme c53", "realme c55", "realme c67", "realme c series", "realme c35"],
    osName: "Realme UI",
    osVersion: "Realme UI T/R Edition & 4.0",
    description: {
      en: "Affordable village entry smartphone with 50MP/108MP camera and 5,000 mAh battery.",
      te: "తక్కువ బడ్జెట్‌లో లభించే ప్రజాదరణ పొందిన రియల్‌మీ C-సిరీస్ ఫోన్.",
      ta: "குறைந்த பட்ஜெட் ரியல்மீ C-சீரிஸ் போன்.",
      hi: "कम बजट वाला लोकप्रिय रियलमी C-सीरीज फोन।"
    },
    settings: createOppoOnePlusRealmeSettings("Realme", "Realme UI")
  },

  // OPPO
  {
    brand: "Oppo",
    modelName: "Oppo Reno 8 / 10 / 11 / 12",
    searchAliases: ["oppo reno", "reno 10", "reno 11", "reno 8", "reno 12", "oppo reno 10 pro"],
    osName: "ColorOS",
    osVersion: "ColorOS 13 / 14",
    description: {
      en: "Premium portrait camera phone running ColorOS with smart AI features and SuperVOOC.",
      te: "కలర్ ఓఎస్ తో పనిచేసే ఒప్పో రెనో సిరీస్ కెమెరా మొబైల్.",
      ta: "ColorOS மூலம் இயங்கும் ஒப்போ ரெனோ போன்.",
      hi: "कलर ओएस पर चलने वाला ओप्पो रेनो फोन।"
    },
    settings: createOppoOnePlusRealmeSettings("Oppo", "ColorOS")
  },
  {
    brand: "Oppo",
    modelName: "Oppo A58 / A78 / A59 / A79",
    searchAliases: ["oppo a58", "oppo a78", "oppo a59", "oppo a79", "oppo a", "oppo a17", "oppo a77"],
    osName: "ColorOS",
    osVersion: "ColorOS 13",
    description: {
      en: "Durable everyday phone with 300% Ultra Volume Mode, ideal for loud ringtones in busy village environments.",
      te: "300% లౌడ్ వాల్యూమ్ కలిగిన ఒప్పో A-సిరీస్ స్మార్ట్‌ఫోన్.",
      ta: "300% அதிக சத்தம் கொண்ட ஒப்போ A-சீரிஸ் போன்.",
      hi: "300% तेज आवाज वाला ओप्पो A-सीरीज फोन।"
    },
    settings: createOppoOnePlusRealmeSettings("Oppo", "ColorOS")
  },
  {
    brand: "Oppo",
    modelName: "Oppo F21 Pro / F23 / F25 Pro",
    searchAliases: ["oppo f21 pro", "oppo f23", "oppo f25 pro", "oppo f", "f21 pro", "f25 pro"],
    osName: "ColorOS",
    osVersion: "ColorOS 13 / 14",
    description: {
      en: "Sleek stylish phone with microscope camera, IP65 water resistance, and fast 67W charging.",
      te: "స్టైలిష్ డిజైన్ మరియు వాటర్ రెసిస్టెన్స్ గల ఒప్పో F-సిరీస్ ఫోన్.",
      ta: "ஒப்போ F-சீரிஸ் போனின் முழு அமைப்புகள்.",
      hi: "ओप्पो F-सीरीज फोन की पूरी सेटिंग्स।"
    },
    settings: createOppoOnePlusRealmeSettings("Oppo", "ColorOS")
  },

  // SAMSUNG GALAXY
  {
    brand: "Samsung",
    modelName: "Samsung Galaxy M14 / M15 / M34 / M35",
    searchAliases: ["samsung m14", "samsung m15", "samsung m34", "samsung m35", "galaxy m15", "galaxy m14", "samsung m series"],
    osName: "One UI",
    osVersion: "One UI 5.1 / 6.0 Core",
    description: {
      en: "Monster 6,000 mAh battery phone, great voice focus, 4 years of OS updates, and Easy Mode for parents.",
      te: "6,000 mAh భారీ బ్యాటరీ మరియు ఈజీ మోడ్ గల శామ్‌సంగ్ గెలాక్సీ M-సిరీస్ మొబైల్.",
      ta: "6,000 mAh பெரிய பேட்டரி கொண்ட சாம்சங் M-சீரிஸ் போன்.",
      hi: "6000 mAh बड़ी बैटरी वाला सैमसंग गैलेक्सी M-सीरीज फोन।"
    },
    settings: createSamsungGalaxySettings()
  },
  {
    brand: "Samsung",
    modelName: "Samsung Galaxy A14 / A15 / A25 / A35 / A55",
    searchAliases: ["samsung a14", "samsung a15", "samsung a25", "samsung a35", "samsung a55", "galaxy a15", "samsung a series"],
    osName: "One UI",
    osVersion: "One UI 6.0",
    description: {
      en: "Samsung's premium A-series with Knox Vault hardware security, Super AMOLED display, and IP67 protection.",
      te: "నాక్స్ వాల్ట్ సెక్యూరిటీ మరియు సూపర్ అమోలెడ్ స్క్రీన్ గల శామ్‌సంగ్ A-సిరీస్.",
      ta: "சாம்சங் நாக்ஸ் பாதுகாப்பு கொண்ட A-சீரிஸ் போன்.",
      hi: "सैमसंग नॉक्स सुरक्षा वाला गैलेक्सी A-सीरीज फोन।"
    },
    settings: createSamsungGalaxySettings()
  },
  {
    brand: "Samsung",
    modelName: "Samsung Galaxy F14 / F15 / F34 / F54",
    searchAliases: ["samsung f14", "samsung f15", "samsung f34", "samsung f54", "galaxy f15", "samsung f series"],
    osName: "One UI",
    osVersion: "One UI 5.1 / 6.0",
    description: {
      en: "Long-lasting battery phone with crisp AMOLED display and Voice Focus for crystal clear phone calls.",
      te: "స్పష్టమైన కాల్స్ మరియు భారీ బ్యాటరీ గల శామ్‌సంగ్ F-సిరీస్ మొబైల్.",
      ta: "நீண்ட பேட்டரி கொண்ட சாம்சங் F-சீரிஸ் போன்.",
      hi: "साफ आवाज और बड़ी बैटरी वाला सैमसंग F-सीरीज फोन।"
    },
    settings: createSamsungGalaxySettings()
  },

  // XIAOMI / REDMI / POCO
  {
    brand: "Redmi / Xiaomi",
    modelName: "Redmi Note 11 / Note 12 / Note 13 Pro",
    searchAliases: ["redmi note 12", "redmi note 13", "redmi note 11", "redmi note 13 pro", "xiaomi note", "redmi note"],
    osName: "MIUI / Xiaomi HyperOS",
    osVersion: "MIUI 14 & HyperOS 1.0",
    description: {
      en: "Super popular Indian smartphone with 200MP camera, bright 120Hz display, and Xiaomi HyperOS.",
      te: "భారతదేశంలో అత్యంత ప్రాచుర్యం పొందిన రెడ్‌మి నోట్ సిరీస్ మరియు హైపర్ ఓఎస్ సెట్టింగ్స్.",
      ta: "மிகவும் பிரபலமான ரெட்மி நோட் சீரிஸ் போன் அமைப்புகள்.",
      hi: "भारत का सबसे लोकप्रिय रेडमी नोट सीरीज स्मार्टफोन।"
    },
    settings: createXiaomiRedmiSettings()
  },
  {
    brand: "Redmi / Xiaomi",
    modelName: "Redmi 12 5G / 13C 5G",
    searchAliases: ["redmi 12 5g", "redmi 13c", "redmi 12", "redmi 13c 5g", "redmi 11 prime"],
    osName: "MIUI / Xiaomi HyperOS",
    osVersion: "MIUI 14 / HyperOS",
    description: {
      en: "India's highest rated budget 5G phone under ₹12,000 with glass back and 5,000 mAh battery.",
      te: "₹12,000 లోపు లభించే బెస్ట్ 5G రెడ్‌మి 12 మొబైల్ సెట్టింగ్స్ గైడ్.",
      ta: "பட்ஜெட் ரெட்மி 12 5G போனின் முழு அமைப்புகள்.",
      hi: "बजट में सबसे बेहतरीन रेडमी 12 5G फोन की सेटिंग्स।"
    },
    settings: createXiaomiRedmiSettings()
  },

  // VIVO / IQOO
  {
    brand: "Vivo",
    modelName: "Vivo V27 / V29 / V30 / V40",
    searchAliases: ["vivo v29", "vivo v27", "vivo v30", "vivo v40", "vivo v29e", "vivo v series"],
    osName: "Funtouch OS",
    osVersion: "Funtouch OS 13 / 14",
    description: {
      en: "Celebrated Aura Light portrait phone with Zeiss optics and ultra-slim curved design.",
      te: "ఆరా లైట్ మరియు ప్రొఫెషనల్ కెమెరా గల వివో V-సిరీస్ మొబైల్ సెట్టింగ్స్.",
      ta: "விவோ V-சீரிஸ் கேமரா போன் அமைப்புகள்.",
      hi: "ऑरा लाइट और शानदार कैमरे वाला वीवो V-सीरीज फोन।"
    },
    settings: createVivoSettings()
  },
  {
    brand: "Vivo",
    modelName: "Vivo T2 5G / T3 5G / T3x / Y200",
    searchAliases: ["vivo t2", "vivo t3", "vivo t3x", "vivo y200", "vivo y28", "vivo y56", "vivo t series"],
    osName: "Funtouch OS",
    osVersion: "Funtouch OS 14",
    description: {
      en: "High-value performance phone with 6,000 mAh battery and dual stereo speakers.",
      te: "భారీ బ్యాటరీ మరియు వేగవంతమైన స్పీడ్ కలిగిన వివో T-సిరీస్ మరియు Y-సిరీస్.",
      ta: "நீண்ட பேட்டரி கொண்ட விவோ T மற்றும் Y-சீரிஸ் போன்.",
      hi: "बड़ी बैटरी और तेज आवाज वाला वीवो T-सीरीज फोन।"
    },
    settings: createVivoSettings()
  },

  // MOTOROLA
  {
    brand: "Motorola",
    modelName: "Motorola Moto G34 / G45 / G54 / G64 / G84",
    searchAliases: ["moto g34", "moto g45", "moto g54", "moto g64", "moto g84", "motorola moto g", "moto g series", "moto"],
    osName: "My UX / Hello UI",
    osVersion: "Hello UI (Clean Stock Android 14)",
    description: {
      en: "Clean Android with zero ads, Moto chop-chop gestures for flashlight, and Dolby Atmos audio.",
      te: "ప్రకటనలు లేని క్లీన్ ఆండ్రాయిడ్, రెండుసార్లు షేక్ చేస్తే టార్చ్ ఆన్ అయ్యే మోటోరోలా మొబైల్.",
      ta: "விளம்பரமில்லாத தூய ஆண்ட்ராய்டு கொண்ட மோட்டோரோலா போன்.",
      hi: "बिना किसी फालतू विज्ञापन वाला शुद्ध मोटोरोला स्मार्टफोन।"
    },
    settings: createMotorolaPixelSettings()
  }
];

// Helper to search models by user input
export function searchPhoneModels(query: string): PhoneModelInfo[] {
  const cleanQ = query.trim().toLowerCase();
  if (!cleanQ) return phoneModelsDatabase;

  return phoneModelsDatabase.filter(m => {
    const brandMatch = m.brand.toLowerCase().includes(cleanQ);
    const modelMatch = m.modelName.toLowerCase().includes(cleanQ);
    const aliasMatch = m.searchAliases.some(alias => cleanQ.includes(alias) || alias.includes(cleanQ));
    return brandMatch || modelMatch || aliasMatch;
  });
}
