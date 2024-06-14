import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type MovieItem = {
    Title: string;
    Year: string;
    Type: string;
    Poster: string;
    imdbID: string;
  };
  
  export type { MovieItem };
  
// Định nghĩa kiểu cho mỗi màn hình trong stack
type RootStackParamList = {
  Home: undefined;
  Detail: { movie: MovieItem };
};

// Kiểu cho route của DetailScreen
export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

// Kiểu cho navigation của DetailScreen
export type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Detail'>;

// Export các kiểu
export type { RootStackParamList };
