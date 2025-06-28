import { Stack } from "expo-router";
import { Modal, View } from "react-native";
import AuthProvider from "../context/AuthProvider";
import ModalProvider from "../context/ModalProvider";
import { AppStatesProvider, useAppStates } from "../context/AppStates";

export default function RootLayout() {
  const { isAppOpenedFirstTime } = useAppStates();

  return (
    <AppStatesProvider>
      <AuthProvider>
        <ModalProvider>
          <View style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              {isAppOpenedFirstTime ? (
                <Stack.Screen name="(intro)" options={{ headerShown: false }} />
              ) : (
                <Stack.Screen name="(app)" options={{ headerShown: false }} />
              )}
            </Stack>
          </View>
        </ModalProvider>
      </AuthProvider>
    </AppStatesProvider>
  );
}
