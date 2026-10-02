import { QuizQuestion, Language, QuizChapter } from '../types';

export interface ChapterQuizMeta {
  chapterId: string;
  title: Record<Language, string>;
  category: 'smartphone' | 'internet' | 'payments' | 'security' | 'government' | 'communication';
  icon: string;
  color: string;
  levels: {
    level: 1 | 2 | 3;
    name: Record<Language, string>;
    description: Record<Language, string>;
    questionCount: number;
  }[];
}

export const chapterQuizMetaList: ChapterQuizMeta[] = [
  {
    chapterId: 'smartphone_basics',
    title: {
      en: 'Chapter 1: Smartphone Basics',
      te: 'అధ్యాయం 1: స్మార్ట్‌ఫోన్ ప్రాథమిక అంశాలు',
      ta: 'அத்தியாயம் 1: ஸ்மார்ட்போன் அடிப்படைகள்',
      hi: 'अध्याय 1: स्मार्टफोन की बुनियादी बातें'
    },
    category: 'smartphone',
    icon: 'Smartphone',
    color: 'from-teal-500 to-emerald-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Beginner Basics', te: 'లెవెల్ 1: ప్రాథమిక పరిజ్ఞానం', ta: 'நிலை 1: தொடக்க அடிப்படைகள்', hi: 'लेवल 1: शुरुआती बुनियादी बातें' },
        description: { en: 'Hardware buttons, touch gestures, and making calls', te: 'బటన్లు, టచ్ సంజ్ఞలు మరియు ఫోన్ కాల్స్', ta: 'பொத்தான்கள், தொடுதல் மற்றும் அழைப்புகள்', hi: 'हार्डवेयर बटन, टच और कॉल करना' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Intermediate Controls', te: 'లెవెల్ 2: కాంటాక్ట్స్ & ప్లే స్టోర్', ta: 'நிலை 2: தொடர்புகள் & ப்ளே ஸ்டோர்', hi: 'लेवल 2: कॉन्टैक्ट्स और प्ले स्टोर' },
        description: { en: 'Saving contacts, using Google Play Store, and managing apps', te: 'నంబర్లు సేవ్ చేయడం మరియు సురక్షిత యాప్స్ ఇన్‌స్టాలేషన్', ta: 'தொடர்புகளைச் சேமித்தல் மற்றும் செயலிகள் பதிவிறக்கம்', hi: 'संपर्क सहेजना और सुरक्षित ऐप डाउनलोड करना' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: Device Security & Lock', te: 'లెవెల్ 3: స్క్రీన్ లాక్ & భద్రత', ta: 'நிலை 3: திரை பூட்டு & பாதுகாப்பு', hi: 'लेवल 3: स्क्रीन लॉक और सुरक्षा' },
        description: { en: 'Fingerprint, PIN security, and preventing lost device risks', te: 'పిన్ మరియు ఫింగర్‌ప్రింట్ లాక్ రక్షణ', ta: 'கைரேகை, பின் எண் மற்றும் திருட்டு பாதுகாப்பு', hi: 'पिन, फिंगरप्रिंट लॉक और खोए फोन की सुरक्षा' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'internet_basics',
    title: {
      en: 'Chapter 2: Internet & Mobile Data',
      te: 'అధ్యాయం 2: ఇంటర్నెట్ & మొబైల్ డేటా',
      ta: 'அத்தியாயம் 2: இணையம் & மொபைல் டேட்டா',
      hi: 'अध्याय 2: इंटरनेट और मोबाइल डेटा'
    },
    category: 'internet',
    icon: 'Globe',
    color: 'from-blue-500 to-indigo-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Data & Wi-Fi Icons', te: 'లెవెల్ 1: డేటా & వై-ఫై గుర్తులు', ta: 'நிலை 1: டேட்டா & வைஃபை சின்னங்கள்', hi: 'लेवल 1: डेटा और वाई-फाई आइकन' },
        description: { en: 'Recognizing 4G/5G icons, Wi-Fi connections, and web browsers', te: '4G/5G గుర్తులు మరియు బ్రౌజర్ వాడకం', ta: '4G/5G மற்றும் பிரவுசர் பயன்பாடு', hi: '4G/5G आइकन और वेब ब्राउज़र' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Safe Web Browsing', te: 'లెవెల్ 2: సురక్షిత వెబ్ సెర్చింగ్', ta: 'நிலை 2: பாதுகாப்பான இணைய உலாவுதல்', hi: 'लेवल 2: सुरक्षित वेब ब्राउज़िंग' },
        description: { en: 'Using Google Search, identifying https padlock, and saving data', te: 'సెర్చ్ ఇంజిన్ మరియు ప్యాడ్‌లాక్ భద్రత', ta: 'கூகுள் தேடல் மற்றும் பூட்டு சின்னம்', hi: 'सर्च इंजन और सुरक्षित वेबसाइट पहचान' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: Public Wi-Fi & Hotspot Safety', te: 'లెవెల్ 3: పబ్లిక్ వై-ఫై జాగ్రత్తలు', ta: 'நிலை 3: பொது வைஃபை பாதுகாப்பு', hi: 'लेवल 3: पब्लिक वाई-फाई सुरक्षा' },
        description: { en: 'Hotspot passwords, avoiding open unknown Wi-Fi for banking', te: 'హాట్‌స్పాట్ పాస్‌వర్డ్ మరియు నెట్‌వర్క్ భద్రత', ta: 'ஹாட்ஸ்பாட் கடவுச்சொல் மற்றும் பாதுகாப்பு', hi: 'हॉटस्पॉट पासवर्ड और सुरक्षित डेटा शेयरिंग' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'whatsapp_social',
    title: {
      en: 'Chapter 3: WhatsApp & Family Communication',
      te: 'అధ్యాయం 3: వాట్సాప్ & కుటుంబ సమాచారం',
      ta: 'அத்தியாயம் 3: வாட்ஸ்அப் & தகவல் தொடர்பு',
      hi: 'अध्याय 3: व्हाट्सएप और सुरक्षित संवाद'
    },
    category: 'communication',
    icon: 'MessageSquare',
    color: 'from-emerald-500 to-green-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Chatting & Voice Messages', te: 'లెవెల్ 1: మెసేజ్‌లు & వాయిస్ నోట్స్', ta: 'நிலை 1: அரட்டை & குரல் பதிவுகள்', hi: 'लेवल 1: चैटिंग और वॉयस मैसेज' },
        description: { en: 'Sending voice messages, photo sharing, and video calling', te: 'వాయిస్ మెసేజ్‌లు మరియు వీడియో కాల్స్', ta: 'குரல் குறிப்புகள் மற்றும் வீடியோ அழைப்பு', hi: 'बोलकर संदेश भेजना और वीडियो कॉल' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Group Etiquette & Privacy', te: 'లెవెల్ 2: గ్రూపులు & గోప్యతా నియమాలు', ta: 'நிலை 2: குழுக்கள் & தனியுரிமை', hi: 'लेवल 2: ग्रुप और प्राइवेसी सेटिंग्स' },
        description: { en: 'Profile photo privacy, leaving spam groups, and mute notifications', te: 'ప్రొఫైల్ ఫోటో గోప్యత మరియు గ్రూప్ నియమాలు', ta: 'சுயவிவரப் பாதுகாப்பு மற்றும் குழுக்கள்', hi: 'प्रोफाइल प्राइवेसी और अनजान ग्रुप' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: Fake News & Scam Links', te: 'లెవెల్ 3: వదంతులు & నకిలీ లింకులు', ta: 'நிலை 3: வதந்திகள் & போலி இணைப்புகள்', hi: 'लेवल 3: फर्जी खबरें और लिंक फ्रॉड' },
        description: { en: 'Spotting forwarded rumors, verifying sources, blocking scammers', te: 'ఫార్వర్డ్ ఫేక్ న్యూస్ మరియు మోసపూరిత లింకులు', ta: 'வதந்திகளைத் தடுத்தல் மற்றும் பிளாக் செய்தல்', hi: 'फर्जी फॉरवर्ड रोकना और नंबर ब्लॉक करना' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'digital_payments',
    title: {
      en: 'Chapter 4: UPI & Digital Payments Mastery',
      te: 'అధ్యాయం 4: యూపీఐ & డిజిటల్ చెల్లింపులు',
      ta: 'அத்தியாயம் 4: UPI & டிஜிட்டல் பரிவர்த்தனை',
      hi: 'अध्याय 4: यूपीआई और डिजिटल भुगतान'
    },
    category: 'payments',
    icon: 'CreditCard',
    color: 'from-amber-500 to-orange-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: UPI Basics & QR Codes', te: 'లెవెల్ 1: యూపీఐ & క్యూఆర్ కోడ్ ప్రాథమికాలు', ta: 'நிலை 1: UPI & QR குறியீடு அடிப்படைகள்', hi: 'लेवल 1: यूपीआई और क्यूआर कोड' },
        description: { en: 'Scanning QR codes, sending money to mobile numbers, checking balance', te: 'క్యూఆర్ కోడ్ స్కాన్ చేయడం మరియు బ్యాలెన్స్ చెకింగ్', ta: 'QR ஸ்கேன் செய்தல் மற்றும் இருப்பு அறிதல்', hi: 'दुकान पर क्यूआर स्कैन और बैलेंस चेक' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: PIN Security & Golden Rules', te: 'లెవెల్ 2: యూపీఐ పిన్ భద్రతా సూత్రాలు', ta: 'நிலை 2: PIN பாதுகாப்பு பொன்னான விதிகள்', hi: 'लेवल 2: यूपीआई पिन सुरक्षा नियम' },
        description: { en: 'PIN is ONLY to send money, verifying recipient name before paying', te: 'డబ్బులు పంపేటప్పుడు మాత్రమే పిన్ కొట్టాలి', ta: 'பணம் செலுத்த மட்டுமே PIN தேவை', hi: 'पैसे प्राप्त करने के लिए पिन नहीं लगता' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: Payment Fraud & Collect Request Scams', te: 'లెవెల్ 3: పేమెంట్ స్కామ్‌ల నివారణ', ta: 'நிலை 3: பணப் பரிவர்த்தனை மோசடி தடுப்பு', hi: 'लेवल 3: कलेक्ट रिक्वेस्ट और लॉटरी फ्रॉड' },
        description: { en: 'Fake lottery collect requests, wrong transaction refund, chargebacks', te: 'నకిలీ లాటరీ రిక్వెస్ట్‌లు మరియు తప్పుడు లావాదేవీలు', ta: 'போலி கட்டணக் கோரிக்கைகள் மற்றும் புகார்', hi: 'फर्जी पेमेंट लिंक और गलत ट्रांसफर' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'mobile_banking',
    title: {
      en: 'Chapter 5: Mobile Banking & Passbook',
      te: 'అధ్యాయం 5: మొబైల్ బ్యాంకింగ్ & ఈ-పాస్‌బుక్',
      ta: 'அத்தியாயம் 5: மொபைல் வங்கி & பாஸ்புக்',
      hi: 'अध्याय 5: मोबाइल बैंकिंग और ई-पासबुक'
    },
    category: 'payments',
    icon: 'Landmark',
    color: 'from-violet-500 to-purple-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Mini Statement & SMS Alerts', te: 'లెవెల్ 1: బ్యాంక్ మెసేజ్‌లు & స్టేట్‌మెంట్', ta: 'நிலை 1: வங்கி குறுஞ்செய்தி & மினி அறிக்கை', hi: 'लेवल 1: बैंक एसएमएस और मिनी स्टेटमेंट' },
        description: { en: 'Understanding debit and credit SMS alerts, checking mini-statements', te: 'డెబిట్ మరియు క్రెడిట్ ఎస్సెమ్మెస్‌లు చదవడం', ta: 'வரவு-செலவு குறுஞ்செய்திகளை அறிதல்', hi: 'खाते में पैसे आने-जाने के एसएमएस' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Official Bank Apps (YONO, Canara, SBI)', te: 'లెవెల్ 2: అధికారిక బ్యాంక్ యాప్‌లు', ta: 'நிலை 2: அதிகாரப்பூர்வ வங்கி செயலிகள்', hi: 'लेवल 2: आधिकारिक बैंक ऐप्स' },
        description: { en: 'Logging in with mPIN, electronic passbook, fund transfer basics', te: 'mPIN లాగిన్ మరియు డిజిటల్ పాస్‌బుక్', ta: 'mPIN உள்நுழைவு மற்றும் மின்னணு பாஸ்புக்', hi: 'mPIN और सुरक्षित मोबाइल लॉगिन' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: ATM & Card Safety', te: 'లెవెల్ 3: ఏటీఎం & డెబిట్ కార్డు భద్రత', ta: 'நிலை 3: ஏடிஎம் & கார்டு பாதுகாப்பு', hi: 'लेवल 3: एटीएम और कार्ड सुरक्षा' },
        description: { en: 'Covering keypad at ATMs, CVV protection, blocking lost debit cards', te: 'ఏటీఎం పిన్ రక్షణ మరియు కార్డు బ్లాకింగ్', ta: 'ஏடிஎம் பின் மறைத்தல் மற்றும் கார்டு முடக்கம்', hi: 'एटीएम स्किमिंग बचाव और सीवीवी सुरक्षा' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'government_schemes',
    title: {
      en: 'Chapter 6: Aadhaar & DigiLocker Services',
      te: 'అధ్యాయం 6: ఆధార్ & డిజిలాకర్ సేవలు',
      ta: 'அத்தியாயம் 6: ஆதார் & டிஜிலாக்கர் சேவைகள்',
      hi: 'अध्याय 6: आधार और डिजिलॉकर सेवाएं'
    },
    category: 'government',
    icon: 'FileText',
    color: 'from-amber-600 to-yellow-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: DigiLocker Basics', te: 'లెవెల్ 1: డిజిలాకర్ ప్రాథమికాలు', ta: 'நிலை 1: டிஜிலாக்கர் அடிப்படைகள்', hi: 'लेवल 1: डिजिलॉकर की बुनियादी बातें' },
        description: { en: 'Accessing digital Aadhaar, Ration Card, and Driving License legally', te: 'ఆధార్, రేషన్ కార్డులను ఫోన్‌లో భద్రపరచడం', ta: 'டிஜிட்டல் ஆதார் மற்றும் ரேஷன் கார்டு', hi: 'डिजिटल आधार और राशन कार्ड' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: UMANG App & Direct Benefits (DBT)', te: 'లెవెల్ 2: ఉమంగ్ & ప్రభుత్వ పథకాలు (DBT)', ta: 'நிலை 2: உமாங் & அரசு நலத்திட்டங்கள்', hi: 'लेवल 2: उमंग (UMANG) और डीबीटी लाभ' },
        description: { en: 'Checking PM-Kisan status, pension deposits, scholarship grants', te: 'పీఎం కిసాన్ మరియు పింఛన్ జమ వివరాలు', ta: 'பிஎம் கிசான் மற்றும் முதியோர் உதவித்தொகை', hi: 'पीएम किसान किस्त और पेंशन चेक' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: Aadhaar Biometric Lock Protection', te: 'లెవెల్ 3: బయోమెట్రిక్ లాక్ & దుర్వినియోగం', ta: 'நிலை 3: பயோமெட்ரிக் லாக் பாதுகாப்பு', hi: 'लेवल 3: आधार बायोमेट्रिक लॉक सुरक्षा' },
        description: { en: 'Locking fingerprint in mAadhaar app to stop illegal AePS withdrawals', te: 'ఎం-ఆధార్‌లో వేలిముద్ర లాక్ చేసి మోసాలను అడ్డుకోవడం', ta: 'கைரேகை பூட்டு மூலம் வங்கி மோசடி தடுப்பு', hi: 'एम-आधार में फिंगरप्रिंट लॉक' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'cyber_safety',
    title: {
      en: 'Chapter 7: Cyber Hygiene & Fraud Prevention',
      te: 'అధ్యాయం 7: సైబర్ పరిశుభ్రత & మోసాల నివారణ',
      ta: 'அத்தியாயம் 7: சைபர் பாதுகாப்பு & மோசடி தடுப்பு',
      hi: 'अध्याय 7: साइबर सुरक्षा और धोखाधड़ी से बचाव'
    },
    category: 'security',
    icon: 'Shield',
    color: 'from-rose-500 to-red-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Password & PIN Strength', te: 'లెవెల్ 1: బలమైన పాస్‌వర్డ్‌లు & పిన్', ta: 'நிலை 1: வலுவான பாஸ்வேர்டு & பின்', hi: 'लेवल 1: मजबूत पासवर्ड और पिन' },
        description: { en: 'Never using birth years (1990) or 1234, changing default codes', te: 'పుట్టిన రోజులు, 1234 కాకుండా బలమైన పిన్ పెట్టడం', ta: 'எளிய எண்களைத் தவிர்த்து கடினமான பின் அமைத்தல்', hi: 'आसान पासवर्ड (1234, जन्म वर्ष) से बचना' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Suspicious Calls & OTP Defense', te: 'లెవెల్ 2: అనుమానాస్పద కాల్స్ & OTP రక్షణ', ta: 'நிலை 2: சந்தேகத்திற்கிடமான அழைப்புகள்', hi: 'लेवल 2: संदिग्ध फोन कॉल और ओटीपी रक्षा' },
        description: { en: 'Handling fake bank managers, electricity cutoff threats, KYC panics', te: 'బ్యాంక్ మేనేజర్లమని చెప్పే నకిలీ కాల్స్‌ని తిరస్కరించడం', ta: 'போலி வங்கி மேலாளர்கள் மற்றும் மிரட்டல்கள்', hi: 'फर्जी बैंक अधिकारी और बिजली कटने की धमकी' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: Screen Sharing App Dangers', te: 'లెవెల్ 3: స్క్రీన్ షేరింగ్ యాప్స్ ప్రమాదం', ta: 'நிலை 3: ஸ்கிரீன் ஷேரிங் செயலிகள் ஆபத்து', hi: 'लेवल 3: स्क्रीन शेयरिंग ऐप (AnyDesk) खतरा' },
        description: { en: 'Never downloading AnyDesk, TeamViewer, or QuickSupport on unknown call', te: 'AnyDesk వంటి స్క్రీన్ షేరింగ్ యాప్‌లు డౌన్‌లోడ్ చేయవద్దు', ta: 'AnyDesk செயலிகளை ஒருபோதும் நிறுவக்கூடாது', hi: 'AnyDesk या TeamViewer ऐप कभी डाउनलोड न करें' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'scam_identification',
    title: {
      en: 'Chapter 8: Recognizing Phishing & Online Scams',
      te: 'అధ్యాయం 8: ఆన్‌లైన్ స్కామ్‌లను గుర్తించడం',
      ta: 'அத்தியாயம் 8: போலி மோசடிகளைக் கண்டறிதல்',
      hi: 'अध्याय 8: फिशिंग और ऑनलाइन धोखाधड़ी की पहचान'
    },
    category: 'security',
    icon: 'AlertTriangle',
    color: 'from-orange-500 to-rose-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Fake Lottery & Lucky Draws', te: 'లెవెల్ 1: నకిలీ లాటరీలు & లక్కీ డ్రాలు', ta: 'நிலை 1: போலி லாட்டரி & பரிசுகள்', hi: 'लेवल 1: फर्जी लॉटरी और लकी ड्रा' },
        description: { en: 'Identifying KBC, Kaun Banega Crorepati WhatsApp audio scams', te: 'కేబీసీ లాటరీ గెలిచారనే నకిలీ వాట్సాప్ మోసాలు', ta: 'KBC பரிசு விழுந்ததாக வரும் போலி செய்திகள்', hi: 'केबीसी 25 लाख लॉटरी के फर्जी ऑडियो' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Fake Job & Part-Time Task Scams', te: 'లెవెల్ 2: నకిలీ ఉద్యోగాలు & పార్ట్‌టైమ్ స్కామ్స్', ta: 'நிலை 2: போலி வேலை வாய்ப்புகள்', hi: 'लेवल 2: फर्जी वर्क-फ्रॉम-होम और टास्क फ्रॉड' },
        description: { en: 'Telegram review tasks, paying registration fee to get high commissions', te: 'యూట్యూబ్ లైక్ టాస్క్‌లు మరియు డిపాజిట్ మోసాలు', ta: 'யூடியூப் லைக் செய்தால் பணம் என்ற ஏமாற்று வேலை', hi: 'यूट्यूब लाइक और होटल रेटिंग के नाम पर ठगी' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: Instant Loan & Blackmail Scams', te: 'లెవెల్ 3: తక్షణ లోన్ యాప్‌లు & బ్లాక్‌మెయిలింగ్', ta: 'நிலை 3: உடனடி கடன் செயலிகள் & மிரட்டல்', hi: 'लेवल 3: अवैध लोन ऐप और ब्लैकमेलिंग' },
        description: { en: 'Chinese 7-day loan apps asking contacts/gallery access and extortion', te: 'పరిచయాలు, ఫోటోల అనుమతులు కోరే నకిలీ లోన్ యాప్‌లు', ta: 'தொடர்புகள் மற்றும் படங்களை அணுகும் கடன் செயலிகள்', hi: 'कांटेक्ट और गैलरी चुराने वाले 7-दिन के लोन ऐप' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'emergency_hotline',
    title: {
      en: 'Chapter 9: Cyber Helpline 1930 & Reporting',
      te: 'అధ్యాయం 9: సైబర్ హెల్ప్‌లైన్ 1930 & ఫిర్యాదు',
      ta: 'அத்தியாயம் 9: சைபர் உதவி எண் 1930 & புகார்',
      hi: 'अध्याय 9: साइबर हेल्पलाइन 1930 और शिकायत दर्ज'
    },
    category: 'security',
    icon: 'PhoneCall',
    color: 'from-pink-500 to-rose-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Golden Hour Emergency 1930', te: 'లెవెల్ 1: గోల్డెన్ అవర్ & 1930 హెల్ప్‌లైన్', ta: 'நிலை 1: முதல் 2 மணி நேரமும் 1930 எண்ணும்', hi: 'लेवल 1: गोल्डन ऑवर और हेल्पलाइन 1930' },
        description: { en: 'Calling 1930 within 2 hours of online money theft to freeze funds', te: 'డబ్బులు పోయిన 2 గంటల్లో 1930 కాల్ చేసి నిలిపివేయడం', ta: 'பணம் இழந்த 2 மணி நேரத்திற்குள் 1930 ஐ அழைத்தல்', hi: 'पैसे कटने पर 2 घंटे के भीतर 1930 डायल करना' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Preparing Evidence & Transaction Details', te: 'లెవెల్ 2: ఆధారాలు & లావాదేవీ వివరాలు', ta: 'நிலை 2: ஆதாரங்கள் & பரிவர்த்தனை விபரம்', hi: 'लेवल 2: सबूत और यूटीआर (UTR) नंबर तैयार करना' },
        description: { en: 'Saving bank SMS, 12-digit UTR number, screenshots of scammer chat', te: 'బ్యాంక్ మెసేజ్, 12 అంకెల యూటీఆర్ నంబర్ భద్రపరచడం', ta: '12 இலக்க UTR எண் மற்றும் வங்கி குறுஞ்செய்தி', hi: 'बैंक एसएमएस, 12 अंकों का यूटीआर और स्क्रीनशॉट' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: cybercrime.gov.in Official Portal Filing', te: 'లెవెల్ 3: అధికారిక పోర్టల్‌లో ఆన్‌లైన్ కంప్లైంట్', ta: 'நிலை 3: cybercrime.gov.in இணையப் புகார்', hi: 'लेवल 3: cybercrime.gov.in पर औपचारिक रिपोर्ट' },
        description: { en: 'Filing complaints, tracking acknowledgment number, recovering bank funds', te: 'సైబర్ క్రైమ్ పోర్టల్‌లో రిపోర్ట్ చేసి డబ్బు రికవరీ చేయడం', ta: 'அரசு போர்ட்டலில் புகார் பதிவு செய்து பணத்தை மீட்பது', hi: 'स्वीकृति नंबर प्राप्त करना और पैसा वापस पाना' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'smartphone_settings',
    title: {
      en: 'Chapter 13: Smartphone Settings & Optimization',
      te: 'అధ్యాయం 13: స్మార్ట్‌ఫోన్ సెట్టింగ్స్ & మెయింటెనెన్స్',
      ta: 'அத்தியாயம் 13: ஸ்மார்ட்போன் அமைப்புகள் & பராமரிப்பு',
      hi: 'अध्याय 13: स्मार्टफोन सेटिंग्स और फोन की सफाई'
    },
    category: 'smartphone',
    icon: 'Sliders',
    color: 'from-cyan-500 to-blue-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Display & Font Size for Seniors', te: 'లెవెల్ 1: పెద్ద అక్షరాలు & స్క్రీన్ డిస్ప్లే', ta: 'நிலை 1: பெரிய எழுத்துக்கள் & திரை அமைப்பு', hi: 'लेवल 1: बड़े फॉन्ट और स्क्रीन ब्राइटनेस' },
        description: { en: 'Adjusting font size, display brightness, screen timeout for elders', te: 'పెద్ద అక్షరాలు, బ్రైట్‌నెస్ మరియు స్క్రీన్ టైమ్‌అవుట్', ta: 'முதியவர்களுக்கான எழுத்து அளவு மற்றும் வெளிச்சம்', hi: 'बुजुर्गों के लिए फॉन्ट साइज बड़ा करना' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Sound, Wi-Fi & Hotspot Sharing', te: 'లెవెల్ 2: సౌండ్, వై-ఫై & హాట్‌స్పాట్', ta: 'நிலை 2: ஒலி, வைஃபை & ஹாட்ஸ்பாட் பகிர்வு', hi: 'लेवल 2: रिंगटोन, वाई-फाई और हॉटस्पॉट' },
        description: { en: 'Setting high ringtones, connecting home Wi-Fi, sharing hotspot data', te: 'లౌడ్ రింగ్‌టోన్ మరియు కుటుంబానికి హాట్‌స్పాట్ ఇవ్వడం', ta: 'ரிங்டோன் ஒலி அதிகரிப்பு மற்றும் ஹாட்ஸ்பாட்', hi: 'रिंगटोन तेज करना और बच्चों को हॉटस्पॉट देना' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: WhatsApp Storage Cleanup & SOS 112', te: 'లెవెల్ 3: మెమరీ క్లీనప్ & ఎమర్జెన్సీ SOS', ta: 'நிலை 3: நினைவக சுத்தம் & அவசர SOS 112', hi: 'लेवल 3: स्टोरेज सफाई और इमरजेंसी एसओएस 112' },
        description: { en: 'Clearing junk media without losing photos, 3x power button emergency call', te: 'ఫోన్ మెమరీ ఖాళీ చేయడం మరియు పవర్ బటన్ 112 SOS కాల్', ta: 'வாட்ஸ்அப் தேவையில்லாத கோப்புகளை நீக்குதல் & SOS', hi: 'व्हाट्सएप जंक हटाना और 3 बार पावर बटन दबाना' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'voice_accessibility',
    title: {
      en: 'Chapter 14: Voice Typing & Google Lens Translation',
      te: 'అధ్యాయం 14: వాయిస్ టైపింగ్ & గూగుల్ లెన్స్',
      ta: 'அத்தியாயம் 14: குரல் தட்டச்சு & கூகுள் லென்ஸ்',
      hi: 'अध्याय 14: बोलकर टाइप करना और कैमरा अनुवाद'
    },
    category: 'smartphone',
    icon: 'Mic',
    color: 'from-teal-500 to-cyan-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Native Language Voice Typing', te: 'లెవెల్ 1: సొంత భాషలో మాట్లాడి టైప్ చేయడం', ta: 'நிலை 1: தாய்மொழியில் குரல் தட்டச்சு', hi: 'लेवल 1: बोलकर हिंदी या स्थानीय भाषा में लिखना' },
        description: { en: 'Tapping the keyboard microphone to write messages without keyboard typing', te: 'కీబోర్డులోని మైక్ గుర్తు నొక్కి మాట్లాడి మెసేజ్ పంపడం', ta: 'விசைப்பலகை மைக்கில் பேசி செய்திகள் அனுப்புதல்', hi: 'कीबोर्ड माइक पर बोलकर मैसेज भेजना' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Camera Translation with Google Lens', te: 'లెవెల్ 2: గూగుల్ లెన్స్ కెమెరా అనువాదం', ta: 'நிலை 2: கேமரா மூலம் ஆவண மொழிபெயர்ப்பு', hi: 'लेवल 2: गूगल लेंस से अंग्रेजी पर्चों का अनुवाद' },
        description: { en: 'Translating English medicine prescriptions and hospital bills instantly', te: 'ఇంగ్లీష్ మందుల చీటీలు, రసీదులను కెమెరాతో తెలుగులోకి మార్చడం', ta: 'மருந்து சீட்டுகளை தமிழில் மொழிபெயர்த்தல்', hi: 'दवाइयों के पर्चों और बिलों का तुरंत हिंदी अनुवाद' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: Accessibility & Screen Reading for Elders', te: 'లెవెల్ 3: వృద్ధుల కోసం యాక్సెసిబిలిటీ ఫీచర్లు', ta: 'நிலை 3: முதியவர்களுக்கான திரைப் படிப்பு வசதி', hi: 'लेवल 3: सेलेक्ट-टू-स्पीक और स्क्रीन रीडर' },
        description: { en: 'Using Select to Speak to have phone read out long news and articles', te: 'ఫోన్ స్వయంగా వార్తలను చదివి వినిపించే సెట్టింగ్', ta: 'செய்திகளை மொபைல் வாசித்து காட்டும் வசதி', hi: 'फोन से अखबार या मैसेज बोलकर सुनना' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'transport_services',
    title: {
      en: 'Chapter 15: Bus Booking & Safe Online Delivery',
      te: 'అధ్యాయం 15: బస్సు బుకింగ్ & క్యాష్ ఆన్ డెలివరీ',
      ta: 'அத்தியாயம் 15: பேருந்து முன்பதிவு & COD ஷாப்பிங்',
      hi: 'अध्याय 15: सरकारी बस बुकिंग व सुरक्षित डिलीवरी'
    },
    category: 'government',
    icon: 'Ticket',
    color: 'from-indigo-500 to-blue-600',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Official State Bus Booking', te: 'లెవెల్ 1: ప్రభుత్వ ఆర్టీసీ బస్సు టికెట్లు', ta: 'நிலை 1: அரசு போக்குவரத்து முன்பதிவு', hi: 'लेवल 1: सरकारी बस (RTC) टिकट बुक करना' },
        description: { en: 'Selecting origin, destination, seat choice on official RTC apps', te: 'ఆర్టీసీ యాప్‌లలో బస్సు సీటు బుక్ చేసుకోవడం', ta: 'அரசு பேருந்துகளில் இருக்கை தேர்வு செய்தல்', hi: 'आधिकारिक बस ऐप से सीट रिजर्वेशन' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Live Train Status Without Internet', te: 'లెవెల్ 2: ఇంటర్నెట్ లేకుండా రైలు స్టేటస్', ta: 'நிலை 2: இணையமின்றி ரயில் நேரலை நிலவரம்', hi: 'लेवल 2: बिना इंटरनेट लाइव ट्रेन लोकेशन' },
        description: { en: 'Using cell towers in Where Is My Train to track trains inside coaches', te: 'టవర్ల ద్వారా రైలు ఏ స్టేషన్ వచ్చిందో తెలుసుకోవడం', ta: 'ரயிலின் தற்போதைய இடத்தை அறிதல்', hi: 'मोबाइल टावर से ट्रेन की सही लोकेशन देखना' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: Cash on Delivery (COD) & Safe Unboxing', te: 'లెవెల్ 3: క్యాష్ ఆన్ డెలివరీ & సురక్షిత షాపింగ్', ta: 'நிலை 3: கேஷ் ஆன் டெலிவரி & பார்சல் சரிபார்ப்பு', hi: 'लेवल 3: कैश ऑन डिलीवरी (COD) और सुरक्षित पार्सल' },
        description: { en: 'Paying only after delivery, video recording opening expensive parcels', te: 'వస్తువు చేతికి వచ్చాకే డబ్బులు ఇవ్వడం మరియు అన్‌బాక్సింగ్', ta: 'பார்சல் கிடைத்ததும் பணம் செலுத்தும் முறை', hi: 'सामान हाथ में आने पर ही भुगतान करना' },
        questionCount: 10
      }
    ]
  },
  {
    chapterId: 'agriculture_apps',
    title: {
      en: 'Chapter 16: Farmer Digital Hub & Weather Forecast',
      te: 'అధ్యాయం 16: రైతు డిజిటల్ హబ్ & వాతావరణం',
      ta: 'அத்தியாயம் 16: விவசாயிகள் டிஜிட்டல் மையம் & வானிலை',
      hi: 'अध्याय 16: किसान डिजिटल हब और मौसम पूर्वानुमान'
    },
    category: 'government',
    icon: 'Landmark',
    color: 'from-emerald-600 to-green-700',
    levels: [
      {
        level: 1,
        name: { en: 'Level 1: Daily Mandi Crop Prices on e-NAM', te: 'లెవెల్ 1: ఈ-నామ్‌లో మార్కెట్ పంట ధరలు', ta: 'நிலை 1: e-NAM இல் சந்தை விலை நிலவரம்', hi: 'लेवल 1: ई-नाम (e-NAM) पर आज का मंडी भाव' },
        description: { en: 'Checking real market rates on enam.gov.in to avoid middlemen underpricing', te: 'దళారుల మోసాలకు గురికాకుండా మార్కెట్ ధరలు చూడటం', ta: 'இடைத்தரகர்கள் இன்றி உண்மை விலை அறிதல்', hi: 'दलालों के धोखे से बचने के लिए सरकारी भाव देखना' },
        questionCount: 10
      },
      {
        level: 2,
        name: { en: 'Level 2: Rainfall Forecasts on Meghdoot', te: 'లెవెల్ 2: మేఘదూత్ యాప్‌లో వర్ష సూచనలు', ta: 'நிலை 2: மேகதூத் செயலியில் மழை நிலவரம்', hi: 'लेवल 2: मेघदूत ऐप से 5 दिन की बारिश की जानकारी' },
        description: { en: 'Checking 5-day rain alerts before spraying fertilizers or harvesting', te: 'మందులు చల్లే ముందు వర్ష సూచనలు తెలుసుకోవడం', ta: 'உரமிடுவதற்கு முன் மழை எச்சரிக்கை அறிதல்', hi: 'खाद डालने या फसल कटाई से पहले वर्षा अलर्ट' },
        questionCount: 10
      },
      {
        level: 3,
        name: { en: 'Level 3: Kisan Call Center 1800-180-1551 & PMFBY', te: 'లెవెల్ 3: కిసాన్ కాల్ సెంటర్ & పంట బీమా', ta: 'நிலை 3: கிசான் உதவி எண் & பயிர் காப்பீடு', hi: 'लेवल 3: किसान हेल्पलाइन 1800-180-1551 व फसल बीमा' },
        description: { en: 'Calling toll-free agri scientists and reporting harvest damage within 72 hrs', te: 'వ్యవసాయ శాస్త్రవేత్తలతో ఉచితంగా మాట్లాడటం & బీమా ఫిర్యాదు', ta: 'விவசாய விஞ்ஞானிகளிடம் இலவச ஆலோசனை பெறுதல்', hi: 'कृषि वैज्ञानिकों से मुफ्त सलाह और 72 घंटे में बीमा क्लेम' },
        questionCount: 10
      }
    ]
  }
];

// Helper to generate rich questions deterministic across all 16 chapters and their 3 levels (10 questions each)
import { generateAllChapterLevelQuestions } from './quizQuestionBank';

// Exported dynamic store of questions
export const allChapterLevelQuestions: Record<string, Record<1 | 2 | 3, QuizQuestion[]>> = generateAllChapterLevelQuestions();

/**
 * Get exactly 10 questions for any given Chapter and Level.
 */
export function getChapterLevelQuestions(chapterId: string, level: 1 | 2 | 3): QuizQuestion[] {
  const chapterData = allChapterLevelQuestions[chapterId];
  if (chapterData && chapterData[level] && chapterData[level].length === 10) {
    return chapterData[level];
  }
  
  // Fallback to first available or standard questions
  if (chapterData && chapterData[level]) {
    return chapterData[level].slice(0, 10);
  }

  // Fallback to general chapter 1 level 1
  return (allChapterLevelQuestions['smartphone_basics']?.[1] || []).slice(0, 10);
}
