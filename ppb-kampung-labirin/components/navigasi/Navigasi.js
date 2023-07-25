import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Event from "../event/Event";
import Beranda from "../beranda/Beranda";
import Tiket from "../tiket/Tiket";
import BerandaIcon from "../../assets/icons/beranda.png";
import EventIcon from "../../assets/icons/event.png";
import ScanIcon from "../../assets/icons/scan.png";
import TiketIcon from "../../assets/icons/tiket.png";
import ProfilIcon from "../../assets/icons/profile.png";
import Scanner from "../Scanner/Scanner";
import Profil from "../Profil/Profil";


const Navigasi = () => {
  const Tab = createBottomTabNavigator();
  const CustomeNavBar = ({ children, onPress }) => {
    return (
      <TouchableOpacity
        style={{ top: -20, justifyContent: "center", alignItems: "center" }}
        onPress={onPress}
      >
        <View
          style={{
            width: 62,
            height: 62,
            borderRadius: 35,
            backgroundColor: "#A4BE7B",
          }}
        >
          {children}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: "white",
            height: 65,
          },
        ],
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={BerandaIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#A4BE7B" : "#C3C3C3",
                }}
              />
              <Text style={{ color: focused ? "#A4BE7B" : "#C3C3C3" }}>
                Beranda
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Event"
        component={Event}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={EventIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#A4BE7B" : "#C3C3C3",
                }}
              />
              <Text style={{ color: focused ? "#A4BE7B" : "#C3C3C3" }}>
                Event
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ScanQR"
        component={Scanner}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={ScanIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#FFFFFF" : "#FFFFFF",
                }}
              />
              <Text
                style={{ fontSize: 11, color: focused ? "#FFFFFF" : "#FFFFFF" }}
              >
                Check-in
              </Text>
            </View>
          ),
          tabBarButton: (props) => <CustomeNavBar {...props} />,
        }}
      />
      <Tab.Screen
        name="Tiket"
        component={Tiket}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={TiketIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#A4BE7B" : "#C3C3C3",
                }}
              />
              <Text style={{ color: focused ? "#A4BE7B" : "#C3C3C3" }}>
                Tiket
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={ProfilIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#A4BE7B" : "#C3C3C3",
                }}
              />
              <Text style={{ color: focused ? "#A4BE7B" : "#C3C3C3" }}>
                Profil
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Navigasi;
