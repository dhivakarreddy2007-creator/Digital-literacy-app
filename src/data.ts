import { Language, FAQItem, VideoItem, PosterItem } from './types';

export interface LearningStep {
  title: Record<Language, string>;
  desc: Record<Language, string>;
}

export interface LearningModule {
  id: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: string;
  color: string;
  title: Record<Language, string>;
  sub: Record<Language, string>;
  steps: LearningStep[];
  tips: Record<Language, string[]>;
}

export const learningModules: LearningModule[] = [
  // 1. Beginner: Smartphone Basics
  {
    id: "smartphone_basics",
    category: "smartphone",
    level: "Beginner",
    icon: "Smartphone",
    color: "from-teal-500 to-emerald-600",
    title: {
      en: "Smartphone Basics",
      te: "స్మార్ట్‌ఫోన్ ప్రాథమిక అంశాలు",
      ta: "ஸ்மார்ட்போன் அடிப்படைகள்",
      hi: "स्मार्टफोन की बुनियादी बातें"
    },
    sub: {
      en: "Learn how to make calls, save contacts, download safe apps, and set a screen lock.",
      te: "ఫోన్ కాల్స్ చేయడం, కాంటాక్ట్స్ సేవ్ చేయడం, సురక్షితమైన యాప్స్ డౌన్‌లోడ్ చేయడం మరియు స్క్రీన్ లాక్ సెట్ చేయడం నేర్చుకోండి.",
      ta: "அழைப்புகளை மேற்கொள்வது, தொடர்புகளைச் சேமிப்பது, செயலிகளைப் பதிவிறக்குவது மற்றும் திரைப் பூட்டுகளை அமைப்பது எப்படி என்று கற்றுக் கொள்ளுங்கள்.",
      hi: "कॉल करना, संपर्क सहेजना, सुरक्षित ऐप डाउनलोड करना और स्क्रीन लॉक सेट करना सीखें।"
    },
    steps: [
      {
        title: {
          en: "Dialing and Saving Village Contacts",
          te: "ఫోన్ కాల్స్ చేయడం మరియు కాంటాక్ట్స్ భద్రపరచడం",
          ta: "அழைப்புகளைச் செய்வது மற்றும் தொடர்புகளைச் சேமிப்பது",
          hi: "कॉल करना और संपर्क सहेजना"
        },
        desc: {
          en: "Open the Phone app. Type the 10-digit number and tap Call. To save, click 'Create New Contact', type their name (e.g., Village Doctor or Ration Shop) and save to your phone account.",
          te: "ఫోన్ యాప్ తెరిచి 10 అంకెల నంబర్ టైప్ చేసి కాల్ చేయండి. 'Create New Contact' నొక్కి పేరు రాసి సేవ్ చేసుకోండి.",
          ta: "போன் செயலியைத் திறந்து 10 இலக்க எண்ணை உள்ளிட்டு அழைக்கவும். 'Create New Contact' மூலம் பெயரை எழுதி சேமிக்கவும்.",
          hi: "फोन ऐप खोलें, 10 अंकों का नंबर डायल करें। 'नया संपर्क बनाएं' पर टैप करके नाम लिखें और सेव करें।"
        }
      },
      {
        title: {
          en: "Downloading Safe Apps from Play Store",
          te: "ప్లే స్టోర్ నుండి సురక్షిత యాప్‌లను డౌన్‌లోడ్ చేయడం",
          ta: "கூகுள் ப்ளே ஸ்டோரிலிருந்து செயலிகளை நிறுவுதல்",
          hi: "प्ले स्टोर से सुरक्षित ऐप डाउनलोड करना"
        },
        desc: {
          en: "Always download apps only from Google Play Store. Never install APK files received on WhatsApp or unknown website links.",
          te: "గూగుల్ ప్లే స్టోర్ లోని యాప్స్ మాత్రమే డౌన్‌లోడ్ చేయండి. వాట్సాప్ లింకుల నుండి ఎప్పుడూ యాప్స్ ఇన్‌స్టాల్ చేయవద్దు.",
          ta: "கூகுள் ப்ளே ஸ்டோரிலிருந்து மட்டுமே செயலிகளைப் பதிவிறக்கவும். வாட்ஸ்அப் லிங்க்குகளை நம்பி பதிவிறக்கக் கூடாது.",
          hi: "हमेशा गूगल प्ले स्टोर से ही ऐप डाउनलोड करें। व्हाट्सएप पर आई किसी अज्ञात लिंक से ऐप कभी न डालें।"
        }
      },
      {
        title: {
          en: "Setting up a Screen Lock PIN",
          te: "స్క్రీన్ లాక్ పిన్ అమర్చుకోవడం",
          ta: "திரைப் பூட்டு (PIN) அமைத்தல்",
          hi: "स्क्रीन लॉक पिन सेट करना"
        },
        desc: {
          en: "Go to Settings -> Security -> Screen Lock. Set a secret 4-digit PIN to prevent others from accessing your personal messages or bank accounts.",
          te: "సెట్టింగ్స్ లో స్క్రీన్ లాక్ ఎంచుకుని 4 అంకెల పిన్ పెట్టుకోండి. దీనివల్ల ఫోన్ పోయినా మీ సమాచారం సురక్షితంగా ఉంటుంది.",
          ta: "அமைப்புகளில் திரைப் பூட்டைத் தேர்வு செய்து 4 இலக்க PIN அமைக்கவும். இது உங்கள் விவரங்களைப் பாதுகாக்கும்.",
          hi: "सेटिंग्स में स्क्रीन लॉक चुनें और 4 अंकों का पिन सेट करें ताकि फोन खोने पर भी कोई आपकी निजी जानकारी न देख सके।"
        }
      }
    ],
    tips: {
      en: ["Clean phone camera lens regularly", "Never tell your screen lock PIN to strangers", "Avoid using phone while plugged in charging"],
      te: ["స్క్రీన్ పిన్ ఎవరికీ చెప్పవద్దు", "ఛార్జింగ్ లో ఉన్నప్పుడు ఫోన్ మాట్లాడవద్దు", "ఎండలో మొబైల్ ఎక్కువసేపు ఉంచవద్దు"],
      ta: ["திரைப் பூட்டு PIN யாருக்கும் பகிர வேண்டாம்", "சார்ஜ் போடும் போது போன் பேச வேண்டாம்", "வெயிலில் போனை வைக்கக் கூடாது"],
      hi: ["स्क्रीन लॉक पिन किसी अजनबी को न बताएं", "चार्जिंग के समय फोन का इस्तेमाल न करें", "तेज धूप में फोन को ज्यादा समय न रखें"]
    }
  },

  // 2. Beginner: Using the Internet & Mobile Data
  {
    id: "internet_basics",
    category: "internet",
    level: "Beginner",
    icon: "Globe",
    color: "from-sky-500 to-blue-600",
    title: {
      en: "Using the Internet & Mobile Data",
      te: "ఇంటర్నెట్ మరియు మొబైల్ డేటా వాడకం",
      ta: "இணையம் மற்றும் மொபைல் டேட்டா பயன்பாடு",
      hi: "इंटरनेट और मोबाइल डेटा का उपयोग"
    },
    sub: {
      en: "Turn on mobile data or Wi-Fi, search on Google, and use the internet wisely.",
      te: "మొబైల్ డేటా లేదా వైఫై ఆన్ చేయడం, గూగుల్ శోధన మరియు ఇంటర్నెట్ సరిగ్గా ఉపయోగించడం నేర్చుకోండి.",
      ta: "மொபைல் டேட்டா அல்லது வைஃபை ஆன் செய்வது, கூகுள் தேடல் மற்றும் இணையத்தை சரியாகப் பயன்படுத்துவது.",
      hi: "मोबाइल डेटा या वाई-फाई चालू करना, गूगल पर खोजना और इंटरनेट का समझदारी से उपयोग करना सीखें।"
    },
    steps: [
      {
        title: {
          en: "Turning Mobile Data & Wi-Fi On/Off",
          te: "మొబైల్ డేటా మరియు వైఫై ఆన్/ఆఫ్ చేయడం",
          ta: "மொபைல் டேட்டா மற்றும் வைஃபை ஆன்/ஆஃப் செய்தல்",
          hi: "मोबाइल डेटा और वाई-फाई चालू या बंद करना"
        },
        desc: {
          en: "Swipe down from top of screen. Tap Mobile Data icon to turn on internet. When near a village panchayat Wi-Fi, connect to save mobile recharge data.",
          te: "స్క్రీన్ పై నుండి కిందకు లాగి డేటా గుర్తును తాకండి. గ్రామ పంచాయతీ వైఫై ఉంటే కనెక్ట్ అయి రీఛార్జ్ డేటా ఆదా చేయండి.",
          ta: "திரையின் மேலிருந்து கீழே இழுத்து டேட்டா ஐகானைத் தொடவும். இலவச வைஃபை இருந்தால் இணைத்து டேட்டாவை சேமிக்கவும்.",
          hi: "स्क्रीन को ऊपर से नीचे खींचें और डेटा आइकन पर टैप करें। उपलब्ध होने पर वाई-फाई का उपयोग करके डेटा बचाएं।"
        }
      },
      {
        title: {
          en: "Searching with Google Voice",
          te: "గూగుల్ వాయిస్ సెర్చ్ తో మాట్లాడి వెతకడం",
          ta: "கூகுள் வாய்ஸ் சர்ச் மூலம் தேடுதல்",
          hi: "गूगल वॉयस सर्च से बोलकर खोजना"
        },
        desc: {
          en: "Tap the microphone on Google search bar. Speak clearly in Telugu, Tamil, Hindi, or English to find weather, mandi crop prices, and bus timings.",
          te: "గూగుల్ సెర్చ్ లోని మైక్రోఫోన్ బటన్ నొక్కి మీ సొంత భాషలో మాట్లాడి వాతావరణం, పంట ధరలు తెలుసుకోవచ్చు.",
          ta: "கூகுள் மைக்கில் பேசி உங்கள் மொழியிலேயே வானிலை மற்றும் பயிர் விலை நிலவரங்களை உடனடியாக அறியலாம்.",
          hi: "गूगल माइक आइकन दबाकर अपनी भाषा में बोलें और मौसम, फसल भाव या जरूरी जानकारी तुरंत पाएं।"
        }
      },
      {
        title: {
          en: "Understanding Daily Data Limit (1.5GB/day)",
          te: "రోజువారీ 1.5GB డేటా పరిమితిని అర్థం చేసుకోవడం",
          ta: "தினசரி 1.5GB டேட்டா பயன்பாட்டை கவனித்தல்",
          hi: "दैनिक 1.5GB डेटा सीमा पर नजर रखना"
        },
        desc: {
          en: "Watching high-definition videos uses data fast. Lower YouTube video quality to 360p to make your 1.5GB pack last the entire day.",
          te: "యూట్యూబ్ లో వీడియో క్వాలిటీని 360p లో చూస్తే రోజువారీ 1.5GB డేటా త్వరగా ఖర్చు అవ్వదు.",
          ta: "யூடியூப்பில் வீடியோ தெளிவுத்திறனை 360p-ல் வைத்தால் நாள் முழுவதும் டேட்டா வரும்.",
          hi: "यूट्यूब वीडियो को 360p क्वालिटी पर देखें ताकि आपका 1.5GB डेटा पूरे दिन चल सके।"
        }
      }
    ],
    tips: {
      en: ["Turn off mobile data at night to prevent background battery drain", "Verify government websites end in .gov.in", "Avoid clicking pop-up ads claiming free gifts"],
      te: ["రాత్రి పూట మొబైల్ డేటా ఆపివేయండి", "ప్రభుత్వ వెబ్‌సైట్లు .gov.in తో ఉంటాయి", "ఉచిత కానుకల ప్రకటనలను నమ్మవద్దు"],
      ta: ["இரவில் மொபைல் டேட்டாவை அணைக்கவும்", "அரசு தளங்களில் .gov.in இருக்கும்", "இலவச பரிசு விளம்பரங்களை கிளிக் செய்ய வேண்டாம்"],
      hi: ["रात में मोबाइल डेटा बंद रखें", "सरकारी वेबसाइटों के पते में .gov.in अवश्य देखें", "फ्री गिफ्ट वाले विज्ञापनों पर क्लिक न करें"]
    }
  },

  // 3. Beginner: WhatsApp & Social Media Safety
  {
    id: "whatsapp_social",
    category: "communication",
    level: "Beginner",
    icon: "MessageSquare",
    color: "from-green-500 to-teal-600",
    title: {
      en: "WhatsApp & Social Media Safety",
      te: "వాట్సాప్ & సోషల్ మీడియా భద్రత",
      ta: "வாட்ஸ்அப் மற்றும் சமூக வலைதளப் பாதுகாப்பு",
      hi: "व्हाट्सएप और सोशल मीडिया सुरक्षा"
    },
    sub: {
      en: "Chat, share photos and video call safely. Spot fake news before forwarding.",
      te: "చాటింగ్, ఫోటోలు పంపడం మరియు సురక్షిత వీడియో కాల్స్. నకిలీ వార్తలను గుర్తించడం నేర్చుకోండి.",
      ta: "பாதுகாப்பாக செய்தி அனுப்புதல், வீடியோ அழைப்புகள் மற்றும் போலிச் செய்திகளை கண்டறிதல்.",
      hi: "चैट, फोटो शेयरिंग और वीडियो कॉल सुरक्षित तरीके से करना सीखें। अफवाहों को आगे न बढ़ाएं।"
    },
    steps: [
      {
        title: {
          en: "Sending Voice Messages (Audio Notes)",
          te: "వాయిస్ నోట్స్ (ఆడియో మెసేజ్లు) పంపడం",
          ta: "குரல் செய்திகள் (Voice Notes) அனுப்புதல்",
          hi: "बोलकर वॉइस मैसेज भेजना"
        },
        desc: {
          en: "In any chat, hold the green microphone button, speak your message, and release to send. Perfect if typing in regional script is difficult.",
          te: "చాట్ లోని మైక్రోఫోన్ బటన్ నొక్కి పట్టుకుని మాట్లాడి వదిలేస్తే వాయిస్ మెసేజ్ వెళ్తుంది. టైప్ చేయాల్సిన అవసరం లేదు.",
          ta: "மைக்ரோஃபோன் பட்டனை அழுத்திப் பிடித்துப் பேசி விடுவித்தால் குரல் செய்தி போய்விடும்.",
          hi: "चैट में माइक बटन दबाकर रखें, अपनी बात बोलें और छोड़ दें। टाइप किए बिना संदेश चला जाएगा।"
        }
      },
      {
        title: {
          en: "Free Family Video Calls",
          te: "కుటుంబ సభ్యులతో ఉచిత వీడియో కాల్స్",
          ta: "இலவச குடும்ப வீடியோ அழைப்புகள்",
          hi: "परिजनों से मुफ्त वीडियो कॉल करना"
        },
        desc: {
          en: "Tap the video camera icon at top of chat to make high-quality face-to-face calls to children or relatives living in other towns.",
          te: "పైభాగంలోని వీడియో కెమెరా గుర్తును తాకి నగరాలలో ఉండే మీ పిల్లలతో ముఖాముఖి ఉచితంగా మాట్లాడవచ్చు.",
          ta: "மேலே உள்ள கேமரா ஐகானைத் தொட்டு தூரத்தில் உள்ள உறவினர்களுடன் வீடியோ காலில் பேசலாம்.",
          hi: "चैट में ऊपर दिए गए वीडियो कैमरा आइकन पर टैप करके दूर रहने वाले अपनों से आमने-सामने बात करें।"
        }
      },
      {
        title: {
          en: "Stopping the Spread of Fake News",
          te: "నకిలీ వార్తలు మరియు వదంతులను ఆపడం",
          ta: "போலி வதந்திகளைப் பரப்புவதைத் தடுத்தல்",
          hi: "फर्जी खबरों और अफवाहों को रोकना"
        },
        desc: {
          en: "Never forward messages marked 'Forwarded many times' without verifying. Rumors about child kidnappers or free money cause real harm.",
          te: "'Forwarded many times' ఉన్న మెసేజ్లను గుడ్డిగా ఇతరులకు పంపవద్దు. నిజమైన వార్తలను మాత్రమే నమ్మండి.",
          ta: "பலமுறை பகிரப்பட்ட செய்திகளை உறுதிப்படுத்தாமல் மற்றவர்களுக்கு அனுப்ப வேண்டாம்.",
          hi: "फॉरवर्ड किए गए संदेशों को बिना जांचे आगे न भेजें। अफवाहों से समाज में डर फैलता है।"
        }
      }
    ],
    tips: {
      en: ["Set profile photo privacy to 'My Contacts'", "Never post bank passbook or Aadhaar cards in public groups", "Block and report harassing numbers"],
      te: ["ప్రొఫైల్ ఫోటో 'మై కాంటాక్ట్స్' కి మాత్రమే కనిపించేలా ఉంచండి", "ఆధార్ లేదా బ్యాంక్ ఫోటోలను గ్రూపులలో పెట్టవద్దు", "వేధించే నంబర్లను బ్లాక్ చేయండి"],
      ta: ["ப்ரொஃபைல் போட்டோவை 'My Contacts' என வைக்கவும்", "ஆதார் மற்றும் வங்கி பாஸ்புக்கை பகிரக் கூடாது", "தேவையற்ற எண்களை பிளாக் செய்யவும்"],
      hi: ["प्रोफाइल फोटो केवल 'My Contacts' को ही दिखाएं", "बैंक पासबुक या आधार कार्ड ग्रुप में न डालें", "परेशान करने वाले नंबरों को तुरंत ब्लॉक करें"]
    }
  },

  // 4. Intermediate: Safe Digital Payments (UPI)
  {
    id: "digital_payments",
    category: "payments",
    level: "Intermediate",
    icon: "CreditCard",
    color: "from-emerald-500 to-green-600",
    title: {
      en: "Safe Digital Payments (UPI)",
      te: "సురక్షిత డిజిటల్ చెల్లింపులు (యూపీఐ)",
      ta: "பாதுகாப்பான டிஜிட்டல் கட்டணங்கள் (UPI)",
      hi: "सुरक्षित डिजिटल भुगतान (यूपीआई)"
    },
    sub: {
      en: "Master Google Pay / PhonePe checkout, merchant QR scanning, and checking bank balance safely.",
      te: "గూగుల్ పే మరియు ఫోన్‌పే వాడకం, క్యూఆర్ కోడ్ స్కానింగ్ మరియు ఖాతా బ్యాలెన్స్ భద్రంగా తెలుసుకోవడం.",
      ta: "கூகுள் பே / போன்பே கட்டணங்கள், கியூஆர் ஸ்கேன் செய்வது மற்றும் வங்கி கணக்கு இருப்பை சரிபார்த்தல்.",
      hi: "गूगल पे / फोनपे चलाना, क्यूआर कोड स्कैन करना और सुरक्षित रूप से बैंक बैलेंस चेक करना।"
    },
    steps: [
      {
        title: {
          en: "Scanning Shop QR Codes Correctly",
          te: "దుకాణాల్లో క్యూఆర్ కోడ్ స్కాన్ చేసే సరైన పద్ధతి",
          ta: "கடையின் QR குறியீட்டைச் சரியாக ஸ்கேன் செய்தல்",
          hi: "दुकान पर क्यूआर कोड को सही ढंग से स्कैन करना"
        },
        desc: {
          en: "Open GPay/PhonePe -> Scan QR -> Point camera at code -> Enter amount -> Check shopkeeper's real name displayed on screen before typing PIN.",
          te: "యాప్ లో 'Scan QR' నొక్కి, కెమెరాను కోడ్ పై పెట్టండి. అమౌంట్ వేసి, స్క్రీన్ పై దుకాణదారుడి అసలు పేరు సరిచూసుకున్నాకే పిన్ ఇవ్వండి.",
          ta: "Scan QR அழுத்தி தொகையை உள்ளிடவும். கடைக்காரர் பெயர் திரையில் சரியாக வருகிறதா எனப் பார்த்த பிறகே PIN உள்ளிடவும்.",
          hi: "स्कैन क्यूआर चुनें, कैमरा कोड पर रखें, राशि डालें और पिन डालने से पहले स्क्रीन पर दुकानदार का नाम अवश्य जांचें।"
        }
      },
      {
        title: {
          en: "The Golden Rule: No PIN to Receive Money",
          te: "సువర్ణ సూత్రం: డబ్బులు తీసుకోవడానికి పిన్ అవసరం లేదు",
          ta: "பொன்னான விதி: பணம் பெற PIN தேவையில்லை",
          hi: "स्वर्णिम नियम: पैसे प्राप्त करने के लिए पिन नहीं लगता"
        },
        desc: {
          en: "You NEVER need to enter your UPI PIN to receive money. If someone claims they are sending a prize or cashback but asks for your PIN, it is 100% a fraud.",
          te: "మీకు ఇతరుల నుండి డబ్బు రావడానికి ఎప్పుడూ పిన్ కొట్టాల్సిన పనిలేదు. బహుమతి ఇస్తామని పిన్ అడిగితే అది మోసం.",
          ta: "பணம் பெற ஒருபோதும் PIN போடத் தேவையில்லை. யாராவது பணம் தருகிறேன் என்று PIN கேட்டால் அது ஏமாற்று வேலை.",
          hi: "पैसे प्राप्त करने के लिए कभी भी पिन नहीं लगता। कोई इनाम देने के नाम पर पिन मांगे तो वह धोखा है।"
        }
      },
      {
        title: {
          en: "Checking Account Balance Safely",
          te: "ఖాతా బ్యాలెన్స్ సురక్షితంగా తనిఖీ చేయడం",
          ta: "வங்கி இருப்பை பாதுகாப்பாக சரிபார்த்தல்",
          hi: "बैंक बैलेंस सुरक्षित रूप से देखना"
        },
        desc: {
          en: "In your payment app, tap 'Check Bank Balance', enter your UPI PIN. Verify bank SMS alert to ensure no unauthorized deductions occur.",
          te: "'Check Bank Balance' క్లిక్ చేసి పిన్ నమోదు చేయండి. బ్యాంకు ఎస్ఎంఎస్ గమనిస్తూ బ్యాలెన్స్ సరిచూసుకోండి.",
          ta: "'Check Balance' மூலம் வங்கி இருப்பை அறிந்து, வங்கியின் எஸ்எம்எஸ் பதிவுகளை சரிபார்க்கவும்.",
          hi: "'चेक बैलेंस' पर टैप करके पिन डालें और खाते में आए एसएमएस से बैलेंस की पुष्टि करें।"
        }
      }
    ],
    tips: {
      en: ["Never share UPI PIN with anyone over the phone", "Set a low daily transaction limit in bank settings", "Never scan a QR code sent over WhatsApp to receive money"],
      te: ["ఫోన్ లో ఎవరికీ యూపీఐ పిన్ చెప్పవద్దు", "డబ్బు తీసుకోవడానికి వాట్సాప్ క్యూఆర్ కోడ్ స్కాన్ చేయవద్దు", "రోజువారీ లావాదేవీల పరిమితి పెట్టుకోండి"],
      ta: ["யாரிடமும் போனில் UPI PIN கூறக் கூடாது", "பணம் பெற வாட்ஸ்அப்பில் வரும் QR-ஐ ஸ்கேன் செய்யக் கூடாது", "தினசரி வரம்பை நிர்ணயிக்கவும்"],
      hi: ["फोन पर किसी को यूपीआई पिन न बताएं", "पैसे पाने के लिए व्हाट्सएप पर आया क्यूआर कोड स्कैन न करें", "दैनिक लिमिट निर्धारित करें"]
    }
  },

  // 5. Intermediate: Mobile Banking & ATM Safety
  {
    id: "mobile_banking_atm",
    category: "banking",
    level: "Intermediate",
    icon: "Landmark",
    color: "from-blue-600 to-indigo-700",
    title: {
      en: "Mobile Banking & ATM Safety",
      te: "మొబైల్ బ్యాంకింగ్ & ఏటీఎం భద్రత",
      ta: "மொபைல் பேங்கிங் & ஏடிஎம் பாதுகாப்பு",
      hi: "मोबाइल बैंकिंग और एटीएम सुरक्षा"
    },
    sub: {
      en: "Use your bank's official app, check statements and keep your ATM card safe.",
      te: "అధికారిక బ్యాంక్ యాప్ వాడటం, స్టేట్‌మెంట్లు చూడటం మరియు ఏటీఎం కార్డును సురక్షితంగా ఉంచడం.",
      ta: "அதிகாரப்பூர்வ வங்கி செயலியைப் பயன்படுத்துதல் மற்றும் ஏடிஎம் கார்டை பாதுகாப்பாக வைத்தல்.",
      hi: "बैंक के आधिकारिक ऐप का उपयोग, खाता विवरण देखना और एटीएम कार्ड को सुरक्षित रखना।"
    },
    steps: [
      {
        title: {
          en: "Official Bank Applications Only",
          te: "అధికారిక బ్యాంక్ యాప్‌లు మాత్రమే వాడాలి",
          ta: "அதிகாரப்பூர்வ வங்கி செயலிகள் மட்டுமே",
          hi: "केवल बैंक का आधिकारिक ऐप ही इस्तेमाल करें"
        },
        desc: {
          en: "Use official apps (YONO SBI, iMobile, PNB One) from Play Store. Never log into net banking on public computers or internet cyber cafes.",
          te: "మీ బ్యాంకు అధికారిక యాప్ (SBI YONO వంటివి) మాత్రమే వాడండి. ఇంటర్నెట్ కేఫ్‌లలో మీ పాస్‌వర్డ్స్ నమోదు చేయవద్దు.",
          ta: "வங்கியின் அதிகாரப்பூர்வ செயலிகளை மட்டும் பயன்படுத்தவும். பொது மையங்களில் நெட் பேங்கிங் செய்ய வேண்டாம்.",
          hi: "केवल अपने बैंक का असली ऐप ही प्ले स्टोर से डाउनलोड करें। साइबर कैफे में नेट बैंकिंग न खोलें।"
        }
      },
      {
        title: {
          en: "ATM Machine Card Skimming Protection",
          te: "ఏటీఎం మెషీన్ వద్ద కార్డు భద్రత",
          ta: "ஏடிஎம் மையங்களில் கார்டு பாதுகாப்பு",
          hi: "एटीएम मशीन पर कार्ड स्किमिंग से बचाव"
        },
        desc: {
          en: "Cover the keypad with one hand while typing your 4-digit ATM PIN. Check if the card slot looks loose or has an extra camera attached.",
          te: "ఏటీఎం పిన్ కొట్టేటప్పుడు ఒక చేత్తో కీప్యాడ్‌ను కప్పి ఉంచండి. కార్డు స్లాట్ వదులుగా ఉందేమో గమనించండి.",
          ta: "ஏடிஎம் PIN அடிக்கும் போது மற்றொரு கையால் மறைக்கவும். கூடுதல் கேமராக்கள் உள்ளதா எனப் பார்க்கவும்.",
          hi: "एटीएम में पिन डालते समय कीपैड को दूसरे हाथ से ढकें। कार्ड स्लॉट ढीला या असामान्य दिखे तो कार्ड न डालें।"
        }
      },
      {
        title: {
          en: "What is CVV on ATM Card?",
          te: "ఏటీఎం కార్డు వెనుక ఉండే CVV అంటే ఏమిటి?",
          ta: "கார்டின் பின் உள்ள CVV என்றால் என்ன?",
          hi: "एटीएम कार्ड के पीछे का सीवीवी (CVV) क्या है?"
        },
        desc: {
          en: "The 3-digit CVV number on the back of your debit card authorizes online shopping. Never photograph or share this 3-digit number with anyone.",
          te: "ఏటీఎం కార్డు వెనుక ఉండే 3 అంకెల CVV నంబర్‌ను ఎవరికీ చూపించవద్దు, ఫోటోలు తీసి వాట్సాప్‌లో పెట్టవద్దు.",
          ta: "கார்டின் பின்னால் உள்ள 3 இலக்க CVV எண் மிகவும் ரகசியமானது. யாருக்கும் பகிரக் கூடாது.",
          hi: "कार्ड के पीछे दिए गए 3 अंकों के सीवीवी (CVV) नंबर को किसी के साथ साझा न करें और न ही फोटो खींचें।"
        }
      }
    ],
    tips: {
      en: ["Never write your ATM PIN on the back of the card", "Block lost ATM cards immediately by calling bank toll-free number", "Change your ATM PIN every 6 months"],
      te: ["ఏటీఎం కార్డుపై పిన్ నంబర్ రాయవద్దు", "కార్డు పోయిన వెంటనే టోల్ ఫ్రీ నంబర్‌కు కాల్ చేసి బ్లాక్ చేయండి", "తరచూ పిన్ మార్చుకోండి"],
      ta: ["கார்டின் மீது PIN எழுதி வைக்கக் கூடாது", "கார்டு தொலைந்தால் உடனே வங்கியிடம் கூறி முடக்கவும்", "அடிக்கடி பின்னை மாற்றவும்"],
      hi: ["एटीएम कार्ड पर कभी भी पिन न लिखें", "कार्ड खोने पर तुरंत टोल-फ्री नंबर पर कॉल कर ब्लॉक कराएं", "हर 6 महीने में पिन बदलें"]
    }
  },

  // 6. Intermediate: Government Services: Aadhaar & DigiLocker
  {
    id: "government_services",
    category: "government",
    level: "Intermediate",
    icon: "FileText",
    color: "from-amber-500 to-orange-600",
    title: {
      en: "Government Services: Aadhaar & DigiLocker",
      te: "ప్రభుత్వ సేవలు: ఆధార్ & డిజిలాకర్",
      ta: "அரசு சேவைகள்: ஆதார் & டிஜிலாக்கர்",
      hi: "सरकारी सेवाएं: आधार और डिजिलॉकर"
    },
    sub: {
      en: "Download e-Aadhaar, store certificates in DigiLocker, and apply for schemes online.",
      te: "ఈ-ఆధార్ డౌన్‌లోడ్ చేయడం, డిజిలాకర్‌లో పత్రాలు భద్రపరచడం మరియు ప్రభుత్వ పథకాలు పొందడం.",
      ta: "இ-ஆதார் பதிவிறக்கம், டிஜிலாக்கரில் சான்றிதழ்கள் சேமிப்பு மற்றும் அரசு திட்டங்களுக்கு விண்ணப்பித்தல்.",
      hi: "ई-आधार डाउनलोड करना, डिजिलॉकर में कागजात रखना और ऑनलाइन सरकारी योजनाओं का लाभ लेना।"
    },
    steps: [
      {
        title: {
          en: "What is DigiLocker Government App?",
          te: "డిజిలాకర్ ప్రభుత్వ యాప్ అంటే ఏమిటి?",
          ta: "டிஜிலாக்கர் (DigiLocker) என்றால் என்ன?",
          hi: "डिजिलॉकर सरकारी ऐप क्या है?"
        },
        desc: {
          en: "DigiLocker is a free government document wallet. Documents in DigiLocker (Aadhaar, Vehicle RC, Driving License, Marks sheets) are legally valid original papers everywhere.",
          te: "డిజిలాకర్ లోని ఆధార్, డ్రైవింగ్ లైసెన్స్ మరియు సర్టిఫికెట్లను పోలీసులు మరియు అధికారులు ఒరిజినల్ డాక్యుమెంట్లుగా అంగీకరిస్తారు.",
          ta: "டிஜிலாக்கரில் உள்ள ஆவணங்கள் அசல் சான்றிதழ்களுக்கு இணையான சட்டப்பூர்வ மதிப்புடையவை.",
          hi: "डिजिलॉकर में रखे गए आधार, ड्राइविंग लाइसेंस और अंक पत्र पूरे भारत में कानूनी रूप से मूल कागजात के बराबर मान्य हैं।"
        }
      },
      {
        title: {
          en: "Downloading Masked Aadhaar for Privacy",
          te: "రక్షణ కోసం మాస్క్‌డ్ ఆధార్ కాపీ పొందడం",
          ta: "பாதுகாப்பான Masked Aadhaar பதிவிறக்கம்",
          hi: "सुरक्षित मास्क्ड आधार डाउनलोड करना"
        },
        desc: {
          en: "On myaadhaar.uidai.gov.in, download Masked Aadhaar where the first 8 digits are hidden as 'XXXX-XXXX-1234'. Safest for hotel check-ins and SIM cards.",
          te: "మొదటి 8 అంకెలు దాచబడే మాస్క్‌డ్ ఆధార్ డౌన్‌లోడ్ చేసుకోండి. ఇది హోటళ్ళు మరియు సిమ్ కార్డుల కోసం అత్యంత సురక్షితం.",
          ta: "முதல் 8 எண்கள் மறைக்கப்பட்ட Masked Aadhaar-ஐப் பதிவிறக்கி விடுதிகள் மற்றும் கடைகளில் வழங்கலாம்.",
          hi: "मास्क्ड आधार में पहले 8 अंक छिपे होते हैं, जिससे आपका आधार नंबर सुरक्षित रहता है और दुरुपयोग नहीं हो सकता।"
        }
      },
      {
        title: {
          en: "Checking PM-Kisan & Welfare Portals",
          te: "పీఎం కిసాన్ మరియు సంక్షేమ పథకాల స్టేటస్ చూడటం",
          ta: "பிஎம் கிசான் நலத்திட்ட நிலவரம் அறிதல்",
          hi: "पीएम किसान और सरकारी कल्याणकारी योजनाओं की जांच"
        },
        desc: {
          en: "Visit pmkisan.gov.in on your mobile browser. Click 'Know Your Status' to check if instalment funds are credited directly to your bank account without middlemen.",
          te: "pmkisan.gov.in లో 'Know Your Status' ద్వారా దళారుల ప్రమేయం లేకుండా కిసాన్ డబ్బులు ఖాతాలో పడ్డాయో లేదో తెలుసుకోవచ్చు.",
          ta: "pmkisan.gov.in இல் உங்கள் தவணைப் பணம் வந்துவிட்டதா என இடைத்தரகர்கள் இன்றி வீட்டிலிருந்தே அறியலாம்.",
          hi: "pmkisan.gov.in पर बिना किसी दलाल के घर बैठे जांचें कि आपकी किसान सम्मान निधि की किस्त खाते में आई या नहीं।"
        }
      }
    ],
    tips: {
      en: ["Keep your active mobile number linked with Aadhaar", "Official portals never ask for payment to check scheme beneficiary lists", "Never give your original Aadhaar card to unknown agents"],
      te: ["ఆధార్ కు మొబైల్ నంబర్ లింక్ అయి ఉండేలా చూసుకోండి", "ప్రభుత్వ స్టేటస్ చూడటానికి డబ్బులు కట్టక్కర్లేదు", "అసలు ఆధార్ ఎవరికీ ఇవ్వవద్దు"],
      ta: ["ஆதாருடன் மொபைல் எண்ணை இணைத்திருங்கள்", "அரசு தகவல்களுக்கு கட்டணம் தேவையில்லை", "அசல் ஆதாரை பிறரிடம் தரக் கூடாது"],
      hi: ["आधार में चालू मोबाइल नंबर लिंक रखें", "सरकारी लिस्ट देखने के लिए कोई पैसे नहीं लगते", "अपना असली आधार किसी अज्ञात एजेंट को न दें"]
    }
  },

  // 7. Intermediate: Cyber Safety & Scam Alerts
  {
    id: "cyber_security",
    category: "security",
    level: "Intermediate",
    icon: "ShieldAlert",
    color: "from-red-500 to-rose-600",
    title: {
      en: "Cyber Safety & Scam Alerts",
      te: "సైబర్ భద్రత & మోసాల నివారణ",
      ta: "சைபர் பாதுகாப்பு & எச்சரிக்கைகள்",
      hi: "साइबर सुरक्षा और धोखाधड़ी से बचाव"
    },
    sub: {
      en: "Protect your identity, identify scam links, avoid phone fraud, and practise safe browsing.",
      te: "వ్యక్తిగత వివరాల రక్షణ, నకిలీ లింకులు, మోసపూరిత కాల్స్ మరియు సురక్షిత ఇంటర్నెట్ బ్రౌజింగ్.",
      ta: "அடையாளப் பாதுகாப்பு, போலி இணைப்புகளைக் கண்டறிதல் மற்றும் தொலைபேசி மோசடிகளில் இருந்து தப்புதல்.",
      hi: "पहचान की सुरक्षा, नकली लिंक पहचानना, फोन कॉल फ्रॉड से बचना और सुरक्षित इंटरनेट चलाना।"
    },
    steps: [
      {
        title: {
          en: "Spotting Fake Lottery & Job SMS Links",
          te: "నకిలీ లాటరీ మరియు ఉద్యోగ లింకులను గుర్తించడం",
          ta: "போலி பரிசு மற்றும் வேலைவாய்ப்பு லிங்க்குகள்",
          hi: "फर्जी लॉटरी और नौकरी के लिंक पहचानना"
        },
        desc: {
          en: "Messages saying 'You won 25 Lakhs' or 'Part-time job earning Rs. 5000/day' are phishing scams designed to steal money. Delete them immediately.",
          te: "'మీకు 25 లక్షలు వచ్చాయి' లేదా 'రోజుకు 5000 సంపాదన' అని వచ్చే లింకులను అస్సలు క్లిక్ చేయకండి, వెంటనే డిలీట్ చేయండి.",
          ta: "பரிசு விழுந்துள்ளதாக வரும் குறுஞ்செய்தி இணைப்புகளைக் கிளிக் செய்யாமல் உடனே அழிக்கவும்.",
          hi: "लाटरी या घर बैठे 5000 रुपये रोज कमाने वाले संदेश फर्जी होते हैं। ऐसे लिंक पर कभी क्लिक न करें।"
        }
      },
      {
        title: {
          en: "Beware of Fake Electricity Disconnection Calls",
          te: "కరెంట్ కట్ అవుతుందనే నకిలీ బెదిరింపు కాల్స్",
          ta: "மின்சாரம் துண்டிக்கப்படும் என்ற போலி மிரட்டல்கள்",
          hi: "बिजली कटने के नाम पर फर्जी फोन कॉल से सावधान"
        },
        desc: {
          en: "Scammers pretend to be electricity board officers and demand bill payment via screen-sharing apps. Electricity departments never demand payment via AnyDesk or TeamViewer.",
          te: "కరెంట్ పోతుందని చెప్పి యాప్ ఇన్‌స్టాల్ చెయ్యమంటే తిరస్కరించండి. వారు మీ ఫోన్ కంట్రోల్ తీసుకుని డబ్బు దొంగిలిస్తారు.",
          ta: "மின்சார வாரியம் ஒருபோதும் ஆப்ஸ்களை நிறுவச் சொல்லாது. அத்தகைய மிரட்டல் கால்களை துண்டிக்கவும்.",
          hi: "बिजली कटने की धमकी देकर कोई ऐप डाउनलोड करने को कहे तो तुरंत मना कर दें। बिजली विभाग कभी ऐप नहीं डलवाता।"
        }
      },
      {
        title: {
          en: "National Cybercrime Helpline 1930",
          te: "జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్ నంబర్ 1930",
          ta: "தேசிய சைபர் உதவி எண் 1930",
          hi: "राष्ट्रीय साइबर हेल्पलाइन 1930"
        },
        desc: {
          en: "Save 1930 in your mobile right now. If fraud happens, reporting within 2 hours helps police freeze stolen bank funds immediately.",
          te: "మీ ఫోన్ లో 1930 నంబర్ సేవ్ చేసుకోండి. మోసం జరిగిన వెంటనే 2 గంటల లోపు కాల్ చేసి ఫిర్యాదు చేయండి.",
          ta: "இப்போதே 1930 எண்ணைச் சேமிக்கவும். பணம் ஏமாற்றப்பட்டால் 2 மணி நேரத்திற்குள் அழைத்து பணத்தை முடக்கலாம்.",
          hi: "अपने फोन में 1930 नंबर सेव रखें। धोखा होते ही 2 घंटे में कॉल करने से पैसे खाते में रुकवाए जा सकते हैं।"
        }
      }
    ],
    tips: {
      en: ["Never install screen sharing apps (AnyDesk, QuickSupport)", "Check website has padlock icon and https://", "Report suspicious calls to 1930 or cybercrime.gov.in"],
      te: ["స్క్రీన్ షేరింగ్ యాప్స్ ఎప్పుడూ ఇన్‌స్టాల్ చేయవద్దు", "సైబర్ నేరాలకు గురైతే 1930 కు కాల్ చేయండి", "వెబ్‌సైట్ లో తాళం గుర్తు https:// చూడండి"],
      ta: ["ஸ்கிரீன் ஷேரிங் செயலிகளை நிறுவக் கூடாது", "1930 உதவி எண்ணைத் தொடர்பு கொள்ளவும்", "https முகவரிகளை மட்டுமே நம்பவும்"],
      hi: ["एनीडेस्क जैसे स्क्रीन शेयरिंग ऐप कभी न डालें", "वेबसाइट पर ताला और https:// जरूर देखें", "धोखा होने पर तुरंत 1930 या cybercrime.gov.in पर बताएं"]
    }
  },

  // 8. Advanced: Strong Passwords & 2-Step Verification
  {
    id: "strong_passwords",
    category: "security",
    level: "Advanced",
    icon: "Key",
    color: "from-amber-600 to-yellow-700",
    title: {
      en: "Strong Passwords & 2-Step Verification",
      te: "బలమైన పాస్‌వర్డ్‌లు & 2-స్టెప్ వెరిఫికేషన్",
      ta: "வலுவான கடவுச்சொல் & 2-படி சரிபார்ப்பு",
      hi: "मजबूत पासवर्ड और 2-स्टेप वेरिफिकेशन"
    },
    sub: {
      en: "Create passwords that are hard to guess and add a second lock to your accounts.",
      te: "ఎవరూ ఊహించలేని బలమైన పాస్‌వర్డ్‌లు తయారు చేయడం మరియు ఖాతాలకు డబుల్ లాక్ వేయడం.",
      ta: "யாரும் கணிக்க முடியாத கடவுச்சொற்களை உருவாக்குதல் மற்றும் கணக்குகளுக்கு இருபடிப் பூட்டு போடுதல்.",
      hi: "कठिन पासवर्ड बनाना और अपने खातों में डबल सुरक्षा लॉक लगाना सीखें।"
    },
    steps: [
      {
        title: {
          en: "How to Build an Unbreakable Password",
          te: "ఎవరూ పసిగట్టలేని పాస్‌వర్డ్ తయారు చేయడం",
          ta: "வலுவான கடவுச்சொல் உருவாக்கும் முறை",
          hi: "एक मजबूत पासवर्ड कैसे बनाएं"
        },
        desc: {
          en: "Combine Capital letters, numbers, and symbols (e.g. Village@789#). Avoid simple passwords like your name, 123456, or mobile number.",
          te: "పెద్ద అక్షరాలు, నంబర్లు మరియు గుర్తులు కలపండి (ఉదా: Village@789#). మీ పేరు లేదా ఫోన్ నంబర్ పాస్‌వర్డ్‌గా పెట్టవద్దు.",
          ta: "பெரிய எழுத்துக்கள், எண்கள் மற்றும் குறியீடுகளை இணைக்கவும் (எ.கா: Village@789#). பெயரை வைக்கக் கூடாது.",
          hi: "अक्षर, नंबर और सिंबल को मिलाकर बनाएं (जैसे Village@789#)। अपना नाम या 123456 पासवर्ड न रखें।"
        }
      },
      {
        title: {
          en: "Enabling 2-Step Verification on WhatsApp",
          te: "వాట్సాప్ లో 2-స్టెప్ వెరిఫికేషన్ ఆన్ చేయడం",
          ta: "வாட்ஸ்அப்பில் 2-படி பாதுகாப்பை இயக்குதல்",
          hi: "व्हाट्सएप में 2-स्टेप वेरिफिकेशन चालू करना"
        },
        desc: {
          en: "Open WhatsApp -> Settings -> Account -> Two-Step Verification -> Turn On -> Set a 6-digit PIN. This completely stops anyone from hacking your WhatsApp.",
          te: "వాట్సాప్ సెట్టింగ్స్ లో Two-Step Verification ఆన్ చేసి 6 అంకెల పిన్ సెట్ చేయండి. దీనివల్ల మీ వాట్సాప్ ఎవరూ హ్యాక్ చేయలేరు.",
          ta: "அமைப்புகளில் Two-Step Verification தேர்வு செய்து 6 இலக்க PIN போடவும். இது கணக்கை முழுமையாகப் பாதுகாக்கும்.",
          hi: "व्हाट्सएप सेटिंग्स -> अकाउंट -> Two-Step Verification ऑन करें और 6 अंकों का पिन सेट करें। इससे व्हाट्सएप सुरक्षित रहेगा।"
        }
      },
      {
        title: {
          en: "Google Account 2-Step Security",
          te: "గూగుల్ అకౌంట్ 2-స్టెప్ సెక్యూరిటీ",
          ta: "கூகுள் கணக்கிற்கு இருபடிப் பூட்டு",
          hi: "गूगल अकाउंट की दोहरी सुरक्षा"
        },
        desc: {
          en: "With 2-step verification, even if someone knows your password, they cannot log in without the OTP prompt sent to your physical phone.",
          te: "మీ పాస్‌వర్డ్ తెలిసినా కూడా మీ ఫోన్‌కు వచ్చే ఓటీపీ అనుమతి లేకుండా ఎవరూ మీ ఖాతాను తెరవలేరు.",
          ta: "உங்கள் கடவுச்சொல் தெரிந்தாலும் கூட உங்கள் போனுக்கு வரும் அனுமதி இன்றி யாரும் நுழைய முடியாது.",
          hi: "पासवर्ड पता होने पर भी जब तक आपके फोन पर आया कोड नहीं डाला जाएगा, कोई आपका खाता नहीं खोल सकेगा।"
        }
      }
    ],
    tips: {
      en: ["Never write your password on the back of your phone", "Use different passwords for bank and social media", "Change important passwords once every year"],
      te: ["ఫోన్ వెనుక పాస్‌వర్డ్ రాయవద్దు", "బ్యాంకుకు మరియు సోషల్ మీడియాకు వేర్వేరు పాస్‌వర్డ్స్ వాడండి", "ఏడాదికి ఒకసారి మార్చుకోండి"],
      ta: ["போனின் பின்னால் கடவுச்சொல்லை எழுதி வைக்கக் கூடாது", "வங்கிக்கு தனி கடவுச்சொல் வைக்கவும்", "வருடத்திற்கு ஒருமுறை மாற்றவும்"],
      hi: ["फोन के पीछे पासवर्ड कभी न लिखें", "बैंक और सोशल मीडिया के लिए अलग पासवर्ड रखें", "साल में एक बार पासवर्ड बदलें"]
    }
  },

  // 9. Advanced: Email & Phishing Awareness
  {
    id: "email_phishing",
    category: "internet",
    level: "Advanced",
    icon: "Mail",
    color: "from-blue-500 to-cyan-600",
    title: {
      en: "Email & Phishing Awareness",
      te: "ఈమెయిల్ & ఫిషింగ్ మోసాల అవగాహన",
      ta: "மின்னஞ்சல் & ஃபிஷிங் மோசடி விழிப்புணர்வு",
      hi: "ईमेल और फ़िशिंग धोखाधड़ी से बचाव"
    },
    sub: {
      en: "Create a Gmail account, send emails with attachments and spot phishing emails.",
      te: "జీమెయిల్ ఖాతా తెరవడం, డాక్యుమెంట్లు పంపడం మరియు నకిలీ మోసపూరిత ఈమెయిళ్లను గుర్తించడం.",
      ta: "ஜிமெயில் கணக்கு தொடங்குதல், ஆவணங்கள் அனுப்புதல் மற்றும் போலி மின்னஞ்சல்களைக் கண்டறிதல்.",
      hi: "जीमेल अकाउंट बनाना, फाइल अटैच करके ईमेल भेजना और फर्जी ईमेल से बचना सीखें।"
    },
    steps: [
      {
        title: {
          en: "Creating a Clean Professional Gmail ID",
          te: "సరైన జీమెయిల్ ఐడీని తయారు చేసుకోవడం",
          ta: "ஜிமெயில் கணக்கை சரியாக உருவாக்குதல்",
          hi: "सही तरीके से जीमेल आईडी बनाना"
        },
        desc: {
          en: "Create an email with your official name (e.g. ramesh.kumar.village@gmail.com). Write down your email address and password safely in a home diary.",
          te: "మీ అసలు పేరుతో జీమెయిల్ ఖాతా తెరవండి. మీ ఈమెయిల్ మరియు పాస్‌వర్డ్ ఇంటి డైరీలో భద్రంగా రాసి పెట్టుకోండి.",
          ta: "உங்கள் உண்மையான பெயரில் ஜிமெயில் கணக்கு தொடங்கி, விபரங்களை வீட்டில் பாதுகாப்பாக எழுதி வைக்கவும்.",
          hi: "अपने सही नाम से जीमेल आईडी बनाएं और उसका पासवर्ड घर पर किसी डायरी में सुरक्षित लिख लें।"
        }
      },
      {
        title: {
          en: "Sending Resumes & Land Paper Attachments",
          te: "పత్రాలు మరియు రెజ్యూమ్ అటాచ్ చేసి పంపడం",
          ta: "சான்றிதழ்களை மின்னஞ்சல் மூலம் இணைத்து அனுப்புதல்",
          hi: "ईमेल में फाइल और जरूरी कागजात अटैच करना"
        },
        desc: {
          en: "Click Compose -> Enter recipient email -> Tap Paperclip icon to attach PDF documents, land records, or photos -> Tap Send arrow.",
          te: "Compose నొక్కి, ఎవరికి పంపాలో ఈమెయిల్ రాసి, పేపర్‌క్లిప్ గుర్తు ద్వారా పత్రాలు అటాచ్ చేసి పంపండి.",
          ta: "Compose அழுத்தி, முகவரியை உள்ளிட்டு பேப்பர்கிளிப் மூலம் சான்றிதழ்களை இணைத்து அனுப்பவும்.",
          hi: "कंपोज पर टैप करें, ईमेल पता लिखें और पिन आइकन से फाइल या फोटो जोड़कर भेजें।"
        }
      },
      {
        title: {
          en: "Spotting Phishing Emails",
          te: "నకిలీ మోసపూరిత ఈమెయిళ్లను గుర్తించడం",
          ta: "போலி மின்னஞ்சல்களைக் கண்டறிவது எப்படி",
          hi: "फर्जी और धोखाधड़ी वाले ईमेल को पहचानना"
        },
        desc: {
          en: "Emails claiming 'Urgent: Bank Account Suspended, Click Here' are fake. Banks never send links via email asking to update debit card PINs.",
          te: "'ఖాతా బ్లాక్ అయింది, ఇక్కడ క్లిక్ చేయండి' అని వచ్చే ఈమెయిళ్లు నకిలీవి. బ్యాంకులు ఎప్పుడూ లింకులు పంపవు.",
          ta: "'கணக்கு முடக்கப்பட்டது, கிளிக் செய்யவும்' என்று வரும் மின்னஞ்சல்கள் போலியானது. வங்கிகள் அப்படி அனுப்பாது.",
          hi: "'अकाउंट ब्लॉक हो गया है, लिंक पर क्लिक करें' जैसे ईमेल फर्जी होते हैं। बैंक कभी ऐसे लिंक नहीं भेजते।"
        }
      }
    ],
    tips: {
      en: ["Never open email attachments ending with .exe or .apk", "Look closely at sender address for spelling mistakes", "Check spam folder for unwanted junk emails"],
      te: [".apk లేదా .exe తో ముగిసే ఫైళ్లను అస్సలు డౌన్‌లోడ్ చేయవద్దు", "పంపినవారి ఈమెయిల్ అడ్రస్ స్పెల్లింగ్ సరిచూసుకోండి", "అనవసరమైన ఈమెయిళ్లను స్పామ్ లోకి పంపండి"],
      ta: [".apk அல்லது .exe கோப்புகளை திறக்கக் கூடாது", "அனுப்புநர் முகவரி எழுத்துக்களை கூர்ந்து கவனிக்கவும்", "ஸ்பேம் ஃபோல்டரை சரிபார்க்கவும்"],
      hi: [".apk या .exe फाइलों को कभी न खोलें", "भेजने वाले का ईमेल पता ध्यान से देखें", "अनावश्यक ईमेल को तुरंत स्पैम मार्क करें"]
    }
  },

  // 10. Advanced: App Permissions & Privacy
  {
    id: "app_permissions",
    category: "privacy",
    level: "Advanced",
    icon: "ShieldCheck",
    color: "from-pink-500 to-rose-600",
    title: {
      en: "App Permissions & Privacy",
      te: "యాప్ అనుమతులు & వ్యక్తిగత గోప్యత",
      ta: "செயலி அனுமதிகள் & தனியுரிமை",
      hi: "ऐप अनुमतियां और गोपनीयता"
    },
    sub: {
      en: "Control which apps can access your camera, location, contacts and messages.",
      te: "ఏ యాప్‌లు మీ కెమెరా, లొకేషన్, కాంటాక్ట్స్ మరియు మెసేజ్లను చూస్తున్నాయో నియంత్రించండి.",
      ta: "எந்த செயலிகள் உங்கள் கேமரா, இருப்பிடம் மற்றும் தொடர்புகளைப் பயன்படுத்துகின்றன என்பதை கட்டுப்படுத்தவும்.",
      hi: "कैमरा, लोकेशन, कॉन्टैक्ट्स और मैसेज देखने की ऐप की अनुमतियों पर नियंत्रण रखें।"
    },
    steps: [
      {
        title: {
          en: "What Are App Permissions?",
          te: "యాప్ అనుమతులు (Permissions) అంటే ఏమిటి?",
          ta: "செயலி அனுமதிகள் என்றால் என்ன?",
          hi: "ऐप की अनुमतियां (Permissions) क्या होती हैं?"
        },
        desc: {
          en: "When you install an app, it asks permission to use your Camera, Microphone, or Contacts. A calculator or flashlight app NEVER needs access to your contacts or SMS!",
          te: "కొత్త యాప్ డౌన్‌లోడ్ చేసినప్పుడు అది కెమెరా, కాంటాక్ట్స్ అనుమతి అడుగుతుంది. సాధారణ టార్చ్ లైట్ యాప్‌కి మీ కాంటాక్ట్స్ అనుమతి అస్సలు అవసరం లేదు!",
          ta: "டார்ச்லைட் அல்லது கால்குலேட்டர் செயலிக்கு உங்கள் தொடர்புகள் அல்லது எஸ்எம்எஸ் அனுமதி தேவையே இல்லை!",
          hi: "टॉर्च या कैलकुलेटर ऐप को कभी भी आपके कॉन्टैक्ट्स या मैसेज की अनुमति की जरूरत नहीं होती। ऐसी अनुमति न दें।"
        }
      },
      {
        title: {
          en: "Checking Permissions Manager in Settings",
          te: "సెట్టింగ్స్ లో పర్మిషన్ మేనేజర్ తనిఖీ చేయడం",
          ta: "அனுமதி மேலாளரை சரிபார்த்தல்",
          hi: "सेटिंग्स में परमिशन मैनेजर की जांच करना"
        },
        desc: {
          en: "Go to Settings -> Privacy -> Permission Manager. Tap 'Location' or 'Camera'. See which apps have access and change them to 'Allow only while using the app'.",
          te: "సెట్టింగ్స్ లో Permission Manager లోకి వెళ్లి కెమెరా, లొకేషన్ లను 'Allow only while using the app' గా మార్చండి.",
          ta: "அமைப்புகளில் சென்று கேமரா, இருப்பிட அனுமதிகளை தேவைப்படும் போது மட்டும் இயங்குமாறு மாற்றவும்.",
          hi: "सेटिंग्स -> प्राइवेसी -> परमिशन मैनेजर में जाएं और लोकेशन व कैमरे को 'केवल ऐप इस्तेमाल के समय' पर सेट करें।"
        }
      },
      {
        title: {
          en: "Uninstalling Unknown & Unused Apps",
          te: "తెలియని మరియు వాడని యాప్‌లను తొలగించడం",
          ta: "தேவையற்ற செயலிகளை நீக்குதல்",
          hi: "अज्ञात और बेकार ऐप्स को फोन से हटाना"
        },
        desc: {
          en: "Long press any app you do not recognize and tap 'Uninstall'. Removing unused apps frees up storage and prevents background data leakage.",
          te: "అవసరం లేని యాప్‌లపై వేలితో గట్టిగా నొక్కి 'Uninstall' చేయండి. దీనివల్ల ఫోన్ మెమరీ మరియు బ్యాటరీ మిగులుతాయి.",
          ta: "பயன்படுத்தாத செயலிகளை அழுத்திப் பிடித்து 'Uninstall' செய்யவும். இது போன் மெமரியை மிச்சப்படுத்தும்.",
          hi: "अनजान ऐप्स को दबाकर रखें और 'अनइंस्टॉल' कर दें। इससे फोन की मेमोरी खाली होगी और डेटा सुरक्षित रहेगा।"
        }
      }
    ],
    tips: {
      en: ["Choose 'Only this time' when apps ask for one-time location", "Disable background mobile data for gaming apps", "Keep Google Play Protect turned ON always"],
      te: ["ఒక్కసారి మాత్రమే లొకేషన్ కావాలంటే 'Only this time' ఎంచుకోండి", "గూగుల్ ప్లే ప్రొటెక్ట్ ఎల్లప్పుడూ ఆన్ లో ఉంచండి", "వాడని యాప్స్ డిలీట్ చేయండి"],
      ta: ["தேவைப்படும் போது மட்டும் 'Only this time' தேர்ந்தெடுக்கவும்", "கூகுள் ப்ளே ப்ரொடெக்ட் எப்போதும் ஆன்-ல் இருக்கட்டும்", "பழைய செயலிகளை நீக்கவும்"],
      hi: ["लोकेशन के लिए 'केवल एक बार' (Only this time) चुनें", "गूगल प्ले प्रोटेक्ट हमेशा चालू रखें", "बेकार ऐप तुरंत हटा दें"]
    }
  },

  // 11. Advanced: Digital Health & Online Services
  {
    id: "digital_health",
    category: "health",
    level: "Advanced",
    icon: "HeartPulse",
    color: "from-emerald-600 to-teal-700",
    title: {
      en: "Digital Health & Online Services",
      te: "డిజిటల్ ఆరోగ్యం & ఆన్‌లైన్ సేవలు",
      ta: "டிஜிட்டல் சுகாதாரம் & ஆன்லைன் சேவைகள்",
      hi: "डिजिटल स्वास्थ्य और ऑनलाइन सेवाएं (ABHA)"
    },
    sub: {
      en: "Use ABHA health ID, book tickets, pay bills and balance screen time.",
      te: "ఆభా (ABHA) హెల్త్ ఐడీ, బస్సు టికెట్లు, కరెంట్ బిల్లుల చెల్లింపు మరియు డిజిటల్ శ్రేయస్సు.",
      ta: "ABHA மருத்துவ அட்டை, பயண டிக்கெட் முன்பதிவு மற்றும் மின்சாரக் கட்டணம் செலுத்துதல்.",
      hi: "आभा (ABHA) हेल्थ आईडी, बस-ट्रेन टिकट बुकिंग, बिजली बिल भुगतान और स्क्रीन टाइम संतुलन।"
    },
    steps: [
      {
        title: {
          en: "What is Ayushman Bharat ABHA Health Card?",
          te: "ఆయుష్మాన్ భారత్ ఆభా (ABHA) హెల్త్ కార్డ్ అంటే ఏమిటి?",
          ta: "ஆயுஷ்மான் பாரத் ABHA அட்டை என்றால் என்ன?",
          hi: "आयुष्मान भारत आभा (ABHA) हेल्थ कार्ड क्या है?"
        },
        desc: {
          en: "ABHA is your 14-digit digital health ID created using Aadhaar. It stores your hospital lab reports, blood group, and doctor prescriptions digitally so you don't need to carry bulky paper files.",
          te: "ఆభా అనేది ఆధార్ తో లింక్ అయ్యే 14 అంకెల ఉచిత హెల్త్ ఐడీ. హాస్పిటల్ టెస్ట్ రిపోర్టులు మరియు మందుల చీటీలు కాగితాలు లేకుండా మొబైల్ లో భద్రంగా ఉంటాయి.",
          ta: "ABHA என்பது 14 இலக்க மருத்துவ அடையாள எண். உங்கள் சிகிச்சை விபரங்கள் மற்றும் மருந்து சீட்டுகளை டிஜிட்டல் முறையில் சேமிக்கும்.",
          hi: "आभा 14 अंकों की डिजिटल हेल्थ आईडी है। इसमें आपकी मेडिकल रिपोर्ट और दवा के पर्चे फोन में सुरक्षित रहते हैं।"
        }
      },
      {
        title: {
          en: "Paying Electricity & Water Bills from Home",
          te: "ఇంటి నుండే కరెంట్ మరియు నీటి బిల్లులు చెల్లించడం",
          ta: "வீட்டிலிருந்தே மின் கட்டணம் செலுத்துதல்",
          hi: "घर बैठे बिजली और पानी के बिल का भुगतान करना"
        },
        desc: {
          en: "Open GPay/PhonePe -> Tap 'Electricity' -> Choose your state electricity board -> Enter your Consumer Service Number -> Pay directly with official receipt.",
          te: "పేమెంట్ యాప్ లో 'Electricity' ఎంచుకుని మీ కరెంట్ సర్వీస్ నంబర్ నమోదు చేసి లైన్లలో నిలబడకుండా బిల్లు కట్టవచ్చు.",
          ta: "கட்டண செயலியில் 'Electricity' தேர்வு செய்து நுகர்வோர் எண்ணைப் போட்டு ரசீதுடன் பில் கட்டலாம்.",
          hi: "पेमेंट ऐप में 'इलेक्ट्रिसिटी' चुनें, उपभोक्ता संख्या डालें और बिना लाइन में लगे रसीद सहित बिल भरें।"
        }
      },
      {
        title: {
          en: "Digital Wellbeing: Balancing Screen Time",
          te: "డిజిటల్ వెల్‌బీయింగ్: స్క్రీన్ సమయాన్ని అదుపులో ఉంచడం",
          ta: "டிஜிட்டல் நல்வாழ்வு: போன் பார்க்கும் நேரத்தைக் கட்டுப்படுத்துதல்",
          hi: "स्क्रीन टाइम संतुलन और डिजिटल स्वास्थ्य"
        },
        desc: {
          en: "Spending more than 4-5 hours scrolling short videos affects eye health and sleep. Take a break every 30 minutes and avoid using phones before bedtime.",
          te: "గంటల తరబడి రీల్స్ చూడటం వల్ల కంటి సమస్యలు వస్తాయి. నిద్రపోయే ముందు ఫోన్ వాడటం తగ్గించండి.",
          ta: "தொடர்ந்து போன் பார்ப்பது கண் பார்வையைப் பாதிக்கும். தூங்குவதற்கு முன் போனை ஒதுக்கி வைக்கவும்.",
          hi: "घंटों फोन चलाने से आंखों और नींद पर बुरा असर पड़ता है। रात को सोने से पहले फोन दूर रखें।"
        }
      }
    ],
    tips: {
      en: ["Create your ABHA card free at abha.abdm.gov.in", "Always save bill payment receipts as PDF", "Turn on Bedtime Mode on phone at 10 PM"],
      te: ["abha.abdm.gov.in లో ఉచితంగా ఆభా కార్డు పొందండి", "కరెంట్ బిల్లు రశీదులను పిడిఎఫ్ గా సేవ్ చేసుకోండి", "రాత్రి 10 గంటల తర్వాత ఫోన్ పక్కన పెట్టండి"],
      ta: ["abha.abdm.gov.in இல் இலவசமாக அட்டை பெறலாம்", "பில் ரசீதை பிடிஎஃப் ஆக சேமிக்கவும்", "இரவு நேரத்தில் போன் பயன்பாட்டைக் குறைக்கவும்"],
      hi: ["abha.abdm.gov.in पर मुफ्त आभा कार्ड बनाएं", "बिल भुगतान की रसीद हमेशा सेव करके रखें", "रात 10 बजे के बाद फोन का इस्तेमाल बंद करें"]
    }
  },

  // 12. Advanced: What To Do If You Are Cheated
  {
    id: "cheated_recourse",
    category: "security",
    level: "Advanced",
    icon: "AlertOctagon",
    color: "from-red-600 to-rose-700",
    title: {
      en: "What To Do If You Are Cheated",
      te: "మోసపోయినప్పుడు వెంటనే చేయాల్సిన పనులు",
      ta: "ஏமாற்றப்பட்டால் உடனடியாக என்ன செய்ய வேண்டும்?",
      hi: "धोखाधड़ी होने पर तुरंत क्या कदम उठाएं"
    },
    sub: {
      en: "Step-by-step actions to take immediately after a cyber fraud.",
      te: "ఆన్‌లైన్ లో డబ్బు పోయినప్పుడు వెంటనే వేయవలసిన కీలక రక్షణ చర్యలు.",
      ta: "சைபர் மோசடி நடந்த உடனேயே எடுக்க வேண்டிய அவசர நடவடிக்கைகள்.",
      hi: "साइबर फ्रॉड के तुरंत बाद पैसे बचाने के लिए उठाए जाने वाले जरूरी कदम।"
    },
    steps: [
      {
        title: {
          en: "Step 1: The 'Golden Hour' Action - Call 1930",
          te: "స్టెప్ 1: గోల్డెన్ అవర్ - వెంటనే 1930 కి కాల్ చేయండి",
          ta: "படி 1: அவசர உதவி எண் 1930 ஐ உடனே அழைத்தல்",
          hi: "कदम 1: गोल्डन ऑवर - तुरंत 1930 डायल करें"
        },
        desc: {
          en: "Within the first 2 hours of money deduction, dial toll-free 1930. Provide your account number, transaction ID from bank SMS, and scammer details. Police can freeze the funds before the thief withdraws it.",
          te: "డబ్బు కట్ అయిన మొదటి 2 గంటల్లోనే 1930 నంబర్‌కు ఫోన్ చేయండి. మీ బ్యాంక్ ఎస్ఎంఎస్ వివరాలు చెబితే పోలీసులు ఆ డబ్బును హోల్డ్ చేసి రక్షిస్తారు.",
          ta: "பணம் போன 2 மணி நேரத்திற்குள் 1930 எண்ணை அழைக்கவும். வங்கி எஸ்எம்எஸ் விபரங்களைக் கூறினால் பணத்தை முடக்கலாம்.",
          hi: "पैसे कटने के 2 घंटे के भीतर 1930 पर फोन करें। बैंक एसएमएस की ट्रांजेक्शन आईडी बताएं ताकि पुलिस पैसे रुकवा सके।"
        }
      },
      {
        title: {
          en: "Step 2: Block ATM Cards and UPI Immediately",
          te: "స్టెప్ 2: ఏటీఎం కార్డు మరియు యూపీఐ వెంటనే బ్లాక్ చేయండి",
          ta: "படி 2: ஏடிஎம் மற்றும் UPI சேவைகளை உடனே முடக்குதல்",
          hi: "कदम 2: एटीएम कार्ड और यूपीआई तुरंत ब्लॉक करवाएं"
        },
        desc: {
          en: "Call your bank branch or toll-free customer care. Request to freeze your net banking, block the debit card, and suspend UPI to prevent any further money loss.",
          te: "వెంటనే మీ బ్యాంకు టోల్ ఫ్రీ నంబర్‌కు ఫోన్ చేసి కార్డును మరియు యూపీఐని బ్లాక్ చేయించండి.",
          ta: "உங்கள் வங்கியின் வாடிக்கையாளர் சேவைக்கு அழைத்து கார்டை உடனே முடக்கச் சொல்லுங்கள்.",
          hi: "तुरंत अपने बैंक के ग्राहक सेवा नंबर पर कॉल करके कार्ड और यूपीआई को ब्लॉक करवाएं।"
        }
      },
      {
        title: {
          en: "Step 3: Filing Police Report at cybercrime.gov.in",
          te: "స్టెప్ 3: cybercrime.gov.in లో అధికారిక ఫిర్యాదు నమోదు",
          ta: "படி 3: இணையதளத்தில் அதிகாரப்பூர்வ புகார் பதிவு செய்தல்",
          hi: "कदम 3: cybercrime.gov.in पर आधिकारिक रिपोर्ट दर्ज करें"
        },
        desc: {
          en: "File an official e-complaint on the Ministry of Home Affairs national portal cybercrime.gov.in or visit the nearest local police station with your bank passbook statement.",
          te: "ప్రభుత్వ పోర్టల్ cybercrime.gov.in లో లేదా సమీపంలోని పోలీస్ స్టేషన్ లో బ్యాంక్ స్టేట్‌మెంట్ తో ఫిర్యాదు చేయండి.",
          ta: "cybercrime.gov.in இணையதளத்தில் அல்லது அருகிலுள்ள காவல் நிலையத்தில் வங்கி அறிக்கையுடன் புகார் அளிக்கவும்.",
          hi: "सरकारी पोर्टल cybercrime.gov.in पर या नजदीकी थाने में जाकर बैंक स्टेटमेंट के साथ शिकायत दर्ज कराएं।"
        }
      }
    ],
    tips: {
      en: ["Take screenshots of fraud WhatsApp chats and bank SMS messages as evidence", "Never believe callers promising to recover your money for an advance fee", "Always ask for an official Complaint Acknowledgment Number"],
      te: ["మోసగాళ్ల వాట్సాప్ చాట్లు మరియు ఎస్ఎంఎస్ స్క్రీన్‌షాట్లు సాక్ష్యంగా ఉంచండి", "డబ్బు రికవరీ చేస్తామని అడ్వాన్స్ అడిగేవారిని నమ్మవద్దు", "ఫిర్యాదు రసీదు నంబర్ తప్పనిసరిగా తీసుకోండి"],
      ta: ["மோசடி எஸ்எம்எஸ் மற்றும் வாட்ஸ்அப் சாட்களை ஸ்கிரீன்ஷாட் எடுத்து வைக்கவும்", "முன்பணம் கேட்கும் போலிகளை நம்ப வேண்டாம்", "புகார் ரசீது எண்ணைப் பெற்றுக்கொள்ளவும்"],
      hi: ["धोखाधड़ी के व्हाट्सएप मैसेज और एसएमएस का स्क्रीनशॉट सबूत के तौर पर रखें", "पैसे वापस दिलाने के नाम पर एडवांस मांगने वालों से बचें", "शिकायत की पावती संख्या (Acknowledgement Number) अवश्य लें"]
    }
  },

  // 13. Beginner: Essential Smartphone Settings & Maintenance
  {
    id: "smartphone_settings",
    category: "smartphone",
    level: "Beginner",
    icon: "Sliders",
    color: "from-cyan-600 to-blue-700",
    title: {
      en: "Essential Smartphone Settings & Maintenance",
      te: "ముఖ్యమైన స్మార్ట్‌ఫోన్ సెట్టింగ్స్ & నిర్వహణ",
      ta: "முக்கிய ஸ்மார்ட்போன் அமைப்புகள் மற்றும் பராமரிப்பு",
      hi: "जरूरी स्मार्टफोन सेटिंग्स और फोन का रखरखाव"
    },
    sub: {
      en: "Learn how to make text bigger for easy reading, adjust ringtone volume, setup portable Wi-Fi hotspot, and clear junk memory safely.",
      te: "చదవడానికి సులభంగా పెద్ద అక్షరాలు పెట్టుకోవడం, రింగ్‌టోన్ వాల్యూమ్ పెంచడం, హాట్‌స్పాట్ ఆన్ చేయడం మరియు మొబైల్ మెమరీని సురక్షితంగా క్లీన్ చేయడం.",
      ta: "எழுத்துக்களை பெரிதாக்குதல், ரிங்டோன் ஒலி அதிகரித்தல், வைஃபை ஹாட்ஸ்பாட் பகிர்வு மற்றும் போன் மெமரியை சுத்தம் செய்தல்.",
      hi: "पढ़ने में आसानी के लिए बड़े फॉन्ट सेट करना, रिंगटोन तेज करना, हॉटस्पॉट चालू करना और फोन का कचरा (जंक) साफ करना सीखें।"
    },
    steps: [
      {
        title: {
          en: "Enabling Large Text & Screen Font Size",
          te: "పెద్ద అక్షరాలు మరియు ఫాంట్ సైజు పెంచడం",
          ta: "பெரிய எழுத்துக்கள் (Font Size) அமைத்தல்",
          hi: "बड़े अक्षर और स्क्रीन फॉन्ट साइज बढ़ाना"
        },
        desc: {
          en: "Go to Settings -> Display -> Font Size. Drag the slider to 'Large' or 'Largest'. This makes WhatsApp messages, phone contacts, and news much easier for elders to read without eye strain.",
          te: "సెట్టింగ్స్ -> Display -> Font Size లోకి వెళ్లి స్లైడర్‌ను 'Large' వైపు జరపండి. దీనివల్ల కళ్ళపై భారం పడకుండా పెద్ద అక్షరాలతో సులభంగా చదువుకోవచ్చు.",
          ta: "செட்டிங்ஸ் -> Display -> Font Size சென்று ஸ்லைடரை 'Large' என மாற்றவும். இது முதியவர்கள் எளிதாக படிக்க உதவும்.",
          hi: "सेटिंग्स -> Display -> Font Size में जाकर स्लाइडर को 'Large' पर सेट करें। इससे बिना चश्मे या तनाव के साफ-साफ अक्षर दिखेंगे।"
        }
      },
      {
        title: {
          en: "Adjusting Ringtone & Speaker Volume",
          te: "రింగ్‌టోన్ మరియు లౌడ్ స్పీకర్ శబ్దం సర్దుబాటు",
          ta: "ரிங்டோன் மற்றும் ஸ்பீக்கர் ஒலி கட்டுப்பாடு",
          hi: "रिंगटोन और स्पीकर की आवाज तेज करना"
        },
        desc: {
          en: "Press the volume up button on the side of your phone, then tap the three dots (...) to raise Ringtone, Media, and Alarm sliders. Turn ON 'Vibrate on Calls' so you never miss a call in crowded markets.",
          te: "ఫోన్ ప్రక్కన ఉండే వాల్యూమ్ బటన్ నొక్కి (...) గుర్తు ద్వారా రింగ్‌టోన్ శబ్దం పెంచండి. రద్దీ ప్రదేశాలలో కాల్స్ మిస్ కాకుండా వైబ్రేషన్ ఆన్ చేయండి.",
          ta: "போனின் பக்கவாட்டு ஒலிக் கருவியைத் தட்டி ரிங்டோன் அளவை உயர்த்தவும். சந்தைகளில் அழைப்புகளைத் தவறவிடாமல் இருக்க வைப்ரேஷனை இயக்கவும்.",
          hi: "फोन के साइड में वॉल्यूम बटन दबाकर तीन बिंदुओं (...) पर टैप करें और रिंगटोन बढ़ाएं। कॉल न छूटने के लिए 'Vibrate on Calls' चालू रखें।"
        }
      },
      {
        title: {
          en: "Sharing Internet via Personal Hotspot",
          te: "పర్సనల్ హాట్‌స్పాట్ ద్వారా ఇతరులకు ఇంటర్నెట్ ఇవ్వడం",
          ta: "ஹாட்ஸ்பாட் மூலம் இணையத்தைப் பகிர்தல்",
          hi: "पर्सनल हॉटस्पॉट से बच्चों या परिवार को इंटरनेट देना"
        },
        desc: {
          en: "Go to Settings -> Portable Hotspot -> Turn ON. Set a secret 8-digit password. Your children or family members can connect their phone or laptop to study online using your data.",
          te: "సెట్టింగ్స్ లో Portable Hotspot ఆన్ చేసి 8 అంకెల రహస్య పాస్‌వర్డ్ పెట్టండి. మీ పిల్లలు చదువుకోవడానికి మీ డేటాను సురక్షితంగా వాడుకోవచ్చు.",
          ta: "செட்டிங்ஸ் -> Portable Hotspot ஆன் செய்து 8 இலக்க ரகசிய கடவுச்சொல் வைக்கவும். குடும்பத்தினர் படிக்க இணையத்தைப் பகிரலாம்.",
          hi: "सेटिंग्स -> Portable Hotspot ऑन करें और 8 अंकों का पासवर्ड लगाएं। बच्चे पढ़ाई के लिए आपके फोन का डेटा इस्तेमाल कर सकेंगे।"
        }
      }
    ],
    tips: {
      en: ["Restart your smartphone once a week to keep it running fast and smooth", "Turn on Battery Saver when battery drops below 20%", "Delete forwarded good-morning video files from WhatsApp to free up phone storage"],
      te: ["వారానికి ఒకసారి ఫోన్‌ను రీస్టార్ట్ చేస్తే వేగంగా పనిచేస్తుంది", "బ్యాటరీ 20% కంటే తక్కువైనప్పుడు బ్యాటరీ సేవర్ ఆన్ చేయండి", "వాట్సాప్ లో వచ్చిన పాత వీడియోలు డిలీట్ చేసి మెమరీ పెంచుకోండి"],
      ta: ["வாரத்திற்கு ஒருமுறை போனை ரீஸ்டார்ட் செய்தால் வேகம் குறையாது", "பேட்டரி 20% குறையும் போது பேட்டரி சேவர் இயக்கவும்", "வாட்ஸ்அப் பழைய வீடியோக்களை நீக்கி போன் மெமரியைக் கூட்டவும்"],
      hi: ["हफ्ते में एक बार फोन को रीस्टार्ट करें ताकि फोन हैंग न हो", "बैटरी 20% से कम होने पर बैटरी सेवर चालू करें", "व्हाट्सएप के पुराने गुड मॉर्निंग वीडियो डिलीट करके मेमोरी खाली करें"]
    }
  },

  // 14. Beginner: Voice Typing, Translation & Accessibility
  {
    id: "voice_accessibility",
    category: "accessibility",
    level: "Beginner",
    icon: "Mic",
    color: "from-purple-600 to-indigo-700",
    title: {
      en: "Voice Typing, Translation & Accessibility",
      te: "వాయిస్ టైపింగ్, అనువాదం & యాక్సెసిబిలిటీ",
      ta: "குரல் தட்டச்சு, மொழிபெயர்ப்பு & அணுகல் வசதிகள்",
      hi: "बोलकर लिखना (वॉयस टाइपिंग), अनुवाद व सहायक सुविधाएं"
    },
    sub: {
      en: "Speak in your native language to write WhatsApp messages, translate English documents with camera, and listen to text read aloud.",
      te: "మీ సొంత భాషలో మాట్లాడి వాట్సాప్ సందేశాలు రాయడం, కెమెరాతో ఇంగ్లీష్ పత్రాలను తెలుగులోకి మార్చడం మరియు స్క్రీన్‌ను చదివించడం.",
      ta: "சொந்த மொழியில் பேசி செய்திகளைத் தட்டச்சு செய்தல், கேமரா மூலம் ஆங்கில ஆவணங்களை மொழிபெயர்த்தல் மற்றும் எழுத்துக்களை ஒலியாகக் கேட்டல்.",
      hi: "अपनी भाषा में बोलकर व्हाट्सएप मैसेज लिखना, कैमरे से अंग्रेजी कागजात का हिंदी अनुवाद करना और स्क्रीन बोलकर सुनाना।"
    },
    steps: [
      {
        title: {
          en: "Typing Without Typing: Google Voice Typing",
          te: "చేతులతో రాయకుండా మాట్లాడి టైప్ చేయడం",
          ta: "எழுதாமல் குரல் மூலம் தட்டச்சு செய்தல்",
          hi: "हाथ से लिखे बिना बोलकर टाइप करना"
        },
        desc: {
          en: "In any keyboard, tap the small black microphone icon (not the WhatsApp green button). Speak clearly in Telugu, Tamil, or Hindi: your phone will instantly convert your spoken words into written text!",
          te: "కీబోర్డు లోని చిన్న మైక్రోఫోన్ బటన్ నొక్కి మీ సొంత భాషలో మాట్లాడండి. మీరు మాట్లాడే ప్రతి మాట వెంటనే స్క్రీన్ పై అక్షరాలుగా మారుతుంది!",
          ta: "விசைப்பலகையில் உள்ள மைக்ரோஃபோன் ஐகானைத் தட்டி தமிழில் பேசினால், அது உடனே திரையில் தமிழ் எழுத்துக்களாக தட்டச்சு ஆகும்!",
          hi: "कीबोर्ड पर दिए गए छोटे माइक आइकन पर टैप करें और हिंदी या अपनी भाषा में बोलें। फोन आपकी बोली को अपने आप लिखकर टेक्स्ट बना देगा।"
        }
      },
      {
        title: {
          en: "Translating English Papers with Google Lens",
          te: "గూగుల్ లెన్స్ కెమెరాతో ఇంగ్లీష్ పేపర్లను సొంత భాషలోకి మార్చడం",
          ta: "கூகுள் லென்ஸ் மூலம் ஆங்கில தாள்களை மொழிபெயர்த்தல்",
          hi: "गूगल लेंस कैमरे से अंग्रेजी कागजात का तुरंत अनुवाद"
        },
        desc: {
          en: "Open Google app -> Tap Camera icon (Google Lens) -> Point at any English hospital letter, pesticide bottle, or bank slip -> Tap 'Translate'. It instantly turns into Telugu, Tamil, or Hindi right on your screen!",
          te: "గూగుల్ కెమెరా గుర్తు (Google Lens) తెరిచి ఏదైనా ఇంగ్లీష్ మందుల చీటీ లేదా బ్యాంక్ ఫారమ్‌పై కెమెరా పెట్టండి. 'Translate' నొక్కితే అది వెంటనే మీ భాషలోకి మారిపోతుంది!",
          ta: "கூகுள் லென்ஸ் கேமராவை ஆங்கில மருந்து சீட்டு அல்லது வங்கி படிவத்தின் மீது வைத்து 'Translate' அழுத்தினால் உடனடியாக உங்கள் மொழியில் புரியும்!",
          hi: "गूगल ऐप में कैमरा (Google Lens) खोलें, किसी अंग्रेजी दवाई के पर्चे या बैंक फॉर्म पर रखें और 'Translate' दबाएं। वह तुरंत आपकी भाषा में बदल जाएगा।"
        }
      },
      {
        title: {
          en: "Select to Speak: Hearing Text Read Aloud",
          te: "సెలెక్ట్ టు స్పీక్: స్క్రీన్ పై ఉన్న వార్తలు చదివించడం",
          ta: "Select to Speak: செய்திகளை வாசிக்க வைத்தல்",
          hi: "सेलेक्ट टू स्पीक: स्क्रीन का लिखा बोलकर सुनाना"
        },
        desc: {
          en: "Settings -> Accessibility -> Select to Speak -> Turn ON. Tap the little person icon at bottom of screen, then touch any news article. The phone reads it out loud in clear speech for seniors.",
          te: "సెట్టింగ్స్ లో Accessibility -> Select to Speak ఆన్ చేయండి. చిన్న మనిషి గుర్తు నొక్కి వార్తలపై తాకితే ఫోన్ స్పష్టంగా చదివి వినిపిస్తుంది.",
          ta: "அமைப்புகளில் Accessibility -> Select to Speak இயக்கவும். செய்திகளைத் தொட்டால் மொபைல் தானாகவே வாசித்துக் காட்டும்.",
          hi: "सेटिंग्स -> Accessibility -> Select to Speak चालू करें। स्क्रीन पर किसी भी लेख को छूने पर फोन उसे साफ आवाज में पढ़कर सुनाएगा।"
        }
      }
    ],
    tips: {
      en: ["Add your regional language in Gboard settings so you can switch languages with the Globe button", "Hold the phone 6 inches from mouth when voice typing for best accuracy", "Use Google Lens to read expiry dates on medicines"],
      te: ["గ్లోబ్ గుర్తు ద్వారా సులభంగా ఇంగ్లీష్ మరియు తెలుగు కీబోర్డు మార్చుకోవచ్చు", "వాయిస్ టైపింగ్ చేసేటప్పుడు స్పష్టంగా నెమ్మదిగా మాట్లాడండి", "మందుల ఎక్స్‌పైరీ డేట్లు చూడటానికి గూగుల్ లెన్స్ వాడండి"],
      ta: ["குளோப் ஐகான் மூலம் தமிழ் மற்றும் ஆங்கில விசைப்பலகையை மாற்றலாம்", "வாய்ஸ் டைப்பிங் செய்யும் போது தெளிவாக பேசவும்", "மருந்துகளின் காலாவதி தேதியை அறிய கூகுள் லென்ஸ் உதவுகிறது"],
      hi: ["ग्लोब आइकन से आसानी से हिंदी और अंग्रेजी कीबोर्ड बदलें", "बोलकर टाइप करते समय फोन मुंह के पास रखकर साफ बोलें", "दवाइयों की एक्सपायरी डेट जांचने के लिए गूगल लेंस का उपयोग करें"]
    }
  },

  // 15. Intermediate: Online Shopping & Bus/Train Ticket Booking
  {
    id: "online_tickets_shopping",
    category: "services",
    level: "Intermediate",
    icon: "Ticket",
    color: "from-amber-600 to-emerald-700",
    title: {
      en: "Online Shopping & Bus/Train Ticket Booking",
      te: "ఆన్‌లైన్ షాపింగ్ & బస్సు, రైలు టికెట్ బుకింగ్",
      ta: "ஆன்லைன் ஷாப்பிங் & பேருந்து, ரயில் டிக்கெட் முன்பதிவு",
      hi: "ऑनलाइन खरीदारी और बस व ट्रेन टिकट बुकिंग"
    },
    sub: {
      en: "Book government RTC buses and IRCTC train tickets from home, and learn safe Cash-on-Delivery shopping rules.",
      te: "ఇంటి నుండే ప్రభుత్వ ఆర్టీసీ బస్సు మరియు రైలు టికెట్లు బుక్ చేసుకోవడం, మరియు సురక్షిత క్యాష్ ఆన్ డెలివరీ షాపింగ్ పద్ధతులు.",
      ta: "வீட்டிலிருந்தே அரசு பேருந்து மற்றும் ரயில் டிக்கெட்டுகளை முன்பதிவு செய்தல், பாதுகாப்பான ஆன்லைன் ஷாப்பிங் முறைகள்.",
      hi: "घर बैठे सरकारी बस और ट्रेन टिकट बुक करना और सुरक्षित कैश ऑन डिलीवरी (COD) से खरीदारी करना सीखें।"
    },
    steps: [
      {
        title: {
          en: "Booking Government State RTC Bus Tickets",
          te: "ప్రభుత్వ ఆర్టీసీ బస్సు టికెట్లు బుక్ చేసుకోవడం",
          ta: "அரசு பேருந்து டிக்கெட் முன்பதிவு",
          hi: "सरकारी बस (RTC) का ऑनलाइन टिकट बुक करना"
        },
        desc: {
          en: "Download official state RTC apps (APSRTC, TSRTC, TNSTC, UPSRTC) or visit official portals. Choose From & To town, pick your preferred seat, and pay securely via UPI. Show digital ticket SMS to conductor without taking printouts.",
          te: "అధికారిక ఆర్టీసీ యాప్ లో ఊరు పేరు నమోదు చేసి, సీటు ఎంచుకుని యూపీఐ ద్వారా టికెట్ తీసుకోండి. కండక్టర్‌కు మొబైల్ లో మెసేజ్ చూపిస్తే సరిపోతుంది.",
          ta: "அரசு போக்குவரத்து செயலியில் ஊரின் பெயரைப் பதிந்து, இருக்கையைத் தேர்வு செய்து UPI மூலம் கட்டணம் செலுத்தி மொபைல் எஸ்எம்எஸ் காட்டலாம்.",
          hi: "आधिकारिक सरकारी बस ऐप में यात्रा का स्थान और सीट चुनें, यूपीआई से भुगतान करें और कंडक्टर को फोन पर एसएमएस दिखाएं।"
        }
      },
      {
        title: {
          en: "Train Ticket Confirmation & Live Running Status",
          te: "రైలు టికెట్ స్టేటస్ & ఎక్కడుందో లైవ్ గా చూడటం",
          ta: "ரயில் நேரலை நிலவரம் அறிதல்",
          hi: "ट्रेन की लाइव स्थिति और पीएनआर (PNR) स्टेटस देखना"
        },
        desc: {
          en: "Use 'Where is my Train' or official NTES app. Enter train number to see exactly which station the train has reached in real time, even without internet using mobile cell towers!",
          te: "'Where is my Train' యాప్ ద్వారా రైలు ఏ స్టేషన్ కు వచ్చింది, ఎంత ఆలస్యంగా నడుస్తోందో ఇంటర్నెట్ లేకపోయినా సులభంగా తెలుసుకోవచ్చు.",
          ta: "'Where is my Train' செயலி மூலம் ரயில் எந்த நிலையத்தில் உள்ளது, எத்தனை மணி நேரம் தாமதம் என்பதை இணையம் இன்றியும் அறியலாம்.",
          hi: "'Where is my Train' ऐप से बिना इंटरनेट के भी पता लगाएं कि आपकी ट्रेन किस स्टेशन पर पहुंची है और कितने बजे आएगी।"
        }
      },
      {
        title: {
          en: "Safe Shopping: Choose Cash on Delivery (COD)",
          te: "సురక్షిత షాపింగ్: క్యాష్ ఆన్ డెలివరీ (COD) ఎంచుకోండి",
          ta: "பாதுகாப்பான ஷாப்பிங்: கேஷ் ஆன் டெலிவரி முறை",
          hi: "सुरक्षित ऑनलाइन खरीदारी: कैश ऑन डिलीवरी (COD) चुनें"
        },
        desc: {
          en: "When buying clothes, farm tools, or electronics online, always select 'Cash on Delivery' (pay only when parcel arrives in your hand). Check the item inside before handing over money.",
          te: "ఆన్‌లైన్ లో వస్తువులు కొనేటప్పుడు 'Cash on Delivery' ఎంచుకోండి. పార్సెల్ మీ చేతికి వచ్చి చూసుకున్నాకే డబ్బులు చెల్లించండి.",
          ta: "பொருட்களை வாங்கும் போது 'Cash on Delivery' தேர்வு செய்யவும். பார்சல் கைக்கு வந்த பிறகே பணத்தைக் கொடுக்க வேண்டும்.",
          hi: "ऑनलाइन सामान मंगवाते समय 'कैश ऑन डिलीवरी' चुनें। पार्सल हाथ में आने और जांचने के बाद ही पैसे दें।"
        }
      }
    ],
    tips: {
      en: ["Never buy from unknown Facebook/Instagram links offering heavy discounts", "Keep train PNR number ready to check coach & seat number", "Official bus tickets are sent to your mobile via SMS and WhatsApp"],
      te: ["ఫేస్‌బుక్ లో వచ్చే 90% భారీ ఆఫర్ల ప్రకటనలను నమ్మి డబ్బు కట్టవద్దు", "రైలు ఎక్కే ముందు పీఎన్ఆర్ స్టేటస్ సరిచూసుకోండి", "బస్సు టికెట్ ఎస్ఎంఎస్ భద్రంగా ఉంచుకోండి"],
      ta: ["சமூக வலைதளங்களில் வரும் போலி தள்ளுபடி லிங்க்குகளை நம்ப வேண்டாம்", "ரயில் ஏறும் முன் PNR நிலவரத்தை சரிபார்க்கவும்", "பேருந்து டிக்கெட் எஸ்எம்எஸ்-ஐ பத்திரமாக வைக்கவும்"],
      hi: ["सोशल मीडिया पर 80-90% भारी छूट वाले लुभावने लिंक से बचें", "ट्रेन में चढ़ने से पहले पीएनआर नंबर से सीट नंबर चेक करें", "टिकट का एसएमएस कंडक्टर को दिखाने के लिए सुरक्षित रखें"]
    }
  },

  // 16. Intermediate: Agriculture, Weather & Mandi Apps for Farmers
  {
    id: "agriculture_mandi_apps",
    category: "agriculture",
    level: "Intermediate",
    icon: "Wheat",
    color: "from-green-600 to-emerald-800",
    title: {
      en: "Agriculture, Weather & Mandi Apps for Farmers",
      te: "రైతుల కోసం వ్యవసాయం, వాతావరణం & మార్కెట్ ధరల యాప్‌లు",
      ta: "விவசாயிகளுக்கான வானிலை மற்றும் சந்தை விலை செயலிகள்",
      hi: "किसानों के लिए कृषि, मौसम और मंडी भाव ऐप्स"
    },
    sub: {
      en: "Check daily crop market rates on e-NAM, get rainfall forecasts on Meghdoot, and resolve crop disease issues via Kisan Call Centre 1800-180-1551.",
      te: "ఈ-నామ్ (e-NAM) ద్వారా పంటల మార్కెట్ ధరలు తెలుసుకోవడం, మేఘదూత్ యాప్ ద్వారా వర్ష సూచనలు మరియు కిసాన్ కాల్ సెంటర్ 1800-180-1551 ద్వారా పంట సలహాలు పొందడం.",
      ta: "e-NAM மூலம் சந்தை விலைகளை அறிதல், மேகதூத் செயலி மூலம் மழை நிலவரம் மற்றும் கிசான் உதவி எண் 1800-180-1551 மூலம் பயிர் ஆலோசனை பெறுதல்.",
      hi: "ई-नाम (e-NAM) से फसलों के दैनिक मंडी भाव देखना, मेघदूत ऐप से बारिश का पूर्वानुमान और किसान कॉल सेंटर 1800-180-1551 से फसल सलाह लेना।"
    },
    steps: [
      {
        title: {
          en: "Checking Daily Mandi Prices Online (e-NAM Portal)",
          te: "రోజూ మార్కెట్ యార్డ్ పంట ధరలను మొబైల్ లో చూడటం",
          ta: "தினசரி சந்தை பயிர் விலைகளை அறிதல்",
          hi: "दैनिक मंडी भाव मोबाइल पर घर बैठे देखना (e-NAM)"
        },
        desc: {
          en: "Visit enam.gov.in or Kisan Suvidha app. Select your State, District, and Commodity (Paddy, Cotton, Tomato, Chilli). See minimum, maximum, and modal price so middlemen cannot underpay you.",
          te: "enam.gov.in లేదా కిసాన్ సువిధ యాప్ లో మీ జిల్లా మరియు పంట పేరు ఎంచుకుంటే నేటి మార్కెట్ రేట్లు కనిపిస్తాయి. దీనివల్ల దళారులు తక్కువ ధరకు కొని మోసం చేయలేరు.",
          ta: "enam.gov.in இல் உங்கள் மாவட்டம் மற்றும் நெல், பருத்தி, தக்காளி போன்ற பயிர்களைத் தேர்ந்தெடுத்து உண்மை விலையை இடைத்தரகர்கள் இன்றி அறியலாம்.",
          hi: "enam.gov.in या किसान सुविधा ऐप पर राज्य, जिला और फसल चुनें। आज का न्यूनतम और अधिकतम भाव देखें ताकि व्यापारी आपको कम दाम न दें।"
        }
      },
      {
        title: {
          en: "Rainfall Forecasts for Sowing (Meghdoot / Mausam)",
          te: "విత్తనాలు వేసే సమయం & వర్ష సూచనలు (మేఘదూత్ యాప్)",
          ta: "விவசாயிகளுக்கான மழை முன்னறிவிப்பு",
          hi: "बुवाई और कटाई के लिए मौसम व बारिश का पूर्वानुमान (मेघदूत ऐप)"
        },
        desc: {
          en: "Download Meghdoot app created by Indian Meteorological Department (IMD). It gives 5-day weather and rainfall forecasts specifically for your agricultural block, helping you plan spraying and harvest.",
          te: "ప్రభుత్వ 'మేఘదూత్' యాప్ ద్వారా రాబోయే 5 రోజుల వర్ష సూచన మరియు వాతావరణ హెచ్చరికలు తెలుసుకుని పురుగుమందుల పిచికారీ మరియు కోతలను ప్లాన్ చేసుకోవచ్చు.",
          ta: "அரசின் மேகதூத் செயலி மூலம் அடுத்த 5 நாட்களுக்கான மழை நிலவரத்தை அறிந்து உரம் இடுதல் மற்றும் அறுவடையை திட்டமிடலாம்.",
          hi: "मौसम विभाग के 'मेघदूत' ऐप से अपने ब्लॉक के अगले 5 दिनों के मौसम और बारिश का हाल जानें, जिससे कीटनाशक छिड़काव और कटाई सही समय पर हो सके।"
        }
      },
      {
        title: {
          en: "Free Agriculture Advice: Kisan Call Centre 1800-180-1551",
          te: "ఉచిత వ్యవసాయ సలహాలు: కిసాన్ కాల్ సెంటర్ 1800-180-1551",
          ta: "இலவச விவசாய ஆலோசனை: கிசான் உதவி எண் 1800-180-1551",
          hi: "निःशुल्क कृषि सलाह: किसान कॉल सेंटर 1800-180-1551"
        },
        desc: {
          en: "Dial toll-free 1800-180-1551 from 6:00 AM to 10:00 PM. Speak directly to agricultural scientists in your local language about crop pests, fertilizer doses, and government subsidies completely free.",
          te: "టోల్ ఫ్రీ నంబర్ 1800-180-1551 కు ఉదయం 6 నుండి రాత్రి 10 వరకు కాల్ చేసి వ్యవసాయ శాస్త్రవేత్తలతో మీ సొంత భాషలో మాట్లాడి ఉచిత సలహాలు పొందవచ్చు.",
          ta: "கட்டணமில்லா எண் 1800-180-1551 ஐ அழைத்து வேளாண் விஞ்ஞானிகளிடம் உங்கள் மொழியிலேயே பூச்சி தாக்குதல் மற்றும் மானியங்கள் பற்றி இலவச ஆலோசனை பெறலாம்.",
          hi: "टोल-फ्री नंबर 1800-180-1551 पर सुबह 6 से रात 10 बजे तक कॉल करें और कृषि वैज्ञानिकों से अपनी भाषा में फसलों की बीमारी और खाद की मुफ्त सलाह पाएं।"
        }
      }
    ],
    tips: {
      en: ["Save 1800-180-1551 in phone contacts as 'Kisan Helpline'", "Check PM-Kisan eKYC status to ensure your 4-monthly instalment is not paused", "Use Plantix app to photograph sick plant leaves and identify diseases instantly"],
      te: ["ఫోన్ లో 1800-180-1551 నంబర్ 'కిసాన్ హెల్ప్‌లైన్' గా సేవ్ చేసుకోండి", "పీఎం కిసాన్ ఈ-కేవైసీ పూర్తి చేసి ఉంచండి", "ఆకులకు రోగం వస్తే ప్లాంటిక్స్ యాప్ లో ఫోటో తీసి మందులు తెలుసుకోండి"],
      ta: ["1800-180-1551 எண்ணை 'கிசான் உதவி எண்' என போனில் சேமிக்கவும்", "பிஎம் கிசான் eKYC விபரங்களை சரிபார்க்கவும்", "பயிர் இலை நோய்களை அறிய போட்டோ எடுத்து தெரிந்து கொள்ளலாம்"],
      hi: ["फोन में 1800-180-1551 नंबर 'किसान हेल्पलाइन' नाम से सेव रखें", "पीएम किसान की किस्त न रुके इसलिए ई-केवाईसी पूरी रखें", "फसल पर बीमारी लगने पर पत्ते की फोटो खींचकर सही दवाई की जानकारी लें"]
    }
  }
];

