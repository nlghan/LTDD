import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';

import StockBtn, { StockData } from './StockBtn';
import { getStockInfo } from './api';

const stockList = [
  { stockName: 'VIN GROUP', stockCode: 'VIN' },
  { stockName: 'FLC', stockCode: 'FLC' },
  { stockName: 'VIETJET', stockCode: 'VIETJET' },
  { stockName: 'MASSAN', stockCode: 'MASSAN' },
  { stockName: 'VINAMILK', stockCode: 'VINAMILK' },
  { stockName: 'SRC', stockCode: 'SRC' },
  { stockName: 'HSBC', stockCode: 'HSBC' },
  { stockName: 'SAM HOLDING', stockCode: 'SAM HOLDING' },
  { stockName: 'PETROLIMEX', stockCode: 'PETROLIMEX' },
];

function App(): React.JSX.Element {
  const [stockName, setStockName] = useState(stockList[0].stockName);
  const [stockCode, setStockCode] = useState(stockList[0].stockCode);
  const [changePercent, setChangePercent] = useState('8.700 (-1.5387%)');
  const [isLoading, setIsLoading] = useState(false);
  const [disableButtons, setDisableButtons] = useState(false); // State để disable các nút

  const handlePress = (stock: StockData) => {
    setStockName(stock.stockName);
    setStockCode(stock.stockCode);
    setIsLoading(true); // Bắt đầu loading

    getStockInfo(stock.stockCode).then(stockChangePercent => {
      setChangePercent(stockChangePercent);
      setIsLoading(false); // Kết thúc loading khi có kết quả
    });
  };

  useEffect(() => {
    // Disable buttons when loading
    setDisableButtons(isLoading);
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.stockNameText}>{stockName}</Text>
        <Text style={styles.stockNameCode}>{stockCode}</Text>
        <Text style={styles.stockChangePercent}>{changePercent}</Text>
      </View>

      <View style={styles.footer}>
        {stockList.map(stock => (
          <StockBtn
            key={stock.stockCode}
            stock={stock}
            pressButton={handlePress}
            disabled={disableButtons} // Sử dụng disableButtons để disable nút
          />
        ))}
      </View>

      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="green" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockNameText: {
    fontSize: 35,
    color: 'black',
  },
  stockNameCode: {
    fontSize: 60,
    fontWeight: '500',
    color: 'black',
  },
  stockChangePercent: {
    fontSize: 35,
    color: 'red',
  },
  loadingContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    flex: 1,
    zIndex: 1,
    width: '100%',
    height: '100%'
  },
});

export default App;
