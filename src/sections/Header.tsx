"use client";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "project", label: "Project" },
  { id: "skill", label: "Skill" },
  { id: "about", label: "About" },
];

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Clear the hash from the URL and scroll to the top on component mount
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    // Always scroll to top after clear hash
    window.scrollTo(0, 0);

    const sections = document.querySelectorAll("section[id]");

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      rootMargin: "-50% 0% -50% 0%",
    });

    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`nav-item ${
              activeSection === link.id ? "bg-white text-gray-900 font-semibold" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};