import React, { useRef, useEffect } from "react";
// @ts-ignore
import TagCloud from "TagCloud";
// @ts-ignore
import { icon } from "./iconSphere.module.css";

type IconSphereProps = {
  radius: number;
};

const IconSphere = ({ radius }: IconSphereProps) => {
  const ref = useRef(null);
  const isTagCloudLoaded = useRef(false);

  useEffect(() => {
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
      // `${icon} devicon-bootstrap-plain-wordmark`,
      `${icon} devicon-git-plain-wordmark`,
      `${icon} devicon-github-original-wordmark`,
      `${icon} devicon-amazonwebservices-plain-wordmark`,
      // `${icon} devicon-heroku-plain-wordmark`,
      `${icon} devicon-nginx-original`,
      `${icon} devicon-postgresql-plain-wordmark`,
      `${icon} devicon-redis-plain-wordmark`,
      `${icon} devicon-redux-original`,
      `${icon} devicon-graphql-plain-wordmark`,
      `${icon} devicon-azure-plain-wordmark`,
      `${icon} devicon-docker-plain-wordmark`,
      `${icon} devicon-jest-plain`,
    ];

    if (isTagCloudLoaded.current && ref.current) return;

    TagCloud(".icon-sphere", Array(icons.length).fill(""), {
      radius: radius,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });

    // @ts-ignore
    ref.current.childNodes[0].childNodes.forEach((e, i) =>
      e.setAttribute("class", icons[i])
    );

    isTagCloudLoaded.current = true;
  }, []);

  return (
    <section className="center">
      <div ref={ref} className="icon-sphere"></div>
    </section>
  );
};

export default IconSphere;
