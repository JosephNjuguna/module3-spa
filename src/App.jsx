import { useState } from 'react'
import Projects from './components/Projects'
import projects from './data/projects'
import "./assets/app.css";

function App() {
  const [agencyProjects, setProjects]=useState(projects);
  return (
    <>
      <Projects projects={agencyProjects} setProjects={setProjects}/>
    </>
  )
}

export default App
