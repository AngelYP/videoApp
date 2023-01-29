import { FunctionComponent } from "preact";
import { h } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import "./player.css";

const Player: FunctionComponent<{ data: any; handleReturnHome: () => void }> =
  ({ data, handleReturnHome }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [videoSize, setVideoSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      const handleResizeWindow = (event: UIEvent) => {
        const w = event.target as Window;
        setVideoSize({ width: w.innerWidth, height: w.innerHeight });
      };

      window.addEventListener("resize", handleResizeWindow);

      return () => window.removeEventListener("resize", handleResizeWindow);
    }, []);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.requestFullscreen();
      }
    }, [videoRef]);

    const handleOnEnded = useCallback(() => {
      handleReturnHome();
      handleSaveInStorage();
    }, []);

    const handleSaveInStorage = useCallback(() => {
      const storedMoviesProgress = JSON.parse(
        localStorage.getItem("movies_progress") || "{}"
      );
      const movieProgress = { [data.id]: data };
      const moviesProgress = { ...storedMoviesProgress, ...movieProgress };
      localStorage.setItem("movies_progress", JSON.stringify(moviesProgress));
    }, []);

    return (
      <div className="player-container">
        <video
          width={videoSize.width}
          height={videoSize.height}
          controls
          autoPlay
          ref={videoRef}
          onEnded={handleOnEnded}
          // onTimeUpdate={handleOnTimeUpdate}
        >
          <source src={data.mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

export default Player;
