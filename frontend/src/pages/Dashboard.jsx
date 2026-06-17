export default function Dashboard() {
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

      <button className="mt-8 px-6 py-3 bg-red-600 rounded-xl">
        Go Live
      </button>
    </div>
  );
}