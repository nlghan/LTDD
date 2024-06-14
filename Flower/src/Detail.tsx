import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Detail = ({ route, navigation }: any) => {
  const { plant } = route.params;
  console.log(plant)

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="#ffffff" />
        </TouchableOpacity>

      <Text style={styles.heading}>Detail</Text>
      </View>
      
      <View style={styles.container}>

        {plant.default_image ? (
          <Image source={{ uri: plant.default_image.thumbnail }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder} />
        )}
        <View style={styles.textContainer}>
          <View style={styles.name}>
            <Icon name="grass" size={30} color="#5dda0e"/>
            <Text style={styles.title}>{plant.common_name}</Text>
            <Icon name="grass" size={30} color="#5dda0e"/>
          </View>
          <Text style={styles.text}>Scientific Name: {plant.scientific_name.join(', ')}</Text>
          <Text style={styles.text}>Cycle: {plant.cycle}</Text>
          <Text style={styles.text}>Watering: {plant.watering}</Text>
          <Text style={styles.text}>Sunlight: {plant.sunlight.join(', ')}</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'column', // Text and image are arranged vertically
    justifyContent: 'flex-start', // Image at the top, text below
    alignItems: 'center', // Center items horizontally
  },
  image: {
    width: '100%', // Image takes full width
    height: '50%', // Image takes 50% of parent height
    borderRadius: 8,
    marginBottom: 16,
  },
  imagePlaceholder: {
    width: '100%', // Placeholder takes full width
    height: '50%', // Placeholder takes 50% of parent height
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  textContainer: {
    width: '100%', // Text takes full width
    flex: 1, // Text takes remaining space
    justifyContent: 'flex-start', // Text starts from the top
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#0b774c',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#0b774c',
    color: '#fff',
    paddingVertical: 10,
  },
});

export default Detail;
