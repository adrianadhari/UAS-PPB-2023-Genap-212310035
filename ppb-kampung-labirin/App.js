import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Masuk from './components/autentikasi/Masuk';
import Daftar from './components/autentikasi/Daftar';
import Beranda from './components/beranda/Beranda';
import { View } from 'react-native';
import Navigasi from './components/navigasi/Navigasi';
import DetailTiket from './components/tiket/DetailTiket';
import EditProfil from './components/Profil/EditProfil';
import TentangAplikasi from './components/tentang/TentangAplikasi';
import DetailEvent from './components/event/DetailEvent';
import Splashscreen from './components/splashscreen/Splashscreen';
import Checkin from './components/Scanner/Checkin';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <NavigationContainer>
        <StatusBar style="dark" hidden={false} />
        <Stack.Navigator>
          <Stack.Screen name="Splashscreen" component={Splashscreen} options={{ headerShown: false }} />
          <Stack.Screen name="Masuk" component={Masuk} options={{ headerShown: false }} />
          <Stack.Screen name="Navigasi" component={Navigasi} options={{ headerShown: false }} />
          <Stack.Screen name="Daftar" component={Daftar} options={{ headerShown: true }} />
          <Stack.Screen name="Beranda" component={Beranda} options={{ headerShown: false }} />
          <Stack.Screen name="Detail Event" component={DetailEvent} options={{ headerShown: true }} />
          <Stack.Screen name="Detail Tiket" component={DetailTiket} options={{ headerShown: true }} />
          <Stack.Screen name="Checkin" component={Checkin} options={{ headerShown: true }} />
          <Stack.Screen name="Edit Profil" component={EditProfil} options={{ headerShown: true }} />
          <Stack.Screen name="Tentang Aplikasi" component={TentangAplikasi} options={{ headerShown: true }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}