import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


const DetailScreen = ({ route, navigation }: any) => {
  const {
    imdbID,
    poster,
    Title,
    Year,
    Type,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Ratings,
    Metascore,
    imdbRating,
    imdbVotes,
    DVD,
    BoxOffice,
    Production,
    Website,
  } = route.params;
  console.log(route.params);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={'#ed470b'} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Details</Text>
        <Text ></Text>
      </View>
      <View style={styles.container}>
        <View style={styles.posterContainer}>
          {poster ? (
            <Image source={{ uri: poster }} style={styles.posterImage} />
          ) : null}
          <Text style={styles.info1}>Metascore: {Metascore}</Text>
          <Text style={styles.info1}>IMDB Rating: {imdbRating}</Text>
        </View>
        <ScrollView>

          <View style={styles.infoContainer}>
            <Text style={styles.title}>{Title}</Text>
            <Text style={styles.info}>Year: {Year}</Text>
            <Text style={styles.info}>Type: {Type}</Text>
            <Text style={styles.info}>IMDB ID: {imdbID}</Text>
            <Text style={styles.info}>Rated: {Rated}</Text>
            <Text style={styles.info}>Released: {Released}</Text>
            <Text style={styles.info}>Runtime: {Runtime}</Text>
            <Text style={styles.info}>Genre: {Genre}</Text>
            <Text style={styles.info}>Director: {Director}</Text>
            <Text style={styles.info}>Writer: {Writer}</Text>
            <Text style={styles.info}>Actors: {Actors}</Text>
            <Text style={styles.info}>Plot: {Plot}</Text>
            <Text style={styles.info}>Language: {Language}</Text>
            <Text style={styles.info}>Country: {Country}</Text>
            <Text style={styles.info}>Awards: {Awards}</Text>
            <Text style={styles.info}>IMDB Votes: {imdbVotes}</Text>
            <Text style={styles.info}>DVD: {DVD}</Text>
            <Text style={styles.info}>Box Office: {BoxOffice}</Text>
            <Text style={styles.info}>Production: {Production}</Text>
            <Text style={styles.info}>Website: {Website}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  posterContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
    marginTop: 28,
    paddingHorizontal: 10
  },
  posterImage: {
    width: '100%',
    height: 220,
    borderRadius: 8,
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  info1: {
    fontSize: 18,
    marginBottom: 5,
    color: 'black',
    fontWeight: '600',
  },
  header: {
    backgroundColor: '#ed470b',
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  backButton: {
    fontSize: 24,
    color: 'white',
    position: 'absolute',
    left: 20,
  },
  
});

export default DetailScreen;