import React from 'react';
import './App.css';
import {Header} from "./layout/blocks/header/Header";
import {Main} from "./layout/blocks/main/Main";
import {Skills} from "./layout/blocks/skills/Skills";
import {Project} from "./layout/blocks/project/Project";
import {About} from "./layout/blocks/about/About";
import {Contact} from "./layout/blocks/contact/Contact";
import {Footer} from "./layout/blocks/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Project/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
