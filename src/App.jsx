import { useState } from "react"

import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Dictionary from "./components/Dictionary.jsx"
import Grammar from "./components/Grammar.jsx"
import Contact from "./components/Contact.jsx"

import "./App.css"

function App() {

  const [page, setPage] = useState("home")

  return (

    <div>

      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "dictionary" && <Dictionary />}
      {page === "grammar" && <Grammar />}
      {page === "contact" && <Contact />}

    </div>

  )

}

export default App