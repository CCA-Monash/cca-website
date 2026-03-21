import { useState } from "react";
import "./SponsCard.css";

type SponsCardProps = {
  title: string;
  logo: string;
  description: string;
};


export default function SponsCard({ title, logo, description }: SponsCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`SponsCard`} onClick={() => setIsExpanded(!isExpanded)}>
      <div className="row-content">
        <img src={logo} alt={title} className="logo-image" />
        <h2 className="card-title">{title}</h2>
      </div>

      <div className={`description ${isExpanded ? "show" : ""}`}>
        {description}
      </div>
    </div>
  );
}