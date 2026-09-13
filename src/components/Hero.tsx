import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: personalInfo.social.github, label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: <FiTwitter size={20} />, url: personalInfo.social.twitter, label: 'Twitter' },
    { icon: <FiMail size={20} />, url: personalInfo.social.email, label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                <span className="text-sm text-slate-400">Available for Opportunities</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              <span className="text-white">Hi, I'm</span><br />
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl text-slate-400 mb-6 h-12"
            >
              <TypeAnimation
                sequence={['Full Stack Developer', 2000, 'React & Node.js Dev', 2000, 'MCA Graduate', 2000, 'Problem Solver', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Crafting modern web experiences with clean code, scalable architecture, and pixel-perfect design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold gradient-bg text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold border border-primary-500/30 text-primary-400 hover:bg-primary-500/10 text-center"
              >
                Get In Touch
              </a>
            </motion.div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass text-slate-400 hover:text-primary-400 transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 max-w-lg w-full"
          >
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-slate-900/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-slate-500 font-mono">developer.tsx</span>
              </div>
              <div className="p-6 code-block text-sm leading-relaxed">
                <div><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{'{'}</span></div>
                <div className="pl-4"><span className="text-primary-300">name</span>: <span className="text-green-300">'{personalInfo.name}'</span>,</div>
                <div className="pl-4"><span className="text-primary-300">role</span>: <span className="text-green-300">'Full Stack Dev'</span>,</div>
                <div className="pl-4"><span className="text-primary-300">degree</span>: <span className="text-green-300">'MCA Graduate'</span>,</div>
                <div className="pl-4"><span className="text-primary-300">skills</span>: [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Node'</span>, <span className="text-green-300">'TS'</span>],</div>
                <div className="pl-4"><span className="text-primary-300">status</span>: <span className="text-green-300">'Ready for hire'</span></div>
                <div><span className="text-yellow-300">{'}'}</span>;</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;