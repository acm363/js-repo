import React from "react";
import Navigation from "../components/Navigation";
import ScrollBottom from "../components/ScrollBottom";
import Logo from "../components/Logo";
import Project from "../components/Project";
import Mouse from "../components/Mouse";

export const Project1 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation></Navigation>
        <Logo />
        <Project projectNumber={0} />
        <ScrollBottom left={"/"} right={"/project-2"} />
      </div>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation></Navigation>
        <Logo />
        <Project projectNumber={1} />
        <ScrollBottom left={"/project-1"} right={"/project-3"} />
      </div>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation/>
        <Logo />
        <Project projectNumber={2} />
        <ScrollBottom left={"/project-2"} right={"/project-4"} />
      </div>
    </main>
  );
};

export const Project4 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation></Navigation>
        <Logo />
        <Project projectNumber={3} />
        <ScrollBottom left={"/project-3"} right={"/contact"} />
      </div>
    </main>
  );
};
