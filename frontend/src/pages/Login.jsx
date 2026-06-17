import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-96">
        <h2 className="text-3xl mb-5">Login</h2>

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
          onClick={handleLogin}
          className="w-full bg-purple-600 p-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}