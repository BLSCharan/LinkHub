import express from "express";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

/* ========================
   Get logged-in user data
======================== */
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.json({
      username: user.username,
      bio: user.bio || "",
      avatar: user.avatar || "",
      links: user.links || []
    });

  } catch (err) {
    res.status(500).json({ message: "Failed to load profile" });
  }
});

/* ========================
   Save profile & links
======================== */
router.post("/", auth, async (req, res) => {
  try {
    const { bio, avatar, links } = req.body;

    const user = await User.findById(req.user.id);

    if (bio !== undefined) user.bio = bio;
    if (avatar !== undefined) user.avatar = avatar;
    if (links !== undefined) user.links = links;

    await user.save();

    res.json({
      success: true,
      bio: user.bio,
      avatar: user.avatar,
      links: user.links
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to save profile" });
  }
});

/* ========================
   Public profile
======================== */
router.get("/public/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.json({
      username: user.username,
      bio: user.bio || "",
      avatar: user.avatar || "",
      links: user.links || []
    });

  } catch (err) {
    res.status(500).json({ message: "Failed to load profile" });
  }
});

export default router;
