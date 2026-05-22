"use client";

import React from "react";

export default function IndustriesSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Content */}
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#d9d9d9] bg-white px-4 py-2 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-[#4d7cff]" />
            <span className="text-sm font-medium text-[#4a4a4a]">
              Industries
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-4xl text-[58px] leading-[1.05] font-semibold tracking-[-2px] text-black">
            Real Solutions Used
            <br />
            Across{" "}
            <span className="text-[#4d7cff]">Industries</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#8c8c8c]">
            Our intelligent agents deliver proven results across industries
            <br />
            by automating processes.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <div className="rounded-[28px] bg-white p-7 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            <h3 className="text-[36px] font-semibold leading-tight text-black">
              Marketing Automation
            </h3>

            <p className="mt-3 max-w-md text-[16px] leading-7 text-[#8a8a8a]">
              Generate content, manage campaigns, and analyze performance
              automatically.
            </p>

            {/* Graph */}
            <div className="mt-12 flex items-end gap-3">
              {[
                [2, 4, 2],
                [5, 3],
                [6, 2],
                [8],
                [4, 3],
                [6],
                [8],
                [5],
              ].map((group, index) => (
                <div key={index} className="flex items-end gap-2">
                  {group.map((height, i) => (
                    <div
                      key={i}
                      className={`w-5 rounded-sm ${
                        index > 5
                          ? "bg-gradient-to-t from-[#72d65d] to-[#b0ef9c]"
                          : "bg-gradient-to-t from-[#4a8cff] to-[#8ee5ff]"
                      }`}
                      style={{
                        height: `${height * 20}px`,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[28px] bg-white p-7 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            {/* Browser UI */}
            <div className="relative h-[220px] overflow-hidden rounded-[22px] border border-[#efefef] bg-[#fafafa] p-5">
              {/* Tabs */}
              <div className="space-y-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-7 rounded-full border border-[#ededed] bg-white"
                  />
                ))}
              </div>

              {/* Gradient Bar */}
              <div className="mt-5 h-4 w-full rounded-full bg-gradient-to-r from-[#6fe16a] via-[#b989ff] to-[#2d69ff]" />

              {/* Boxes */}
              <div className="mt-7 grid grid-cols-2 gap-5">
                <div className="h-28 rounded-2xl bg-white" />
                <div className="h-28 rounded-2xl bg-white" />
              </div>
            </div>

            <h3 className="mt-8 text-[34px] font-semibold leading-tight text-black">
              Data Processing
            </h3>

            <p className="mt-3 max-w-md text-[16px] leading-7 text-[#8a8a8a]">
              Process, clean, and analyze large datasets without manual
              intervention.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[28px] bg-white p-7 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            {/* Support Animation */}
            <div className="relative flex h-[250px] items-center justify-center overflow-hidden rounded-[24px] bg-[#fafafa]">
              {/* Grid */}
              <div className="absolute inset-0 grid grid-cols-4 gap-4 p-6 opacity-80">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-[24px] border border-[#ececec] bg-white"
                  />
                ))}
              </div>

              {/* Orb */}
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#97d7ff] bg-white shadow-[0_0_50px_rgba(103,194,255,0.35)]">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#8be1ff] via-[#56a7ff] to-[#dff7ff] shadow-inner" />
              </div>
            </div>

            <h3 className="mt-8 text-[34px] font-semibold leading-tight text-black">
              Customer Support Automation
            </h3>

            <p className="mt-3 max-w-md text-[16px] leading-7 text-[#8a8a8a]">
              Handle customer queries 24/7 with intelligent chatbots that learn
              from interactions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-[28px] bg-white p-7 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            {/* Content UI */}
            <div className="rounded-[22px] border border-[#efefef] bg-[#fafafa] p-5">
              <h4 className="text-sm font-semibold text-black">
                Our Marketing Strategy for AI Agents
              </h4>

              <div className="mt-5 rounded-xl bg-white p-3 shadow-sm">
                <div className="h-9 rounded-lg bg-gradient-to-r from-[#7fe3ff] via-[#c7e3ff] to-[#6d8dff]" />
                <div className="mt-4 h-3 w-[70%] rounded-full bg-[#ededed]" />
              </div>

              <div className="mt-5 rounded-xl bg-white p-4">
                <div className="h-3 w-[60%] rounded-full bg-[#ededed]" />
              </div>

              <div className="mt-7 flex items-center justify-between rounded-xl border border-[#ededed] bg-white px-4 py-3">
                <span className="text-sm text-[#7a7a7a]">
                  Ask, write or search for anything...
                </span>

                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                  →
                </button>
              </div>
            </div>

            <h3 className="mt-8 text-[34px] font-semibold leading-tight text-black">
              Content Generation
            </h3>

            <p className="mt-3 max-w-md text-[16px] leading-7 text-[#8a8a8a]">
              Create blog posts, social media content, and marketing materials
              at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}