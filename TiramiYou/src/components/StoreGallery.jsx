import { useState, useRef, useEffect } from "react";
import { useLanguage } from '../LanguageContext.jsx';
import { translations } from '../translations.js';

const storeImages = [
    "/images/pic1.png",
    "/images/pic2.png",
    "/images/pic1.png",
    "/images/pic2.png",
    "/images/pic1.png",
    "/images/pic2.png",
];

export default function StoreGallery() {
    const { language } = useLanguage();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const imageWidth = 288 + 24; // 72*4 = 288px + 24px gap
    const visibleCount = 4; // Anzahl sichtbarer Bilder
    const maxIndex = Math.max(0, storeImages.length - visibleCount);

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

    const handleModalPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => {
            const newIndex = (prev - 1 + storeImages.length) % storeImages.length;
            setCurrentIndex(newIndex);
            return newIndex;
        });
    };

    const handleModalNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => {
            const newIndex = (prev + 1) % storeImages.length;
            setCurrentIndex(newIndex);
            return newIndex;
        });
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-24 relative">
            {/* Überschrift mit Gradient */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF93A2] via-[#FF6B7A] to-[#FF93A2] bg-clip-text text-transparent mb-3">
                    {translations[language].store}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF93A2] to-transparent mx-auto rounded-full"></div>
            </div>

            {/* Hauptkarussell Container */}
            <div className="relative">
                
                {/* Linker Pfeil */}
                <button
                    onClick={handlePrev}
                    disabled={isAnimating || currentIndex === 0}
                    aria-label="Vorheriges Bild"
                    className="hidden md:flex absolute left-[-25px] top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#FF93A2] rounded-full p-3 hover:bg-[#FF6B7A] hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl group disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    <svg
                        className="w-6 h-6 text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Bilder Grid mit sanftem Slide */}
                <div className="overflow-hidden relative">
                    <div 
                        className="flex gap-6 px-4 transition-transform duration-400 ease-in-out"
                        style={{
                            transform: `translateX(-${currentIndex * imageWidth}px)`
                        }}
                    >
                        {storeImages.map((src, globalIndex) => (
                            <div
                                key={globalIndex}
                                className="relative group flex-shrink-0 cursor-pointer"
                                onClick={() => setSelectedIndex(globalIndex)}
                            >
                                <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <img
                                        src={src}
                                        alt={`Store ${globalIndex + 1}`}
                                        className="h-72 w-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay bei Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4 text-white">
                                            <p className="text-sm font-medium">{translations[language].translate}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Dekorativer Ring */}
                                <div className="absolute inset-0 rounded-3xl ring-2 ring-[#FF93A2]/0 group-hover:ring-[#FF93A2]/50 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rechter Pfeil */}
                <button
                    onClick={handleNext}
                    disabled={isAnimating || currentIndex >= maxIndex}
                    aria-label="Nächstes Bild"
                    className="hidden md:flex absolute right-[-30px] top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#FF93A2] rounded-full p-3 hover:bg-[#FF6B7A] hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl group disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    <svg
                        className="w-6 h-6 text-white transition-colors rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            </div>

            {/* Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 animate-fade-in"
                    onClick={() => setSelectedIndex(null)}
                >
                    {/* Linker Pfeil Modal */}
                    <button
                        onClick={(e) => { e.stopPropagation(); handleModalPrev(e); }}
                        aria-label="Vorheriges Bild"
                        className="hidden md:flex absolute left-20 top-1/2 -translate-y-1/2 z-10 bg-[#FF93A2] rounded-full p-4 hover:bg-[#FF6B7A] hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl items-center justify-center"
                    >
                        <svg
                            className="w-7 h-7 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Bild Container */}
                    <div className="relative max-h-[85vh] max-w-[85vw] animate-scale-in">
                        <img
                            src={storeImages[selectedIndex]}
                            alt="Vergrößerte Ansicht"
                            className="max-h-[85vh] max-w-[85vw] rounded-3xl shadow-2xl no_hover"
                            onClick={(e) => e.stopPropagation()}
                        />
                        {/* Bildnummer */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800">
                            {selectedIndex + 1} / {storeImages.length}
                        </div>
                    </div>

                    {/* Rechter Pfeil Modal */}
                    <button
                        onClick={(e) => { e.stopPropagation(); handleModalNext(e); }}
                        aria-label="Nächstes Bild"
                        className="hidden md:flex absolute right-20 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#FF93A2] rounded-full p-4 hover:bg-[#FF6B7A] hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl items-center justify-center"
                    >
                        <svg
                            className="w-7 h-7 text-white rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Schließen Button */}
                    <button
                        onClick={() => setSelectedIndex(null)}
                        aria-label="Schließen"
                        className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center hover:bg-[#FF93A2] hover:rotate-90 transition-all duration-300 shadow-xl group"
                    >
                        <svg
                            className="w-6 h-6 text-gray-800 group-hover:text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
                        </svg>
                    </button>
                </div>
            )}

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scale-in {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
                
                .animate-scale-in {
                    animation: scale-in 0.3s ease-out;
                }
            `}</style>
        </section>
    );
}