import express from 'express';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini API client on server-side
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // AI Digital Literacy Assistant endpoint
  app.post('/api/ai/ask', async (req, res) => {
    const { question, language } = req.body || {};
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required' });
    }

    try {
      const langNames: Record<string, string> = {
        en: 'English',
        te: 'Telugu',
        ta: 'Tamil',
        hi: 'Hindi',
      };
      const targetLang = langNames[language] || 'English';

      const systemPrompt = `You are a patient, friendly, and practical Digital Literacy Assistant for Indian citizens, elders, and rural village residents.
Answer the user's question or digital problem using very simple terminology, everyday examples, and clear numbered steps.
Avoid complicated technical jargon.
Always respond in the requested language: ${targetLang}.

Key specialized knowledge to incorporate when relevant:
1. Lost or Stolen Mobile Phone:
   - Step 1: Immediately call your telecom provider (Jio: 198, Airtel: 121, Vi: 199, BSNL: 1503) from a family member's phone to block the SIM card so OTPs cannot be stolen.
   - Step 2: Use Google "Find My Device" (android.com/find) to lock the screen with a message and remotely erase private data if possible.
   - Step 3: File a Lost Phone report at the local police station or state police citizen portal to get a police complaint receipt / DD entry number.
   - Step 4: Visit the Government of India portal "Sanchar Saathi" (ceir.sancharsaathi.gov.in) -> "Block Stolen/Lost Mobile" -> enter your IMEI numbers, police complaint copy, and identity proof. This blocks the phone's hardware across all Indian mobile operators, making the phone completely useless for the thief.
   - Step 5: Inform your bank to temporarily freeze mobile banking / UPI linked to that phone number.

2. Missed Bus or Train with Online Ticket:
   - For State RTC Buses (TSRTC, APSRTC, KSRTC, MSRTC, SETC, UPSRTC) or Private Buses (RedBus, AbhiBus):
     - If you missed the bus due to bus breakdown or late departure: You are entitled to 100% full refund or free seat in the next scheduled bus from the depot counter.
     - If you arrived late and missed the bus: Check the RTC cancellation window. If cancelled online 1-2 hours before journey, 50%-75% refund is granted. If the bus has already departed, some state RTCs allow talking to the depot bus station controller / ATM (Assistant Traffic Manager) to re-endorse the ticket for the next available bus to the same destination by paying a nominal difference.
     - In RedBus / AbhiBus: Open App -> My Bookings -> Select Ticket -> "Need Help / Dispute Ticket" -> submit reason for missed bus with PNR.
   - For IRCTC Trains:
     - File a TDR (Ticket Deposit Receipt) on irctc.co.in within the prescribed time limit. If train is cancelled or delayed > 3 hours, 100% refund. If passenger missed train, file TDR under "Passenger could not travel" before chart preparation or within 1 hour after train departure.

3. Buying a New Phone / Which Mobile Company is Best:
   - Provide unbiased, practical recommendations for Indian everyday use:
     - For Parents / Grandparents / Elders (Budget ₹9,000 - ₹14,000): Samsung Galaxy (M15 5G / F15 5G) or Motorola (Moto G34 5G / G45 5G). Why: Huge 6,000 mAh battery, clean software with zero annoying pop-up ads, "Easy Mode" with giant letters and big contact icons, and high call volume.
     - For Best Value & Battery under ₹10,000 - ₹15,000: Redmi (Redmi 12 5G / 13C 5G) or Realme (Narzo 70x / Realme 12x 5G). Why: Great screen, loud speakers, fast charging, very popular service centers.
     - For Students / Youth / Fast Performance (₹15,000 - ₹25,000): OnePlus Nord CE 4 Lite / OnePlus Nord CE 4 or Samsung Galaxy M35 5G. Why: Super smooth screen, great cameras, fast 80W charging, 4 years of security updates.
     - For Farmers & Rough Outdoor Use: Phones with IP54/IP64 splash/dust resistance and big 6000mAh battery (Samsung Galaxy M-series or Moto G-series).

4. Digital Payments & UPI Problems:
   - Money debited but shopkeeper didn't get it: Money is safely held in RBI/NPCI settlement and automatically reverses back within 24-48 hours. Save the 12-digit UTR number. File dispute in GPay/PhonePe or at npci.org.in.
   - Never enter UPI PIN to receive money. UPI PIN is only for sending money.

5. Scam Warnings:
   - Fake Electricity Bill SMS ("Power will be cut at 9:30 PM"): NEVER call the mobile number in the SMS or install any APK link.
   - Digital Arrest Fake Police/CBI Video Calls: Hang up immediately and dial 1930. Indian police never arrest people on WhatsApp video calls!

Format your response with:
- Clear headline
- Immediate 1st Step
- Step-by-step Guide
- Official Helpline or Portal (with exact phone numbers / websites)`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: `${systemPrompt}\n\nUser Question: "${question}"` }],
          },
        ],
      });

      const answerText = response.text || 'I am here to help. Please check our real-world problem guides below.';
      return res.json({ answer: answerText });
    } catch (err: any) {
      console.warn('Gemini API call returned error, providing expert fallback:', err?.message);

      const qLower = (question || '').toLowerCase();
      let fallbackText = '';

      if (qLower.includes('lost') || qLower.includes('stolen') || qLower.includes('పోయిం') || qLower.includes('தொலைந்') || qLower.includes('खो गया') || qLower.includes('चोरी')) {
        if (language === 'te') {
          fallbackText = `📱 **మొబైల్ ఫోన్ పోయినప్పుడు వెంటనే చేయాల్సిన అత్యవసర పనులు:**\n\n` +
            `🚨 **1వ అత్యవసర పని:** వెంటనే కుటుంబ సభ్యుల ఫోన్ నుండి మీ టెలికాం ఆపరేటర్ కస్టమర్ కేర్ (Jio: 198, Airtel: 121, Vi: 199, BSNL: 1503) కి కాల్ చేసి మీ **సిమ్ కార్డును బ్లాక్ చేయించండి**. దీనివల్ల దొంగలకు మీ బ్యాంక్ ఓటీపీలు అందవు.\n\n` +
            `2. **ఆండ్రాయిడ్ ఫైండ్ మై డివైస్:** వేరే ఫోన్ లేదా కంప్యూటర్‌లో android.com/find ఓపెన్ చేసి మీ జీమెయిల్‌తో 'Secure Device' లేదా 'Erase Data' ద్వారా ఫోటోలు చెరిపివేయండి.\n\n` +
            `3. **బ్యాంక్ యూపీఐ తాత్కాలిక లాక్:** మీ బ్యాంక్ కస్టమర్ కేర్‌కు ఫోన్ చేసి నెట్‌బ్యాంకింగ్ మరియు యూపీఐని తాత్కాలికంగా ఫ్రీజ్ చేయండి.\n\n` +
            `4. **పోలీస్ రసీదు:** స్థానిక పోలీస్ స్టేషన్ లేదా ఆన్‌లైన్ సిటిజన్ పోర్టల్‌లో ఫోన్ మిస్సింగ్ ఫిర్యాదు చేసి రసీదు తీసుకోండి.\n\n` +
            `5. **సంచార్ సాథీ (CEIR) పోర్టల్‌లో IMEI బ్లాక్:** ceir.sancharsaathi.gov.in లో మీ 15 అంకెల IMEI నంబర్ మరియు పోలీస్ రసీదుతో రిపోర్ట్ చేయండి. దీనితో దొంగ ఏ సిమ్ వేసినా ఫోన్ పనిచేయదు!\n\n` +
            `📞 **అధికారిక సైబర్ హెల్ప్‌లైన్:** 1930`;
        } else if (language === 'ta') {
          fallbackText = `📱 **போன் தொலைந்துவிட்டால் உடனடியாக செய்ய வேண்டிய 5 வழிகள்:**\n\n` +
            `🚨 **முதல் அவசர நடவடிக்கை:** உடனே குடும்பத்தினர் போன் மூலம் உங்கள் நெட்வொர்க்கை (Jio: 198, Airtel: 121, Vi: 199, BSNL: 1503) அழைத்து **சிம் கார்டை முடக்கவும்**.\n\n` +
            `2. **Find My Device:** android.com/find மூலம் உங்கள் ஜிமெயில் கொண்டு உள்நுழைந்து தகவல்களை அழிக்கவும்.\n\n` +
            `3. **வங்கி கணக்கு பாதுகாப்பு:** வங்கியை அழைத்து தற்காலிகமாக UPI சேவைகளை நிறுத்துங்கள்.\n\n` +
            `4. **காவல்துறை புகார்:** காவல் நிலையத்தில் புகார் செய்து ஒப்புகைச் சீட்டு (CSR) பெறுங்கள்.\n\n` +
            `5. **சஞ்சார் சாதி (CEIR) தளம்:** ceir.sancharsaathi.gov.in தளத்தில் புகாரளித்து IMEI எண்ணை முடக்குங்கள்.\n\n` +
            `📞 **உதவி எண்:** 1930`;
        } else if (language === 'hi') {
          fallbackText = `📱 **मोबाइल फोन खो जाने या चोरी होने पर तुरंत उठाए जाने वाले कदम:**\n\n` +
            `🚨 **सबसे पहला जरूरी काम:** परिवार के फोन से तुरंत अपनी टेलीकॉम कंपनी (Jio: 198, Airtel: 121, Vi: 199, BSNL: 1503) को फोन करके **सिम कार्ड ब्लॉक कराएं** ताकि कोई बैंक ओटीपी न देख सके।\n\n` +
            `2. **गूगल Find My Device:** किसी अन्य फोन में android.com/find खोलकर अपनी जीमेल आईडी से डेटा रिमोट इरेज़ करें।\n\n` +
            `3. **बैंक व यूपीआई फ्रीज:** बैंक को फोन करके यूपीआई सेवाएं अस्थायी रूप से रोकें।\n\n` +
            `4. **पुलिस शिकायत:** थाने या राज्य पुलिस पोर्टल पर गुमशुदगी की रिपोर्ट दर्ज कराकर रसीद लें।\n\n` +
            `5. **संचार साथी (CEIR) पर IMEI ब्लॉक करें:** ceir.sancharsaathi.gov.in पर 15 अंकों का आईएमईआई नंबर दर्ज करें।\n\n` +
            `📞 **साइबर हेल्पलाइन:** 1930`;
        } else {
          fallbackText = `📱 **Emergency Action Plan for Lost or Stolen Mobile Phone:**\n\n` +
            `🚨 **URGENT 1ST STEP:** Immediately borrow a phone and call your telecom provider (Jio: 198, Airtel: 121, Vi: 199, BSNL: 1503) to **BLOCK YOUR SIM CARD** so thieves cannot intercept your banking OTPs.\n\n` +
            `2. **Remote Erase via Google:** Go to android.com/find, log into your Gmail, and tap 'Erase Device' to wipe sensitive photos and data.\n\n` +
            `3. **Freeze Banking & UPI:** Contact your bank customer support to temporarily freeze net banking and UPI.\n\n` +
            `4. **File Police Lost Report:** Register a lost phone diary at your local police station or citizen portal to get an acknowledgment copy.\n\n` +
            `5. **Block IMEI on Sanchar Saathi (CEIR):** Visit ceir.sancharsaathi.gov.in and submit your 15-digit IMEI number with the police receipt. This completely disables the phone hardware on all Indian networks.\n\n` +
            `📞 **National Cyber Crime Helpline:** 1930`;
        }
      } else if (qLower.includes('bus') || qLower.includes('ticket') || qLower.includes('train') || qLower.includes('బస్సు') || qLower.includes('பேருந்து') || qLower.includes('टिकट')) {
        if (language === 'te') {
          fallbackText = `🚌 **బస్సు లేదా రైలు మిస్సయినప్పుడు టికెట్ డబ్బులు వెనక్కి పొందే విధానం:**\n\n` +
            `1. **బస్టాండ్‌లో ఉంటే:** వెంటనే ఆర్టీసీ డిపో ఎంక్వైరీ లేదా కంట్రోలర్ దగ్గరకు వెళ్లండి. వారు తరచూ అదే రూట్‌లో తర్వాత వచ్చే బస్సులో మీ టికెట్‌ను అనుమతిస్తారు.\n\n` +
            `2. **ఆన్‌లైన్ క్యాన్సిలేషన్:** బస్సు బయలుదేరడానికి కొద్ది సమయం ముందు రద్దు చేసుకుంటే 50% నుండి 75% రీఫండ్ లభిస్తుంది.\n\n` +
            `3. **ఆర్టీసీ లోపం వల్ల మిస్సయితే:** 100% పూర్తి రీఫండ్ లభిస్తుంది. డిపో మేనేజర్ వద్ద రశీదు పొందండి.\n\n` +
            `4. **ఐఆర్‌సీటీసీ రైలు టికెట్:** రైలు బయలుదేరిన 1 గంటలోపు irctc.co.in లో TDR (Ticket Deposit Receipt) ఫైల్ చేయాలి.\n\n` +
            `5. **రీఫండ్ వ్యవధి:** 3 నుండి 7 పని దినాలలో డబ్బులు నేరుగా మీ బ్యాంక్ ఖాతాకు జమ అవుతాయి.\n\n` +
            `📞 **రైల్వే హెల్ప్‌లైన్:** 139`;
        } else if (language === 'hi') {
          fallbackText = `🚌 **बस या ट्रेन छूटने पर टिकट रिफंड पाने का तरीका:**\n\n` +
            `1. **बस स्टैंड पर तुरंत मिलें:** स्टेशन मास्टर से तुरंत संपर्क करें, वे अक्सर उसी रूट की अगली बस में टिकट एडजस्ट कर देते हैं।\n\n` +
            `2. **ऑनलाइन कैंसिलेशन:** बस निकलने से पहले ऐप पर कैंसिल करने पर 50% से 75% तक रिफंड मिलता है।\n\n` +
            `3. **कंपनी की गलती से बस छूटने पर:** पूरा 100% रिफंड मिलता है।\n\n` +
            `4. **ट्रेन टिकट के लिए:** ट्रेन छूटने के 1 घंटे के भीतर irctc.co.in पर TDR फाइल करें।\n\n` +
            `5. **रिफंड कब आएगा:** 3 से 7 दिनों में पैसा आपके बैंक खाते में लौट आता है।\n\n` +
            `📞 **रेलवे हेल्पलाइन:** 139`;
        } else {
          fallbackText = `🚌 **How to Claim Refund for Missed Bus or Train Online Ticket:**\n\n` +
            `1. **If at the Bus Station:** Approach the RTC Depot Traffic Controller immediately. They can often endorse your ticket for the next bus to the same destination.\n\n` +
            `2. **Online Cancellation Window:** If cancelled online before departure, 50% to 75% partial refund is granted.\n\n` +
            `3. **If Missed Due to RTC Fault/Delay:** You are entitled to a 100% FULL REFUND.\n\n` +
            `4. **For IRCTC Trains:** File a TDR (Ticket Deposit Receipt) on irctc.co.in within 1 hour after train departure under 'Passenger Not Travelled'.\n\n` +
            `5. **Refund Timeline:** Reverses to original payment method within 3 to 7 working days.\n\n` +
            `📞 **Indian Railways Helpline:** 139`;
        }
      } else if (qLower.includes('buy') || qLower.includes('company') || qLower.includes('phone') || qLower.includes('కొత్త ఫోన్') || qLower.includes('வாங்க') || qLower.includes('खरीदना')) {
        if (language === 'te') {
          fallbackText = `🛒 **కొత్త ఫోన్ కొనడానికి ఉత్తమ కంపెనీలు & సలహాలు:**\n\n` +
            `1. **తల్లిదండ్రులు & వృద్ధుల కోసం (₹9,000 - ₹14,000):** Samsung Galaxy M15 5G / F15 5G. భారీ 6,000 mAh బ్యాటరీ (2 రోజులు వస్తుంది), పెద్ద అక్షరాల ఈజీ మోడ్, ప్రకటనలు ఉండవు.\n\n` +
            `2. **క్లీన్ సాఫ్ట్‌వేర్ & ప్రకటనలు లేని ఫోన్:** Motorola Moto G34 5G / G45 5G. స్వచ్ఛమైన ఆండ్రాయిడ్, రఫ్ అండ్ టఫ్ వాడకానికి బెస్ట్.\n\n` +
            `3. **తక్కువ బడ్జెట్‌లో ఎక్కువ ఫీచర్లు (₹10,000 - ₹13,000):** Redmi 12 5G లేదా Realme Narzo 70x. పెద్ద స్క్రీన్, ఫాస్ట్ ఛార్జర్.\n\n` +
            `4. **వేగవంతమైన ఛార్జింగ్ (₹15,000 - ₹22,000):** OnePlus Nord CE 4 Lite. 30 నిమిషాల్లో ఫుల్ ఛార్జింగ్.\n\n` +
            `💡 **ముఖ్యమైన నియమం:** కనీసం 6GB ర్యామ్, 128GB మెమరీ, 5000mAh బ్యాటరీ మరియు 5G సపోర్ట్ ఉన్న ఫోన్ మాత్రమే కొనండి.`;
        } else if (language === 'hi') {
          fallbackText = `🛒 **नया मोबाइल खरीदने के लिए बेस्ट कंपनी व मॉडल गाइड:**\n\n` +
            `1. **माता-पिता व बुजुर्गों के लिए (₹9,000 - ₹14,000):** Samsung Galaxy M15 5G / F15 5G। 6,000 mAh की बड़ी बैटरी (2 दिन चलेगी), ईज़ी मोड में बड़े अक्षर, कोई फालतू विज्ञापन नहीं।\n\n` +
            `2. **साफ-सुथरे सॉफ्टवेयर के लिए:** Motorola Moto G34 / G45 5G। बिना किसी फालतू ऐप के शुद्ध स्टॉक एंड्रॉइड।\n\n` +
            `3. **कम बजट में ज्यादा फीचर्स (₹10,000 - ₹13,000):** Redmi 12 5G या Realme Narzo 70x। बड़ी स्क्रीन और तेज चार्जर।\n\n` +
            `4. **फास्ट चार्जिंग व स्पीड (₹15,000 - ₹22,000):** OnePlus Nord CE 4 Lite। केवल 30 मिनट में फुल चार्ज।\n\n` +
            `💡 **खरीदते समय ध्यान रखें:** कम से कम 6GB RAM, 128GB स्टोरेज और 5G सपोर्ट जरूर लें।`;
        } else {
          fallbackText = `🛒 **Best Smartphone Companies & Recommendation Guide:**\n\n` +
            `1. **For Parents & Seniors (₹9,000 - ₹14,000):** Samsung Galaxy M15 5G / F15 5G. Massive 6,000 mAh battery (lasts 2 full days), Easy Mode with big text, zero spam ads, service centers in every town.\n\n` +
            `2. **For Clean, Ad-Free Pure Android:** Motorola Moto G34 5G / G45 5G. Clean software, loud stereo sound, great for rugged use.\n\n` +
            `3. **For Best Value under ₹12,000:** Redmi 12 5G or Realme Narzo 70x 5G. Bright big display for YouTube, fast 33W charging.\n\n` +
            `4. **For Youth & Ultra-Fast 80W Charging (₹15,000 - ₹22,000):** OnePlus Nord CE 4 Lite / Nord CE 4. Full charge in 30 minutes, smooth 120Hz display.\n\n` +
            `💡 **Golden Rule:** Never buy less than 6GB RAM and 128GB Storage (WhatsApp fills 64GB fast). Ensure 5G and at least 5000 mAh battery.`;
        }
      } else {
        fallbackText = `💡 **Digital Literacy Expert Guidance:**\n\n` +
          `Thank you for asking: "${question}".\n\n` +
          `• For Lost Phones: Block SIM immediately, then block IMEI on Government CEIR portal (ceir.sancharsaathi.gov.in).\n` +
          `• For Ticket Money: Contact RTC station master immediately or file TDR on IRCTC within 1 hour.\n` +
          `• For Choosing a Phone: Samsung Galaxy M-series for elders/durability, Motorola for zero ads, OnePlus/Realme for fast charging.\n` +
          `• For Cyber Fraud & Scams: Immediately call National Cyber Crime Helpline 1930 or Police 112.\n\n` +
          `Please check our detailed step-by-step problem guides below for complete assistance!`;
      }

      return res.json({ answer: fallbackText });
    }
  });

  // Serve static files or Vite middleware
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
