import React, { useState, useEffect } from "react";
import MySelect from "./MySelect";
import fetchRandomAyah from "./API";
const Bio = () => {
  const topAyah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ";
  const [randomAyahText, setRandomAyahText] = useState("");
  const [randomAyahNumber, setRandomAyahNumber] = useState("");

 useEffect(() => {
    const fetchData = async () => {
      const randomAyah = await fetchRandomAyah(0);
      setRandomAyahText(randomAyah.text);
      setRandomAyahNumber(randomAyah.numberInSurah);
    };

    fetchData();
  }, []);

  return (
    <div className="bio" dir="rtl">
      <div className="bio__top">{topAyah}</div>
      <div className="bio__center">{randomAyahText} {randomAyahNumber + '\u06DD'}</div>
<div className="horizontal-line"></div>
      <MySelect randomAyahNumber={randomAyahNumber} randomAyahText={randomAyahText}/>
    </div>
  );
};

export default Bio;
