import React, { useEffect } from 'react';

export const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-24 space-y-32 animate-fade-in-up relative">
            {/* Sticky Side Label for Desktop */}
            <div className="hidden md:block fixed left-4 lg:left-12 top-1/2 -translate-y-1/2 z-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-navy-900 -rotate-90 origin-center whitespace-nowrap flex items-center gap-4">
                    About
                    <span className="w-8 h-[1px] bg-sky-500"></span>
                </h2>
            </div>

            {/* Main About Section */}
            <section className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-navy-900 mb-12 tracking-tight">About</h1>
                <div className="space-y-8 text-xl md:text-2xl font-light text-gray-600 leading-relaxed">
                    <p>
                        <strong className="text-navy-900 font-semibold">Temitope Ezekiel Ajibola</strong> is a generational architect shaping a future where divine intelligence informs human innovation and experience, enabling the rise of people, systems, and nations that endure.
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
                            RESEARCH & INDUSTRY
                        </h2>
                    </div>
                    <div className="md:col-span-8 space-y-16">
                        <div className="group hover:-translate-y-1 transition-transform duration-500">
                            <h3 className="text-2xl font-serif text-navy-900 mb-4">Academic Frontier</h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                A PhD researcher in AI and blockchain security, Temitope’s academic work includes published research papers and pending patents that advance resilient, intelligent systems for the emerging digital economy.
                            </p>
                        </div>

                        <div className="group hover:-translate-y-1 transition-transform duration-500">
                            <h3 className="text-2xl font-serif text-navy-900 mb-4">Industry Leadership</h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                                In industry, he builds intelligent architectures and next-generation automation frameworks at the frontier of artificial intelligence, security, and organizational transformation. His rare ability to move fluently between revelation and research — ministry and industry — defines his evolving impact across communities and institutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Innovation & Ecosystem */}
            <section className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
                    <div className="md:col-span-4 sticky top-32">
                        <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-sky-500"></span>
                            INNOVATION & ECOSYSTEM
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <div className="group hover:-translate-y-1 transition-transform duration-500">
                            <h3 className="text-2xl font-serif text-navy-900 mb-4">MorganHacks: A National Innovation Platform</h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
                                He is the Founder of <strong className="text-navy-900">MorganHacks</strong>, one of the fastest-growing university-led tech movements in the HBCU ecosystem. Since 2023, MorganHacks has reached over 1,000 students from dozens of institutions and was recognized by Vice President Kamala Harris as a platform advancing innovation.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                                It now serves as a national launchpad for creativity and real-world problem-solving — equipping students through immersive workshops, mentorship, community challenges, and hands-on exploration in AI, robotics, cybersecurity, sustainability, and emerging technologies.
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
                            MINISTRY & IMPACT
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <div className="group hover:-translate-y-1 transition-transform duration-500">
                            <h3 className="text-2xl font-serif text-navy-900 mb-4">Prayer Movements</h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                                He is also the Founder of <strong className="text-navy-900">The Davidic Tribe</strong> and <strong className="text-navy-900">10 Hours Houston</strong> — prayer movements contending for the souls of the younger generation and establishing them in God’s purposes, so they can influence systems, steward authority, and shape culture with boldness and clarity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recognition & Influence */}
            <section className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
                    <div className="md:col-span-4 sticky top-32">
                        <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-sky-500 mr-2"></span>
                            RECOGNITION & INFLUENCE
                        </h2>
                    </div>
                    <div className="md:col-span-8">
                        <div className="group hover:-translate-y-1 transition-transform duration-500">
                            <h3 className="text-2xl font-serif text-navy-900 mb-4">Honors & Recognition</h3>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mb-6">
                                Temitope’s leadership has earned honors such as <strong className="text-navy-900">HBCUniverse 30 Under 30</strong> and <strong className="text-navy-900">Rising Star</strong> recognition by the Baltimore City Chamber of Commerce.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                                He has also been featured on platforms like <strong className="text-navy-900">God Bless Bitcoin</strong>, appearing alongside global thought leaders such as Mark Cuban, Robert Kiyosaki, Robert F. Kennedy Jr., and Michael Saylor, shaping conversations about the future of money and the spiritual patterns guiding emerging global systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
