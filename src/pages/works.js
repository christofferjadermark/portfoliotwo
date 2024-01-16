import React, { useState, useMemo } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Link } from "gatsby";

const WorksPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categories = ["All", "Vue", "React", "Native JavaScript"];

  const filteredProjects = data.allContentfulProjects.nodes.filter(
    (project) =>
      (selectedCategory === "All" || project.category === selectedCategory) &&
      project.imageTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const truncate = (input) =>
    input?.length > 75 ? `${input.substring(0, 75)}...` : input;
  return (
    <Layout>
      <div className="flex flex-row items-center">
        <h2 className="text-4xl text-white font-primaryFont test">projects</h2>
        <div className="w-2/4 ml-4 h-px bg-btnColor"></div>
      </div>
      <div className="text-white pt-2 font-primaryFont">
        Embark on a journey through my digital creations where artistry meets
        functionality. As a passionate front-end developer, I have dedicated my
        career to crafting websites and applications that are not only visually
        appealing but also user-friendly and accessible.
      </div>
      <input
        type="text"
        placeholder="Search project"
        className="mt-4 input input-neutral w-full max-w-xs"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="mt-4">
        <select
          className="select select-bordered w-full max-w-xs"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-12 grid h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link to={`/projects/${project.slug}`} key={project.slug}>
            <div className="mt-5 w-full max-h-128 border-textPrimary border overflow-hidden">
              <img
                className="h-56 w-full object-cover"
                src={project.image.file.url}
                alt="projects"
              />
              <p className="p-2 font-primaryFont border-y border-textPrimary text-textPrimary overflow-hidden">
                {project.tags}
              </p>

              <div className="p-4 flex flex-col">
                <h3 className="text-xl text-white font-primaryFont border-textPrimary mt-2">
                  {project.imageTitle}
                </h3>
                <p className="font-primaryFont mb-4 text-textPrimary overflow-hidden">
                  {truncate(project.imageDescription)}
                </p>
                <div className="flex">
                  <Link
                    className="text-secondaryBtnColor outline hover:bg-secondaryBtnColor text-center hover:text-bgColor p-2 max-w-40 font-primaryFont"
                    to={`/projects/${project.slug}`}
                    key={project.slug}
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
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
        category
      }
    }
  }
`;

export default WorksPage;
