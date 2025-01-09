import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import './sidecar_text.css';
import { page_links } from "./links";

export default function SidecarText() {
  const [showUnderscore, setShowUnderscore] = useState(true);
  const [sidecarText, setSidecarText] = useState("");
  const typeSpeedFast = Object.freeze([50, 100]);
  const sidecarUltimateText = "Sidecar";
  const svgRef = useRef<SVGSVGElement>(null);
  const navigate = useNavigate();
  const location = useLocation(); // get the current location
  const pageName = page_links.find(({ href }) => location.pathname === href)?.label;
  
  const fullText = pageName ? `${sidecarUltimateText}_${pageName}` : sidecarUltimateText;


  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // const isLastChar = sidecarText.length === fullText.length - 1;
    const randomDelay = Math.floor(Math.random() * (typeSpeedFast[1] - typeSpeedFast[0] + 1)) + typeSpeedFast[0];

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
  }, [sidecarText, typeSpeedFast, fullText]);

  useEffect(() => {
    if (svgRef.current) {
      if (location.pathname === "/") {
        svgRef.current.classList.remove('collapsed-svg');
      } else {
        svgRef.current.classList.add('collapsed-svg');
      }
    }
  }, [location.pathname]); // update dependency array to include location.pathname

  return (
    <div className="sidecarText" onClick={() => navigate('/')}>
      <p>{sidecarText}<span style={{visibility: showUnderscore ? "visible" : "hidden"}}>_</span></p>
    </div>
  );
}
