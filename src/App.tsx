/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Globe, 
  Download, 
  Instagram, 
  Facebook, 
  Plus,
  Share2,
  Heart,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QRCodeSVG } from 'qrcode.react';
import Markdown from 'react-markdown';

// --- Constants ---

const BRAND_NAME = "RESET LALEV";
const HEBREW_BRAND_NAME = "נטלי צ'ודנובסקי";
const TAGLINE = "ליווי וטיפול רגשי לנשים בגישה הוליסטית";
const PHONE = "050-5213995";
const EMAIL = "resetlalev@gmail.com";
const WEBSITE = "https://resetlalev.netlify.app";

const ABOUT_TEXT = `נעים מאוד, אני נטלי
Master Holistic Coach מפתחת שיטת RESET_LALEV

אחרי פרידה או גירושין, הלב שלך זקוק ליותר מ"פלסטר" – הוא זקוק לחיבור מחדש.
עברת לא מעט, ואולי בדרך שכחת איך זה מרגיש להתרגש באמת או לבחור נכון מבלי לפחד.
אני כאן כדי להזכיר לך שהאישה שבך עדיין קיימת, ומחכה שתפגשי אותה שוב.

**הסיפור שלי והשליחות שלי עבורך**
המסע שלי התחיל מתוך חקירה אישית עמוקה של הלב הנשי. אחרי חמישה עשורים של חיים, גילוי עצמי, למידה והתפתחות, אני מרגישה שזו השליחות שלי – לעזור לנשים אחרות למצוא את הדרך חזרה הביתה, אל עצמן.

כמלווה בדרגת Master Coach - אני משלבת פסיכולוגיה בשלה עם כלים עוקפי-מודע, כמו NLP, ארומפסיכולוגיה וקונדליני יוגה.
מתוך אלו נולדה שיטת RESET_LALEV - תהליך רך וממוקד לניקוי משקעי העבר וחזרה למרכז שלך דרך 6 החושים.

**איך נעבוד יחד?**
🔹 ניקוי העבר: שחרור דפוסים מעכבים וסגירת מעגלים רגשיים.
🔹 שיקום הלב: חיזוק הביטחון והערך העצמי בדרך לאהבה מיטיבה.
🔹 פיענוח צופן הזוגיות: הבנת מפת הנשמה והשיעור הזוגי שלך.
🔹 כלים פרקטיים: ויסות סטרס והצבת גבולות בריאים בעולם הדייטינג.

השינוי האמיתי מתחיל כשתחושת הביטחון הופכת לברירת המחדל שלך.
כשהשקט הזה נוכח, את כבר לא רודפת אחרי אהבה – את מושכת אותה אלייך.

למידע נוסף, הכשרות מקצועיות ומאמרים – מוזמנת לבקר באתר שלי למטה.`;

const TREATMENTS_LIST_TEXT = `💕שיחת התחלה חדשה
שיחה בת שעה וחצי – ממוקדת, עמוקה, רכה.
נבין איפה את עומדת ומה הדרך המדויקת בשבילך עכשיו.

💕מפת הלב — אבחון צופן הזוגיות
כמו "סקירת מערכות" לרגש – אבחון השכבות הפנימיות
ובניית מפת לב לקראת זוגיות חדשה.

💕RESET_LALEV - מסלול לפתיחת הלב ולזוגיות בשלה
8 -12 מפגשים אישיים, רגשיים ונשיים.
חיבור למהות שלך דרך החושים – בקצב שלך.

💕ליווי דייטינג מדויק(המשך למסלולRESET_LALEV)
ליווי פרקטי בתהליך הדייטינג:
איך לבחור, להקשיב לאינטואיציה ולשמור על הסנטר בזמן אמת.`;

const CERTIFICATIONS_TEXT = `הגישה שלי הוליסטית (גוף–נפש–מיינד) ומשלבת אבחון ודיוק לצד עבודה חווייתית. לאורך השנים העמקתי בלמידה והסמכה בתחומים משלימים שמאפשרים ליווי רגיש, פרקטי ומבוסס כלים:
🦋 ויסות רגשי, סטרס וטראומה
• ניהול טראומה בשילוב טכניקות ויסות ורגיעה (אימון הוליסטי) | מכללת רידמן (2024)
• Matrix Therapy – שחרור מהעבר ותכנון העתיד | NLP Academy (2020)
🦋 אימון הוליסטי מאסטר ומערכות יחסים
• Master Holistic Coach (Master Level) | מכללת רידמן (2024)
• התמחות באימון ליצירת זוגיות | מכללת רידמן (2021)
• קורס אימון אישי הוליסטי | מכללת רידמן (2019)
🦋 גוף ותודעה — יוגה של המודעות
• International Teacher Training Level One | KRI (2022)
🦋 עבודה עוקפת־מודע דרך חוש הריח
• Practitioner in Transformational Aromapsychology & Olfactotherapy | Institute of Aromatherapy (2022)
• Practitioner in Aromadiagnostics
🦋 כלים אבחוניים: תדר אישי, אישיות וצופן זוגי
• טארותרפיה / מצפן הארכיטיפים — ניתוח אישיות וצופן זוגי באמצעות ארכיטיפים (2024)
• נומרולוגיה למתקדמים | שוקי גבאי (2019)
• נומרולוגיה פסיכודינמית בשיטת “גוף האדם” (2016)`;

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/reset_lalev",
  facebook: "https://www.facebook.com/Levlifecoach/",
};

