"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="logo">
          <div className="logo-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="7" fill="url(#navbar-logo-grad)" />
              <path d="M7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="12" cy="12" r="2.5" fill="white" />
              <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
              <defs>
                <linearGradient id="navbar-logo-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#818CF8" />
                  <stop offset="1" stopColor="#4F46E5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">Ivorix</span>
        </Link>

        {/* Nav Links */}
        <ul className="nav-links">
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Use Cases</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Pricing</Link></li>
        </ul>

        {/* CTA */}
        <Link href="#" className="login-btn">
          Login
        </Link>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 1040px;
          z-index: 100;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 20px;
          padding: 10px 24px;
          box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.02),
            0 8px 32px rgba(99, 102, 241, 0.03),
            0 12px 48px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }

        .navbar-inner:hover {
          background: rgba(255, 255, 255, 0.55);
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.02),
            0 8px 32px rgba(99, 102, 241, 0.05),
            0 16px 64px rgba(0, 0, 0, 0.05);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .logo:hover {
          transform: scale(1.02);
        }

        .logo-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 2px 4px rgba(79, 70, 229, 0.15));
        }

        .logo-text {
          font-size: 16px;
          font-weight: 700;
          color: #0f0f11;
          letter-spacing: -0.4px;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 32px;
          margin: 0;
          padding: 0;
        }

        .nav-links :global(.nav-link) {
          font-size: 14px;
          font-weight: 500;
          color: #4b5563;
          text-decoration: none;
          position: relative;
          padding: 4px 0;
          transition: color 0.2s ease;
        }

        .nav-links :global(.nav-link):hover {
          color: #0f0f11;
        }

        .nav-links :global(.nav-link)::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 1.5px;
          background: #4f46e5;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
          opacity: 0;
          border-radius: 2px;
        }

        .nav-links :global(.nav-link):hover::after {
          width: 80%;
          opacity: 1;
        }

        .login-btn {
          display: inline-block;
          background: linear-gradient(180deg, #1f1f23 0%, #0c0c0e 100%);
          color: #ffffff;
          font-size: 13.5px;
          font-weight: 600;
          padding: 8px 24px;
          border-radius: 12px;
          text-decoration: none;
          letter-spacing: 0.2px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 
            0 1px 0 rgba(255, 255, 255, 0.1) inset, 
            0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.2s ease;
        }

        .login-btn:hover {
          background: linear-gradient(180deg, #2d2d33 0%, #151518 100%);
          box-shadow: 
            0 1px 0 rgba(255, 255, 255, 0.12) inset, 
            0 6px 16px rgba(0, 0, 0, 0.2),
            0 0 0 2px rgba(79, 70, 229, 0.15);
          transform: translateY(-1px);
        }

        .login-btn:active {
          transform: translateY(0);
          box-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.1) inset,
            0 2px 4px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 640px) {
          .nav-links {
            display: none;
          }
          .navbar {
            top: 16px;
            width: calc(100% - 32px);
          }
          .navbar-inner {
            padding: 8px 16px;
            border-radius: 16px;
          }
        }
      `}</style>
    </nav>
  );
}
