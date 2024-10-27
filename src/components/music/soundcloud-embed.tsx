"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

// const useWindowSize = () => {
//   const [windowSize, setWindowSize] = useState<number>(0);

//   useEffect(() => setWindowSize(window.innerWidth), []);

//   useEffect(() => {
//     const lastWindowSize = window.innerWidth;

//     const updateWindowSize = () => {
//       setWindowSize(lastWindowSize);
//     };
//     window.addEventListener("resize", updateWindowSize); // add event listener
//     return () => {
//       window.removeEventListener("resize", updateWindowSize); // clean up
//     };
//   }, [windowSize]);

//   return windowSize;
// };

const SoundcloudEmbed = () => {
  // const windowSize = useWindowSize();
  // console.log(windowSize);

  return (
    <div
      id="music"
      className="flex flex-col gap-4 justify-center h-screen px-4 p-4 md:p-8"
    >
      <h1 className="pb-4">My Music</h1>

      <Tabs defaultValue="soundcloud" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="soundcloud">Soundcloud</TabsTrigger>
          <TabsTrigger value="youtube">Youtube</TabsTrigger>
        </TabsList>
        <TabsContent value="soundcloud">
          <iframe
            scrolling="no"
            width="400"
            height="300"
            // frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1854280029&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div>
            <a
              href="https://soundcloud.com/mystic-chord-music"
              title="Mystic Chord Music"
            >
              Mystic Chord Music
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/mystic-chord-music/sets/soothing-music"
              title="Soothing Music"
            >
              Soothing Music
            </a>
          </div>
        </TabsContent>
        <TabsContent value="youtube">
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/fWH445g69o4?si=YFARTR0dzUJM5sof"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SoundcloudEmbed;
