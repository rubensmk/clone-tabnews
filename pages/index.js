import { Player } from "@lottiefiles/react-lottie-player";

function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Em construção...</h1>
      <Player
        src="https://lottie.host/7d2fa5f2-f4c2-40b7-b7b5-1d3839a8bf74/H74upuCZ9Q.json"
        className="player"
        loop
        autoplay
        style={{ height: "800px", width: "800px" }}
      />
    </main>
  );
}

export default Home;
