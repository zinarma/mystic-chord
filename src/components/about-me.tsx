const AboutMe = () => {
  return (
    <div id="about" className="flex flex-col justify-center h-screen">
      <h1 className="p-4 md:p-8 text-gradient">About Me</h1>
      <p className="">
        Mystic Chord Music is the music production company run by{" "}
        <span className="text-blue-500">Dr. Ross Mitchell</span>, a pianist,
        composer, and musicologist who seeks to unite all three sides of his
        career. The company is named after the famed &quot;Mystic Chord&quot;
        created by Russian composer Alexander Skryabin, who held similar goals
        of synthesis and cohesion:
      </p>
      <p className="italic">
        For us now begins a synthesis: harmony becomes melody and melody becomes
        harmony...and for me there is no distinction between melody and harmony
        - they are one and the same.&quot; - Alexander Skryabin.
      </p>
    </div>
  );
};

export default AboutMe;
