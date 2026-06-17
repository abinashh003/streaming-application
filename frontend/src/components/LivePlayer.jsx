import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function LivePlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const streamUrl = "http://54.91.27.248:8080/hls/stream123.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(streamUrl);
      hls.attachMedia(videoRef.current);

      return () => hls.destroy();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      className="w-full rounded-xl"
    />
  );
}