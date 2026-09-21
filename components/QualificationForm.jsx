'use client';

import { useState } from 'react';

export default function QualificationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    monthlyRevenue: '',
    primaryBottleneck: '',
    platform: '',
    fullName: '',
    workEmail: '',
    storeUrl: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1 && !formData.monthlyRevenue) return;
    if (step === 2 && (!formData.primaryBottleneck || !formData.platform)) return;
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-lg p-8 rounded-2xl bg-neutral-900/90 border border-emerald-500/30 shadow-2xl backdrop-blur-md text-center">
        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Audit Session Unlocked!</h3>
        <p className="text-neutral-400 text-sm mb-6">
          We’re analyzing <span className="text-emerald-400 font-medium">{formData.storeUrl}</span>. Expect your custom technical performance breakdown shortly.
        </p>
        <a
          href="https://calendly.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold transition-all text-center"
        >
          Book 15-Min Strategy Session Now →
        </a>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 shadow-2xl backdrop-blur-md relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
          Step {step} of 3
        </span>
        <div className="flex gap-1.5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i <= step ? 'w-8 bg-emerald-500' : 'w-3 bg-neutral-800'
              }`}
            />
          ))}
        </div>
      </div>

      <form onSubmit={step === 3 ? handleSubmit : handleNextStep} className="space-y-5">
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">What is your current monthly store revenue?</h3>
            <div className="grid grid-cols-1 gap-2.5">
              {['Under $10,000/mo', '$10,000 – $50,000/mo', '$50,000 – $200,000/mo', '$200,000+/mo'].map((rev) => (
                <button
                  key={rev}
                  type="button"
                  onClick={() => handleOptionSelect('monthlyRevenue', rev)}
                  className={`w-full p-3.5 text-left text-sm rounded-xl border transition-all ${
                    formData.monthlyRevenue === rev
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300 font-medium'
                      : 'bg-neutral-800/50 border-neutral-700/60 text-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  {rev}
                </button>
              ))}
            </div>
            <button
              type="button"
              disabled={!formData.monthlyRevenue}
              onClick={() => setStep(2)}
              className="w-full mt-4 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-neutral-950 font-semibold transition-all"
            >
              Continue →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Select your primary growth bottleneck</h3>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { id: 'cro', label: 'Low Store Conversion Rate (Traffic isn’t buying)' },
                { id: 'cac', label: 'High Customer Acquisition Cost (Ads too expensive)' },
                { id: 'tech', label: 'Technical Bugs & Slow Loading Times' },
                { id: 'retention', label: 'Weak Email/SMS Automation & Repeat Purchases' },
              ].map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => handleOptionSelect('primaryBottleneck', b.label)}
                  className={`w-full p-3.5 text-left text-sm rounded-xl border transition-all ${
                    formData.primaryBottleneck === b.label
                      ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300 font-medium'
                      : 'bg-neutral-800/50 border-neutral-700/60 text-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <label className="block text-sm font-medium text-neutral-300 mb-2">Current Platform</label>
              <select
                value={formData.platform}
                onChange={(e) => handleOptionSelect('platform', e.target.value)}
                className="w-full p-3.5 rounded-xl bg-neutral-800/50 border border-neutral-700 text-neutral-200 text-sm focus:outline-none focus:border-emerald-500"
              >
                <option value="">Select Platform</option>
                <option value="Shopify">Shopify / Shopify Plus</option>
                <option value="WooCommerce">WooCommerce</option>
                <option value="Custom/Headless">Custom / Headless / Next.js</option>
                <option value="Other">Other Platform</option>
              </select>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3.5 rounded-xl bg-neutral-800 text-neutral-300 text-sm font-medium"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!formData.primaryBottleneck || !formData.platform}
                onClick={() => setStep(3)}
                className="w-2/3 py-3.5 rounded-xl bg-emerald-500 text-neutral-950 font-semibold disabled:opacity-50"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Where should we send your audit?</h3>
            <div className="space-y-3">
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full p-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white text-sm"
              />
              <input
                type="email"
                required
                placeholder="Work Email"
                value={formData.workEmail}
                onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                className="w-full p-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white text-sm"
              />
              <input
                type="url"
                required
                placeholder="Store URL (https://yourbrand.com)"
                value={formData.storeUrl}
                onChange={(e) => setFormData({ ...formData, storeUrl: e.target.value })}
                className="w-full p-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-white text-sm"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 py-3.5 rounded-xl bg-neutral-800 text-neutral-300 text-sm font-medium"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !formData.fullName || !formData.workEmail || !formData.storeUrl}
                className="w-2/3 py-3.5 rounded-xl bg-emerald-500 text-neutral-950 font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Analyzing...' : 'Claim Free Audit →'}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
