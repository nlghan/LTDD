import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
const Header = () => {
    return (
           <View style={styles.container}>
            <View>
                <Text style={styles.text}>MOSOFTVN</Text>
            </View>
            <View>
                <Image  source={require('../../assets/image/logo.png')}/>
            </View>
                
           </View>
    )
          
}

const styles= StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:15,
        alignItems: 'center'
        // backgroundColor:'lightgray'
    },
    text:{
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',        
    },
    img:{
        top:8,
        right: 10
    }
})
export default Header;