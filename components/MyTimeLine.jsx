import React from "react";
import Timeline from "react-awesome-timeline";

const timelineData = [
  {
    title: "12.2022 - 03.2023",
    stage: "Tiếng Anh giao tiếp - Trường Anh ngữ quốc tế Ecorp",
    description:
      "Học tập tiếng Anh giao tiếp cơ bản, nâng cao kỹ năng nghe, nói để phục vụ công việc và giao tiếp hàng ngày.",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "05.2022 - 05.2023",
    stage:
      "Tư vấn viên và chuyên viên chăm sóc khách hàng - Công ty Cổ phần Giáo dục Quốc tế ECORP",
    description:
      "Phụ trách tư vấn khóa học và hỗ trợ khách hàng, nâng cao trải nghiệm dịch vụ.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "09.2020 - 09.2024",
    stage: "Cử nhân Công nghệ thông tin - Đại học Giao thông Vận tải TPHCM",
    description:
      "Chuyên ngành Công nghệ thông tin với trọng tâm là phát triển phần mềm và lập trình web.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "06.2023 - 05.2024",
    stage: "Lập trình viên web - Chứng khoán XYZ",
    description:
      "Phát triển và bảo trì các ứng dụng web liên quan đến lĩnh vực chứng khoán và tài chính.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "06.2024 - 09.2024",
    stage:
      "Kỹ thuật vi tính - Trường Thịnh Group (Công ty TNHH Phát Triển Công Nghệ Trường Thịnh Group)",
    description:
      "Tham gia đào tạo chuyên sâu về kỹ thuật vi tính và bảo trì phần cứng máy tính.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "09.2024 - 08.2025",
    stage:
      "Kỹ thuật viên vi tính & máy in - Công Ty TNHH TMDV Công Nghệ & Kỹ Thuật Trung Tín",
    description:
      "Bảo trì và sửa chữa máy tính, máy in, đảm bảo hoạt động ổn định cho khách hàng.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
  },
];

const MyTimeline = () => {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", padding: 20 }}>
      <h1 style={{ color: "#dc2626", textAlign: "center", marginBottom: 40 }}>
        Hành Trình Của Tôi
      </h1>
      <Timeline
        direction="horizontal"
        data={timelineData}
        style={{
          container: { backgroundColor: "#1f2937" },
          label: { color: "#dc2626" },
          title: { color: "#fff" },
          content: { color: "#ccc" },
        }}
      />
    </div>
  );
};

export default MyTimeline;
