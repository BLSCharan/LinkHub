import { useEffect, useState } from "react";
import { getProfile, saveProfile } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { token, username } = useAuth();

  const [links, setLinks] = useState([]);
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    getProfile(token).then((data) => {
      setLinks(data.links || []);
      setBio(data.bio || "");
      setAvatar(data.avatar || "");
      setLoading(false);
    });
  }, [token]);

  const addLink = () => {
    setLinks([...links, { title: "New Link", url: "https://" }]);
  };

  const updateLink = (i, field, value) => {
    const copy = [...links];
    copy[i][field] = value;
    setLinks(copy);
  };

  const removeLink = (i) => {
    setLinks(links.filter((_, index) => index !== i));
  };

  const save = async () => {
    await saveProfile(token, { links, bio, avatar });
    alert("Saved successfully");
  };

  if (loading) {
    return <div className="text-white text-center mt-40">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-10 grid md:grid-cols-3 gap-10">

      {/* LEFT EDITOR */}
      <div className="md:col-span-2 overflow-y-auto h-[calc(100vh-120px)] pr-4">
        <h2 className="text-3xl font-bold">Your Links</h2>
        <p className="text-gray-400 mb-6">Welcome back, {username}</p>

        {/* Bio */}
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Your bio"
          className="w-full bg-slate-900 border border-white/10 rounded-xl p-4 mb-6"
        />

        {/* Avatar Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const form = new FormData();
            form.append("image", e.target.files[0]);

            const res = await fetch("http://localhost:5000/api/upload", {
              method: "POST",
              body: form,
            });

            const data = await res.json();
            setAvatar(`http://localhost:5000${data.url}`);
          }}
          className="w-full bg-slate-900 border border-white/10 rounded-xl p-3 mb-6"
        />

        {/* Links */}
        {links.map((link, i) => (
          <div
            key={i}
            className="bg-slate-900 border border-white/10 rounded-xl p-5 mb-4"
          >
            <input
              value={link.title}
              onChange={(e) => updateLink(i, "title", e.target.value)}
              className="w-full bg-slate-800 rounded-lg p-3 mb-3"
            />
            <input
              value={link.url}
              onChange={(e) => updateLink(i, "url", e.target.value)}
              className="w-full bg-slate-800 rounded-lg p-3 mb-3 text-gray-400"
            />
            <button
              onClick={() => removeLink(i)}
              className="text-red-400 text-sm"
            >
              Delete
            </button>
          </div>
        ))}

        <button
          onClick={addLink}
          className="w-full border border-dashed border-white/20 py-4 rounded-xl text-gray-400 hover:text-white"
        >
          + Add New Link
        </button>

        <button
          onClick={save}
          className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Save Changes
        </button>
      </div>

      {/* RIGHT LIVE PREVIEW */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-b from-slate-900 to-slate-800 w-80 rounded-[40px] p-6 border border-white/10">
          <div className="flex flex-col items-center">
            {avatar ? (
              <img src={avatar} className="w-24 h-24 rounded-full mb-4" />
            ) : (
              <div className="w-24 h-24 bg-slate-700 rounded-full mb-4"></div>
            )}

            <p className="font-semibold">@{username}</p>
            <p className="text-gray-400 text-sm mb-6">{bio}</p>

            {links.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-slate-800 py-3 rounded-xl text-center mb-3 hover:bg-slate-700"
              >
                {l.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
