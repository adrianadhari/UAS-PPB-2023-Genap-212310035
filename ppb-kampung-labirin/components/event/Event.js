import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Event = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <View style={{ flexDirection: 'row', marginTop: 40, width: 350, height: 35, borderRadius: 10, alignSelf: 'center', paddingStart: 10, backgroundColor: '#D9D9D9' }}>
                <Image source={require('../../assets/icons/search.png')} style={{ width: 22, height: 22, marginTop: 7, tintColor: '#616161' }} />
                <TextInput placeholder="Cari Event" style={{ marginStart: 5 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 35, marginTop: 35 }}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Akan Datang</Text>
                <Text style={{ fontSize: 12, fontWeight: 500, marginTop: 2 }}>Semua</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail Event')}>
                    <View>
                        <Image source={require('../../assets/img/poster.png')} />
                        <Text style={{ marginTop: 5, textAlign: 'center' }}>Labirin Mencekam</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Detail Event')}>
                    <View>
                        <Image source={require('../../assets/img/poster.png')} />
                        <Text style={{ marginTop: 5, textAlign: 'center' }}>Festival Labirin</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail Event')}>
                    <View>
                        <Image source={require('../../assets/img/poster.png')} />
                        <Text style={{ marginTop: 5, textAlign: 'center' }}>Labirin Mencekam</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Detail Event')}>
                    <View>
                        <Image source={require('../../assets/img/poster.png')} />
                        <Text style={{ marginTop: 5, textAlign: 'center' }}>Festival Labirin</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ borderBottomWidth: 1, borderColor: '#E1E1E1', marginVertical: 20 }}>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 35 }}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Telah Selesai</Text>
                <Text style={{ fontSize: 12, fontWeight: 500, marginTop: 2 }}>Semua</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail Event')}>
                    <View>
                        <Image source={require('../../assets/img/poster.png')} />
                        <Text style={{ marginTop: 5, textAlign: 'center' }}>Labirin Mencekam</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Detail Event')}>
                    <View>
                        <Image source={require('../../assets/img/poster.png')} />
                        <Text style={{ marginTop: 5, textAlign: 'center' }}>Festival Labirin</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, marginBottom: 120 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail Event')}>
                    <View>
                        <Image source={require('../../assets/img/poster.png')} />
                        <Text style={{ marginTop: 5, textAlign: 'center' }}>Labirin Mencekam</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Detail Event')}>
                    <View>
                        <Image source={require('../../assets/img/poster.png')} />
                        <Text style={{ marginTop: 5, textAlign: 'center' }}>Festival Labirin</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Event