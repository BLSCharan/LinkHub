import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login as apiLogin } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();      // ← AuthContext login
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await apiLogin(form);   // ← API login

    if (res.token) {
      login(res.token, res.username);   // ← Store in context
      navigate("/dashboard");
    } else {
      setError(res.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center">Welcome back</h2>
        <p className="text-gray-400 text-center mt-2">
          Login to your account
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-800 border border-white/10"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-800 border border-white/10"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-xl font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-white underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
