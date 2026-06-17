import { useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [streamInfo, setStreamInfo] = useState(null);

  const handleGoLive = async () => {
    try {
      const res = await api.post("/stream", {
        title: "My Live Stream"
      });

      setStreamInfo({
        id: res.data.id,
        streamKey: res.data.streamKey,
        rtmpUrl: res.data.rtmpUrl,
        viewerUrl: `http://54.91.27.248:5173/stream/${res.data.id}`
      });
    } catch (err) {
      console.error(err);
      alert("Failed to create stream");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl mb-8">Streamer Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-zinc-900 p-6 rounded-xl">
          Live Status: Offline
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          Viewers: 0
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          Chat Activity: 0
        </div>
      </div>

      <button
        onClick={handleGoLive}
        className="mt-8 px-6 py-3 bg-red-600 rounded-xl"
      >
        Go Live
      </button>

      {streamInfo && (
        <div className="mt-8 bg-zinc-900 p-6 rounded-xl space-y-3">
          <p><b>Stream ID:</b> {streamInfo.id}</p>
          <p><b>RTMP URL:</b> {streamInfo.rtmpUrl}</p>
          <p><b>Stream Key:</b> {streamInfo.streamKey}</p>
          <p><b>Viewer URL:</b> {streamInfo.viewerUrl}</p>
        </div>
      )}
    </div>
  );
}