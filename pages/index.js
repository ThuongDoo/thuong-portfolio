// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjetcsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// frame motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";
import ProjectsBtn from "../components/ProjectsBtn";
import ProjectsBtn2 from "../components/ProjectsBtn2";
const Home = () => {
  return (
    <div className=" bg-primary/60 h-full">
      {/* text */}
      <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className=" text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" h1"
          >
            Đỗ Mạnh Thường <br />
            <span className=" text-accent">
              {" "}
              <TypeAnimation
                sequence={[
                  "Kỹ thuật viên vi tính",
                  1000,
                  "Lập trình viên",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />{" "}
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-xl font-serif"
          >
            “Hành trình ngàn dặm bắt đầu từ bước chân đầu tiên.” <br />
            <span className="block mt-2 text-sm text-gray-500 text-right italic">
              — Lão Tử (Laozi), Đạo Đức Kinh
            </span>
          </motion.p>
          {/* btn */}
          <div className=" flex justify-center xl:hidden relative">
            <ProjectsBtn2 />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn2 />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="  w-full h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] group"
        >
          {/* Avatar */}
          <div className="relative z-10  transition-all duration-500 ">
            <Avatar />
          </div>

          {/* Lớp blend ám màu */}

          {/* Overlay mờ nhẹ để dịu màu */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
