import { View, Text } from 'react-native'
import React from 'react'

const TentangAplikasi = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{alignItems: 'center', marginVertical: 20}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Tentang Aplikasi</Text>
            </View>
            <View style={{paddingHorizontal: 20, marginVertical: 5}}>
                <Text style={{fontSize: 20}}>INKARIN adalah project aplikasi yang dibuat untuk memenuhi tugas akhir mata
                    kuliah Pemrograman Perangkat Bergerak Program Studi S1 Teknologi Informasi Institut Bisnis & Informatika Kesatuan.
                    Kami dari TI-21-PA kelompok 6 mempersembahkan aplikasi ini sebagai hasil karya orisinal.</Text>
            </View>
        </View>
    )
}

export default TentangAplikasi