import fetchRandomAyah from "./API";

const MySelect = ({ randomAyahNumber, setRandomAyahText }) => {
  const handleNextAyah = async () => {
    try {

      const nextAyah = await fetchRandomAyah(1);
      setRandomAyahText(nextAyah.text);
    } catch (error) {
      console.error("Error fetching next Ayah:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="score-circle">1</div>
      <form>
        <input
          type="text"
          name="quranSura"
          list="quranSuraList"
          className="card__input"
          placeholder="اختر سورة من كتاب الله"
        />
        <datalist id="quranSuraList">
          <option value="الفاتحة" />
          <option value="البقرة" />
          <option value="آل عمران" />
          <option value="النساء" />
        </datalist>
        <div className="form">
          <button className="next-button">إرسال</button>
          <button className="next-button-2" onClick={handleNextAyah}>التالي</button>
        </div>
      </form>
    </div>
  );
};

export default MySelect;
