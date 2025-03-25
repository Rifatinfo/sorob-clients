import Archive from "../../Archive/Archive";
import Hero from "../../Components/Hero/Hero";
import KeyArea from "../../Components/KeyArea/KeyArea";
import ProjectSlider from "../../Components/ProjectSlider/ProjectSlider";
import Project from "../../Project/Project";

const Home = () => {
    return (
        <div>
            <Hero />
            <KeyArea />
            <ProjectSlider />
            <Project />
            <Archive />
        </div>
    );
};

export default Home;