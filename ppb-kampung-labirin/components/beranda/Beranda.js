import { View, Text, StyleSheet, ScrollView, Image, useWindowDimensions, SafeAreaView } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
const Beranda = ({ navigation }) => {
    const windowDimensions = useWindowDimensions();
    return (
        <ScrollView style={{ backgroundColor: '#ffffff' }}>
            <View>
                <ImageBackground source={require('../../assets/img/background.png')} style={{ alignItems: 'center', justifyContent: 'flex-end', height: windowDimensions.height, marginBottom: 50 }}>
                    <View style={styles.box}>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Kampung Labirin</Text>
                        <Text style={{ marginBottom: 10, fontWeight: '600' }}>          Kawasan wisata tematik ini diresmikan oleh pemerintah
                            setempat atas dasar usulan warga pada Desember 2018.
                            Seiring berjalannya waktu, banyak pengunjung yang
                            tertarik untuk datang ke tempat wisata ini.
                        </Text>
                        <Text style={{ fontWeight: '600' }}>           Cikal bakal wisata tersebut mulai ada karena warga
                            sekitar melihat struktur unik di kampung tersebut.
                            Kondisi jalannya cukup banyak gang dan berliku.
                            Akhirnya para pengurus RT dan RW mendiskusikan mengenai
                            kampung tersebut untuk dijadikan sebagai kawasan tematik.
                        </Text>
                    </View>
                </ImageBackground>
            </View>


            <View style={{ alignItems: 'center', marginBottom: 50 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 30 }}>Kuliner</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginEnd: 10 }}>
                        <Image source={require('../../assets/img/kuliner/empingjengkol.png')} style={{ marginBottom: 15 }} />
                        <Text style={{ paddingStart: 10, textAlign: 'center' }}>Emping Jengkol</Text>
                    </View>
                    <View style={{ marginStart: 10 }} w>
                        <Image source={require('../../assets/img/kuliner/keripikjengkol.png')} style={{ marginBottom: 15 }} />
                        <Text style={{ paddingStart: 10, textAlign: 'center' }}>Keripik Jengkol</Text>
                    </View>
                </View>
            </View>


            <View style={{ alignItems: 'center', marginBottom: 50 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 30 }}>Atraksi</Text>
                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <View style={{ marginEnd: 10 }}>
                        <Image source={require('../../assets/img/atraksi/1.png')} style={{ marginBottom: 15 }} />
                        <Text style={{ paddingStart: 10, textAlign: 'center' }}>Musik Stomp</Text>
                    </View>
                    <View style={{ marginStart: 10 }} w>
                        <Image source={require('../../assets/img/atraksi/2.png')} style={{ marginBottom: 15 }} />
                        <Text style={{ paddingStart: 10, textAlign: 'center' }}>Tarian Mojang Priangan</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginEnd: 10 }}>
                        <Image source={require('../../assets/img/atraksi/3.png')} style={{ marginBottom: 15 }} />
                        <Text style={{ paddingStart: 10, textAlign: 'center' }}>Marawis</Text>
                    </View>
                    <View style={{ marginStart: 10 }} w>
                        <Image source={require('../../assets/img/atraksi/4.png')} style={{ marginBottom: 15 }} />
                        <Text style={{ paddingStart: 10, textAlign: 'center' }}>Emping Jengkol</Text>
                    </View>
                </View>
            </View>


            <View style={{ alignItems: 'center', marginBottom: 100 }}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 30 }}>Galeri</Text>
                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <View style={{ marginEnd: 10 }}>
                        <Image source={require('../../assets/img/galeri/1.png')} style={{ marginBottom: 15 }} />
                    </View>
                    <View style={{ marginStart: 10 }} w>
                        <Image source={require('../../assets/img/galeri/2.png')} style={{ marginBottom: 15 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <View style={{ marginEnd: 10 }}>
                        <Image source={require('../../assets/img/galeri/3.png')} style={{ marginBottom: 15 }} />
                    </View>
                    <View style={{ marginStart: 10 }} w>
                        <Image source={require('../../assets/img/galeri/5.png')} style={{ marginBottom: 15 }} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <View style={{ marginEnd: 10 }}>
                        <Image source={require('../../assets/img/galeri/4.png')} style={{ marginBottom: 15 }} />
                    </View>
                    <View style={{ marginStart: 10 }} w>
                        <Image source={require('../../assets/img/galeri/6.png')} style={{ marginBottom: 15 }} />
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}
const styles = StyleSheet.create({
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 35,
        width: 350,
        height: 300,
        marginHorizontal: 40,
        marginBottom: 140,
        padding: 30
    }
})
export default Beranda