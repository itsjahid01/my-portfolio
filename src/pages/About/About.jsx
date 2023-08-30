import img from "../../assets/rsz_diabari-removebg-preview1.png";

const About = () => {
  return (
    <div className="bg-[#20303F] ">
      <div className="container mx-auto text-white md:flex gap-5 items-center px-10">
        <div className="md:w-[40%] z-10">
          <img src={img} alt="" className="" />
        </div>
        <div className="md:w-[60%]">
          <h3 className="text-4xl text-yellow-600 font-bold mb-8">About Me</h3>
          <p className="text-white text-lg">
            Hi There <br /> This Md. Noman Hossen, You can call me Noman, I am a
            full-stack developer. Specially MERN Developer. What you know about
            me, I put the some answer below, You may like it.
          </p>
          <div className="flex gap-10  mt-5">
            <div className="w-1/2">
              <span className="text-2xl font-semibold">Name:</span>
              <p className="text-lg">Md Noman Hossen</p>
              <span className="text-2xl font-semibold">Phone:</span>
              <p className="text-lg">+8801716846280</p>
            </div>
            <div>
              <span className="text-2xl font-semibold">Email:</span>
              <p className="text-lg">mdnomanhossen09@gmail.com</p>
              <span className="text-2xl font-semibold">LinkedIn:</span>
              <p className="text-lg">
                https://www.linkedin.com/in/md-noman-hossen/
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
