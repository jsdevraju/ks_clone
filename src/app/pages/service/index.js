import "./styel.css";
import ServiceContent from "../../components/serviceContent";
import Accordion from "../../components/accordion";

const Service = () => {

  return (
    <>
      <section className="service">
        <div className="container">
          <div className="service_container">
            <h1
              style={{
                textAlign: "center",
                color: "#0054ff",
                marginBottom: "30px",
              }}
            >
              OUR SERVICES
            </h1>
            <div className="service_wrapper">
              <ServiceContent
                icon={
                  "https://ksdevware.com/wp-content/uploads/2020/11/web-icon-design-2.png"
                }
                title="Website Design"
                description="Creating thoughtful and purposeful websites for clients all over the world is what we love as well as what we do. We strongly believe in what we do. We look forward to a successful relationship with KS Devware"
                className="content_left"
              />
              <div className="service_cool" style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                gap:"20px",
              }}>
              <Accordion
                title={"MOBILE APPLICATIONS"}
                description={
                  "Everything that is designed well is developed in an amazing way. It quickly becomes apparent that when designs are finished & approved, development just happens at a lightening pace when working on small to enterprise level projects."
                }
              />
              <Accordion
                title={"FULLSTACK WEB APPLICATIONS"}
                description={
                  "Everything that is designed well is developed in an amazing way. It quickly becomes apparent that when designs are finished & approved, development just happens at a lightening pace when working on small to enterprise level projects."
                }
              />
              <Accordion
                title={"WEBSITE DESIGN"}
                description={
                  "Everything that is designed well is developed in an amazing way. It quickly becomes apparent that when designs are finished & approved, development just happens at a lightening pace when working on small to enterprise level projects."
                }
              />
              </div>
            </div>
            {/*  */}
            <div className="service_wrapper">
            <div  className="service_cool" style={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                gap:"20px",
              }}>
              <Accordion
                title={"MOBILE APPLICATIONS"}
                description={
                  "Everything that is designed well is developed in an amazing way. It quickly becomes apparent that when designs are finished & approved, development just happens at a lightening pace when working on small to enterprise level projects."
                }
              />
              <Accordion
                title={"FULLSTACK WEB APPLICATIONS"}
                description={
                  "Everything that is designed well is developed in an amazing way. It quickly becomes apparent that when designs are finished & approved, development just happens at a lightening pace when working on small to enterprise level projects."
                }
              />
              <Accordion
                title={"WEBSITE DESIGN"}
                description={
                  "Everything that is designed well is developed in an amazing way. It quickly becomes apparent that when designs are finished & approved, development just happens at a lightening pace when working on small to enterprise level projects."
                }
              />
              </div>
              <ServiceContent
                icon={
                  "https://ksdevware.com/wp-content/uploads/2020/11/web-icon-design-2.png"
                }
                title="Website Design"
                description="Creating thoughtful and purposeful websites for clients all over the world is what we love as well as what we do. We strongly believe in what we do. We look forward to a successful relationship with KS Devware"
                className="content_right"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
