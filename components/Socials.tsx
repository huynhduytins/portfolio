import { SOCIALS } from "@/constants";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const getIcons = (icon: string) => {
  switch (icon) {
    case "FaLinkedin":
      return <FaLinkedin />;
    case "FaGithub":
      return <FaGithub />;
    case "FaFacebook":
      return <FaFacebook />;
    default:
      return <FaLinkedin />;
  }
};

const Socials = () => {
  return (
    <>
      {SOCIALS.map((social, idx) => (
        <Link
          key={idx}
          href={social.link}
          className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        >
          {getIcons(social.icon)}
        </Link>
      ))}
    </>
  );
};

export default Socials;
