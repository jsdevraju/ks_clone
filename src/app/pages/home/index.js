import React from "react";
import "./style.css";
import { BsChevronDoubleRight } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div
          className="container"
          style={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <div
            className="hero_content"
            style={{
              width: "550px",
            }}
          >
            <Fade left>
              <h1
                style={{
                  fontSize: "2.5em",
                  fontWeight: "bold",
                  color: "#333",
                  lineHeight: "50px",
                  marginBottom: "20px",
                }}
              >
                KS Devware, We Make the Web a Better Place for You.
                One-Stop-Shop for all your IT service
              </h1>
            </Fade>
            <Flip left>
              <p
                style={{
                  color: "#333",
                  fontSize: "1.1em",
                  lineHeight: "1.5em",
                }}
              >
                we create website firm that specializes in growing business to
                business companies. Our designs are cutting edge, and our
                results are unmatched. In a time where digital proficiency
                matters more than ever, we are the partner you are looking for.
              </p>
            </Flip>
            <Slide left>
              <div
                className="btn_group"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginTop: "20px",
                }}
              >
                <button className="app_btn primary_btn">
                  GET A FREE QUOTE <BsChevronDoubleRight />
                </button>
                <button
                  className="app_btn outline_btn"
                  style={{
                    color: "#333",
                  }}
                >
                  OUR PORTFOLIO <BsChevronDoubleRight />{" "}
                </button>
              </div>
            </Slide>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
