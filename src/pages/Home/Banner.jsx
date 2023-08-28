import { Link } from "react-router-dom";
import img from "../../assets/jahid-removebg-preview.png";
import SocialIcon from "../../component/SocialIcon";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Full-Stack Web Developer",
      "MERN Stack Developer",
      "React Developer",
      "Backend Developer",
    ],
    loop: 0,
  });
  return (
    <div className="bg-[#20303F] ">
      <div className="container mx-auto md:flex justify-between items-center px-16">
        <div>
          <p className="text-3xl lg:text-5xl font-bold text-yellow-600 pt-5">
            Hi <br /> This is Md Noman Hossen
          </p>
          <p className="text-3xl  text-red-600 my-5">
            I Am A <span className="font-semibold">{text}</span>
            <Cursor cursorColor="red" />
          </p>
          <SocialIcon></SocialIcon>
          <div className="mt-5">
            <Link to={"/contact"}>
              <button
                type="button"
                className="px-4 py-2 rounded text-white  mr-3 bg-blue-500 hover:bg-blue-700"
              >
                Hire Me
              </button>
            </Link>
            <Link
              to={
                "https://drive.google.com/uc?export=download&id=1Wi_JZahjLjRxHCvh-yAQFlymGA4PGImr"
              }
            >
              <button
                type="button"
                className="px-4 py-2 rounded text-white  bg-blue-500 hover:bg-blue-700"
              >
                Download CV
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
