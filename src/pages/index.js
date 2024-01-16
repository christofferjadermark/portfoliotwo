import * as React from "react";
import { graphql } from "gatsby";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const IndexPage = ({ data }) => {
  const truncate = (input) =>
    input?.length > 75 ? `${input.substring(0, 75)}...` : input;

  const words = [
    { id: 0, value: "Hello," },
    { id: 1, value: "Hola," },
    { id: 2, value: "Bonjour," },
    { id: 3, value: "Ciao," },
    { id: 4, value: "Hallo," },
    { id: 5, value: "Hej," },
    { id: 6, value: "Guten Tag," },
  ];

  function randomWord() {
    return words[Math.floor(Math.random() * words.length)].value;
  }

  function NewWord() {
    const [word, setWord] = useState("");
    useEffect(() => {
      const interval = setInterval(() => {
        const randomText = randomWord();
        setWord(randomText);
      }, 1500);
      return () => clearInterval(interval);
    }, []);
    return (
      <div className="leading-8xl font-main text-6xl font-semibold text-white transition">
        {word}
      </div>
    );
  }

  return (
    <Layout>
      <div className="glass w-full h-0.5 rounded-sm mb-10"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-6">
          <h1 className="text-white  text-7xl font-primaryFont">{NewWord()}</h1>
          <p className="text-5xl text-textSecondary font-primaryFont">
            My name is Christoffer and I’m a <br /> front end developer.
          </p>
          <p className="text-2xl text-textPrimary font-primaryFont">
            I craft responsive websites where technologies meet creativity.
          </p>
          <button className="bg-btnColor p-3 text-bgColor max-w-40 font-primaryFont">
            WORK WITH ME
          </button>
        </section>
      </div>
      <div className="glass w-full h-0.5 rounded-sm mt-10"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section data-aos="zoom-in" className="mt-80 mb-20">
          <div className="flex flex-row items-center">
            <h2 className="text-4xl text-white font-primaryFont test">
              projects
            </h2>
            <div className="w-2/4 ml-4 h-px bg-btnColor"></div>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.allContentfulProjects.nodes.slice(0, 3).map((project) => (
              <Link to={`/projects/${project.slug}`} key={project.slug}>
                <div className="mt-5 w-full border-textPrimary border overflow-hidden">
                  <img
                    className="max-h-56 w-full object-cover border-textPrimary"
                    src={project.image.file.url}
                    alt="projects"
                  />
                  <p className="p-2 font-primaryFont border-y border-textPrimary text-textPrimary">
                    {project.tags}
                  </p>

                  <div className="p-4">
                    <h3 className="text-xl text-white font-primaryFont border-textPrimary mt-2">
                      {project.imageTitle}
                    </h3>
                    <p className="font-primaryFont mb-4 text-textPrimary">
                      {truncate(project.imageDescription)}
                    </p>
                    <Link
                      className="text-secondaryBtnColor outline hover:bg-secondaryBtnColor text-center hover:text-bgColor p-2 max-w-40 font-primaryFont"
                      to={`/projects/${project.slug}`}
                      key={project.slug}
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-96">
        <section data-aos="zoom-in">
          <div className="flex flex-row items-center">
            <h2 className="text-4xl text-white font-primaryFont test">
              about-me
            </h2>
            <div className="w-1/3 ml-4 h-px bg-btnColor"></div>
          </div>
          <div className="flex flex-col gap-5 mt-7">
            <p className="text-textPrimary font-primaryFont">
              Hello, I'm Christoffer!
            </p>
            <p className="text-textPrimary font-primaryFont">
              I'm a dedicated front-end developer based in Alingsås, Sweden. My
              expertise lies in crafting responsive websites from the ground up,
              elevating them into contemporary, user-centric online experiences.
            </p>
            <p className="text-textPrimary font-primaryFont">
              Channeling my creativity and technical knowledge into website
              development has been my fervent passion for over a year. During
              this time, I have assisted diverse clients in solidifying their
              online presence. I am constantly on the quest to learn about the
              latest technologies and frameworks to ensure that I deliver
              cutting-edge solutions.
            </p>
            <Link
              className="text-secondaryBtnColor outline hover:bg-secondaryBtnColor text-center hover:text-bgColor p-2 max-w-40 font-primaryFont"
              to="/about"
            >
              Read more
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allContentfulProjects {
      nodes {
        imageDescription
        imageTitle
        id
        slug
        tags
        image {
          file {
            url
          }
        }
      }
    }
  }
`;

// const IndexPage = () => {
//   return (
//     <main style={pageStyles}>
//       <h1 style={headingStyles}>
//         Congratulations
//         <br />
//         <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
//       </h1>
//       <p style={paragraphStyles}>
//         Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
//         update in real-time. 😎
//       </p>
//       <ul style={listStyles}>
//         <li style={docLinkStyle}>
//           <a
//             style={linkStyle}
//             href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
//           >
//             {docLink.text}
//           </a>
//         </li>
//         {links.map(link => (
//           <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
//             <span>
//               <a
//                 style={linkStyle}
//                 href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
//               >
//                 {link.text}
//               </a>
//               {link.badge && (
//                 <span style={badgeStyle} aria-label="New Badge">
//                   NEW!
//                 </span>
//               )}
//               <p style={descriptionStyle}>{link.description}</p>
//             </span>
//           </li>
//         ))}
//       </ul>
//       <img
//         alt="Gatsby G Logo"
//         src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
//       />
//     </main>
//   )
// }

export default IndexPage;

export const Head = () => <title>Home Page</title>;
