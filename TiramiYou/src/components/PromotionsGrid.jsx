export default function PromotionsGrid() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Bestseller Card */}
                    <a
                        href="/produkte"
                        className="group bg-gradient-to-br from-pink-50 to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        <div className="p-8 text-center">
                            <div className="inline-flex items-center gap-2 bg-[#FF93A2] text-white px-3 py-1 rounded-full mb-4 text-sm font-bold">
                                <span>🏆</span>
                                <span>TOP SELLER</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Unsere Bestseller
                            </h3>

                            <p className="text-gray-600 text-sm mb-6">
                                Entdecke die beliebtesten Tiramisu-Sorten
                            </p>

                            {/* Mini Podest */}
                            <div className="flex justify-center items-end gap-2 mb-6">
                                <div className="flex flex-col items-center">
                                    <img src="/images/Pistazie.png" alt="Platz 2" className="w-16 h-16 object-contain mb-1" />
                                    <div className="w-12 h-10 bg-gray-200 rounded-t-lg flex items-center justify-center text-lg font-bold text-gray-700">
                                        2
                                    </div>
                                </div>

                                <div className="flex flex-col items-center -mt-4">
                                    <img src="/images/Classic.png" alt="Platz 1" className="w-20 h-20 object-contain mb-1" />
                                    <div className="w-14 h-14 bg-gradient-to-b from-[#FF93A2] to-[#FF7B8C] rounded-t-lg flex items-center justify-center text-xl font-bold text-white shadow-lg">
                                        1
                                    </div>
                                </div>

                                <div className="flex flex-col items-center">
                                    <img src="/images/Lotus.png" alt="Platz 3" className="w-16 h-16 object-contain mb-1" />
                                    <div className="w-12 h-8 bg-orange-200 rounded-t-lg flex items-center justify-center text-lg font-bold text-orange-800">
                                        3
                                    </div>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 text-[#FF93A2] font-semibold group-hover:gap-3 transition-all">
                                <span>Zur Speisekarte</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </a>

                    {/* News Card */}
                    <a
                        href="/news"
                        className="group bg-gradient-to-br from-gray-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        <div className="p-8 text-center">
                            <div className="inline-flex items-center gap-2 bg-[#FF93A2] text-white px-3 py-1 rounded-full mb-4 text-sm font-bold">
                                <span>✨</span>
                                <span>IMMER NEU</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Neue Sorten
                            </h3>

                            <p className="text-gray-600 text-sm mb-6">
                                Verpasse keine innovativen Kreationen
                            </p>

                            {/* Card Stack Mini */}
                            <div className="relative h-32 mb-6 mx-auto max-w-[180px]">
                                <div className="absolute top-0 left-0 right-0 bg-white rounded-xl shadow p-3 transform rotate-3 opacity-40">
                                    <div className="h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-lg"></div>
                                </div>

                                <div className="absolute top-2 left-0 right-0 bg-white rounded-xl shadow-lg p-3 transform z-10">
                                    <div className="h-24 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg flex flex-col justify-between p-2 relative">
                                        <div className="absolute top-0 right-0 bg-[#FF93A2] text-white px-2 py-1 rounded-bl-lg text-xs font-bold">
                                            NEU
                                        </div>
                                        <div className="pt-4">
                                            <p className="text-sm font-bold text-gray-800">Erdbeere-Basilikum</p>
                                        </div>
                                        <div className="text-2xl text-center">🍓🌿</div>
                                    </div>
                                </div>

                                <div className="absolute -top-2 -right-2 bg-[#FF93A2] text-white rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold shadow-xl z-20">
                                    3<br />Neue
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 text-[#FF93A2] font-semibold group-hover:gap-3 transition-all">
                                <span>Zu den Neuigkeiten</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </a>

                    {/* Location Card */}
                    <a
                        href="/anfahrt"
                        className="group bg-gradient-to-br from-pink-50 to-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        <div className="p-8 text-center">
                            <div className="inline-flex items-center gap-2 bg-[#FF93A2] text-white px-3 py-1 rounded-full mb-4 text-sm font-bold">
                                <span>📍</span>
                                <span>BESUCHE UNS</span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Mitten in Frankfurt
                            </h3>

                            <p className="text-gray-600 text-sm mb-6">
                                Super einfach zu erreichen
                            </p>

                            {/* Location Pin */}
                            <div className="relative h-32 mb-6 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[#FF93A2] rounded-full blur-2xl opacity-20 animate-pulse"></div>
                                <div className="relative bg-[#FF93A2] w-20 h-20 rounded-full flex items-center justify-center shadow-xl">
                                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="space-y-2 mb-6 text-left">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-lg">🚇</span>
                                    <span className="text-gray-700">Bockenheimer Warte</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-lg">⏰</span>
                                    <span className="text-gray-700">Mo–Fr: 11:00–20:00</span>
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 text-[#FF93A2] font-semibold group-hover:gap-3 transition-all">
                                <span>Route planen</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
}