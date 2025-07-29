import { useState } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { projects } from "../constants";
import CTA from "../components/CTA";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="red-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Join me in celebrating the culmination of countless hours, sleepless
          nights, and boundless passion poured into the projects that have
          shaped my career and fueled my ambition.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {currentProjects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/1 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mb-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 text-lg rounded-full bg-gradient-to-tr from-slate-200 to-white shadow hover:scale-105 disabled:opacity-40"
        >
          ⬅️
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`w-10 h-10 rounded-full font-bold transition-all duration-200 shadow-sm ${
              currentPage === index + 1
                ? "bg-gradient-to-tr from-red-500 to-pink-400 text-white scale-110 shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-lg rounded-full bg-gradient-to-tr from-slate-200 to-white shadow hover:scale-105 disabled:opacity-40"
        >
          ➡️
        </button>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
