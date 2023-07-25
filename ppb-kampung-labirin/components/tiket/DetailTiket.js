import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const DetailTiket = () => {
    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1, paddingHorizontal: 20 }}>
            <View style={{ backgroundColor: '#C2C2C2', padding: 25, alignSelf: 'center', marginTop: 30, borderRadius: 20, width: 370 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ marginEnd: 10 }}>
                        <Image source={require('../../assets/img/poster.png')} />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text>LABIRIN MENCEKAM</Text>
                        <Text>22 September 2023</Text>
                        <Text>08:00</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'column', marginHorizontal: 20, marginVertical: 10 }}>
                        <Text>Jumlah Tiket</Text>
                        <Text>2 Tiket</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginHorizontal: 20, marginVertical: 10 }}>
                        <Text>Total Harga</Text>
                        <Text>Rp. 100.000</Text>
                    </View>
                    <View style={{ flexDirection: 'column', marginHorizontal: 20, marginVertical: 10 }}>
                        <Text>Kode Tiket</Text>
                        <Text>21312830912</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DetailTiket