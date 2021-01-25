import React, { Component, useState } from "react";
// import './index.css'
import AboutContainer from "./about/AboutContainer";
import Footer from "./footer/Footer";
import NavBar from "./header/NavBar";
import ProjectContainer from "./projects/ProjectContainer";
import SkillContainer from "./skills/SkillContainer";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  state = {
    showingAbout: true,
    showingProject: false,
    showingSkils: false
  };

  onClickAbout = () => {
    this.setState({
      showingAbout: true,
      showingProject: false,
      showingSkils: false
    });
  };
  onClickProject = () => {
    this.setState({
      showingProject: true,
      showingAbout: false,
      showingSkils: false
    });
  };
  onClickSkills = () => {
    this.setState({
      showingSkils: true,
      showingAbout: false,
      showingProject: false
    });
  };

  render() {
    return (
      <div>
        <div>
          <NavBar
            about={this.onClickAbout}
            project={this.onClickProject}
            skills={this.onClickSkills}
          />
        </div>

        <div className="animation">
          {" "}
          {this.state.showingAbout ? <AboutContainer /> : null}
        </div>
        <div className="animation">
          {" "}
          {this.state.showingProject ? <ProjectContainer /> : null}
        </div>
        <div className="animation">
          {" "}
          {this.state.showingSkils ? <SkillContainer /> : null}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
