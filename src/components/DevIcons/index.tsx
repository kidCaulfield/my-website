import React from "react";
// @ts-ignore
import { icon } from "./dev-icons.module.css";

const DevIcons = () => {
  const icons = [
    `${icon} devicon-react-original-wordmark`,
    `${icon} devicon-nodejs-plain-wordmark`,
    `${icon} devicon-express-original-wordmark`,
    `${icon} devicon-javascript-plain`,
    `${icon} devicon-rails-plain-wordmark`,
    `${icon} devicon-ruby-plain-wordmark`,
    `${icon} devicon-html5-plain-wordmark`,
    `${icon} devicon-css3-plain-wordmark`,
    `${icon} devicon-jquery-plain-wordmark`,
    `${icon} devicon-bootstrap-plain-wordmark`,
    `${icon} devicon-git-plain-wordmark`,
    `${icon} devicon-github-original-wordmark`,
    `${icon} devicon-amazonwebservices-plain-wordmark`,
    `${icon} devicon-heroku-plain-wordmark`,
    `${icon} devicon-nginx-original`,
    `${icon} devicon-postgresql-plain-wordmark`,
    `${icon} devicon-redis-plain-wordmark`,
    `${icon} devicon-redux-original`,
    `${icon} devicon-graphql-plain-wordmark`,
    `${icon} devicon-azure-plain-wordmark`,
    `${icon} devicon-docker-plain-wordmark`,
    `${icon} devicon-jest-plain`,
  ];

  return (
    <section className="center container" style={{ maxWidth: "1000px" }}>
      {icons.map((val) => (
        <div key={val} className={`${icon} ${val}`} />
      ))}
    </section>
  );
};

export default DevIcons;
