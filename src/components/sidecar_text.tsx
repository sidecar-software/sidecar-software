import { useEffect, useState, useRef } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import './sidecar_text.css';
import { page_links } from "./links";

const ROOT_TEXT = "SIDECAR";
const TYPE_SPEED_RANGE = Object.freeze([50, 100]);

export default function SidecarText() {
  const [showUnderscore, setShowUnderscore] = useState(true);
  const [sidecarText, setSidecarText] = useState("");

  const navigate = useNavigate();
  const location = useLocation(); // get the current location
  const pageName = page_links.find(({ href }) => location.pathname === href)?.label;

  const fullText = pageName ? `${ROOT_TEXT}>${pageName}` : ROOT_TEXT;

  const divRef = useRef<HTMLDivElement>(null); // create a reference to the div

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const randomDelay = Math.floor(Math.random() * (TYPE_SPEED_RANGE[1] - TYPE_SPEED_RANGE[0] + 1)) + TYPE_SPEED_RANGE[0];

    const timeout = setTimeout(() => {
      setSidecarText(prev => {
        if (prev === fullText){
          // divRef.current?.style.setProperty('--width', (divRef.current.offsetWidth / 2).toString()+"px");
          return prev;
        } 

        if (prev !== fullText.slice(0, prev.length)) {
          return prev.slice(0, -1);
        }

        return prev + (fullText.at(prev.length) || '');
      });
    }, randomDelay);

    return () => clearTimeout(timeout);
  }, [sidecarText, fullText]);

  useEffect(() => {
    if (divRef.current === null) return;

    if (location.pathname === "/") {
      divRef.current.classList.remove('collapsed');
    } else {
      divRef.current.classList.add('collapsed');
    }
  }, [location.pathname]); // update dependency array to include location.pathname

  // Update document title to match the animated text
  useEffect(() => {
    document.title = sidecarText + "_";
  }, [sidecarText]);

  // Split text to apply color to separator
  const renderText = () => {
    const parts = sidecarText.split('>');
    if (parts.length === 1) {
      return <>{sidecarText}</>;
    }
    return (
      <>
        {parts[0]}
        <span style={{ color: 'var(--color-secondary)' }}>{'>'}</span>
        {parts[1]}
      </>
    );
  };

  return (
      <h1 ref={divRef} onClick={() => navigate('/') }>
        <span>{renderText()}<span style={{visibility: showUnderscore ? "visible" : "hidden"}}>_</span></span>
      </h1>
  );
}
