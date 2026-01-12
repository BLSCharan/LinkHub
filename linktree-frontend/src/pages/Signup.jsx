import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup as apiSignup } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();   // ← AuthContext login
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await apiSignup(form);

    if (res.token) {
      login(res.token, res.username);   // ← store in context
      navigate("/dashboard");
    } else {
      setError(res.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center">
          Create your account
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Get started for free
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mt-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <input
            placeholder="Username"
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />
          <input
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-white underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
