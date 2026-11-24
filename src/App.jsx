import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Search from './components/Search'
import Projects from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form />
      <Search />
      <Projects />
    </>
  )
}

export default App
