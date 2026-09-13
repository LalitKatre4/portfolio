import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree API Request
    try {
      const response = await fetch('https://formspree.io/f/mbgrblgq', { // <-- Yahan apna Formspree URL / ID daalein
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setIsSubmitting(false);
        alert('Message bhejne me koi dikkat aayi, kripya dobara try karein.');
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('Network error, dobara try karein.');
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-primary-400 font-mono text-sm mb-2">{'// 04. Contact'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="line-decoration mx-auto mb-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-4 text-slate-300 text-sm">
                <p className="flex items-center gap-3"><FiMail className="text-primary-400" /> {personalInfo.email}</p>
                <p className="flex items-center gap-3"><FiPhone className="text-primary-400" /> {personalInfo.phone}</p>
                <p className="flex items-center gap-3"><FiMapPin className="text-primary-400" /> {personalInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <FiCheckCircle size={48} className="text-green-400 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold text-white">Message Sent Successfully!</h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500"
                  />
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Your Message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 rounded-xl font-semibold gradient-bg text-white shadow-lg flex items-center gap-2"
                  >
                    <FiSend size={16} /> {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;