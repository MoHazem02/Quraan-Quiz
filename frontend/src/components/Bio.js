import React, { useState, useEffect } from "react";
import MySelect from "./MySelect";
const Bio = () => {
  const topAyah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ";
  const [randomAyahNumber, setRandomAyahNumber] = useState(null);
  const [randomAyahText, setRandomAyahText] = useState("");

  useEffect(() => {
    const fetchRandomAyah = async () => {
      try {
        // Generate a random number between 1 and 6236
        const randomNumber = Math.floor(Math.random() * 6236) + 1;
        setRandomAyahNumber(randomNumber);

        // Fetch the verse from the Quran API
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomNumber}/ar.asad`);
        if (!response.ok) {
          throw new Error("Failed to fetch verse from Quran API");
        }
        const data = await response.json();
        setRandomAyahText(data.data.text);
      } catch (error) {
        console.error("Error fetching verse:", error);
      }
    };

    fetchRandomAyah();
  }, []);

  return (
    <div className="bio" dir="rtl">
      <div className="bio__top">{topAyah}</div>
      <div className="bio__center">{randomAyahText}</div>
      <MySelect />
    </div>
  );
};

export default Bio;
