import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { personalInfo, navItems } from '../data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center justify-center gap-1">
          © {new Date().getFullYear()} {personalInfo.name}. Built with <FiHeart className="text-red-400" /> and React.
        </p>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-primary-400 transition-colors">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;