"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      {/* Ambient background glows */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      <div className="hero-glow-3"></div>

      <div className="hero-container">
        {/* Trustpilot Rating Badge */}
        <div className="rating-badge-wrapper">
          <div className="rating-badge">
            <span className="star-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" />
              </svg>
            </span>
            <span className="rating-text">
              <strong>Trustpilot</strong>
              <span className="rating-divider"></span>
              4.8 Reviews
            </span>
          </div>
        </div>

        {/* Large Bold Headline with Inline Custom Node & Selection Style */}
        <h1 className="headline">
          Design Smart{" "}
          <span className="icon-inline">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#4F46E5" />
              <path d="M6 15L10 11L13 14L18 8.5M18 8.5H14M18 8.5V12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>{" "}
          Workflows
          <br />
          That Power Your{" "}
          <span className="editor-node-wrap">
            <span className="editor-node">AI Agents</span>
            <span className="node-handle tl"></span>
            <span className="node-handle tr"></span>
            <span className="node-handle bl"></span>
            <span className="node-handle br"></span>
            <span className="custom-cursor">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0.5L14 5L8.5 8L5.5 14L0 0.5Z" fill="#4F46E5" />
                <path d="M0 0.5L14 5L8.5 8L5.5 14L0 0.5Z" stroke="white" strokeWidth="1" strokeLinejoin="round" />
              </svg>
              <span className="cursor-label">User</span>
            </span>
          </span>
        </h1>

        {/* Clean, readable Subtitle */}
        <p className="subtext">
          Automate your daily tasks with smart AI agents designed to improve
          efficiency, reduce effort, and deliver faster results.
        </p>

        {/* Premium CTA Button */}
        <div className="cta-wrapper">
          <Link href="#" className="cta-btn">
            Get Started Free
            <span className="cta-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </Link>
        </div>

        {/* Hero Visual Container blending the custom vertical graphic */}
        <div className="hero-visual-wrapper">
          <img src="/hero-bg.jpg" alt="Ivorix AI Agent Platform" className="hero-visual" />
          <div className="fade-overlay-bottom"></div>
        </div>

        {/* Brand Showcase Logos */}
        <div className="brands-wrapper">
          <div className="brands-label">TRUSTED BY LEADING TEAMS</div>
          <div className="brands">
            {["TechCorp", "InnovateAI", "CloudBase", "DataFlow", "AutoMate"].map((b) => (
              <span key={b} className="brand-name">{b}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          background: radial-gradient(120% 80% at 50% 0%, #ffffff 30%, #f3f6ff 70%, #e8eeff 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 140px;
          padding-bottom: 60px;
          overflow: hidden;
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
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Rating Badge */
        .rating-badge-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
          z-index: 2;
        }

        .rating-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          padding: 6px 14px;
          border-radius: 30px;
          box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.02),
            0 8px 24px rgba(99, 102, 241, 0.03);
          font-size: 13px;
          color: #4b5563;
        }

        .star-icon {
          display: flex;
          align-items: center;
          color: #f59e0b;
          filter: drop-shadow(0 1px 1px rgba(245, 158, 11, 0.15));
        }

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
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 800;
          color: #0f0f11;
          letter-spacing: -1.8px;
          line-height: 1.15;
          margin: 0 0 20px 0;
          text-align: center;
          z-index: 2;
          max-width: 920px;
        }

        .icon-inline {
          display: inline-flex;
          vertical-align: middle;
          margin: 0 4px;
          transform: translateY(-4px);
          filter: drop-shadow(0 4px 8px rgba(79, 70, 229, 0.2));
          animation: inlineFloat 4s ease-in-out infinite;
        }

        @keyframes inlineFloat {
          0%, 100% { transform: translateY(-4px); }
          50% { transform: translateY(-8px); }
        }

        /* Headline Node Editor Selector Custom Style */
        .editor-node-wrap {
          position: relative;
          display: inline-block;
          padding: 0 14px;
          margin: 0 2px;
          z-index: 5;
        }

        .editor-node {
          color: #4f46e5;
          position: relative;
          z-index: 2;
          font-weight: 800;
        }

        .editor-node-wrap::before {
          content: "";
          position: absolute;
          top: -3px;
          bottom: -3px;
          left: 0;
          right: 0;
          border: 1.5px dashed rgba(79, 70, 229, 0.65);
          border-radius: 8px;
          background: rgba(99, 102, 241, 0.04);
          z-index: 1;
          animation: borderPulse 4s ease-in-out infinite;
        }

        @keyframes borderPulse {
          0%, 100% { 
            border-color: rgba(79, 70, 229, 0.45); 
            background: rgba(99, 102, 241, 0.02); 
          }
          50% { 
            border-color: rgba(79, 70, 229, 0.85); 
            background: rgba(99, 102, 241, 0.07); 
          }
        }

        .node-handle {
          position: absolute;
          width: 7px;
          height: 7px;
          background: #ffffff;
          border: 1.5px solid #4f46e5;
          border-radius: 1px;
          z-index: 3;
        }

        .node-handle.tl { top: -6px; left: -3px; }
        .node-handle.tr { top: -6px; right: -3px; }
        .node-handle.bl { bottom: -6px; left: -3px; }
        .node-handle.br { bottom: -6px; right: -3px; }

        .custom-cursor {
          position: absolute;
          bottom: -22px;
          right: -28px;
          display: flex;
          align-items: center;
          gap: 4px;
          z-index: 10;
          pointer-events: none;
          animation: cursorFloat 6s ease-in-out infinite;
        }

        @keyframes cursorFloat {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-3px, -2px); }
        }

        .cursor-label {
          background: #4f46e5;
          color: #ffffff;
          font-size: 10px;
          font-weight: 600;
          padding: 1.5px 6px;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.25);
          letter-spacing: 0px;
          text-transform: none;
        }

        /* Subtext */
        .subtext {
          font-size: 16px;
          color: #4b5563;
          max-width: 520px;
          line-height: 1.65;
          margin: 0 auto 32px auto;
          text-align: center;
          z-index: 2;
        }

        /* CTA Wrapper */
        .cta-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 56px;
          z-index: 2;
        }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #0f0f11;
          color: #ffffff;
          font-size: 14.5px;
          font-weight: 600;
          padding: 14px 34px;
          border-radius: 30px;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.12),
            0 12px 32px rgba(99, 102, 241, 0.06);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cta-btn:hover {
          background: #1e1e24;
          transform: translateY(-2px);
          box-shadow: 
            0 6px 20px rgba(0, 0, 0, 0.15),
            0 16px 40px rgba(79, 70, 229, 0.2);
        }

        .cta-arrow {
          display: flex;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .cta-btn:hover .cta-arrow {
          transform: translateX(4px);
        }

        /* Visual Container */
        .hero-visual-wrapper {
          position: relative;
          width: 100%;
          max-width: 682px; /* the exact width of the image */
          margin: -100px auto 0 auto; /* pull it up slightly to overlay the empty top of the graphic */
          padding: 0 12px;
          z-index: 3;
          animation: visualFloat 7s ease-in-out infinite;
        }

        @keyframes visualFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .hero-visual {
          width: 100%;
          height: auto;
          display: block;
          mix-blend-mode: multiply; /* blends white background into gradient */
        }

        .fade-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 160px;
          background: linear-gradient(to top, #ffffff 10%, transparent 100%);
          pointer-events: none;
        }

        /* Brand Logos Showcase */
        .brands-wrapper {
          width: 100%;
          max-width: 920px;
          margin-top: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          z-index: 2;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
          padding-top: 40px;
        }

        .brands-label {
          font-size: 11px;
          font-weight: 600;
          color: #8c96a8;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .brands {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 56px;
          flex-wrap: wrap;
        }

        .brand-name {
          font-size: 14.5px;
          font-weight: 700;
          color: #4b5563;
          opacity: 0.45;
          letter-spacing: -0.3px;
          transition: all 0.25s ease;
          cursor: default;
        }

        .brand-name:hover {
          opacity: 0.95;
          color: #4f46e5;
          transform: translateY(-1.5px);
        }

        @media (max-width: 768px) {
          .hero {
            padding-top: 120px;
          }
          .hero-visual-wrapper {
            margin-top: -60px;
          }
          .brands {
            gap: 32px;
          }
        }

        @media (max-width: 640px) {
          .headline {
            letter-spacing: -1.2px;
          }
          .subtext {
            font-size: 15px;
            padding: 0 8px;
          }
          .brands-wrapper {
            margin-top: 48px;
            padding-top: 32px;
          }
          .brands {
            gap: 24px;
          }
          .brand-name {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .hero-visual-wrapper {
            margin-top: -40px;
          }
          .editor-node-wrap {
            padding: 0 8px;
          }
          .custom-cursor {
            bottom: -24px;
            right: -20px;
          }
        }
      `}</style>
    </section>
  );
}