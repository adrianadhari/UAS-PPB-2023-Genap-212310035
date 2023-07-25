import { View, Text, TouchableOpacity, TextInput, Pressable, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Masuk = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isOpenPass, setOpenPass] = useState(true);

    const handlerOpenPassword = () => {
        switch (!isOpenPass) {
            case true:
                setOpenPass(true);
                break;
            default:
                setOpenPass(false);
                break;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../assets/img/logo.png")} style={{ width: 207, height: 144 }} />
            </View>
            <View style={{ alignItems: "center" }}>
                {/* Username */}
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ marginBottom: 10, fontSize: 16 }}>Username</Text>
                    <View style={styles.BoxInput}>
                        <View style={styles.icon}>
                            <FontAwesome5 name="user" size={20} color="#98BF7A" />
                        </View>
                        <TextInput style={{ ...styles.input, borderTopRightRadius: 10, borderBottomRightRadius: 10 }} placeholder="Masukkan Username" onChangeText={(text) => setUsername(text)} value={username} />
                    </View>
                </View>
                {/* Password */}
                <View>
                    <Text style={{ marginBottom: 10, fontSize: 16 }}>Password</Text>
                    <View style={styles.BoxInput}>
                        <View style={styles.icon}>
                            <FontAwesome5 name="key" size={20} color="#98BF7A" />
                        </View>
                        <TextInput style={{ ...styles.input, borderRadius: 0, borderRightWidth: 0, width: 250 }} placeholder="Password" onChangeText={(text) => setPassword(text)} value={password} secureTextEntry />
                        <Pressable
                            onPress={() => handlerOpenPassword()}
                            style={{ alignItems: "center", justifyContent: "center", padding: 10, borderWidth: 1, borderBottomRightRadius: 10, borderTopRightRadius: 10, borderColor: "#98BF7A", borderLeftWidth: 0, width: 50, height: 50 }}
                        >
                            <FontAwesome5 name={isOpenPass ? "eye" : "eye-slash"} size={20} color="#98BF7A" />
                        </Pressable>
                    </View>
                </View>
                {/* LupaPW */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Navigasi')}>
                    <Text style={styles.buttonText}>MASUK</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ fontSize: 16 }}>Belum memiliki akun?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Daftar')}>
                        <Text style={{ color: "#98BF7A", fontWeight: "bold", fontSize: 16 }}> Daftar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    logo: {
        alignItems: "center",
        paddingTop: 110,
        paddingBottom: 40
    },
    BoxInput: {
        flexDirection: "row",
    },
    icon: {
        borderWidth: 2,
        borderRightWidth: 0,
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: "#98BF7A",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
    },
    input: {
        marginBottom: 16,
        padding: 10,
        borderWidth: 2,
        borderLeftWidth: 0,
        borderColor: "#98BF7A",
        width: 300,
        height: 50,
    },
    button: {
        backgroundColor: "#98BF7A",
        paddingVertical: 10,
        paddingHorizontal: 90,
        borderRadius: 10,
        marginTop: 20,
        width: 350,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        color: "white",
    },
});

export default Masuk