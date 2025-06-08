import React, { useEffect, useState } from "react";
import "../styles/interest.css";
import { LiaCheckSolid } from "react-icons/lia";
import AOS from "aos";
import "aos/dist/aos.css";

const activities = [
  {
    name: "Rafting",
    image:
      "https://images.unsplash.com/photo-1629248457649-b082812aea6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Nature Walk",
    image:
      "https://images.unsplash.com/photo-1440186347098-386b7459ad6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Bike Riding",
    image:
      "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Bungee Jumping",
    image:
      "https://images.unsplash.com/photo-1549221360-456a9c197d5b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Wine Tasting",
    image:
      "https://images.unsplash.com/photo-1562601579-599dec564e06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Coffee Tasting",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Farm Visit",
    image:
      "https://plus.unsplash.com/premium_photo-1663099373746-703d6504d265?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Camping",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Kibera Tour",
    image:
      "https://images.unsplash.com/photo-1688871989206-6837d08cb690?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Interest = () => {
  const [selected, setSelected] = useState([]);
  // const { screenWidth, sectionsRef } = usePage();
  const [activeIndices, setActiveIndices] = useState([]);

  // Trigger sequential style on component mount
  useEffect(() => {
    const delays = [1000, 1200, 1250, 1300]; // delay in ms for each div
    setActiveIndices([]); // Reset before triggering

    AOS.init({
      duration: 1000, // animation duration in ms
      once: true // whether animation should happen only once - while scrolling down
    });

    delays.forEach((delay, index) => {
      setTimeout(() => {
        setActiveIndices((prev) => [...prev, index]);
      }, delay);
    });
  }, []); // The empty dependency array ensures this runs once when the component mounts

  const getStyle = (index) => {
    const active = activeIndices.includes(index);
    const opacity = ["1", "1", "1", "1"];

    return {
      transition: "all 0.5s ease-in-out",
      opacity: active ? opacity[index] : "0"
    };
  };

  const toggleSelection = (index) => {
    setSelected((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  const getGridClass = (index) => {
    // Define custom span classes per activity index
    switch (index) {
      case 0:
      case 6:
      case 7:
        return "span-2"; // 2/3 width
      default:
        return "span-1"; // 1/3 width
    }
  };

  return (
    <div className="Interest-wrapper">
      <p className="interest-tag" style={getStyle(1)}>
        What are your interest ?
      </p>
      <div className="activity-grid">
        {activities.map((activity, index) => (
          <div
            style={getStyle(2)}
            key={index}
            className={`activity-card ${getGridClass(index)} ${
              selected.includes(index) ? "selected" : ""
            }`}
            onClick={() => toggleSelection(index)}>
            <img
              className="activity-image"
              src={activity.image}
              alt=""
              data-aos="zoom-in"
              loading="lazy"
            />

            <div className="overlay">
              {selected.includes(index) && (
                <span className="checkmark">
                  <LiaCheckSolid />
                </span>
              )}
              <span className="label">{activity.name}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="interest-set-button">Set</button>
    </div>
  );
};

export default Interest;
