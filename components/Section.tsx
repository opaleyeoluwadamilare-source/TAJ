import React from 'react';
import { SectionProps } from '../types';

interface ExtendedSectionProps extends SectionProps {
  title: string;
}

export const Section: React.FC<ExtendedSectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 scroll-mt-32 ${className}`}
    >
      <div className="md:col-span-3">
        <h3 className="text-sm font-bold uppercase tracking-widest text-navy-900 sticky top-32 flex items-center gap-2">
          {/* Decorative line for visual hierarchy */}
          <span className="hidden md:block w-8 h-[1px] bg-sky-500/50"></span>
          {title}
        </h3>
      </div>
      <div className="md:col-span-9">
        {children}
      </div>
    </section>
  );
};