import Hero from "./sections/Hero/Hero"
import NavBar from "./sections/Hero/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import ProjectsSection from "./sections/ProjectSection/ProjectSection"
import AboutSection from "./sections/AboutSection/Aboutsection"

const Home = () => {

    return(
        <>
            <NavBar />
            <Hero />
            <AboutSection />
            <ProjectsSection />
            
            <Footer />
                </>
    )
}

export default Home