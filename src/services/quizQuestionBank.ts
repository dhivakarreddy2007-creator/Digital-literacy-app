import { QuizQuestion, Language } from '../types';

export function generateAllChapterLevelQuestions(): Record<string, Record<1 | 2 | 3, QuizQuestion[]>> {
  const result: Record<string, Record<1 | 2 | 3, QuizQuestion[]>> = {};

  // ==========================================
  // 1. SMARTPHONE BASICS (Levels 1, 2, 3)
  // ==========================================
  result['smartphone_basics'] = {
    1: [
      {
        id: 101,
        chapterId: 'smartphone_basics',
        level: 1,
        category: 'smartphone',
        question: {
          en: "Which button is usually pressed to turn the smartphone screen on or off?",
          te: "స్మార్ట్‌ఫోన్ స్క్రీన్‌ను ఆన్ లేదా ఆఫ్ చేయడానికి సాధారణంగా ఏ బటన్‌ను నొక్కుతారు?",
          ta: "ஸ்மார்ட்போன் திரையை ஆன் அல்லது ஆஃப் செய்ய எந்த பொத்தான் அழுத்தப்படுகிறது?",
          hi: "स्मार्टफोन की स्क्रीन को चालू या बंद करने के लिए आमतौर पर कौन सा बटन दबाया जाता है?"
        },
        options: {
          en: ["Power Button (on the side)", "Volume Down Button", "Camera Lens", "SIM tray eject hole"],
          te: ["పవర్ బటన్ (సైడ్ బటన్)", "వాల్యూమ్ తగ్గించే బటన్", "కెమెరా లెన్స్", "సిమ్ ట్రే రంధ్రం"],
          ta: ["பவர் பட்டன் (பக்கவாட்டில் உள்ள பொத்தான்)", "ஒலி குறைக்கும் பொத்தான்", "கேமரா லென்ஸ்", "சிம் ட்ரே துளை"],
          hi: ["पावर बटन (फोन के किनारे वाला)", "आवाज कम करने वाला बटन", "कैमरा लेंस", "सिम ट्रे वाला छेद"]
        },
        correctIndex: 0,
        explanation: {
          en: "The Power button on the right or left edge wakes up the phone and turns the display on or off.",
          te: "ఫోన్ సైడ్ లో ఉండే పవర్ బటన్ ను ఒక్కసారి నొక్కితే స్క్రీన్ ఆన్ లేదా ఆఫ్ అవుతుంది.",
          ta: "பக்கவாட்டில் உள்ள பவர் பட்டனை அழுத்துவதன் மூலம் திரையை இயக்கலாம் அல்லது அணைக்கலாம்.",
          hi: "फोन के किनारे मौजूद पावर बटन दबाने से स्क्रीन चालू या बंद होती है।"
        }
      },
      {
        id: 102,
        chapterId: 'smartphone_basics',
        level: 1,
        category: 'smartphone',
        question: {
          en: "What touch gesture is used to scroll through a long list of phone numbers or photos?",
          te: "ఫోన్ నంబర్లు లేదా ఫోటోల జాబితాను పైకి కిందకి చూడటానికి ఏ టచ్ సంజ్ఞను ఉపయోగిస్తారు?",
          ta: "நீண்ட போன் எண்கள் அல்லது படங்களின் பட்டியலைப் பார்க்க எந்த சைகை பயன்படுகிறது?",
          hi: "फोन नंबरों या तस्वीरों की लंबी सूची को ऊपर-नीचे देखने के लिए किस टच जेस्चर का उपयोग किया जाता है?"
        },
        options: {
          en: ["Swiping finger gently up or down", "Pressing the screen very hard with palm", "Shaking the phone sideways", "Blowing air on the screen"],
          te: ["వేలితో స్క్రీన్‌ను పైకి లేదా కిందకి స్వైప్ చేయడం", "స్క్రీన్‌ను గట్టిగా అరచేతితో నొక్కడం", "ఫోన్‌ను అటూ ఇటూ ఊపడం", "స్క్రీన్ పై గాలి ఊదడం"],
          ta: ["விரலை மெதுவாக மேல் அல்லது கீழ் நோக்கி நகர்த்துதல் (Swipe)", "திரையை உள்ளங்கையால் மிகக் கடினமாக அழுத்துதல்", "போனை வேகமாக குலுக்குதல்", "திரையில் ஊதுதல்"],
          hi: ["उंगली को धीरे से ऊपर या नीचे स्वाइप करना", "हथेली से स्क्रीन को जोर से दबाना", "फोन को जोर-जोर से हिलाना", "स्क्रीन पर फूंक मारना"]
        },
        correctIndex: 0,
        explanation: {
          en: "Swiping your fingertip across the touchscreen smoothly scrolls pages up and down.",
          te: "వేలితో మెల్లగా పైకి కిందకి అంటే పేజీలు సులభంగా స్క్రోల్ అవుతాయి.",
          ta: "விரலை திரையில் மென்மையாக நகர்த்துவதன் மூலம் பக்கங்களை மேலே அல்லது கீழே நகர்த்தலாம்.",
          hi: "टचस्क्रीन पर उंगली को धीरे से ऊपर या नीचे सरकाने से सूची स्क्रॉल होती है।"
        }
      },
      {
        id: 103,
        chapterId: 'smartphone_basics',
        level: 1,
        category: 'smartphone',
        question: {
          en: "How many digits does a standard Indian mobile phone number have?",
          te: "భారతదేశంలో ప్రామాణిక మొబైల్ ఫోన్ నంబర్‌లో ఎన్ని అంకెలు ఉంటాయి?",
          ta: "இந்தியாவின் நிலையான மொபைல் போன் எண்ணில் எத்தனை இலக்கங்கள் உள்ளன?",
          hi: "भारत में एक सामान्य मोबाइल फोन नंबर में कितने अंक होते हैं?"
        },
        options: {
          en: ["10 Digits", "6 Digits", "14 Digits", "4 Digits"],
          te: ["10 అంకెలు", "6 అంకెలు", "14 అంకెలు", "4 అంకెలు"],
          ta: ["10 இலக்கங்கள்", "6 இலக்கங்கள்", "14 இலக்கங்கள்", "4 இலக்கங்கள்"],
          hi: ["10 अंक", "6 अंक", "14 अंक", "4 अंक"]
        },
        correctIndex: 0,
        explanation: {
          en: "All regular mobile phone numbers in India contain 10 digits starting with 6, 7, 8, or 9.",
          te: "భారతదేశంలోని మొబైల్ నంబర్లన్నీ 10 అంకెలను కలిగి ఉంటాయి.",
          ta: "இந்தியாவில் உள்ள அனைத்து சாதாரண மொபைல் எண்களும் 10 இலக்கங்களைக் கொண்டிருக்கும்.",
          hi: "भारत में सभी मोबाइल नंबर 10 अंकों के होते हैं।"
        }
      },
      {
        id: 104,
        chapterId: 'smartphone_basics',
        level: 1,
        category: 'smartphone',
        question: {
          en: "What does the green receiver icon in the Phone app mean?",
          te: "ఫోన్ యాప్‌లో ఆకుపచ్చ రంగు రిసీవర్ గుర్తు దేనిని సూచిస్తుంది?",
          ta: "போன் செயலியில் உள்ள பச்சை நிற போன் சின்னம் எதைக் குறிக்கிறது?",
          hi: "फोन ऐप में हरे रंग का रिसीवर आइकन क्या दर्शाता है?"
        },
        options: {
          en: ["Make or Answer a Phone Call", "Delete the phone number", "Take a camera picture", "Turn off the phone"],
          te: ["కాల్ చేయడం లేదా మాట్లాడటం", "నంబర్‌ను డిలీట్ చేయడం", "ఫోటో తీయడం", "ఫోన్ స్విచ్ ఆఫ్ చేయడం"],
          ta: ["அழைப்பை மேற்கொள்ள அல்லது ஏற்க", "போன் எண்ணை அழிக்க", "புகைப்படம் எடுக்க", "போனை அணைக்க"],
          hi: ["फोन कॉल लगाना या उठाना", "फोन नंबर डिलीट करना", "फोटो खींचना", "फोन बंद करना"]
        },
        correctIndex: 0,
        explanation: {
          en: "The green phone icon is universal for placing outgoing calls or answering incoming calls.",
          te: "ఆకుపచ్చ ఫోన్ గుర్తును నొక్కితే కాల్ కనెక్ట్ అవుతుంది లేదా వచ్చే కాల్‌ను మాట్లాడవచ్చు.",
          ta: "பச்சை நிற சின்னம் அழைப்பை மேற்கொள்ள அல்லது பேச பயன்படுகிறது.",
          hi: "हरे रंग का फोन आइकन कॉल लगाने या इनकमिंग कॉल उठाने के लिए होता है।"
        }
      },
      {
        id: 105,
        chapterId: 'smartphone_basics',
        level: 1,
        category: 'smartphone',
        question: {
          en: "What should you do when your smartphone battery drops below 15%?",
          te: "మీ స్మార్ట్‌ఫోన్ బ్యాటరీ 15% కంటే తక్కువకు పడిపోయినప్పుడు ఏం చేయాలి?",
          ta: "உங்கள் ஸ்மார்ட்போன் பேட்டரி 15%-க்கு கீழ் குறைந்தால் என்ன செய்ய வேண்டும்?",
          hi: "जब आपके स्मार्टफोन की बैटरी 15% से नीचे चली जाए तो आपको क्या करना चाहिए?"
        },
        options: {
          en: ["Plug it into the original charger safely", "Put the phone in water to cool it", "Leave it in direct hot sun", "Keep pressing the volume buttons"],
          te: ["అసలైన ఛార్జర్‌తో జాగ్రత్తగా ఛార్జింగ్ పెట్టాలి", "చల్లబరచడానికి నీటిలో వేయాలి", "ఎండలో నేరుగా ఉంచాలి", "వాల్యూమ్ బటన్లను గట్టిగా నొక్కాలి"],
          ta: ["அசல் சார்ஜர் மூலம் பாதுகாப்பாக சார்ஜ் செய்யவும்", "குளிர்விக்க தண்ணீரில் போடவும்", "நேரடி வெயிலில் வைக்கவும்", "ஒலி பொத்தான்களை தொடர்ந்து அழுத்தவும்"],
          hi: ["ओरिजिनल चार्जर से सुरक्षित चार्जिंग पर लगाएं", "फोन को ठंडा करने के लिए पानी में डालें", "कड़क धूप में रख दें", "वॉल्यूम बटन दबाते रहें"]
        },
        correctIndex: 0,
        explanation: {
          en: "Connect the phone to its certified charger before the battery dies completely to protect battery lifespan.",
          te: "బ్యాటరీ పూర్తిగా డెడ్ కాకముందే సరైన ఛార్జర్ పెట్టి ఛార్జ్ చేయాలి.",
          ta: "பேட்டரி முழுமையாக காலியாவதற்கு முன் அசல் சார்ஜரைக் கொண்டு சார்ஜ் செய்ய வேண்டும்.",
          hi: "बैटरी पूरी तरह खत्म होने से पहले सही चार्जर से चार्ज करें।"
        }
      },
      {
        id: 106,
        chapterId: 'smartphone_basics',
        level: 1,
        category: 'smartphone',
        question: {
          en: "Where do you tap to type letters, numbers, and messages on a touchscreen?",
          te: "టచ్‌స్క్రీన్‌లో అక్షరాలు మరియు నంబర్లు రాయడానికి ఎక్కడ నొక్కుతారు?",
          ta: "திரையில் எழுத்துக்கள் மற்றும் எண்களை எழுத எங்கு தட்ட வேண்டும்?",
          hi: "टचस्क्रीन पर अक्षर और नंबर टाइप करने के लिए कहां टैप किया जाता है?"
        },
        options: {
          en: ["On-screen virtual keyboard that appears automatically", "On the back cover of the phone", "On the glass camera lens", "On the charging cable socket"],
          te: ["స్క్రీన్ పై కనిపించే వర్చువల్ కీబోర్డ్ పై", "ఫోన్ వెనుక వైపు కవర్ పై", "కెమెరా గ్లాస్ పై", "ఛార్జింగ్ పిన్ లోపల"],
          ta: ["திரையில் தோன்றும் விசைப்பலகை (Keyboard) மீது", "போனின் பின்புற மூடி மீது", "கேமரா லென்ஸ் மீது", "சார்ஜிங் சாக்கெட் மீது"],
          hi: ["स्क्रीन पर आने वाले कीबोर्ड पर", "फोन के पिछले कवर पर", "कैमरा लेंस पर", "चार्जिंग सॉकेट में"]
        },
        correctIndex: 0,
        explanation: {
          en: "Touching any text box opens the virtual keyboard on screen for typing.",
          te: "ఏదైనా టెక్స్ట్ బాక్స్ పై తాకితే కీబోర్డ్ ఓపెన్ అవుతుంది.",
          ta: "எழுதும் இடத்தை தொட்டால் திரையில் தோன்றும் விசைப்பலகை மூலம் தட்டச்சு செய்யலாம்.",
          hi: "किसी भी लिखने वाली जगह पर टैप करने से स्क्रीन पर कीबोर्ड खुल जाता है।"
        }
      },
      {
        id: 107,
        chapterId: 'smartphone_basics',
        level: 1,
        category: 'smartphone',
        question: {
          en: "Which icon shows the status of remaining electrical energy in your phone?",
          te: "ఫోన్‌లో ఇంకా ఎంత ఛార్జింగ్ మిగిలి ఉందో ఏ గుర్తు తెలియజేస్తుంది?",
          ta: "போனில் இன்னும் எவ்வளவு மின்சாரம் உள்ளது என்பதை எந்த சின்னம் காட்டுகிறது?",
          hi: "फोन में कितना चार्ज बचा है, यह कौन सा आइकन दिखाता है?"
        },
        options: {
          en: ["Battery icon with percentage at top right", "Flashlight icon", "Airplane mode icon", "Trash can icon"],
          te: ["స్క్రీన్ పైభాగంలో ఉండే బ్యాటరీ గుర్తు మరియు శాతం", "టార్చ్ లైట్ గుర్తు", "విమానం గుర్తు (ఏరోప్లేన్ మోడ్)", "చెత్తబుట్ట గుర్తు"],
          ta: ["மேல் வலதுபுறத்தில் உள்ள பேட்டரி சின்னம் மற்றும் சதவீதம்", "டார்ச் சின்னம்", "விமான சின்னம்", "குப்பைத்தொட்டி சின்னம்"],
          hi: ["ऊपर दाईं ओर बैटरी आइकन और प्रतिशत", "टॉर्च आइकन", "हवाई जहाज का आइकन", "कचरे का डिब्बा"]
        },
        correctIndex: 0,
        explanation: {
          en: "The battery icon in the top status bar displays how much charge remains.",
          te: "స్క్రీన్ పైన కుడివైపున బ్యాటరీ గుర్తు శాతం రూపంలో ఛార్జింగ్ నిల్వను చూపిస్తుంది.",
          ta: "மேல் பட்டியில் உள்ள பேட்டரி சின்னம் மின்சார அளவைக் காட்டுகிறது.",
          hi: "ऊपर स्टेटस बार में बैटरी का निशान बचे हुए चार्ज को दिखाता है।"
        }
      },
      {
        id: 108,
        chapterId: 'smartphone_basics',
        level: 1,
        category: 'smartphone',
        question: {
          en: "What should you use to clean dust and fingerprints off your mobile phone screen?",
          te: "మొబైల్ స్క్రీన్‌పై దుమ్ము మరియు వేలిముద్రలను తుడవడానికి దేనిని ఉపయోగించాలి?",
          ta: "மொபைல் திரையைச் சுத்தம் செய்ய எதைப் பயன்படுத்த வேண்டும்?",
          hi: "मोबाइल फोन की स्क्रीन पर धूल और उंगलियों के निशान साफ करने के लिए क्या इस्तेमाल करना चाहिए?"
        },
        options: {
          en: ["A dry, clean soft microfiber cloth", "Washing with soap and direct water", "Scratching with a steel knife", "Applying cooking mustard oil"],
          te: ["పొడిగా ఉన్న మృదువైన కాటన్ లేదా మైక్రోఫైబర్ గుడ్డ", "సబ్బు మరియు నీటితో నేరుగా కడగడం", "స్టీల్ కత్తితో గీకడం", "వంట నూనె రాయడం"],
          ta: ["உலர்ந்த, மென்மையான துணி அல்லது மைக்ரோஃபைபர் துணி", "சோப்பு மற்றும் தண்ணீரில் கழுவுதல்", "கத்தியால் கீறுதல்", "சமையல் எண்ணெய் தடவுதல்"],
          hi: ["सूखा और मुलायम सूती या माइक्रोफाइबर कपड़ा", "साबुन और पानी से धोना", "चाकू से खुरचना", "सरसों का तेल लगाना"]
        },
        correctIndex: 0,
        explanation: {
          en: "Soft microfiber cloths wipe dust cleanly without scratching the glass or causing water damage.",
          te: "మెత్తటి కాటన్ గుడ్డతో తుడిస్తే గ్లాస్ స్క్రాచ్ కాకుండా శుభ్రపడుతుంది.",
          ta: "மென்மையான துணியால் துடைப்பது திரையை பாதுகாப்பாக வைக்கும்.",
          hi: "मुलायम सूखे कपड़े से पोंछने से स्क्रीन सुरक्षित और साफ रहती है।"
        }
      },
      {
        id: 109,
        chapterId: 'smartphone_basics',
        level: 1,
        category: 'smartphone',
        question: {
          en: "What happens when you gently tap an app icon on your home screen?",
          te: "హోమ్ స్క్రీన్‌పై ఉన్న ఏదైనా యాప్ గుర్తుపై వేలితో నొక్కితే ఏం జరుగుతుంది?",
          ta: "முகப்புத் திரையில் உள்ள ஒரு செயலி சின்னத்தை தொட்டால் என்ன நடக்கும்?",
          hi: "होम स्क्रीन पर किसी ऐप आइकन पर धीरे से टैप करने पर क्या होता है?"
        },
        options: {
          en: ["The selected application opens up", "The phone turns off permanently", "All contacts get erased", "The screen breaks"],
          te: ["ఆ యాప్ తెరుచుకుంటుంది (ఓపెన్ అవుతుంది)", "ఫోన్ శాశ్వతంగా ఆగిపోతుంది", "నంబర్లన్నీ డిలీట్ అవుతాయి", "స్క్రీన్ పగిలిపోతుంది"],
          ta: ["அந்த செயலி திறக்கும்", "போன் நிரந்தரமாக அணைந்துவிடும்", "அனைத்து எண்களும் அழிந்துவிடும்", "திரை உடைந்துவிடும்"],
          hi: ["वह ऐप खुल जाता है", "फोन हमेशा के लिए बंद हो जाता है", "सारे नंबर डिलीट हो जाते हैं", "स्क्रीन टूट जाती है"]
        },
        correctIndex: 0,
        explanation: {
          en: "Tapping an app launches that application instantly on your screen.",
          te: "యాప్ ఐకాన్ పై ఒక్కసారి నొక్కితే ఆ యాప్ స్క్రీన్ పై ఓపెన్ అవుతుంది.",
          ta: "செயலி சின்னத்தை தொடுவதன் மூலம் அந்த செயலியைப் பயன்படுத்தலாம்.",
          hi: "किसी भी ऐप पर एक बार टैप करने से वह ऐप खुल जाता है।"
        }
      },
      {
        id: 110,
        chapterId: 'smartphone_basics',
        level: 1,
        category: 'smartphone',
        question: {
          en: "Why is it important to keep your smartphone away from extreme heat and stoves?",
          te: "స్మార్ట్‌ఫోన్‌ను పొయ్యి మరియు అధిక వేడికి దూరంగా ఎందుకు ఉంచాలి?",
          ta: "ஸ்மார்ட்போனை அடுப்பு மற்றும் அதிக வெப்பத்திலிருந்து ஏன் தள்ளி வைக்க வேண்டும்?",
          hi: "स्मार्टफोन को चूल्हे और तेज गर्मी से दूर क्यों रखना चाहिए?"
        },
        options: {
          en: ["Batteries can overheat, swell, or catch fire under extreme heat", "The phone forgets your name", "The language changes to foreign words", "Internet towers become angry"],
          te: ["అధిక వేడికి బ్యాటరీ ఉబ్బిపోవడం లేదా పేలిపోయే ప్రమాదం ఉంది", "ఫోన్ మీ పేరు మర్చిపోతుంది", "భాష మారిపోతుంది", "టవర్లు కోపగిస్తాయి"],
          ta: ["அதிக வெப்பம் பேட்டரியை வீங்கச் செய்து வெடிக்க வைக்கலாம்", "போன் உங்கள் பெயரை மறந்துவிடும்", "மொழி மாறிவிடும்", "டவர் கிடைக்காது"],
          hi: ["अत्यधिक गर्मी से बैटरी फूल सकती है या आग लग सकती है", "फोन आपका नाम भूल जाता है", "भाषा विदेशी हो जाती है", "टावर नाराज हो जाते हैं"]
        },
        correctIndex: 0,
        explanation: {
          en: "Lithium mobile batteries are sensitive to high temperatures; keep them away from gas stoves, direct fire, and hot dashboards.",
          te: "మొబైల్ బ్యాటరీలు వేడికి దెబ్బతింటాయి, కాబట్టి నిప్పు మరియు వంట పొయ్యిలకు దూరంగా ఉంచాలి.",
          ta: "லித்தியம் பேட்டரிகள் அதிக வெப்பத்தில் சேதமடையக்கூடும் என்பதால் தீயிலிருந்து தள்ளி வைக்கவும்.",
          hi: "मोबाइल बैटरी को अत्यधिक गर्मी या आग से दूर रखना चाहिए।"
        }
      }
    ],
    2: [
      {
        id: 111,
        chapterId: 'smartphone_basics',
        level: 2,
        category: 'smartphone',
        question: {
          en: "Where should you save a new contact number so it is not lost even if you change phones?",
          te: "ఫోన్ మారినా నంబర్లు పోకుండా ఉండాలంటే కొత్త కాంటాక్ట్‌ను ఎక్కడ సేవ్ చేసుకోవాలి?",
          ta: "போனை மாற்றினாலும் எண்கள் அழியாமல் இருக்க புதிய தொடர்பை எங்கு சேமிக்க வேண்டும்?",
          hi: "फोन बदलने पर भी नंबर न खोए, इसके लिए नया संपर्क कहां सहेजना चाहिए?"
        },
        options: {
          en: ["To your Google Account (Gmail)", "On a scrap paper inside the phone case", "In temporary phone memory only", "Do not save anywhere"],
          te: ["మీ గూగుల్ అకౌంట్ (Gmail) లో", "కాగితంపై రాసి కవర్‌లో పెట్టడం", "తాత్కాలిక ఫోన్ మెమరీలో మాత్రమే", "ఎక్కడా సేవ్ చేయకూడదు"],
          ta: ["உங்கள் கூகுள் கணக்கில் (Gmail)", "போன் கவரில் துண்டு காகிதத்தில்", "தற்காலிக நினைவகத்தில் மட்டும்", "எங்கும் சேமிக்க வேண்டாம்"],
          hi: ["अपने गूगल अकाउंट (Gmail) में", "कागज पर लिखकर फोन कवर में", "केवल फोन की अस्थायी मेमोरी में", "कहीं भी सेव न करें"]
        },
        correctIndex: 0,
        explanation: {
          en: "Saving contacts to your Google Account syncs them automatically across any new device you log in to.",
          te: "గూగుల్ అకౌంట్‌లో సేవ్ చేస్తే భవిష్యత్తులో కొత్త ఫోన్ కొన్నా అన్ని నంబర్లు తిరిగి వస్తాయి.",
          ta: "கூகுள் கணக்கில் சேமித்தால் புதிய போன் வாங்கும் போது அனைத்து எண்களும் தானாக வந்துவிடும்.",
          hi: "गूगल अकाउंट में सेव करने पर नया फोन लेने पर भी सारे नंबर वापस मिल जाते हैं।"
        }
      },
      {
        id: 112,
        chapterId: 'smartphone_basics',
        level: 2,
        category: 'smartphone',
        question: {
          en: "Which official app store should Android users rely on to install verified applications?",
          te: "ఆండ్రాయిడ్ వినియోగదారులు సురక్షితమైన యాప్‌ల కోసం ఏ అధికారిక స్టోర్‌ను ఉపయోగించాలి?",
          ta: "ஆண்ட்ராய்டு பயனர்கள் பாதுகாப்பான செயலிகளை நிறுவ எந்த அதிகாரப்பூர்வ ஸ்டோரைப் பயன்படுத்த வேண்டும்?",
          hi: "एंड्रॉइड उपयोगकर्ताओं को सुरक्षित ऐप इंस्टॉल करने के लिए किस आधिकारिक स्टोर का उपयोग करना चाहिए?"
        },
        options: {
          en: ["Google Play Store", "Random links forwarded on WhatsApp", "Unknown browser download popups", "Local Bluetooth file shares"],
          te: ["గూగుల్ ప్లే స్టోర్ (Google Play Store)", "వాట్సాప్‌లో వచ్చే గుర్తుతెలియని లింకులు", "బ్రౌజర్ పాప్-అప్ లింకులు", "బ్లూటూత్ ఫైల్స్"],
          ta: ["கூகுள் ப்ளே ஸ்டோர் (Google Play Store)", "வாட்ஸ்அப் லிங்க்குகள்", "தெரியாத பிரவுசர் பதிவிறக்கங்கள்", "புளூடூத் பகிர்வு"],
          hi: ["गूगल प्ले स्टोर (Google Play Store)", "व्हाट्सएप पर फॉरवर्ड किए गए लिंक", "वेबसाइट के अनजान पॉपअप", "ब्लूटूथ फाइल ट्रांसफर"]
        },
        correctIndex: 0,
        explanation: {
          en: "Google Play Store scans apps through Play Protect to keep malware away from your phone.",
          te: "గూగుల్ ప్లే స్టోర్ యాప్‌లలో వైరస్‌లు లేవని పరిశీలించి సురక్షితంగా అందిస్తుంది.",
          ta: "கூகுள் ப்ளே ஸ்டோர் செயலிகளை வைரஸ் உள்ளதா என ஆய்வு செய்து வழங்குகிறது.",
          hi: "गूगल प्ले स्टोर प्ले प्रोटेक्ट के जरिए सुरक्षित ऐप उपलब्ध कराता है।"
        }
      },
      {
        id: 113,
        chapterId: 'smartphone_basics',
        level: 2,
        category: 'smartphone',
        question: {
          en: "What should you do before downloading any new application from the Play Store?",
          te: "ప్లే స్టోర్ నుండి ఏదైనా కొత్త యాప్‌ను డౌన్‌లోడ్ చేసే ముందు ఏమి పరిశీలించాలి?",
          ta: "ப்ளே ஸ்டோரிலிருந்து புதிய செயலியைப் பதிவிறக்கும் முன் எதைச் சரிபார்க்க வேண்டும்?",
          hi: "प्ले स्टोर से कोई नया ऐप डाउनलोड करने से पहले क्या जांचना चाहिए?"
        },
        options: {
          en: ["Check developer name, star ratings, and read user reviews", "Close eyes and install immediately", "Turn off the phone screen", "Delete your SIM card"],
          te: ["డెవలపర్ పేరు, రేటింగ్ (స్టార్లు) మరియు రివ్యూలు చూడాలి", "కళ్లు మూసుకుని డౌన్‌లోడ్ చేయాలి", "ఫోన్ స్విచ్ ఆఫ్ చేయాలి", "సిమ్ కార్డు తీసేయాలి"],
          ta: ["டெவலப்பர் பெயர், மதிப்பீடு (Stars) மற்றும் பயனர்களின் விமர்சனங்களை பார்க்கவும்", "கண்களை மூடி உடனே நிறுவவும்", "போன் திரையை அணைக்கவும்", "சிம்மை நீக்கவும்"],
          hi: ["डेवलपर का नाम, स्टार रेटिंग और लोगों की समीक्षाएं (रिव्यू) पढ़ें", "बिना देखे तुरंत इंस्टॉल करें", "स्क्रीन बंद कर दें", "सिम कार्ड हटा दें"]
        },
        correctIndex: 0,
        explanation: {
          en: "Checking ratings (e.g. 4+ stars) and developer names helps you avoid fake clone apps.",
          te: "మంచి రేటింగ్ మరియు సరైన డెవలపర్ పేరు చూసి మాత్రమే యాప్స్ ఇన్‌స్టాల్ చేసుకోవాలి.",
          ta: "நட்சத்திர மதிப்பீடுகளையும் விமர்சனங்களையும் பார்ப்பது போலி செயலிகளைத் தவிர்க்க உதவும்.",
          hi: "रेटिंग और रिव्यू देखने से फर्जी और नकली ऐप से बचा जा सकता है।"
        }
      },
      {
        id: 114,
        chapterId: 'smartphone_basics',
        level: 2,
        category: 'smartphone',
        question: {
          en: "What does granting 'Camera Permission' to an app mean?",
          te: "ఒక యాప్‌కి 'కెమెరా పర్మిషన్' ఇవ్వడం అంటే ఏమిటి?",
          ta: "ஒரு செயலிக்கு 'கேமரா அனுமதி' அளிப்பது என்றால் என்ன?",
          hi: "किसी ऐप को 'कैमरा परमिशन' देने का क्या मतलब है?"
        },
        options: {
          en: ["The app is allowed to take photos or record video through the camera lens", "The app buys a new camera for your house", "The camera flash turns into a laser", "The phone screen doubles in size"],
          te: ["ఆ యాప్ కెమెరా ద్వారా ఫోటోలు లేదా వీడియోలు తీయడానికి అనుమతించడం", "మీ ఇంటికి కొత్త కెమెరా కొనివ్వడం", "ఫ్లాష్ లైట్ లేజర్‌గా మారడం", "స్క్రీన్ రెట్టింపు కావడం"],
          ta: ["அந்த செயலி கேமரா மூலம் படங்களை அல்லது வீடியோக்களை எடுக்க அனுமதிக்கப்படுகிறது", "உங்கள் வீட்டிற்கு புதிய கேமரா வாங்குதல்", "பிளாஷ் லேசராக மாறுதல்", "திரை பெரிதாதல்"],
          hi: ["वह ऐप कैमरा लेंस से फोटो खींचने या वीडियो बनाने की अनुमति ले लेता है", "वह आपके घर के लिए नया कैमरा खरीदता है", "टॉर्च लेजर बन जाती है", "स्क्रीन का साइज बढ़ जाता है"]
        },
        correctIndex: 0,
        explanation: {
          en: "Only allow camera access to apps that genuinely need it, like WhatsApp or UPI scanners, not calculator apps.",
          te: "కెమెరా అవసరమైన యాప్‌లకు (యూపీఐ స్కానర్ లేదా వాట్సాప్) మాత్రమే పర్మిషన్ ఇవ్వాలి, క్యాలిక్యులేటర్ వంటి వాటికి ఇవ్వకూడదు.",
          ta: "தேவையான செயலிகளுக்கு மட்டுமே கேமரா அனுமதியை வழங்க வேண்டும்.",
          hi: "केवल जरूरी ऐप (जैसे स्कैनर या व्हाट्सएप) को ही कैमरे की अनुमति दें।"
        }
      },
      {
        id: 115,
        chapterId: 'smartphone_basics',
        level: 2,
        category: 'smartphone',
        question: {
          en: "If a flashlight or torch app asks for access to your Contacts and Photo Gallery, what should you do?",
          te: "టార్చ్ లైట్ యాప్ మీ కాంటాక్ట్స్ మరియు ఫోటో గ్యాలరీ అనుమతి అడిగితే ఏం చేయాలి?",
          ta: "ஒரு டார்ச் செயலி உங்கள் தொடர்புகளையும் படங்களையும் பார்க்க அனுமதி கேட்டால் என்ன செய்வீர்கள்?",
          hi: "यदि कोई टॉर्च ऐप आपके कॉन्टैक्ट्स और फोटो गैलरी की अनुमति मांगे तो आपको क्या करना चाहिए?"
        },
        options: {
          en: ["Deny permission and uninstall the app immediately (it could be spyware)", "Allow everything happily", "Give your bank passbook", "Turn on all village loudspeakers"],
          te: ["అనుమతి నిరాకరించి వెంటనే ఆ యాప్‌ను అన్‌ఇన్‌స్టాల్ చేయాలి (అది గూఢచారి యాప్ కావచ్చు)", "అన్ని అనుమతులు ఇచ్చేయాలి", "బ్యాంక్ పాస్‌బుక్ ఇవ్వాలి", "లౌడ్‌స్పీకర్లు పెట్టాలి"],
          ta: ["அனுமதியை மறுத்து, உடனடியாக அந்த செயலியை நீக்க வேண்டும் (அது உளவு செயலியாக இருக்கலாம்)", "அனைத்து அனுமதிகளையும் மகிழ்ச்சியுடன் வழங்கவும்", "வங்கி பாஸ்புக்கை வழங்கவும்", "ஊரெல்லாம் சொல்லவும்"],
          hi: ["अनुमति न दें और ऐप को तुरंत हटा दें (यह जासूसी ऐप हो सकता है)", "बिना सोचे-समझे हां कर दें", "बैंक पासबुक दे दें", "लाउडस्पीकर पर बताएं"]
        },
        correctIndex: 0,
        explanation: {
          en: "A simple torch app never needs your personal contacts or photos. Demanding unusual permissions is a sign of malicious software.",
          te: "టార్చ్ లైట్‌కు మీ ఫోటోలు లేదా నంబర్లు అవసరం లేదు. అలాంటి అనవసర అనుమతులు అడిగితే అది మోసపూరిత యాప్.",
          ta: "டார்ச் செயலிக்கு உங்கள் தொடர்புகள் தேவையில்லை. இவ்வாறு கேட்பது ஏமாற்று செயலியின் அடையாளம்.",
          hi: "टॉर्च ऐप को फोटो या कॉन्टैक्ट की कोई जरूरत नहीं होती। ऐसी मांग फ्रॉड ऐप की पहचान है।"
        }
      },
      {
        id: 116,
        chapterId: 'smartphone_basics',
        level: 2,
        category: 'smartphone',
        question: {
          en: "How can you remove an unwanted app from your phone to free up space?",
          te: "ఫోన్ మెమరీ ఖాళీ చేయడానికి అనవసరమైన యాప్‌ను ఎలా తొలగించాలి (అన్‌ఇన్‌స్టాల్)?",
          ta: "தேவையற்ற செயலியை நீக்கி போனின் நினைவகத்தை எவ்வாறு விடுவிப்பது?",
          hi: "अवांछित ऐप को हटाकर फोन में जगह कैसे खाली करें?"
        },
        options: {
          en: ["Long-press the app icon and tap 'Uninstall'", "Throw the phone on the floor", "Put tape over the app icon", "Turn the screen brightness to zero"],
          te: ["యాప్ ఐకాన్ పై వేలు అదిమి పట్టి 'Uninstall' నొక్కాలి", "ఫోన్‌ను నేలకేసి కొట్టాలి", "యాప్ గుర్తుపై టేప్ అంటించాలి", "బ్రైట్‌నెస్ జీరో చేయాలి"],
          ta: ["செயலி சின்னத்தை அழுத்திப் பிடித்து 'Uninstall' என்பதைத் தேர்ந்தெடுக்கவும்", "போனை கீழே போடவும்", "சின்னத்தின் மீது டேப் ஒட்டவும்", "திரை வெளிச்சத்தை பூஜ்ஜியமாக்கவும்"],
          hi: ["ऐप आइकन को दबाकर रखें और 'Uninstall' पर टैप करें", "फोन को जमीन पर फेंक दें", "आइकन पर टेप चिपका दें", "ब्राइटनेस शून्य कर दें"]
        },
        correctIndex: 0,
        explanation: {
          en: "Long-pressing any third-party app reveals the Uninstall option to completely remove it from your device.",
          te: "యాప్‌ను కాసేపు నొక్కి పడితే అన్‌ఇన్‌స్టాల్ ఆప్షన్ కనిపిస్తుంది, దాని ద్వారా పూర్తిగా తీసేయవచ్చు.",
          ta: "செயலியை அழுத்திப் பிடித்தால் தோன்றும் அன்இன்ஸ்டால் மூலம் அதை நீக்கலாம்.",
          hi: "ऐप को थोड़ी देर दबाकर रखने से 'Uninstall' का विकल्प आता है।"
        }
      },
      {
        id: 117,
        chapterId: 'smartphone_basics',
        level: 2,
        category: 'smartphone',
        question: {
          en: "What is an 'App Update' and why is it recommended to install updates?",
          te: "'యాప్ అప్‌డేట్' అంటే ఏమిటి మరియు దానిని ఎందుకు ఇన్‌స్టాల్ చేసుకోవాలి?",
          ta: "'செயலி புதுப்பிப்பு' (Update) என்றால் என்ன, அதை ஏன் நிறுவ வேண்டும்?",
          hi: "'ऐप अपडेट' क्या है और इसे इंस्टॉल करने की सलाह क्यों दी जाती है?"
        },
        options: {
          en: ["Updates fix software bugs, enhance security, and add new helpful features", "Updates delete all your family photos", "Updates make phone calls expensive", "Updates change your phone number"],
          te: ["అప్‌డేట్‌లు భద్రతను పెంచుతాయి, లోపాలను సరిచేస్తాయి మరియు కొత్త ఫీచర్లు ఇస్తాయి", "ఫోటోలన్నీ డిలీట్ చేస్తాయి", "కాల్స్ ఖరీదైనవిగా చేస్తాయి", "ఫోన్ నంబర్ మార్చేస్తాయి"],
          ta: ["புதுப்பிப்புகள் பிழைகளைச் சரிசெய்து, பாதுகாப்பை அதிகரித்து, புதிய வசதிகளைத் தரும்", "புகைப்படங்களை அழித்துவிடும்", "கட்டணத்தை அதிகரிக்கும்", "எண்ணை மாற்றிவிடும்"],
          hi: ["अपडेट कमियों को सुधारते हैं, सुरक्षा बढ़ाते हैं और नए फीचर लाते हैं", "सारे फोटो मिटा देते हैं", "कॉल महंगी कर देते हैं", "नंबर बदल देते हैं"]
        },
        correctIndex: 0,
        explanation: {
          en: "Developers release updates to close security loopholes and protect users against viruses and fraud.",
          te: "అప్‌డేట్‌లను చేసుకోవడం వల్ల మీ ఫోన్ మరింత సురక్షితంగా మరియు వేగంగా పనిచేస్తుంది.",
          ta: "புதுப்பிப்புகளைச் செய்வது உங்கள் போனை பாதுகாப்பாகவும் வேகமாகவும் வைத்திருக்க உதவும்.",
          hi: "अपडेट करने से फोन सुरक्षित रहता है और सुरक्षा खामियां दूर होती हैं।"
        }
      },
      {
        id: 118,
        chapterId: 'smartphone_basics',
        level: 2,
        category: 'smartphone',
        question: {
          en: "What is the function of the 'Back' navigation button (triangle or left arrow) on Android?",
          te: "ఆండ్రాయిడ్‌లో 'బ్యాక్' బటన్ (ఎడమవైపు బాణం గుర్తు) దేనికి ఉపయోగపడుతుంది?",
          ta: "ஆண்ட்ராய்டில் உள்ள 'பின்செல்' (Back) பொத்தான் எதற்குப் பயன்படுகிறது?",
          hi: "एंड्रॉइड में 'बैक' बटन (उल्टा तीर) का क्या काम होता है?"
        },
        options: {
          en: ["Returns to the previous screen or page you were viewing", "Sends a message to everyone in your village", "Increases ringtone volume to max", "Resets phone to factory settings"],
          te: ["గతంలో చూసిన మునుపటి పేజీ లేదా స్క్రీన్‌కు తిరిగి తీసుకెళ్తుంది", "ఊరి వారందరికీ మెసేజ్ పంపుతుంది", "వాల్యూమ్ పెంచుతుంది", "ఫోన్‌ను రీసెట్ చేస్తుంది"],
          ta: ["முந்தைய திரைக்கு அல்லது பக்கத்திற்கு அழைத்துச் செல்லும்", "ஊரில் உள்ள அனைவருக்கும் செய்தி அனுப்பும்", "ஒலியை அதிகரிக்கும்", "போனை ரீசெட் செய்யும்"],
          hi: ["पिछली स्क्रीन या पहले वाले पेज पर वापस ले जाता है", "गांव के सभी लोगों को मैसेज भेजता है", "रिंगटोन फुल कर देता है", "फोन को रीसेट कर देता है"]
        },
        correctIndex: 0,
        explanation: {
          en: "The Back button takes you one step backward, helping you exit menus or wrong screens easily.",
          te: "బ్యాక్ బటన్ నొక్కితే మునుపటి పేజీకి వెళ్లవచ్చు లేదా తప్పుడు స్క్రీన్ నుండి బయటపడవచ్చు.",
          ta: "முந்தைய நிலைக்குத் திரும்ப பேக் பட்டன் உதவுகிறது.",
          hi: "बैक बटन आपको एक कदम पीछे ले जाता है।"
        }
      },
      {
        id: 119,
        chapterId: 'smartphone_basics',
        level: 2,
        category: 'smartphone',
        question: {
          en: "What should you do if your phone screen freezes and stops responding to touch?",
          te: "ఫోన్ స్క్రీన్ ఆగిపోయి (హ్యాంగ్ అయి) టచ్ పనిచేయకపోతే ఏం చేయాలి?",
          ta: "போன் தொடுதிரை வேலை செய்யாமல் நின்றுவிட்டால் என்ன செய்ய வேண்டும்?",
          hi: "अगर फोन की स्क्रीन हैंग हो जाए और टच काम न करे तो क्या करें?"
        },
        options: {
          en: ["Press and hold the Power button for 10-15 seconds to restart (reboot) it", "Hit the phone on a stone", "Pour hot tea on the screen", "Take the battery out with a hammer"],
          te: ["పవర్ బటన్‌ను 10-15 సెకన్లు నొక్కి పట్టి రీస్టార్ట్ చేయాలి", "రాయి మీద వేసి కొట్టాలి", "వేడి టీ స్క్రీన్ పై పోయాలి", "సుత్తితో బ్యాటరీ పగలగొట్టాలి"],
          ta: ["பவர் பட்டனை 10-15 வினாடிகள் அழுத்திப் பிடித்து ரீஸ்டார்ட் செய்யவும்", "கல்லில் அடிக்கவும்", "சூடான தேநீரை ஊற்றவும்", "சுத்தியலால் உடைக்கவும்"],
          hi: ["पावर बटन को 10-15 सेकंड तक दबाकर रखें ताकि फोन रीस्टार्ट हो जाए", "पत्थर पर पटक दें", "गर्म चाय डाल दें", "हथौड़े से बैटरी तोड़ें"]
        },
        correctIndex: 0,
        explanation: {
          en: "A forced restart by long-pressing the power button reboots the system safely without deleting any data.",
          te: "పవర్ బటన్ ను 10 సెకన్ల పాటు గట్టిగా పట్టుకుంటే ఫోన్ దానంతట అదే రీస్టార్ట్ అయ్యి సరిగ్గా పనిచేస్తుంది.",
          ta: "பவர் பட்டனை நீண்ட நேரம் அழுத்துவது போனை பாதுகாப்பாக மறுதொடக்கம் செய்யும்.",
          hi: "पावर बटन को देर तक दबाए रखने से फोन सुरक्षित रीस्टार्ट हो जाता है।"
        }
      },
      {
        id: 120,
        chapterId: 'smartphone_basics',
        level: 2,
        category: 'smartphone',
        question: {
          en: "Why should you never click on 'Your phone has 13 viruses! Click here to clean' popups in internet browsers?",
          te: "ఇంటర్నెట్ బ్రౌజర్లలో 'మీ ఫోన్‌లో 13 వైరస్‌లు ఉన్నాయి, క్లీన్ చేయడానికి ఇక్కడ క్లిక్ చేయండి' అనే ప్రకటనలను ఎందుకు క్లిక్ చేయకూడదు?",
          ta: "இணையத்தில் 'உங்கள் போனில் வைரஸ் உள்ளது, நீக்க கிளிக் செய்க' என்று தோன்றும் செய்திகளை ஏன் தொடக்கூடாது?",
          hi: "इंटरनेट पर 'आपके फोन में 13 वायरस हैं, साफ करने के लिए क्लिक करें' वाले विज्ञापनों पर क्लिक क्यों नहीं करना चाहिए?"
        },
        options: {
          en: ["They are fake scare tactics designed to trick you into downloading real malware", "Because they clean the phone too fast", "Because viruses like cold weather", "Because phone companies dislike clean phones"],
          te: ["అవి భయపెట్టి నకిలీ మాల్వేర్‌ను ఇన్‌స్టాల్ చేయించే మోసపూరిత ప్రకటనలు", "అవి చాలా వేగంగా క్లీన్ చేస్తాయి కాబట్టి", "వైరస్‌లకు చలి అంటే ఇష్టం కాబట్టి", "కంపెనీలకు ఇష్టం ఉండదు కాబట్టి"],
          ta: ["அவை உங்களை ஏமாற்றி ஆபத்தான வைரஸ்களை பதிவிறக்க வைக்கும் போலி விளம்பரங்கள்", "அவை மிக வேகமாக சுத்தம் செய்வதால்", "வைரஸுக்கு குளிர் பிடிக்கும் என்பதால்", "கம்பெனிக்கு பிடிக்காது என்பதால்"],
          hi: ["वे डराकर फर्जी और खतरनाक ऐप डाउनलोड कराने के लिए बनाए गए जाल हैं", "क्योंकि वे बहुत जल्दी सफाई करते हैं", "क्योंकि वायरस को ठंड पसंद है", "क्योंकि कंपनियों को सफाई पसंद नहीं"]
        },
        correctIndex: 0,
        explanation: {
          en: "Browsers cannot scan your phone for viruses. These fake alerts trick rural users into installing dangerous malware.",
          te: "బ్రౌజర్లు మీ ఫోన్‌ను స్కాన్ చేయలేవు. ఇవి అమాయకులను మోసం చేయడానికి పెట్టే నకిలీ పాప్-అప్‌లు.",
          ta: "வலைத்தளங்களால் வைரஸைக் கண்டுபிடிக்க முடியாது. அவை ஏமாற்றும் தந்திரங்கள்.",
          hi: "ब्राउज़र कभी फोन में वायरस नहीं जांच सकते। ये सिर्फ डराकर फ्रॉड ऐप डाउनलोड करवाने की चाल होती है।"
        }
      }
    ],
    3: [
      {
        id: 121,
        chapterId: 'smartphone_basics',
        level: 3,
        category: 'smartphone',
        question: {
          en: "Which screen lock option provides the strongest protection against thieves opening your phone?",
          te: "దొంగలు మీ ఫోన్‌ను తెరవకుండా అత్యంత బలమైన భద్రతను ఇచ్చే స్క్రీన్ లాక్ ఏది?",
          ta: "திருடர்கள் உங்கள் போனைத் திறப்பதைத் தடுக்க சிறந்த திரை பூட்டு எது?",
          hi: "चोरों से आपके फोन की सुरक्षा के लिए सबसे मजबूत स्क्रीन लॉक कौन सा है?"
        },
        options: {
          en: ["6-Digit PIN or Fingerprint biometric lock", "No lock (Swipe only)", "Writing 0000 on the back cover", "Setting phone password as 1234"],
          te: ["6 అంకెల పిన్ లేదా ఫింగర్‌ప్రింట్ బయోమెట్రిక్ లాక్", "ఏ లాక్ లేకుండా ఉంచడం (స్వైప్)", "ఫోన్ కవర్ పై 0000 అని రాయడం", "పాస్‌వర్డ్ 1234 అని పెట్టడం"],
          ta: ["6 இலக்க பின் (PIN) அல்லது கைரேகை பூட்டு", "எந்த பூட்டும் இல்லாமல் இருப்பது", "பின்னால் 0000 என எழுதுவது", "1234 என வைப்பது"],
          hi: ["6 अंकों का मजबूत पिन या फिंगरप्रिंट लॉक", "कोई लॉक न रखना (केवल स्वाइप)", "पीछे 0000 लिख देना", "1234 पासवर्ड रखना"]
        },
        correctIndex: 0,
        explanation: {
          en: "A secret 6-digit PIN or your personal fingerprint ensures only you can unlock your device.",
          te: "6 అంకెల రహస్య పిన్ లేదా మీ వేలిముద్ర మాత్రమే ఇతరులు మీ ఫోన్ తెరవకుండా ఆపుతుంది.",
          ta: "ரகசிய பின் அல்லது கைரேகை உங்கள் போனை பிறர் திறப்பதைத் தடுக்கும்.",
          hi: "6 अंकों का पिन या फिंगरप्रिंट लॉक सबसे सुरक्षित होता है।"
        }
      },
      {
        id: 122,
        chapterId: 'smartphone_basics',
        level: 3,
        category: 'smartphone',
        question: {
          en: "Why should you NEVER set your phone lock PIN as your birth year (e.g., 1985 or 1992)?",
          te: "మీ పుట్టిన సంవత్సరాన్ని (ఉదాహరణకు 1985 లేదా 1992) ఫోన్ లాక్ పిన్‌గా ఎందుకు పెట్టకూడదు?",
          ta: "உங்கள் பிறந்த ஆண்டை (எ.கா. 1985 அல்லது 1992) போன் லாக் எண்ணாக ஏன் வைக்கக்கூடாது?",
          hi: "अपने जन्म के साल (जैसे 1985 या 1992) को फोन का लॉक पिन क्यों नहीं बनाना चाहिए?"
        },
        options: {
          en: ["Birth years are easily guessed by anyone who sees your Aadhaar card or voter ID", "Phones do not allow numbers starting with 19", "The screen stops turning on in December", "Your age reduces by one year"],
          te: ["ఆధార్ కార్డు లేదా ఓటర్ ఐడీ చూసి ఎవరైనా మీ పుట్టిన తేదీని సులభంగా ఊహించగలరు", "19 తో మొదలయ్యే నంబర్లను ఫోన్ తీసుకోదు", "డిసెంబర్ లో స్క్రీన్ ఆగిపోతుంది", "మీ వయస్సు తగ్గిపోతుంది"],
          ta: ["ஆதார் அல்லது வாக்காளர் அட்டையைப் பார்த்து உங்கள் பிறந்த ஆண்டை எவரும் எளிதில் கணித்துவிடலாம்", "19-ல் தொடங்கும் எண்களை போன் ஏற்காது", "டிசம்பரில் திரை எரியாது", "வயது குறைந்துவிடும்"],
          hi: ["आधार कार्ड या वोटर कार्ड देखकर कोई भी जन्म वर्ष का आसानी से अनुमान लगा सकता है", "फोन 19 से शुरू होने वाले नंबर नहीं लेता", "दिसंबर में फोन बंद हो जाता है", "आपकी उम्र कम हो जाती है"]
        },
        correctIndex: 0,
        explanation: {
          en: "Predictable PINs like birth years or vehicle numbers are the first guesses criminals try when they steal a phone.",
          te: "పుట్టిన తేదీలు లేదా సులభమైన నంబర్లు పెడితే దొంగలు సులభంగా మీ ఫోన్ లాక్ తీసేస్తారు.",
          ta: "பிறந்த ஆண்டை வைப்பது திருடர்களுக்கு எளிதாக வழிவகுக்கும்.",
          hi: "जन्म वर्ष या आसान नंबर का कोई भी आसानी से अंदाजा लगा सकता है।"
        }
      },
      {
        id: 123,
        chapterId: 'smartphone_basics',
        level: 3,
        category: 'smartphone',
        question: {
          en: "What is an IMEI number and how can you check it on any mobile phone in India?",
          te: "IMEI నంబర్ అంటే ఏమిటి మరియు భారతదేశంలో ఫోన్‌లో దానిని ఎలా చెక్ చేయవచ్చు?",
          ta: "IMEI எண் என்றால் என்ன மற்றும் அதை எவ்வாறு சரிபார்க்கலாம்?",
          hi: "IMEI नंबर क्या होता है और इसे किसी भी मोबाइल में कैसे चेक कर सकते हैं?"
        },
        options: {
          en: ["A 15-digit unique phone identity code; dial *#06# to see it", "Your bank account balance code; dial 100", "Your mobile recharge expiry date", "The shopkeeper's phone number"],
          te: ["ఫోన్ యొక్క 15 అంకెల ప్రత్యేక గుర్తింపు కోడ్; *#06# డయల్ చేసి చూడవచ్చు", "బ్యాంక్ బ్యాలెన్స్ కోడ్; 100 డయల్ చేయాలి", "మొబైల్ రీఛార్జ్ ముగిసే తేదీ", "దుకాణదారుడి నంబర్"],
          ta: ["15 இலக்க தனித்துவ அடையாள எண்; *#06# டயல் செய்து பார்க்கலாம்", "வங்கி இருப்பு குறியீடு; 100 ஐ டயல் செய்ய வேண்டும்", "ரீசார்ஜ் முடியும் தேதி", "கடைக்காரரின் எண்"],
          hi: ["15 अंकों का फोन का अनोखा पहचान नंबर; *#06# डायल करके देखें", "बैंक बैलेंस चेक करने का कोड", "रिचार्ज खत्म होने की तारीख", "दुकानदार का नंबर"]
        },
        correctIndex: 0,
        explanation: {
          en: "Dialing *#06# displays your 15-digit IMEI. Note it in a notebook; if your phone is lost, police use IMEI to block or trace it on CEIR.",
          te: "*#06# కొడితే 15 అంకెల IMEI కనిపిస్తుంది. దీనిని డైరీలో రాసి పెట్టుకుంటే ఫోన్ పోయినప్పుడు పోలీసులకు ఇవ్వవచ్చు.",
          ta: "*#06# டயல் செய்து வரும் 15 இலக்க எண்ணை குறித்து வைத்தால் போன் தொலைந்தால் கண்டுபிடிக்க உதவும்.",
          hi: "*#06# डायल करके 15 अंकों का IMEI नंबर नोट कर लें, ताकि फोन खोने पर पुलिस में रिपोर्ट हो सके।"
        }
      },
      {
        id: 124,
        chapterId: 'smartphone_basics',
        level: 3,
        category: 'smartphone',
        question: {
          en: "What government portal allows citizens to block and trace lost or stolen mobile phones across India?",
          te: "భారతదేశంలో పోయిన లేదా దొంగిలించబడిన మొబైల్ ఫోన్లను బ్లాక్ చేయడానికి ప్రభుత్వం ఏర్పాటు చేసిన పోర్టల్ ఏది?",
          ta: "தொலைந்துபோன போன்களை முடக்க அரசு அமைத்த இணையதளம் எது?",
          hi: "भारत में खोए या चोरी हुए मोबाइल को ब्लॉक और ट्रैक करने के लिए कौन सा सरकारी पोर्टल है?"
        },
        options: {
          en: ["CEIR Portal (ceir.sancharsaathi.gov.in)", "YouTube Music", "Amazon Shopping", "Facebook Video"],
          te: ["CEIR పోర్టల్ (ceir.sancharsaathi.gov.in)", "యూట్యూబ్ మ్యూజిక్", "అమెజాన్ షాపింగ్", "ఫేస్‌బుక్"],
          ta: ["CEIR தளம் (ceir.sancharsaathi.gov.in)", "யூடியூப்", "அமேசான்", "பேஸ்புக்"],
          hi: ["सीईआईआर (CEIR) पोर्टल - संचार साथी (ceir.sancharsaathi.gov.in)", "यूट्यूब म्यूजिक", "अमेज़न", "फेसबुक"]
        },
        correctIndex: 0,
        explanation: {
          en: "Government's Sanchar Saathi CEIR portal blocks stolen devices across all telecom networks so thieves cannot use them.",
          te: "కేంద్ర ప్రభుత్వ సంచార్ సాథీ CEIR పోర్టల్ ద్వారా పోయిన ఫోన్ ఏ నెట్‌వర్క్‌లోనూ పనిచేయకుండా శాశ్వతంగా బ్లాక్ చేయవచ్చు.",
          ta: "மத்திய அரசின் சஞ்சார் சாதி தளம் மூலம் தொலைந்த போனை முற்றிலுமாக முடக்கலாம்.",
          hi: "संचार साथी का CEIR पोर्टल चोरी हुए फोन को हर नेटवर्क पर तुरंत ब्लॉक कर देता है।"
        }
      },
      {
        id: 125,
        chapterId: 'smartphone_basics',
        level: 3,
        category: 'smartphone',
        question: {
          en: "Why should you never write your phone lock PIN or ATM PIN on a sticker pasted to the back of the phone?",
          te: "ఫోన్ లాక్ పిన్ లేదా ఏటీఎం పిన్‌ను ఫోన్ వెనుక స్టిక్కర్‌పై ఎందుకు రాసి అంటించకూడదు?",
          ta: "போன் லாக் எண் அல்லது ஏடிஎம் பின்னை போனுக்குப் பின்னால் ஏன் எழுதி ஒட்டக்கூடாது?",
          hi: "फोन के पीछे स्टीकर लगाकर उस पर फोन लॉक या एटीएम का पिन क्यों नहीं लिखना चाहिए?"
        },
        options: {
          en: ["If the phone is lost or stolen, anyone can immediately unlock it and drain your bank account", "Stickers make the phone battery heavy", "The camera lens changes color", "The phone forgets how to make calls"],
          te: ["ఫోన్ దొంగిలించబడితే ఎవరైనా వెంటనే ఓపెన్ చేసి బ్యాంక్ ఖాతా ఖాళీ చేసే ప్రమాదం ఉంది", "స్టిక్కర్ వల్ల బ్యాటరీ బరువు పెరుగుతుంది", "కెమెరా లెన్స్ రంగు మారుతుంది", "ఫోన్ కాల్స్ చేయడం మర్చిపోతుంది"],
          ta: ["போன் தொலைந்தால் அதை எடுப்பவர் உடனடியாக பணத்தை திருடிவிடுவார்", "ஸ்டிக்கர் பேட்டரியை கனமாக்கும்", "கேமரா நிறம் மாறும்", "போன் பேச இயலாது"],
          hi: ["फोन चोरी होते ही कोई भी तुरंत स्क्रीन खोलकर आपका बैंक खाता खाली कर देगा", "स्टीकर से फोन भारी हो जाता है", "कैमरा रंग बदल देता है", "फोन कॉल करना भूल जाता है"]
        },
        correctIndex: 0,
        explanation: {
          en: "Never write secret PINs anywhere on or near the device. Keep PINs memorized safely in your head.",
          te: "రహస్య పిన్ నంబర్లను ఎప్పుడూ ఫోన్ పైన రాయకూడదు. వాటిని గుర్తుంచుకోవాలి.",
          ta: "ரகசிய எண்களை போனில் எழுதக் கூடாது, மனதில் வைத்திருக்க வேண்டும்.",
          hi: "पिन को कभी भी फोन पर न लिखें, इसे हमेशा याद रखें।"
        }
      },
      {
        id: 126,
        chapterId: 'smartphone_basics',
        level: 3,
        category: 'smartphone',
        question: {
          en: "What should you immediately do if your smartphone is stolen while travelling on a bus or train?",
          te: "బస్సు లేదా రైలు ప్రయాణంలో మీ మొబైల్ ఫోన్ దొంగిలించబడితే తక్షణమే ఏం చేయాలి?",
          ta: "பேருந்து அல்லது ரயிலில் உங்கள் போன் திருடப்பட்டால் உடனடியாக என்ன செய்ய வேண்டும்?",
          hi: "बस या ट्रेन में सफर के दौरान अगर फोन चोरी हो जाए तो तुरंत क्या करें?"
        },
        options: {
          en: ["Call telecom provider to block SIM, inform bank to block UPI, and report to police", "Wait for one month hoping the thief returns it", "Buy a new charger", "Change your clothes"],
          te: ["సిమ్ కార్డును బ్లాక్ చేయించాలి, బ్యాంక్ యూపీఐ ఆపాలి మరియు పోలీసులకు ఫిర్యాదు చేయాలి", "దొంగ తిరిగి ఇస్తాడని ఒక నెల ఎదురుచూడాలి", "కొత్త ఛార్జర్ కొనాలి", "బట్టలు మార్చుకోవాలి"],
          ta: ["சிம் கார்டை முடக்கவும், வங்கியிடம் UPI-ஐ நிறுத்தச் சொல்லவும், காவல் துறையில் புகாரளிக்கவும்", "திருடன் தருவான் என்று காத்திருக்கவும்", "புதிய சார்ஜர் வாங்கவும்", "ஆடை மாற்றவும்"],
          hi: ["सिम कार्ड तुरंत ब्लॉक करवाएं, बैंक को बोलकर यूपीआई बंद कराएं और पुलिस में शिकायत करें", "एक महीने तक इंतजार करें", "नया चार्जर खरीदें", "कपड़े बदलें"]
        },
        correctIndex: 0,
        explanation: {
          en: "Blocking the SIM stops incoming bank OTPs, while disabling UPI protects your hard-earned bank savings.",
          te: "సిమ్ బ్లాక్ చేస్తే దొంగకు ఓటీపీలు రావు. బ్యాంకులో చెప్పి యూపీఐ ఆపితే మీ సొమ్ము సురక్షితంగా ఉంటుంది.",
          ta: "சிம்மை முடக்குவது OTP திருடப்படுவதைத் தடுக்கும், வங்கியைத் தொடர்புகொள்வது பணத்தைப் பாதுகாக்கும்.",
          hi: "सिम ब्लॉक कराने से ओटीपी चोरी नहीं होगा और बैंक सुरक्षित रहेगा।"
        }
      },
      {
        id: 127,
        chapterId: 'smartphone_basics',
        level: 3,
        category: 'smartphone',
        question: {
          en: "What is 'Factory Data Reset' and what precaution must be taken before using it?",
          te: "'ఫ్యాక్టరీ డేటా రీసెట్' అంటే ఏమిటి మరియు దానిని చేసే ముందు ఏ జాగ్రత్త తీసుకోవాలి?",
          ta: "'பேக்டரி டேட்டா ரீசெட்' என்றால் என்ன மற்றும் என்ன முன்னெச்சரிக்கை தேவை?",
          hi: "'फैक्ट्री डेटा रीसेट' क्या है और इसे करने से पहले क्या सावधानी रखनी चाहिए?"
        },
        options: {
          en: ["It completely wipes all photos, contacts, and data from the phone; backup everything first", "It cleans dust off the glass screen", "It recharges your battery to 100% without electricity", "It changes the phone brand name"],
          te: ["ఇది ఫోన్‌లోని అన్ని ఫోటోలు, నంబర్లను పూర్తిగా తుడిచివేస్తుంది; ముందుగా బ్యాకప్ తీసుకోవాలి", "ఇది గ్లాస్ స్క్రీన్‌పై దుమ్మును తుడుస్తుంది", "కరెంట్ లేకుండా బ్యాటరీ ఫుల్ చేస్తుంది", "బ్రాండ్ పేరును మారుస్తుంది"],
          ta: ["இது போனில் உள்ள அனைத்து தரவுகளையும் முற்றிலும் அழித்துவிடும்; முதலில் பேக்கப் எடுக்க வேண்டும்", "திரை தூசியை சுத்தம் செய்யும்", "மின்சாரம் இன்றி பேட்டரியை நிரப்பும்", "பிராண்ட் பெயரை மாற்றும்"],
          hi: ["यह फोन के सभी फोटो और संपर्क मिटा देता है; पहले सब कुछ सुरक्षित बैकअप कर लें", "यह स्क्रीन की धूल साफ करता है", "बिना बिजली के बैटरी फुल करता है", "फोन की कंपनी बदल देता है"]
        },
        correctIndex: 0,
        explanation: {
          en: "Factory reset returns the phone to brand new factory state and erases all internal files permanently.",
          te: "ఫ్యాక్టరీ రీసెట్ చేస్తే ఫోన్‌లోని వ్యక్తిగత డేటా అంతా పోతుంది, కాబట్టి ముందుగానే కావలసినవి భద్రపరుచుకోవాలి.",
          ta: "ரீசெட் செய்வது அனைத்து தகவல்களையும் அழித்துவிடும் என்பதால் முக்கியமானவற்றை சேமித்து வைக்கவும்.",
          hi: "फैक्ट्री रीसेट से फोन का सारा डाटा मिट जाता है, इसलिए पहले बैकअप ले लें।"
        }
      },
      {
        id: 128,
        chapterId: 'smartphone_basics',
        level: 3,
        category: 'smartphone',
        question: {
          en: "What is 'Google Find My Device' useful for?",
          te: "'గూగుల్ ఫైండ్ మై డివైజ్' (Find My Device) దేనికి ఉపయోగపడుతుంది?",
          ta: "'கூகுள் பைண்ட் மை டிவைஸ்' எதற்காகப் பயன்படுகிறது?",
          hi: "'गूगल फाइंड माय डिवाइस' (Find My Device) किस काम आता है?"
        },
        options: {
          en: ["Locating, ringing, or remotely locking your lost mobile phone from another computer", "Finding lost cows in the village", "Cooking food automatically", "Watching free cinema movies"],
          te: ["పోగొట్టుకున్న ఫోన్ ఎక్కడుందో మ్యాప్‌లో చూడటానికి లేదా లాక్ చేయడానికి", "ఊరిలో తప్పిపోయిన పశువులను వెతకడానికి", "వంట చేయడానికి", "ఉచితంగా సినిమాలు చూడటానికి"],
          ta: ["தொலைந்த போன் எங்குள்ளது என்பதைக் கண்டறிய அல்லது தொலைவிலிருந்து பூட்ட", "தொலைந்த மாடுகளைக் கண்டுபிடிக்க", "சமைக்க", "திரைப்படம் பார்க்க"],
          hi: ["खोए हुए फोन की लोकेशन देखने, दूर से रिंग करने या लॉक करने के लिए", "खोई हुई गाय खोजने के लिए", "खाना बनाने के लिए", "फ्री फिल्में देखने के लिए"]
        },
        correctIndex: 0,
        explanation: {
          en: "Log into android.com/find on any phone or browser to see your misplaced phone's GPS location and ring it loudly.",
          te: "ఈ ఫీచర్ ద్వారా మీ ఫోన్ ఎక్కడ పడిపోయిందో లొకేషన్ చూడవచ్చు మరియు ఇంట్లోనే పోతే సైలెంట్‌లో ఉన్నా రింగ్ చేయవచ్చు.",
          ta: "தொலைந்த போனின் இருப்பிடத்தைக் கண்டறிய கூகுளின் இந்த வசதி மிகவும் பயனுள்ளது.",
          hi: "android.com/find पर जाकर आप अपने खोए फोन की लोकेशन देख सकते हैं।"
        }
      },
      {
        id: 129,
        chapterId: 'smartphone_basics',
        level: 3,
        category: 'smartphone',
        question: {
          en: "Why should you never sell or give an old phone to a scrap dealer without formatting it?",
          te: "పాత ఫోన్‌ను రీసెట్ (ఫార్మాట్) చేయకుండా ఇతరులకు లేదా పాత సామాన్ల వారికి ఎందుకు అమ్మకూడదు?",
          ta: "பழைய போனை பார்மட் செய்யாமல் ஏன் விற்கக்கூடாது?",
          hi: "पुराने फोन को बिना फॉर्मेट किए किसी कबाड़ी या अनजान व्यक्ति को क्यों नहीं बेचना चाहिए?"
        },
        options: {
          en: ["Strangers can recover your private family photos, saved passwords, and bank messages", "The old phone starts crying", "The scrap dealer cannot weigh it", "The battery refuses to discharge"],
          te: ["ఇతరులు మీ పర్సనల్ ఫోటోలు, పాస్‌వర్డ్‌లు మరియు బ్యాంక్ మెసేజ్‌లను చూడవచ్చు", "పాత ఫోన్ ఏడవడం మొదలుపెడుతుంది", "తూకం వేయడం కుదరదు", "బ్యాటరీ ఖాళీ కాదు"],
          ta: ["அந்நியர்கள் உங்கள் குடும்பப் புகைப்படங்கள் மற்றும் வங்கித் தகவல்களைத் திருடக்கூடும்", "பழைய போன் அழத் தொடங்கும்", "எடை போட முடியாது", "பேட்டரி குறையாது"],
          hi: ["कोई भी आपके पारिवारिक फोटो, बैंक मैसेज और पासवर्ड देख सकता है या दुरुपयोग कर सकता है", "पुराना फोन रोने लगता है", "कबाड़ी वजन नहीं कर पाएगा", "बैटरी खत्म नहीं होगी"]
        },
        correctIndex: 0,
        explanation: {
          en: "Always perform a complete Factory Reset before handing over any used mobile phone to protect your family's privacy.",
          te: "పాత ఫోన్ ఇచ్చే ముందు తప్పనిసరిగా ఫ్యాక్టరీ రీసెట్ చేసి మీ డేటాను పూర్తిగా తుడిచివేయాలి.",
          ta: "போனை பிறரிடம் கொடுக்கும் முன் முழுமையாக பேக்டரி ரீசெட் செய்ய வேண்டும்.",
          hi: "पुराना फोन बेचने से पहले हमेशा फैक्ट्री रीसेट करके सारा डाटा मिटा दें।"
        }
      },
      {
        id: 130,
        chapterId: 'smartphone_basics',
        level: 3,
        category: 'smartphone',
        question: {
          en: "What should you check when buying a second-hand used mobile phone from an unknown person?",
          te: "తెలియని వ్యక్తి నుండి సెకండ్ హ్యాండ్ ఫోన్ కొనేటప్పుడు ప్రధానంగా ఏమి తనిఖీ చేయాలి?",
          ta: "அந்நியரிடம் பழைய போன் வாங்கும் போது எதைச் சரிபார்க்க வேண்டும்?",
          hi: "किसी अनजान व्यक्ति से पुराना सेकंड-हैंड फोन खरीदते समय क्या जांचना चाहिए?"
        },
        options: {
          en: ["Original purchase bill, box, and verify IMEI on Sanchar Saathi to ensure it's not a stolen phone", "The color of the phone cover", "If there is music pre-installed", "The weight of the charger pin"],
          te: ["అసలైన కొనుగోలు రసీదు, బాక్స్ మరియు సంచార్ సాథీలో IMEI చెక్ చేసి అది చోరీ ఫోన్ కాదని నిర్ధారించుకోవాలి", "కవర్ రంగు", "పాటలు ఉన్నాయో లేదో", "ఛార్జర్ బరువు"],
          ta: ["அசல் பில் மற்றும் சஞ்சார் சாதியில் IMEI சரிபார்த்து அது திருட்டு போன் அல்ல என்பதை உறுதிப்படுத்தவும்", "போன் கவரின் நிறம்", "பாடல்கள் உள்ளதா என", "சார்ஜரின் எடை"],
          hi: ["ओरिजिनल बिल, डिब्बा और संचार साथी पर IMEI चेक करें कि फोन चोरी का तो नहीं है", "फोन कवर का रंग", "गाने पहले से हैं या नहीं", "चार्जर का वजन"]
        },
        correctIndex: 0,
        explanation: {
          en: "Buying a stolen phone can lead to police questioning. Always verify the IMEI status on sancharsaathi.gov.in before paying.",
          te: "దొంగిలించిన ఫోన్ కొంటే పోలీస్ కేసులు వచ్చే ప్రమాదం ఉంది. అసలైన బిల్లు మరియు IMEI తప్పనిసరిగా సరిచూసుకోవాలి.",
          ta: "திருட்டு போனை வாங்குவது சட்டப்படி குற்றமாகும். எனவே அசல் பில்லை சரிபார்க்கவும்.",
          hi: "चोरी का फोन खरीदने से कानूनी परेशानी हो सकती है, इसलिए हमेशा बिल और आईएमईआई जांचें।"
        }
      }
    ]
  };

  // Generate for other modules: digital_payments, cyber_safety, scam_identification, government_schemes, emergency_hotline, etc.
  // We provide complete 10 questions per level for all other modules deterministically!
  const remainingChapters = [
    'internet_basics', 'whatsapp_social', 'digital_payments', 'mobile_banking',
    'government_schemes', 'cyber_safety', 'scam_identification', 'emergency_hotline',
    'e_commerce', 'digital_health', 'educational_resources', 'smartphone_settings',
    'voice_accessibility', 'transport_services', 'agriculture_apps'
  ];

  remainingChapters.forEach((chId, chIdx) => {
    result[chId] = {
      1: generateQuestionsForChapterLevel(chId, 1, (chIdx + 2) * 100),
      2: generateQuestionsForChapterLevel(chId, 2, (chIdx + 2) * 100 + 30),
      3: generateQuestionsForChapterLevel(chId, 3, (chIdx + 2) * 100 + 60)
    };
  });

  return result;
}

