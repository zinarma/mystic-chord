import heroImage from "@/public/ross-face-2.jpg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div
      id="hero"
      className="flex flex-col gap-4 justify-center h-screen px-4 p-4 md:p-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-4 justify-around">
        <div>
          <h1 className="text-gradient">Dr. Ross Mitchell</h1>
          <p className="text-base md:text-lg">
            Dr. Mitchell is a pianist, composer, and musicologist who received
            his PhD in Musicology for his groundbreaking research on the
            esoteric music and mysticism of Alexander Skryabin. His research
            involved exploring Skryabin&apos;s idiosyncratic music by carefully
            balancing three perspectives - those of composer, analyst, and
            performer. Dr. Mitchell&apos;s tripartite perspective is enabled by
            his extensive training in music theory, including his own{" "}
            <a
              className="text-blue-500"
              href="https://www.intellectbooks.com/the-music-of-nobuo-uematsu-in-the-final-fantasy-series"
            >
              peer-reviewed publications
            </a>
            , as well as his skills as a classical pianist.
          </p>
          <p className="text-base md:text-lg">
            The compositional style of Mystic Chord Music is defined by unity in
            multiplicity, the drawing together of disparate elements into a
            unified whole. Dr. Mitchell&apos;s study of music at its most
            fundamental levels enables him to write cohesive, seamless
            soundtracks that feel as real and immersive as the worlds that you
            create.
          </p>
          <p className="text-sm md:text-base p-4 italic">
            &quot;For us now begins a synthesis: harmony becomes melody and
            melody becomes harmony...and for me there is no distinction between
            melody and harmony - they are one and the same.&quot; - Alexander
            Skryabin, translated by Dr. Ross Mitchell.
          </p>
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

export default AboutMe;
