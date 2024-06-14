// Home.tsx
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Detail', {
            userId: 'U01',
            userName: 'Yahana',
            other: 'anything'
        });
      }}>
        <Text style={styles.buttonText}>Go to Detail </Text>
        
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    alignItems: 'center', // <-- Remove this line, it's not needed for Text component
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default Home;
