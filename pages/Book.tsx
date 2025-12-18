import React from 'react';
import { Section } from '../components/Section';

export const Book: React.FC = () => {
    return (
        <Section id="book" title="Book">
            <div className="flex flex-col items-center justify-center py-20">
                <h2 className="text-4xl font-serif text-navy-900 mb-4">Coming Soon</h2>
                <p className="text-gray-600 text-lg">We are working on something special.</p>
            </div>
        </Section>
    );
};
