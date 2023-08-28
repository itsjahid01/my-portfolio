import { Link } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";
const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/blogs"}>Blog</Link>
      </li>
      <li>
        <Link to={"/projects"}>Project</Link>
      </li>
      <li>
        <Link to={"/skills"}>Skill</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
      <li>
        <Link
          to={
            "https://drive.google.com/uc?export=download&id=1VtBCbvHAQRxb-_1oGlN-L9_W0DNQL2dr"
          }
        >
          Resume
          <HiExternalLink />
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-[#343A40] text-white font-semibold">
      <div className=" navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#343A40] rounded-box w-52 "
            >
              {navItem}
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-3xl text-yellow-600 font-bold hover:text-yellow-700"
          >
            Noman Hossen
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">{navItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
