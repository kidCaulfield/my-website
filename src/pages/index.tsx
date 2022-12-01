import React, { useRef, useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
// @ts-ignore
import TagCloud from "TagCloud";
import "../styles/global.css";

const IndexPage: React.FC<PageProps> = () => {
  const ref = useRef(null);
  const IsTagCloudLoaded = useRef(false);

  useEffect(() => {
    console.log('window: ',);

    const icons = [
      "icon devicon-react-original-wordmark",
      "icon devicon-nodejs-plain-wordmark",
      "icon devicon-express-original-wordmark",
      "icon devicon-javascript-plain",
      "icon devicon-rails-plain-wordmark",
      "icon devicon-ruby-plain-wordmark",
      "icon devicon-html5-plain-wordmark",
      "icon devicon-css3-plain-wordmark",
      "icon devicon-jquery-plain-wordmark",
      "icon devicon-bootstrap-plain-wordmark",
      "icon devicon-git-plain-wordmark",
      "icon devicon-github-original-wordmark",
      "icon devicon-amazonwebservices-plain-wordmark",
      "icon devicon-heroku-plain-wordmark",
      "icon devicon-nginx-original",
      "icon devicon-postgresql-plain-wordmark",
      "icon devicon-redis-plain-wordmark",
      "icon devicon-redux-original",
      "icon devicon-graphql-plain-wordmark",
      "icon devicon-illustrator-plain",
      "icon devicon-azure-plain-wordmark",
      "icon devicon-photoshop-plain",
    ];


    if (IsTagCloudLoaded.current && ref.current) return;

    TagCloud(".icon-sphere", Array(icons.length).fill(""), {
      radius: 300,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });

    ref.current.childNodes[0].childNodes.forEach((e, i) =>
      e.setAttribute("class", icons[i])
    );
    IsTagCloudLoaded.current = true;
  }, []);

  return (
    <main>
      <section className="center">
        <div ref={ref} className="icon-sphere"></div>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
    />
  </>
);