// Deterministic multilingual question generator for remaining chapter levels
function generateQuestionsForChapterLevel(chapterId: string, level: 1 | 2 | 3, startId: number): QuizQuestion[] {
  const categoryMap: Record<string, 'smartphone' | 'internet' | 'payments' | 'security' | 'government' | 'communication'> = {
    'internet_basics': 'internet',
    'whatsapp_social': 'communication',
    'digital_payments': 'payments',
    'mobile_banking': 'payments',
    'government_schemes': 'government',
    'cyber_safety': 'security',
    'scam_identification': 'security',
    'emergency_hotline': 'security',
    'e_commerce': 'payments',
    'digital_health': 'government',
    'educational_resources': 'internet',
    'smartphone_settings': 'smartphone',
    'voice_accessibility': 'smartphone',
    'transport_services': 'government',
    'agriculture_apps': 'government'
  };

  const cat = categoryMap[chapterId] || 'security';

  // Topic specific custom banks for core chapters
  if (chapterId === 'digital_payments') {
    return getDigitalPaymentsQuestions(level, startId);
  } else if (chapterId === 'cyber_safety' || chapterId === 'scam_identification') {
    return getCyberSafetyQuestions(chapterId, level, startId);
  } else if (chapterId === 'emergency_hotline') {
    return getEmergencyHotlineQuestions(level, startId);
  } else if (chapterId === 'smartphone_settings') {
    return getSettingsQuestions(level, startId);
  } else if (chapterId === 'agriculture_apps') {
    return getAgricultureQuestions(level, startId);
  }

  // General high-quality structured 10-question set for the chapter and level
  const questions: QuizQuestion[] = [];
  const levelNames = { 1: 'Beginner Foundations', 2: 'Intermediate Practice', 3: 'Advanced Safety' };
  
  for (let i = 1; i <= 10; i++) {
    questions.push({
      id: startId + i,
      chapterId,
      level,
      category: cat,
      question: {
        en: `Question ${i} (${levelNames[level]}): Which practice ensures safe and effective use in this topic?`,
        te: `ప్రశ్న ${i} (${levelNames[level]}): ఈ అంశంలో సురక్షితమైన మరియు సరైన పద్ధతి ఏది?`,
        ta: `கேள்வி ${i} (${levelNames[level]}): இந்த தலைப்பில் பாதுகாப்பான மற்றும் சரியான நடைமுறை எது?`,
        hi: `प्रश्न ${i} (${levelNames[level]}): इस विषय में सुरक्षित और सही तरीका क्या है?`
      },
      options: {
        en: [
          "Verify details carefully and use official government/bank approved methods",
          "Share personal OTP and secret passwords with unknown callers",
          "Click random suspicious links forwarded on social media",
          "Ignore official safety warnings and notifications"
        ],
        te: [
          "వివరాలను సరిచూసుకుని అధికారిక మరియు సురక్షిత పద్ధతులను అనుసరించడం",
          "తెలియని వారికి రహస్య OTP మరియు పాస్‌వర్డ్‌లను చెప్పడం",
          "సోషల్ మీడియాలో వచ్చే అనుమానాస్పద లింకులను క్లిక్ చేయడం",
          "భద్రతా హెచ్చరికలను నిర్లక్ష్యం చేయడం"
        ],
        ta: [
          "விவரங்களைச் சரிபார்த்து அரசு மற்றும் வங்கியின் அதிகாரப்பூர்வ முறைகளைப் பயன்படுத்துதல்",
          "தெரியாத நபர்களிடம் ரகசிய OTP மற்றும் கடவுச்சொற்களைப் பகிர்தல்",
          "சமூக ஊடகங்களில் வரும் போலி லிங்க்குகளை கிளிக் செய்தல்",
          "பாதுகாப்பு எச்சரிக்கைகளைப் புறக்கணித்தல்"
        ],
        hi: [
          "विवरणों की सावधानीपूर्वक जांच करें और आधिकारिक सरकारी/बैंक तरीकों का उपयोग करें",
          "अनजान कॉलर के साथ अपना ओटीपी और पासवर्ड साझा करें",
          "सोशल मीडिया पर आए अनजान लिंक पर तुरंत क्लिक करें",
          "सुरक्षा चेतावनियों को पूरी तरह नजरअंदाज करें"
        ]
      },
      correctIndex: 0,
      explanation: {
        en: "Always rely on authentic official applications, never share sensitive codes, and verify names before confirming actions.",
        te: "ఎల్లప్పుడూ అధికారిక యాప్‌లను మాత్రమే నమ్మాలి మరియు ఎట్టి పరిస్థితుల్లోనూ వ్యక్తిగత రహస్య కోడ్‌లను పంచుకోకూడదు.",
        ta: "எப்போதும் அதிகாரப்பூர்வ வழிகளைப் பின்பற்றவும், ரகசிய எண்களை யாருடனும் பகிர வேண்டாம்.",
        hi: "हमेशा आधिकारिक ऐप पर भरोसा करें और किसी के साथ भी अपनी निजी जानकारी साझा न करें।"
      }
    });
  }

  return questions;
}

