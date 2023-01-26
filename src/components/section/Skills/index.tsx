import React from "react";
import Blurb from "../../article/Blurb";
import SkillPieChart from "../../charts/SkillsPieChart";
// @ts-ignore
import { container } from "./skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className="hero bg-black center">
      <div className="container">
        <div className={container}>
          <Blurb
            title={<h1>Skills</h1>}
            className={"border-blue"}
            description={`Building simple to use and easy to maintain APIs. Responsive and engaging frontend interfaces with non-blocking user experience. Designing and implementing adaptable and predictable data models using high performance database technology. Configuring scalable web servers in cloud based infrastructure`}
          />
          <SkillPieChart />
          <Blurb
            title={<h2>Frontend</h2>}
            className={"border-blue-medium"}
            description={`ReactJS professional equipped with advanced understanding JavaScript, HTML and CSS`}
          />
          <Blurb
            title={<h2>Backend</h2>}
            className={"border-blue-medium"}
            description={`Production ready APIs and web services with technologies such as NodeJS, Serverless, AWS Lambda, Docker, third party API while constantly upgrading my tool box with the latest web technologies`}
          />
          <Blurb
            title={<h2>Database</h2>}
            className={"border-blue-medium"}
            description={`Data Modeling in with Postgres, SQL and creating production ready data migrations`}
          />
          <Blurb
            title={<h2>Cloud</h2>}
            className={"border-blue-medium"}
            description={`Deploying applications to productions environments on AWS, Azure and Digital Ocean, Setting up Linux web servers with Nginx and configuring secure encrypted connects with SSL/TLS certificates`}
          />
        </div>
      </div>
    </section>
  );
}
