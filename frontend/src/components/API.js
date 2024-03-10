const fetchRandomAyah = async (randomNumber) => {
  try {
    if(randomNumber === 0){
    randomNumber = Math.floor(Math.random() * 6236) + 1;
    }
    // Fetch the verse from the Quran API
    const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomNumber}/ar.asad`);
    if (!response.ok) {
      throw new Error("Failed to fetch verse from Quran API");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching verse:", error);
    return null;
  }
};

export default fetchRandomAyah;
