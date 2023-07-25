import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const DetailEvent = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View>
                <Image source={require('../../assets/img/detail-poster.png')} style={{ width: '100%' }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Labirin Mencekam</Text>
                <Text style={{ backgroundColor: '#A4BE7B', borderRadius: 15, width: 90, paddingHorizontal: 10, paddingVertical: 5, color: 'white' }}>Rp 50.000</Text>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 30 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Deskripsi</Text>
                <Text>Kampung Labirin mempersembahkan event eksklusif yang akan mengguncang naluri petualanganmu- "Labirin Mencekam” bersiaplah untuk merasakan sensasi ketegangan dan kesunyianya</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10, paddingHorizontal: 30, alignItems: 'center', marginTop: 20 }}>
                <Image source={require('../../assets/icons/calendar.png')} style={{ width: 25, height: 25, marginEnd: 20 }} />
                <Text>20 September 2023</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10, paddingHorizontal: 30, alignItems: 'center' }}>
                <Image source={require('../../assets/icons/watch.png')} style={{ width: 25, height: 25, marginEnd: 20 }} />
                <Text>10.00 - 15.00 WIB</Text>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10, paddingHorizontal: 30, alignItems: 'center' }}>
                <Image source={require('../../assets/icons/gift.png')} style={{ width: 25, height: 25, marginEnd: 20 }} />
                <View>
                    <Text>- Air Mineral 220Ml</Text>
                    <Text>- 2 Lembar Acis Khas Kampung</Text>
                    <Text>- 2 Lembar Acis Khas Kampung Labirin</Text>
                </View>
            </View>
            <View style={{ marginTop: 20, paddingHorizontal: 30, marginBottom: 30 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Penyelenggara</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/icons/people.png')} style={{ width: 35, height: 35, marginEnd: 20 }} />
                    <Text style={{ fontWeight: 'bold' }}>PT. Astra Honda Motor</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailEvent