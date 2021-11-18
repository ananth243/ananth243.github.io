import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import git from "../../assets/img/git.png";
import nodejs from "../../assets/img/node.png";
import mongodb from "../../assets/img/mongodb.jpeg";
import react from "../../assets/img/react.png";
import sql from "../../assets/img/sql.png";

function Skills() {
  return (
    <>
      <div id="d1"></div>
      <div id="skills">
        <center>
          <div
            style={{ width: "80%" }}
            className="flex text-blue-regal justify-around my-8 transition-all group"
          >
            <div>
              <VerticalTimeline animate={true}>
                <VerticalTimelineElement
                  className="text-white vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date="2020 Jan - present"
                  iconStyle={{ background: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Senior Web Developer
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Developer's Society of BITS Goa
                  </h4>
                  <p>
                    HTTP Requests, Server creation/maintaneince, Database
                    management (SQL and Mongodb) and web development.
                    Used mostly MERN stack.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="March-Nov 2021"
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">
                    Marketing Associate
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Department of Sponsorship and Marketing, BITS Goa
                  </h4>
                  <p>
                    Worked on the marketing team of the department in pursuing
                    sponsors for our universitiy's 3 annual fests.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Jan-June 2021"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  iconStyle={{ background: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title">Teacher</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Nirmaan, BITS Goa{" "}
                  </h4>
                  <p>
                    Worked for this NGO by teaching basic Mathematics for
                    students of 6th class in order to tackling the JNV exam
                  </p>
                </VerticalTimelineElement>
                
              </VerticalTimeline>
            </div>
          </div>
          <h4 className="text-xl text white font-mono text-center mt-3">Worked with</h4>
          <div className="flex justify-center mb-7 mt-3">
          <ul className="flex sm:flex-row justify-around flex-col" style={{width:"60%"}}>
            {[git, mongodb, react, nodejs, sql].map(img=>(
              <li className="my-4 sm:mx-2"><img src={img} alt="git" className="h-20 w-20"/></li>
            ))}
          </ul>
          </div>
        </center>
      </div>
    </>
  );
}

export default Skills;
