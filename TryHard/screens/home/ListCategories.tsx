import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import Expand from '../components/Expand';

const ListCategories: React.FC = () => {
    return (
        <>
            <Expand title1='Danh mục' />
            <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <View>
                        <Image style={styles.img} source={require('../../assets/image/lemon-tea.jpg')} />
                    </View>
                    <View>
                        <Image style={styles.img} source={require('../../assets/image/lychee-jasmine-tea.jpg')} />
                    </View>
                    <View>
                        <Image style={styles.img} source={require('../../assets/image/pink_lotus_tea.png')} />
                    </View>
                    <View>
                        <Image style={styles.img} source={require('../../assets/image/oolong_peach_tea.png')} />
                    </View>
                    <View>
                        <Image style={styles.img} source={require('../../assets/image/oolong_peach_tea.png')} />
                    </View>
                    <View>
                        <Image style={styles.img} source={require('../../assets/image/oolong_peach_tea.png')} />
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center'
    },
    img: {
        width: 85,
        height: 85,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1.5,
        marginHorizontal: 5, // Khoảng cách giữa các hình ảnh
    }

})

export default ListCategories;
