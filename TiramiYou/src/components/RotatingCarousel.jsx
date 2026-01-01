import { useState, useEffect } from "react";
import { useLanguage } from '../LanguageContext.jsx'; 
import { translations } from '../translations.js';

function TiramisuPodium() {
    const { language } = useLanguage();
  return (
    <section className="bg-white py-20 h-full flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="bg-gradient-to-br from-pink-50 to-gray-50 rounded-3xl shadow-xl overflow-hidden p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FF93A2] text-white px-4 py-2 rounded-full mb-4">
              <span className="text-lg">🏆</span>
              <span className="font-bold text-sm uppercase tracking-wider">Top Seller</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
              {translations[language].best}
            </h2>
            <p className="text-gray-600 text-lg">
              {translations[language].love}
            </p>
          </div>

          <div className="flex justify-center items-end gap-4 md:gap-8 mb-12">
            {/* Platz 2 */}
            <div className="flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-4 group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition"></div>
                <img
                  src="/images/Pistazie.png"
                  alt="Pistazien Tiramisu"
                  className="relative w-32 h-32 object-contain transform group-hover:rotate-3 transition-transform"
                />
                <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700 shadow-lg">
                  #2
                </div>
              </div>
              <div className="w-32 h-28 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-2xl flex flex-col items-center justify-center shadow-xl border-t-4 border-gray-400">
                <span className="text-4xl font-black text-gray-700">2</span>
              </div>
            </div>

            {/* Platz 1 */}
            <div className="flex flex-col items-center transform hover:scale-110 transition-all duration-300 -mt-8">
              <div className="relative mb-4 group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition animate-pulse"></div>
                <img
                  src="/images/Classic.png"
                  alt="Classic Tiramisu"
                  className="relative w-40 h-40 object-contain transform group-hover:rotate-6 transition-transform"
                />
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full px-3 py-1 text-sm font-black text-yellow-900 shadow-xl border-2 border-yellow-400 animate-bounce">
                  #1
                </div>
              </div>
              <div className="w-36 h-40 bg-gradient-to-b from-[#FF93A2] to-[#FF7B8C] rounded-t-2xl flex flex-col items-center justify-center shadow-2xl border-t-4 border-pink-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-10 animate-pulse"></div>
                <span className="text-5xl font-black text-white relative z-10">1</span>
              </div>
            </div>

            {/* Platz 3 */}
            <div className="flex flex-col items-center transform hover:scale-105 transition-all duration-300">
              <div className="relative mb-4 group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition"></div>
                <img
                  src="/images/Lotus.png"
                  alt="Lotus Tiramisu"
                  className="relative w-32 h-32 object-contain transform group-hover:-rotate-3 transition-transform"
                />
                <div className="absolute -top-2 -right-2 bg-white rounded-full px-2 py-1 text-xs font-bold text-gray-700 shadow-lg">
                  #3
                </div>
              </div>
              <div className="w-32 h-24 bg-gradient-to-b from-orange-200 to-orange-300 rounded-t-2xl flex flex-col items-center justify-center shadow-xl border-t-4 border-orange-400">
                <span className="text-4xl font-black text-orange-800">3</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/produkte"
              className="inline-flex items-center gap-3 bg-[#FF93A2] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FF7B8C] transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <span>{translations[language].compMenu}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <p className="text-sm text-gray-500 mt-4">
              {translations[language].disc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsPromotion() {
    const { language } = useLanguage();
  return (
    <section className="bg-white py-20 h-full flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#FF93A2] text-white px-4 py-2 rounded-full mb-6 w-fit">
                <span className="text-lg">✨</span>
                <span className="font-bold text-sm uppercase tracking-wider">{translations[language].new}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {translations[language].newTir}
              </h2>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {translations[language].long}
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-md mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">🍎</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{translations[language].saison}</h3>
                      <p className="text-sm text-gray-600">{translations[language].fresh}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">🎨</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">{translations[language].creative}</h3>
                      <p className="text-sm text-gray-600">{translations[language].combi}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">⚡</div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Limited Editions</h3>
                      <p className="text-sm text-gray-600">{translations[language].exclusive}</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/news"
                className="inline-flex items-center gap-3 bg-[#FF93A2] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FF7B8C] transition-all duration-300 shadow-lg hover:shadow-xl w-fit group"
              >
                <span>{translations[language].newCreation}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="relative p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-pink-100/30 to-transparent">
              <div className="relative w-full max-w-sm">
                <div className="absolute -top-4 -right-4 bg-[#FF93A2] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl z-20 animate-bounce">
                  <div className="text-center">
                    <div className="text-sm font-bold">{translations[language].n}</div>
                    <div className="text-xs">{new Date().getFullYear()}</div>
                  </div>
                </div>

                <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
                  <div className="relative mb-6 mt-4">
                    <div className="w-full h-48 bg-gradient-to-b from-amber-50 via-cream-100 to-amber-100 rounded-2xl flex items-center justify-center overflow-hidden border-4 border-amber-200/50 shadow-inner">
                      <div className="text-center">
                        <img
                          src="/images/Apple-Crumble.png"
                          alt="Apple Crumble Tiramisu"
                          className="relative w-40 h-40 object-contain transform group-hover:rotate-6 transition-transform"
                        />
                        <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide">Premium Quality</div>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-12 h-12 bg-amber-800/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-2 left-2 w-16 h-16 bg-amber-700/10 rounded-full blur-xl"></div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-black text-gray-900">
                      Apple-Crumble
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {translations[language].text}
                    </p>

                    <div className="flex items-center gap-2 pt-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <span key={i} className="text-yellow-400 text-lg">⭐</span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{translations[language].pop}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RotatingCarousel() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const sections = [
    { component: <TiramisuPodium />, name: "Bestseller" },
    { component: <NewsPromotion />, name: translations[language].new }
  ];

  // Auto-rotation
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, sections.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sections.map((section, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {section.component}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - nur auf Desktop */}
      {currentIndex > 0 && (
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[#FF93A2] rounded-full p-3 hover:bg-[#FF6B7A] hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl items-center justify-center"
          aria-label="Vorherige Sektion"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {currentIndex < sections.length - 1 && (
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#FF93A2] rounded-full p-3 hover:bg-[#FF6B7A] hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl items-center justify-center"
          aria-label="Nächste Sektion"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group flex flex-col items-center gap-2"
            aria-label={`Zu ${section.name} wechseln`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                currentIndex === index
                  ? "bg-[#FF93A2] border-[#FF93A2] scale-125 shadow-lg"
                  : "bg-gray-400 border-gray-500 hover:bg-gray-600 hover:border-gray-700 hover:scale-110"
              }`}
            />
            <span
              className={`text-xs font-bold transition-all duration-300 ${
                currentIndex === index
                  ? "text-[#FF93A2]"
                  : "text-gray-700"
              }`}
            >
              {section.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}