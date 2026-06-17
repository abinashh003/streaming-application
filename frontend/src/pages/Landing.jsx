import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-6">Livestream MVP</h1>
      <p className="text-gray-400 mb-6">
        Stream and watch live in real time.
      </p>

      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-purple-600 px-6 py-3 rounded-xl">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="bg-red-600 px-6 py-3 rounded-xl">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}