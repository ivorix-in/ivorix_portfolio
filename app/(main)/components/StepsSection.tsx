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
               

                To Create
                <br />

                Smart AI Agents
            </h2>
          
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Set up powerful AI agents quickly using simple steps designed for speed, efficiency, and ease of use.
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Card 1 */}
          <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-cyan-100 to-violet-100 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
              <div className="w-28 h-28 bg-white/80 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-lg">
                <Lightbulb className="w-14 h-14 text-yellow-500" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">Create Your AI Agent</h3>
            <p className="text-slate-600 text-center text-[15px] leading-relaxed">
              Select a Pre-Built Template or Design Your Own AI Agent From the Ground Up.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
              <div className="w-28 h-28 bg-white/80 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-lg">
                <Target className="w-14 h-14 text-purple-600" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">Set Tasks &amp; Instructions</h3>
            <p className="text-slate-600 text-center text-[15px] leading-relaxed">
              Define What You Want Your AI Agent to Do and Set Clear Goals for Automation.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 via-cyan-100 to-teal-100 rounded-2xl mb-8 flex items-center justify-center overflow-hidden">
              <div className="w-28 h-28 bg-white/80 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-lg">
                <Plug className="w-14 h-14 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center mb-3">Connect Tools</h3>
            <p className="text-slate-600 text-center text-[15px] leading-relaxed">
              Integrate Your AI Agent Seamlessly With Your Existing Platforms and Tools.
            </p>
          </div>
        </div>

        {/* Industries Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
            Industries
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Real Solutions Used 
            <br />
            Across{' '}
            
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">
                Industries
              </span>
              {/* Selection Box */}
              <span className="absolute -inset-[3px] border border-slate-400 rounded-md pointer-events-none"></span>
              {/* Corner Handles */}
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-slate-900"></span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-slate-900"></span>
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-slate-900"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-slate-900"></span>
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Our intelligent agents deliver proven results across industries by automating processes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;