import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const EditProfil = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{alignItems: 'center', marginVertical: 20}}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>Informasi Data Diri</Text>
            </View>
            <View style={{paddingHorizontal: 20, marginVertical: 5}}>
                <Text style={{marginBottom: 10}}>Nama Lengkap</Text>
                <TextInput value='Adrian Adhari' style={{paddingVertical: 10, paddingStart: 20, borderWidth: 1, borderColor: 'green', borderRadius: 10}}/>
            </View>
            <View style={{paddingHorizontal: 20, marginVertical: 5}}>
                <Text style={{marginBottom: 10}}>Username</Text>
                <TextInput value='adrianadhari' style={{paddingVertical: 10, paddingStart: 20, borderWidth: 1, borderColor: 'green', borderRadius: 10}}/>
            </View>
            <View style={{paddingHorizontal: 20, marginVertical: 5}}>
                <Text style={{marginBottom: 10}}>Email</Text>
                <TextInput value='adrianadhari@protonmail.com' style={{paddingVertical: 10, paddingStart: 20, borderWidth: 1, borderColor: 'green', borderRadius: 10}}/>
            </View>
            <View style={{paddingHorizontal: 20, marginVertical: 5}}>
                <Text style={{marginBottom: 10}}>No HP</Text>
                <TextInput value='' style={{paddingVertical: 10, paddingStart: 20, borderWidth: 1, borderColor: 'green', borderRadius: 10}}/>
            </View>
            <View style={{paddingHorizontal: 20, marginVertical: 5}}>
                <Text style={{marginBottom: 10}}>Domisili</Text>
                <TextInput value='' style={{paddingVertical: 10, paddingStart: 20, borderWidth: 1, borderColor: 'green', borderRadius: 10}}/>
            </View>
            <View style={{paddingHorizontal: 20, marginVertical: 15}}>
                <TouchableOpacity style={{paddingVertical: 18, borderWidth: 1, borderColor: 'green', borderRadius: 10, backgroundColor: 'green'}}>
                    <Text style={{textAlign: 'center', color: 'white'}}>SIMPAN PERUBAHAN</Text>
                </TouchableOpacity>
            </View>   
        </View>
    )
}

export default EditProfil