// --- Components ---

const CircleIcon = ({ icon: Icon, onClick, color = "bg-rose-500", active = false, iconColor = "text-white" }: { icon: any, onClick: () => void, color?: string, active?: boolean, iconColor?: string }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={`w-12 h-12 sm:w-14 sm:h-14 ${active ? 'bg-rose-600 ring-4 ring-rose-100' : color} ${iconColor} flex items-center justify-center rounded-full shadow-lg transition-all`}
  >
    <Icon size={24} />
  </motion.button>
);

const DiamondIcon = ({ icon: Icon, onClick, color = "bg-rose-500" }: { icon: any, onClick: () => void, color?: string }) => (
  <motion.button
    whileHover={{ scale: 1.1, rotate: 45 }}
    whileTap={{ scale: 0.9, rotate: 45 }}
    onClick={onClick}
    className={`w-10 h-10 sm:w-12 sm:h-12 ${color} text-white flex items-center justify-center rounded-xl shadow-lg transform rotate-45`}
  >
    <div className="transform -rotate-45">
      <Icon size={18} className="sm:w-5 sm:h-5" />
    </div>
  </motion.button>
);

export default function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showTreatments, setShowTreatments] = useState(false);

  const handleCall = () => window.open(`tel:${PHONE}`, '_self');
  const handleWhatsApp = () => {
    const message = "היי אהובה 💛 תודה שכתבת לי. אני נטלי.\nלפני שנתחיל—איך את מרגישה עכשיו? מה הכי כבד לך בתקופה הזו?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/972${PHONE.replace(/-/g, '').substring(1)}?text=${encodedMessage}`, '_blank');
  };
  const handleEmail = () => {
    const subject = encodeURIComponent("פנייה מבית RESET LALEV");
    const body = encodeURIComponent("היי אהובה 💛 תודה שכתבת לי. אני נטלי.");
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, '_self');
  };
  const handleWebsite = () => window.open(WEBSITE, '_blank');
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: BRAND_NAME,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('הקישור הועתק!');
    }
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${HEBREW_BRAND_NAME}\nORG:${BRAND_NAME}\nTEL;TYPE=CELL:${PHONE}\nEMAIL:${EMAIL}\nURL:${WEBSITE}\nEND:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Reset_Lalev.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F9] text-stone-800 font-sans selection:bg-rose-100 flex flex-col items-center overflow-x-hidden" dir="rtl">
      {/* Main Container */}
      <div className="w-full max-w-[450px] min-h-screen bg-white shadow-2xl relative flex flex-col">
        
        {/* Hero Section with Atmospheric Background */}
        <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-60"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/12J6S6jKtjuvcurQ85PbM0VzwKU6wOCnX" 
              alt="Atmosphere" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/5" />
          
          {/* Floating Heart Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: -100, opacity: [0, 0.5, 0] }}
                transition={{ 
                  duration: 10 + i * 2, 
                  repeat: Infinity, 
                  delay: i * 3,
                  ease: "easeInOut"
                }}
                className="absolute text-rose-200"
                style={{ left: `${20 + i * 30}%`, top: '50%' }}
              >
                <Heart size={24 + i * 8} fill="currentColor" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Profile Section */}
        <div className="px-8 -mt-32 relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative"
          >
            <div className="w-52 h-52 rounded-full bg-white p-2 shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/d/12bfPSkBTT8OP3Kpx6wD3aCplG_pC7luo" 
                alt="נטלי צ'ודנובסקי" 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 bg-rose-500 text-white p-3 rounded-2xl shadow-lg border-4 border-white"
            >
              <Heart size={20} fill="currentColor" />
            </motion.div>
          </motion.div>

          <div className="mt-8 text-center px-4 w-full">
            <div className="flex items-start justify-center gap-6 mb-8">
              <div className="flex flex-col items-center pt-1">
                <h1 className="text-2xl font-black text-stone-900 tracking-tight whitespace-nowrap">{HEBREW_BRAND_NAME}</h1>
                <p className="text-stone-500 font-medium text-sm whitespace-nowrap">Master Holistic Coach</p>
                <p className="text-stone-500 font-medium text-sm whitespace-nowrap">ומטפלת רגשית</p>
              </div>
              <div className="bg-white p-2 rounded-2xl shadow-xl border border-stone-100 shrink-0">
                <QRCodeSVG 
                  value={window.location.href} 
                  size={110}
                  level="M"
                  fgColor="#000000"
                  includeMargin={true}
                />
              </div>
            </div>
            
            <p className="text-rose-500 font-bold text-lg mb-4">בדרך לאהבה 💕 RESET_LALEV</p>
            
            <div className="text-stone-600 text-sm leading-relaxed space-y-3">
              <p className="font-bold text-stone-800 text-base mb-2">
                להפסיק לרדוף אחרי אהבה ולהתחיל למגנט אותה מתוך השקט הפנימי!
              </p>
              <p>
                מזמינה אותך לתהליך רך וממוקד של פענוח צופן הזוגיות שלך.<br />
                לא עוד טיפול קלאסי, אלא שינוי שיהפוך אותך למגנט של אהבה בריאה.<br />
                בואי נדייק את הפרק הבא שלך 💕
              </p>
            </div>
          </div>

          {/* Circular Toggles Row */}
          <div className="w-full mt-8 px-4">
            <div className="flex justify-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center gap-2">
                <CircleIcon 
                  icon={User} 
                  active={showDetails}
                  onClick={() => {
                    setShowDetails(!showDetails);
                    setShowCertifications(false);
                    setShowTreatments(false);
                  }} 
                  color="bg-rose-400"
                />
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">אודות</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircleIcon 
                  icon={Award} 
                  active={showCertifications}
                  onClick={() => {
                    setShowCertifications(!showCertifications);
                    setShowDetails(false);
                    setShowTreatments(false);
                  }} 
                  color="bg-rose-400"
                />
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">הכשרות</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircleIcon 
                  icon={Sparkles} 
                  active={showTreatments}
                  onClick={() => {
                    setShowTreatments(!showTreatments);
                    setShowDetails(false);
                    setShowCertifications(false);
                  }} 
                  color="bg-rose-400"
                />
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">טיפולים</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CircleIcon 
                  icon={Plus} 
                  onClick={downloadVCard}
                  color="bg-[#E6E6FA]"
                  iconColor="text-[#8B7BBF]"
                />
                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">הוספה</span>
              </div>
            </div>

            {/* Expanded Content Area */}
            <div className="mt-6">
              <AnimatePresence mode="wait">
                {showDetails && (
                  <motion.div
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-rose-50/50 rounded-[32px] p-6 border border-rose-100"
                  >
                    <div className="text-stone-600 leading-relaxed text-sm whitespace-pre-line">
                      <Markdown>{ABOUT_TEXT}</Markdown>
                    </div>
                  </motion.div>
                )}
                {showCertifications && (
                  <motion.div
                    key="certs"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-stone-50/50 rounded-[32px] p-6 border border-stone-100"
                  >
                    <div className="text-stone-600 leading-relaxed text-sm whitespace-pre-line">
                      <Markdown>{CERTIFICATIONS_TEXT}</Markdown>
                    </div>
                  </motion.div>
                )}
                {showTreatments && (
                  <motion.div
                    key="treatments"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-rose-50/50 rounded-[32px] p-6 border border-rose-100"
                  >
                    <div className="text-stone-600 leading-relaxed text-sm whitespace-pre-line">
                      <Markdown>{TREATMENTS_LIST_TEXT}</Markdown>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Icon Links Row (GAPS עדין) */}
          <div className="w-full mt-6">
            <h3 className="text-sm font-black text-stone-800 uppercase tracking-[0.2em] text-center mb-8 border-b border-rose-100 pb-2 mx-12">יצירת קשר ומידע</h3>
            <div className="flex justify-center gap-4 sm:gap-6">
              <DiamondIcon icon={MessageCircle} onClick={handleWhatsApp} color="bg-[#90EE90]" />
              <DiamondIcon icon={Phone} onClick={handleCall} color="bg-[#C8A2C8]" />
              <DiamondIcon icon={Globe} onClick={handleWebsite} color="bg-rose-400" />
              <DiamondIcon icon={Mail} onClick={handleEmail} color="bg-[#C8A2C8]" />
              <DiamondIcon icon={Share2} onClick={handleShare} color="bg-[#90EE90]" />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="w-full mt-8 flex justify-center gap-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-rose-500 transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-rose-500 transition-colors"
            >
              <Facebook size={24} />
            </motion.a>
          </div>

          <footer className="w-full py-8 border-t border-stone-100 text-center">
            <p className="text-stone-300 text-[10px] font-bold uppercase tracking-widest">
              © 2024 {BRAND_NAME} • Crafted with Love
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
