"use client";

import Link from "next/link";
import ScrollAnimation from "@/components/ScrollVelocity/ScrollVelocity.jsx";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Rating badge */}
        <div className="rating-badge">
          <span className="stars">★★★★</span>
          <span className="trustpilot">Trustpilot</span>
          <span className="divider">|</span>
          <span className="score">4.8 Reviews</span>
        </div>

        {/* Headline */}
        <h1 className="headline">
          Design Smart{" "}
          <span className="icon-inline">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
              <rect width="42" height="42" rx="10" fill="#6366f1" />
              <path
                d="M10 22l8 8 14-16"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>{" "}
          Workflows
          <br />
          That Power Your <span className="highlight">AI Agents</span>
        </h1>

        {/* Subtext */}
        <p className="subtext">
          Automate your daily tasks with smart AI agents designed to improve
          efficiency, reduce effort, and deliver faster results.
        </p>

        {/* CTA */}
        <Link href="#" className="cta-btn">
          Get Started Free
        </Link>

        {/* Floating UI cards */}
        <div className="hero-visual">
          {/* Chart card */}
          <div className="card card-chart">
            <div className="card-label">Growth</div>
            <div className="card-amount">$1,823.00</div>
            <div className="chart-bars">
              <div className="bar" style={{ height: "40%" }}></div>
              <div className="bar" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "45%" }}></div>
              <div className="bar active" style={{ height: "80%" }}></div>
              <div className="bar" style={{ height: "55%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
            </div>
          </div>

          {/* Robot / AI visual placeholder */}
          <div className="robot-glow"></div>

          {/* Calendar card */}
          <div className="card card-calendar">
            <div className="cal-header">January 2026</div>
            <div className="cal-grid">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <span key={i} className="cal-day-label">
                  {d}
                </span>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <span
                  key={i}
                  className={`cal-day ${i + 1 === 20 ? "active" : ""}`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Brand logos */}
      <ScrollAnimation
  texts={["TechCorp • InnovateAI • CloudBase • DataFlow • AutoMate"] as any}
  velocity={30}
  numCopies={4}
/>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(
            160deg,
            #eef2ff 0%,
            #e0e7ff 40%,
            #dde6f5 100%
          );
          display: flex;
          align-items: flex-start;
          padding-top: 120px;
          overflow: hidden;
        }

        .hero-container {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }

        .rating-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .stars {
          color: #f59e0b;
          letter-spacing: 2px;
        }
        .trustpilot {
          color: #555;
          font-weight: 500;
        }
        .divider {
          color: #ccc;
        }
        .score {
          color: #555;
        }

        .headline {
          font-size: clamp(36px, 6vw, 64px);
          font-weight: 800;
          color: #0f0f0f;
          letter-spacing: -2px;
          line-height: 1.1;
          margin: 0;
        }

        .icon-inline {
          display: inline-flex;
          vertical-align: middle;
          margin: 0 4px;
          transform: translateY(-4px);
        }

        .highlight {
          border: 2.5px dashed #6366f1;
          border-radius: 8px;
          padding: 0 8px;
          color: #6366f1;
        }

        .subtext {
          font-size: 15px;
          color: #555;
          max-width: 480px;
          line-height: 1.65;
          margin: 0;
        }

        .cta-btn {
          background: #0f0f0f;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 12px;
          text-decoration: none;
          transition:
            background 0.2s,
            transform 0.2s;
        }

        .cta-btn:hover {
          background: #333;
          transform: translateY(-1px);
        }

        /* Visual section */
        .hero-visual {
          position: relative;
          width: 100%;
          height: 300px;
          margin-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .robot-glow {
          width: 200px;
          height: 260px;
          background: radial-gradient(
            ellipse at center,
            rgba(99, 102, 241, 0.25) 0%,
            transparent 70%
          );
          border-radius: 50%;
          position: absolute;
        }

        .card {
          position: absolute;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          padding: 16px;
        }

        .card-chart {
          left: 0;
          bottom: 0;
          width: 160px;
        }

        .card-label {
          font-size: 11px;
          color: #888;
          margin-bottom: 4px;
        }

        .card-amount {
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }

        .chart-bars {
          display: flex;
          gap: 5px;
          align-items: flex-end;
          height: 50px;
        }

        .bar {
          flex: 1;
          background: #c7d7fb;
          border-radius: 4px 4px 0 0;
        }

        .bar.active {
          background: #6366f1;
        }

        .card-calendar {
          right: 0;
          top: 0;
          width: 200px;
        }

        .cal-header {
          font-size: 12px;
          font-weight: 700;
          color: #111;
          margin-bottom: 8px;
          text-align: center;
        }

        .cal-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 3px;
          text-align: center;
        }

        .cal-day-label {
          font-size: 9px;
          font-weight: 600;
          color: #aaa;
          padding: 2px 0;
        }

        .cal-day {
          font-size: 9px;
          color: #555;
          padding: 3px 2px;
          border-radius: 4px;
        }

        .cal-day.active {
          background: #6366f1;
          color: white;
          font-weight: 700;
          border-radius: 50%;
        }

        .brands {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
          justify-content: center;
          padding-top: 12px;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          width: 100%;
        }

        .brand-name {
          font-size: 13px;
          font-weight: 600;
          color: #aaa;
          letter-spacing: 0.5px;
        }
      `}</style>
    </section>
  );
}