export const videoTutorials: VideoItem[] = [
  {
    "id": "v1",
    "youtubeId": "W4NeW_9FQd0",
    "title": {
      "en": "Learn How to Operate Your 1st Android Smartphone (Beginner Guide)",
      "te": "మీ మొదటి స్మార్ట్‌ఫోన్ వాడకం నేర్చుకోండి (ప్రారంభ మార్గదర్శకం)",
      "ta": "உங்கள் முதல் ஆண்ட்ராய்டு ஸ்மார்ட்போனை இயக்குவது எப்படி?",
      "hi": "अपना पहला एंड्रॉइड स्मार्टफोन चलाना सीखें (शुरुआती गाइड)"
    },
    "description": {
      "en": "Practical step-by-step introduction to touchscreen taps, making calls, saving contacts, and downloading safe apps from Play Store.",
      "te": "టచ్‌స్క్రీన్ ఉపయోగించడం, ఫోన్ కాల్స్ చేయడం, నంబర్లు భద్రపరచడం మరియు ప్లే స్టోర్ నుండి సురక్షిత యాప్‌లు డౌన్‌లోడ్ చేసుకునే విధానం.",
      "ta": "தொடுதிரை பயன்பாடு, அழைப்புகள் செய்தல், எண்களை சேமித்தல் மற்றும் தேவையான செயலிகளைப் பதிவிறக்கும் முறை.",
      "hi": "टचस्क्रीन का उपयोग, कॉल करना, कॉन्टैक्ट सेव करना और गूगल प्ले स्टोर से सुरक्षित ऐप डाउनलोड करने की आसान सीख।"
    },
    "category": "Smartphone",
    "duration": "11:24"
  },
  {
    "id": "v2",
    "youtubeId": "YI0uSgOpE4k",
    "title": {
      "en": "How to Change Font Size & Display Settings on Android",
      "te": "ఆండ్రాయిడ్ ఫోన్‌లో అక్షరాల పరిమాణం (ఫాంట్ సైజ్) పెంచడం ఎలా?",
      "ta": "ஆண்ட்ராய்டு போனில் எழுத்து அளவை பெரிதாக்குவது எப்படி?",
      "hi": "एंड्रॉइड फोन में फॉन्ट साइज और स्क्रीन डिस्प्ले सेटिंग्स कैसे बदलें"
    },
    "description": {
      "en": "Helpful guide especially for elders and parents to enlarge system fonts, adjust screen brightness, and make text readable.",
      "te": "పెద్దవారి కోసం ఫోన్ స్క్రీన్ పై అక్షరాలను పెద్దవిగా మార్చడం మరియు కంటికి ఇబ్బంది లేకుండా బ్రైట్‌నెస్ సెట్ చేయడం.",
      "ta": "முதியவர்களுக்கு பயன்படும் வகையில் எழுத்துக்களைப் பெரிதாக்குவது மற்றும் திரை வெளிச்சத்தை அமைக்கும் முறை.",
      "hi": "बुजुर्गों और माता-पिता के लिए फोन के अक्षरों को बड़ा करना और पढ़ने में आसान बनाने का आसान तरीका।"
    },
    "category": "Smartphone",
    "duration": "2:15"
  },
  {
    "id": "v3",
    "youtubeId": "dd-5Rc6WT94",
    "title": {
      "en": "WhatsApp All Essential Settings & Beginner Tutorial",
      "te": "వాట్సాప్ ముఖ్యమైన సెట్టింగ్స్ మరియు పూర్తి ఉపయోగ విధానం",
      "ta": "வாட்ஸ்அப் முக்கிய அமைப்புகள் மற்றும் முழு பயன்பாட்டு கையேடு",
      "hi": "व्हाट्सएप की सभी जरूरी सेटिंग्स और चलाना सीखें"
    },
    "description": {
      "en": "Learn how to chat, send voice notes without typing, make clear video calls to family, and manage group notifications.",
      "te": "టైప్ చేయకుండా వాయిస్ మెసేజ్ లు పంపడం, వీడియో కాల్స్ మాట్లాడటం మరియు అనవసర గ్రూప్ మెసేజ్ లను ఆపడం.",
      "ta": "எழுதாமல் குரல் வழி செய்தி அனுப்புவது, வீடியோ அழைப்புகள் செய்வது மற்றும் வாட்ஸ்அப் அமைப்புகளை நிர்வகிப்பது எப்படி.",
      "hi": "बिना हाथ से लिखे बोलकर मैसेज भेजना, परिवार से वीडियो कॉल करना और ग्रुप नोटिफिकेशन नियंत्रित करना।"
    },
    "category": "Communication",
    "duration": "8:45"
  },
  {
    "id": "v4",
    "youtubeId": "6qAlNXAfIr4",
    "title": {
      "en": "How To Use PhonePe: Money Transfer & Scan QR Code Safely",
      "te": "ఫోన్‌పే ఎలా వాడాలి: డబ్బులు పంపడం & క్యూఆర్ కోడ్ స్కాన్ చేయడం",
      "ta": "போன்பே பயன்படுத்துவது எப்படி: பணப் பரிவர்த்தனை மற்றும் கியூஆர் ஸ்கேன்",
      "hi": "फोनपे चलाना सीखें: पैसे भेजना और दुकान पर क्यूआर कोड स्कैन करना"
    },
    "description": {
      "en": "Complete walkthrough to check account balance, pay at grocery stores, and never enter your UPI PIN to receive money.",
      "te": "బ్యాంక్ బ్యాలెన్స్ చెక్ చేయడం, కిరాణా షాపుల్లో స్కాన్ చేసి పే చేయడం మరియు డబ్బులు తీసుకోవడానికి పిన్ అవసరం లేదని తెలుసుకోవడం.",
      "ta": "வங்கி இருப்பு பார்ப்பது, கடைகளில் கியூஆர் ஸ்கேன் செய்வது மற்றும் பாதுகாப்பாக பணம் அனுப்புதல்.",
      "hi": "बैंक बैलेंस चेक करना, दुकानों पर क्यूआर कोड स्कैन करके भुगतान करना और पैसे प्राप्त करने के लिए कभी पिन न डालने की सीख।"
    },
    "category": "Payments",
    "duration": "7:30"
  },
  {
    "id": "v5",
    "youtubeId": "Juw7WcWhL1E",
    "title": {
      "en": "How To Use Google Pay (GPay): Safe UPI Payments & Transfers",
      "te": "గూగుల్ పే (GPay) సురక్షితంగా ఉపయోగించే పూర్తి విధానం",
      "ta": "கூగుள் பே (GPay) மூலம் பாதுகாப்பாக பணம் செலுத்துவது எப்படி?",
      "hi": "गूगल पे (GPay) चलाना सीखें: सुरक्षित यूपीआई भुगतान और ट्रांसफर"
    },
    "description": {
      "en": "Step-by-step tutorial on sending money via mobile number, bank account, and protecting your confidential UPI PIN.",
      "te": "మొబైల్ నంబర్ మరియు బ్యాంక్ ఖాతా ద్వారా డబ్బులు పంపడం, మీ సీక్రెట్ యూపీఐ పిన్‌ను గోప్యంగా ఉంచుకోవడం.",
      "ta": "மொபைல் எண் மற்றும் வங்கி கணக்கு மூலம் பணம் அனுப்புவது மற்றும் இரகசிய PIN ஐ பாதுகாப்பது எப்படி.",
      "hi": "मोबाइल नंबर और बैंक खाते से पैसे ट्रांसफर करने और अपने गोपनीय यूपीआई पिन को सुरक्षित रखने का पूरा तरीका।"
    },
    "category": "Payments",
    "duration": "9:12"
  },
  {
    "id": "v6",
    "youtubeId": "Q4q9CqgEGz4",
    "title": {
      "en": "DigiLocker Account Setup: Download Aadhaar & Driving License Legally",
      "te": "డిజిలాకర్ ఖాతా తెరవడం: ఆధార్ & డ్రైవింగ్ లైసెన్స్ చట్టబద్ధంగా డౌన్‌లోడ్",
      "ta": "டிஜிலாக்கர்: அசல் அரசு ஆவணங்களை மொபைலில் பதிவிறக்குவது எப்படி?",
      "hi": "डिजिलॉकर अकाउंट कैसे बनाएं: आधार कार्ड और ड्राइविंग लाइसेंस डाउनलोड करें"
    },
    "description": {
      "en": "Official government tutorial showing how digital documents on DigiLocker are 100% valid with traffic police and authorities.",
      "te": "ట్రాఫిక్ పోలీస్ అడిగినప్పుడు ఒరిజినల్ పేపర్లు లేకుండా డిజిలాకర్ చూపించే చట్టబద్ధమైన భారత ప్రభుత్వ సదుపాయం.",
      "ta": "அரசு விதிகளின்படி அசல் ஆவணங்களுக்கு இணையாக செல்லுபடியாகும் டிஜிலாக்கர் ஆவணங்களை சேமிக்கும் முறை.",
      "hi": "सरकारी नियमानुसार मूल कागजात के बराबर मान्य डिजिलॉकर में आधार, आरसी और ड्राइविंग लाइसेंस सुरक्षित रखने का तरीका।"
    },
    "category": "Government",
    "duration": "6:50"
  },
  {
    "id": "v7",
    "youtubeId": "vMIdwNwBPHw",
    "title": {
      "en": "Cyber Fraud Helpline 1930 & Recovery Portal Explained",
      "te": "సైబర్ మోసం జరిగితే 1930 హెల్ప్‌లైన్ కు కాల్ చేసి డబ్బు రక్షించుకోవడం",
      "ta": "ஆன்லைன் பண மோசடி நடந்தால் 1930 உதவி எண் மூலம் மீட்பது எப்படி?",
      "hi": "साइबर फ्रॉड होने पर 1930 हेल्पलाइन पर कॉल करके पैसे वापस पाने का तरीका"
    },
    "description": {
      "en": "Critical guidance on calling 1930 within the golden hour to freeze fraudulent bank accounts and file reports on cybercrime.gov.in.",
      "te": "డబ్బు పోయిన మొదటి గంటలోనే 1930 కి ఫోన్ చేసి మోసగాళ్ల ఖాతాలను స్తంభింపజేసి మీ డబ్బు కాపాడుకునే ప్రత్యక్ష అవగాహన.",
      "ta": "பணம் இழந்தவுடன் உடனடியாக 1930 ஐ அழைத்து பணத்தை மீட்பதற்கான தேசிய சைபர் போர்ட்டல் வழிகாட்டி.",
      "hi": "पैसे कटने के तुरंत बाद 1930 पर कॉल करके फ्रॉड अकाउंट को फ्रीज कराने और cybercrime.gov.in पर शिकायत दर्ज करने की पूरी जानकारी।"
    },
    "category": "Safety",
    "duration": "8:15"
  },
  {
    "id": "v8",
    "youtubeId": "K8BSY018zYE",
    "title": {
      "en": "WhatsApp Two-Step Verification: Enable 6-Digit PIN Security",
      "te": "వాట్సాప్ 2-స్టెప్ వెరిఫికేషన్: 6-అంకెల పిన్ తో హ్యాకింగ్ నుండి రక్షణ",
      "ta": "வாட்ஸ்அப் 2-படி சரிபார்ப்பு: 6 இலக்க PIN அமைத்து பாதுகாக்கவும்",
      "hi": "व्हाट्सएप टू-स्टेप वेरिफिकेशन कैसे ऑन करें: अकाउंट सुरक्षित रखें"
    },
    "description": {
      "en": "Protect your WhatsApp account from being stolen or hijacked even if someone gets your SIM card or SMS code.",
      "te": "ఎవరైనా మీ సిమ్ తీసుకున్నా లేదా ఓటీపీ చూసినా మీ వాట్సాప్ ఓపెన్ కాకుండా అదనపు పాస్‌వర్డ్ సెట్ చేసుకునే విధానం.",
      "ta": "உங்கள் வாட்ஸ்அப் கணக்கை ஹேக்கர்களிடமிருந்து பாதுகாக்க 6 இலக்க PIN அமைக்கும் முறை.",
      "hi": "अपने व्हाट्सएप पर 6 अंकों का पिन लगाकर सिम स्वैप या हैकिंग से पूरी तरह सुरक्षित करने की आसान विधि।"
    },
    "category": "Safety",
    "duration": "2:40"
  },
  {
    "id": "v9",
    "youtubeId": "jGftb-GZ4aI",
    "title": {
      "en": "RBI Guidelines: Security of Debit Card Transactions & ATM Safety",
      "te": "ఆర్బీఐ నిబంధనలు: ఏటీఎం కార్డు మరియు బ్యాంకింగ్ లావాదేవీల భద్రత",
      "ta": "ரிசர்வ் வங்கி வழிகாட்டுதல்: ஏடிஎம் கார்டு மற்றும் வங்கி பாதுகாப்பு",
      "hi": "आरबीआई दिशानिर्देश: डेबिट कार्ड और एटीएम से सुरक्षित लेनदेन के नियम"
    },
    "description": {
      "en": "Reserve Bank of India awareness on protecting ATM PIN, never writing PIN on the card, and avoiding shoulder surfing.",
      "te": "ఏటీఎం కార్డుపై పిన్ రాయకూడదని, క్యాష్ తీసేటప్పుడు కీప్యాడ్ చేత్తో కవర్ చేయాలని తెలిపే రిజర్వ్ బ్యాంక్ మార్గదర్శకాలు.",
      "ta": "ஏடிஎம் பின்னை எழுதி வைக்கக் கூடாது மற்றும் கார்டை பத்திரமாகப் பயன்படுத்தும் முறைகள்.",
      "hi": "आरबीआई द्वारा एटीएम कार्ड पर पिन न लिखने, पैसे निकालते समय कीपैड ढकने और कार्ड सुरक्षा के जरूरी नियम।"
    },
    "category": "Banking",
    "duration": "4:20"
  },
  {
    "id": "v10",
    "youtubeId": "I2LJEufvS4I",
    "title": {
      "en": "CEIR Sanchar Saathi: How to Block Lost or Stolen Mobile Instantly",
      "te": "సంచార్ సాథీ CEIR: పోయిన మొబైల్ ఫోన్‌ను వెంటనే బ్లాక్ చేసే విధానం",
      "ta": "சஞ்சார் சாதி: தொலைந்த செல்போனை உடனே முடக்குவது எப்படி?",
      "hi": "संचार साथी पोर्टल: खोए या चोरी हुए मोबाइल को तुरंत कैसे ब्लॉक करें"
    },
    "description": {
      "en": "Government of India CEIR portal demonstration to block lost IMEI numbers across all SIM carriers so thieves cannot misuse it.",
      "te": "మీ ఫోన్ పోయినప్పుడు కేంద్ర ప్రభుత్వ సంచార్ సాథీ వెబ్‌సైట్‌లో ఐఎంఈఐ నంబర్ బ్లాక్ చేస్తే దొంగలు ఏ సిమ్ వేసినా పనిచేయదు.",
      "ta": "திருடப்பட்ட போனின் IMEI எண்ணை இந்திய அளவில் முடக்கும் மத்திய அரசு போர்ட்டல் விளக்கம்.",
      "hi": "भारत सरकार के पोर्टल पर खोए फोन का आईएमईआई नंबर ब्लॉक करके चोरों द्वारा इस्तेमाल रोकने की पूरी प्रक्रिया।"
    },
    "category": "Safety",
    "duration": "5:50"
  },
  {
    "id": "v11",
    "youtubeId": "B57614oeDIw",
    "title": {
      "en": "ABHA Health Card Registration on Mobile: Digital Health ID",
      "te": "మొబైల్‌లో ఆయుష్మాన్ భారత్ ఆభా (ABHA) హెల్త్ కార్డ్ డౌన్‌లోడ్",
      "ta": "மொபைலில் ஆயுஷ்மான் பாரத் ABHA மருத்துவ அடையாள அட்டை பெறுதல்",
      "hi": "मोबाइल से आयुष्मान भारत आभा (ABHA) हेल्थ कार्ड कैसे बनाएं"
    },
    "description": {
      "en": "Create your 14-digit government health ID using Aadhaar to keep hospital checkups and lab reports online securely.",
      "te": "ఆధార్ కార్డుతో 14 అంకెల ప్రభుత్వ ఆభా కార్డ్ తయారుచేసి ఆసుపత్రి రిపోర్టులను ఆన్‌లైన్‌లో భద్రపరుచుకోవడం.",
      "ta": "ஆதార్ மூலம் 14 இலக்க ABHA மருத்துவ அடையாள அட்டை பெற்று மருத்துவ ஆவணங்களை சேமிக்கும் முறை.",
      "hi": "आधार कार्ड की मदद से 14 अंकों का आभा हेल्थ कार्ड बनाकर सभी मेडिकल रिकॉर्ड ऑनलाइन सुरक्षित रखें।"
    },
    "category": "Government",
    "duration": "6:15"
  },
  {
    "id": "v12",
    "youtubeId": "8NSyjR2bjMY",
    "title": {
      "en": "PM Kisan Samman Nidhi e-KYC on Mobile: Check Installment Status",
      "te": "పీఎం కిసాన్ ఈ-కేవైసీ మొబైల్‌లో చేసే విధానం & డబ్బుల స్టేటస్",
      "ta": "பிஎம் கிசான் மொபைல் e-KYC மற்றும் ₹2,000 தவணை சரிபார்த்தல்",
      "hi": "पीएम किसान सम्मान निधि मोबाइल से ई-केवाईसी और किस्त स्टेटस"
    },
    "description": {
      "en": "Farmers can complete their mandatory eKYC using mobile OTP or face auth without paying cyber cafe operators.",
      "te": "రైతులు దళారులకు డబ్బులు ఇవ్వకుండా తమ మొబైల్ లోనే పీఎం కిసాన్ ఈ-కేవైసీ పూర్తి చేసి ₹2,000 డబ్బులు పడ్డాయో లేదో చూసుకోవడం.",
      "ta": "விவசாயிகள் வீட்டில் இருந்தே மொபைல் மூலம் பிஎம் கிசான் eKYC செய்து தவணை நிலையை அறியும் முறை.",
      "hi": "किसान भाई बिना किसी एजेंट को पैसे दिए घर बैठे मोबाइल से पीएम किसान ई-केवाईसी पूरी करना सीखें।"
    },
    "category": "Agriculture",
    "duration": "5:45"
  },
  {
    "id": "v13",
    "youtubeId": "An8zdgSkliQ",
    "title": {
      "en": "IRCTC Train Ticket Booking on Mobile: Step-by-Step Railway Guide",
      "te": "మొబైల్‌లో ఐఆర్‌సీటీసీ రైలు టికెట్ బుకింగ్ చేసే పూర్తి విధానం",
      "ta": "மொபைலில் IRCTC ரயில் டிக்கெட் முன்பதிவு செய்வது எப்படி?",
      "hi": "आईआरसीटीसी ऐप से मोबाइल पर ट्रेन टिकट कैसे बुक करें"
    },
    "description": {
      "en": "Book confirmed train seats, select lower berths for elderly parents, and pay safely without paying extra agent commissions.",
      "te": "ఇంటి నుండే రైలు టికెట్ బుక్ చేసుకోవడం, పెద్దవారి కోసం లోయర్ బెర్త్ ఎంచుకోవడం మరియు సురక్షిత చెల్లింపు విధానం.",
      "ta": "ரயில் டிக்கெட்டுகளை வீட்டிலிருந்தே முன்பதிவு செய்து எளிய முறையில் பணம் செலுத்தும் முறை.",
      "hi": "घर बैठे मोबाइल से ट्रेन की कन्फर्म सीट बुक करना और बिना एजेंट कमीशन दिए सही टिकट पाना।"
    },
    "category": "Services",
    "duration": "9:30"
  },
  {
    "id": "v14",
    "youtubeId": "onZC17HtyeE",
    "title": {
      "en": "RedBus Bus Ticket Booking Online: Select Seat & Timings",
      "te": "రెడ్‌బస్ యాప్‌లో బస్సు టికెట్లు బుక్ చేసుకునే సులభమైన విధానం",
      "ta": "ரெட்பஸ் மூலம் பேருந்து டிக்கெட் முன்பதிவு செய்வது எப்படி?",
      "hi": "रेडबस (RedBus) से ऑनलाइन बस टिकट कैसे बुक करें"
    },
    "description": {
      "en": "Book government and private bus seats, check live bus tracking, and know your boarding point on your smartphone.",
      "te": "బస్టాండుకు వెళ్లకుండానే ఫోన్ లో బస్సు సీటు బుక్ చేసుకోవడం మరియు బస్సు ఎక్కడికి వచ్చిందో లైవ్ చూడటం.",
      "ta": "பேருந்து நேரலை இருப்பிடம் அறிதல் மற்றும் மொபைல் மூலம் இருக்கை தேர்வு செய்து முன்பதிவு செய்தல்.",
      "hi": "बस स्टैंड के चक्कर काटे बिना घर से बस की सीट चुनना, लाइव लोकेशन देखना और सुरक्षित टिकट बुक करना।"
    },
    "category": "Services",
    "duration": "6:10"
  },
  {
    "id": "v15",
    "youtubeId": "-oxLxMIu210",
    "title": {
      "en": "How to Use Google Lens to Translate ANY Language with Camera",
      "te": "గూగుల్ లెన్స్ కెమెరాతో ఇంగ్లీష్ పేపర్లను తెలుగులోకి మార్చడం ఎలా?",
      "ta": "கூகுள் லென்ஸ் கேமரா மூலம் எந்த மொழியையும் மொழிபெயர்ப்பது எப்படி?",
      "hi": "गूगल लेंस कैमरे से किसी भी भाषा का तुरंत अनुवाद कैसे करें"
    },
    "description": {
      "en": "Point your phone camera at English medicine packets, bus boards, or government notices to see them translated into your language instantly.",
      "te": "మందుల చీటీలు, ఆసుపత్రి కాగితాలు లేదా ఇంగ్లీష్ నోటీసులను కెమెరాతో స్కాన్ చేసి క్షణాల్లో మీ సొంత భాషలోకి మార్చుకోవడం.",
      "ta": "ஆங்கில மருத்துவ குறிப்புகள் மற்றும் அறிவிப்புகளை கேமரா மூலம் உடனுக்குடன் தமிழில் மொழிபெயர்த்து அறிதல்.",
      "hi": "दवाई के पर्चे या अंग्रेजी सरकारी कागजात पर कैमरा घुमाकर तुरंत अपनी मातृभाषा में अनुवाद देखने का जादुई तरीका।"
    },
    "category": "Accessibility",
    "duration": "3:20"
  },
  {
    "id": "v16",
    "youtubeId": "K920Qsj_oI4",
    "title": {
      "en": "Gboard Voice Typing: Speak in Your Language to Type Messages",
      "te": "జీబోర్డ్ వాయిస్ టైపింగ్: మాట్లాడి మెసేజ్‌లు టైప్ చేసుకునే సులభ పద్ధతి",
      "ta": "குரல் தட்டச்சு: உங்கள் மொழியில் பேசி செய்தி அனுப்புவது எப்படி?",
      "hi": "गूगल कीबोर्ड (Gboard) से बोलकर हिंदी व अन्य भाषाओं में टाइपिंग"
    },
    "description": {
      "en": "Never struggle with small keyboard letters: tap the microphone icon and speak naturally to write WhatsApp messages in native scripts.",
      "te": "కీబోర్డుపై కష్టపడకుండా మైక్రోఫోన్ నొక్కి మాట్లాడితే చాలు, మీ మాటలు తెలుగు అక్షరాల్లో వాట్సాప్ మెసేజ్‌గా మారిపోతాయి.",
      "ta": "தட்டச்சு செய்ய சிரமப்படாமல் மைக்கில் பேசி செய்திகளை அனுப்பும் எளிய வசதி.",
      "hi": "कीबोर्ड पर टाइप करने में परेशानी हो तो माइक दबाकर बोलें और अपनी भाषा में व्हाट्सएप मैसेज तुरंत भेजें।"
    },
    "category": "Accessibility",
    "duration": "4:50"
  },
  {
    "id": "v17",
    "youtubeId": "Zgny-ogq-w8",
    "title": {
      "en": "Fake Electricity Bill Disconnection SMS Scam: How to Avoid Fraud",
      "te": "నకిలీ కరెంట్ బిల్లు ఎస్సెమ్మెస్ & ఫ్రాడ్ కాల్స్ నుండి ఎలా తప్పించుకోవాలి?",
      "ta": "போலி மின் கட்டண மெசேஜ் மோசடி: பணத்தை பாதுகாப்பது எப்படி?",
      "hi": "बिजली बिल कटने के फर्जी मैसेज और साइबर फ्रॉड से बचने के उपाय"
    },
    "description": {
      "en": "Understanding how cyber criminals send fake power disconnection warnings with phone numbers to steal bank savings via remote access apps.",
      "te": "ఈ రాత్రికి కరెంట్ బిల్లు కట్టకపోతే లైన్ కట్ చేస్తామంటూ వచ్చే నకిలీ ఎస్సెమ్మెస్‌లు, యాప్‌ల ప్రమాదాలపై విశ్లేషణ.",
      "ta": "மின் கட்டணம் செலுத்தவில்லை என வரும் போலி அழைப்புகள் மற்றும் லிங்க்குகளின் ஆபத்தை அறிதல்.",
      "hi": "बिजली कटने की धमकी वाले फर्जी मैसेज में दिए नंबर पर कॉल न करें और कोई रिमोट ऐप कभी डाउनलोड न करें।"
    },
    "category": "Safety",
    "duration": "6:30"
  },
  {
    "id": "v18",
    "youtubeId": "RwKZTvBH7JM",
    "title": {
      "en": "How To Use PhonePe App in Telugu: Complete Explanation",
      "te": "ఫోన్‌పే యాప్ తెలుగులో ఉపయోగించే పూర్తి విధానం (Full Explain in Telugu)",
      "ta": "போன்பே செயலியை தெலுங்கில் பயன்படுத்தும் வழிகாட்டி",
      "hi": "फोनपे ऐप को तेलुगु भाषा में चलाना सीखें (पूरा विवरण)"
    },
    "description": {
      "en": "Specialized regional language tutorial for Andhra Pradesh and Telangana citizens explaining UPI balance, mobile recharges, and electricity bill payments.",
      "te": "తెలుగు ప్రజల కోసం ఫోన్‌పే లో బ్యాలెన్స్ చెక్ చేయడం, మొబైల్ రీఛార్జ్ చేయడం మరియు కరెంట్ బిల్లు కట్టే పూర్తి వీడియో.",
      "ta": "தெலுங்கு மொழி பயனர்களுக்கான போன்பே கட்டண முறைகள் பற்றிய நேரடி விளக்கம்.",
      "hi": "तेलुगु भाषी उपयोगकर्ताओं के लिए फोनपे से बैलेंस चेक, मोबाइल रिचार्ज और बिजली बिल भरने की पूरी जानकारी।"
    },
    "category": "Payments",
    "duration": "8:40"
  },
  {
    "id": "v19",
    "youtubeId": "qrwXiOzRpi0",
    "title": {
      "en": "How To Create Google Pay Account in Telugu (New 2026 Process)",
      "te": "గూగుల్ పే ఖాతా తెరవడం ఎలా తెలుగులో (లేటెస్ట్ ప్రాసెస్ గైడ్)",
      "ta": "கூகுள் பே கணக்கு உருவாக்குவது எப்படி (தெலுங்கு வழிகாட்டி)",
      "hi": "गूगल पे अकाउंट कैसे बनाएं (तेलुगु भाषा में नया तरीका)"
    },
    "description": {
      "en": "Clear Telugu walkthrough for linking State Bank, Andhra Bank, or post office accounts to Google Pay with your ATM debit card.",
      "te": "మీ ఏటీఎం కార్డుతో బ్యాంక్ ఖాతాను గూగుల్ పే కు లింక్ చేసి సురక్షిత యూపీఐ పిన్ సెట్ చేసుకునే తెలుగు ట్యుటోరియల్.",
      "ta": "வங்கி கணக்கை கூகுள் பே உடன் இணைத்து புதிய PIN அமைக்கும் எளிய தெலுங்கு விளக்கம்.",
      "hi": "एटीएम कार्ड से बैंक अकाउंट को गूगल पे से जोड़ने और नया यूपीआई पिन सेट करने की तेलुगु गाइड।"
    },
    "category": "Payments",
    "duration": "7:55"
  },
  {
    "id": "v20",
    "youtubeId": "_MM6JQMIG-U",
    "title": {
      "en": "DigiLocker Login & Document Adding Process in Telugu",
      "te": "డిజిలాకర్ లాగిన్ ప్రాసెస్ తెలుగులో: ఆధార్, పాన్ & సర్టిఫికెట్లు జోడించడం",
      "ta": "டிஜிலாக்கர் லாகின் மற்றும் ஆவணங்கள் சேமிக்கும் முறை (தெலுங்கு)",
      "hi": "डिजिलॉकर में सरकारी कागजात जोड़ने का तरीका (तेलुगु में)"
    },
    "description": {
      "en": "Detailed Telugu explanation on how to add educational certificates, Aadhaar, and vehicle documents to the official DigiLocker app.",
      "te": "మీ ఆధార్, పదో తరగతి సర్టిఫికెట్లు మరియు వాహనం ఆర్సీ పేపర్లను డిజిలాకర్‌లో భద్రపరచుకునే తెలుగు వీడియో.",
      "ta": "அரசு ஆவணங்களை டிஜிலாக்கரில் சேமித்து வைத்துக்கொள்ளும் வழிகாட்டுதல்.",
      "hi": "डिजिलॉकर ऐप में अपने सभी जरूरी प्रमाण पत्रों को कानूनी रूप से सुरक्षित रखने का तेलुगु ट्यूटोरियल।"
    },
    "category": "Government",
    "duration": "6:40"
  },
  {
    "id": "v21",
    "youtubeId": "24IFpiBYoPM",
    "title": {
      "en": "Cyber Crime Complaint & 1930 Helpline Explanation in Telugu",
      "te": "సైబర్ క్రైమ్ కి ఫిర్యాదు ఎలా చేయాలి? 1930 హెల్ప్‌లైన్ తెలుగు గైడ్",
      "ta": "சைபர் குற்றங்களுக்கு புகார் அளிப்பது எப்படி? (தெலுங்கு விளக்கம்)",
      "hi": "साइबर क्राइम की शिकायत कैसे दर्ज करें? (तेलुगु भाषा में)"
    },
    "description": {
      "en": "Legal advisor explaining in Telugu what steps to take if you lose money in digital frauds and how to contact police effectively.",
      "te": "ఆన్‌లైన్ లో మోసపోయినప్పుడు భయపడకుండా వెంటనే 1930 కి కాల్ చేసి ఎలా ఫిర్యాదు చేయాలో న్యాయ నిపుణుల సలహాలు.",
      "ta": "ஆன்லைன் பண மோசடிக்கு எதிராக புகார் செய்யும் சட்டப்பூர்வ வழிமுறைகள் பற்றிய தெலுங்கு விழிப்புணர்வு.",
      "hi": "ऑनलाइन ठगी होने पर बिना डरे 1930 पर कॉल करने और पुलिस में शिकायत दर्ज कराने की कानूनी सलाह।"
    },
    "category": "Safety",
    "duration": "7:20"
  },
  {
    "id": "v22",
    "youtubeId": "0nysYabqrX8",
    "title": {
      "en": "PhonePe Kaise Use Kare: Scan & Pay Merchant QR Codes Safely",
      "te": "ఫోన్‌పే క్యూఆర్ కోడ్ స్కాన్ చేసి పేమెంట్స్ సురక్షితంగా చేయడం",
      "ta": "போன்பே கியூஆர் ஸ்கேன் செய்து பாதுகாப்பாக பணம் செலுத்துவது எப்படி",
      "hi": "फोनपे कैसे यूज़ करें: क्यूआर कोड स्कैन करके सुरक्षित पेमेंट करना"
    },
    "description": {
      "en": "Practical demonstration on checking the merchant name on the phone screen before entering UPI PIN to prevent sending money to wrong people.",
      "te": "దుకాణాల్లో పే చేసేటప్పుడు స్క్రీన్ పై వ్యాపారి పేరు సరిచూసుకుని మాత్రమే యూపీఐ పిన్ ఎంటర్ చేయాలని నేర్పించే డెమో.",
      "ta": "கடைக்காரர் பெயரைச் சரிபார்த்தు சரியான நபருக்கு பணம் அனுப்புவதை உறுதி செய்யும் முறை.",
      "hi": "दुकान पर पेमेंट करते समय मर्चेंट का नाम जांचना ताकि गलत खाते में पैसे ट्रांसफर न हों।"
    },
    "category": "Payments",
    "duration": "6:50"
  },
  {
    "id": "v23",
    "youtubeId": "kZo33F8n46Y",
    "title": {
      "en": "Google Pay Account Create & Bank Link Tutorial (2026 Process)",
      "te": "గూగుల్ పే కొత్త అకౌంట్ ఓపెన్ చేయడం మరియు బ్యాంక్ లింక్ చేయడం",
      "ta": "கூகுள் பே புதிய கணக்கு உருவாக்குவது மற்றும் வங்கி இணைப்பது எப்படி",
      "hi": "गूगल पे अकाउंट कैसे बनाएं और बैंक खाता लिंक करें (नया प्रोसेस)"
    },
    "description": {
      "en": "Clean demonstration of setting up Google Pay from scratch, SMS verification, debit card setup, and first test transaction.",
      "te": "మొదటిసారి గూగుల్ పే డౌన్‌లోడ్ చేసుకుని సిమ్ కార్డు వెరిఫికేషన్ ద్వారా బ్యాంక్ లింక్ చేసుకునే లైవ్ గైడ్.",
      "ta": "ஆரம்பத்தில் இருந்து கூகுள் பே கணக்கு தொடங்கி முதல் பரிவர்த்தனை செய்யும் முழு செயல்முறை.",
      "hi": "शुरुआत से गूगल पे ऐप इंस्टॉल करके बैंक खाता लिंक करने और पहली बार सुरक्षित लेनदेन की प्रक्रिया।"
    },
    "category": "Payments",
    "duration": "8:10"
  },
  {
    "id": "v24",
    "youtubeId": "L3oHwpw-OpE",
    "title": {
      "en": "How to Use WhatsApp: Complete Beginner Walkthrough",
      "te": "వాట్సాప్ ఉపయోగించడం నేర్చుకోండి: పూర్తి ప్రారంభ గైడ్",
      "ta": "வாட்ஸ்அப் தொடக்க வழிகாட்டி: பேசுவது, படம் அனுப்புவது எப்படி?",
      "hi": "व्हाट्सएप चलाना सीखें: फुल ट्यूटोरियल और आसान गाइड"
    },
    "description": {
      "en": "Detailed walkthrough covering sending photos, sharing location with family for safety, audio calling, and blocking spam numbers.",
      "te": "కుటుంబానికి ఫోటోలు పంపడం, రక్షణ కోసం లైవ్ లొకేషన్ పంచుకోవడం మరియు నకిలీ నంబర్లను బ్లాక్ చేయడం.",
      "ta": "புகைப்படங்கள் அனுப்புதல், குடும்பத்தினருடன் இருப்பிடம் பகிர்தல் மற்றும் ஸ்பேம் எண்களை தடுப்பது எப்படி.",
      "hi": "फोटो भेजना, सुरक्षा के लिए लाइव लोकेशन शेयर करना और अनजान फर्जी नंबरों को ब्लॉक करने की विधि।"
    },
    "category": "Communication",
    "duration": "9:50"
  }
];

