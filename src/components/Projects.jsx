import React from "react";
import daysImg from "../assets/projects/days.jpg";
import ProjectItem from "./ProjectItem";
import storeImg from "../assets/projects/alex-store.jpg";
import personalImg from "../assets/projects/personal-website.jpg";
import doersImg from "../assets/projects/doers.jpg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div id="projects" className="w-full pt-16">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h1 className="py-12">{t("navbar.projects")}</h1>
        
        <ProjectItem
          title="Days"
          sub="Journaling App"
          img={daysImg}
          desc={t("projects.days")}
          stack="React, Redux, Express, MongoDB, CSS"
          demo="https://alexeidevelops.github.io/days"
          code="https://github.com/alexeidevelops/days"
        />
        <ProjectItem
          title="Alex Store"
          sub="Clothing store"
          img={storeImg}
          desc={t("projects.store")}
          stack="React, Express, MongoDB, Styled Components"
          demo="https://alexeidevelops.github.io/alex-store"
          code="https://github.com/alexeidevelops/alex-store"
        />
        <ProjectItem
          title="Doers"
          sub="Todo List"
          img={doersImg}
          desc={t("projects.doers")}
          stack="HTML, CSS, JavaScript"
          demo="https://alexeidevelops.github.io/doers/dist"
          code="https://github.com/alexeidevelops/doers"
        />
      </div>
      
    </div>
  );
};

export default Projects;
