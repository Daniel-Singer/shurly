import express from "express";
import validUrl from "valid-url";
import shortid from "shortid";
import URL from "../models/url.js";

const router = express.Router();

// @route POST /api/url/shorten
// @desc  Create short url

router.post("/shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL;
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid Base URL");
  }

  // create url code
  const urlCode = shortid.generate();

  // check long url
  if (validUrl.isUri(longUrl)) {
    try {
      let shurly = await URL.findOne({ longUrl });
      if (shurly) {
        res.json(shurly);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;
        shurly = new URL({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });
        await shurly.save();
        res.json(shurly);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid long URL");
  }
});

export default router;