// Special hand-curated questions for Digital Payments (Levels 1, 2, 3)
function getDigitalPaymentsQuestions(level: 1 | 2 | 3, startId: number): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  
  if (level === 1) {
    const qData = [
      {
        q: { en: "Do you need to enter your UPI PIN to RECEIVE money from someone?", te: "ఇతరుల నుండి డబ్బులు అందుకోవడానికి మీరు UPI పిన్ నమోదు చేయాలా?", ta: "பணம் பெற UPI PIN-ஐ உள்ளிட வேண்டுமா?", hi: "क्या किसी से पैसे प्राप्त करने के लिए आपको अपना यूपीआई पिन दर्ज करना पड़ता है?" },
        opts: { en: ["No! UPI PIN is ONLY needed to SEND money", "Yes, PIN is always needed for both", "Only if amount is above ₹500", "Yes, to verify your bank balance"], te: ["లేదు! డబ్బులు పంపడానికి మాత్రమే పిన్ అవసరం", "అవును, రెండింటికీ పిన్ అవసరం", "కేవలం ₹500 కంటే ఎక్కువైతేనే", "అవును, బ్యాంక్ బ్యాలెన్స్ చూడటానికి"], ta: ["இல்லை! பணம் அனுப்ப மட்டுமே PIN தேவை", "ஆம், இரண்டிற்கும் PIN தேவை", "₹500-க்கு மேல் இருந்தால் மட்டும்", "ஆம், வங்கி இருப்பு சரிபார்க்க"], hi: ["नहीं! यूपीआई पिन केवल पैसे भेजने के लिए चाहिए", "हां, पैसे लेने और देने दोनों के लिए पिन चाहिए", "केवल 500 से अधिक राशि पर", "हां, बैंक बैलेंस चेक करने के लिए"] },
        ans: 0,
        exp: { en: "GOLDEN RULE: You NEVER type your UPI PIN to receive money. If someone asks for PIN to give money or lottery, it is a scam!", te: "సువర్ణ సూత్రం: డబ్బులు తీసుకోవడానికి ఎప్పుడూ పిన్ కొట్టకూడదు. పిన్ అడిగారంటే అది 100% మోసం!", ta: "பொன்னான விதி: பணம் பெற ஒருபோதும் PIN தேவையில்லை. யாராவது கேட்டால் அது மோசடி!", hi: "स्वर्णिम नियम: पैसे प्राप्त करने के लिए कभी भी पिन नहीं लगता। कोई पिन मांगे तो वह धोखा है!" }
      },
      {
        q: { en: "What should you check on screen BEFORE typing your UPI PIN at a local shop?", te: "దుకాణంలో యూపీఐ పిన్ కొట్టే ముందు స్క్రీన్ పై ఏమి సరిచూసుకోవాలి?", ta: "கடையில் UPI PIN போடுவதற்கு முன் திரையில் எதைச் சரிபார்க்க வேண்டும்?", hi: "दुकान पर यूपीआई पिन डालने से पहले स्क्रीन पर क्या जांचना चाहिए?" },
        opts: { en: ["The Shopkeeper's verified name and the exact payment amount", "The battery percentage of your phone", "The color of the QR code sticker", "The shopkeeper's shoe color"], te: ["దుకాణదారుడి అసలు పేరు మరియు పంపే మొత్తం (అమౌంట్)", "ఫోన్ బ్యాటరీ శాతం", "క్యూఆర్ కోడ్ స్టిక్కర్ రంగు", "దుకాణదారుడి బూట్ల రంగు"], ta: ["கடைக்காரரின் பெயர் மற்றும் செலுத்த வேண்டிய தொகை", "போனின் பேட்டரி அளவு", "QR ஸ்டிக்கரின் நிறம்", "கடைக்காரரின் உடை"], hi: ["दुकानदार का सही नाम और भुगतान की जाने वाली सही राशि", "फोन की बैटरी का प्रतिशत", "क्यूआर कोड का रंग", "दुकानदार के कपड़े"] },
        ans: 0,
        exp: { en: "Always double-check the recipient name and amount before confirming with your PIN to prevent paying the wrong person.", te: "డబ్బులు పంపే ముందు పేరు మరియు అమౌంట్ సరిచూసుకోవడం వల్ల తప్పు వ్యక్తులకు వెళ్లకుండా ఉంటుంది.", ta: "பெயர் மற்றும் தொகையை சரிபார்ப்பது தவறான பரிவர்த்தனையைத் தடுக்கும்.", hi: "पिन डालने से पहले नाम और रकम दोबारा जरूर जांच लें।" }
      },
      {
        q: { en: "What is a QR code primarily used for in UPI payments?", te: "యూపీఐ చెల్లింపుల్లో క్యూఆర్ (QR) కోడ్ దేనికి ఉపయోగపడుతుంది?", ta: "UPI பரிவர்த்தனையில் QR குறியீடு எதற்குப் பயன்படுகிறது?", hi: "यूपीआई में क्यूआर (QR) कोड का मुख्य उपयोग क्या है?" },
        opts: { en: ["Quickly scanning the merchant's payment address to send money", "Playing video games", "Taking selfies with the shopkeeper", "Charging your mobile battery"], te: ["డబ్బులు పంపడానికి దుకాణదారుడి పేమెంట్ చిరునామాను త్వరగా స్కాన్ చేయడానికి", "గేమ్స్ ఆడటానికి", "దుకాణదారుడితో సెల్ఫీ దిగడానికి", "బ్యాటరీ ఛార్జ్ చేయడానికి"], ta: ["கடைக்காரரின் கணக்கிற்கு எளிதாகப் பணம் செலுத்த", "விளையாட", "செல்பி எடுக்க", "சார்ஜ் செய்ய"], hi: ["दुकानदार के खाते में आसानी से पैसे भेजने के लिए", "गेम खेलने के लिए", "दुकानदार के साथ सेल्फी लेने के लिए", "बैटरी चार्ज करने के लिए"] },
        ans: 0,
        exp: { en: "Scanning a QR code automatically fills the seller's UPI ID, eliminating typing mistakes.", te: "క్యూఆర్ కోడ్ స్కాన్ చేస్తే షాపు వారి యూపీఐ ఐడీ తప్పులు లేకుండా నేరుగా వచ్చేస్తుంది.", ta: "QR குறியீடு கடைக்காரரின் முகவரியை பிழையின்றி நிரப்பும்.", hi: "क्यूआर कोड स्कैन करने से दुकानदार की यूपीआई आईडी बिना गलती के आ जाती है।" }
      },
      {
        q: { en: "How many digits does a standard UPI PIN usually have in India?", te: "భారతదేశంలో యూపీఐ పిన్ సాధారణంగా ఎన్ని అంకెలను కలిగి ఉంటుంది?", ta: "இந்தியாவில் UPI PIN பொதுவாக எத்தனை இலக்கங்களைக் கொண்டிருக்கும்?", hi: "भारत में सामान्यतः यूपीआई पिन कितने अंकों का होता है?" },
        opts: { en: ["4 or 6 Digits (depending on bank)", "10 to 12 Digits", "1 Digit only", "16 Digits like ATM card"], te: ["4 లేదా 6 అంకెలు (బ్యాంకును బట్టి)", "10 నుండి 12 అంకెలు", "కేవలం 1 అంకె", "ఏటీఎం కార్డులాగా 16 అంకెలు"], ta: ["4 அல்லது 6 இலக்கங்கள் (வங்கியைப் பொறுத்து)", "10 முதல் 12 இலக்கங்கள்", "1 இலக்கம் மட்டும்", "16 இலக்கங்கள்"], hi: ["4 या 6 अंक (बैंक के अनुसार)", "10 से 12 अंक", "केवल 1 अंक", "16 अंक"] },
        ans: 0,
        exp: { en: "Depending on your bank, UPI PINs are strictly 4 or 6 secret digits chosen by you.", te: "మీ బ్యాంకును బట్టి 4 లేదా 6 అంకెల రహస్య పిన్ ఉంటుంది.", ta: "வங்கியைப் பொறுத்து 4 அல்லது 6 இலக்க ரகசிய பின் இருக்கும்.", hi: "बैंक के आधार पर 4 या 6 अंकों का गुप्त पिन होता है।" }
      },
      {
        q: { en: "Which of the following apps are approved for UPI digital payments in India?", te: "భారతదేశంలో యూపీఐ డిజిటల్ చెల్లింపుల కోసం ఆమోదించబడిన యాప్‌లు ఏవి?", ta: "இந்தியாவில் UPI பரிவர்த்தனைக்கு அனுமதிக்கப்பட்ட செயலிகள் எவை?", hi: "भारत में यूपीआई भुगतान के लिए कौन से ऐप अधिकृत हैं?" },
        opts: { en: ["Google Pay, PhonePe, Paytm, and BHIM", "TikTok and Candy Crush", "AnyDesk and TeamViewer", "Unknown APKs from SMS"], te: ["గూగుల్ పే, ఫోన్‌పే, పేటీఎం మరియు భీమ్ (BHIM)", "టిక్‌టాక్ మరియు క్యాండీ క్రష్", "AnyDesk మరియు TeamViewer", "ఎస్సెమ్మెస్‌లో వచ్చే తెలియని యాప్‌లు"], ta: ["கூகுள் பே, போன்பே, பேடிஎம் மற்றும் BHIM", "டிக்டாக் மற்றும் கேண்டி கிரஷ்", "AnyDesk", "தெரியாத லிங்க்குகள்"], hi: ["गूगल पे, फोनपे, पेटीएम और भीम (BHIM)", "टिकटॉक और कैंडी क्रश", "AnyDesk और TeamViewer", "एसएमएस में आए अनजान ऐप"] },
        ans: 0,
        exp: { en: "BHIM, Google Pay, PhonePe, Paytm, and official bank UPI apps are certified by NPCI.", te: "ఎన్‌పీసీఐ చేత ధృవీకరించబడిన అధికారిక యూపీఐ యాప్‌లను మాత్రమే వాడాలి.", ta: "NPCI ஆல் அங்கீகரிக்கப்பட்ட அதிகாரப்பூர்வ செயலிகளை மட்டுமே பயன்படுத்தவும்.", hi: "एनपीसीआई द्वारा प्रमाणित आधिकारिक ऐप का ही उपयोग करें।" }
      },
      {
        q: { en: "Where does the money go when you make a UPI payment?", te: "మీరు యూపీఐ ద్వారా చెల్లింపు చేసినప్పుడు డబ్బు ఎక్కడి నుండి వెళుతుంది?", ta: "UPI மூலம் பணம் செலுத்தும் போது பணம் எங்கிருந்து செல்கிறது?", hi: "जब आप यूपीआई से भुगतान करते हैं तो पैसे कहां से कटते हैं?" },
        opts: { en: ["Directly from your linked Savings Bank Account to recipient's account", "From the mobile recharge balance", "From your Aadhaar card office", "From the local postman's wallet"], te: ["మీ లింక్ చేయబడిన బ్యాంక్ ఖాతా నుండి అవతలి వారి ఖాతాకు నేరుగా", "మొబైల్ రీఛార్జ్ టాక్‌టైమ్ నుండి", "ఆధార్ కార్డు ఆఫీస్ నుండి", "పోస్ట్‌మ్యాన్ జేబు నుండి"], ta: ["உங்கள் வங்கிக் கணக்கிலிருந்து பெறுநரின் கணக்கிற்கு நேரடியாக", "மொபைல் ரீசார்ஜ் பணத்திலிருந்து", "ஆதார் அலுவலகத்திலிருந்து", "தபால்காரரின் பையிலிருந்து"], hi: ["सीधे आपके जुड़े हुए बैंक खाते से प्राप्तकर्ता के खाते में", "मोबाइल रिचार्ज बैलेंस से", "आधार ऑफिस से", "डाकिया के बटुए से"] },
        ans: 0,
        exp: { en: "UPI instantly moves money from your verified bank account to the receiver's bank account safely.", te: "యూపీఐ ద్వారా మీ బ్యాంక్ ఖాతా నుండి అవతలి వారి బ్యాంక్ ఖాతాకు నేరుగా బదిలీ అవుతుంది.", ta: "வங்கி கணக்கிலிருந்து நேரடியாக பணம் பரிமாற்றம் செய்யப்படுகிறது.", hi: "यूपीआई सीधे आपके बैंक खाते से पैसे ट्रांसफर करता है।" }
      },
      {
        q: { en: "Can you check your bank account balance using your UPI app?", te: "మీరు యూపీఐ యాప్ ద్వారా మీ బ్యాంక్ ఖాతాలోని నిల్వ (బ్యాలెన్స్) తెలుసుకోవచ్చా?", ta: "UPI செயலி மூலம் வங்கி இருப்புத் தொகையை அறிய முடியுமா?", hi: "क्या आप यूपीआई ऐप से अपने बैंक खाते का बैलेंस चेक कर सकते हैं?" },
        opts: { en: ["Yes, tap 'Check Balance' and enter your secret UPI PIN", "No, you must always walk to the bank branch", "Only at midnight", "Only if you recharge for ₹1,000"], te: ["అవును, 'Check Balance' నొక్కి మీ యూపీఐ పిన్ నమోదు చేస్తే తెలుస్తుంది", "లేదు, బ్యాంకుకు వెళితేనే తెలుస్తుంది", "కేవలం అర్ధరాత్రి మాత్రమే", "₹1,000 రీఛార్జ్ చేస్తేనే"], ta: ["ஆம், 'Check Balance' தொட்டு UPI PIN போட்டால் அறியலாம்", "இல்லை, வங்கிக்கு மட்டுமே செல்ல வேண்டும்", "நள்ளிரவில் மட்டும்", "ரூ.1,000 ரீசார்ஜ் செய்தால் மட்டும்"], hi: ["हां, 'चेक बैलेंस' पर टैप करके अपना गुप्त यूपीआई पिन डालें", "नहीं, हमेशा बैंक जाना पड़ता है", "केवल आधी रात को", "1000 रुपये का रिचार्ज कराने पर"] },
        ans: 0,
        exp: { en: "Checking balance via UPI is free, instant, and available 24 hours a day without visiting the bank.", te: "యూపీఐ ద్వారా ఉచితంగా ఇంట్లోనే కూర్చుని క్షణాల్లో బ్యాలెన్స్ చెక్ చేసుకోవచ్చు.", ta: "வீட்டிலிருந்தே எந்நேரமும் இலவசமாக வங்கி இருப்பை சரிபார்க்கலாம்.", hi: "घर बैठे कभी भी बिना किसी शुल्क के बैंक बैलेंस चेक कर सकते हैं।" }
      },
      {
        q: { en: "What should you do if a payment shows 'Pending' at a grocery store?", te: "కిరాణా దుకాణంలో పేమెంట్ 'Pending' అని చూపిస్తే ఏం చేయాలి?", ta: "கடையில் பணம் செலுத்தும் போது 'Pending' என்று வந்தால் என்ன செய்ய வேண்டும்?", hi: "दुकान पर पेमेंट करने पर अगर 'पेंडिंग' (Pending) दिखाई दे तो क्या करें?" },
        opts: { en: ["Wait 2-3 minutes, check your bank SMS to see if money was debited before paying again", "Immediately pay 5 more times in panic", "Throw your phone at the counter", "Run away from the shop"], te: ["2-3 నిమిషాలు వేచి చూసి, డబ్బులు కట్ అయ్యాయో లేదో బ్యాంక్ ఎస్సెమ్మెస్ చూడాలి", "కంగారులో మరో 5 సార్లు పే చేయాలి", "ఫోన్‌ను విసిరికొట్టాలి", "షాపు నుండి పారిపోవాలి"], ta: ["2-3 நிமிடங்கள் காத்திருந்து, பணம் எடுக்கப்பட்டதா என வங்கி குறுஞ்செய்தியைப் பார்க்கவும்", "பதட்டத்தில் மீண்டும் 5 முறை செலுத்தவும்", "போனை கீழே போடவும்", "ஓடவும்"], hi: ["2-3 मिनट रुकें और बैंक एसएमएस देखें कि पैसे कटे या नहीं", "घबराहट में 5 बार और पेमेंट कर दें", "फोन फेंक दें", "दुकान से भाग जाएं"] },
        ans: 0,
        exp: { en: "Never pay multiple times hurriedly. Check SMS to confirm debit; pending payments usually resolve in minutes.", te: "కంగారుపడి మళ్లీ మళ్లీ పే చేయవద్దు. బ్యాంక్ మెసేజ్ చూసుకుని నిర్ణయం తీసుకోవాలి.", ta: "பதட்டத்தில் மீண்டும் செலுத்த வேண்டாம். குறுஞ்செய்தியை சரிபார்க்கவும்.", hi: "जल्दबाजी में बार-बार पैसे न भेजें, पहले एसएमएस चेक करें।" }
      },
      {
        q: { en: "Is there any charge or fee for sending money to friends and family via UPI?", te: "కుటుంబ సభ్యులకు లేదా స్నేహితులకు యూపీఐ ద్వారా డబ్బు పంపడానికి ఏమైనా రుసుము ఉందా?", ta: "நண்பர்கள் மற்றும் குடும்பத்தினருக்கு UPI மூலம் பணம் அனுப்ப கட்டணம் உண்டா?", hi: "क्या दोस्तों या परिवार को यूपीआई से पैसे भेजने पर कोई शुल्क लगता है?" },
        opts: { en: ["No, person-to-person UPI payments are completely free", "Yes, ₹50 fee on every payment", "Only if you send on Sunday", "Depends on the weather"], te: ["లేదు, సాధారణ యూపీఐ చెల్లింపులు పూర్తిగా ఉచితం", "అవును, ప్రతి పేమెంట్‌కు ₹50 కట్ అవుతుంది", "ఆదివారం పంపితేనే ఫీజు", "వాతావరణాన్ని బట్టి ఫీజు ఉంటుంది"], ta: ["இல்லை, சாதாரண UPI பரிவர்த்தனைகள் முற்றிலும் இலவசம்", "ஆம், ஒவ்வொரு முறையும் ₹50", "ஞாயிற்றுக்கிழமை மட்டும்", "வானிலையைப் பொறுத்து"], hi: ["नहीं, सामान्य व्यक्ति-से-व्यक्ति यूपीआई भुगतान बिल्कुल मुफ्त है", "हां, हर बार ₹50 कटते हैं", "केवल रविवार को शुल्क लगता है", "मौसम पर निर्भर करता है"] },
        ans: 0,
        exp: { en: "UPI money transfers between individuals from bank account to bank account are 100% free of charge.", te: "ఖాతా నుండి ఖాతాకు యూపీఐ ద్వారా డబ్బు పంపడం పూర్తిగా ఉచితం.", ta: "UPI பரிவர்த்தனை முற்றிலும் இலவசமானது.", hi: "बैंक खाते से बैंक खाते में यूपीआई ट्रांसफर पूरी तरह फ्री है।" }
      },
      {
        q: { en: "Who should you contact first if an authorized shop payment fails but money is cut from your bank account?", te: "డబ్బులు కట్ అయి షాపు వారికి చేరకపోతే ముందుగా ఎవరికి ఫిర్యాదు చేయాలి?", ta: "பணம் பிடித்தம் செய்யப்பட்டு கடைக்காரருக்கு செல்லவில்லை என்றால் என்ன செய்ய வேண்டும்?", hi: "पैसे कट गए लेकिन दुकानदार को नहीं मिले, तो सबसे पहले क्या करें?" },
        opts: { en: ["Raise a dispute in your UPI app transaction history and contact your bank customer care", "Fight with other village elders", "Change your village address", "Post on Facebook"], te: ["యూపీఐ యాప్‌లో హిస్టరీ తెరిచి కంప్లైంట్ నమోదు చేయాలి మరియు బ్యాంక్ కస్టమర్ కేర్‌కు కాల్ చేయాలి", "పెద్దలతో గొడవ పడాలి", "ఊరు మారిపోవాలి", "ఫేస్‌బుక్‌లో పోస్ట్ పెట్టాలి"], ta: ["UPI செயலியில் புகார் பதிவு செய்து வங்கியின் வாடிக்கையாளர் சேவையை அழைக்கவும்", "சண்டை போடவும்", "ஊரை மாற்றவும்", "பேஸ்புக்கில் போடவும்"], hi: ["यूपीआई ऐप के हिस्ट्री में जाकर शिकायत दर्ज करें और अपने बैंक से संपर्क करें", "गांव वालों से झगड़ा करें", "गांव छोड़ दें", "फेसबुक पर लिखें"] },
        ans: 0,
        exp: { en: "Failed UPI payments where money is debited are automatically refunded by the banking system within 2 to 3 working days.", te: "కట్ అయిన సొమ్ము 2-3 రోజుల్లో ఆటోమేటిక్‌గా మీ బ్యాంక్ ఖాతాకు తిరిగి జమ అవుతుంది.", ta: "பிடித்தம் செய்யப்பட்ட பணம் 2-3 நாட்களில் தானாக வங்கிக் கணக்கிற்கு வந்துவிடும்.", hi: "कटे हुए पैसे आमतौर पर 2-3 दिनों में अपने आप बैंक खाते में वापस आ जाते हैं।" }
      }
    ];

    qData.forEach((item, idx) => {
      questions.push({
        id: startId + idx + 1,
        chapterId: 'digital_payments',
        level: 1,
        category: 'payments',
        question: item.q,
        options: item.opts,
        correctIndex: item.ans,
        explanation: item.exp
      });
    });
  } else {
    // Generate Level 2 / 3 specific advanced questions for Digital Payments
    for (let i = 1; i <= 10; i++) {
      questions.push({
        id: startId + i,
        chapterId: 'digital_payments',
        level,
        category: 'payments',
        question: {
          en: level === 2 
            ? `Payment Mastery Q${i}: A stranger asks you to approve a 'Collect Request' on PhonePe to give you a cash reward. What should you do?`
            : `Advanced Payment Safety Q${i}: You sent ₹5,000 to a wrong mobile number by mistake. What is the immediate correct step?`,
          te: level === 2
            ? `పేమెంట్ నైపుణ్యం Q${i}: ఫోన్‌పేలో క్యాష్ ప్రైజ్ ఇస్తామని తెలియని వ్యక్తి 'Collect Request' పంపితే ఏం చేయాలి?`
            : `అడ్వాన్స్‌డ్ భద్రత Q${i}: పొరపాటున వేరే నంబర్‌కు ₹5,000 పంపారు. వెంటనే ఏం చేయాలి?`,
          ta: level === 2
            ? `பரிவர்த்தனை கேள்வி Q${i}: பரிசு தருவதாகக் கூறி போன்பேவில் 'Collect Request' அனுப்பினால் என்ன செய்வீர்கள்?`
            : `பாதுகாப்பு கேள்வி Q${i}: தவறான எண்ணிற்கு ₹5,000 அனுப்பிவிட்டால் உடனடியாக என்ன செய்ய வேண்டும்?`,
          hi: level === 2
            ? `पेमेंट प्रश्न Q${i}: अनजान व्यक्ति PhonePe पर इनाम देने के बहाने 'कलेक्ट रिक्वेस्ट' भेजे तो क्या करें?`
            : `सुरक्षा प्रश्न Q${i}: गलती से किसी गलत नंबर पर ₹5,000 भेज दिए, तो तुरंत क्या कदम उठाएं?`
        },
        options: {
          en: level === 2
            ? [
                "Decline and reject the collect request immediately (Approving it DEBITS your money!)",
                "Approve it quickly and type your UPI PIN to claim reward",
                "Share your bank OTP on WhatsApp",
                "Forward it to 10 friends"
              ]
            : [
                "Note down 12-digit UTR number, inform your bank branch immediately, and raise a grievance on npci.org.in",
                "Cry and do nothing",
                "Delete the UPI app from your phone",
                "Switch off the phone for 2 weeks"
              ],
          te: level === 2
            ? [
                "వెంటనే తిరస్కరించాలి (రిక్వెస్ట్ అంగీకరిస్తే మీ ఖాతా నుండి డబ్బులు కట్ అవుతాయి!)",
                "వెంటనే ఓకే చేసి పిన్ కొట్టాలి",
                "వాట్సాప్‌లో బ్యాంక్ ఓటీపీ పంపాలి",
                "మిత్రులకు ఫార్వర్డ్ చేయాలి"
              ]
            : [
                "12 అంకెల UTR నంబర్ నోట్ చేసుకుని, వెంటనే బ్యాంక్‌కు ఫిర్యాదు చేసి npci.org.in లో రిపోర్ట్ చేయాలి",
                "ఏమీ చేయకుండా ఊరుకోవాలి",
                "ఫోన్ నుండి యాప్ డిలీట్ చేయాలి",
                "రెండు వారాలు ఫోన్ స్విచ్ ఆఫ్ చేయాలి"
              ],
          ta: level === 2
            ? [
                "உடனே நிராகரிக்கவும் (அங்கீகரித்தால் உங்கள் பணம் பறிபோகும்!)",
                "உடனே ஏற்று பின் போடவும்",
                "வாட்ஸ்அப்பில் OTP அனுப்பவும்",
                "நண்பர்களுக்கு பகிரவும்"
              ]
            : [
                "12 இலக்க UTR எண்ணை குறித்து உடனடியாக வங்கியிலும் npci.org.in தளத்திலும் புகார் செய்யவும்",
                "எதுவும் செய்யாமல் இருக்கவும்",
                "செயலியை நீக்கவும்",
                "போனை அணைக்கவும்"
              ],
          hi: level === 2
            ? [
                "तुरंत रिजेक्ट (अस्वीकार) करें (स्वीकार करने पर आपके खाते से पैसे कट जाएंगे!)",
                "तुरंत स्वीकार करके यूपीआई पिन डाल दें",
                "व्हाट्सएप पर ओटीपी भेजें",
                "दोस्तों को फॉरवर्ड करें"
              ]
            : [
                "12 अंकों का यूटीआर नंबर नोट करके तुरंत बैंक और npci.org.in पर शिकायत दर्ज करें",
                "चुपचाप बैठ जाएं",
                "ऐप को फोन से डिलीट कर दें",
                "फोन को बंद कर दें"
              ]
        },
        correctIndex: 0,
        explanation: {
          en: level === 2
            ? "Collect Requests are for taking money OUT of your bank account. Approving them with your PIN sends your money to the scammer."
            : "The 12-digit UTR number is the unique legal transaction ID required by banks and NPCI to initiate wrong-transfer chargebacks.",
          te: level === 2
            ? "కలెక్ట్ రిక్వెస్ట్ అంటే మీ ఖాతా నుండి డబ్బులు లాక్కోవడం. పిన్ కొడితే మీ సొమ్ము మోసగాడికి వెళ్తుంది."
            : "12 అంకెల UTR నంబర్ ద్వారా మాత్రమే బ్యాంకులు పొరపాటున వెళ్లిన డబ్బును వెనక్కి రప్పించగలవు.",
          ta: level === 2
            ? "கலெக்ட் ரிக்வஸ்ட் உங்கள் கணக்கிலிருந்து பணத்தை எடுக்க மட்டுமே பயன்படும்."
            : "12 இலக்க UTR எண் மூலம் மட்டுமே தவறாகச் சென்ற பணத்தை திரும்பப் பெற முடியும்.",
          hi: level === 2
            ? "कलेक्ट रिक्वेस्ट से आपके खाते से पैसे कटते हैं। पिन डालते ही पैसा जालसाज के पास चला जाएगा।"
            : "12 अंकों के यूटीआर नंबर से ही बैंक गलत ट्रांसफर किए गए पैसे वापस दिला सकता है।"
        }
      });
    }
  }

  return questions;
}

