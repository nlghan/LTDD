import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


type ExpandProps = {
    title1: string,

}
const Expand = ({title1}:ExpandProps) => {
    return (

        <View style={styles.container} >
            <View>
                <Text style={styles.text1}>{title1}</Text>
            </View>
            <View>
                <Text style={styles.text2}>Xem thêm</Text>
            </View>

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',       
        // backgroundColor:'lightgray'
    },
    text1: {
       color: 'red',
       fontSize:16,
       fontWeight: 'bold'

    },
    text2:{
        color: 'black',
        fontSize:16,
    }

})

export default Expand;