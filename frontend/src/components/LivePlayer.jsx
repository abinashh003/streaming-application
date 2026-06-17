import { useEffect, useRef } from "react";
import Hls from "hls.js";
import api from "../services/api";

export default function LivePlayer({ streamId }) {
  const videoRef = useRef(null);

  useEffect(() => {
    async function loadStream() {
      try {
        const res = await api.get(`/stream/${streamId}`);

        const streamUrl =
          `http://54.91.27.248:8080${res.data.playbackUrl}`;

        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(streamUrl);
          hls.attachMedia(videoRef.current);

          return () => hls.destroy();
        }
      } catch (err) {
        console.error("Failed to load stream");
      }
    }

    loadStream();
  }, [streamId]);

  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      className="w-full rounded-xl"
    />
  );
}