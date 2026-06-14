'use client';

import React from 'react';
import { Lightbulb, Target, Plug } from 'lucide-react';

const StepsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Simple{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">
                Steps
              </span>

              {/* Selection Box */}
              <span className="absolute -inset-[3px] border border-slate-400 rounded-md pointer-events-none"></span>

              {/* Corner Handles */}
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-slate-900"></span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-slate-900"></span>
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-slate-900"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-slate-900"></span>
            </span>


            To Transform
            <br />

            Your Business
          </h2>

          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            We make digital transformation seamless with a proven, efficient, and results-oriented approach.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

          {/* Card 1 */}
          <div className="group relative bg-white rounded-2xl border border-slate-100/90 p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1 shadow-sm">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-cyan-100 to-violet-100 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
              <div className="w-28 h-28 bg-white/80 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-lg">
                <Lightbulb className="w-14 h-14 text-yellow-500" />
              </div>
            </div>
            <h3 className="text-[15px] font-bold text-slate-900 mb-2 leading-snug text-center">Consult & Discover</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed text-center">
              Understand your goals and business needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-2xl border border-slate-100/90 p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1 shadow-sm">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
              <div className="w-28 h-28 bg-white/80 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-lg">
                <Target className="w-14 h-14 text-purple-600" />
              </div>
            </div>
            <h3 className="text-[15px] font-bold text-slate-900 mb-2 leading-snug text-center">Design & Build</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed text-center">
              Craft your digital solution from strategy to launch.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-2xl border border-slate-100/90 p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1 shadow-sm">
            <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 via-cyan-100 to-teal-100 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
              <div className="w-28 h-28 bg-white/80 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-lg">
                <Plug className="w-14 h-14 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-[15px] font-bold text-slate-900 mb-2 leading-snug text-center">Grow & Optimize</h3>
            <p className="text-[13px] text-slate-500 leading-relaxed text-center">
              Monitor, improve, and scale your online presence.
            </p>
          </div>
        </div>

        {/* Industries Section */}

      </div>
    </section>
  );
};

export default StepsSection;