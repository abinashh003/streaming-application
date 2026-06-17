import { useParams } from "react-router-dom";
import ChatPanel from "../components/ChatPanel";
import LivePlayer from "../components/LivePlayer";

export default function StreamPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <LivePlayer streamId={id} />
        </div>

        <div>
          <ChatPanel streamId={id} />
        </div>
      </div>
    </div>
  );
}