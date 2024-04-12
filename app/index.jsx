import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from "./Screen/HomeScreen/HomeScreen"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('../assets/fonts/outfit/Outfit-Regular.ttf'),
    'outfit-medium': require('../assets/fonts/outfit/Outfit-Medium.ttf'),
    'outfit-semi-bold': require('../assets/fonts/outfit/Outfit-SemiBold.ttf'),
    'outfit-bold': require('../assets/fonts/outfit/Outfit-Bold.ttf'),
    'poppins': require('../assets/fonts/poppins/Poppins-Regular.ttf'),
    'poppins-medium': require('../assets/fonts/poppins/Poppins-Medium.ttf'),
    'poppins-semi-bold': require('../assets/fonts/poppins/Poppins-SemiBold.ttf'),
    'poppins-thin': require('../assets/fonts/poppins/Poppins-Thin.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {/* <SafeAreaView> */}
      <HomeScreen />
      {/* </SafeAreaView> */}
    </View>
  );
}
