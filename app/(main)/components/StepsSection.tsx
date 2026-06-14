'use client';

import React from 'react';
import { Lightbulb, Target, Plug } from 'lucide-react';

const StepsSection = () => {
  return (
    <section className="py-16 max-md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl max-md:text-4xl font-extrabold text-slate-900 leading-tight">
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

          <p className="mt-6 max-md:mt-4 text-lg max-md:text-base text-slate-500 max-w-2xl mx-auto">
            We make digital transformation seamless with a proven, efficient, and results-oriented approach.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 mb-12 max-md:px-2">

          {/* Card 1 */}
          <div className="group relative bg-white rounded-2xl border border-slate-100/90 p-3 sm:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1 shadow-sm">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-cyan-100 to-violet-100 rounded-2xl mb-4 sm:mb-8 flex items-center justify-center overflow-hidden">
              <div className="w-16 h-16 sm:w-28 sm:h-28 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg">
                <Lightbulb className="w-8 h-8 sm:w-14 sm:h-14 text-yellow-500" />
              </div>
            </div>
            <h3 className="text-[12px] sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">1. Ideation</h3>
            <p className="text-[10px] sm:text-[15px] text-slate-500 leading-snug sm:leading-relaxed">
              We collaborate with you to define your vision and goals.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-2xl border border-slate-100/90 p-3 sm:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1 shadow-sm">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 rounded-2xl mb-4 sm:mb-8 flex items-center justify-center overflow-hidden">
              <div className="w-16 h-16 sm:w-28 sm:h-28 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 sm:w-14 sm:h-14 text-purple-600" />
              </div>
            </div>
            <h3 className="text-[12px] sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">2. Execution</h3>
            <p className="text-[10px] sm:text-[15px] text-slate-500 leading-snug sm:leading-relaxed">
              We build, test, and refine using industry best practices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-2xl border border-slate-100/90 p-3 sm:p-7 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_48px_-12px_rgba(59,130,246,0.16)] hover:border-blue-100/70 hover:-translate-y-1 shadow-sm">
            <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 via-cyan-100 to-teal-100 rounded-2xl mb-4 sm:mb-8 flex items-center justify-center overflow-hidden">
              <div className="w-16 h-16 sm:w-28 sm:h-28 bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg">
                <Plug className="w-8 h-8 sm:w-14 sm:h-14 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-[12px] sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">3. Delivery</h3>
            <p className="text-[10px] sm:text-[15px] text-slate-500 leading-snug sm:leading-relaxed">
              We launch securely and provide ongoing support for success.
            </p>
          </div>
        </div>

        {/* Industries Section */}

      </div>
    </section>
  );
};

export default StepsSection;