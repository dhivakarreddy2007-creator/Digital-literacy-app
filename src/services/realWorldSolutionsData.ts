import { Language } from '../types';

export interface RealWorldSolution {
  id: string;
  category: 'lost_device' | 'tickets' | 'buying_phone' | 'upi_banking' | 'scams' | 'government';
  keywords: string[];
  question: Record<Language, string>;
  scenario: Record<Language, string>;
  urgency: 'critical' | 'high' | 'medium' | 'general';
  immediateAction: Record<Language, string>;
  steps: Record<Language, string[]>;
  helpline: {
    name: string;
    number: string;
    actionLabel: string;
    url?: string;
  };
  keyTakeaway: Record<Language, string>;
}

export const realWorldSolutions: RealWorldSolution[] = [
  {
    id: "lost_mobile_phone",
    category: "lost_device",
    keywords: ["lost phone", "phone stolen", "lost mobile", "ceir", "imei", "block sim", "find my device", "పోగొట్టుకున్న ఫోన్", "தொலைந்த போன்", "खोया फोन", "चोरी"],
    question: {
      en: "I lost my mobile phone (or it was stolen). What should I do immediately step-by-step?",
      te: "నా మొబైల్ ఫోన్ పోయింది (లేదా దొంగిలించబడింది). నేను వెంటనే ఏమి చేయాలి?",
      ta: "எனது மொபைல் போன் தொலைந்துவிட்டது (அல்லது திருடப்பட்டது). உடனடியாக என்ன செய்ய வேண்டும்?",
      hi: "मेरा मोबाइल फोन खो गया है या चोरी हो गया है। मुझे तुरंत क्या कदम उठाने चाहिए?"
    },
    scenario: {
      en: "Your smartphone contains your bank OTPs, WhatsApp messages, photos, and UPI apps (PhonePe/GPay). If lost, act within 1 hour to prevent financial theft.",
      te: "మీ మొబైల్‌లో బ్యాంక్ ఓటీపీలు, వాట్సాప్, ఫోటోలు మరియు ఫోన్‌పే/జీపే ఉంటాయి. ఫోన్ పోయిన వెంటనే 1 గంటలోపు చర్యలు తీసుకుంటే బ్యాంక్ ఖాతా సురక్షితంగా ఉంటుంది.",
      ta: "உங்கள் போனில் வங்கி OTP, வாட்ஸ்அப், கூகுள் பே உள்ளது. போன் தொலைந்தால் 1 மணி நேரத்திற்குள் நடவடிக்கை எடுத்தால் பண இழப்பைத் தவிர்க்கலாம்.",
      hi: "आपके फोन में बैंक ओटीपी, व्हाट्सएप और यूपीआई ऐप हैं। फोन खोने पर 1 घंटे के भीतर कार्रवाई करके बैंक खाते को खाली होने से बचाएं।"
    },
    urgency: "critical",
    immediateAction: {
      en: "URGENT 1ST STEP: Borrow a family phone and call your SIM operator (Jio: 198, Airtel: 121, Vi: 199, BSNL: 1503) to BLOCK YOUR SIM CARD immediately so thieves cannot receive your bank OTPs!",
      te: "అత్యవసర మొదటి పని: వెంటనే కుటుంబ సభ్యుల ఫోన్ నుండి మీ నెట్‌వర్క్ కస్టమర్ కేర్‌కు (Jio: 198, Airtel: 121, Vi: 199, BSNL: 1503) కాల్ చేసి మీ సిమ్ కార్డును బ్లాక్ చేయించండి!",
      ta: "அவசர முதல் படி: உடனே குடும்பத்தினர் போன் மூலம் உங்கள் சிம் நெட்வொர்க்கை (Jio: 198, Airtel: 121, Vi: 199, BSNL: 1503) தொடர்பு கொண்டு சிம்மை உடனே பிளாக் செய்யுங்கள்!",
      hi: "सबसे पहला जरूरी काम: तुरंत परिवार के फोन से अपनी सिम कंपनी (Jio: 198, Airtel: 121, Vi: 199, BSNL: 1503) को कॉल करके अपनी सिम ब्लॉक कराएं ताकि चोर ओटीपी न पा सके!"
    },
    steps: {
      en: [
        "1. Block SIM: Call your telecom provider to suspend the SIM. Go to a nearby SIM store with your Aadhaar to get a duplicate SIM with the same number.",
        "2. Remote Lock & Erase: On another phone or computer, open android.com/find (Google Find My Device) and log in with your Gmail. Tap 'Secure Device' or 'Erase Device' to wipe private photos.",
        "3. Freeze Bank & UPI: Call your bank helpline to temporarily block netbanking and UPI access linked to that number.",
        "4. File Police Lost Report: Go to your local police station or state police portal (like TS COP, MeeSeva, or Tamil Nadu Police Citizen Portal) to register a Lost Mobile report and get a receipt.",
        "5. Block IMEI on Sanchar Saathi (CEIR): Visit ceir.sancharsaathi.gov.in (Government of India). Enter your phone's 15-digit IMEI number, police complaint copy, and ID proof. This blocks the phone's hardware across all telecom networks in India, turning it into a useless piece of metal for the thief!",
        "6. When Police Find It: Return to ceir.sancharsaathi.gov.in and click 'Unblock' to easily start using your phone again."
      ],
      te: [
        "1. సిమ్ బ్లాక్ చేయండి: కస్టమర్ కేర్ ద్వారా సిమ్ తాత్కాలికంగా ఆపండి. మీ ఆధార్ కార్డుతో సమీపంలోని మొబైల్ స్టోర్‌కు వెళ్లి అదే నంబర్‌తో డూప్లికేట్ సిమ్ తీసుకోండి.",
        "2. రిమోట్ లాక్ & ఎరేజ్: వేరే ఫోన్‌లో android.com/find ఓపెన్ చేసి మీ జీమెయిల్‌తో లాగిన్ అవ్వండి. 'Secure Device' లేదా 'Erase Device' నొక్కి ఫోటోలు తుడిచివేయండి.",
        "3. బ్యాంక్ యూపీఐ ఫ్రీజ్: మీ బ్యాంక్ కస్టమర్ కేర్‌కు కాల్ చేసి మీ ఫోన్ నంబర్‌కు లింక్ అయిన యూపీఐ/నెట్‌బ్యాంకింగ్‌ను తాత్కాలికంగా నిలిపివేయమని చెప్పండి.",
        "4. పోలీస్ కంప్లైంట్: స్థానిక పోలీస్ స్టేషన్ లేదా ఆన్‌లైన్ సిటిజన్ పోర్టల్‌లో ఫోన్ మిస్సింగ్ కంప్లైంట్ ఇచ్చి రసీదు తీసుకోండి.",
        "5. సంచార్ సాథీ (CEIR) లో IMEI బ్లాక్: ceir.sancharsaathi.gov.in ప్రభుత్వ వెబ్‌సైట్‌కు వెళ్లి మీ ఫోన్ 15 అంకెల IMEI నంబర్ మరియు పోలీస్ రసీదుతో రిపోర్ట్ చేయండి. దీనివల్ల దొంగ ఏ సిమ్ వేసినా ఫోన్ పనిచేయదు!",
        "6. ఫోన్ దొరికినప్పుడు: మళ్లీ అదే పోర్టల్‌లో 'Unblock' పై నొక్కి ఫోన్‌ను యథావిధిగా వాడుకోవచ్చు."
      ],
      ta: [
        "1. சிம் கார்டை முடக்குங்கள்: வாடிக்கையாளர் சேவை மூலம் சிம்மை பிளாக் செய்துவிட்டு, ஆதார் மூலம் அதே எண்ணில் புதிய சிம் கார்டு பெறுங்கள்.",
        "2. கூகுள் Find My Device: மற்றொரு போனில் android.com/find திறந்து உங்கள் ஜிமெயில் மூலம் 'Erase Device' கொடுத்து விபரங்களை அழிக்கவும்.",
        "3. வங்கி கணக்கு பாதுகாப்பு: உங்கள் வங்கியைத் தொடர்பு கொண்டு தற்காலிகமாக UPI மற்றும் நெட் பேங்கிங்கை நிறுத்துங்கள்.",
        "4. காவல்துறை புகார்: காவல் நிலையத்தில் அல்லது ஆன்லைன் போர்ட்டலில் புகார் செய்து ஒப்புகைச் சீட்டு (CSR) பெறுங்கள்.",
        "5. சஞ்சார் சாதி (CEIR) போர்ட்டல்: ceir.sancharsaathi.gov.in தளத்தில் புகாரளித்து போனின் 15 இலக்க IMEI எண்ணை முடக்குங்கள். திருடன் எந்த சிம் போட்டாலும் போன் இயங்காது.",
        "6. போன் திரும்பக் கிடைத்தால்: இதே தளத்தில் 'Unblock' செய்து மீண்டும் பயன்படுத்தலாம்."
      ],
      hi: [
        "1. सिम ब्लॉक कराएं: तुरंत कस्टमर केयर से सिम बंद कराएं और आधार कार्ड ले जाकर नजदीकी स्टोर से उसी नंबर की नई सिम निकलवाएं।",
        "2. गूगल Find My Device: दूसरे फोन में android.com/find खोलें और अपनी जीमेल आईडी से लॉगिन करके 'Secure Device' या 'Erase Device' से डेटा मिटा दें।",
        "3. बैंक व यूपीआई फ्रीज: बैंक कस्टमर केयर को फोन करके बताएं कि फोन खो गया है, ताकि यूपीआई ट्रांजैक्शन ब्लॉक हो जाएं।",
        "4. पुलिस शिकायत: थाने में या राज्य पुलिस के ऑनलाइन पोर्टल पर फोन गुमशुदगी की रिपोर्ट दर्ज कराकर पावती (रसीद) लें।",
        "5. संचार साथी (CEIR) पर IMEI ब्लॉक करें: भारत सरकार के पोर्टल ceir.sancharsaathi.gov.in पर जाएं। 15 अंकों का आईएमईआई नंबर और पुलिस रसीद अपलोड करें। फोन पूरे देश के किसी भी नेटवर्क पर बेकार हो जाएगा!",
        "6. फोन मिलने पर: उसी पोर्टल पर 'Unblock' करके फोन फिर से चालू कर सकते हैं।"
      ]
    },
    helpline: {
      name: "Sanchar Saathi Portal & Cyber Helpline",
      number: "1930",
      actionLabel: "Visit Sanchar Saathi (CEIR)",
      url: "https://ceir.sancharsaathi.gov.in"
    },
    keyTakeaway: {
      en: "Remember: Block SIM first, then Block IMEI on CEIR portal. Never delay beyond 24 hours.",
      te: "గుర్తుంచుకోండి: మొదట సిమ్ బ్లాక్ చేయండి, తరువాత CEIR పోర్టల్‌లో IMEI బ్లాక్ చేయండి.",
      ta: "நினைவில் கொள்க: முதலில் சிம் கார்டை பிளாக் செய்யுங்கள், பின்னர் CEIR தளத்தில் IMEI முடக்குங்கள்.",
      hi: "याद रखें: पहले सिम ब्लॉक कराएं, फिर CEIR पोर्टल पर IMEI ब्लॉक करें।"
    }
  },
  {
    id: "missed_bus_train_ticket_refund",
    category: "tickets",
    keywords: ["missed bus", "bought ticket", "ticket money refund", "bus refund", "train refund", "tdr", "irctc", "redbus", "tsrtc", "apsrtc", "బస్సు టికెట్", "பேருந்து டிக்கெட்", "ट्रेन टिकट", "बस टिकट रिफंड"],
    question: {
      en: "I missed my bus or train, but I bought my ticket online. What should I do to get my ticket money back?",
      te: "నేను ఆన్‌లైన్‌లో బస్సు లేదా రైలు టికెట్ కొన్నాను, కానీ బస్సు మిస్సయింది. నా టికెట్ డబ్బులు వెనక్కి రావాలంటే ఏం చేయాలి?",
      ta: "நான் ஆன்லைனில் பஸ் அல்லது ரயில் டிக்கெட் வாங்கினேன், ஆனால் பேருந்து தவறிவிட்டது. டிக்கெட் பணத்தை திரும்பப் பெற என்ன செய்ய வேண்டும்?",
      hi: "मैंने ऑनलाइन टिकट खरीदी थी लेकिन बस या ट्रेन छूट गई। टिकट का पैसा वापस पाने के लिए मुझे क्या करना चाहिए?"
    },
    scenario: {
      en: "You booked an online ticket on TSRTC/APSRTC/KSRTC/RedBus or IRCTC, but due to traffic or emergency, you reached late after departure.",
      te: "మీరు ఆర్టీసీ లేదా రెడ్‌బస్ లేదా ఐఆర్‌సీటీసీలో టికెట్ తీసుకున్నారు, కానీ ట్రాఫిక్ లేదా ఆలస్యం వల్ల బస్సు వెళ్లిపోయింది.",
      ta: "நீங்கள் அரசு அல்லது தனியார் பேருந்து/ரயில் டிக்கெட் எடுத்தீர்கள், ஆனால் தாமதமாக சென்றதால் பேருந்து புறப்பட்டுவிட்டது.",
      hi: "आपने सरकारी बस, रेडबस या आईआरसीटीसी से टिकट लिया था, लेकिन लेट होने के कारण बस या ट्रेन छूट गई।"
    },
    urgency: "high",
    immediateAction: {
      en: "FOR BUS: If you are at the bus station depot, immediately go to the RTC Chief Traffic Controller / Enquiry Counter. Often they can re-endorse your ticket for the next scheduled bus to the same route for free or with a small difference!",
      te: "బస్సు కోసం: మీరు బస్టాండ్‌లో ఉంటే వెంటనే ఆర్టీసీ డిపో ఎంక్వైరీ లేదా కంట్రోలర్ దగ్గరకు వెళ్లండి. చాలాసార్లు వారు అదే రూట్‌లో తర్వాత వచ్చే బస్సులో మీ టికెట్‌ను అనుమతిస్తారు!",
      ta: "பேருந்துக்கு: நீங்கள் பேருந்து நிலையத்தில் இருந்தால் உடனே தலைமை போக்குவரத்து கட்டுப்பாட்டாளர் (Controller) அலுவலகத்தை அணுகவும். அடுத்த பேருந்தில் பயணிக்க வாய்ப்பு தருவார்கள்!",
      hi: "बस के लिए: यदि आप बस स्टैंड पर हैं, तो तुरंत स्टेशन कंट्रोलर/पूछताछ काउंटर पर जाएं। अक्सर वे उसी रूट की अगली बस में आपके टिकट को एडजस्ट कर देते हैं!"
    },
    steps: {
      en: [
        "1. Check RTC Cancellation Rules: If the bus hasn't departed yet (even by 15-30 minutes before), cancel online on the TSRTC / APSRTC / KSRTC portal or RedBus app. You get 50% to 75% refund.",
        "2. If Bus Was Cancelled or Missed Due to RTC Fault: You are entitled to a 100% FULL REFUND. Visit the bus depot counter or file an online refund claim on the official booking portal.",
        "3. RedBus / AbhiBus Bookings: Open the App -> 'My Bookings' -> Select Missed Ticket -> Tap 'Help / Dispute' -> Choose 'Bus departed before scheduled time' or 'Missed Bus'. Their customer support investigates GPS logs.",
        "4. For IRCTC Trains: If you missed your train, you must file a TDR (Ticket Deposit Receipt) on irctc.co.in or IRCTC Rail Connect App within 1 hour after train departure. Select reason 'Passenger Not Travelled'.",
        "5. Refund Timeline: Approved refunds return automatically to the same source (UPI/Bank Account) within 3 to 7 working days."
      ],
      te: [
        "1. సమయం ఉంటే రద్దు చేయండి: బస్సు బయలుదేరడానికి ఇంకా కొద్ది సమయం ఉంటే ఆన్‌లైన్‌లో క్యాన్సిల్ చేయండి. 50% నుండి 75% వరకు డబ్బు వెనక్కి వస్తుంది.",
        "2. ఆర్టీసీ బస్సు ఆలస్యమైతే లేదా రద్దయితే: మీకు 100% పూర్తి డబ్బులు వాపసు వస్తాయి. డిపో కౌంటర్‌లో రశీదు తీసుకోవచ్చు లేదా ఆన్‌లైన్‌లో రీఫండ్ క్లెయిమ్ చేయవచ్చు.",
        "3. రెడ్‌బస్ / అభిబస్ ద్వారా కొంటే: యాప్ ఓపెన్ చేసి 'My Bookings' లో ఆ టికెట్ ఎంచుకోండి -> 'Help' పై నొక్కి 'Missed Bus' కింద కంప్లైంట్ నమోదు చేయండి.",
        "4. ఐఆర్‌సీటీసీ రైలు టికెట్ అయితే: రైలు బయలుదేరిన 1 గంటలోపు irctc.co.in లో లేదా IRCTC యాప్‌లో TDR (Ticket Deposit Receipt) ఫైల్ చేయాలి. 'Passenger Not Travelled' రీజన్ పెట్టాలి.",
        "5. డబ్బులు ఎప్పుడు వస్తాయి: రీఫండ్ అప్రూవ్ అయిన తర్వాత 3 నుండి 7 రోజుల్లో మీ బ్యాంక్ లేదా యూపీఐ ఖాతాలోకి జమ అవుతాయి."
      ],
      ta: [
        "1. ஆன்லைனில் ரத்து செய்தல்: பேருந்து புறப்படும் முன் நேரமிருந்தால் ஆப்பில் உடனே கேன்சல் செய்யவும். 50% வரை பணம் திரும்ப வரும்.",
        "2. பேருந்து வராத காரணத்தினால் தவறினால்: 100% முழு பணமும் திரும்பப் பெற உரிமை உண்டு. டெப்போ மேலாளரிடம் ஒப்புதல் பெறவும்.",
        "3. RedBus / தனியார் ஆப்: ஆப்பில் My Bookings சென்று 'Dispute Ticket' கொடுத்து காரணம் பதிவு செய்யவும்.",
        "4. ரயில் டிக்கெட் என்றால்: ரயில் புறப்பட்டு 1 மணி நேரத்திற்குள் IRCTC தளத்தில் TDR (Ticket Deposit Receipt) பதிவு செய்ய வேண்டும்.",
        "5. பணம் வரவு: 3 முதல் 7 வேலை நாட்களில் உங்கள் வங்கிக் கணக்கில் பணம் திரும்ப வரும்."
      ],
      hi: [
        "1. पहले कैंसिलेशन चेक करें: अगर बस चलने में थोड़ा समय बाकी है, तो ऑनलाइन ऐप पर तुरंत कैंसिल करें। 50% से 75% तक रिफंड मिल जाता है।",
        "2. अगर बस कंपनी की गलती से छूटी: तो आपको 100% पूरा रिफंड मिलेगा। बस स्टैंड मास्टर से मिलकर स्लिप लें या ऑनलाइन क्लेम करें।",
        "3. रेडबस या ऑनलाइन पोर्टल: ऐप में 'My Bookings' में जाकर 'Help' पर क्लिक करें और टिकट डिस्प्यूट दर्ज करें।",
        "4. आईआरसीटीसी ट्रेन टिकट: ट्रेन छूटने के 1 घंटे के भीतर irctc.co.in पर TDR (Ticket Deposit Receipt) फाइल करें। रीज़न में 'Passenger Not Travelled' चुनें।",
        "5. रिफंड कब आएगा: क्लेम पास होने के 3 से 7 दिनों के भीतर पैसा आपके मूल बैंक खाते में वापस आ जाता है।"
      ]
    },
    helpline: {
      name: "IRCTC Customer Support & RTC Helpline",
      number: "139",
      actionLabel: "Call Indian Railways 139",
      url: "https://www.irctc.co.in"
    },
    keyTakeaway: {
      en: "Always file TDR within 1 hour for trains, and talk to the station controller immediately for state buses!",
      te: "రైళ్లకు 1 గంటలోపు TDR ఫైల్ చేయండి, బస్సులకు వెంటనే బస్టాండ్ కంట్రోలర్‌ను సంప్రదించండి!",
      ta: "ரயில்களுக்கு 1 மணி நேரத்திற்குள் TDR பதிவு செய்யவும், பஸ்களுக்கு உடனடியாக அதிகாரியை அணுகவும்!",
      hi: "ट्रेन के लिए 1 घंटे के भीतर टीडीआर (TDR) भरें और बस के लिए तुरंत स्टेशन मास्टर से बात करें!"
    }
  },
  {
    id: "buying_new_phone_recommendation",
    category: "buying_phone",
    keywords: ["buy new phone", "which company is best", "change mobile", "best smartphone", "samsung", "redmi", "realme", "oneplus", "motorola", "oppo", "vivo", "కొత్త ఫోన్", "எந்த போன் வாங்கலாம்", "नया फोन कौन सा लें"],
    question: {
      en: "I need to change my mobile and want to buy a new phone. Which company is best for my needs?",
      te: "నేను కొత్త మొబైల్ కొనాలనుకుంటున్నాను. ఏ కంపెనీ ఫోన్ నాకు చాలా మంచిది మరియు నమ్మకమైనది?",
      ta: "நான் புதிய மொபைல் வாங்க வேண்டும். எந்த நிறுவனத்தின் போன் சிறந்தது மற்றும் நீடித்து உழைக்கும்?",
      hi: "मुझे नया मोबाइल फोन खरीदना है। मेरी जरूरत के हिसाब से कौन सी कंपनी का फोन सबसे अच्छा रहेगा?"
    },
    scenario: {
      en: "Choosing the right mobile brand depends on your budget, whether it is for parents/elders, daily farming/shop usage, or high-speed gaming.",
      te: "సరైన కంపెనీని ఎంచుకోవడం మీ బడ్జెట్, ఇంట్లో పెద్దవారి కోసం కొంటున్నారా లేక రోజువారీ వ్యాపారం లేదా పిల్లల చదువుల కోసమా అనే దానిపై ఆధారపడి ఉంటుంది.",
      ta: "உங்கள் பட்ஜெட், பெரியவர்கள் பயன்படுத்துவதா அல்லது தினசரி பயன்பாட்டிற்கா என்பதைப் பொறுத்து சரியான பிராண்டைத் தேர்வு செய்ய வேண்டும்.",
      hi: "सही फोन का चुनाव आपके बजट और जरूरत पर निर्भर करता है—बुजुर्गों के लिए, खेती/दुकान के लिए या भारी इस्तेमाल के लिए।"
    },
    urgency: "general",
    immediateAction: {
      en: "QUICK GUIDE SUMMARY: For Parents/Elders -> Samsung Galaxy M/F series (Easy Mode, No spam ads). For Best Battery & Rough Use -> Motorola Moto G series. For Budget ₹10,000-₹15,000 -> Redmi or Realme. For Superfast Charging & Smoothness (₹18,000+) -> OnePlus Nord series.",
      te: "త్వరిత సలహా: పెద్దవారి కోసం -> Samsung Galaxy M/F సిరీస్ (పెద్ద అక్షరాలు, ప్రకటనలు ఉండవు). ఎక్కువ బ్యాటరీ & క్లీన్ ఫోన్ -> Motorola Moto G సిరీస్. తక్కువ బడ్జెట్ ₹10-15 వేలు -> Redmi లేదా Realme. వేగవంతమైన ఛార్జింగ్ -> OnePlus Nord.",
      ta: "சுருக்கமான வழிகாட்டி: பெரியவர்களுக்கு -> Samsung (எளிய முறை, விளம்பரங்கள் இல்லை). அதிக பேட்டரி -> Motorola. பட்ஜெட் ₹10,000-15,000 -> Redmi / Realme. வேகமான செயல்பாடு -> OnePlus Nord.",
      hi: "त्वरित सलाह: बुजुर्गों के लिए -> Samsung Galaxy (सरल मोड, विज्ञापन नहीं). बड़ी बैटरी व साफ सॉफ्टवेयर -> Motorola. बजट 10-15 हजार -> Redmi या Realme. फास्ट चार्जिंग -> OnePlus Nord."
    },
    steps: {
      en: [
        "1. For Grandparents & Parents (₹9,000 - ₹14,000): Samsung Galaxy M15 5G / F15 5G. Why: Huge 6,000 mAh battery (lasts 2 full days), clear loud earpiece, 'Easy Mode' with large fonts, and trusted Samsung brand with service centers in every town.",
        "2. For Clean, Ad-Free Everyday Use: Motorola Moto G34 / G45 / G54. Why: Pure clean Android software with zero unwanted game notifications, 5,000 mAh battery, water-repellent design.",
        "3. For Best Features Under ₹12,000: Redmi 12 5G / 13C 5G or Realme Narzo 70x. Why: Bright big screen for YouTube videos, fast 33W charger in box, great value for money.",
        "4. For Youth, Great Camera & 80W Fast Charging (₹15,000 - ₹22,000): OnePlus Nord CE 4 Lite / Nord CE 4. Why: Charges to 100% in 30 minutes, 120Hz smooth AMOLED display, durable build.",
        "5. Key Rules When Buying: Never buy less than 6GB RAM and 128GB Storage (32GB/64GB fills up quickly with WhatsApp). Look for at least 5,000 mAh battery and 5G network support.",
        "6. Always buy from authorized retail stores or official online portals (Amazon / Flipkart / Brand Store) with GST invoice for 1-year warranty."
      ],
      te: [
        "1. తల్లిదండ్రులు, పెద్దవారికి (₹9,000 - ₹14,000): Samsung Galaxy M15 5G / F15 5G. ఎందుకంటే: 6,000 mAh భారీ బ్యాటరీ (2 రోజులు వస్తుంది), పెద్ద అక్షరాల 'Easy Mode', అనవసరమైన నకిలీ యాప్స్ ఉండవు, ప్రతి పట్టణంలో సర్వీస్ సెంటర్ ఉంటుంది.",
        "2. క్లీన్ సాఫ్ట్‌వేర్, ప్రకటనలు లేని ఫోన్: Motorola Moto G34 / G45. ఎందుకంటే: స్వచ్ఛమైన ఆండ్రాయిడ్, చేతిలో పట్టుకోవడానికి సౌకర్యంగా ఉంటుంది.",
        "3. ₹12,000 లోపు ఎక్కువ ఫీచర్లు: Redmi 12 5G లేదా Realme Narzo 70x. ఎందుకంటే: యూట్యూబ్ కోసం పెద్ద స్క్రీన్, బాక్స్‌లోనే ఫాస్ట్ ఛార్జర్.",
        "4. వేగవంతమైన ఛార్జింగ్ & కెమెరా (₹15,000 - ₹22,000): OnePlus Nord CE 4 Lite. ఎందుకంటే: 30 నిమిషాల్లో ఫుల్ ఛార్జింగ్, బెస్ట్ డిస్‌ప్లే.",
        "5. గుర్తుంచుకోవాల్సిన నియమాలు: కనీసం 6GB ర్యామ్ మరియు 128GB స్టోరేజ్ ఉన్న ఫోన్ మాత్రమే కొనండి (వాట్సాప్ వీడియోల వల్ల 64GB త్వరగా నిండిపోతుంది). 5G సపోర్ట్ తప్పనిసరిగా ఉండాలి.",
        "6. బిల్లు రసీదు తప్పనిసరిగా తీసుకుని 1 సంవత్సరం వారంటీ ఉండేలా చూసుకోండి."
      ],
      ta: [
        "1. பெற்றோருக்கு / முதியவர்களுக்கு (₹9,000 - ₹14,000): Samsung Galaxy M15 5G. 6,000 mAh பெரிய பேட்டரி, 2 நாட்கள் தாங்கும், பெரிய எழுத்துக்கள் வசதி, தேவையற்ற விளம்பரங்கள் இல்லை.",
        "2. விளம்பரமில்லாத தூய ஆண்ட்ராய்டு: Motorola Moto G34 / G45. சுத்தமான மென்பொருள், எளிமையான பயன்பாடு.",
        "3. ₹12,000 பட்ஜெட்டில்: Redmi 12 5G அல்லது Realme Narzo 70x. சிறந்த திரை, வேகமாக இயங்கும் வசதி.",
        "4. அதிவேக சார்ஜிங் & கேமரா (₹15,000+): OnePlus Nord CE 4. 30 நிமிடங்களில் முழு சார்ஜ் ஆகும்.",
        "5. வாங்கும் போது கவனிக்க வேண்டியவை: குறைந்தது 6GB RAM மற்றும் 128GB மெமரி இருக்க வேண்டும். 5,000 mAh பேட்டரி மற்றும் 5G ஆதரவு அவசியம்.",
        "6. அதிகாரப்பூர்வ கடைகளில் GST பில் உடன் வாங்கினால் மட்டுமே 1 வருட வாரண்டி கிடைக்கும்."
      ],
      hi: [
        "1. माता-पिता और बुजुर्गों के लिए (₹9,000 - ₹14,000): Samsung Galaxy M15 5G / F15 5G। 6,000 mAh की बड़ी बैटरी (2 दिन तक चलती है), बड़े अक्षरों वाला ईज़ी मोड, कोई फालतू विज्ञापन नहीं और हर शहर में सर्विस सेंटर।",
        "2. साफ-सुथरे फोन के लिए: Motorola Moto G34 / G45। बिना किसी फालतू ऐप व विज्ञापन के शुद्ध स्टॉक एंड्रॉइड, 5,000 mAh बैटरी।",
        "3. ₹12,000 के अंदर बेहतरीन वैल्यू: Redmi 12 5G या Realme Narzo 70x। बड़ी और चमकदार स्क्रीन, बॉक्स में तेज चार्जर।",
        "4. तेज चार्जिंग और शानदार कैमरा (₹15,000 - ₹22,000): OnePlus Nord CE 4 Lite। केवल 30 मिनट में फुल चार्ज, स्मूथ डिस्प्ले।",
        "5. फोन खरीदते समय 3 जरूरी बातें: कम से कम 6GB RAM और 128GB स्टोरेज लें (WhatsApp के कारण 64GB जल्दी भर जाता है), 5000 mAh बैटरी और 5G सपोर्ट जरूर देखें।",
        "6. हमेशा पक्के जीएसटी बिल के साथ खरीदें ताकि 1 साल की वारंटी मिले।"
      ]
    },
    helpline: {
      name: "National Consumer Helpline for Electronics",
      number: "1915",
      actionLabel: "Call Consumer Helpline 1915",
      url: "https://consumerhelpline.gov.in"
    },
    keyTakeaway: {
      en: "Rule of thumb: Choose Samsung for parents & durability, Motorola for zero ads, and OnePlus/Realme for fast charging.",
      te: "పెద్దవారికి శామ్‌సంగ్, క్లీన్ సాఫ్ట్‌వేర్‌కు మోటోరోలా, ఫాస్ట్ ఛార్జింగ్‌కు వన్‌ప్లస్ ఉత్తమం.",
      ta: "பெரியவர்களுக்கு சாம்சங், தூய மென்பொருளுக்கு மோட்டோரோலா, வேகத்திற்கு ஒன்பிளஸ் சிறந்தது.",
      hi: "बुजुर्गों के लिए सैमसंग, बिना विज्ञापन के लिए मोटोरोला और फास्ट चार्जिंग के लिए वनप्लस चुनें।"
    }
  },
  {
    id: "upi_money_debited_merchant_not_received",
    category: "upi_banking",
    keywords: ["upi pending", "money debited", "merchant not received", "gpay pending", "phonepe failed", "utr number", "డబ్బులు కట్ అయ్యాయి", "பணம் வரவில்லை", "पैसे कट गए"],
    question: {
      en: "Money was debited from my bank account, but the shopkeeper says they did not receive it. What should I do?",
      te: "నా బ్యాంక్ ఖాతా నుండి డబ్బు కట్ అయింది, కానీ దుకాణదారుడికి డబ్బు రాలేదని అంటున్నాడు. నేను ఏం చేయాలి?",
      ta: "எனது வங்கிக் கணக்கிலிருந்து பணம் எடுக்கப்பட்டுவிட்டது, ஆனால் கடைக்காரருக்கு வரவில்லை என்கிறார். நான் என்ன செய்ய வேண்டும்?",
      hi: "मेरे खाते से पैसे कट गए हैं लेकिन दुकानदार कह रहा है कि उसे पैसे नहीं मिले। मुझे क्या करना चाहिए?"
    },
    scenario: {
      en: "This is a common UPI server timeout issue. Do NOT make a second payment immediately without checking the status.",
      te: "ఇది నెట్‌వర్క్ సమస్య వల్ల జరిగే సాధారణ సాంకేతిక లోపం. వెంటనే రెండోసారి పేమెంట్ చేయవద్దు.",
      ta: "இது நெட்வொர்க் தாமதத்தினால் நடக்கும் சாதாரண விஷயம். அவசரப்பட்டு உடனே இரண்டாவது முறை பணம் செலுத்தாதீர்கள்.",
      hi: "यह सर्वर धीमा होने के कारण होता है। घबराएं नहीं और तुरंत दोबारा पेमेंट न करें।"
    },
    urgency: "high",
    immediateAction: {
      en: "DO NOT PANIC: Note down the 12-digit UPI Reference / UTR Number shown in your Google Pay / PhonePe transaction receipt. Show this UTR to the shopkeeper—it proves the money left your bank!",
      te: "కంగారు పడవద్దు: మీ ఫోన్‌పే/జీపే ట్రాన్సాక్షన్ హిస్టరీలో కనిపించే 12 అంకెల యూటీఆర్ (UTR / UPI Ref No) నంబర్‌ను రాసుకోండి. ఇది మీ నుండి డబ్బు పోయిందని రుజువు!",
      ta: "பயப்பட வேண்டாம்: உங்கள் ஜிபே/போன்பே ரசீதில் உள்ள 12 இலக்க UTR எண்ணை குறித்துக் கொண்டு கடைக்காரரிடம் காட்டுங்கள்.",
      hi: "घबराएं नहीं: गूगल पे या फोनपे में दिख रहा 12 अंकों का यूपीआई रेफरेंस / UTR नंबर नोट करें और दुकानदार को दिखाएं।"
    },
    steps: {
      en: [
        "1. Check Transaction Status: Open GPay/PhonePe -> History. If status says 'Payment Processing' or 'Pending', wait 10-15 minutes. It will either succeed or fail.",
        "2. If Status is 'Success' but Shopkeeper has not received: The delay is on the shopkeeper's bank end. The 12-digit UTR confirms settlement.",
        "3. Raise Dispute in App: Tap on the transaction -> 'Having issues?' or 'Contact Support' -> Select 'Money debited but payee not received'.",
        "4. Auto-Reversal Rule (RBI Mandate): If the payment failed, the money MUST be refunded back to your bank account within T+1 working day (24-48 hours). If delayed beyond 48 hours, RBI mandates the bank to pay you ₹100 per day compensation!",
        "5. Escalation: If not credited within 48 hours, file a complaint on npci.org.in/what-we-do/upi/dispute-redressal-mechanism."
      ],
      te: [
        "1. స్టేటస్ చూడండి: ఫోన్‌పే/జీపే హిస్టరీలో 'Pending' అని ఉంటే 15 నిమిషాలు వేచి ఉండండి.",
        "2. 'Success' అని ఉంటే: డబ్బు మీ బ్యాంక్ నుండి విడుదలైంది, దుకాణదారుడి బ్యాంక్ సర్వర్ వల్ల ఆలస్యమైంది.",
        "3. యాప్‌లో ఫిర్యాదు: ఆ లావాదేవీ పై నొక్కి 'Contact Support' ద్వారా 'Money debited but not credited' ఎంచుకోండి.",
        "4. ఆర్‌బీఐ రూల్: ఫెయిల్ అయిన లావాదేవీల డబ్బులు 24 నుండి 48 గంటల్లో మీ ఖాతాలోకి వాపసు వస్తాయి. ఆలస్యమైతే రోజుకు ₹100 నష్టపరిహారం చెల్లించాలి.",
        "5. ఎన్‌పీసీఐ పోర్టల్: 48 గంటల తర్వాత కూడా రాకపోతే npci.org.in లో UTR నంబర్‌తో ఫిర్యాదు చేయండి."
      ],
      ta: [
        "1. ஸ்டேட்டஸ் பார்க்கவும்: ஹிஸ்டரியில் 'Pending' என்றால் 15 நிமிடம் காத்திருங்கள்.",
        "2. 'Success' என்றால் பணம் போய்விட்டது; கடைக்காரரின் வங்கி சர்வரில் தாமதம்.",
        "3. ஆப்பில் புகார்: அந்த பரிவர்த்தனையை தொட்டு 'Contact Support' கிளிக் செய்யவும்.",
        "4. 48 மணி நேர விதி: பணம் தோல்வியடைந்தால் 24-48 மணி நேரத்தில் உங்கள் கணக்கிற்கு தானாக திரும்பி வந்துவிடும்.",
        "5. NPCI தளம்: பணம் வரவில்லை என்றால் npci.org.in தளத்தில் UTR எண்ணுடன் புகார் பதிவு செய்யவும்."
      ],
      hi: [
        "1. स्टेटस चेक करें: ऐप हिस्ट्री में देखें। अगर 'Pending' है तो 10-15 मिनट प्रतीक्षा करें।",
        "2. अगर 'Success' है: तो पैसा आपके बैंक से कट चुका है और दुकानदार के बैंक में पहुंचने में तकनीकी देरी है।",
        "3. ऐप में शिकायत करें: ट्रांजैक्शन पर क्लिक करके 'Contact Support' में शिकायत दर्ज करें।",
        "4. आरबीआई का 48 घंटे का नियम: अगर पेमेंट फेल होता है तो 24 से 48 घंटे में पैसा खुद आपके खाते में वापस आ जाता है। देरी होने पर बैंक ₹100 प्रतिदिन हर्जाना देने के लिए बाध्य है।",
        "5. NPCI शिकायत: 48 घंटे बाद भी पैसा न आए तो npci.org.in पर UTR नंबर डालकर शिकायत दर्ज करें।"
      ]
    },
    helpline: {
      name: "NPCI UPI Dispute Portal",
      number: "1800-120-1740",
      actionLabel: "Visit NPCI Dispute Portal",
      url: "https://www.npci.org.in/what-we-do/upi/dispute-redressal-mechanism"
    },
    keyTakeaway: {
      en: "Never pay twice immediately. The 12-digit UTR is your official proof, and money auto-reverses in 24-48 hours.",
      te: "వెంటనే రెండోసారి డబ్బులు పంపవద్దు. 12 అంకెల యూటీఆర్ నంబర్ మీ రుజువు, 24-48 గంటల్లో డబ్బులు వాపసు వస్తాయి.",
      ta: "உடனே மறுபடி பணம் அனுப்பாதீர்கள். UTR எண் உங்களின் ஆதாரம்; 48 மணி நேரத்தில் பணம் திரும்ப வரும்.",
      hi: "तुरंत दोबारा भुगतान न करें। 12 अंकों का UTR नंबर ही आपका पक्का सबूत है, पैसा 48 घंटे में वापस आ जाता है।"
    }
  },
  {
    id: "fake_electricity_bill_disconnection_scam",
    category: "scams",
    keywords: ["electricity bill", "power cut tonight", "fake sms", "bijli bill", "apk download", "కరెంట్ బిల్లు", "மின்சார கட்டணம்", "बिजली बिल फ्रॉड"],
    question: {
      en: "I received an SMS: 'Your electricity power will be disconnected at 9:30 PM tonight due to unpaid bill. Call this number'. Is it real?",
      te: "నాకు ఎస్సెమ్మెస్ వచ్చింది: 'గత నెల కరెంట్ బిల్లు చెల్లించనందున ఈ రాత్రి 9:30 గంటలకు విద్యుత్ నిలిపివేయబడుతుంది. వెంటనే ఈ నంబర్‌కు కాల్ చేయండి'. ఇది నిజమేనా?",
      ta: "'மின் கட்டணம் செலுத்தாததால் இன்று இரவு 9:30 மணிக்கு மின் இணைப்பு துண்டிக்கப்படும். உடனே இந்த எண்ணை அழைக்கவும்' என மெசேஜ் வந்துள்ளது. இது உண்மையா?",
      hi: "मुझे एसएमएस आया: 'बिजली बिल न भरने के कारण आज रात 9:30 बजे बिजली काट दी जाएगी। तुरंत इस नंबर पर फोन करें।' क्या यह सही है?"
    },
    scenario: {
      en: "THIS IS A 100% FAKE DANGEROUS SCAM! Scammers send bulk SMS from personal 10-digit mobile numbers trying to steal your bank money.",
      te: "ఇది 100% నకిలీ మోసం! సైబర్ నేరగాళ్లు సాధారణ మొబైల్ నంబర్ల నుండి ఇలాంటి మెసేజ్లు పంపి మీ బ్యాంక్ ఖాతాను ఖాళీ చేయడానికి ప్రయత్నిస్తారు.",
      ta: "இது 100% மோசடி! சாதாரண 10 இலக்க மொபைல் எண்ணிலிருந்து வரும் இத்தகைய மெசேஜ்கள் உங்கள் வங்கிப் பணத்தைத் திருடவே அனுப்பப்படுகின்றன.",
      hi: "यह 100% फर्जी और खतरनाक फ्रॉड है! साइबर ठग 10 अंकों के साधारण मोबाइल नंबरों से ऐसे मैसेज भेजकर बैंक खाता खाली करते हैं।"
    },
    urgency: "critical",
    immediateAction: {
      en: "NEVER CALL THE PHONE NUMBER IN THE SMS AND NEVER CLICK ANY LINK OR INSTALL ANY .APK APP! Electricity boards NEVER send disconnection notices from personal mobile numbers!",
      te: "ఆ మెసేజ్‌లోని ఫోన్ నంబర్‌కు అస్సలు కాల్ చేయవద్దు, ఏ లింక్ క్లిక్ చేయవద్దు! విద్యుత్ శాఖ ఎప్పుడూ సాధారణ మొబైల్ నంబర్ల నుండి ఇలాంటి మెసేజ్‌లు పంపదు!",
      ta: "அந்த எண்ணிற்கு ஒருபோதும் அழைக்காதீர்கள்; எந்த லிங்கையும் தொடாதீர்கள்! மின்சார வாரியம் தனிநபர் மொபைல் எண்ணிலிருந்து மெசேஜ் அனுப்பாது!",
      hi: "मैसेज में दिए नंबर पर कभी फोन न करें और कोई ऐप डाउनलोड न करें! बिजली विभाग कभी भी पर्सनल मोबाइल नंबर से ऐसी धमकी नहीं भेजता!"
    },
    steps: {
      en: [
        "1. Identify the Sender: Genuine electricity boards send SMS with official sender IDs like 'TSSPDCL', 'APEPDCL', 'TANGEDCO', or 'UPPCL', NEVER from a regular 10-digit mobile number.",
        "2. How the Trap Works: If you call the number, the scammer pretends to be an electricity officer and asks you to pay ₹10 or install an app (like QuickSupport or Bijli.apk). That app steals your bank details and empties your account!",
        "3. Check Your Real Bill: Look at your physical electricity paper bill or check your meter account number on PhonePe / Google Pay / official electricity portal.",
        "4. Official Procedure: In India, electricity cannot be disconnected without a 15-day official written notice served in person.",
        "5. Report: Forward the scam SMS to 1909 (Do Not Disturb) and report the fraudster number to Cyber Crime Helpline 1930."
      ],
      te: [
        "1. మెసేజ్ నంబర్ పరిశీలించండి: విద్యుత్ శాఖ అధికారిక పేరుతో (ఉదా: TSSPDCL, APEPDCL) మెసేజ్ పంపుతుంది, 10 అంకెల మొబైల్ నంబర్ నుండి పంపదు.",
        "2. మోసం ఎలా జరుగుతుంది: మీరు ఆ నంబర్‌కు కాల్ చేస్తే కేవలం ₹10 రీఛార్జ్ చేయమని లేదా ఒక యాప్ డౌన్‌లోడ్ చేయమని చెప్పి మీ ఫోన్ స్క్రీన్ రికార్డ్ చేసి బ్యాంక్ డబ్బులు కాజేస్తారు.",
        "3. అసలు బిల్లు తనిఖీ చేయండి: మీ ఇంట్లోని మీటర్ బిల్లు కాగితం చూడండి లేదా ఫోన్‌పే/జీపేలో మీ కరెంట్ సర్వీస్ నంబర్ కొట్టి చూడండి.",
        "4. అధికారిక చట్టం: 15 రోజుల లిఖితపూర్వక నోటీసు లేకుండా ఏ అధికారి కూడా రాత్రికి రాత్రే కరెంట్ కట్ చేయలేరు.",
        "5. ఫిర్యాదు: వెంటనే సైబర్ క్రైమ్ హెల్ప్‌లైన్ 1930 లో ఆ నంబర్‌ను రిపోర్ట్ చేయండి."
      ],
      ta: [
        "1. அனுப்புநரை சரிபார்க்கவும்: அரசு மின்சார வாரியம் TANGEDCO போன்ற பெயர்களில் மட்டுமே அனுப்பும், சாதாரண மொபைல் எண்ணில் அனுப்பாது.",
        "2. ஆபத்து: அவர்கள் ஒரு செயலியை பதிவிறக்கம் செய்யச் சொல்லி உங்கள் வங்கி ரகசியங்களை திருடிவிடுவார்கள்.",
        "3. உண்மை பில் சரிபார்ப்பு: உங்கள் மின் கட்டண ரசீது அல்லது கூகுள் பே மூலம் சர்வீஸ் எண்ணை உள்ளிட்டு சரிபார்க்கவும்.",
        "4. சட்டம்: 15 நாட்கள் எழுத்துப்பூர்வ நோட்டீஸ் இன்றி இரவோடு இரவாக மின்சாரத்தை துண்டிக்க முடியாது.",
        "5. புகார்: இந்த மோசடி எண்ணை உடனே 1930 சைபர் கிரைம் உதவி எண்ணில் தெரிவிக்கவும்."
      ],
      hi: [
        "1. भेजने वाले का नाम देखें: सरकारी बिजली विभाग UPPCL या DISCOM जैसे आधिकारिक हेडर से मैसेज भेजता है, 10 अंकों के साधारण फोन नंबर से नहीं।",
        "2. ठगी का तरीका: फोन करने पर ठग कहते हैं कि 'सिर्फ ₹10 का अपडेट चार्ज भरें' या एक ऐप (QuickSupport/Bijli.apk) इंस्टॉल करवाकर आपका पूरा बैंक खाता खाली कर देते हैं।",
        "3. असली बिल चेक करें: अपने बिजली के कागजी बिल पर देखें या PhonePe/Google Pay पर अपना उपभोक्ता नंबर डालकर असली बिल देखें।",
        "4. नियम: 15 दिन के लिखित नोटिस के बिना बिजली विभाग कभी भी रातों-रात बिजली नहीं काट सकता।",
        "5. शिकायत: ऐसे फ्रॉड नंबर की शिकायत तुरंत राष्ट्रीय साइबर क्राइम हेल्पलाइन 1930 पर दर्ज कराएं।"
      ]
    },
    helpline: {
      name: "National Cyber Crime Helpline",
      number: "1930",
      actionLabel: "Call Cyber Crime 1930",
      url: "https://cybercrime.gov.in"
    },
    keyTakeaway: {
      en: "Total Scam. Delete the SMS. Electricity board never sends personal 10-digit mobile disconnection threats.",
      te: "ఇది పక్కా మోసం. మెసేజ్ డిలీట్ చేయండి, 1930 కి రిపోర్ట్ చేయండి.",
      ta: "முழுக்க முழுக்க மோசடி. மெசேஜை அழியுங்கள், 1930-ல் புகாரளியுங்கள்.",
      hi: "पूरी तरह से फर्जी। मैसेज डिलीट करें और कभी भी अनजान ऐप इंस्टॉल न करें।"
    }
  },
  {
    id: "digital_arrest_fake_police_scam",
    category: "scams",
    keywords: ["digital arrest", "cbi video call", "fake police", "skype call", "customs drugs", "నకిలీ పోలీస్", "போலி போலீஸ்", "डिजिटल अरेस्ट"],
    question: {
      en: "Someone wearing police uniform is video-calling me on WhatsApp saying a parcel with drugs was seized and I am under 'Digital Arrest'. What to do?",
      te: "పోలీస్ డ్రెస్‌లో ఉన్న వ్యక్తి వాట్సాప్ వీడియో కాల్ చేసి, మీ పేరు మీద డ్రగ్స్ పార్శిల్ పట్టుబడిందని, మిమ్మల్ని 'డిజిటల్ అరెస్ట్' చేసామని బెదిరిస్తున్నాడు. ఏం చేయాలి?",
      ta: "போலீஸ் உடையில் ஒருவர் வாட்ஸ்அப் வீடியோ காலில் அழைத்து, உங்கள் பெயரில் போதைப்பொருள் பார்சல் பிடிபட்டுள்ளதாகவும் உங்களை 'டிஜிட்டல் அரெஸ்ட்' செய்வதாகவும் மிரட்டுகிறார். என்ன செய்வது?",
      hi: "पुलिस की वर्दी में कोई व्यक्ति व्हाट्सएप वीडियो कॉल करके कह रहा है कि आपके नाम का नशीली दवाओं वाला पार्सल पकड़ा गया है और आप 'डिजिटल अरेस्ट' हैं। क्या करूं?"
    },
    scenario: {
      en: "Prime Minister and Indian Cyber Crime Coordination Centre (I4C) have issued urgent national alerts: Indian Law has NO provision for 'Digital Arrest' via video call!",
      te: "ప్రధానమంత్రి మరియు సైబర్ క్రైమ్ విభాగం హెచ్చరిక: భారతీయ చట్టంలో వాట్సాప్ లేదా వీడియో కాల్ ద్వారా 'డిజిటల్ అరెస్ట్' చేసే నిబంధన అసలు లేదు!",
      ta: "மத்திய அரசின் அவசர எச்சரிக்கை: இந்திய சட்டத்தில் வீடியோ கால் மூலம் 'டிஜிட்டல் அரெஸ்ட்' என்ற முறையே கிடையாது!",
      hi: "भारत सरकार व गृह मंत्रालय की सख्त चेतावनी: भारतीय कानून में वीडियो कॉल पर 'डिजिटल अरेस्ट' का कोई प्रावधान नहीं है!"
    },
    urgency: "critical",
    immediateAction: {
      en: "DISCONNECT THE VIDEO CALL IMMEDIATELY! Do not be afraid. Real police and CBI officers NEVER make WhatsApp video calls or demand money to clear cases!",
      te: "వెంటనే వీడియో కాల్ కట్ చేయండి! అస్సలు భయపడవద్దు. నిజమైన పోలీసులు ఎప్పుడూ వాట్సాప్ వీడియో కాల్స్ చేయరు, డబ్బులు అడగరు!",
      ta: "உடனே வீடியோ காலை துண்டிக்கவும்! பயப்பட வேண்டாம். உண்மையான காவல்துறையினர் ஒருபோதும் வாட்ஸ்அப் வீடியோ காலில் மிரட்ட மாட்டார்கள்!",
      hi: "तुरंत वीडियो कॉल काट दें! बिल्कुल न डरें। असली पुलिस या सीबीआई कभी भी व्हाट्सएप पर वीडियो कॉल नहीं करती और न ही पैसे मांगती है!"
    },
    steps: {
      en: [
        "1. Hang Up: Immediately cut the video call. Block the number on WhatsApp.",
        "2. Remember the Law: Police never interrogate citizens via video calls or ask you to stay in front of the camera inside a room.",
        "3. Never Transfer Money: Scammers tell you to transfer your savings to a 'Government RBI Security Account' for verification. This account belongs to the fraudsters!",
        "4. Call 1930 Instantly: Dial the National Cyber Crime Helpline 1930 to report the scam and freeze any bank transfer if initiated.",
        "5. Report to Local Police: Visit your local police station and inform them calmly. They will reassure you that you did nothing wrong."
      ],
      te: [
        "1. కాల్ కట్ చేయండి: వెంటనే వీడియో కాల్ కట్ చేసి ఆ నంబర్‌ను వాట్సాప్‌లో బ్లాక్ చేయండి.",
        "2. చట్టం గుర్తుంచుకోండి: పోలీసులు ఏ పౌరుడినీ వీడియో కాల్ ద్వారా విచారించరు, కెమెరా ముందు కూర్చోమని చెప్పరు.",
        "3. ఒక్క రూపాయి కూడా పంపవద్దు: 'పరిశీలన కోసం ఆర్బీఐ సెక్యూరిటీ ఖాతాకు డబ్బు పంపండి' అని అడుగుతారు. అది మోసగాళ్ల ఖాతా!",
        "4. 1930 కి కాల్ చేయండి: వెంటనే సైబర్ హెల్ప్‌లైన్ 1930 కి కాల్ చేసి ఫిర్యాదు నమోదు చేయండి.",
        "5. స్థానిక పోలీస్ స్టేషన్: మీ ఊరి పోలీస్ స్టేషన్‌కు వెళ్లి చెబితే వారు మీకు పూర్తి ధైర్యం కల్పిస్తారు."
      ],
      ta: [
        "1. காலை துண்டிக்கவும்: உடனே அழைப்பைத் துண்டித்து வாட்ஸ்அப்பில் பிளாக் செய்யவும்.",
        "2. சட்டம்: காவல்துறை வீடியோ காலில் விசாரணை செய்யாது, யாரையும் வீட்டிற்குள் அடைக்காது.",
        "3. பணம் அனுப்பாதீர்கள்: 'சரிபார்ப்புக்காக பணத்தை அனுப்புங்கள்' என மிரட்டுவார்கள்; ஒரு ரூபாயும் அனுப்ப வேண்டாம்.",
        "4. 1930 எண்ணை அழைக்கவும்: உடனே சைபர் கிரைம் 1930 எண்ணில் புகார் அளிக்கவும்.",
        "5. உள்ளூர் காவல் நிலையம்: உங்கள் பகுதி காவல் நிலையத்தில் தகவல் தெரிவிக்கவும்."
      ],
      hi: [
        "1. तुरंत फोन काटें: कॉल डिसकनेक्ट करें और उस नंबर को व्हाट्सएप पर ब्लॉक कर दें।",
        "2. कानून जानें: पुलिस या जांच एजेंसियां कभी भी वीडियो कॉल पर पूछताछ नहीं करतीं।",
        "3. एक भी रुपया ट्रांसफर न करें: ठग कहेंगे कि 'जांच के लिए आरबीआई के सरकारी खाते में पैसे भेजें', वह खाता ठगों का होता है।",
        "4. तुरंत 1930 पर कॉल करें: 1930 पर फोन करके घटना की जानकारी दें।",
        "5. नजदीकी थाने जाएं: अपने स्थानीय थाने जाकर पुलिस को बताएं, वे आपको पूरी सुरक्षा और सलाह देंगे।"
      ]
    },
    helpline: {
      name: "Cyber Crime Emergency Helpline",
      number: "1930",
      actionLabel: "Call 1930 Immediately",
      url: "https://cybercrime.gov.in"
    },
    keyTakeaway: {
      en: "There is NO digital arrest in India. Hang up immediately, transfer zero money, and call 1930.",
      te: "భారతదేశంలో డిజిటల్ అరెస్ట్ లేదు. వెంటనే కాల్ కట్ చేయండి, 1930 కి ఫోన్ చేయండి.",
      ta: "டிஜிட்டல் அரெஸ்ட் என்பது மிகப்பெரிய பொய். உடனே இணைப்பைத் துண்டித்து 1930-ல் புகாரளியுங்கள்.",
      hi: "डिजिटल अरेस्ट पूरी तरह फर्जी है। तुरंत कॉल काटें, कोई पैसा न भेजें और 1930 पर कॉल करें।"
    }
  },
  {
    id: "atm_cash_not_dispensed_money_debited",
    category: "upi_banking",
    keywords: ["atm swallowed card", "cash not dispensed", "money deducted atm", "atm machine failed", "ఏటీఎం డబ్బులు రాలేదు", "ஏடிஎம் பணம் வரவில்லை", "एटीएम से पैसे नहीं निकले"],
    question: {
      en: "The ATM machine did not dispense cash (or swallowed my card), but money was deducted from my account. What should I do?",
      te: "ఏటీఎం మెషీన్ నుండి డబ్బులు బయటకు రాలేదు (లేదా కార్డు ఇరుక్కుపోయింది), కానీ బ్యాంక్ ఖాతా నుండి డబ్బు కట్ అయింది. ఏం చేయాలి?",
      ta: "ஏடிஎம் மெஷினில் பணம் வரவில்லை (கார்டு மாட்டிக்கொண்டது), ஆனால் வங்கிக் கணக்கில் பணம் எடுக்கப்பட்டுவிட்டது. என்ன செய்வது?",
      hi: "एटीएम मशीन से पैसे नहीं निकले (या कार्ड फंस गया), लेकिन खाते से पैसे कटने का मैसेज आ गया। क्या करें?"
    },
    scenario: {
      en: "ATM cash dispenser jammed or network failed mid-transaction. Banks are legally required by RBI to refund this within 5 working days.",
      te: "మెషీన్‌లో క్యాష్ జామ్ అవ్వడం వల్ల ఇలా జరుగుతుంది. ఆర్‌బీఐ నిబంధనల ప్రకారం 5 రోజుల్లో డబ్బులు మీ ఖాతాలోకి వాపసు వస్తాయి.",
      ta: "மெஷினில் இயந்திரக் கோளாறு காரணமாக இது நிகழ்கிறது. 5 வேலை நாட்களுக்குள் வங்கிகள் பணத்தை திருப்பியளிக்க வேண்டும்.",
      hi: "एटीएम मशीन में खराबी या कैश फंसने से ऐसा होता है। आरबीआई के नियमों के तहत 5 दिनों में पैसा वापस मिल जाता है।"
    },
    urgency: "high",
    immediateAction: {
      en: "COLLECT THE ATM TRANSACTION SLIP: If a paper slip came out, keep it safely. If no slip, take a clear photo of the ATM machine screen and note down the exact ATM ID printed on the machine.",
      te: "ఏటీఎం రశీదు తీసుకోండి: ఏటీఎం స్లిప్ వస్తే భద్రంగా దాచుకోండి. స్లిప్ రాకపోతే మెషీన్ పై రాసి ఉన్న ఏటీఎం ఐడీ (ATM ID) నంబర్‌ను మరియు స్క్రీన్‌ను ఫోటో తీసుకోండి.",
      ta: "ஏடிஎம் ரசீதை பாதுகாக்கவும்: ரசீது வரவில்லை என்றால் ஏடிஎம் மெஷினில் ஒட்டப்பட்டுள்ள ATM ID எண்ணை குறித்துக்கொள்ளுங்கள்.",
      hi: "एटीएम की पर्ची संभालें: पर्ची न निकले तो एटीएम मशीन पर लिखा हुआ ATM ID नंबर नोट कर लें और स्क्रीन की फोटो खींच लें।"
    },
    steps: {
      en: [
        "1. Wait 2 Minutes: Sometimes the machine is slow; ensure the screen returns to the Welcome / Home screen before leaving the booth.",
        "2. Call Bank Toll-Free: Immediately call your bank's toll-free number printed on the back of your debit card or on the ATM room wall.",
        "3. Provide Details: Give the ATM Location, ATM ID, Date, Exact Time, and Amount debited.",
        "4. RBI Auto-Reversal Rule: As per Reserve Bank of India, the failed transaction must be auto-credited to your account within 5 working days (T+5 days).",
        "5. ₹100 Daily Compensation: If the bank fails to refund within 5 days, they MUST pay you ₹100 per day for every day of delay!"
      ],
      te: [
        "1. 2 నిమిషాలు ఆగండి: స్క్రీన్ మళ్లీ వెల్‌కమ్ స్క్రీన్‌కు వచ్చే వరకు ఏటీఎం క్యాబిన్ నుండి బయటకు రావద్దు.",
        "2. టోల్ ఫ్రీ నంబర్‌కు కాల్ చేయండి: మీ ఏటీఎం కార్డు వెనుక ఉన్న మీ బ్యాంక్ టోల్ ఫ్రీ నంబర్‌కు వెంటనే కాల్ చేయండి.",
        "3. వివరాలు చెప్పండి: ఏటీఎం లొకేషన్, ఏటీఎం ఐడీ నంబర్, సమయం మరియు కట్ అయిన అమౌంట్ చెప్పి కంప్లైంట్ నంబర్ తీసుకోండి.",
        "4. 5 రోజుల ఆర్‌బీఐ రూల్: 5 పని దినాల్లో మీ డబ్బులు ఖాతాలో జమ అవుతాయి.",
        "5. ఆలస్యమైతే పరిహారం: 5 రోజులు దాటితే రోజుకు ₹100 చొప్పున బ్యాంక్ మీకు నష్టపరిహారం ఇవ్వాలి."
      ],
      ta: [
        "1. 2 நிமிடம் காத்திருங்கள்: திரை இயல்பு நிலைக்கு வரும் வரை அங்கேயே இருங்கள்.",
        "2. உதவி எண்ணை அழைக்கவும்: கார்டின் பின்னால் உள்ள வங்கி உதவி எண்ணை அழைக்கவும்.",
        "3. விவரங்களை கூறவும்: ஏடிஎம் எண், நேரம் மற்றும் தொகையைக் கூறி புகார் எண் பெறவும்.",
        "4. 5 நாள் விதி: 5 வேலை நாட்களுக்குள் உங்கள் பணம் திரும்ப வந்துவிடும்.",
        "5. இழப்பீடு: 5 நாட்களுக்கு மேல் தாமதமானால் வங்கி நாள் ஒன்றுக்கு ₹100 இழப்பீடு வழங்க வேண்டும்."
      ],
      hi: [
        "1. 2 मिनट रुकें: जब तक एटीएम की स्क्रीन वापस नॉर्मल न हो जाए, तब तक केबिन से बाहर न निकलें।",
        "2. टोल-फ्री नंबर पर कॉल करें: अपने डेबिट कार्ड के पीछे लिखे बैंक के टोल-फ्री नंबर पर तुरंत फोन करें।",
        "3. शिकायत दर्ज करें: एटीएम आईडी, समय और रकम बताएं और कंप्लेंट नंबर नोट कर लें।",
        "4. आरबीआई का 5 दिन का नियम: 5 कामकाजी दिनों के भीतर पैसा आपके खाते में वापस आ जाना चाहिए।",
        "5. ₹100 प्रतिदिन मुआवजा: 5 दिन से ज्यादा देरी होने पर बैंक को प्रतिदिन ₹100 का जुर्माना आपको देना पड़ता है।"
      ]
    },
    helpline: {
      name: "RBI Banking Ombudsman / Toll Free",
      number: "14448",
      actionLabel: "Call RBI Banking Helpline 14448",
      url: "https://cms.rbi.org.in"
    },
    keyTakeaway: {
      en: "Take a photo of the ATM machine ID, report immediately, and bank must refund within 5 days or pay ₹100/day compensation.",
      te: "ఏటీఎం ఐడీ నోట్ చేసుకోండి, వెంటనే ఫిర్యాదు చేయండి. 5 రోజుల్లో డబ్బులు రాకపోతే రోజుకు ₹100 పరిహారం లభిస్తుంది.",
      ta: "ஏடிஎம் ஐடி குறித்து உடனே புகார் செய்யுங்கள்; 5 நாளில் பணம் வராவிடில் நாள் ஒன்றுக்கு ₹100 இழப்பீடு கிடைக்கும்.",
      hi: "एटीएम आईडी नोट करके तुरंत शिकायत दर्ज करें। 5 दिन में पैसा न आने पर प्रतिदिन ₹100 मुआवजा मिलता है।"
    }
  }
];
