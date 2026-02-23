export default function AlbumFloatingBackdrop() {
  const albumCount = 10;
  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {Array.from({ length: albumCount }).map((_, i) => {
          // spread out with some randomness
          const left = (i / albumCount) * 100 + Math.random() * 10 - 5;
          const top = Math.random() * 100;
          const speed = 10 + Math.random() * 20; // 10s to 30s
          return (
            <img
              key={i}
              src={`/asset/album-floating-backdrop/1.jpg`}
              className="absolute w-32 h-32 object-cover rounded-lg -translate-x-0.5"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animation: `out-rise-out ${speed}s linear infinite`,
                animationDelay: `${-Math.random() * speed}s`,
              }}
            />
          );
        })}
      </div>
      <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-zinc-800/80" />
      <div className="absolute h-0 w-screen bottom-0" />
    </div>
  );
}
