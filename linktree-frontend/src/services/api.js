const API = "http://localhost:5000/api";

/* ---------------- AUTH ---------------- */

export const signup = async (data) => {
  const res = await fetch(`${API}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const login = async (data) => {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

/* ---------------- PROFILE + LINKS ---------------- */
/* Everything is handled by /api/links */

export const getProfile = async (token) => {
  const res = await fetch(`${API}/links`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.json();
};

export const saveProfile = async (token, data) => {
  const res = await fetch(`${API}/links`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getPublicProfile = async (username) => {
  const res = await fetch(`${API}/links/public/${username}`);
  return res.json();
};
