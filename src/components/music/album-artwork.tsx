"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Album } from "@/components/music/data";
import { PauseIcon, PlayIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
// import toTrainAKillerSound from "@/public/to-train-a-killer.wav";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  album: Album;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: AlbumArtworkProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const MAX = 20;

  function toggleAudio(): void {
    if (playing) {
      console.log("Pausing");
      audioRef.current?.pause();
      setPlaying(false);
    } else {
      console.log("Playing");
      void audioRef.current?.play();
      setPlaying(true);
    }
  }

  // function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
  //   const { value } = e.target;
  //   const volume = Number(value) / MAX;
  //   audioRef.current.volume = volume;
  // }

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <button onClick={(e) => toggleAudio()} type="button" className="">
        <div className="overflow-hidden rounded-md relative group-">
          <Image
            src={album.cover}
            alt={album.name}
            width={width}
            height={height}
            className={cn(
              "h-auto w-auto object-cover transition-all hover:scale-105",
              aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
            )}
          />
          <div className="absolute right-5 left-0 top-[40%] m-auto w-9 rounded-full p-2 text-white shadow-sm">
            {!playing ? (
              <PlayIcon
                className="h-12 w-12 text-blue-200"
                aria-hidden="true"
              />
            ) : (
              <PauseIcon
                className="h-12 w-12 text-blue-200"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </button>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
      </div>
      {/* <audio ref={audioRef} src={toTrainAKillerSound} /> */}
    </div>
  );
}
