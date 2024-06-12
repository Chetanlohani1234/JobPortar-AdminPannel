import React from "react";
import './popup.css';

export default function Popup({ onClose, data }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>Full Candidate Details</h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.Type}</td>
                <td>{item.Counts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