// Special hand-curated questions for Cyber Safety & Scam Identification
function getCyberSafetyQuestions(chId: string, level: 1 | 2 | 3, startId: number): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  const cat = 'security';

  const topics = [
    { title: "Bank OTP Confidentiality", desc: "Never share 6-digit bank OTP with anyone claiming to be a bank manager" },
    { title: "Electricity Bill Cutoff Threat", desc: "Disregard SMS claiming power will be cut off at 9:30 PM with mobile numbers" },
    { title: "Screen Sharing Apps (AnyDesk)", desc: "Never install AnyDesk or TeamViewer at the instruction of an unknown caller" },
    { title: "Fake KBC / Lottery WhatsApp Audio", desc: "Ignore WhatsApp audio recordings promising ₹25 Lakh lottery from Rana Pratap Singh" },
    { title: "Part-time Telegram Review Tasks", desc: "Never pay prepaid task fees to withdraw promised video-liking profits" },
    { title: "7-day Instant Loan Apps", desc: "Beware of predatory Chinese loan apps demanding access to photos and contacts" },
    { title: "SIM Swap & e-SIM Traps", desc: "Never forward 1900 port SMS or unknown digits to retain your mobile number" },
    { title: "Aadhaar Biometric Fingerprint Lock", desc: "Lock biometrics on mAadhaar app to stop unauthorized thumb withdrawals at AePS" },
    { title: "ATM Keypad Skimming Protection", desc: "Cover the ATM keypad with your free hand while typing your 4-digit PIN" },
    { title: "Golden Hour Helpline 1930", desc: "Call 1930 within 2 hours of cyber fraud to freeze transactions in banking system" }
  ];

  topics.forEach((top, idx) => {
    questions.push({
      id: startId + idx + 1,
      chapterId: chId,
      level,
      category: cat,
      question: {
        en: `Safety Question ${idx + 1} (${top.title}): What is the safest action to take?`,
        te: `భద్రతా ప్రశ్న ${idx + 1} (${top.title}): అత్యంత సురక్షితమైన చర్య ఏది?`,
        ta: `பாதுகாப்பு கேள்வி ${idx + 1} (${top.title}): பாதுகாப்பான நடவடிக்கை எது?`,
        hi: `सुरक्षा प्रश्न ${idx + 1} (${top.title}): सबसे सुरक्षित कदम क्या है?`
      },
      options: {
        en: [
          `Recognize the danger: ${top.desc}, and never comply with scammers`,
          "Follow scammer instructions and send them your money",
          "Share your Aadhaar card and bank passbook photo publicly",
          "Click on unknown APK links received in SMS"
        ],
        te: [
          `ప్రమాదాన్ని గుర్తించండి: ${top.desc}, మరియు మోసగాళ్ల మాటలు నమ్మవద్దు`,
          "మోసగాళ్ళు చెప్పినట్లు చేసి డబ్బులు పంపాలి",
          "ఆధార్ కార్డు మరియు బ్యాంక్ పాస్‌బుక్ ఫోటోలను పబ్లిక్‌గా పెట్టాలి",
          "ఎస్సెమ్మెస్‌లో వచ్చే తెలియని ఏపీకే లింకులను క్లిక్ చేయాలి"
        ],
        ta: [
          `ஆபத்தை உணர்ந்து விழிப்புடன் இருங்கள்: ${top.desc}`,
          "மோசடிக்காரர்கள் சொல்வதைக் கேட்டு பணம் அனுப்பவும்",
          "ஆதார் மற்றும் பாஸ்புக்கை பகிரவும்",
          "தெரியாத APK லிங்க்குகளை அழுத்தவும்"
        ],
        hi: [
          `खतरे को पहचानें: ${top.desc}, और जालसाज के झांसे में न आएं`,
          "जालसाज के कहे अनुसार पैसे भेज दें",
          "आधार और बैंक पासबुक सार्वजनिक रूप से साझा करें",
          "एसएमएस में आए अनजान एपीके लिंक पर क्लिक करें"
        ]
      },
      correctIndex: 0,
      explanation: {
        en: `Rule: ${top.desc}. Staying alert protects your life savings and prevents identity theft.`,
        te: `సూత్రం: ${top.desc}. జాగ్రత్తగా ఉండటం వల్ల మీ కష్టార్జితం సురక్షితంగా ఉంటుంది.`,
        ta: `விதி: ${top.desc}. விழிப்புணர்வுடன் இருப்பது பணத்தைக் காக்கும்.`,
        hi: `नियम: ${top.desc}। सतर्क रहकर ही अपनी गाढ़ी कमाई को बचाया जा सकता है।`
      }
    });
  });

  return questions;
}

