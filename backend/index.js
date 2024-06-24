const path = require("path");
const { json } = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const City = require("./database");
const cors = require("cors");
const app = express();

app.use(json());

app.use(cors());

app.post("/bookmarks/save", async (req, res) => {
  const data = req.body;
  console.log(data);

  //checking for existing user
  const existingCity = await City.findOne({ lon: data.lon, lat: data.lat });

  if (!existingCity) {
    const newCity = new City({ ...data });
    const savedCity = await newCity.save();
    console.log("Saved City: ", savedCity);
    res.status(201).send(JSON.stringify(savedCity));
  } else {
    console.log("Existing City: ", existingCity);
    res.status(200).send(JSON.stringify(existingCity));
  }
});

app.get("/bookmarks", async (req, res) => {
  const bookmarks = (await City.find()).reverse();

  res.status(200).send(JSON.stringify(bookmarks));
});

app.post("/bookmarks/info", async (req, res) => {
  const data = req.body;
  console.log("Received data for /info:", data);
  const existingCity = await City.findOne({ lon: data.lon, lat: data.lat });
  res.send(JSON.stringify({ exist: !(existingCity == null) }));
});

app.post("/bookmarks/remove", async (req, res) => {
  try {
    const data = req.body;
    console.log("Received data for /remove:", data);

    const deletedDocument = await City.findOneAndDelete({
      lon: data.lon,
      lat: data.lat,
    });
    console.log("Deleted Document: ", deletedDocument);

    res.status(202).send(JSON.stringify({ deleted: true }));
  } catch (e) {
    console.log("Error in /remove\n", e);
    res.send(JSON.stringify({ deleted: false }));
  }
});
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "frontend", "build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("Weather-api: Database api for weather app.");
  });
}

app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening on port ${process.env.PORT || 3001}...`);
});
