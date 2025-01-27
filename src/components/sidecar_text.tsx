import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import './sidecar_text.css';
import { page_links } from "./links";

export default function SidecarText() {
  const [showUnderscore, setShowUnderscore] = useState(true);
  const [sidecarText, setSidecarText] = useState("");
  
  const root_text = "SIDECAR";
  const type_speed_range = Object.freeze([50, 100]);
  
  const navigate = useNavigate();
  const location = useLocation(); // get the current location
  const pageName = page_links.find(({ href }) => location.pathname === href)?.label;
  
  const fullText = pageName ? `${root_text}_${pageName}` : root_text;

  const divRef = useRef<HTMLDivElement>(null); // create a reference to the div

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const randomDelay = Math.floor(Math.random() * (type_speed_range[1] - type_speed_range[0] + 1)) + type_speed_range[0];

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

  return (
    <h1 ref={divRef} onClick={() => navigate('/')}>
      <p>{sidecarText}<span style={{visibility: showUnderscore ? "visible" : "hidden"}}>_</span></p>
    </h1>
  );
}
