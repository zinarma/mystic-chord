const HeroSection = () => {
  return (
    <div id="hero" className="flex flex-col justify-center h-screen">
      <h1 className="--font-raleway text-gradient px-4 md:px-8">
        Hero Section W
      </h1>
      <p className="px-4 md:p-8">
        Mystic Chord Music is the music production company run by{" "}
        <span className="text-blue-500">Dr. Ross Mitchell</span>, a pianist,
        composer, and musicologist who seeks to unite all three sides of his
        career. The company is named after the famed "Mystic Chord" created by
        Russian composer Alexander Skryabin, who held similar goals of synthesis
        and cohesion:
      </p>
      <p className="px-4 md:p-8 italic">
        For us now begins a synthesis: harmony becomes melody and melody becomes
        harmony...and for me there is no distinction between melody and harmony
        - they are one and the same." - Alexander Skryabin.
      </p>
    </div>
  );
};

export default HeroSection;
