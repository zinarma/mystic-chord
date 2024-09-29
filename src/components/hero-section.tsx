import { Button } from "@/components/ui/button";
import { Headphones, Send } from "lucide-react";
import heroImage from "@/public/ross-face-1.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="flex flex-col gap-4 justify-center h-screen px-4 p-4 md:p-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-4 justify-around">
        <div>
          <h1 className="--font-raleway">
            Seamless, <span className="text-gradient">Adaptive Music</span>
            <br /> that just Works
          </h1>
          <p>
            <span className="text-blue-200">Immerse your players</span> in the
            world you&apos;ve imagined with a seamless music score that adapts
            to the player&apos;s actions and your world around them. My PhD in
            Musicology has powered me with deep and diverse knowledge of music,
            enabling me to compose in{" "}
            <span className="text-blue-200">any genre</span>.
          </p>
          <p>
            I will compose and implement an adaptive score{" "}
            <span className="text-blue-200">directly into your engine</span> so
            your programmers don&apos;t have to.
          </p>
          <div className="flex flex-col md:flex-row gap-4 py-4">
            <a href="#contact">
              <Button className="text-xl py-6 px-8">
                Book a Consultation <Send className="ml-2" />
              </Button>
            </a>
            <a href="#music">
              <Button className="text-xl py-6 px-8" variant="outline">
                Music <Headphones className="ml-2" />
              </Button>
            </a>
          </div>
        </div>
        <div>
          <Image
            className="rounded-xl"
            width={600}
            height={600}
            src={heroImage}
            alt="heroImage"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
