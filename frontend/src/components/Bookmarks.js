import React from "react";
import WeatherCard from "./WeatherCard";
import "./css/Bookmark.css";

export default function Bookmarks({ bookmarks, setBookmarks }) {
  console.log("Inside Bookmarks Component...\n ", bookmarks);
  const bookmarkList =
    bookmarks.length === 0 ? (
      <p className="bookmark-text">
        " Nothing to see here. You Have not bookmarked any location. "
      </p>
    ) : (
      bookmarks.map((city) => {
        return (
          <WeatherCard
            setBookmarks={setBookmarks}
            city={{
              name: city.name,
              country: city.country,
              state: city.state,
              lat: city.lat,
              lon: city.lon,
            }}
          />
        );
      })
    );
  return <div className="bookmarks">{bookmarkList}</div>;
}
