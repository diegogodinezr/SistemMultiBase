import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Alert } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
    screen: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323844'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        backgroundColor: '#c0c0c04B',
        padding: 16,
        borderBottomStartRadius: 16,
        borderBottomEndRadius: 16,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
    },

    text: {
        fontSize: 24,
        margin: 20,
        textAlign: 'center',
        textDecorationStyle: 'solid',
        color: 'black',
    },

    textinput: {
        borderBottomWidth: 1,
        borderRadius: 8,
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: '80%',
        margin: 8,
    },
});

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
};

type LoginProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

function Login({navigation}: LoginProps ): React.JSX.Element {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const btnIngresarOnPress = function() {
        if (user === 'admin' && password === 'admin') {
            navigation.navigate('Home');
        } else {
            Alert.alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.container} >
                <Text style={styles.text}>Iniciar Sesión</Text>
                <TextInput 
                style={styles.textinput} 
                placeholder='Usuario'
                placeholderTextColor="#828894"
                onChangeText={u => setUser(u)} 
                />
                <TextInput 
                style={styles.textinput} 
                placeholder='Contraseña' 
                placeholderTextColor="#828894" 
                secureTextEntry={true} 
                onChangeText={p => setPassword(p)}
                />
                <Button title='Iniciar Sesión' onPress={btnIngresarOnPress} />
            </View>
        </SafeAreaView>
    );
}

export default Login;