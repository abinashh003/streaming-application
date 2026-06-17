import ChatPanel from "../components/ChatPanel";
import LivePlayer from "../components/LivePlayer";

export default function StreamPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <LivePlayer />
        </div>

        <div>
          <ChatPanel />
        </div>
      </div>
    </div>
  );
}