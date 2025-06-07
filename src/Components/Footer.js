import React, { useState } from "react";
import "../styles/footer.css";
import img1 from "../Assets/2ba80fa66fd38221d033ce89e41c11f13fa72569.png";
import img2 from "../Assets/3a366f6e31f8ef62c060cfcf33c0e347fb1e9046.png";
import img3 from "../Assets/5ae9f794fc299c45c094b931d3c7c98a20c22bb5.png";
import img4 from "../Assets/7d0e67877dd47376218a875f180b143d9f17f4b4.png";
import img5 from "../Assets/f94f48fbad3efdc549bca9e7abd93551333ecee4 (1).png";

function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
    console.log("Selected language:", event.target.value);
  };

  const languages = [
    { code: "en", label: "English", flag: "https://flagcdn.com/w40/us.png" },
    { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
    { code: "es", label: "Español", flag: "https://flagcdn.com/w40/es.png" },
    { code: "de", label: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
    { code: "zh", label: "中文", flag: "https://flagcdn.com/w40/cn.png" }
  ];

  const emojiFlags = {
    en: "🇺🇸",
    fr: "🇫🇷",
    es: "🇪🇸",
    de: "🇩🇪",
    zh: "🇨🇳"
  };

  return (
    <div className="footer-wrapper">
      <div className="f-1">
        <div className="f-section1">
          <h3 className="header">Need Travel Help?</h3>
          <p className="f-Link animation">Got Questions? Call us 24/7!</p>
          <p className="f-Link animation">Call Us: +254 716909 815</p>
          <p className="f-Link animation">
            Email Us: <span>info@travelsy.com</span>
          </p>
        </div>
        <div className="f-section2">
          <h3 className="header">company</h3>
          <p className="f-Link animation">about us</p>
          <p className="f-Link animation">careers</p>
          <p className="f-Link animation">terms of use</p>
          <p className="f-Link animation">privacy statement</p>
          <p className="f-Link animation">give us feedback</p>
          <p className="f-Link animation">partner with us</p>
        </div>
        <div className="f-section3">
          <h3 className="header">
            other services & <br /> support
          </h3>
          <p className="f-Link animation">rewards program</p>
          <p className="f-Link animation">partners</p>
          <p className="f-Link animation">legal</p>
          <p className="f-Link animation">privacy policy</p>
          <p className="f-Link animation">customer service help</p>
        </div>
        <div className="f-section4">
          <h3 className="header">quick links</h3>
          <p className="f-Link animation">your account</p>
          <p className="f-Link animation">camping locations</p>
          <p className="f-Link animation">activities</p>
          <p className="f-Link animation">hire equipment</p>
          <p className="f-Link animation">blogs</p>
        </div>
        <div className="f-section5">
          <h3 className="header">mailing list</h3>
          <p className="f-Link mail-text">
            Sign Up for our mailing lists and get the latest offers and
            promotions straight in your inbox.
          </p>
          <div className="f-mail-container">
            <input placeholder="Your Email" type="text" />
            <button className="f-mail-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="f-2">
        <div className="f-section6">
          <h3 className="header">contact info</h3>
          <p className="f-Link address">
            2nd Floor, Fedha Plaza, Westlands, Nairobi, Kenya.
          </p>
          <p className="f-Link box">P.O Box 7231-00300 Nairobi, Kenya</p>
        </div>
      </div>

      <div className="f-sponsors">
        <div className="f-sponsors-wrapper">
          <h2 className="logo">travelsy</h2>

          
          <div className="sponsor-logo-wrapper">
            <img src={img1} alt="" className="sponsor-logo" />
          </div>
          <div className="sponsor-logo-wrapper">
            <img src={img2} alt="" className="sponsor-logo" />
          </div>
          <div className="sponsor-logo-wrapper">
            <img src={img3} alt="" className="sponsor-logo" />
          </div>
          <div className="sponsor-logo-wrapper">
            <img src={img4} alt="" className="sponsor-logo" />
          </div>
          <div className="sponsor-logo-wrapper">
            <img src={img5} alt="" className="sponsor-logo" />
          </div>

          <div className="f-language">
            <div className="flagwrapper">
              <img
                src={languages.find((x) => x.code === selectedLanguage)?.flag}
                alt=""
                className="flagImg"
              />
            </div>{" "}
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={handleChange}
              className="language"
              style={{ padding: "8px", fontSize: "16px" }}>
              {languages.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2019 Travelsy Ltd. All rights reserved</p>
        <p>Made in Kenya by Ralak</p>
      </div>
    </div>
  );
}

export default Footer;
