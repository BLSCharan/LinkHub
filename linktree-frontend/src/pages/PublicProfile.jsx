import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPublicProfile } from "../services/api";

export default function PublicProfile() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getPublicProfile(username).then(setProfile);
  }, [username]);

  if (!profile) return <div className="text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-3xl p-8 text-center shadow-2xl">

        {/* Avatar */}
        <img
          src={profile.avatar}
          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white shadow"
        />

        {/* Name */}
        <h1 className="text-2xl font-bold">{profile.username}</h1>

        {/* Bio */}
        <p className="text-gray-600 mt-2 mb-6">
          {profile.bio || "Welcome to my links"}
        </p>

        {/* Links */}
        <div className="space-y-4">
          {profile.links.map((l, i) => (
            <a
              key={i}
              href={l.url}
              target="_blank"
              className="block bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-semibold shadow hover:scale-[1.02] transition"
            >
              {l.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
