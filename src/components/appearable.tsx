import { useEffect, useState, ReactNode } from "react";
import './appearable.css';

export default function Appearable({ children }: { children: ReactNode }) {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);

  return (
    <div className={`fade-in ${fadeIn ? 'visible' : ''}`}>
      {children}
    </div>
  );
}
