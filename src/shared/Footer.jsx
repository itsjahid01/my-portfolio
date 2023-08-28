import SocialIcon from "../component/SocialIcon";

const Footer = () => {
  return (
    <div className="bg-[#343A40] text-white">
      <div className="container mx-auto md:flex justify-between px-14 py-8">
        <div>
          <span className="text-3xl text-yellow-600 font-bold">
            Noman Hossen
          </span>
          <p>Hi Thanks for visit my website.</p>
        </div>

        <div>
          <span className="text-lg font-semibold">Links</span>
          <ul>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Skill</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-lg font-semibold">Follow</span>
          <SocialIcon></SocialIcon>
        </div>
      </div>
    </div>
  );
};

export default Footer;