export const awarenessPosters: PosterItem[] = [
  {
    id: "p1",
    title: {
      en: "Golden Rules of UPI Payment Safety",
      te: "యూపీఐ చెల్లింపుల సువర్ణ సూత్రాలు",
      ta: "UPI பணப் பரிவர்த்தனைக்கான பொன்னான விதிகள்",
      hi: "यूपीआई सुरक्षा के स्वर्णिम नियम"
    },
    description: {
      en: "1. No PIN needed to receive money. 2. Verify shopkeeper name before typing PIN. 3. Never approve unknown collect requests.",
      te: "1. డబ్బులు తీసుకోవడానికి పిన్ అవసరం లేదు. 2. దుకాణదారుడి అసలు పేరు సరిచూసుకోండి. 3. తెలియని మనీ రిక్వెస్ట్‌లను అంగీకరించవద్దు.",
      ta: "1. பணம் பெற பின் தேவையில்லை. 2. கடைக்காரர் பெயரைச் சரிபார்க்கவும். 3. தெரியாத கட்டணக் கோரிக்கைகளை நிராகரிக்கவும்.",
      hi: "1. पैसे प्राप्त करने के लिए पिन नहीं लगता। 2. पिन डालने से पहले दुकानदार का नाम जांचें। 3. अनजान पेमेंट रिक्वेस्ट को खारिज करें।"
    },
    category: "payments",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p2",
    title: {
      en: "Scam Phone Calls Identification Checklist",
      te: "సైబర్ మోసగాళ్ల నకిలీ ఫోన్ కాల్స్ గుర్తింపు",
      ta: "போலி போன் கால்களைக் கண்டறியும் எச்சரிக்கை அட்டை",
      hi: "धोखाधड़ी वाले फोन कॉल की पहचान कैसे करें"
    },
    description: {
      en: "Never install AnyDesk or TeamViewer screen apps. Hang up if caller creates panic or demands immediate OTP. Report to 1930.",
      te: "స్క్రీన్ షేరింగ్ యాప్స్ ఎప్పుడూ ఇన్‌స్టాల్ చేయవద్దు. కంగారు పెట్టే ఫోన్ కాల్స్ వెంటనే కట్ చేయండి. హెల్ప్‌లైన్ 1930 కి కాల్ చేయండి.",
      ta: "ஸ்கிரீன் ஷேரிங் செயலிகளை நிறுவ வேண்டாம். அவசரப்படுத்தும் கால்களை துண்டிக்கவும். உதவி எண் 1930 ஐத் தொடர்பு கொள்ளவும்.",
      hi: "कभी भी स्क्रीन शेयरिंग ऐप इंस्टॉल न करें। दबाव में आकर ओटीपी न दें। तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p3",
    title: {
      en: "Smartphone Anatomy & Essential Icons",
      te: "స్మార్ట్‌ఫోన్ ప్రధాన బటన్లు మరియు గుర్తుల అవగాహన",
      ta: "ஸ்மார்ட்போன் முக்கிய சின்னங்கள் மற்றும் விளக்கம்",
      hi: "स्मार्टफोन के मुख्य बटन और महत्वपूर्ण आइकन"
    },
    description: {
      en: "Understand WiFi, Mobile Data, Flashlight, Location, and Battery icons so you can control your device independently.",
      te: "వైఫై, మొబైల్ డేటా, టార్చ్ లైట్, లొకేషన్ మరియు బ్యాటరీ గుర్తుల వాడకం సులభంగా అర్థం చేసుకోండి.",
      ta: "வைஃபை, மொபைல் டேட்டா, டார்ச், ஜிபிஎஸ் இருப்பிடம் ஆகியவற்றின் பயன்பாட்டை எளிதாக அறியலாம்.",
      hi: "वाईफाई, मोबाइल डेटा, टॉर्च, लोकेशन और बैटरी आइकन को पहचानें ताकि आप फोन का बेहतर उपयोग कर सकें।"
    },
    category: "smartphone",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p4",
    title: {
      en: "Safe WhatsApp & Social Media Habits",
      te: "సురక్షిత వాట్సాప్ మరియు సోషల్ మీడియా పద్ధతులు",
      ta: "பாதுகாப்பான வாட்ஸ்அப் பயன்பாட்டு முறைகள்",
      hi: "सुरक्षित व्हाट्सएप और सोशल मीडिया के नियम"
    },
    description: {
      en: "Check twice before forwarding rumours. Never post children's private IDs or bank passbooks in public village groups.",
      te: "ధృవీకరించని వదంతులను ఫార్వర్డ్ చేయవద్దు. ఆధార్ లేదా బ్యాంక్ పాస్‌బుక్ ఫోటోలను గ్రూపులలో ఎప్పుడూ పెట్టవద్దు.",
      ta: "வதந்திகளைப் பரப்பாதீர்கள். குடும்ப அடையாள அட்டைகள் மற்றும் வங்கி விவரங்களை பொதுக் குழுக்களில் பகிரக் கூடாது.",
      hi: "अफवाहें फॉरवर्ड करने से बचें। सार्वजनिक ग्रुप में बैंक पासबुक या आधार कार्ड की तस्वीरें कभी न डालें।"
    },
    category: "communication",
    imageUrl: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p5",
    title: {
      en: "DigiLocker: Your Digital Document Vault",
      te: "డిజిలాకర్: మీ అధికారిక పత్రాల డిజిటల్ భద్రత",
      ta: "டிஜிலாக்கர்: அசல் சான்றிதழ்களின் பாதுகாப்பான பெட்டகம்",
      hi: "डिजिलॉकर: सरकारी कागजात का डिजिटल लॉकर"
    },
    description: {
      en: "Carry Driving License, Ration Card, Voter ID, and 10th marks memo anywhere legally on phone without carrying physical papers.",
      te: "కాగితాలు చేతిలో లేకుండానే మొబైల్ లో డ్రైవింగ్ లైసెన్స్, రేషన్ కార్డ్ మరియు సర్టిఫికెట్లు చట్టబద్ధంగా చూపించవచ్చు.",
      ta: "அசல் ஆவணங்களைத் தொலைக்காமல் மொபைலில் பாதுகாப்பாக வைத்து எங்கும் அதிகாரிகளிடம் சட்டப்பூர்வமாகக் காட்டலாம்.",
      hi: "ड्राइविंग लाइसेंस, राशन कार्ड और अंक पत्र अब फोन में रखें। खोने का डर नहीं और हर जगह पूरी तरह मान्य।"
    },
    category: "government",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p6",
    title: {
      en: "Cyber Crime Emergency Helpline: 1930",
      te: "సైబర్ క్రైమ్ అత్యవసర హెల్ప్‌లైన్: 1930",
      ta: "சைபர் குற்ற அவசர உதவி எண்: 1930",
      hi: "साइबर फ्रॉड आपातकालीन हेल्पलाइन: 1930"
    },
    description: {
      en: "Save 1930 in your mobile now. If defrauded of money, report within the 'Golden Hour' (2 hours) to freeze transactions instantly.",
      te: "మీ ఫోన్ లో 1930 నంబర్ సేవ్ చేసుకోండి. ఆన్‌లైన్ మోసం జరిగితే మొదటి 2 గంటల్లో కాల్ చేసి మీ సొమ్ము వెనక్కి తెచ్చుకోండి.",
      ta: "இப்போதே 1930 என்ற எண்ணைச் சேமிக்கவும். பணம் ஏமாற்றப்பட்டால் 2 மணி நேரத்திற்குள் அழைத்து பணத்தை முடக்கலாம்.",
      hi: "अपने फोन में 1930 नंबर सेव रखें। ऑनलाइन धोखाधड़ी होते ही 2 घंटे के भीतर कॉल करें ताकि पैसे तुरंत रोके जा सकें।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p7",
    title: {
      en: "Google Lens & Native Voice Typing Guide",
      te: "గూగుల్ లెన్స్ & వాయిస్ టైపింగ్ ఇన్ఫోగ్రాఫిక్",
      ta: "கூகுள் லென்ஸ் மற்றும் குரல் தட்டச்சு வழிகாட்டி",
      hi: "गूगल लेंस अनुवाद व बोलकर टाइप करने की गाइड"
    },
    description: {
      en: "1. Speak into keyboard mic to type in Telugu, Tamil, or Hindi. 2. Point Google Lens camera at English letters, hospital receipts, or medicine strips to translate instantly.",
      te: "1. కీబోర్డ్ మైక్ లో మాట్లాడి సొంత భాషలో సందేశాలు రాయండి. 2. ఇంగ్లీష్ మందుల చీటీలు లేదా బ్యాంక్ పేపర్లపై గూగుల్ లెన్స్ కెమెరా పెట్టి వెంటనే మీ భాషలోకి మార్చుకోండి.",
      ta: "1. விசைப்பலகை மைக்கில் பேசி தமிழில் தட்டச்சு செய்யுங்கள். 2. மருந்து சீட்டுகள் அல்லது ஆங்கில தாள்களை கேமரா மூலம் தமிழில் மொழிபெயர்க்கவும்.",
      hi: "1. कीबोर्ड माइक में बोलकर अपनी भाषा में टाइप करें। 2. अंग्रेजी पर्चों और दवाई की बोतलों पर गूगल लेंस कैमरा रखकर तुरंत हिंदी अनुवाद पढ़ें।"
    },
    category: "accessibility",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p8",
    title: {
      en: "Safe Online Ticket Booking & Cash on Delivery (COD)",
      te: "సురక్షిత ఆర్టీసీ బస్సు, రైలు టికెట్లు & క్యాష్ ఆన్ డెలివరీ",
      ta: "அரசு பேருந்து, ரயில் முன்பதிவு மற்றும் பாதுகாப்பான ஷாப்பிங்",
      hi: "सुरक्षित ऑनलाइन बस-ट्रेन टिकट व कैश ऑन डिलीवरी (COD)"
    },
    description: {
      en: "1. Book bus tickets only on official RTC apps (APSRTC/TSRTC). 2. Track live train status without internet via 'Where is my Train'. 3. For online shopping, always choose Cash on Delivery.",
      te: "1. అధికారిక ఆర్టీసీ యాప్‌లలో మాత్రమే బస్సు సీట్లు బుక్ చేసుకోండి. 2. ఇంటర్నెట్ లేకపోయినా రైలు స్టేటస్ చూడవచ్చు. 3. ఆన్‌లైన్ షాపింగ్‌లో క్యాష్ ఆన్ డెలివరీ ఎంచుకోండి.",
      ta: "1. அரசு போக்குவரத்து செயலிகளில் மட்டுமே பேருந்து டிக்கெட் எடுக்கவும். 2. ரயிலின் நேரலை இடத்தை அறியவும். 3. ஆன்லைன் வாங்குதலுக்கு Cash on Delivery தேர்வு செய்யவும்.",
      hi: "1. केवल आधिकारिक RTC ऐप से बस टिकट बुक करें। 2. बिना इंटरनेट भी ट्रेन की लोकेशन ट्रैक करें। 3. ऑनलाइन खरीदारी में पार्सल हाथ में आने पर ही पैसे (COD) दें।"
    },
    category: "services",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p9",
    title: {
      en: "Kisan Mandi Prices on e-NAM & Meghdoot Weather Alerts",
      te: "రైతులకు మార్కెట్ ధరలు (e-NAM) & మేఘదూత్ వర్ష సూచన",
      ta: "விவசாயிகளுக்கான சந்தை விலை (e-NAM) மற்றும் வானிலை தகவல்",
      hi: "ई-नाम (e-NAM) मंडी भाव और मेघदूत मौसम अलर्ट"
    },
    description: {
      en: "1. Check daily mandi crop prices on enam.gov.in before selling to traders. 2. Get 5-day local rainfall forecast on Meghdoot. 3. Call Kisan Helpline 1800-180-1551 for free crop advice.",
      te: "1. పంట అమ్మే ముందు enam.gov.in లో తాజా మార్కెట్ రేట్లు చూడండి. 2. మేఘదూత్ యాప్ ద్వారా 5 రోజుల వర్ష సూచన తెలుసుకోండి. 3. కిసాన్ కాల్ సెంటర్ 1800-180-1551 కు ఉచితంగా కాల్ చేయండి.",
      ta: "1. வியாபாரிகளிடம் விற்கும் முன் enam.gov.in இல் உண்மையான விலையை சரிபார்க்கவும். 2. மேகதூத் செயலி மூலம் மழை நிலவரம் அறியவும். 3. கிசான் உதவி எண் 1800-180-1551-ல் ஆலோசிக்கவும்.",
      hi: "1. फसल बेचने से पहले enam.gov.in पर आज का सही मंडी भाव देखें। 2. मेघदूत ऐप से बारिश का पूर्वानुमान जानें। 3. किसान हेल्पलाइन 1800-180-1551 पर मुफ्त कृषि सलाह लें।"
    },
    category: "agriculture",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p10",
    title: {
      en: "ATM Machine Card Skimming & CVV Safety Checklist",
      te: "ఏటీఎం మెషీన్ వద్ద కార్డు స్కిమ్మింగ్ & సీవీవీ భద్రత",
      ta: "ஏடிஎம் கார்டு பாதுகாப்பு மற்றும் CVV எண் ரகசியம்",
      hi: "एटीएम कार्ड स्किमिंग व सीवीवी (CVV) सुरक्षा चेकलिस्ट"
    },
    description: {
      en: "1. Cover keypad with one hand while entering your 4-digit ATM PIN. 2. Never write PIN on the card. 3. Never photograph or share the 3-digit CVV number on the back of your card.",
      te: "1. ఏటీఎం పిన్ కొట్టేటప్పుడు చేత్తో కీప్యాడ్ ను కప్పి ఉంచండి. 2. కార్డుపై ఎప్పుడూ పిన్ రాయవద్దు. 3. కార్డు వెనుక ఉండే 3 అంకెల CVV నంబర్ ఎవరికీ చెప్పవద్దు, ఫోటో తీయవద్దు.",
      ta: "1. ஏடிஎம் பின் அடிக்கும் போது கைகளால் மறைக்கவும். 2. கார்டின் மீது PIN எழுதக் கூடாது. 3. கார்டின் பின்னால் உள்ள 3 இலக்க CVV எண்ணை எவருக்கும் பகிர வேண்டாம்.",
      hi: "1. एटीएम में पिन डालते समय कीपैड को दूसरे हाथ से ढकें। 2. कार्ड पर पिन कभी न लिखें। 3. कार्ड के पीछे दिए गए 3 अंकों के सीवीवी (CVV) नंबर को गुप्त रखें।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p11",
    title: {
      en: "Instant Loan Apps & Extortion Threat Warning",
      te: "తక్షణ లోన్ యాప్‌లు మరియు వేధింపుల హెచ్చరిక",
      ta: "உடனடி கடன் செயலிகள் மற்றும் மிரட்டல் எச்சரிக்கை",
      hi: "इंस्टेंट लोन ऐप और ब्लैकमेलिंग से सावधान"
    },
    description: {
      en: "Never install 7-day loan apps from WhatsApp or APK links that demand access to your contacts and photo gallery. Genuine NBFCs never blackmail or edit photos. Report directly to 1930.",
      te: "కాంటాక్ట్స్ మరియు ఫోటో గ్యాలరీ అనుమతులు అడిగే 7-రోజుల నకిలీ లోన్ యాప్‌లను ఎప్పుడూ ఇన్‌స్టాల్ చేయవద్దు. ఏవైనా సమస్యలు ఉంటే వెంటనే 1930 కి ఫిర్యాదు చేయండి.",
      ta: "தொடர்புகள் மற்றும் புகைப்படங்களை அணுக அனுமதி கேட்கும் 7 நாள் கடன் செயலிகளை நிறுவ வேண்டாம். உடனே 1930 எண்ணிற்கு புகார் அளியுங்கள்.",
      hi: "व्हाट्सएप पर आए 7-दिन वाले लोन ऐप कभी इंस्टॉल न करें जो आपकी कॉन्टैक्ट लिस्ट और गैलरी मांगते हैं। उत्पीड़न होने पर 1930 पर कॉल करें।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p12",
    title: {
      en: "Work-From-Home & YouTube Like Scam Alert",
      te: "ఇంటి నుండి పని & యూట్యూబ్ లైక్ స్కామ్ హెచ్చరిక",
      ta: "வீட்டிலிருந்து வேலை மற்றும் யூடியூப் லைக் மோசடி எச்சரிக்கை",
      hi: "घर बैठे कमाई व यूट्यूब लाइक टास्क फ्रॉड से बचें"
    },
    description: {
      en: "Nobody pays ₹5,000/day for liking videos or typing captcha. Any Telegram group asking you to deposit 'prepaid task fees' to withdraw profit is 100% fraud. Block and exit immediately.",
      te: "యూట్యూబ్ వీడియోలు లైక్ చేస్తే రోజూ ₹5,000 ఇస్తామంటే నమ్మవద్దు. లాభం తీసుకోవడానికి ముందుగా డబ్బు కట్టమంటే అది పూర్తిగా మోసం. గ్రూప్ నుండి నిష్క్రమించండి.",
      ta: "வீடியோக்களை லைக் செய்ய தினமும் ₹5,000 தருவதாகக் கூறினால் நம்பாதீர்கள். லாபம் எடுக்க முன்பணம் கேட்கும் டெலிகிராம் குழுக்கள் முழு ஏமாற்று வேலை.",
      hi: "वीडियो लाइक करने या होटल रिव्यू के बदले ₹5,000 देने वाले टेलीग्राम ग्रुप से बचें। मुनाफा निकालने के लिए प्रीपेड पैसा मांगना 100% ठगी है।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p13",
    title: {
      en: "Fake Electricity Bill Disconnection SMS Warning",
      te: "కరెంట్ బిల్లు చెల్లించలేదని వచ్చే నకిలీ ఎస్సెమ్మెస్ హెచ్చరిక",
      ta: "மின் கட்டண போலி துண்டிப்பு குறுஞ்செய்தி எச்சரிக்கை",
      hi: "बिजली बिल बकाया और लाइन काटने का फर्जी एसएमएस"
    },
    description: {
      en: "Electricity boards never send SMS warning power will be disconnected at 9:30 PM with mobile numbers or APK links. Pay only at official electricity counters or registered apps.",
      te: "విద్యుత్ శాఖ రాత్రి 9:30 గంటలకు కరెంట్ కట్ చేస్తామని వ్యక్తిగత ఫోన్ నంబర్లు లేదా లింకులతో మెసేజ్‌లు పంపదు. కేవలం అధికారిక కార్యాలయాల్లో మాత్రమే బిల్లులు కట్టండి.",
      ta: "மின்வாரியம் இரவு 9:30 மணிக்கு மின்சாரம் துண்டிக்கப்படும் என்று தனிப்பட்ட எண்களையோ லிங்க்குகளையோ அனுப்பாது. அரசு மையங்களில் மட்டும் பில் செலுத்தவும்.",
      hi: "बिजली विभाग रात 9:30 बजे बिजली काटने का व्यक्तिगत फोन नंबर वाला एसएमएस कभी नहीं भेजता। किसी भी अनजान नंबर पर कॉल न करें।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p14",
    title: {
      en: "Aadhaar Biometric Lock on mAadhaar App",
      te: "ఎం-ఆధార్ యాప్‌లో బయోమెట్రిక్ లాక్ చేసుకోండి",
      ta: "mAadhaar செயலியில் கைரேகை பயோமெட்ரிக் பூட்டு",
      hi: "एम-आधार (mAadhaar) ऐप में बायोमेट्रिक लॉक करें"
    },
    description: {
      en: "Lock your Aadhaar biometric fingerprint on mAadhaar app. When locked, nobody can illegally withdraw money using your thumb impression at customer service points (AePS).",
      te: "మీ ఆధార్ బయోమెట్రిక్ ఫింగర్‌ప్రింట్‌ను ఎం-ఆధార్ యాప్‌లో లాక్ చేయండి. లాక్ చేస్తే మీ వేలిముద్రతో ఎవరూ దొంగతనంగా మీ ఖాతా నుండి డబ్బులు తీయలేరు.",
      ta: "mAadhaar செயலியில் உங்கள் கைரேகையை லாக் செய்யுங்கள். லாக் செய்யப்பட்டால் உங்கள் கைரேகையை வைத்து எவரும் திருட்டுத்தனமாக பணம் எடுக்க முடியாது.",
      hi: "एम-आधार ऐप में अपना बायोमेट्रिक लॉक ऑन करें। लॉक होने पर कोई भी ग्राहक सेवा केंद्र (AePS) पर आपके अंगूठे से गैरकानूनी पैसे नहीं निकाल पाएगा।"
    },
    category: "government",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p15",
    title: {
      en: "Beware of Screen-Sharing Apps (AnyDesk & TeamViewer)",
      te: "స్క్రీన్ షేరింగ్ యాప్స్ (AnyDesk) పట్ల జాగ్రత్త",
      ta: "ஸ்கிரீன் ஷேரிங் செயலிகள் (AnyDesk) குறித்த எச்சரிக்கை",
      hi: "स्क्रीन शेयरिंग ऐप (AnyDesk/TeamViewer) से रहें सतर्क"
    },
    description: {
      en: "If a caller asks you to install AnyDesk, TeamViewer, or QuickSupport to 'update KYC' or 'receive subsidy', refuse immediately! They will see your entire mobile screen and steal your bank OTP.",
      te: "కేవైసీ అప్‌డేట్ లేదా సబ్సిడీ ఇస్తామని ఎవరైనా AnyDesk లేదా TeamViewer యాప్ ఇన్‌స్టాల్ చేయమంటే చేయవద్దు. వారు మీ మొబైల్ స్క్రీన్‌ను చూసి OTP దొంగిలిస్తారు.",
      ta: "KYC புதுப்பிக்க AnyDesk அல்லது TeamViewer செயலிகளை நிறுவச் சொன்னால் ஒருபோதும் செய்யாதீர்கள். அவர்கள் உங்கள் திரையைப் பார்த்து வங்கி OTP ஐத் திருடுவார்கள்.",
      hi: "केवाईसी या पेंशन चालू करने के नाम पर AnyDesk या TeamViewer ऐप डाउनलोड करने को कहे तो तुरंत मना करें। इससे वे आपका स्क्रीन देखकर ओटीपी चुरा लेते हैं।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p16",
    title: {
      en: "QR Code Golden Rule: Scan Only to PAY, NEVER to Receive",
      te: "క్యూఆర్ కోడ్ సువర్ణ సూత్రం: డబ్బులు పంపడానికి మాత్రమే స్కాన్ చేయాలి",
      ta: "கியூஆர் கோட் விதி: பணம் செலுத்த மட்டுமே ஸ்கேன் செய்ய வேண்டும்",
      hi: "क्यूआर कोड का स्वर्णिम नियम: केवल पैसे भेजने के लिए स्कैन करें"
    },
    description: {
      en: "You never need to scan a QR code or enter your UPI PIN to receive money or lottery prizes. Scanning a QR code always DEDUCTS money from your bank account.",
      te: "డబ్బులు అందుకోవడానికి లేదా బహుమతులు పొందడానికి క్యూఆర్ కోడ్ స్కాన్ చేయవలసిన అవసరం లేదు. క్యూఆర్ కోడ్ స్కాన్ చేసి పిన్ కొడితే మీ ఖాతా నుండి డబ్బులు కట్ అవుతాయి.",
      ta: "பணம் பெற நீங்கள் ஒருபோதும் கியூஆர் கோடை ஸ்கேன் செய்யத் தேவையில்லை. கியூஆர் கோடை ஸ்கேன் செய்தால் உங்கள் கணக்கிலிருந்து பணம் எடுக்கப்படும்.",
      hi: "पैसे प्राप्त करने के लिए कभी भी क्यूआर कोड स्कैन करने या यूपीआई पिन डालने की जरूरत नहीं होती। क्यूआर कोड स्कैन करने से आपके खाते से पैसे कटते हैं।"
    },
    category: "payments",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p17",
    title: {
      en: "Fake India Post / Courier Parcel Address Update Scam",
      te: "ఇండియా పోస్ట్ / కొరియర్ పార్సెల్ నకిలీ ఎస్సెమ్మెస్ హెచ్చరిక",
      ta: "போலி கூரியர் மற்றும் தபால் பார்சல் முகவரி மோசடி எச்சரிக்கை",
      hi: "इंडिया पोस्ट / कूरियर पार्सल डिलीवरी फ्रॉड से सावधान"
    },
    description: {
      en: "Never click SMS links claiming 'Your parcel address is incorrect, click here and pay ₹5 to update'. Fraudsters use this to empty your bank balance. India Post never sends APK links.",
      te: "మీ పార్సెల్ చిరునామా తప్పుగా ఉంది, ₹5 చెల్లించి సరిచేయండి అని వచ్చే ఎస్సెమ్మెస్ లింకులు ఎప్పుడూ క్లిక్ చేయవద్దు. పోస్టల్ శాఖ ఎప్పుడూ వ్యక్తిగత లింకులు పంపదు.",
      ta: "பார்சல் முகவரி தவறு என கூறி ₹5 செலுத்தச் சொல்லும் எஸ்எம்எஸ் இணைப்புகளைத் தொடாதீர்கள். இது வங்கிக் கணக்கை திருடும் தந்திரம்.",
      hi: "आपका पार्सल रुक गया है, ₹5 देकर पता अपडेट करें' वाले एसएमएस लिंक कभी न खोलें। डाक विभाग कभी ऐसी लिंक नहीं भेजता।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p18",
    title: {
      en: "Digital Arrest Alert: Fake Police & CBI Video Call Warning",
      te: "డిజిటల్ అరెస్ట్ హెచ్చరిక: నకిలీ పోలీస్ వీడియో కాల్స్ పట్ల జాగ్రత్త",
      ta: "டிஜிட்டல் அரெஸ்ட் எச்சரிக்கை: போலி போலீஸ் வீடியோ கால்களில் ஏமாறாதீர்கள்",
      hi: "डिजिटल अरेस्ट से सावधान: नकली पुलिस और सीबीआई वीडियो कॉल का सच"
    },
    description: {
      en: "Indian Law has NO provision for 'Digital Arrest' via Skype or WhatsApp video call! If someone in police uniform threatens you on video call demanding money, hang up immediately and dial 1930.",
      te: "భారత చట్టంలో వాట్సాప్ లేదా స్కైప్ వీడియో కాల్ ద్వారా 'డిజిటల్ అరెస్ట్' చేసే నిబంధన ఏదీ లేదు! యూనిఫామ్ లో బెదిరిస్తూ డబ్బులు డిమాండ్ చేస్తే వెంటనే ఫోన్ కట్ చేసి 1930 కి కాల్ చేయండి.",
      ta: "இந்திய சட்டத்தில் வீடியோ கால் மூலம் 'டிஜிட்டல் அரெஸ்ட்' செய்ய எந்த விதியும் இல்லை! மிரட்டல் வந்தால் உடனே துண்டித்து 1930 ஐ அழைக்கவும்.",
      hi: "भारतीय कानून में वीडियो कॉल पर 'डिजिटल अरेस्ट' का कोई प्रावधान नहीं है। वर्दी पहनकर वीडियो कॉल पर डराने वालों का फोन काटें और 1930 डायल करें।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p19",
    title: {
      en: "Village WhatsApp Group Admin Responsibilities & Safety",
      te: "గ్రామ వాట్సాప్ గ్రూప్ అడ్మిన్ బాధ్యతలు & భద్రతా నియమాలు",
      ta: "கிராம வாட்ஸ்அப் குழு நிர்வாகி பொறுப்புகள் மற்றும் பாதுகாப்பு",
      hi: "ग्राम व्हाट्सएप ग्रुप एडमिन के कर्तव्य और कानूनी नियम"
    },
    description: {
      en: "Enable 'Only Admins can send messages' during sensitive times. Never allow political fake rumors, hateful religious messages, or unverified loan ads in your village public group.",
      te: "సున్నితమైన సమయాల్లో కేవలం అడ్మిన్లు మాత్రమే మెసేజ్ చేసే సెట్టింగ్ ఆన్ చేయండి. వదంతులు, తప్పుడు రుణాలు మరియు ద్వేషపూరిత పోస్టులను గ్రూపులో అనుమతించవద్దు.",
      ta: "வதந்திகள் பரவுவதைத் தடுக்க நிர்வாகி மட்டுமே செய்தி அனுப்பும் முறையைப் பயன்படுத்தவும். தவறான கடன்கள் மற்றும் அவதூறுகளை அனுமதிக்கக் கூடாது.",
      hi: "संवेदनशील समय में 'ओनली एडमिन' सेटिंग चालू रखें। ग्रुप में अफवाहें, भड़काऊ संदेश या फर्जी लोन विज्ञापन कतई न डालने दें।"
    },
    category: "communication",
    imageUrl: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p20",
    title: {
      en: "Elderly Digital Shield: Screen Lock & App Security",
      te: "పెద్దవారి డిజిటల్ రక్షణ: స్క్రీన్ లాక్ & యాప్ భద్రత",
      ta: "முதியவர்களுக்கான டிஜிட்டல் பாதுகாப்பு: திரை பூட்டு பழக்கங்கள்",
      hi: "बुजुर्गों का डिजिटल सुरक्षा कवच: स्क्रीन लॉक और सुरक्षित आदतें"
    },
    description: {
      en: "Help elderly family members set up a secure 6-digit PIN and fingerprint lock. Remind them to NEVER hand their phone to strangers at bus stands or tea stalls to 'check messages'.",
      te: "ఇంటిలోని పెద్దవారికి 6 అంకెల పిన్ లేదా ఫింగర్‌ప్రింట్ లాక్ పెట్టించండి. బస్టాండ్‌లలో లేదా టీ దుకాణాల్లో తెలియని వ్యక్తులకు ఫోన్ చేతికి ఇవ్వవద్దని గుర్తుచేయండి.",
      ta: "முதியவர்களுக்கு கைரேகை பூட்டு வைக்க உதவுங்கள். பேருந்து நிலையங்களில் தெரியாத நபர்களிடம் போனை கொடுத்து மெசேஜ் பார்க்க சொல்லக் கூடாது.",
      hi: "बुजुर्गों के फोन में 6 अंकों का पिन और फिंगरप्रिंट लॉक जरूर लगाएं। बस स्टैंड या दुकान पर अनजान लोगों के हाथ में फोन देने से रोकें।"
    },
    category: "smartphone",
    imageUrl: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p21",
    title: {
      en: "Public USB Charging Station Warning (Juice Jacking)",
      te: "రైల్వే స్టేషన్లలో పబ్లిక్ యూఎస్బీ ఛార్జింగ్ ప్రమాదం (జ్యూస్ జాకింగ్)",
      ta: "பொது இடங்களில் USB சார்ஜ் செய்வதால் வரும் ஆபத்து எச்சரிக்கை",
      hi: "रेलवे स्टेशन व बस स्टैंड पर यूएसबी चार्जिंग से डेटा चोरी (Juice Jacking)"
    },
    description: {
      en: "Never plug your phone directly into unknown public USB ports at railway stations or bus stops. Hackers can steal your photos and passwords through data pins. Always carry your own wall adapter plug.",
      te: "రైల్వే స్టేషన్లలో ఉండే పబ్లిక్ యూఎస్బీ పోర్టులలో నేరుగా కేబుల్ పెట్టవద్దు. మీ స్వంత ఛార్జర్ ప్లగ్ ద్వారా మాత్రమే విద్యుత్ సాకెట్‌లో ఛార్జ్ చేయండి.",
      ta: "ரயில் நிலையங்களில் உள்ள பொது USB துளைகளில் நேரடியாக கேபிளை மாட்ட வேண்டாம். உங்கள் சொந்த சார்ஜர் அடாப்டரை மட்டும் பயன்படுத்தவும்.",
      hi: "रेलवे स्टेशन या बस स्टैंड पर सीधे अनजान यूएसबी पोर्ट में केबल न लगाएं। हमेशा अपने खुद के चार्जर अडाप्टर से प्लग सॉकेट में चार्ज करें।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p22",
    title: {
      en: "Crop Insurance (PMFBY): Report Crop Damage Within 72 Hours",
      te: "ప్రధానమంత్రి ఫసల్ బీమా (PMFBY): 72 గంటల్లోగా పంట నష్టాన్ని నమోదు చేయండి",
      ta: "பயிர் காப்பீடு (PMFBY): 72 மணி நேரத்திற்குள் பயிர் சேதத்தை தெரிவிக்கவும்",
      hi: "प्रधानमंत्री फसल बीमा योजना (PMFBY): 72 घंटे में फसल नुकसान की सूचना दें"
    },
    description: {
      en: "In case of heavy rains, hail, or pests, intimate crop loss within 72 hours via the Crop Insurance App or toll-free number 1800-180-1551 to get guaranteed compensation.",
      te: "భారీ వర్షాలు లేదా తెగుళ్ల వల్ల పంట నష్టం జరిగితే 72 గంటల లోపు క్రాప్ ఇన్సూరెన్స్ యాప్ లో లేదా 1800-180-1551 కు కాల్ చేసి నమోదు చేయాలి.",
      ta: "மழை அல்லது பூச்சிகளால் பயிர் சேதமடைந்தால் 72 மணி நேரத்திற்குள் பயிர் காப்பீட்டு செயலி அல்லது 1800-180-1551 மூலம் தெரிவிக்கவும்.",
      hi: "ओलावृष्टि या भारी बारिश से फसल बर्बाद होने पर 72 घंटे के भीतर क्रॉप इंश्योरेंस ऐप या 1800-180-1551 पर सूचना दें ताकि बीमा क्लेम मिल सके।"
    },
    category: "agriculture",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p23",
    title: {
      en: "Emergency SOS 112: One Number for Police, Fire & Medical Help",
      te: "అత్యవసర హెల్ప్‌లైన్ 112: పోలీస్, ఫైర్ మరియు అంబులెన్స్ కోసం ఒకే నంబర్",
      ta: "அவசர உதவி 112: போலீஸ், தீயணைப்பு மற்றும் ஆம்புலன்ஸ் ஒரே எண்",
      hi: "आपातकालीन नंबर 112: पुलिस, एम्बुलेंस और दमकल के लिए सिर्फ एक नंबर"
    },
    description: {
      en: "112 is India's single emergency helpline working in all states. Even without a SIM card balance or mobile network lock, emergency calls to 112 always connect.",
      te: "112 అనేది భారతదేశం అంతటా పనిచేసే ఏకైక అత్యవసర నంబర్. ఫోన్ లో బ్యాలెన్స్ లేకపోయినా లేదా లాక్ అయి ఉన్నా 112 కాల్ వెంటనే కలుస్తుంది.",
      ta: "112 என்பது இந்தியா முழுவதும் பயன்படும் ஒற்றை அவசர எண். சிம்மில் பணம் இல்லாதபோதும் இந்த எண்ணிற்கு அழைப்பு செல்லும்.",
      hi: "112 पूरे भारत का एकल आपातकालीन नंबर है। फोन में बैलेंस न होने या स्क्रीन लॉक होने पर भी 112 पर तुरंत कॉल लग जाती है।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "p24",
    title: {
      en: "SIM Porting Alert: Never Send 'PORT <Number>' to 1900 on Unknown Calls",
      te: "సిమ్ పోర్టింగ్ మోసం: తెలియని వ్యక్తులు చెబితే 1900 కి పోర్ట్ మెసేజ్ పంపవద్దు",
      ta: "சிம் போர்ட்டிங் மோசடி: தெரியாத நபர்கள் கூறினால் 1900-க்கு எஸ்எம்எஸ் அனுப்பாதீர்கள்",
      hi: "सिम पोर्टिंग फ्रॉड: किसी अनजान के कहने पर 1900 पर PORT लिखकर एसएमएस न भेजें"
    },
    description: {
      en: "Scammers pretend to upgrade your SIM to 5G and ask you to send PORT followed by your mobile number to 1900. Doing this hands over your mobile number to the scammer! Immediately decline.",
      te: "మీ సిమ్‌ను 5G కి ఉచితంగా మారుస్తామని చెప్పి 1900 కి పోర్ట్ మెసేజ్ చేయమంటే ఎప్పుడూ చేయవద్దు. అలా చేస్తే మీ నంబర్ మోసగాడి చేతికి వెళ్లిపోతుంది.",
      ta: "5G-க்கு மாற்றுவதாகக் கூறி 1900 எண்ணிற்கு மெசேஜ் அனுப்பச் சொன்னால் செய்யாதீர்கள். உங்கள் சிம்மை அவர்கள் திருடிவிடுவார்கள்.",
      hi: "5G सिम अपग्रेड के नाम पर 1900 पर PORT लिखकर भेजने को कहें तो कभी न भेजें। इससे आपका सिम कार्ड जालसाज के पास चला जाएगा।"
    },
    category: "security",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80"
  }
];

export const faqData: FAQItem[] = [
  {
    question: {
      en: "I lost my mobile phone. What should I do right now step-by-step?",
      te: "నా మొబైల్ ఫోన్ పోయింది. ఇప్పుడు నేను వెంటనే ఏమి చేయాలి?",
      ta: "எனது மொபைல் போன் தொலைந்துவிட்டது. உடனடியாக என்ன செய்ய வேண்டும்?",
      hi: "मेरा मोबाइल फोन खो गया है। मुझे तुरंत क्या करना चाहिए?"
    },
    answer: {
      en: "Follow these 4 immediate steps: 1. Call your telecom provider to BLOCK your SIM card (so scammers cannot receive bank OTPs). 2. Call your bank or use another family phone to freeze your UPI and net banking. 3. Visit https://ceir.sancharsaathi.gov.in (Government CEIR Portal) with your phone's IMEI number to block the device across all networks. 4. File a lost mobile report at your local police station or citizen portal to get an official acknowledgment copy.",
      te: "వెంటనే ఈ 4 పనులు చేయండి: 1. మీ నెట్‌వర్క్ ప్రొవైడర్‌కు కాల్ చేసి సిమ్ కార్డు బ్లాక్ చేయించండి (దీనివల్ల దొంగలకు బ్యాంక్ ఓటీపీలు రావు). 2. మీ బ్యాంకుకు ఫోన్ చేసి యూపీఐ ఆపండి. 3. సంచార్ సాథీ CEIR పోర్టల్ (ceir.sancharsaathi.gov.in) లో IMEI నంబర్ ఇచ్చి ఫోన్‌ను దేశవ్యాప్తంగా బ్లాక్ చేయండి. 4. మీ సమీప పోలీస్ స్టేషన్ లేదా ఆన్‌లైన్ సిటిజన్ పోర్టల్‌లో ఫిర్యాదు చేసి రసీదు తీసుకోండి.",
      ta: "உடனடியாக இந்த 4 வழிகளைப் பின்பற்றுங்கள்: 1. நெட்வொர்க் நிறுவனத்தை அழைத்து சிம் கார்டை முடக்கவும். 2. வங்கியிடம் கூறி UPI கணக்கை நிறுத்தவும். 3. மத்திய அரசின் CEIR தளத்தில் (ceir.sancharsaathi.gov.in) IMEI எண்ணைக் கொடுத்து போனை முடக்கவும். 4. காவல் நிலையத்தில் புகார் அளித்து அத்தாட்சி பெறவும்.",
      hi: "तुरंत ये 4 जरूरी कदम उठाएं: 1. सबसे पहले अपने टेलीकॉम ऑपरेटर को कॉल करके सिम कार्ड ब्लॉक कराएं ताकि बैंक का ओटीपी चोर को न मिले। 2. अपने बैंक से संपर्क करके यूपीआई और नेट बैंकिंग बंद कराएं। 3. सरकारी संचार साथी पोर्टल (ceir.sancharsaathi.gov.in) पर जाकर 15 अंकों का IMEI नंबर दर्ज कर फोन को ब्लॉक करें। 4. नजदीकी थाने में गुमशुदगी की शिकायत दर्ज कराएं।"
    },
    category: "smartphone"
  },
  {
    question: {
      en: "I missed my bus, but I already bought my ticket online. What should I do for the ticket money?",
      te: "నా బస్సు మిస్సయ్యింది, కానీ నేను ఆన్‌లైన్‌లో టికెట్ కొన్నాను. నా టికెట్ డబ్బుల కోసం నేను ఏం చేయాలి?",
      ta: "பேருந்தை தவறவிட்டுவிட்டேன், ஆனால் ஆன்லைனில் டிக்கெட் எடுத்துவிட்டேன். எனது பணத்திற்கு என்ன செய்வது?",
      hi: "मेरी बस छूट गई लेकिन मैंने ऑनलाइन टिकट खरीदा था। मुझे टिकट का पैसा वापस कैसे मिलेगा?"
    },
    answer: {
      en: "1. For State RTC Buses (APSRTC, TSRTC, KSRTC, UPSRTC): Open the official booking app or website immediately. Many state corporations allow partial refunds (usually 50% to 75% refund) if cancelled within 2 hours after scheduled departure. 2. If the bus was missed because the bus didn't arrive or broke down, file a TDR (Ticket Deposit Receipt) or complaint on the RTC passenger portal with ticket number for a 100% full refund. 3. Refund amounts are credited automatically back to the original UPI or bank account within 3 to 7 working days.",
      te: "1. ఆర్టీసీ బస్సులైతే (APSRTC/TSRTC): వెంటనే బుకింగ్ యాప్ లేదా వెబ్‌సైట్ ఓపెన్ చేయండి. బయలుదేరిన 2 గంటల లోపు రద్దు చేసుకుంటే నిబంధనల ప్రకారం కొంత మొత్తం (50% నుండి 75%) వెనక్కి వస్తుంది. 2. బస్సు రాకపోవడం వల్ల లేదా చెడిపోవడం వల్ల మిస్సయితే వెంటనే కస్టమర్ కేర్‌కు ఫోన్ చేసి పూర్తి రీఫండ్ (100%) కోరవచ్చు. 3. రీఫండ్ మొత్తం 3 నుండి 7 పని దినాలలో మీరు చెల్లించిన బ్యాంక్ ఖాతాకే నేరుగా జమ అవుతుంది.",
      ta: "1. அரசு பேருந்து முன்பதிவு செயலி அல்லது இணையதளத்தில் உடனே சென்று கேன்சல் செய்யவும். புறப்பட்ட 2 மணி நேரத்திற்குள் ரத்து செய்தால் 50% முதல் 75% வரை பணம் திரும்பக் கிடைக்கும். 2. பேருந்து வராததால் தவறினால் முழுப் பணத்தையும் திரும்பக் கோரலாம். 3. பணம் 3 முதல் 7 வேலை நாட்களில் உங்கள் கணக்கிற்கு வந்துவிடும்.",
      hi: "1. सरकारी रोडवेज ऐप या वेबसाइट पर तुरंत जाएं। बस छूटने के 2 घंटे के भीतर टिकट कैंसिल करने पर 50% से 75% तक रिफंड मिलता है। 2. अगर बस नहीं आई या खराब हुई, तो टीसी या हेल्पलाइन से शिकायत दर्ज कराकर 100% रिफंड लें। 3. रिफंड का पैसा 3 से 7 दिनों में सीधे उसी खाते में वापस आ जाता है जिससे पेमेंट हुआ था।"
    },
    category: "services"
  },
  {
    question: {
      en: "I want to buy a new smartphone. Which company and features are best for village and family use?",
      te: "నేను కొత్త స్మార్ట్‌ఫోన్ కొనాలనుకుంటున్నాను. గ్రామీణ మరియు కుటుంబ వినియోగానికి ఏ కంపెనీ మరియు ఏ ఫీచర్లు మంచివి?",
      ta: "நான் புதிய ஸ்மார்ட்போன் வாங்க விரும்புகிறேன். கிராமப்புற பயன்பாட்டிற்கு எந்த நிறுவனம் மற்றும் அம்சங்கள் சிறந்தது?",
      hi: "मुझे नया स्मार्टफोन खरीदना है। गांव और परिवार के इस्तेमाल के लिए कौन सी कंपनी और कौन से फीचर सबसे अच्छे हैं?"
    },
    answer: {
      en: "For durable village, agriculture, and elder use: 1. Look for at least 5000 mAh to 6000 mAh battery (lasts 1.5 to 2 days on single charge in rural areas). 2. Loud dual stereo speakers for hearing calls clearly in fields. 3. 5G network support (Band 28, 78) so your phone doesn't get outdated. 4. At least 6GB RAM and 128GB storage for smooth WhatsApp. 5. Recommended value brands: Samsung Galaxy M-series (M14/M15) for great durability and zero spam ads, or Realme Narzo / Redmi Note for fast charging and bright outdoor displays.",
      te: "గ్రామీణ ప్రాంతాల్లో వాడటానికి ముఖ్యంగా ఈ 5 విషయాలు చూడండి: 1. బ్యాటరీ కనీసం 5000 mAh నుండి 6000 mAh ఉండాలి (పొలాల్లో కరెంట్ లేకపోయినా 2 రోజులు వస్తుంది). 2. పెద్ద శబ్దంతో కూడిన లౌడ్ స్పీకర్ ఉండాలి. 3. 5G సపోర్ట్ ఉండాలి. 4. కనీసం 6GB ర్యామ్ మరియు 128GB మెమరీ ఉండాలి. 5. మంచి బ్రాండ్లు: శాంసంగ్ ఎం-సిరీస్ (బాగా మన్నుతుంది మరియు అనవసర ప్రకటనలు ఉండవు), లేదా రియల్‌మీ నార్జో / రెడ్‌మీ నోట్ (ఫాస్ట్ ఛార్జింగ్ మరియు స్పష్టమైన స్క్రీన్).",
      ta: "கிராமப்புற பயன்பாட்டிற்கு சிறந்த அம்சங்கள்: 1. 5000 mAh அல்லது 6000 mAh பெரிய பேட்டரி. 2. சத்தமாக கேட்கும் லவுட் ஸ்பீக்கர். 3. 5G நெட்வொர்க் வசதி. 4. 6GB RAM மற்றும் 128GB நினைவகம். 5. சிறந்த போன்கள்: சாம்சங் கேலக்ஸி M வரிசை (நீண்ட உழைப்பு), அல்லது ரியல்மி / ரெட்மி நோட் மாடல்கள்.",
      hi: "गांव और पारिवारिक उपयोग के लिए ये 5 बातें जरूर देखें: 1. बैटरी कम से कम 5000 या 6000 mAh होनी चाहिए जो 2 दिन चले। 2. खेतों में साफ आवाज के लिए लाउड स्पीकर हो। 3. 5G सपोर्ट होना जरूरी है। 4. कम से कम 6GB रैम और 128GB स्टोरेज हो। 5. बेहतरीन कंपनियां: सैमसंग गैलेक्सी M सीरीज (मजबूत और साफ सॉफ्टवेयर) या रियलमी नारजो / रेडमी नोट (तेज चार्जिंग व अच्छी स्क्रीन)।"
    },
    category: "smartphone"
  },
  {
    question: {
      en: "Money was debited from my bank via UPI, but the shopkeeper didn't receive it. How to get a refund?",
      te: "యూపీఐ ద్వారా నా ఖాతా నుండి డబ్బులు కట్ అయ్యాయి, కానీ దుకాణదారుడికి రాలేదు. ఆ డబ్బులు ఎలా వెనక్కి వస్తాయి?",
      ta: "UPI மூலம் பணம் பிடிக்கப்பட்டது, ஆனால் கடைக்காரருக்கு வரவில்லை. பணத்தை மீட்பது எப்படி?",
      hi: "यूपीआई से पैसे कट गए लेकिन दुकानदार को नहीं मिले। पैसा वापस कैसे मिलेगा?"
    },
    answer: {
      en: "Do NOT panic or pay again immediately! 1. Check your UPI app transaction history. If it says 'Processing' or 'Pending', wait 10 minutes. 2. If money was debited but the transaction failed, RBI and NPCI rules mandate that banks automatically reverse failed UPI transactions back to your account within 24 to 48 hours. 3. Note down the 12-digit UPI Reference / UTR number from the transaction details. If money is not returned after 48 hours, file a complaint on npci.org.in or your bank's toll-free customer care.",
      te: "కంగారుపడి మళ్లీ వెంటనే పే చేయవద్దు! 1. మీ యూపీఐ యాప్‌లో హిస్టరీ చూడండి. 'Pending' అని ఉంటే 10 నిమిషాలు ఆగండి. 2. డబ్బు కట్ అయి ఫెయిల్ అయితే ఆర్బీఐ నిబంధనల ప్రకారం 24 నుండి 48 గంటల్లో మీ ఖాతాకే ఆటోమేటిక్‌గా డబ్బులు వెనక్కి వస్తాయి. 3. ఆ లావాదేవీలోని 12 అంకెల UTR నంబర్‌ను భద్రపరుచుకోండి. 48 గంటల్లో రాకపోతే npci.org.in లో ఫిర్యాదు చేయండి.",
      ta: "பதற்றமடைந்து மீண்டும் செலுத்த வேண்டாம்! 1. 'Pending' என்று இருந்தால் 10 நிமிடங்கள் காத்திருக்கவும். 2. பணம் பிடித்தம் செய்யப்பட்டு தோல்வியடைந்தால் 24 முதல் 48 மணி நேரத்தில் தானாகவே உங்கள் வங்கிக் கணக்கில் சேர்ந்துவிடும். 3. 12 இலக்க UTR எண்ணை குறித்து வைக்கவும். பணம் வரவில்லை என்றால் வங்கியின் வாடிக்கையாளர் சேவையை அழைக்கவும்.",
      hi: "घबराकर दोबारा पैसे न भेजें! 1. यूपीआई ऐप में स्टेटस चेक करें। 'पेंडिंग' हो तो 10 मिनट रुकें। 2. अगर पैसे कट गए और पेमेंट फेल हो गया, तो आरबीआई के नियमानुसार 24 से 48 घंटे में पैसा अपने आप आपके बैंक खाते में वापस आ जाता है। 3. 12 अंकों का यूटीआर (UTR) नंबर नोट रखें। 48 घंटे बाद भी पैसा न आए तो बैंक या npci.org.in पर शिकायत दर्ज करें।"
    },
    category: "payments"
  },
  {
    question: {
      en: "I received an SMS stating electricity will be disconnected tonight at 9:30 PM. Is this genuine?",
      te: "కరెంట్ బిల్లు కట్టలేదని, ఈ రాత్రి 9:30 గంటలకు విద్యుత్ నిలిపివేస్తామని ఎస్సెమ్మెస్ వచ్చింది. ఇది నిజమేనా?",
      ta: "மின் கட்டணம் செலுத்தாததால் இரவு 9:30 மணிக்கு மின்சாரம் துண்டிக்கப்படும் என்று எஸ்எம்எஸ் வந்தது. இது உண்மையா?",
      hi: "मुझे एक एसएमएस मिला कि आज रात 9:30 बजे बिजली काट दी जाएगी। क्या यह सच है?"
    },
    answer: {
      en: "It is 100% A FRAUD SCAM! Electricity departments NEVER send disconnection messages with individual mobile numbers (like 'Call electricity officer on 98xxxxxxxx'). They never cut electricity at night. DO NOT call that phone number and DO NOT click any link to install an APK file. Pay your electricity bill only through your official electricity board counter, official state electricity app, or verified Google Pay/PhonePe biller.",
      te: "ఇది 100% సైబర్ మోసం! విద్యుత్ శాఖ రాత్రివేళ కరెంట్ కట్ చేయదు, మరియు వ్యక్తిగత ఫోన్ నంబర్లు ఇచ్చి 'ఈ నంబర్‌కు కాల్ చేయండి' అని మెసేజ్‌లు పంపదు. ఆ నంబర్‌కు కాల్ చేయవద్దు, అందులోని లింకులను క్లిక్ చేయవద్దు. మీ కరెంట్ బిల్లులను కేవలం అధికారిక విద్యుత్ కార్యాలయంలో లేదా ఫోన్‌పే/గూగుల్ పే లోని అధికారిక బిల్ పేమెంట్ ద్వారా మాత్రమే కట్టండి.",
      ta: "இது 100% மோசடி! மின்வாரியம் இரவில் மின்சாரத்தை துண்டிக்காது மற்றும் தனிப்பட்ட மொபைல் எண்களைக் கொடுத்து அழைக்கச் சொல்லாது. அந்த எண்ணை அழைக்காதீர்கள், எந்த லிங்க்கையும் தொடாதீர்கள். அரசு மையங்களில் மட்டுமே பில் செலுத்துங்கள்.",
      hi: "यह 100% फर्जी और ठगी का मैसेज है! बिजली विभाग कभी भी व्यक्तिगत मोबाइल नंबर देकर 'इस नंबर पर संपर्क करें' जैसा मैसेज नहीं भेजता और न ही रात में बिजली काटता है। उस नंबर पर कॉल न करें और न ही कोई ऐप डाउनलोड करें। बिल केवल बिजली घर जाकर या फोनपे/गूगल पे के आधिकारिक बिजली विकल्प से ही भरें।"
    },
    category: "security"
  },
  {
    question: {
      en: "Someone called claiming my son was arrested by police and demanding ₹50,000 via Google Pay immediately. What to do?",
      te: "నా కొడుకుని పోలీసులు అరెస్ట్ చేశారని, వెంటనే గూగుల్ పే ద్వారా ₹50,000 పంపాలని ఒకరు ఫోన్ చేశారు. నేను ఏం చేయాలి?",
      ta: "மகன் கைது செய்யப்பட்டுள்ளதாகக் கூறி ₹50,000 கூகுள் பே மூலம் உடனே அனுப்புமாறு போன் வந்தது. என்ன செய்வது?",
      hi: "फोन आया कि आपका बेटा पुलिस हिरासत में है और तुरंत गूगल पे से ₹50,000 भेजें। मुझे क्या करना चाहिए?"
    },
    answer: {
      en: "Stay calm and DO NOT send even a single rupee! This is a ruthless cyber panic scam known as 'Virtual Kidnapping / Police Impersonation'. Real police officers never ask for money or Google Pay transfers over phone calls to release anyone. Step 1: Immediately disconnect the call. Step 2: Call your son directly on his normal mobile number or call his friends, school/college, or workplace to verify. Step 3: Report the scam caller's mobile number immediately to the Cyber Helpline 1930.",
      te: "కంగారు పడకండి మరియు ఒక్క రూపాయి కూడా పంపవద్దు! ఇది భయపెట్టి డబ్బులు గుంజే అతిపెద్ద సైబర్ మోసం. నిజమైన పోలీసులు ఎప్పుడూ ఫోన్ చేసి గూగుల్ పే లో లంచాలు లేదా డబ్బులు డిమాండ్ చేయరు. వెంటనే ఆ కాల్ కట్ చేసి, మీ అబ్బాయి సాధారణ ఫోన్ నంబర్‌కు లేదా అతని స్నేహితులు, ఆఫీస్‌కు ఫోన్ చేసి నిజం తెలుసుకోండి. ఆ మోసగాడి నంబర్‌ను వెంటనే 1930 హెల్ప్‌లైన్‌కు రిపోర్ట్ చేయండి.",
      ta: "பதற்றப்படாமல் ஒரு பைசா கூட அனுப்பாதீர்கள்! இது பயமுறுத்தி பணம் பறிக்கும் கும்பலின் மோசடி. உண்மையான காவல்துறை ஒருபோதும் போனில் கூகுள் பே பணம் கேட்காது. போனை வைத்துவிட்டு உங்கள் மகனை அல்லது அவரது நண்பர்களை அழைத்து உண்மை நிலவரத்தை அறியவும். உடனே 1930-ல் புகாரளிக்கவும்.",
      hi: "बिल्कुल शांत रहें और एक भी रुपया न भेजें! यह डराकर पैसे ऐंठने वाला बहुत बड़ा साइबर फ्रॉड है। असली पुलिस कभी भी फोन पर गूगल पे से पैसे नहीं मांगती। तुरंत फोन काटें और अपने बेटे को उसके सामान्य नंबर पर कॉल करके बात करें। उसके दोस्तों या ऑफिस में फोन करके सच्चाई पता करें और उस फ्रॉड नंबर की शिकायत 1930 पर करें।"
    },
    category: "security"
  },
  {
    question: {
      en: "How can I lock my Aadhaar biometric fingerprint so no customer point can withdraw my money?",
      te: "నా వేలిముద్రతో ఎవరూ దొంగతనంగా డబ్బులు తీయకుండా ఆధార్ బయోమెట్రిక్ ఫింగర్‌ప్రింట్‌ను ఎలా లాక్ చేయాలి?",
      ta: "கைரேகை மூலம் பணம் திருடப்படாமல் இருக்க எனது ஆதார் பயோமெட்ரிக்கை எவ்வாறு லாக் செய்வது?",
      hi: "मैं अपना आधार बायोमेट्रिक (फिंगरप्रिंट) कैसे लॉक करूं ताकि कोई मेरे अंगूठे से पैसे न निकाल सके?"
    },
    answer: {
      en: "1. Download the official 'mAadhaar' app from Google Play Store or visit myaadhaar.uidai.gov.in. 2. Log in using your 12-digit Aadhaar number and OTP received on your linked mobile. 3. Tap 'Lock/Unlock Biometrics'. 4. Confirm with OTP. Once locked, nobody can misuse your thumb impression on AePS biometric fingerprint machines to steal money. Whenever you need to visit the ration shop or bank, you can temporarily unlock it in 10 seconds from the app!",
      te: "1. గూగుల్ ప్లే స్టోర్ నుండి అధికారిక 'mAadhaar' యాప్‌ను డౌన్‌లోడ్ చేసుకోండి లేదా myaadhaar.uidai.gov.in వెబ్‌సైట్‌కు వెళ్లండి. 2. మీ 12 అంకెల ఆధార్ నంబర్ మరియు ఓటీపీతో లాగిన్ అవ్వండి. 3. 'Lock/Unlock Biometrics' ఆప్షన్ పై నొక్కండి. 4. లాక్ చేసిన తర్వాత మీ వేలిముద్ర ద్వారా ఎవరూ ఖాతా నుండి డబ్బులు తీయలేరు. రేషన్ లేదా బ్యాంక్ పని ఉన్నప్పుడు మళ్లీ యాప్‌లోనే 10 సెకన్లలో అన్‌లాక్ చేసుకోవచ్చు.",
      ta: "1. 'mAadhaar' செயலியை ப்ளே ஸ்டோரிலிருந்து பதிவிறக்கவும். 2. உங்கள் ஆதார் எண் மற்றும் OTP மூலம் உள்நுழையவும். 3. 'Lock/Unlock Biometrics' தொட்டு லாக் செய்யவும். லாக் செய்தபின் உங்கள் கைரேகை மூலம் எவரும் பணம் எடுக்க முடியாது. ரேஷன் வாங்கும்போது 10 நொடியில் அன்லாக் செய்து கொள்ளலாம்.",
      hi: "1. गूगल प्ले स्टोर से आधिकारिक 'mAadhaar' ऐप डाउनलोड करें या myaadhaar.uidai.gov.in पर जाएं। 2. अपना 12 अंकों का आधार नंबर और ओटीपी डालकर लॉगिन करें। 3. 'Lock/Unlock Biometrics' पर टैप करके लॉक चालू करें। इसके बाद ग्राहक सेवा केंद्र पर कोई भी आपके अंगूठे से पैसे नहीं निकाल पाएगा। राशन लेने जाते समय आप ऐप से 10 सेकंड में इसे अस्थायी रूप से अनलॉक कर सकते हैं।"
    },
    category: "government"
  },
  {
    question: {
      en: "A stranger sent ₹5,000 to my UPI account by mistake and asks me to scan a QR code to refund. What to do?",
      te: "ఒక తెలియని వ్యక్తి పొరపాటున నా ఖాతాకు ₹5,000 పంపానని చెప్పి, క్యూఆర్ కోడ్ స్కాన్ చేసి రీఫండ్ చేయమంటున్నాడు. ఏం చేయాలి?",
      ta: "தவறுதலாக ₹5,000 அனுப்பிவிட்டதாகக் கூறி கியூஆர் கோடை ஸ்கேன் செய்து பணத்தை திருப்பக் கேட்கிறார்கள். என்ன செய்ய வேண்டும்?",
      hi: "किसी अनजान व्यक्ति ने गलती से मेरे खाते में ₹5,000 आने का दावा किया और क्यूआर कोड स्कैन करके लौटाने को कह रहा है। क्या करूं?"
    },
    answer: {
      en: "BE VERY CAREFUL! This is a dangerous trap called the 'Wrong Transfer QR Scam'. 1. Check your real bank SMS and mini-statement first to verify if genuine money actually entered your account (scammers often send fake fake bank SMS). 2. NEVER scan any QR code or enter your UPI PIN to refund money (scanning QR codes always drains YOUR money). 3. Tell the caller to contact their own bank branch to initiate an official inter-bank reversal, or visit your local police station with you to receive the money legally.",
      te: "చాలా జాగ్రత్తగా ఉండండి! ఇది ఒక కుట్రపూరిత మోసం. 1. ముందుగా మీ అసలు బ్యాంక్ పాస్‌బుక్ లేదా బ్యాంక్ ఎస్సెమ్మెస్ చూసి నిజంగానే డబ్బు వచ్చిందో లేదో సరిచూసుకోండి (తరచూ వారు నకిలీ మెసేజ్ పంపుతారు). 2. ఎట్టి పరిస్థితుల్లోనూ క్యూఆర్ కోడ్ స్కాన్ చేయవద్దు మరియు పిన్ కొట్టవద్దు (స్కాన్ చేస్తే మీ డబ్బులే పోతాయి). 3. వారి బ్యాంకులో అధికారికంగా ఫిర్యాదు చేసి రివర్స్ చేయించుకోమని లేదా పోలీస్ స్టేషన్‌కు వచ్చి తీసుకుపొమ్మని చెప్పండి.",
      ta: "மிகவும் எச்சரிக்கையாக இருங்கள்! 1. உங்கள் வங்கி இருப்பு உண்மையிலேயே கூடியுள்ளதா என பார்க்கவும் (போலி எஸ்எம்எஸ் அனுப்பியிருக்கலாம்). 2. ஒருபோதும் கியூஆர் கோடை ஸ்கேன் செய்து பின் போடாதீர்கள் (உங்கள் பணம் போய்விடும்). 3. அவர்களின் வங்கியின் மூலம் அதிகாரப்பூர்வமாக திரும்பப் பெறச் சொல்லுங்கள்.",
      hi: "बेहद सावधान रहें! यह 'गलत ट्रांसफर क्यूआर फ्रॉड' है। 1. पहले अपने बैंक ऐप में बैलेंस चेक करें कि सच में पैसा आया है या सिर्फ फर्जी एसएमएस भेजा गया है। 2. कभी भी क्यूआर कोड स्कैन करके या पिन डालकर पैसे वापस न करें (क्यूआर स्कैन करते ही आपके खाते से पैसा कट जाएगा)। 3. कॉलर से कहें कि वह अपने बैंक में शिकायत करके कानूनी रूप से पैसा रिवर्स कराए या थाने आकर पैसे ले।"
    },
    category: "payments"
  }
];

export const badgesList = [
  {
    id: "survey_completed",
    title: { en: "Village Ambassador", te: "గ్రామ రాయబారి", ta: "கிராம தூதுவர்", hi: "ग्राम राजदूत" },
    description: { en: "Registered and submitted the Digital Survey", te: "గ్రామ డిజిటల్ సర్వే పూర్తి చేసారు", ta: "டிஜிட்டல் கணக்கெடுப்பை வெற்றிகரமாக முடித்தார்", hi: "सफलतापूर्वक ग्राम सर्वे सबमिट किया" },
    iconName: "FileCheck",
    color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
  },
  {
    id: "smartphone_master",
    title: { en: "Device Expert", te: "మొబైల్ నిపుణుడు", ta: "சாதன வல்லுநர்", hi: "स्मार्टफ़ोन गुरु" },
    description: { en: "Completed Smartphone Basics module", te: "స్మార్ట్‌ఫోన్ కోర్సు విజయవంతంగా పూర్తి చేసారు", ta: "ஸ்மார்ட்போன் அடிப்படை பாடங்களை கற்று முடித்தார்", hi: "स्मार्टफोन का बुनियादी पाठ पूरा किया" },
    iconName: "Smartphone",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
  },
  {
    id: "payments_ninja",
    title: { en: "Secure Payer", te: "సురక్షిత లావాదేవీల వీరుడు", ta: "பாதுகாப்பான பணக் கொடுப்பாளர்", hi: "सुरक्षित भुगतान कर्ता" },
    description: { en: "Learned the safe rules of UPI & QR checks", te: "సురక్షిత సైబర్ లావాదేవీలపై పట్టు సాధించారు", ta: "பாதுகாப்பான UPI விதிகளில் தேர்ச்சி பெற்றார்", hi: "यूपीआई नियमों और भुगतान सुरक्षा पर नियंत्रण पाया" },
    iconName: "CreditCard",
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
  },
  {
    id: "quiz_champion",
    title: { en: "Digital Scholar", te: "డిజిటల్ పండితుడు", ta: "டிஜிட்டல் அறிஞர்", hi: "डिजिटल साक्षर विद्वान" },
    description: { en: "Scored 90%+ in the Interactive Quiz", te: "ప్రాక్టీస్ క్విజ్ లో 90% లేదా అంతకంటే ఎక్కువ మార్కులు సాధించారు", ta: "டிஜிட்டல் தேர்வில் 90%-க்கு மேல் மதிப்பெண் பெற்றார்", hi: "डिजिटल परीक्षा में 90% से अधिक अंक प्राप्त किया" },
    iconName: "Award",
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
  }
];
