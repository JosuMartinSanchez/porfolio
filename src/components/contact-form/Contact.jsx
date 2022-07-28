import React from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

function Contact() {
  return (
    <div id="contacts-container">
      <div id="arrow-container">
        <IconContext.Provider value={{ color: "#0250A3", size: "5em" }}>
          <a href="#skill-container">
            <IoIosArrowDown />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default Contact;
