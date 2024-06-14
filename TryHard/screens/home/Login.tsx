import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseApp, initializeApp } from 'firebase/app';

// Initialize Firebase with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwirHS7SLtA9blevL6K1M7YGr59Dy96Aw",
    projectId: "hmtea-82dc0",
    storageBucket: "hmtea-82dc0.appspot.com",
    messagingSenderId: "916037871147",
    appId: "1:916037871147:android:c1257f361bb5ab2a82ec6e",
};

// Check if Firebase app is already initialized
let firebaseApp: FirebaseApp | undefined;
if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword1, setShowPassword1] = useState(false);

    const handleLogin = () => {
        const auth = getAuth(firebaseApp);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                if (userCredential.user) {
                    console.log('Đăng nhập thành công:', userCredential.user.email);
                    Alert.alert('Login Successful');
                } else {
                    console.error('Đăng nhập thất bại: User không tồn tại');
                    Alert.alert('Login Failed', 'User không tồn tại');
                }
            })
            .catch((error) => {
                // Handle Errors here.
                console.error('Đăng nhập thất bại:', error.message);
                Alert.alert('Login Failed', error.message);
            });
    };
    const toggleShowPassword1 = () => {
        setShowPassword1(!showPassword1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text1}>HMTea</Text>
                <Text style={styles.text2}>Welcome Back!</Text>
            </View>
            <View style={styles.input}>
                <View style={styles.textInput}>
                    <TextInput
                        style={styles.text3}
                        placeholder='Email'
                        placeholderTextColor={'#B4BBCB'}
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                </View>
                <View style={styles.textInput2}>
                    <TextInput
                        style={styles.text3}
                        placeholder='Password'
                        placeholderTextColor={'#B4BBCB'}
                        secureTextEntry={!showPassword1} // Toggle secureTextEntry based on showPassword1 state
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                    <TouchableOpacity onPress={toggleShowPassword1}>
                        <Icon name={showPassword1 ? 'visibility-off' : 'visibility'} size={25} color="#2C683F" style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.forget}>
                <Text style={styles.text4}>Forgot your password?</Text>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.line}>
                <Text style={styles.lineText}>_________________________________________</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text5}>No account?</Text>
                <Text style={styles.text6}>Sign up</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: 15,
    },
    title: {
        marginTop: 80,
    },
    text1: {
        color: '#2C683F',
        fontSize: 80,
        fontFamily: 'Lobster-Regular',
    },
    text2: {
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Inder-Regular',
        fontSize: 30,
    },
    input: {
        marginTop: 80,
    },
    textInput: {
        borderWidth: 1.5,
        borderRadius: 4,
        width: 380,
        height: 45,
        borderColor: 'lightgray',
        marginBottom: 15,
    },
    textInput2: {
        borderWidth: 2,
        borderRadius: 4,
        width: 380,
        height: 45,
        borderColor: 'lightgray',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text3: {
        color: '#2C683F',
        paddingLeft: 15,
    },
    icon: {
        paddingRight: 10,
    },
    forget: {
        right: 0,
        width: '100%',
        alignItems: 'flex-end',
    },
    text4: {
        color: '#4D5661',
        fontSize: 17,
        fontWeight: '500',
        fontFamily: 'Inter-SemiBold',
    },
    loginButton: {
        backgroundColor: '#4AA366',
        borderRadius: 4,
        width: 380,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 130,
    },
    loginText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    line: {
        marginTop: 60,
    },
    lineText: {
        color: '#D9D9D9',
        fontSize: 20,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        width: '100%',
    },
    text5: {
        fontFamily: 'Inter-Regular',
        fontSize: 17,
        color: '#36454F',
    },
    text6: {
        fontFamily: 'Inter-Bold',
        fontSize: 17,
        color: '#4AA366',
        paddingLeft: 40,
    },
});

export default Login;