import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const BMI_V2 = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(0);
    const [weightError, setWeightError ] = useState(false);
    const [heightError, setHeightError ] = useState(false);
    
    const checkBMI = (bmi: number) => {
        let status = '';
        if (bmi < 18.5) {
          status = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
          status = 'Normal weight';
        } else if (bmi >= 25 && bmi < 32) {
          status = 'Overweight';
        } else {
          status = 'Obesity';
        }
        Alert.alert('BMI Result', `Your BMI: ${bmi.toFixed(2)}\nStatus: ${status}`);
    }


    const compute = () =>{
        const weightVal = parseFloat(weight);
        const heightVal = parseFloat(height);

        const bmi = weightVal / Math.pow(heightVal / 100, 2);

        if(isNaN(weightVal) || weightVal <=0 ){
            setWeightError(true);
            return;
        }else{
            setWeightError(false);
        }

        if(isNaN(heightVal) || heightVal <=0 ){
            setHeightError(true);
            return;
        }else{
            setHeightError(false);
        }

        setBmi(parseFloat(bmi.toFixed(2)));

        checkBMI(bmi);
    }

    const ResetBMI= () => {
        setBmi(0);
    }

  return (
    <View style={styles.container}>
        <View>
            <View>
            <Text style={styles.text1}>WEIGHT (KG) </Text>
            <TextInput style={styles.textInput} placeholder='0' keyboardType='decimal-pad' 
                value={weight}
                onChangeText={newW =>
                    {
                        setWeight(newW),
                        ResetBMI(),
                        setHeightError(false)
                    }                  
                }
            >

            </TextInput>
            {weightError && <Text style={styles.errorText}>Please enter a valid weight.</Text>}
            </View>
            <View>
            <Text style={styles.text1}>HEIGHT (CM) </Text>
            <TextInput style={styles.textInput} placeholder='0' keyboardType='decimal-pad'
            value={height}
            onChangeText={newH =>
                {
                    setHeight(newH),
                    ResetBMI(),
                    setHeightError(false)
                }
                
            }
            >
            </TextInput>
            {heightError && <Text style={styles.errorText}>Please enter a valid height.</Text>}
            </View>
    
        </View>
        <View style={styles.rs}>
            <Text style={styles.sub}>BMI: {bmi}</Text>
            <TouchableOpacity style={styles.btn} onPress={compute}>
                <Text style={styles.btnText}>Compute</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        // alignItems:'center',
        paddingHorizontal: 15
    },
    textInput:{
        borderWidth: 1,
        marginTop: 15,
        marginBottom:15
    },
    text1:{
        fontSize:22,
        fontWeight:'500'
    },
    sub:{
        fontSize: 30,
        marginTop: 10,
        color:'black',
        fontWeight:'500',
    },
    btn:{
        borderWidth: 1,
        borderRadius: 2,
        backgroundColor:'lightblue',
        marginTop: 20,
        width: 120,
        height:60,
        justifyContent:'center'
    },
    btnText:{
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        fontWeight:'500'
    },
    rs:{
        alignItems:'center'
    },
    errorText: {
        color: 'red', // Màu chữ đỏ khi có lỗi
        fontSize: 12,
        marginTop: 5,
      },

})


export default BMI_V2;