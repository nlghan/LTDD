import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Expand from '../components/Expand';

const ListProduct: React.FC = () => {
    return (
        <>
            <Expand title1='Sản phẩm' />
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image style={styles.img} source={require('../../assets/image/greentea.jpg')} />
                    <View style={styles.sale}>
                        <Text style={styles.text3}>Sale 30%</Text>
                    </View>
                    <View style={styles.text1}>
                        <Text style={styles.text2}>Matcha</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image style={styles.img} source={require('../../assets/image/greentea.jpg')} />
                    <View style={styles.sale}>
                        <Text style={styles.text3}>Sale 30%</Text>
                    </View>
                    <View style={styles.text1}>
                        <Text style={styles.text2}>Matcha</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image style={styles.img} source={require('../../assets/image/greentea.jpg')} />
                    <View style={styles.sale}>
                        <Text style={styles.text3}>Sale 30%</Text>
                    </View>
                    <View style={styles.text1}>
                        <Text style={styles.text2}>Matcha</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Image style={styles.img} source={require('../../assets/image/greentea.jpg')} />
                    <View style={styles.sale}>
                        <Text style={styles.text3}>Sale 30%</Text>
                    </View>
                    <View style={styles.text1}>
                        <Text style={styles.text2}>Matcha</Text>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: 'flex-start', // Chỉnh alignItems thành 'flex-start'
        flexWrap: 'wrap',
        paddingHorizontal: 10, // Để tránh overflow
    },
    item: {
        width: '48%', // 48% cho mỗi item, để hiển thị 2 item mỗi hàng
        marginBottom: 20,
    },
    img: {
        width: '100%',
        height: 180,
        borderColor: 'black',
        borderWidth: 1.5,
    },
    text1: {
        backgroundColor: 'black',
        paddingVertical: 10,
    },
    text2: {
        color: 'white',
        textAlign: 'center',
    },
    sale: {
        backgroundColor: '#ED5151',
        width: 80, // Độ rộng của sale box
        position: 'absolute',
        top: 10,
        left: 10,
        paddingHorizontal: 5, // Padding để văn bản không sát mép sale box
        zIndex: 1000,
        borderTopRightRadius: 10, // Bo góc trên bên phải
        borderBottomLeftRadius: 10, // Bo góc dưới bên trái
    },
    text3: {
        color: 'white',
        textAlign: 'center',
    },
});

export default ListProduct;
