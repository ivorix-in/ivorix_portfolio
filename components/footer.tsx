"use client";

import Link from "next/link";
import GradualBlur from "./GradualBlur/GradualBlur";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Heading */}
      <div className="footer-top">
        <h2 className="footer-heading">
          Modern Workflows Powered
          <br />
          by Smart AI Agents
        </h2>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#" aria-label="Facebook" className="social-btn">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="social-btn">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="#" aria-label="X" className="social-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="social-btn">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Links Grid — centered */}
      <div className="footer-links-section">
        <div className="footer-links">
          <div className="footer-col">
            <h4>[Company]</h4>
            <ul>
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>[Product]</h4>
            <ul>
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Pricing</Link></li>
              <li><Link href="#">Use Cases</Link></li>
              <li><Link href="#">Integrations</Link></li>
              <li><Link href="#">API</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>[Resources]</h4>
            <ul>
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">FAQ</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Brand name — blur at BOTTOM of this section */}
      <div className="footer-brand-wrapper">
        <div className="footer-brand">IntelliAgent</div>
        {/* Blur is at bottom, fading out the brand text */}
        <GradualBlur
          target="parent"
          position="bottom"
          height="4rem"
          strength={1.5}
          divCount={5}
          curve="bezier"
          opacity={1}
        />
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, #dae5f5 0%, #c2d4ed 100%);
          overflow: hidden;
        }

        .footer-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 36px;
          padding: 80px 24px 48px;
        }

        .footer-heading {
          font-size: clamp(28px, 3.5vw, 42px);
          font-weight: 700;
          color: #0f172a;
          text-align: center;
          letter-spacing: -0.5px;
          line-height: 1.25;
          margin: 0;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-btn {
          width: 72px;
          height: 72px;
          background: rgba(255, 255, 255, 0.38);
          border: 1px solid rgba(255, 255, 255, 0.65);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a8b4c4;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.6);
          color: #64748b;
        }

        /* Links — center aligned */
        .footer-links-section {
          padding: 0 24px 64px;
        }

        .footer-links {
          display: flex;
          gap: 80px;
          justify-content: center;   /* CENTER ആക്കി */
          max-width: 860px;
          margin: 0 auto;
        }

        .footer-col {
          text-align: center;         /* text-ഉം center */
        }

        .footer-col h4 {
          font-size: 14px;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 18px 0;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-col ul :global(a) {
          font-size: 14px;
          color: #64748b;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-col ul :global(a):hover {
          color: #0f172a;
        }

        /* Brand — blur at BOTTOM */
        .footer-brand-wrapper {
          position: relative;
          overflow: hidden;
          line-height: 1;
        }

        .footer-brand {
          font-size: clamp(80px, 15vw, 160px);
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -4px;
          line-height: 0.9;
          user-select: none;
          text-align: center;
          width: 100%;
        }

        @media (max-width: 640px) {
          .social-btn { width: 58px; height: 58px; border-radius: 14px; }
          .footer-links { flex-direction: column; align-items: center; gap: 28px; }
        }
      `}</style>
    </footer>
  );
}