import React, { useState } from "react";
import "./SkillMasters.css";

const SkillMasters = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered(true);
  const handleLeave = () => setIsHovered(false);

  return (
    <div className="skillmasters-container">
      <div className={`images-wrapper ${isHovered ? "spread" : ""}`}>
        <img src="/images/vite4boy.png" className="avatar pos1" alt="person4" />
        <img
          src="/images/vite2girl.png"
          className="avatar pos3"
          alt="person2"
        />
        <img src="/images/vite3boy.png" className="avatar pos2" alt="person3" />
        <img src="/images/vite5boy.png" className="avatar pos7" alt="person5" />
        <img src="/images/vite6boy.png" className="avatar pos6" alt="person6" />
        <img src="/images/vite7boy.png" className="avatar pos5" alt="person7" />

        <img src="/images/vitegif4.gif" className="icon pos8" alt="thumb" />
        <img src="/images/vitegif2.gif" className="icon pos10" alt="trophy" />
        <img src="/images/vitegif1.gif" className="icon pos11" alt="emoji" />
        <img src="/images/vitegif3.gif" className="icon pos9" alt="likes" />

        {!isHovered && (
          <>
            <div className="speech-bubble" style={{ top: "30%", left: "45%" }}>
              Amazing⭐⭐⭐⭐⭐
            </div>
            <div className="speech-bubble" style={{ top: "70%", left: "62%" }}>
              ⭐⭐⭐⭐⭐
            </div>
          </>
        )}
      </div>

      <div
        className="center-text"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <p className="text-font">Hear How They Level Up Their Game!</p>
        <h1 className="text-font2">
          Skill <span>Masters</span> Unite! 🤝
        </h1>
        <a href="#">View all Testimonials →</a>
      </div>
    </div>
  );
};

export default SkillMasters;
