"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link href="/" className="logo">
<span className="logo-text">Ivorix</span>
        </Link>

        {/* Nav Links */}
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <Link href="/about">About</Link>
          <li><Link href="#">Use Cases</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Pricing</Link></li>
        </ul>

        {/* CTA */}
        <Link href="#" className="login-btn" style={{
          display: "inline-block",
          background: "linear-gradient(180deg, #2a2a2a 0%, #0a0a0a 100%)",
          color: "#fff",
          fontSize: "13px",
          fontWeight: 600,
          padding: "9px 28px",
          borderRadius: "10px",
          textDecoration: "none",
          letterSpacing: "0.4px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset, 0 4px 14px rgba(0,0,0,0.35)",
        }}>Login</Link>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 960px;
          z-index: 100;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 16px;
          padding: 12px 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
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
          display: inline-block;
          background: linear-gradient(180deg, #2a2a2a 0%, #0a0a0a 100%);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 28px;
          border-radius: 10px;
          text-decoration: none;
          letter-spacing: 0.4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 1px 0 rgba(255,255,255,0.08) inset, 0 4px 14px rgba(0,0,0,0.35);
          transition: box-shadow 0.2s, transform 0.15s, background 0.2s;
        }

        .login-btn:hover {
          background: linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%);
          box-shadow: 0 1px 0 rgba(255,255,255,0.1) inset, 0 6px 20px rgba(0,0,0,0.45);
          transform: translateY(-1px);
        }

        .login-btn:active {
          transform: translateY(0);
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
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