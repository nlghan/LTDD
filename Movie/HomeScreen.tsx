import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { getMovies } from './api';

interface MovieItem {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  imdbID: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: { Source: string, Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

const HomeScreen = ({ navigation }: any) => {
  const [movies, setMovies] = useState<MovieItem[]>([]);

  useEffect(() => {
    getMoviesFromApi();
  }, []);

  const getMoviesFromApi = async () => {
    try {
      const moviesData = await getMovies();
      if (moviesData) {
        setMovies(moviesData);
        console.log(moviesData);
      } else {
        throw new Error('An error occurred while fetching movies.');
      }
    } catch (error) {
      console.error(error);
      setMovies([]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Header */}
      <StatusBar backgroundColor={'#ed470b'}/>
      <View style={styles.header}>
        <Text style={styles.headerText}>HomeScreen</Text>
      </View>

      {/* Content */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieBlock}
            onPress={() => {
              navigation.navigate('Detail', {
                poster: item.Poster,
                imdbID: item.imdbID,
                Title: item.Title,
                Year: item.Year,
                Type: item.Type,
                Rated: item.Rated,
                Released: item.Released,
                Runtime: item.Runtime,
                Genre: item.Genre,
                Director: item.Director,
                Writer: item.Writer,
                Actors: item.Actors,
                Plot: item.Plot,
                Language: item.Language,
                Country: item.Country,
                Awards: item.Awards,
                Ratings: item.Ratings,
                Metascore: item.Metascore,
                imdbRating: item.imdbRating,
                imdbVotes: item.imdbVotes,
                DVD: item.DVD,
                BoxOffice: item.BoxOffice,
                Production: item.Production,
                Website: item.Website,
              });
            }}
          >
            <View style={styles.movieContent}>
              <Image source={{ uri: item.Poster }} style={styles.movieImage} />
              <View style={styles.movieTextContainer}>
                <Text style={styles.movieTitle}>{item.Title}</Text>
                <Text style={styles.movieDetails}>Year: {item.Year} | Type: {item.Type}</Text>
                <Text style={styles.movieDetails}>Rated: {item.Rated}</Text>
                <Text style={styles.movieDetails}>Runtime: {item.Runtime}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Text style={styles.arrowIcon}>{'>'}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ed470b',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  movieBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
  },
  movieContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginEnd: 10,
  },
  movieTextContainer: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  movieDetails: {
    fontSize: 14,
    color: '#333',
  },
  arrowContainer: {
    marginTop: 80,
    marginLeft: 'auto',
  },
  arrowIcon: {
    fontSize: 24,
    color: 'black',
  },
});

export default HomeScreen;
