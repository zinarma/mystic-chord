"use client"

import { useState, useEffect, useRef } from "react";

export const useAudio = (url: string) => {
const audio = useRef(new Audio());
//   const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.current.play() : audio.current.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.current.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.current.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};