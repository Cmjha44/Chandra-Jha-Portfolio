import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Globe, Github, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ProfileData } from '../types/portfolio';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please include a message.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate sending network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleOpenMailClient = () => {
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Hello Chandra,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    )}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mt-2 mb-4">
                Let&apos;s Build Systems Together
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Whether you are exploring applied Generative AI implementations, process automation, healthcare data pipelines, or advisory collaboration, feel free to send a message.
              </p>

              {/* Contact Channels (Clean & Verified, NO phone number) */}
              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Direct Email</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {profile.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {profile.location}
                    </div>
                  </div>
                </div>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">LinkedIn Profile</div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        linkedin.com/in/chandrajha44
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </a>

                <a
                  href={profile.github || 'https://github.com/Cmjha44'}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Github className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">GitHub &amp; Open Source Work</div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        github.com/Cmjha44
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Validated Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Fill in your details and I will respond to your inquiry promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Message Prepared Successfully!
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>. Your message regarding &ldquo;{formData.subject}&rdquo; is ready.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleOpenMailClient}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Dispatch via Email Client</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500'
                        } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 transition-colors`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-800/80 border ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500'
                        } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 transition-colors`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Workflow Consultation / Collaboration"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-800/80 border ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500'
                      } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, inquiry, or question..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-slate-800/80 border ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-indigo-500'
                      } text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-1 transition-colors`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-lg shadow-xs transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
