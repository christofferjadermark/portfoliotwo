import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProjectTemplate = ({ data }) => {
  const project = data.contentfulProjects;

  return (
    <Layout>
      <div className="flex flex-row items-center">
        <div className="text-3xl text-white font-primaryFont px-3">
          {project.imageTitle}
        </div>
        <div className="w-2/4 ml-4 h-px bg-btnColor"></div>
      </div>
      <p className="p-3">{project.imageDescription}</p>
      <div className="flex justify-center p-3">
        <img
          className="max-w-56 w-full object-contain border-textPrimary"
          src={project.image.url}
          alt="project"
        />
      </div>
      <p className="px-3">
        {documentToReactComponents(JSON.parse(project.projectDescription.raw))}
      </p>
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
      projectDescription {
        raw
      }
    }
  }
`;

export default ProjectTemplate;
