import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiCalendar, FiAward } from 'react-icons/fi';
import { personalInfo, education } from '../data/portfolio';

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-2">{'// 01. About Me'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get To Know <span className="gradient-text">Me</span>
          </h2>
          <div className="line-decoration mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Who I Am</h3>
              <p className="text-slate-400 leading-relaxed text-base">{personalInfo.bio}</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-400">
                  <FiMapPin className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <FiMail className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm truncate">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <FiCalendar className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm">Class of 2026</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400">
                  <FiAward className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm">MCA Graduate</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FiAward className="text-primary-400" />
              Education
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-cyan-500" />
              {education.map((edu) => (
                <div key={edu.degree} className="relative pl-12 pb-8 last:pb-0">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-dark-300 z-10" />
                  <div className="glass-card rounded-xl p-5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-mono">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-primary-400 text-sm mb-1">{edu.institution}</p>
                    <p className="text-cyan-400 text-sm font-mono mb-3">{edu.grade}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;