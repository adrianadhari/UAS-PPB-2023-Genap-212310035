import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splashscreen = ({ navigation }) => {
    useEffect(() => {
        // Navigasi ke halaman selanjutnya setelah 5 detik
        const timer = setTimeout(() => {
            navigation.navigate('Masuk');
        }, 5000);

        // Membersihkan timer saat komponen SplashScreen unmount
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/img/logo.png')} />
        </View>
    )
}

export default Splashscreen