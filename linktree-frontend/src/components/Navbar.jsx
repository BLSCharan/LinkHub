import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { token, username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
        <Link to="/" className="font-bold text-lg">
          LinkHub
        </Link>

        <div className="space-x-6">

          {!token && (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-black px-4 py-2 rounded-lg font-medium"
              >
                Get Started
              </Link>
            </>
          )}

          {token && (
            <>
              <Link to={`/${username}`} className="text-gray-300 hover:text-white">
                Profile
              </Link>

              <Link to="/dashboard" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="text-gray-300 hover:text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
