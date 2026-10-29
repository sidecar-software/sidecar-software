import { ReactNode } from "react";
import './page_intro.css';

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
};

export default function PageIntro({ eyebrow, title, lead }: PageIntroProps) {
  return (
    <div className="page_intro">
      <p className="page_intro_eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {lead && <p className="page_intro_lead">{lead}</p>}
    </div>
  );
}
