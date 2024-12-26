import React from 'react';
import './App.css';
import {Header} from "./layout/blocks/header/Header";
import {Main} from "./layout/blocks/main/Main";
import {Skills} from "./layout/blocks/skills/Skills";
import {Project} from "./layout/blocks/project/Project";
import {skillsData} from "./data/skillsData";
import {projectsData} from "./data/projectsData";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills skillItems={skillsData}/>
        <Project projecItems={projectsData}/>
        {/*<About/>*/}
        {/*<Contact/>*/}
        {/*<Footer/>*/}
    </div>
  );
}

export default App;