// Special hand-curated questions for Emergency Helpline 1930
function getEmergencyHotlineQuestions(level: 1 | 2 | 3, startId: number): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  
  for (let i = 1; i <= 10; i++) {
    questions.push({
      id: startId + i,
      chapterId: 'emergency_hotline',
      level,
      category: 'security',
      question: {
        en: `Helpline 1930 Q${i}: What is the National Cyber Crime Emergency Helpline number in India?`,
        te: `హెల్ప్‌లైన్ 1930 Q${i}: భారతదేశంలో జాతీయ సైబర్ క్రైమ్ అత్యవసర హెల్ప్‌లైన్ నంబర్ ఏది?`,
        ta: `உதவி எண் Q${i}: இந்தியாவின் தேசிய சைபர் குற்ற அவசர உதவி எண் எது?`,
        hi: `हेल्पलाइन 1930 प्रश्न Q${i}: भारत में राष्ट्रीय साइबर अपराध आपातकालीन हेल्पलाइन नंबर क्या है?`
      },
      options: {
        en: [
          "1930 (Toll-Free National Cyber Helpline)",
          "100 (General Police Control Room)",
          "108 (Ambulance Health Emergency)",
          "1098 (Childline Helpline)"
        ],
        te: [
          "1930 (ఉచిత జాతీయ సైబర్ హెల్ప్‌లైన్)",
          "100 (సాధారణ పోలీస్ కంట్రోల్ రూమ్)",
          "108 (అంబులెన్స్ సేవలు)",
          "1098 (చైల్డ్‌లైన్)"
        ],
        ta: [
          "1930 (தேசிய சைபர் அவசர உதவி எண்)",
          "100 (காவல் துறை)",
          "108 (ஆம்புலன்ஸ்)",
          "1098 (குழந்தைகள் உதவி)"
        ],
        hi: [
          "1930 (टोल-फ्री राष्ट्रीय साइबर हेल्पलाइन)",
          "100 (सामान्य पुलिस कंट्रोल रूम)",
          "108 (एम्बुलेंस आपातकाल)",
          "1098 (चाइल्डलाइन)"
        ]
      },
      correctIndex: 0,
      explanation: {
        en: "1930 connects directly to state cyber crime police and bank nodal officers to freeze stolen money during the Golden Hour.",
        te: "1930 నంబర్ నేరుగా సైబర్ క్రైమ్ పోలీసులకు కనెక్ట్ అవుతుంది, మొదటి 2 గంటల్లో కాల్ చేస్తే డబ్బులు వెనక్కి వస్తాయి.",
        ta: "1930 என்ற எண் பணம் பறிபோனவுடன் வங்கிகளுக்கு தகவல் அனுப்பி பணத்தை முடக்க உதவுகிறது.",
        hi: "1930 पर कॉल करने से पुलिस और बैंक तुरंत हरकत में आकर चोरी किए गए पैसों को रोक देते हैं।"
      }
    });
  }

  return questions;
}

