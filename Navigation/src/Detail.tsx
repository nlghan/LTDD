import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Detail = ({route,navigation}:any) => {
    const {userId, userName, other} = route.params;
    return (
        <View style={styles.container}>
            <Text>UerID: {userId}</Text>
            <Text>UerName: {userName}</Text>
            <Text>Other: {other}</Text>
          <TouchableOpacity onPress={() => {
            navigation.push('Detail', {
                userId: 'User02'
            });
          }}>
            
            <Text style={styles.buttonText}>Go to Detail again</Text>
            
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
        navigation.navigate('Home');
      }}>
        <Text>Go Home</Text>
      </TouchableOpacity>
        </View>
        
      );

}

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

export default Detail

