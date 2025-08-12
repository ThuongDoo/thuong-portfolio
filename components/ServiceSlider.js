import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { RxArrowTopRight } from "react-icons/rx";
import { LuMonitor, LuPrinter, LuCode2 } from "react-icons/lu";

import { Autoplay, FreeMode, Pagination } from "swiper";

const serviceData = [
  {
    icon: <LuMonitor />,
    title: "Kỹ thuật máy tính",
    description: "Lắp ráp, sửa chữa, cài đặt và xử lý sự cố máy tính.",
  },
  {
    icon: <LuPrinter />,
    title: "Kỹ thuật máy in",
    description: "Nạp mực, sửa chữa máy in HP, Canon, Brother,...",
  },
  {
    icon: <LuCode2 />,
    title: "Lập trình web",
    description: "Thiết kế và phát triển website hiện đại, tối ưu.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 }, // mobile nhỏ
        760: { slidesPerView: 2, spaceBetween: 15 }, // sm
        1024: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000, // 4 giây mỗi slide
        disableOnInteraction: false, // vẫn auto khi user thao tác
      }}
      speed={800}
      grabCursor={true}
      modules={[FreeMode, Pagination, Autoplay]}
      className=" sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" bg-[rgba(65,47,123,0.15)] rounded-lg px-6 mx-10 md:mx-0 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon  */}
              <div className=" text-3xl sm:text-4xl text-accent mb-3 sm:mb-4">
                {item.icon}
              </div>
              {/* title & decs  */}
              <div className=" sm:mb-8">
                <div className=" text-base sm:text-lg md:text-xl mb-1 sm:mb-2">
                  {item.title}
                </div>
                <p className=" max-w-[300px] sm:max-w-[350px] leading-normal text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
              {/* arrow  */}
              <div className=" text-3xl">
                <RxArrowTopRight className=" group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
