import React, { useEffect } from 'react';

export const Book: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-24 max-w-[1920px] mx-auto px-4 md:px-8 lg:px-12 min-h-[60vh] flex flex-col justify-center items-center text-center animate-fade-in-up md:relative">
            <div className="md:absolute top-8 left-0 hidden md:block">
                <h2 className="text-sm font-bold uppercase tracking-widest text-navy-900 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-sky-500"></span>
                    Books
                </h2>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif text-navy-900 mb-6">Coming Soon</h1>
            <p className="text-lg text-gray-500 font-light">We are working on something special.</p>
        </div>
    );
};
