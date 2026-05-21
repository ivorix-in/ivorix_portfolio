"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="logo">
          <span className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#6366f1" />
              <path d="M7 14h14M14 7v14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>
          <span className="logo-text">IntelliAgent</span>
        </Link>

        {/* Nav Links */}
        <ul className="nav-links">
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Use Cases</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Pricing</Link></li>
        </ul>

        {/* CTA */}
        <Link href="#" className="login-btn">Login</Link>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 820px;
          z-index: 100;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          padding: 12px 20px;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo-text {
          font-size: 15px;
          font-weight: 700;
          color: #111;
          letter-spacing: -0.3px;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 32px;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          font-size: 14px;
          font-weight: 500;
          color: #444;
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: #111;
        }

        .login-btn {
          background: #111;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 20px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.2s;
        }

        .login-btn:hover {
          background: #333;
        }

        @media (max-width: 640px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}