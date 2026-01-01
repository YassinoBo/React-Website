export default function LocationPromotion() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="bg-gradient-to-br from-pink-50 to-gray-50 rounded-3xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-0">

                        {/* Links: Karte/Visual */}
                        <div className="relative bg-gray-100 min-h-[400px] flex items-center justify-center p-8">
                            {/* Dekoelement: Standort-Pin */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#FF93A2] rounded-full blur-3xl opacity-20 animate-pulse"></div>

                                {/* Großer Pin */}
                                <div className="relative bg-[#FF93A2] w-32 h-32 rounded-full flex items-center justify-center shadow-2xl">
                                    <svg
                                        className="w-16 h-16 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>

                                {/* Kleine Infokarten drum herum */}
                                <div className="absolute -top-8 -right-16 bg-white rounded-xl shadow-lg p-3 w-32">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">🚇</span>
                                        <div className="text-xs">
                                            <p className="font-bold">U-Bahn</p>
                                            <p className="text-gray-600">5 Min</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-8 -left-16 bg-white rounded-xl shadow-lg p-3 w-32">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">🅿️</span>
                                        <div className="text-xs">
                                            <p className="font-bold">Parkplatz</p>
                                            <p className="text-gray-600">In der Nähe</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-1/2 -right-20 bg-white rounded-xl shadow-lg p-3 w-32 transform -translate-y-1/2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">🚶</span>
                                        <div className="text-xs">
                                            <p className="font-bold">Zu Fuß</p>
                                            <p className="text-gray-600">Zentral</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rechts: Text Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 bg-[#FF93A2] text-white px-4 py-2 rounded-full mb-6 w-fit">
                                <span className="text-lg">📍</span>
                                <span className="font-bold text-sm uppercase tracking-wider">Besuche uns</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                Mitten in Frankfurt!
                            </h2>

                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Wir sind zentral gelegen und super einfach zu erreichen. Ob mit der U-Bahn, dem Auto oder zu Fuß – finde den besten Weg zu uns und genieße dein Tiramisu vor Ort oder zum Mitnehmen.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                                    <div className="text-3xl flex-shrink-0">🏪</div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">Adresse</h3>
                                        <p className="text-gray-600 text-sm">
                                            Bockenheimer Anlage 1<br />
                                            60322 Frankfurt am Main
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                                    <div className="text-3xl flex-shrink-0">⏰</div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">Öffnungszeiten</h3>
                                        <p className="text-gray-600 text-sm">
                                            Mo–Fr: 11:00–20:00 Uhr<br />
                                            Sa–So: 12:00–20:00 Uhr
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                                    <div className="text-3xl flex-shrink-0">🚇</div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">Anfahrt</h3>
                                        <p className="text-gray-600 text-sm">
                                            U-Bahn: Bockenheimer Warte<br />
                                            Parkplätze in der Umgebung verfügbar
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="/anfahrt"
                                className="inline-flex items-center gap-3 bg-[#FF93A2] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FF7B8C] transition-all duration-300 shadow-lg hover:shadow-xl w-fit group"
                            >
                                <span>Route planen</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}