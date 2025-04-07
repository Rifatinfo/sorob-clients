import Archive from "../../Archive/Archive";
// import Hero from "../../Components/Hero/Hero";
import Hero_2 from "../../Components/Hero/Hero_2";
import KeyArea from "../../Components/KeyArea/KeyArea";
import ProjectSlider from "../../Components/ProjectSlider/ProjectSlider";
import Project from "../../Project/Project";

const Home = () => {
    return (
        <div>
            {/* <Hero /> */}
            <Hero_2/>
            <KeyArea />
            <ProjectSlider />
            <Project />
            <Archive />
        </div>
    );
};

export default Home;