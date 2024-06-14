import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type StockData = {
  stockName: string;
  stockCode: string;
};

type StockProps = {
  stock: StockData;
  pressButton: Function;
  disabled: boolean; // Thêm disabled prop
};

function StockBtn({ stock, pressButton, disabled }: StockProps): React.JSX.Element {
  const handlePress = () => {
    pressButton(stock);
  };

  return (
    <TouchableOpacity style={[styles.btn, disabled && styles.disabledBtn]} onPress={handlePress} disabled={disabled}>
      <Text style={styles.btnText}>{stock.stockName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'lightgray',
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 10,
    width: 100,
    height: 60,
    margin: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    fontSize: 14,
    color: 'black'
  },
  disabledBtn: {
    backgroundColor: 'gray', // Màu nền khi disabled
    borderColor: 'gray', // Màu viền khi disabled
  }
});

export default StockBtn;
