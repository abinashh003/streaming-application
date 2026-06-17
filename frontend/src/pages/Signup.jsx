import { useState } from "react";
import api from "../services/api";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await api.post("/auth/signup", {
        name,
        email,
        password
      });

      alert(res.data.message || "Signup successful");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-96">
        <h2 className="text-3xl mb-5">Signup</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-3 rounded bg-zinc-800"
          placeholder="Name"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 rounded bg-zinc-800"
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-3 rounded bg-zinc-800"
          placeholder="Password"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-red-600 p-3 rounded"
        >
          Signup
        </button>
      </div>
    </div>
  );
}