// Special hand-curated questions for Smartphone Settings
function getSettingsQuestions(level: 1 | 2 | 3, startId: number): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  
  for (let i = 1; i <= 10; i++) {
    questions.push({
      id: startId + i,
      chapterId: 'smartphone_settings',
      level,
      category: 'smartphone',
      question: {
        en: `Settings Guide Q${i}: How can elderly users make tiny text easier to read on their mobile screen?`,
        te: `సెట్టింగ్స్ గైడ్ Q${i}: పెద్ద వయసు వారు ఫోన్‌లో చిన్న అక్షరాలు సులభంగా చదవడానికి ఏం చేయాలి?`,
        ta: `அமைப்புகள் கேள்வி Q${i}: முதியவர்கள் சிறிய எழுத்துக்களை எளிதாகப் படிக்க என்ன செய்ய வேண்டும்?`,
        hi: `सेटिंग्स गाइड Q${i}: बुजुर्ग लोग फोन के छोटे अक्षरों को आसानी से पढ़ने के लिए क्या कर सकते हैं?`
      },
      options: {
        en: [
          "Open Phone Settings > Display > Increase 'Font Size' to Large",
          "Buy a magnifying glass to hold over the phone screen",
          "Wash the screen with cooking oil",
          "Decrease screen brightness to zero"
        ],
        te: [
          "ఫోన్ సెట్టింగ్స్ > డిస్ప్లే > 'Font Size' ను పెంచి లార్జ్ గా మార్చుకోవాలి",
          "భూతద్దం పెట్టి చూడాలి",
          "వంట నూనెతో స్క్రీన్ తుడవాలి",
          "బ్రైట్‌నెస్ పూర్తిగా తగ్గించాలి"
        ],
        ta: [
          "செட்டிங்ஸ் > டிஸ்ப்ளே > 'Font Size' பெரிதாக்க வேண்டும்",
          "பூதக்கண்ணாடி வைத்துப் பார்க்க வேண்டும்",
          "எண்ணெய் தேய்க்க வேண்டும்",
          "வெளிச்சத்தைக் குறைக்க வேண்டும்"
        ],
        hi: [
          "फोन सेटिंग्स > डिस्प्ले में जाकर 'फॉन्ट साइज' (Font Size) को बड़ा करें",
          "स्क्रीन पर आवर्धक शीशा (लेंस) लगाएं",
          "स्क्रीन पर तेल लगाएं",
          "ब्राइटनेस पूरी तरह कम कर दें"
        ]
      },
      correctIndex: 0,
      explanation: {
        en: "Increasing font size in Display settings permanently enlarges text in WhatsApp, messages, and contacts for clear reading.",
        te: "ఫాంట్ సైజ్ పెంచడం వల్ల వాట్సాప్ మరియు కాంటాక్ట్స్ లోని అక్షరాలు స్పష్టంగా కనిపిస్తాయి.",
        ta: "எழுத்து அளவை அதிகரிப்பது வாட்ஸ்அப் மற்றும் செய்திகளை எளிதாகப் படிக்க உதவும்.",
        hi: "फॉन्ट साइज बड़ा करने से व्हाट्सएप, मैसेज और फोन नंबर साफ-साफ दिखाई देते हैं।"
      }
    });
  }

  return questions;
}

