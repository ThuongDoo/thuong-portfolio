/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//  data
const aboutData = [
  // {
  //   title: "Kỹ năng",
  //   info: [
  //     {
  //       title: "Lập trình web",
  //       stage: [
  //         "HTML5, CSS3, JavaScript",
  //         "React.js, Next.js, Framer Motion",
  //         "WordPress Development",
  //       ],
  //     },
  //     {
  //       title: "Kỹ thuật máy tính & máy in",
  //       stage: [
  //         "Máy tính: Lắp ráp, vệ sinh, sửa chữa, cài đặt, xử lý sự cố phần mềm",
  //         "Máy in: Nạp mực, chẩn đoán và sửa lỗi máy in HP, Canon, Brother",
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Học vấn",
    info: [
      {
        title: "12.2022 - 03.2023",
        stage: "Tiếng Anh giao tiếp - Trường Anh ngữ quốc tế Ecorp",
      },
      {
        title: "09.2020 - 09.2024",
        stage: "Cử nhân Công nghệ thông tin - Đại học Giao thông Vận tải TPHCM",
      },
      {
        title: "06.2024 - 09.2024",
        stage:
          "Kỹ thuật vi tính - Trường Thịnh Group (Công ty TNHH Phát Triển Công Nghệ Trường Thịnh Group)",
      },
    ],
  },
  {
    title: "kinh nghiệm",
    info: [
      {
        title: "05.2022 - 05.2023",
        stage:
          "Tư vấn viên và chuyên viên chăm sóc khách hàng - Công ty Cổ phần Giáo dục Quốc tế ECORP",
      },
      {
        title: "06.2023 - 05.2024",
        stage: "Lập trình viên web - Chứng khoán XYZ",
      },
      {
        title: "09.2024 - 08.2025",
        stage:
          "Kỹ thuật viên vi tính & máy in - Công Ty TNHH TMDV Công Nghệ & Kỹ Thuật Trung Tín",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className=" h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className=" hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div> */}
      <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className=" flex flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" h2"
          >
            Hành trình <br />
            <span className=" text-accent"> đam mê</span> và{" "}
            <span className=" text-accent">phát triển.</span>
            {/* <span className=" text-accent"> phần mềm.</span> */}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu bằng phong cách
            làm việc tận tâm, nhanh chóng và chính xác. Mang đến các giải pháp
            sửa chữa và hỗ trợ công nghệ hiệu quả, giúp khách hàng yên tâm sử
            dụng thiết bị trong công việc và cuộc sống hàng ngày.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className=" flex flex-1 xl:gap-x-6">
              {/* experience */}
              {/* <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div> */}
              {/* clients */}
              <div className="relative flex-1 flex text-center after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1800} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[150px] mx-auto">
                  Thiết bị <br /> đã sửa chữa
                </div>
              </div>
              <div className="relative flex-1 flex text-center after:w-[1px] after:h-full  after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-3xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={90} duration={5} /> %
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[150px] mx-auto">
                  Khách hàng <br /> hài lòng
                </div>
              </div>

              {/* projects */}
              {/* <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div> */}
              {/* awards */}
              {/* <div className=" relative flex-1 ">
                <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=" flex flex-col w-full xl:max-w-[48%] h-[380px] "
        >
          <div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 z-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-4">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="text-white/90">
                {/* Title */}
                <div className="font-semibold text-white">{item.title}</div>

                {/* Stage */}
                {Array.isArray(item.stage) ? (
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-white/60">
                    {item.stage.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="ml-4 mt-1 text-white/60">{item.stage}</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
