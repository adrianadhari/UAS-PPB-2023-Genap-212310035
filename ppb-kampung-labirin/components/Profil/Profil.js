import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Profil = ({ navigation }) => {
    return (
        <View style={{ flex: 10, backgroundColor: '#FFFFFF' }}>
            <View style={{ flex: 3, backgroundColor: '#A4BE7B', alignItems: 'center', justifyContent: 'space-around' }}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18 }}>AKUN</Text>
                <Image source={require('../../assets/icons/user.png')} style={{ width: 120, height: 120, tintColor: 'white' }} />
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>ADRIAN ADHARI</Text>
            </View>
            <View style={{ flex: 8, backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'row', padding: 30 }}>
                    <View style={{ marginEnd: 20 }}>
                        <Image source={require('../../assets/icons/user2.png')} style={{ width: 35, height: 35 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 300, borderBottomWidth: 1, borderColor: '#E1E1E1', paddingBottom: 15 }}>
                        <Text>
                            Data Diri
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Edit Profil')}>
                            <Image source={require('../../assets/icons/arrow.png')} style={{ width: 35, height: 35, tintColor: '#C3C3C3' }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
                    <View style={{ marginEnd: 20 }}>
                        <Image source={require('../../assets/icons/info.png')} style={{ width: 35, height: 35 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 300, borderBottomWidth: 1, borderColor: '#E1E1E1', paddingBottom: 15 }}>
                        <Text>
                            Tentang
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Tentang Aplikasi')}>
                            <Image source={require('../../assets/icons/arrow.png')} style={{ width: 35, height: 35, tintColor: '#C3C3C3' }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <TouchableOpacity style={{ width: 350, backgroundColor: '#A4BE7B', borderRadius: 10 }} onPress={() => navigation.navigate('Masuk')}>
                        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', paddingVertical: 10 }}>KELUAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Profil