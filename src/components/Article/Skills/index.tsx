import React from "react";
import Reveal from "../../animations/Reveal";
import SkillPieChart from "../../charts/SkillsPieChart";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

export default function Skills() {
  return (
    <article
      className="column"
      // move to css module
      style={{
        maxWidth: "400px",
        paddingTop: "50px",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div>
        <Reveal
          transition={{
            from: ["hide-left"],
            to: ["white", "animate-left-in", "pattaya"],
          }}
          options={options}
        >
          <h1>Skills</h1>
          <Reveal
            transition={{
              from: ["hide-left"],
              to: ["white", "animate-left-in-slow", "helvetica"],
            }}
            options={options}
          >
            <div className="border-lime" />
          </Reveal>
        </Reveal>
        <Reveal
          transition={{
            from: ["hide-left"],
            to: ["white", "animate-left-in-slower", "helvetica"],
          }}
          options={options}
        >
          <p>
            Building simple to use and easy to maintain APIs. Responsive and
            engaging frontend interfaces with non-blocking user experience.
            Designing and implementing adaptable and predictable data models
            using high performance database technology. Configuring scalable web
            servers in cloud based infrastructure
          </p>
        </Reveal>
        <SkillPieChart />
      </div>
      {/*
    subset
*/}
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in", "pattaya"],
        }}
        options={options}
      >
        <h2>Backend</h2>
        <Reveal
          transition={{
            from: ["hide-left"],
            to: ["white", "animate-left-in-slow", "helvetica"],
          }}
          options={options}
        >
          <div className="border-lime-medium" />
        </Reveal>
      </Reveal>
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in-slower", "helvetica"],
        }}
        options={options}
      >
        <p>
          Production ready APIs and web services with technologies such as
          NodeJS, Serverless, AWS Lambda, Docker, third party API while
          constantly upgrading my tool box with the latest web technologies
        </p>
      </Reveal>
      {/*
    subset
*/}
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in", "pattaya"],
        }}
        options={options}
      >
        <h2>Frontend</h2>
        <Reveal
          transition={{
            from: ["hide-left"],
            to: ["white", "animate-left-in-slow", "helvetica"],
          }}
          options={options}
        >
          <div className="border-lime-medium" />
        </Reveal>
      </Reveal>
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in-slower", "helvetica"],
        }}
        options={options}
      >
        <p>
          ReactJS professional equipped with advanced understanding JavaScript,
          HTML and CSS
        </p>
      </Reveal>
      {/*
    subset
*/}
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in", "pattaya"],
        }}
        options={options}
      >
        <h2>Database</h2>
        <Reveal
          transition={{
            from: ["hide-left"],
            to: ["white", "animate-left-in-slow", "helvetica"],
          }}
          options={options}
        >
          <div className="border-lime-medium" />
        </Reveal>
      </Reveal>
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in-slower", "helvetica"],
        }}
        options={options}
      >
        <p>
          Data Modeling in with Postgres, SQL and creating production ready data
          migrations
        </p>
      </Reveal>
      {/*
    subset
*/}
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in", "pattaya"],
        }}
        options={options}
      >
        <h2>Cloud</h2>
        <Reveal
          transition={{
            from: ["hide-left"],
            to: ["white", "animate-left-in-slow", "helvetica"],
          }}
          options={options}
        >
          <div className="border-lime-medium" />
        </Reveal>
      </Reveal>
      <Reveal
        transition={{
          from: ["hide-left"],
          to: ["white", "animate-left-in-slower", "helvetica"],
        }}
        options={options}
      >
        <p>
          Deploying applications to productions environments on AWS, Azure and
          Digital Ocean, Setting up Linux web servers with Nginx and configuring
          secure encrypted connects with SSL/TLS certificates
        </p>
      </Reveal>
    </article>
  );
}
