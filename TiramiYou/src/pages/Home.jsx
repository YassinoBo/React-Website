import { useState, useRef, useEffect } from "react";
import AccessibilityMenu from "../components/AccessibilityMenu";
import HomeHero from "../components/HomeHero.jsx";
import StoreGallery from "../components/StoreGallery";
import { useLanguage } from '../LanguageContext.jsx';
import { translations } from '../translations.js';
import RotatingCarousel from "../components/RotatingCarousel";

/* ======================
   1️⃣ Reviews
====================== */
const reviews = [
  {
    name: "Ismar Nurkovic",
    text: "Total nette Jungs, und das beste Tiramisu der Stadt. Klare Empfehlung",
    stars: 5,
  },
  {
    name: "Herolinda Az",
    text: "Ich finde genau so eine Idee hat im Rhein-Main-Gebiet gefehlt. Das Tiramisu, vor allem das Pistazien-, Haselnuss- und Lotustiramisu hat mir und meinem Partner geschmeckt. Die restlichen Sorten, wie Raffaello- und das klassische Tiramisu werde ich auf jeden Fall auch noch testen. Die Mitarbeiter waren super freundlich, Kunden- und Serviceorientiert und auch die Location ist gelungen gewählt. Weiter so 💪🏼",
    stars: 5,
  },
  {
    name: "Arsalan Havaie",
    text: `Ich bin großer Tiramisu Fan und hatte mich daher sehr auf die Eröffnung gefreut. 
Ich hatte den Classic und Pistazie probiert und es schmeckt unglaublich gut und das Team ist überaus freundlich und charismatisch. 
War auch froh noch rechtzeitig vor Ausverkauf da gewesen zu sein und trotz der hohen Nachfrage ein Cappuccino aufs Haus bekommen. 
#mademyday
Viel Erfolg, freue mich weitere Sorten zu probieren!`,
    stars: 5,
  },
  {
    name: "Sara G.",
    text: "Das Classic Tiramisu war echt sehr lecker und die Betreiber sind super freundlich. Kann man nur weiterempfehlen!!!",
    stars: 5,
  },
  {
    name: "Irfan Nurkovic",
    text: `Ein neuer Lieblingsort in Frankfurt! Stilvolles, gemütliches Ambiente, superfreundliches Team und himmlische Desserts – das Tiramisu ist einfach perfekt: cremig, frisch und voller Geschmack. Dazu gibt's hervorragenden Kaffee, der alles abrundet.
Fazit: Fünf Sterne in jeder Kategorie – Geschmack, Qualität, Service und Atmosphäre. Ein Muss für alle, die guten Kaffee und feine Desserts lieben!`,
    stars: 5,
  },
  {
    name: "Freazzz",
    text: "Bestes Tiramisu das ich je gegessen habe und sehr nettes Personal, komme gerne wieder",
    stars: 5,
  },
];

/* ======================
   2️⃣ Sterne
====================== */
function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.04 9.401c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      ))}
    </div>
  );
}

/* ======================
   3️⃣ Review Card
====================== */
function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 150;

  const displayText = !expanded && isLong
    ? review.text.slice(0, 150)
    : review.text;

  const handleClick = () => {
    if (isLong) setExpanded(!expanded);
  };

  const initials = review.name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <div
      onClick={handleClick}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 flex flex-col gap-4 w-[340px] flex-shrink-0 transition-all duration-300 border border-gray-100 ${isLong ? 'cursor-pointer' : ''}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF93A2] to-[#FF6B7A] flex items-center justify-center font-bold text-white text-sm shadow-md">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{review.name}</p>
            <Stars count={review.stars} />
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed">
        {displayText}
        {isLong && !expanded && "..."}
      </p>

      {isLong && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          className="text-[#FF93A2] font-semibold text-sm hover:text-[#FF6B7A] transition-colors self-start"
        >
          {expanded ? "weniger anzeigen" : "mehr lesen"}
        </button>
      )}
    </div>
  );
}

/* ======================
   4️⃣ Reviews Carousel
====================== */

function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMobileHint, setShowMobileHint] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardWidth = 340 + 24; // 340px Card + 24px gap
  const visibleCount = 4;
  const maxIndex = Math.max(0, reviews.length - visibleCount);
  const { language } = useLanguage();

  const scrollContainerRef = useRef(null);
  const hintDismissedRef = useRef(false); // Damit es nur einmal passiert

  const handlePrev = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  const handleNext = () => {
    if (isAnimating || currentIndex >= maxIndex) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Nur einmalig den Hinweis ausblenden beim ersten Scroll oder Touch
  const handleUserScroll = () => {
    if (!hintDismissedRef.current) {
      setShowMobileHint(false);
      hintDismissedRef.current = true;
    }
  };

  return (
    <div className="relative">
      {/* Pfeile nur Desktop */}
      <button
        onClick={handlePrev}
        disabled={isAnimating || currentIndex === 0}
        aria-label="Vorherige Bewertung"
        className="hidden md:flex absolute left-[-40px] top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#FF93A2] rounded-full p-3 hover:bg-[#FF6B7A] hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Mobile Swipe Hinweis */}
      {showMobileHint && (
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 -top-12 z-20 animate-bounce">
          <div className="bg-[#FF93A2] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
            {translations[language].scroll}
          </div>
        </div>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto md:overflow-hidden scrollbar-none px-4"
        onScroll={handleUserScroll}     // Desktop und Mobile
        onTouchStart={handleUserScroll} // Touch-Geräte
      >
        <div
          className="flex gap-6 items-start md:transition-transform md:duration-400 md:ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
          }}
        >
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Pfeil rechts */}
      <button
        onClick={handleNext}
        disabled={isAnimating || currentIndex >= maxIndex}
        aria-label="Nächste Bewertung"
        className="hidden md:flex absolute right-[-60px] top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#FF93A2] rounded-full p-3 hover:bg-[#FF6B7A] hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <svg className="w-6 h-6 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
  );
}



/* ======================
   5️⃣ Home Page
====================== */
export default function Home() {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = "TiramiYOU";
  }, []);

  return (
    <>
      {/* HERO */}
      <HomeHero />

      {/* ROTATING CAROUSEL */}
      <RotatingCarousel />

      {/* LADEN FOTOS */}
      <StoreGallery />

      {/* GOOGLE REVIEWS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold">{translations[language].good}</h3>
          <div className="flex justify-center items-center gap-2 my-2">
            <span className="text-lg font-semibold leading-none">4,8</span>
            <Stars count={5} />
          </div>

          <p className="text-sm text-gray-600">
            {translations[language].based} <strong>122 {translations[language].review}</strong>
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google"
            className="h-6 mx-auto mt-3 opacity-80"
          />
        </div>

        {/* Reviews Carousel */}
        <ReviewsCarousel />

        <AccessibilityMenu />
      </section>
    </>
  );
}