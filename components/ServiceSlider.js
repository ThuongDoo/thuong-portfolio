import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { RxArrowTopRight } from "react-icons/rx";
import { LuMonitor, LuPrinter, LuCode2 } from "react-icons/lu";

import { FreeMode } from "swiper";

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
    <>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
        }}
        freeMode={true}
        pagination={false}
        modules={[FreeMode]}
        className="h-[240px] sm:h-[340px] "
        style={{ paddingBottom: 0, marginBottom: 0 }}
      >
        {serviceData.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ height: "100%", marginBottom: 0, paddingBottom: 0 }}
          >
            <div className="bg-[rgba(65,47,123,0.15)] h-full justify-around rounded-lg px-6 py-8  flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        :global(.swiper) {
          padding-bottom: 0 !important;
          margin-bottom: 0 !important;
        }
        :global(.swiper-slide) {
          margin-bottom: 0 !important;
          padding-bottom: 0 !important;
        }
      `}</style>
    </>
  );
};

export default ServiceSlider;
