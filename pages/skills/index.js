// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className=" h-full bg-primary/30 py-36 flex items-center bg-blue-500">
      <Circles />
      <div className=" container mx-auto">
        <div className=" flex flex-col sm:flex-row gap-x-8 justify-center items-center ">
          {/* text */}
          <div className=" text-center flex sm:w-[30vw] flex-col lg:text-left mb-4 sm:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" h2 sm:mt-8 text-4xl sm:text-xl xl:text-4xl"
            >
              kỹ thuật
              <span className=" text-accent"> phần cứng</span> <br /> và lập
              trình
              <span className=" text-accent"> phần mềm.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" mb-4 max-w-[400px] mx-auto text-base sm:text-sm xl:text-base lg:mx-0"
            >
              Với kinh nghiệm trong lập trình web hiện đại và kỹ thuật vi tính,
              máy in, tôi chuyên phát triển các website tối ưu cho doanh nghiệp
              và thực hiện sửa chữa, bảo trì máy tính cùng máy in một cách nhanh
              chóng, hiệu quả, luôn đặt chất lượng và sự hài lòng của khách hàng
              lên hàng đầu.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" w-full sm:max-w-[65%] "
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
