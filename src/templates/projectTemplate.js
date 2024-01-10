import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ProjectTemplate = ({ data }) => {
  const project = data.contentfulProjects;

  return (
    <Layout>
      <div>
        <div className="flex flex-row items-center">
          <h2 className="text-4xl text-white font-primaryFont test">project</h2>
          <h2 className="text-3xl text-white font-primaryFont px-3">
            {project.imageTitle}
          </h2>
          <div className="w-2/4 ml-4 h-px bg-btnColor"></div>
        </div>
        <p>{project.imageDescription}</p>
        <img src={project.image.url} alt="image" />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      id
      image {
        url
      }
      imageDescription
      imageTitle
      slug
      tags
    }
  }
`;

export default ProjectTemplate;
