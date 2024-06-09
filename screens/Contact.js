import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import CheckBox from "expo-checkbox";
import React, { useState } from 'react';

const Contact = ({ navigation }) => {
    const [agree, setAgree] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState(""); 
    console.log(userName, password);

    const submit = () => {
        if (userName === "Sudeep" && password === "sudeep@123") {
            navigation.navigate('HomeScreen');
        } else {
            Alert.alert('Incorrect Credentials');
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Form</Text>
            <Text style={styles.description}>Please fill in your details below</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter Your Name</Text>
                <TextInput 
                    style={styles.inputStyle}
                    value={userName}
                    onChangeText={(actualData) => setUserName(actualData)}
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter Your Password</Text>
                <TextInput 
                    style={styles.inputStyle} 
                    secureTextEntry={true} 
                    value={password}
                    onChangeText={(actualData) => setPassword(actualData)}
                />
            </View>
            <View style={styles.wrapper}>
                <CheckBox
                    value={agree}
                    onValueChange={() => setAgree(!agree)}
                    color={agree ? "green" : undefined}
                />
                <Text style={styles.wrapperText}>I agree with the terms and conditions</Text>
            </View>
            <TouchableOpacity
                style={[
                    styles.buttonStyle,
                    { backgroundColor: agree ? 'blue' : 'gray' },
                ]}
                disabled={!agree}
                onPress={submit}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        paddingHorizontal: 30,
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    mainHeader: {
        fontSize: 25,
        fontWeight: 'heavy',
        paddingTop: 150,
        textTransform: 'capitalize',
        fontFamily: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    description: {
        fontSize: 20,
        color: '#666',
        paddingBottom: 30,
        lineHeight: 30,
        textAlign: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
        marginTop: 20,
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
        marginTop: 10,
        lineHeight: 25,
        fontFamily: 'sans-serif',
    },
    inputStyle: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    wrapperText: {
        marginLeft: 10,
        fontSize: 14,
        color: '#333',
    },
    buttonStyle: {
        width: '100%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Contact;
