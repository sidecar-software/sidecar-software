import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './sidecar_text.css';
import { page_links } from "./links";

// Words to cycle through on the home page
const cycleWords = ["opensearch", "elasticsearch", "terraform", "k8s", "n8n", "siem", "mb", "kibana", "agentics"].map(word => word.toUpperCase());
const CYCLE_HOLD_MS = 2000; // how long to pause before switching words

export default function SidecarText() {
  const [showUnderscore, setShowUnderscore] = useState(true);
  const [sidecarText, setSidecarText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  const root_text = "SIDECAR";
  const type_speed_range = Object.freeze([50, 100]);

  const navigate = useNavigate();
  const location = useLocation();
  const pageName = page_links.find(({ href }) => location.pathname === href)?.label;
  const isHome = !pageName;

  const fullText = pageName
    ? `${root_text}>${pageName}`
    : `${root_text}>${cycleWords[wordIndex]}`;

  const divRef = useRef<HTMLDivElement>(null);

  // Blinking underscore
  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const randomDelay =
      Math.floor(Math.random() * (type_speed_range[1] - type_speed_range[0] + 1)) +
      type_speed_range[0];

    const timeout = setTimeout(() => {
      setSidecarText(prev => {
        if (prev === fullText) return prev;

        if (prev !== fullText.slice(0, prev.length)) {
          return prev.slice(0, -1);
        }

        return prev + (fullText.at(prev.length) || '');
      });
    }, randomDelay);

    return () => clearTimeout(timeout);
  }, [sidecarText, fullText]);

  // Cycle to next word on home page after a hold
  useEffect(() => {
    if (!isHome || sidecarText !== fullText) return;

    const timeout = setTimeout(() => {
      setWordIndex(prev => (prev + 1) % cycleWords.length);
    }, CYCLE_HOLD_MS);

    return () => clearTimeout(timeout);
  }, [sidecarText, fullText, isHome]);

  // Collapsed / expanded based on route
  useEffect(() => {
    if (divRef.current === null) return;
    if (location.pathname === "/") {
      divRef.current.classList.remove('collapsed');
    } else {
      divRef.current.classList.add('collapsed');
    }
  }, [location.pathname]);

  // Update document title
  useEffect(() => {
    document.title = sidecarText + "_";
  }, [sidecarText]);

  const renderText = () => {
    const parts = sidecarText.split('>');
    if (parts.length === 1) return <>{sidecarText}</>;
    return (
      <>
        {parts[0]}
        <span style={{ color: 'var(--color-secondary)' }}>{'>'}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <h1 ref={divRef} onClick={() => navigate('/')}>
      <span>
        {renderText()}
        <span style={{ visibility: showUnderscore ? "visible" : "hidden" }}>_</span>
      </span>
    </h1>
  );
}