import React from 'react';
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {

const navigation = useNavigation();
const handleGoBack = () => {
    navigation.goBack();
}

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={handleGoBack}>
            <Image
                  source={require('../../icons/arrow-back1.png')}
                  style={{ width: 30, height: 30}}
                />
            </TouchableOpacity>

            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vinda(o)</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder="Digite um email..."
                    placeholderTextColor= "white"
                    style={styles.input}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Sua senha..."
                    placeholderTextColor= "white"
                    style={styles.input}
                />

                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Main')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={ () => navigation.navigate('SignUp')}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se!</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FBD824'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        alignSelf: 'center'
    },
    containerForm:{
        backgroundColor: '#000',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
        color: 'white'
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        borderColor: 'white'
    },
    button:{
        backgroundColor: '#FBD824',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText:{
        color: 'white'
    }
})