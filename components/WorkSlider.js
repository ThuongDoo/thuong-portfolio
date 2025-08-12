import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const workSlides = [
  {
    title: "09.2020 - Đại học Giao thông Vận tải TPHCM",
    description:
      "Bắt đầu hành trình học tập ngành Công nghệ Thông tin tại trường Đại học Giao thông Vận tải TP.HCM, nơi tôi khám phá đam mê công nghệ và lập trình.",
    path: "/work1.jpg",
  },
  {
    title: "05.2022 - Công ty Cổ phần Giáo dục Quốc tế ECORP",
    description:
      "Tham gia làm tư vấn viên, tận tâm hỗ trợ khách hàng và góp phần nâng cao trải nghiệm học tập tại Trung tâm Anh ngữ ECORP, nơi tôi phát triển các kỹ năng mềm.",
    path: "/work2.jpg",
  },
  {
    title: "12.2022 - Học tiếng Anh tại ECORP",
    description:
      "Nâng cao kỹ năng tiếng Anh giao tiếp để mở rộng cơ hội phát triển bản thân và thuận lợi trong công việc sau này.",
    path: "/work3.png",
  },
  {
    title: "06.2023 - Lập trình viên web - Chứng khoán XYZ",
    description:
      "Phát triển các ứng dụng web phục vụ lĩnh vực chứng khoán, áp dụng kiến thức lập trình để giải quyết các bài toán thực tế.",
    path: "/work4.png",
  },
  {
    title: "06.2024 - Vi tính Trường Thịnh",
    description:
      "Tham gia khóa đào tạo kỹ thuật vi tính chuyên sâu, nâng cao kỹ năng bảo trì và xử lý sự cố phần cứng máy tính.",
    path: "/work6.webp",
  },
  {
    title: "12.2024 - Tốt nghiệp Cử nhân Công nghệ Thông tin",
    description:
      "Vinh dự nhận bằng cử nhân Công nghệ Thông tin, sẵn sàng bước vào giai đoạn phát triển sự nghiệp với nền tảng vững chắc.",
    path: "/work5.png",
  },
  {
    title: "09.2024 - Công Ty TNHH TMDV Công Nghệ & Kỹ Thuật Trung Tín",
    description:
      "Đảm nhận vị trí kỹ thuật viên vi tính và máy in, đảm bảo thiết bị hoạt động hiệu quả và hỗ trợ khách hàng tại nhà.",
    path: "/work7.jpg",
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000, // 4 giây mỗi slide
        disableOnInteraction: false, // vẫn auto khi user thao tác
      }}
      modules={[Pagination, Autoplay]}
      className="h-[400px] xl:h-[600px] max-w-[600px] xl:max-w-none mx-auto"
      loop={true} // lặp vô hạn
    >
      {workSlides.map((slide, index) => (
        <SwiperSlide key={index} className="flex flex-col items-center ">
          <div className="relative w-full h-64 xl:h-96 rounded-lg overflow-hidden">
            <Image
              src={slide.path}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, 600px"
              priority={index === 0} // ưu tiên load ảnh đầu
            />
          </div>
          <h3 className="mt-4 text-sm xl:text-2xl font-semibold text-white">
            {slide.title}
          </h3>
          <p className="mt-2 text-gray-300 text-base">{slide.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
