export const getPlants = async () => {
  const url = `https://perenual.com/api/species-list?key=sk-bQqm66179ee92df1f5068`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error);
    return null;
  }
};
