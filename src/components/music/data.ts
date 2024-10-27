import toTrainAKillerImage from "@/public/to-train-a-killer.png";
import mainLogo from "@/public/main-logo.png";
import { StaticImageData } from "next/image";

export interface Album {
    name: string
    artist: string
    cover: StaticImageData
    song?: string
  }
  
  export const listenNowAlbums: Album[] = [
    {
      name: "To Train a Killer (First Hunt)",
      artist: "Full Adaptive OST",
      cover: toTrainAKillerImage,
      song: "to-train-a-killer.wav",
    },
    {
      name: "Async Awakenings",
      artist: "Nina Netcode",
      cover: mainLogo,
      song: "music/to-train-a-killer.wav",
    },
    {
      name: "The Art of Reusability",
      artist: "Lena Logic",
      cover: mainLogo,
      song: "music/to-train-a-killer.wav",
    },
    {
      name: "Stateful Symphony",
      artist: "Beth Binary",
      cover: mainLogo,
      song: "music/to-train-a-killer.wav",
    },
  ]
