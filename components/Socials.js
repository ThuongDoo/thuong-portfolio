import Link from "next/link";
import {
  RiFacebookLine,
  RiMailLine,
  RiGithubLine,
  RiPhoneLine,
} from "react-icons/ri";
import { TbLetterZ } from "react-icons/tb"; // Chữ Z thay thế Zalo

const socials = [
  {
    href: "https://www.facebook.com/domanhthuong20122002/",
    icon: <RiFacebookLine />,
    label: "Facebook",
  },
  {
    href: "domanhthuong20122002@gmail.com",
    icon: <RiMailLine />,
    label: "Email",
  },
  {
    href: "https://zalo.me/0333817395",
    icon: <TbLetterZ />,
    label: "Zalo",
  },
  {
    href: "https://github.com/ThuongDoo",
    icon: <RiGithubLine />,
    label: "GitHub",
  },
  {
    href: "tel:+84333817395",
    icon: <RiPhoneLine />,
    label: "Phone",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
          title={social.label}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
