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
          <option value="المائدة" />
          <option value="الأنعام" />
          <option value="الأعراف" />
          <option value="الأنفال" />
          <option value="التوبة" />
          <option value="يونس" />
          <option value="هود" />
          <option value="يوسف" />
          <option value="الرعد" />
          <option value="إبراهيم" />
          <option value="الحجر" />
          <option value="النحل" />
          <option value="الإسراء" />
          <option value="الكهف" />
          <option value="مريم" />
          <option value="طه" />
          <option value="الأنبياء" />
          <option value="الحج" />
          <option value="المؤمنون" />
          <option value="النور" />
          <option value="الفرقان" />
          <option value="الشعراء" />
          <option value="النمل" />
          <option value="القصص" />
          <option value="العنكبوت" />
          <option value="الروم" />
          <option value="لقمان" />
          <option value="السجدة" />
          <option value="الأحزاب" />
          <option value="سبأ" />
          <option value="فاطر" />
          <option value="يس" />
          <option value="الصافات" />
          <option value="ص" />
          <option value="الزمر" />
          <option value="غافر" />
          <option value="فصلت" />
          <option value="الشورى" />
          <option value="الزخرف" />
          <option value="الدخان" />
          <option value="الجاثية" />
          <option value="الأحقاف" />
          <option value="محمد" />
          <option value="الفتح" />
          <option value="الحجرات" />
          <option value="ق" />
          <option value="الذاريات" />
          <option value="الطور" />
          <option value="النجم" />
          <option value="القمر" />
          <option value="الرحمن" />
          <option value="الواقعة" />
          <option value="الحديد" />
          <option value="المجادلة" />
          <option value="الحشر" />
          <option value="الممتحنة" />
          <option value="الصف" />
          <option value="الجمعة" />
          <option value="المنافقون" />
          <option value="التغابن" />
          <option value="الطلاق" />
          <option value="التحريم" />
          <option value="الملك" />
          <option value="القلم" />
          <option value="الحاقة" />
          <option value="المعارج" />
          <option value="نوح" />
          <option value="الجن" />
          <option value="المزمل" />
          <option value="المدثر" />
          <option value="القيامة" />
          <option value="الإنسان" />
          <option value="المرسلات" />
          <option value="النبأ" />
          <option value="النازعات" />
          <option value="عبس" />
          <option value="التكوير" />
          <option value="الإنفطار" />
          <option value="المطففين" />
          <option value="الإنشقاق" />
          <option value="البروج" />
          <option value="الطارق" />
          <option value="الأعلى" />
          <option value="الغاشية" />
          <option value="الفجر" />
          <option value="البلد" />
          <option value="الشمس" />
          <option value="الليل" />
          <option value="الضحى" />
          <option value="الشرح" />
          <option value="التين" />
          <option value="العلق" />
          <option value="القدر" />
          <option value="البينة" />
          <option value="الزلزلة" />
          <option value="العاديات" />
          <option value="القارعة" />
          <option value="التكاثر" />
          <option value="العصر" />
          <option value="الهمزة" />
          <option value="الفيل" />
          <option value="قريش" />
          <option value="الماعون" />
          <option value="الكوثر" />
          <option value="الكافرون" />
          <option value="النصر" />
          <option value="المسد" />
          <option value="الإخلاص" />
          <option value="الفلق" />
          <option value="الناس" />
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
