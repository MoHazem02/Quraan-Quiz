import React, { useState,useEffect } from "react";

const MySelect = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [userScore, setUserScore] = useState(0); // Assuming initial score is 0

  useEffect(() => {
    // Simulating user score change
    const interval = setInterval(() => {
      setUserScore(prevScore => prevScore + 1);
    }, 2000); // Change the interval as per your requirement or remove this code if the score doesn't change over time

    return () => clearInterval(interval);
  }, []);


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected option:", selectedOption);
    // You can perform any additional actions here, such as submitting the form or updating state.
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="score-circle">{userScore}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="quranSura"
          list="quranSuraList"
          value={inputValue}
          className="card__input"
          placeholder="اختر سورة من كتاب الله"
          onChange={handleInputChange}
        />
        <datalist id="quranSuraList">
          <option value="الفاتحة" />
          <option value="البقرة" />
          <option value="آل عمران" />
          <option value="النساء" />
          {/* Add more suras as needed */}
        </datalist>
        <div className="form">
          <button type="submit" className="next-button">إرسال</button>
          <button type="submit" className="next-button-2">التالي</button>
        </div>
      </form>
    </div>
  );
};

export default MySelect;
