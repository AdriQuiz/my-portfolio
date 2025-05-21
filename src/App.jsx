import Abilities from "./components/Abilities"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import WhoIAm from "./components/WhoIAm"
import Layout from "./layouts/Layout"

function App() {

  return (
    <>
      <Layout className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-color-6 min-h-screen">
        <Navbar />
        <WhoIAm />
        <About />
        <Abilities />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}

export default App