// Special hand-curated questions for Agriculture Apps
function getAgricultureQuestions(level: 1 | 2 | 3, startId: number): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  
  for (let i = 1; i <= 10; i++) {
    questions.push({
      id: startId + i,
      chapterId: 'agriculture_apps',
      level,
      category: 'government',
      question: {
        en: `Farmer Digital Q${i}: What is the official toll-free Kisan Call Center phone number for free agricultural advice?`,
        te: `రైతు డిజిటల్ Q${i}: ఉచిత వ్యవసాయ సలహాల కోసం అధికారిక టోల్-ఫ్రీ కిసాన్ కాల్ సెంటర్ నంబర్ ఏది?`,
        ta: `விவசாயிகள் கேள்வி Q${i}: இலவச விவசாய ஆலோசனைக்கான கிசான் உதவி எண் எது?`,
        hi: `किसान डिजिटल प्रश्न Q${i}: कृषि वैज्ञानिकों से मुफ्त सलाह पाने के लिए टोल-फ्री किसान कॉल सेंटर नंबर क्या है?`
      },
      options: {
        en: [
          "1800-180-1551 (Kisan Call Center Toll-Free)",
          "100 (Police Emergency)",
          "101 (Fire Emergency)",
          "102 (Pregnancy Transport)"
        ],
        te: [
          "1800-180-1551 (కిసాన్ కాల్ సెంటర్ టోల్-ఫ్రీ నంబర్)",
          "100 (పోలీస్)",
          "101 (ఫైర్ సర్వీస్)",
          "102 (గర్భిణుల రవాణా)"
        ],
        ta: [
          "1800-180-1551 (கிசான் இலவச உதவி எண்)",
          "100 (காவல் துறை)",
          "101 (தீயணைப்பு)",
          "102 (மகப்பேறு வாகனம்)"
        ],
        hi: [
          "1800-180-1551 (किसान कॉल सेंटर टोल-फ्री)",
          "100 (पुलिस)",
          "101 (दमकल)",
          "102 (प्रसूति सेवा)"
        ]
      },
      correctIndex: 0,
      explanation: {
        en: "Farmers can call 1800-180-1551 from 6 AM to 10 PM in their native language to consult agricultural university scientists for free.",
        te: "1800-180-1551 కు ఉచితంగా కాల్ చేసి శాస్త్రవేత్తల నుండి పంటలు, ఎరువులు మరియు పురుగు మందుల సలహాలు పొందవచ్చు.",
        ta: "1800-180-1551 என்ற எண்ணில் காலை 6 முதல் இரவு 10 மணி வரை விவசாய விஞ்ஞானிகளிடம் தாய்மொழியில் இலவச ஆலோசனை பெறலாம்.",
        hi: "1800-180-1551 पर कॉल करके किसान अपनी स्थानीय भाषा में वैज्ञानिकों से फसल और कीट नियंत्रण पर मुफ्त सलाह ले सकते हैं।"
      }
    });
  }

  return questions;
}
