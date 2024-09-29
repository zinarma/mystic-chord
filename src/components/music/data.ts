import firstImage from "@/public/to-train-a-killer.png";

export interface Album {
    name: string
    artist: string
    cover: any
  }
  
  export const listenNowAlbums: Album[] = [
    {
      name: "To Train a Killer (First Hunt)",
      artist: "Full Adaptive OST",
      cover: {firstImage},
    },
    {
      name: "Async Awakenings",
      artist: "Nina Netcode",
      cover: {firstImage},
    },
    {
      name: "The Art of Reusability",
      artist: "Lena Logic",
      cover: {firstImage},
    },
    {
      name: "Stateful Symphony",
      artist: "Beth Binary",
      cover: {firstImage},
    },
  ]
