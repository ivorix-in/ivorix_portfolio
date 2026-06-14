"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show the premium loader for a minimum of 800ms during page transition
    // to give a smooth, app-like feel instead of abrupt flashing.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Global Transition Loader */}
      <Loader isVisible={loading} />

      {/* Fade in page content smoothly after loader finishes */}
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
