import { View, Text, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const Tiket = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          width: 350,
          height: 35,
          borderRadius: 10,
          alignSelf: "center",
          paddingStart: 10,
          backgroundColor: "#D9D9D9",
        }}
      >
        <Image
          source={require("../../assets/icons/search.png")}
          style={{ width: 22, height: 22, marginTop: 7, tintColor: "#616161" }}
        />
        <TextInput placeholder="Cari Tiket" style={{ marginStart: 5 }} />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#A4BE7B', paddingHorizontal: 35, paddingVertical: 25, width: '50%' }}>
          <TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>TIKET AKTIF</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 35, paddingVertical: 25, width: '50%' }}>
          <TouchableOpacity>
            <Text style={{ textAlign: 'center', color: '#C3C3C3', fontWeight: 500 }}>DAFTAR TRANSAKSI</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30, width: 288 }}>
        <Image source={require('../../assets/img/poster.png')} style={{ marginHorizontal: 10 }} />
        <View style={{ flexDirection: "column", marginHorizontal: 10, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail Tiket')}>
            <Text style={{ fontWeight: 'bold' }}>LABIRIN MENCEKAM</Text>
            <Text style={{ fontSize: 10 }}>Minggu, 22 September 2023</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ borderBottomWidth: 1, borderColor: '#E1E1E1', marginVertical: 30 }}>
      </View>

      <View style={{ flexDirection: 'row', alignSelf: 'center', width: 288 }}>
        <Image source={require('../../assets/img/poster.png')} style={{ marginHorizontal: 10 }} />
        <View style={{ flexDirection: "column", marginHorizontal: 10, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail Tiket')}>
            <Text style={{ fontWeight: 'bold' }}>FESTIVAL LABIRIN</Text>
            <Text style={{ fontSize: 10 }}>Minggu, 28 September 2023</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Tiket;
