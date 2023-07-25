import { View, Text, Image } from 'react-native'
import React from 'react'

const Checkin = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
            <View>
                <Text style={{ color: '#A4BE7B', fontSize: 36, textAlign: 'center', fontWeight: 'bold', marginBottom: 40 }}>Check-in Berhasil</Text>
            </View>
            <View style={{ width: 350, borderRadius: 15, backgroundColor: '#EAEAEA', paddingVertical: 50, alignItems: 'center' }}>
                <View style={{ backgroundColor: '#FFFFFF', width: 200, borderRadius: 15, marginBottom: 10 }}>
                    <Text style={{ paddingVertical: 10, textAlign: 'center', fontWeight: 'bold' }}>Labirin Mencekam</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/icons/calendar.png')} style={{ width: 20, height: 20, margin: 5 }} />
                    <Text>20 September 2023</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/icons/watch.png')} style={{ width: 20, height: 20, margin: 5 }} />
                    <Text>08.00 - 15.00 WIB</Text>
                </View>
                <View style={{ backgroundColor: '#A4BE7B', width: 270, borderRadius: 15, marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', paddingVertical: 10, color: 'white' }}>Adrian Adhari</Text>
                </View>
            </View>
        </View>
    )
}

export default Checkin