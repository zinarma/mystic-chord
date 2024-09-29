const SoundcloudEmbed = () => {
  return (
    <div
      id="music"
      className="flex flex-col gap-4 justify-center h-screen px-4 p-4 md:p-8"
    >
      <div>
        <h1>My Music</h1>
        <iframe
          scrolling="no"
          width="500"
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
      </div>
    </div>
  );
};

export default SoundcloudEmbed;
