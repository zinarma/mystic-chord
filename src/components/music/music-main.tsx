import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { AlbumArtwork } from "@/components/music/album-artwork";
import { listenNowAlbums } from "@/components/music/data";

export default function MusicPage() {
  return (
    <>
      <div id="music" className="hidden md:block">
        <div className="flex justify-center">
          <div className="h-full px-4 py-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Listen Now
                </h2>
                <p className="text-sm text-muted-foreground">
                  You&apos;re gonna like this.
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {listenNowAlbums.map((album) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[250px]"
                      aspectRatio="portrait"
                      width={250}
                      height={330}
                    />
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
