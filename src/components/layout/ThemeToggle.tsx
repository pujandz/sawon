'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const light = stored === 'light';
    setIsLight(light);
    document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark');
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    const theme = next ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (_) {}
  };

  return (
    <button
      onClick={toggle}
      className="theme-toggle-btn"
      aria-label={isLight ? 'Switch to Night mode' : 'Switch to Day mode'}
      title={isLight ? 'Night Mode' : 'Day Mode'}
    >
      <i className={`fa-solid ${isLight ? 'fa-moon' : 'fa-sun'}`} aria-hidden="true" />
    </button>
  );
}
