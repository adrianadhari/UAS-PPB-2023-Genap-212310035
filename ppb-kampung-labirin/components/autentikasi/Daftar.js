import { View, Text, TouchableOpacity, TextInput, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Daftar = ({ navigation }) => {
    const [namaLengkap, setNamaLengkap] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30 }}>
                <View style={styles.boxInput}>
                    <Text style={{ fontSize: 16, color: '#44494C', marginBottom: 10 }}>Nama Lengkap</Text>
                    <TextInput style={styles.input} placeholder="Masukkan Nama Lengkap" onChangeText={(text) => setNamaLengkap(text)} value={namaLengkap} />
                </View>
                <View style={styles.boxInput}>
                    <Text style={{ fontSize: 16, color: '#44494C', marginBottom: 10 }}>Username</Text>
                    <TextInput style={styles.input} placeholder="Masukkan Username" onChangeText={(text) => setUsername(text)} value={username} />
                </View>
                <View style={styles.boxInput}>
                    <Text style={{ fontSize: 16, color: '#44494C', marginBottom: 10 }}>Email</Text>
                    <TextInput style={styles.input} placeholder="Masukkan Email" onChangeText={(text) => setEmail(text)} value={email} />
                </View>
                <View style={styles.boxInput}>
                    <Text style={{ fontSize: 16, color: '#44494C', marginBottom: 10 }}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Masukkan Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        secureTextEntry
                    />
                </View>
                <View style={styles.boxInput}>
                    <Text style={{ fontSize: 16, color: '#44494C', marginBottom: 10 }}>Konfirmasi Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Konfirmasi Password"
                        onChangeText={(text) => setKonfirmasiPassword(text)}
                        value={konfirmasiPassword}
                        secureTextEntry
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Masuk')}>
                <Text style={styles.buttonText}>DAFTAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20
    },
    boxInput: {
        flexDirection: "column",
        marginBottom: 8
    },
    input: {
        marginBottom: 16,
        borderWidth: 2,
        borderRadius: 10,
        height: 50,
        borderColor: "#98BF7A",
        paddingStart: 24
    },
    button: {
        backgroundColor: "#98BF7A",
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 15,
        color: "white",
    },
});

export default Daftar