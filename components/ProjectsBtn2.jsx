// next image

// icons
import { HiArrowRight } from "react-icons/hi2";
import CircleTextSVG from "./CircleTextSVG";

const ProjectsBtn2 = () => {
  return (
    <div className=" mx-auto xl:mx-0">
      <a
        href="https://drive.google.com/file/d/11BxN83igSDFsTsSvZ_FTSV9nABbwyFUR/view?usp=sharing" // link ngoài
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[185px] h-[185px] flex justify-center items-center z-[5] bg-[url('https://raw.githubusercontent.com/ThuongDoo/images/cc1a2485fd27398ae6511f8a16dbcfafcf03d116/circle-star.svg')] bg-cover bg-center bg-no-repeat group"
      >
        {/* <img
          src={
            "https://raw.githubusercontent.com/ThuongDoo/images/cc1a2485fd27398ae6511f8a16dbcfafcf03d116/circle-star.svg"
          }
          width={141}
          height={148}
          alt=""
        /> */}
        <CircleTextSVG text="TẢI CV" radius={100} fontSize={20} separator="•" />

        <HiArrowRight className=" absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </a>
    </div>
  );
};

export default ProjectsBtn2;
