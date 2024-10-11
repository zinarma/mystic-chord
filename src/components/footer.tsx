import Image from "next/image";
import mainLogo from "@/public/main-logo.png";

const Footer = () => {
  return (
    <div className="relative">
      <div className="w-screen h-24"></div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center -z-10 select-none">
        <Image
          className="rounded-xl opacity-10 select-none"
          width={600}
          height={600}
          src={mainLogo}
          alt="mainLogo"
        />
      </div>
      <div className="absolute bottom-0 pt-12 pb-24 text-gray-400 pl-8 z-10 select-auto">
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
