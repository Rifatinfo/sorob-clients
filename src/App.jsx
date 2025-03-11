
import Archive from './Archive/Archive'
import Archive_2 from './Archive/Archive_2'
// import Archive_tab from './Archive/Archive_tab'
import Hero from './Components/Hero/Hero'
import KeyArea from './Components/KeyArea/KeyArea'
import Navbar from './Components/Navbar/Navbar'
import ProjectSlider from './Components/ProjectSlider/ProjectSlider'
import Footer from './Footer/Footer'
import Project from './Project/Project'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <KeyArea/>
      <ProjectSlider/>
      <Project/>
      <Archive/>
      {/* <Archive_tab/> */}
      <Archive_2/>
      <Footer/>
    </>
  )
}

export default App
