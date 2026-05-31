"use client";

import Link from "next/link";
import Image from "next/image";


export default function Hero() {
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <section className="hero">
      {/* Ambient background glows */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-glow-3"></div>

      <div className="hero-container">

        {/* TOP BADGE */}
        <div className="rating-badge">
          <span className="stars">★★★★</span>
          <span className="trustpilot">Trustpilot</span>
          <span className="divider">|</span>
          <span className="score">4.8 Reviews</span>
        </div>

        {/* HEADING */}
        <h1 className="headline">
          Design Smart{" "}
          <span className="icon-inline">
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" rx="12" fill="#6366f1" />
              <path
                d="M12 25l9 9 15-18"
                stroke="white"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>{" "}
          Workflows
          <br />
          That Power Your{" "}
          <span className="highlight">
            AI Agents
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="subtext">
          Automate your daily tasks with smart AI agents designed to improve
          efficiency, reduce effort, and deliver faster results.
        </p>

        {/* BUTTON */}
        <Link href="/" >
        <button  className="cta-btn">
          Get Started Free
        </button>
        </Link>

        {/* VISUAL */}
        <div className="hero-visual">

          {/* LEFT CARD */}
          {/* <div className="left-col">

            <div className="card growth-card">
              <div className="card-label">Growth</div>

              <div className="card-amount">
                $1,823.00
              </div>

              <div className="chart-bars">
                <div className="bar" style={{ height: "40%" }} />
                <div className="bar" style={{ height: "65%" }} />
                <div className="bar" style={{ height: "50%" }} />
                <div className="bar active" style={{ height: "90%" }} />
                <div className="bar" style={{ height: "70%" }} />
                <div className="bar" style={{ height: "55%" }} />
              </div>
            </div>

          </div> */}

          {/* CENTER IMAGE */}
       

{/*          
          <div className="right-col">

            <div className="card cal-card">

              <div className="cal-header">
                January 2026
              </div>

              <div className="cal-grid">

                {dayLabels.map((d, i) => (
                  <div
                    key={i}
                    className={`cal-day-label ${
                      i >= 5 ? "red" : ""
                    }`}
                  >
                    {d}
                  </div>
                ))}

                <div />
                <div />

                {Array.from({ length: 31 }, (_, i) => {
                  const n = i + 1;

                  const isRed = [
                    4, 5, 11, 12, 18, 19, 25, 26,
                  ].includes(n);

                  const isActive = n === 20;

                  return (
                    <div
                      key={n}
                      className={`cal-day 
                      ${isRed ? "red" : ""}
                      ${isActive ? "active" : ""}
                    `}
                    >
                      {n}
                    </div>
                  );
                })}

              </div>
            </div>

          </div> */}
        </div>

        {/* TICKER */}
        <div className="ticker-outer">
          <div className="ticker-track">
            {[...Array(4)].map((_, trackIndex) => (
              <div key={trackIndex} className="ticker-set">
                {["TechCorp", "InnovateAI", "CloudBase", "DataFlow", "AutoMate"].map((name, i) => (
                  <div key={`${trackIndex}-${i}`} className="ticker-card">
                    <div className="ticker-logo">
                      <div className="ticker-logo-inner"></div>
                    </div>
                    <span className="ticker-name">{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CSS */}

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

   .hero {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-top: 100px;

  background-image: url("/hero-bg.png");
  background-size: cover;
  background-position: center top;
   background-repeat: no-repeat;
  
}

        .hero::before {
          content: "";

          position: absolute;

          width: 700px;
          height: 700px;

          background: rgba(99,102,241,0.08);

          border-radius: 50%;

          filter: blur(120px);

          left: 50%;
          top: 45%;

          transform: translate(-50%, -50%);

          z-index: 0;

          animation: pulseBg 6s ease-in-out infinite;
        }

        /* Soft background glows */
        .hero-glow-1 {
          position: absolute;
          top: 10%;
          left: 15%;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-glow-2 {
          position: absolute;
          top: 20%;
          right: 10%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
          filter: blur(60px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-glow-3 {
          position: absolute;
          bottom: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 350px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 80%);
          filter: blur(70px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;

          max-width: 1150px;

          margin: auto;

          padding: 0 20px;

          text-align: center;
        }

        /* BADGE */

        .rating-badge {
          display: flex;
          justify-content: center;
          align-items: center;

          gap: 6px;

          font-size: 12px;

          margin-bottom: 18px;

          animation: fadeUp 0.8s ease;
        }

        .stars {
          color: orange;
        }

        .trustpilot {
          font-weight: 700;
        }

        .divider {
          color: #bbb;
        }

        .score {
          color: #555;
        }

        /* TITLE */

        .rating-divider {
          display: inline-block;
          width: 1px;
          height: 12px;
          background: rgba(0, 0, 0, 0.08);
          margin: 0 8px;
          vertical-align: middle;
        }

        .rating-text strong {
          color: #1f2937;
          font-weight: 600;
        }

        /* Headline */
        .headline {
          font-size: clamp(28px, 4vw, 54px);

          line-height: 1.08;

          font-weight: 800;

          color: #111;

          letter-spacing: -2px;

          margin: auto;

          max-width: 720px;

          animation: fadeUp 1s ease;
        }

        .icon-inline {
          display: inline-flex;

          vertical-align: middle;

          transform: translateY(-4px);

          animation: floatIcon 3s ease-in-out infinite;
        }

        .highlight {
          color: #6366f1;

          border: 2px solid #bfc5ff;

          border-radius: 10px;

          padding: 0 10px;

          animation: glowPulse 2s infinite;
        }

        /* SUBTEXT */

        .subtext {
          max-width: 500px;

          margin: 18px auto;

          font-size: 13px;

          color: #666;

          line-height: 1.7;

          animation: fadeUp 1.2s ease;
        }

        /* BUTTON */

        .cta-btn {
          display: inline-flex;
         
          align-items: center;
          justify-content: center;

          background: linear-gradient(
            180deg,
            #1f1f1f 0%,
            #0f0f0f 100%
          );

          color: white;

          text-decoration: none;

          padding: 13px 30px;

          border-radius: 14px;

          font-size: 13px;

          font-weight: 700;

          margin-top: 10px;

          border: 1px solid rgba(255,255,255,0.08);

          box-shadow:
            0 10px 25px rgba(0,0,0,0.16),
            inset 0 1px 0 rgba(255,255,255,0.08);

          // transition: all 0.35s ease;

          position: relative;

          overflow: hidden;

          animation: fadeUp 1.4s ease;
        }

        .cta-btn::before {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 80%;
          height: 100%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.22),
            transparent
          );

          transform: skewX(-20deg);

          transition: 0.8s;
        }

        .cta-btn:hover::before {
          left: 130%;
        }

        .cta-btn:hover {
          transform: translateY(-5px) scale(1.03);

          box-shadow:
            0 20px 40px rgba(0,0,0,0.22),
            0 0 24px rgba(99,102,241,0.18);
        }

        /* VISUAL */

        .hero-visual {
          position: relative;

          width: 100%;

          height: 620px;

          margin-top: 20px;
        }

        /* CENTER IMAGE */

        .center-image-wrap {
          position: absolute;

          width: 430px;
          height: 520px;

          left: 50%;
          top: 20px;

          transform: translateX(-50%);

          z-index: 2;

          opacity: 0.95;

          filter: drop-shadow(
            0 20px 40px rgba(99,102,241,0.18)
          );

          animation: floatImage 5s ease-in-out infinite;
        }

        /* LEFT */

        .left-col {
          position: absolute;

          left: 90px;
          top: 220px;

          width: 220px;

          z-index: 3;

          transform: rotate(-8deg);

          animation: floatLeft 4s ease-in-out infinite;
        }

        /* RIGHT */

        .right-col {
          position: absolute;

          right: 90px;
          top: 220px;

          width: 220px;

          z-index: 3;

          transform: rotate(7deg);

          animation: floatRight 4s ease-in-out infinite;
        }

        /* CARD */

        .card {
          background: rgba(255,255,255,0.72);

          backdrop-filter: blur(18px);

          padding: 22px;

          border-radius: 24px;

          box-shadow:
            0 10px 30px rgba(99,102,241,0.08);

          transition: 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
        }

        .card-label {
          font-size: 11px;

          font-weight: 700;

          color: #999;

          margin-bottom: 12px;
        }

        .card-amount {
          font-size: 34px;

          font-weight: 900;

          color: #111;

          margin-bottom: 20px;
        }

        /* BARS */

        .chart-bars {
          display: flex;

          align-items: flex-end;

          gap: 8px;

          height: 80px;
        }

        .bar {
          flex: 1;

          background: #dbe4ff;

          border-radius: 8px 8px 0 0;

          animation: barsMove 2s ease infinite alternate;
        }

        .cta-btn:hover {
          background: #1e1e24;
          transform: translateY(-2px);
          box-shadow: 
            0 6px 20px rgba(0, 0, 0, 0.15),
            0 16px 40px rgba(79, 70, 229, 0.2);
        }

        /* CALENDAR */

        .cal-header {
          font-size: 22px;

          font-weight: 800;

          margin-bottom: 16px;
        }

        .cal-grid {
          display: grid;

          grid-template-columns: repeat(7,1fr);

          gap: 8px;
        }

        .cal-day-label {
          font-size: 11px;

          color: #aaa;

          font-weight: 700;
        }

        .cal-day-label.red {
          color: red;
        }

        .cal-day {
          font-size: 12px;

          padding: 7px;

          border-radius: 50%;
        }

        .cal-day.red {
          color: red;
        }

        .cal-day.active {
          background: #6366f1;

          color: white;
        }

        /* TICKER */

        .ticker-outer {
          position: relative;
          overflow: hidden;
          padding: 30px 0 20px;
          margin-top: 30px;
          width: 100%;
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .ticker-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: ticker 35s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .ticker-set {
          display: flex;
          gap: 24px;
          padding-right: 24px;
        }

        .ticker-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          padding: 14px 28px;
          border-radius: 100px;
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.05);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .ticker-card:hover {
          transform: translateY(-3px) scale(1.03);
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.15), 0 0 20px rgba(99, 102, 241, 0.2);
          border-color: rgba(255, 255, 255, 1);
        }

        .ticker-logo {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a5b4fc, #6366f1);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);
        }

        .ticker-logo-inner {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: white;
          opacity: 0.9;
        }

        .ticker-name {
          color: #6b7280;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.2px;
          transition: color 0.3s ease;
        }

        .ticker-card:hover .ticker-name {
          color: #1f2937;
        }

        /* ANIMATIONS */

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatImage {
          0% {
            transform: translateX(-50%) translateY(0px);
          }

          50% {
            transform: translateX(-50%) translateY(-14px);
          }

          100% {
            transform: translateX(-50%) translateY(0px);
          }
        }

        @keyframes floatLeft {
          0% {
            transform: rotate(-8deg) translateY(0px);
          }

          50% {
            transform: rotate(-8deg) translateY(-12px);
          }

          100% {
            transform: rotate(-8deg) translateY(0px);
          }
        }

        @keyframes floatRight {
          0% {
            transform: rotate(7deg) translateY(0px);
          }

          50% {
            transform: rotate(7deg) translateY(-12px);
          }

          100% {
            transform: rotate(7deg) translateY(0px);
          }
        }

        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 0px rgba(99,102,241,0.2);
          }

          50% {
            box-shadow: 0 0 18px rgba(99,102,241,0.35);
          }

          100% {
            box-shadow: 0 0 0px rgba(99,102,241,0.2);
          }
        }

        @keyframes floatIcon {
          0% {
            transform: translateY(-4px);
          }

          50% {
            transform: translateY(-10px);
          }

          100% {
            transform: translateY(-4px);
          }
        }

        @keyframes pulseBg {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }

          50% {
            transform: translate(-50%, -50%) scale(1.08);
          }

          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes barsMove {
          from {
            opacity: 0.7;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes ticker {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* MOBILE */

        @media (max-width: 768px) {

          .headline {
            font-size: 38px;
          }

          .hero-visual {
            height: auto;

            display: flex;

            flex-direction: column;

            align-items: center;

            gap: 18px;
          }

          .left-col,
          .right-col,
          .center-image-wrap {
            position: relative;

            top: unset;
            left: unset;
            right: unset;

            transform: none;

            width: 100%;

            max-width: 300px;
          }

          .center-image-wrap {
            height: 360px;
          }
        }

      `}</style>
    </section>
  );
}