import { useState } from 'react'
import './App.css'

import Projects from './components/Projects'
import projects from './data/projects'

function App() {
  const [agencyProjects, setProjects]=useState(projects);

  return (
    <>
      <Projects projects={agencyProjects} setProjects={setProjects}/>
    </>
  )
}

export default App
