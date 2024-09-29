import Image from "next/image";
import mainLogo from "@/public/main-logo.png";

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <Image
          className="rounded-xl opacity-10"
          width={600}
          height={600}
          src={mainLogo}
          alt="mainLogo"
        />
      </div>
      <div className="pt-12 pb-24 text-gray-400 pl-8">
        © 2024 Mystic Chord Music. All Rights Reserved.
        <br /> Contact Ross Mitchell at{" "}
        <span className="text-gray-200">ross@mysticchordmusic.com</span>
        <br /> Website created by{" "}
        <span className="text-gray-200">zinarma@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
