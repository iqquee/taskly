import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from "./App/Screen/HomeScreen/HomeScreen"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/outfit/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/outfit/Outfit-Medium.ttf'),
    'outfit-semi-bold': require('./assets/fonts/outfit/Outfit-SemiBold.ttf'),
    'outfit-bold': require('./assets/fonts/outfit/Outfit-Bold.ttf'),
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
    <View onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ padding: 10, }}>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
}
