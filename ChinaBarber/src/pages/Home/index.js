import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Home() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const photos = [
        require('../../images/china-photo00.jpeg'), // Substitua pelos caminhos reais das suas imagens
        require('../../images/china-photo0.jpeg'),
        require('../../images/china-photo1.jpeg'),
        require('../../images/china-photo2.jpeg'),
    ];

    const handleNext = () => {
        if (currentIndex < photos.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
    };
    
    const handlePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <View style={styles.container}>
            <Animatable.Image
                animation="flipInY"
                source={require('../../assets/chinabarber.jpg')}
                style={styles.containerLogo}
                resizeMode='contain'
            />
      <TouchableOpacity onPress={handlePrev} style={styles.navButtonLeft}>
        <Image source={require('../../icons/arrow-back.png')} style={styles.navIcon} />
      </TouchableOpacity>
      <Image source={photos[currentIndex]} style={styles.photo} />
      <TouchableOpacity onPress={handleNext} style={styles.navButtonRight}>
        <Image source={require('../../icons/arrow-front.png')} style={styles.navIcon} />
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eddf99'
    },
    containerLogo:{
        flex:1,
        backgroundColor: '#eddf99',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        top: '-20%'
    },
    navButtonLeft: {
      position: 'absolute',
      top: '35%',
      left: 0,
    },
    navButtonRight: {
      position: 'absolute',
      top: '35%',
      right: 0,
    },
    navIcon: {
      width: 40,
      height: 40,
    },
    photo: {
      width: Dimensions.get('window').width * 0.8, // Defina o tamanho desejado para as fotos
      height: Dimensions.get('window').height * 0.4,
      resizeMode: 'contain',
      top: '-40%'
    },
  });