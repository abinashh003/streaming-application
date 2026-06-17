export default function Login() {
  return (
    <div className="h-screen bg-black flex justify-center items-center">
      <div className="bg-zinc-900 p-8 rounded-xl w-96">
        <h2 className="text-3xl mb-5">Login</h2>

        <input
          className="w-full p-3 mb-3 rounded bg-zinc-800"
          placeholder="Email"
        />

        <input
          type="password"
          className="w-full p-3 mb-3 rounded bg-zinc-800"
          placeholder="Password"
        />

        <button className="w-full bg-purple-600 p-3 rounded">
          Login
        </button>
      </div>
    </div>
  );
}