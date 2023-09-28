import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/chinabarber.jpg')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>O app do China Barber!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>
            </Animatable.View>

            <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn') }>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        /*backgroundColor: '#FBD824'*/
        backgroundColor: '#eddf99'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#eddf99',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        fontSize: 16,
        color: 'white'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#FBD824',
        borderRadius: 50,
        paddingVertical: 8,
        marginBottom: -44,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    }
})