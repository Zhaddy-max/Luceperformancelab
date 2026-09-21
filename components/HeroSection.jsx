import QualificationForm from './QualificationForm';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Performance Engineering Agency
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            Stop Wasting Ad Spend on <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Leaky Stores</span>.
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0">
            We refactor e-commerce tech stacks, fix conversion bottlenecks, and engineer data pipelines for brands ready to systematically scale revenue.
          </p>
        </div>
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <QualificationForm />
        </div>
      </div>
    </section>
  );
}
