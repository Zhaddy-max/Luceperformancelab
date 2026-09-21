import React from 'react';

export default function HeroSection() {
return (
<section className="bg-neutral-950 text-white min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center">
<div className="max-w-4xl mx-auto">
<span className="text-blue-500 font-semibold text-xs md:text-sm tracking-widest uppercase bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
Luce Performance Lab
</span>
<h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 leading-tight tracking-tight text-white">
Stop Wasting Ad Spend on Leaky Stores. <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
Scale Revenue with Performance Engineering.
</span>
</h1>
<p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
We optimize tech stacks, refactor site speed, and build full-funnel conversion engines for high-growth e-commerce brands.
</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a
href="#audit"
className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 px-8 rounded-lg shadow-lg transition duration-200"
>
Claim Free Audit →
</a>
</div>
<p className="text-xs text-gray-500 mt-4">
Zero fluff. Zero high-pressure sales pitch. Just pure data and actionable fixes.
</p>
</div>
</section>
);
}
