import React from "react";

const Bio = () => {
  const topAyah = "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ";
  const centerAyah =
    "إِنَّ هَٰذَا ٱلۡقُرۡءَانَ يَهۡدِي لِلَّتِي هِيَ أَقۡوَمُ وَيُبَشِّرُ ٱلۡمُؤۡمِنِينَ ٱلَّذِينَ يَعۡمَلُونَ ٱلصَّٰلِحَٰتِ أَنَّ لَهُمۡ أَجۡرٗا كَبِيرٗا";

  return (
    <div className="bio">
      <div className="bio__top">{topAyah}</div>
      <div className="bio__center">{centerAyah}</div>
    </div>
  );
};

export default Bio;
