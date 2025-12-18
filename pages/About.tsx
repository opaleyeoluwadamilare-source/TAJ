import React, { useEffect } from 'react';

export const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-24 space-y-32 animate-fade-in-up">
            {/* Main About Section */}
            <section className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-12 tracking-tight">About</h1>
                <div className="space-y-8 text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
                    <p>
                        <strong className="text-navy-900 font-semibold">Temitope Ezekiel Ajibola</strong> is a generational architect shaping a future where spiritual intelligence informs human innovation and experience, enabling the rise of people, systems, and nations that endure.
                    </p>
                    <p>
                        Across ministry, research, and enterprise, Temitope carries a singular mandate: <span className="italic font-serif text-navy-900">build what endures</span>.
                    </p>
                </div>
            </section>

            {/* Research & Industry */}
            <section className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
                    <div className="md:col-span-4 sticky top-32">
                        <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-sky-500"></span>
                            Research & Industry
                        </h2>
                    </div>
                    <div className="md:col-span-8 space-y-16">
                        <div className="group hover:-translate-y-1 transition-transform duration-500">
                            <h3 className="text-2xl font-serif text-navy-900 mb-4">Academic Frontier</h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                A PhD researcher in AI and blockchain security, his academic work includes published research papers and pending patents advancing resilient, intelligent systems for the emerging digital economy.
                            </p>
                        </div>

                        <div className="group hover:-translate-y-1 transition-transform duration-500">
                            <h3 className="text-2xl font-serif text-navy-900 mb-4">Industry Leadership</h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                In industry, Temitope builds intelligent architectures and next-generation automation frameworks at the frontier of artificial intelligence, security, and organizational transformation. His rare ability to move fluently between revelation and research, ministry and industry, defines his evolving impact across communities and institutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ministry & Impact */}
            <section className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
                    <div className="md:col-span-4 sticky top-32">
                        <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-sky-500 mr-2"></span>
                            Ministry & Impact
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                            He is the Founder of <strong className="text-navy-900">The Davidic Tribe</strong> and <strong className="text-navy-900">10 Hours Houston</strong>, a prayer movement contending for the souls of the younger generation and establishing them in God’s purposes—so they can influence systems, steward authority, and shape culture with boldness and clarity.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
