import React, { useEffect, useState } from "react";
import "../styles/Eperience.css";

function Experience() {
  // const { screenWidth, sectionsRef } = usePage();
  const [activeIndices, setActiveIndices] = useState([]);

  // Trigger sequential style on component mount
  useEffect(() => {
    const delays = [100, 200, 500, 700,850]; // delay in ms for each div
    setActiveIndices([]); // Reset before triggering

    delays.forEach((delay, index) => {
      setTimeout(() => {
        setActiveIndices((prev) => [...prev, index]);
      }, delay);
    });
  }, []); // The empty dependency array ensures this runs once when the component mounts

  const getStyle = (index) => {
    const active = activeIndices.includes(index);
    const opacity = ["1", "1", "1", "1","1"];

    return {
      transition: "all 0.5s ease-in-out",
      opacity: active ? opacity[index] : "0"
    };
  };

  return (
    <div className="exp-wrapper">
      <div className="exp-content-container">
        <h1 style={getStyle(2)}>
          Find An <br /> Experience
        </h1>
        <p style={getStyle(1)}>
          To find you the best experiences, we will ask you a few questions to
          and show you experiences basd on your preferences.
        </p>
        <div className="exp-DurationSelector">
          <p style={getStyle(3)}>How much time do you have?</p>
          <div className="duration-container" style={getStyle(4)}>
            {["A weekend", "A week", "A month", "A few days, specify."].map(
              (label, index) => (
                <label key={index} className="exp-duration">
                  <input type="checkbox" className="exp-checkbox" />
                  <span className="text-gray-700">{label}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
