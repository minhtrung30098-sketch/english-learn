import Navbar from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Dictionary from "./components/Dictionary.jsx"
import Grammar from "./components/Grammar.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

import "./App.css"

function App() {

  return (
    <div>

      <Navbar />

      <Home />
      <Dictionary />
      <Grammar />
      <Contact />

      <Footer />

    </div>
  )
}

export default App