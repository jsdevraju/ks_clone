import React, { useState } from "react";
import "./style.css";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const Accordion = ({ title, description }) => {
  const [showAccordion, setShowAccordion] = useState(false);



  return (
    <>
      <div className="accordion_box" onClick={() => setShowAccordion(!showAccordion)}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4>{title}</h4>
          {showAccordion ? (
            <BiMinus
              size={20}
              color="rgb(0, 84, 255)"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <BsPlusLg
              size={20}
              color="rgb(0, 84, 255)"
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        <div
          className={
            showAccordion ? "accordion_main_box show" : "accordion_main_box"
          }
        >
          <p className="accordion_text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
