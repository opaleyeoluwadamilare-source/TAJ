import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const recognitions = [
    {
        text: "HBCUniverse 30 Under 30",
        detail: "Honoring excellence and impact."
    },
    {
        text: "Rising Star",
        detail: "Baltimore City Chamber of Commerce"
    },
    {
        text: "Featured on God Bless Bitcoin",
        detail: "Alongside Mark Cuban, Robert Kiyosaki, and Michael Saylor."
    }
];

export const RecognitionCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % recognitions.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + recognitions.length) % recognitions.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % recognitions.length);
    };

    return (
        <section className="py-32 bg-gray-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-navy-50 skew-x-12 opacity-50"></div>

            <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col items-center justify-center text-center mb-16">
                    <div className="flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-sky-500"></span>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900">Recognition & Accolades</h3>
                        <span className="w-12 h-[1px] bg-sky-500"></span>
                    </div>
                </div>

                <div className="relative w-full max-w-4xl mx-auto h-[400px] bg-white rounded-2xl shadow-xl shadow-navy-100 overflow-hidden flex items-center justify-center">
                    {recognitions.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-700 transform ${index === currentIndex
                                ? 'opacity-100 translate-y-0 scale-100'
                                : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
                                }`}
                        >
                            <div className="mb-8 p-4 bg-navy-50 rounded-full text-sky-500">
                                <Award size={48} />
                            </div>

                            <h4 className="text-3xl md:text-5xl font-serif text-navy-900 tracking-tight leading-tight mb-6">
                                {item.text}
                            </h4>
                            <div className="w-16 h-1 bg-sky-500 mb-6 mx-auto"></div>
                            <p className="text-gray-500 text-lg md:text-xl font-light tracking-wide leading-relaxed max-w-2xl">
                                {item.detail}
                            </p>
                        </div>
                    ))}

                    {/* Navigation Controls */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 md:left-8 p-3 text-gray-400 hover:text-navy-900 transition-colors border border-gray-100 hover:border-sky-200 rounded-full z-20 bg-white shadow-sm"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 md:right-8 p-3 text-gray-400 hover:text-navy-900 transition-colors border border-gray-100 hover:border-sky-200 rounded-full z-20 bg-white shadow-sm"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 flex gap-2 z-20">
                        {recognitions.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-sky-500' : 'w-2 bg-gray-300 hover:bg-sky-300'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
