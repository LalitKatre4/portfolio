import React, { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-dark-300">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}><About /></Suspense>
        <Suspense fallback={<SectionLoader />}><Skills /></Suspense>
        <Suspense fallback={<SectionLoader />}><Projects /></Suspense>
        <Suspense fallback={<SectionLoader />}><Contact /></Suspense>
        <Suspense fallback={<SectionLoader />}><Footer /></Suspense>
      </main>
      <ScrollToTop />
    </div>
  );
};

export default App;