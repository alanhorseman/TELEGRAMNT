import { useState } from 'react';
import './SwitchRow.css';

export default function SwitchRow({ title, description }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="switch-row" onClick={() => setIsActive(!isActive)}>
      <div className="switch-text">
        <h3 className="switch-title">{title}</h3>
        <p className="switch-description">{description}</p>
      </div>

      <div className={`switch-track ${isActive ? 'on' : 'off'}`}>
        <div className="switch-thumb" />
      </div>
    </div>
  );
}