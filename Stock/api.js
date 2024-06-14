
import { Alert } from 'react-native';

export const getStockInfo = async (stockCode) => {
  const url = `https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=${stockCode}&datatype=json`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4ac97922edmsh66bf5fe1d5b9d54p19c8b7jsn8ccc50b82c05',
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json['Global Quote'] && json['Global Quote']['10. change percent']) {
      const stockChangePercent = json['Global Quote']['10. change percent'];
      return stockChangePercent;
    } else {
      // Hiển thị Alert khi API không trả về dữ liệu như mong đợi
      Alert.alert('Thông báo', 'Call API không thành công');
      return "";
    }
  } catch (error) {
    console.error(error);
    // Hiển thị Alert khi có lỗi trong quá trình gọi API
    Alert.alert('Thông báo', 'Call API không thành công');
    return "";
  }
};
