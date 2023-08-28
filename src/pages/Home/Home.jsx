import About from "../About/About";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import Project from "../project/Project";
import Skill from "../skill/Skill";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Project></Project>
      <About></About>
      <Skill></Skill>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default Home;
