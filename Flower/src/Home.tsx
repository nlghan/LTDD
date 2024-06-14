import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { getPlants } from '../api';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface PlantItem {
  id: number;
  common_name: string;
  scientific_name: string[];
  other_name: string[];
  cycle: string;
  watering: string;
  sunlight: string[];
  default_image: {
    license: number;
    license_name: string;
    license_url: string;
    original_url: string;
    regular_url: string;
    medium_url: string;
    small_url: string;
    thumbnail: string;
  } | null;
}

const Home = ({ navigation }: any) => {
  const [plants, setPlants] = useState<PlantItem[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await getPlants();
        if (data && data.data) {
          // Extract "data" array from the response
          const plantData = data.data;
          setPlants(plantData);
        } else {
          console.error('Empty data received');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPlants();
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.common_name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }: { item: PlantItem }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('Detail', {
          plant: item // Pass the whole plant item to the Detail screen
        })
      }}
    >
      {item.default_image ? (
        <Image source={{ uri: item.default_image.thumbnail }} style={styles.image} />
      ) : (
        <View style={styles.imagePlaceholder} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.common_name}</Text>
        <Text>Scientific Name: {item.scientific_name.join(', ')}</Text>
      </View>
      <Icon name="arrow-forward" size={25} style={styles.arrowIcon} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={styles.heading}>Plants List</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>
      <FlatList
        data={filteredPlants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

//SafeArea: Component để đảm bảo nội dung không bị che khuất bởi thanh status bar hoặc notch.
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    paddingHorizontal: 16,
    
    backgroundColor: '#fff',
    marginTop:10
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  listContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f9f1',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#ccc',
    borderRadius: 40,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  arrowIcon: {
    color: '#0b774c',
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

export default Home;
