import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Project from "./components/mywork/Project"
import Navbar from "./components/navbar/Navbar"
import Service from "./components/servicee/Service"
import { Toaster } from 'react-hot-toast';


function App() {

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
     <Navbar/>
     <Hero/>
     <About/>
     <Project/>
     <Service/>
     <Contact/>
     <Footer/>
    </>
    
  )
}

export default App
