// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className=" h-full bg-primary/30 py-36 flex items-center bg-blue-500">
      <Circles />
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className=" text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0  justify-center">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" h2 xl:mt-12 text-3xl xl:text-7xl text-accent "
            >
              Hành trình{" "}
              <span className="text-white xl:block text-right">của tôi.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className=" mb-4 max-w-[400px] mx-auto lg:mx-0 hidden xl:block"
            >
              Từ những bước đầu tiên chập chững bước vào lĩnh vực công nghệ
              thông tin, qua các trải nghiệm học tập và làm việc thực tế, tôi
              không ngừng nỗ lực để phát triển kỹ năng và kiến thức. Hành trình
              này là minh chứng cho sự kiên trì, đam mê và quyết tâm chinh phục
              những thử thách mới.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>

      <Bulb />
    </div>
  );
};

export default Work;
