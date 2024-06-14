import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header.tsx';

import ListCategories from './ListCategories.tsx';
import ListProduct from './ListProduct.tsx';

const HomeScreen: React.FC = () => {
    return (

        <View style={{ paddingHorizontal: 15 }}><Header />
            {/* <Text style={styles.text}>Welcome to Home Screen!</Text> */}
            <ListCategories />
            <ListProduct/>

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
