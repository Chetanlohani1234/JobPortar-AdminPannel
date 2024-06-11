import React from "react";
import './popup.css'

export default function Popup({ onClose, data }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>Full Candidate Details</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.Type}: {item.Counts}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
