import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ProfileData } from '../types/portfolio';
import { SupportedLanguage, translations } from '../data/translations';

interface ContactSectionProps {
  profile: ProfileData;
  currentLang: SupportedLanguage;
}

interface SavedInquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile, currentLang }) => {
  const t = translations[currentLang].contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmissionId, setLastSubmissionId] = useState<string>('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errs.message = 'Please include a message or inquiry details.';
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

    // Record submission into browser localStorage for official record keeping
    try {
      const submissionId = `INQ-${Date.now().toString(36).toUpperCase()}`;
      const newRecord: SavedInquiry = {
        id: submissionId,
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        date: new Date().toLocaleString()
      };

      const existingRecords: SavedInquiry[] = JSON.parse(
        localStorage.getItem('chandra_visitor_inquiries') || '[]'
      );
      existingRecords.unshift(newRecord);
      localStorage.setItem('chandra_visitor_inquiries', JSON.stringify(existingRecords.slice(0, 50)));
      setLastSubmissionId(submissionId);
    } catch (e) {
      console.warn('Storage log:', e);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
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
    <section id="contact" className="py-20 border-t border-stone-200/80 dark:border-stone-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          {/* Left Column: Direct Contact & Channel Details */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 block">
                {t.kicker}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 dark:text-stone-100 mb-4">
                {t.headline}
              </h2>
              <p className="text-base text-stone-600 dark:text-stone-300 leading-relaxed mb-8">
                {t.subhead}
              </p>

              {/* Direct channels */}
              <div className="space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 hover:border-stone-400 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                  </div>
                  <div>
                    <div className="text-[11px] text-stone-500 dark:text-stone-400">{t.directEmail}</div>
                    <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
                      {profile.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                  </div>
                  <div>
                    <div className="text-[11px] text-stone-500 dark:text-stone-400">{t.location}</div>
                    <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
                      {profile.location}
                    </div>
                  </div>
                </div>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 hover:border-stone-400 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0">
                      <Linkedin className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                    </div>
                    <div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400">LinkedIn Profile</div>
                      <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
                        linkedin.com/in/chandrajha44
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors" />
                </a>

                <a
                  href={profile.github || 'https://github.com/Cmjha44'}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 hover:border-stone-400 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0">
                      <Github className="w-4 h-4 text-stone-700 dark:text-stone-300" />
                    </div>
                    <div>
                      <div className="text-[11px] text-stone-500 dark:text-stone-400">GitHub Profile</div>
                      <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
                        github.com/Cmjha44
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visitor Information Record Form */}
          <div className="md:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800 shadow-2xs">
              <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100 mb-1.5">
                {t.formTitle}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
                {t.formSubhead}
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-center space-y-4">
                  <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center mx-auto text-stone-800 dark:text-stone-200">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-semibold text-stone-900 dark:text-stone-100">
                      {t.successTitle}
                    </h4>
                    <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 max-w-sm mx-auto">
                      Thank you, <span className="font-semibold">{formData.name}</span>. {t.successDesc} (Ref: {lastSubmissionId}).
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleOpenMailClient}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-100 bg-stone-900 hover:bg-stone-800 dark:text-stone-900 dark:bg-stone-100 dark:hover:bg-stone-200 rounded-md transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{t.sendEmailBtn}</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-medium text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                    >
                      {t.recordAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                        {t.nameLabel} <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3 py-2 text-xs rounded-lg bg-stone-50 dark:bg-stone-800/80 border ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-stone-300 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-100'
                        } text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-hidden focus:ring-1 transition-colors`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                        {t.emailLabel} <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className={`w-full px-3 py-2 text-xs rounded-lg bg-stone-50 dark:bg-stone-800/80 border ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-stone-300 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-100'
                        } text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-hidden focus:ring-1 transition-colors`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                      {t.subjectLabel} <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. AI Workflow Orchestration / Life Insurance Advisory / Networking"
                      className={`w-full px-3 py-2 text-xs rounded-lg bg-stone-50 dark:bg-stone-800/80 border ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-stone-300 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-100'
                      } text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-hidden focus:ring-1 transition-colors`}
                    />
                    {errors.subject && (
                      <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1.5">
                      {t.messageLabel} <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, inquiry background, or connection message..."
                      className={`w-full px-3 py-2 text-xs rounded-lg bg-stone-50 dark:bg-stone-800/80 border ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-stone-300 dark:border-stone-700 focus:border-stone-900 dark:focus:border-stone-100'
                      } text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-hidden focus:ring-1 transition-colors`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-[11px] text-red-500 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400">
                      All fields required · Information saved for the record
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-stone-100 bg-stone-900 hover:bg-stone-800 dark:text-stone-900 dark:bg-stone-100 dark:hover:bg-stone-200 rounded-md transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{t.submitting}</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>{t.submitBtn}</span>
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
