import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="mb-20">
      <div className="mb-8">
        <span className="inline-block py-1 px-3 bg-sky-50 text-sky-500 text-xs font-bold tracking-widest uppercase mb-6 rounded-full">
          Generational Architect
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-navy-900 mb-8">
          Shaping a future where spiritual intelligence informs human innovation and experience.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl leading-relaxed">
          Enabling the rise of people, systems, and nations that endure.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm uppercase tracking-wider text-gray-400 font-medium">
        <span>Leader</span>
        <span className="text-sky-500">•</span>
        <span>Builder</span>
        <span className="text-sky-500">•</span>
        <span>Inventor</span>
      </div>
    </section>
  );
};