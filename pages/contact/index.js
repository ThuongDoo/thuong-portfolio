/* eslint-disable react/no-unescaped-entities */
// components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";

const contactInfo = [
  {
    label: "Email",
    value: "domanhthuong20122002@gmail.com",
    href: "mailto:domanhthuong20122002@gmail.com",
    isNewTab: true,
  },
  {
    label: "Phone",
    value: "+84 333 817 395",
    href: "tel:+84333817395",
    isNewTab: false,
  },
  {
    label: "Address",
    value: "Liên Khu 5-6, Bình Hưng Hoà B, Bình Tân, Hồ Chí Minh",
    href: `https://www.google.com/maps/place/Đ.+Liên+Khu+5-6,+Bình+Tân,+Hồ+Chí+Minh,+Việt+Nam/@10.790179,106.5877111,17z/data=!3m1!4b1!4m6!3m5!1s0x31752c7a20fc7f09:0xfad5591e40f568c!8m2!3d10.790179!4d106.590286!16s%2Fg%2F1tgft39k?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQA`,
    isNewTab: true,
  },
];

const socialLinks = [
  {
    href: "https://github.com/ThuongDoo",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.facebook.com/domanhthuong20122002/",
    label: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "https://zalo.me/0333817395",
    label: "Zalo",
    icon: <SiZalo />,
  },
];

const Contact = () => {
  // Hàm xử lý click mở link
  const handleClick = (href, isNewTab) => {
    if (isNewTab) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="h-full bg-primary/30 py-20 text-center px-4 md:px-6 lg:px-0">
      <Circles />

      <div className="container mx-auto flex flex-col items-center justify-center h-full gap-14 max-w-6xl">
        {/* Heading */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-red-800
            animate-pulseRedShadow px-2"
        >
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
            connect.
          </span>
        </motion.h2>

        {/* Contact Info Boxes */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-6xl w-full"
        >
          {contactInfo.map(({ label, value, href, isNewTab }) => (
            <div
              key={label}
              role="button"
              tabIndex={0}
              onClick={() => handleClick(href, isNewTab)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleClick(href, isNewTab);
                }
              }}
              className="bg-black/30 backdrop-blur-md rounded-xl p-6 shadow-lg cursor-pointer
                transition duration-400 ease-in-out hover:bg-gradient-to-r hover:from-red-700 hover:via-red-800 hover:to-red-900
                hover:shadow-[0_0_25px_rgb(220,38,38)] hover:text-white"
            >
              <strong className="block mb-2 text-lg font-semibold text-red-400 text-center sm:text-left">
                {label}
              </strong>
              <p className="text-white break-words text-center sm:text-left">
                {value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex justify-center gap-10 sm:gap-14 text-white text-3xl sm:text-4xl"
        >
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-transform duration-300 hover:scale-125 hover:text-red-600 hover:shadow-[0_0_15px_3px_rgb(220,38,38)] rounded-full p-2"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        /* glowing red animation for heading */
        @keyframes pulseRedShadow {
          0%,
          100% {
            text-shadow: 0 0 8px #dc2626, 0 0 16px #b91c1c, 0 0 24px #991b1b,
              0 0 40px #dc2626;
          }
          50% {
            text-shadow: 0 0 12px #b91c1c, 0 0 24px #991b1b, 0 0 36px #7f1d1d,
              0 0 50px #dc2626;
          }
        }
        .animate-pulseRedShadow {
          animation: pulseRedShadow 3.5s ease-in-out infinite;
        }
      `}</style>
      <Bulb />
    </div>
  );
};

export default Contact;
