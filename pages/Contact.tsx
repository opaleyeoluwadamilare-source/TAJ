import React from 'react';
import { Section } from '../components/Section';
import { ArrowUpRight, GraduationCap, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
    return (
        <Section id="contact" title="Connect">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gray-50 p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-navy-900 mb-6">Send a Message</h3>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" id="name" className="w-full p-3 border border-gray-200 rounded focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="email" className="w-full p-3 border border-gray-200 rounded focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea id="message" rows={4} className="w-full p-3 border border-gray-200 rounded focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-navy-900 text-white font-medium py-3 px-6 rounded hover:bg-sky-600 transition-colors duration-300 uppercase tracking-wider">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-1 gap-4 h-fit">
                    <a href="https://www.linkedin.com/in/temitope-ajibola" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 border border-gray-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 bg-white">
                        <Linkedin className="text-navy-900 group-hover:text-sky-500 transition-colors" size={20} />
                        <span className="ml-3 font-medium text-navy-900">LinkedIn</span>
                        <ArrowUpRight className="ml-auto text-gray-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                    </a>
                    <a href="https://x.com/TEAJIBOLA" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 border border-gray-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 bg-white">
                        <Twitter className="text-navy-900 group-hover:text-sky-500 transition-colors" size={20} />
                        <span className="ml-3 font-medium text-navy-900">Twitter / X</span>
                        <ArrowUpRight className="ml-auto text-gray-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                    </a>
                    <a href="https://www.instagram.com/teajibola/" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 border border-gray-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 bg-white">
                        <Instagram className="text-navy-900 group-hover:text-sky-500 transition-colors" size={20} />
                        <span className="ml-3 font-medium text-navy-900">Instagram</span>
                        <ArrowUpRight className="ml-auto text-gray-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                    </a>
                    <a href="https://scholar.google.com/citations?user=3IR2-BcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 border border-gray-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 bg-white">
                        <GraduationCap className="text-navy-900 group-hover:text-sky-500 transition-colors" size={20} />
                        <span className="ml-3 font-medium text-navy-900">Google Scholar</span>
                        <ArrowUpRight className="ml-auto text-gray-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                    </a>
                    <a href="mailto:temitopeajibola7@yahoo.com" className="group flex items-center p-4 border border-gray-100 hover:border-sky-500 hover:bg-sky-50 transition-all duration-300 bg-white">
                        <Mail className="text-navy-900 group-hover:text-sky-500 transition-colors" size={20} />
                        <span className="ml-3 font-medium text-navy-900">Email</span>
                        <ArrowUpRight className="ml-auto text-gray-300 group-hover:text-sky-500 opacity-0 group-hover:opacity-100 transition-all" size={16} />
                    </a>
                </div>
            </div>
        </Section>
    );
};
