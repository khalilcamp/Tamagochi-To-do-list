import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }}/>
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="taskpage" options={{ headerShown: false }} />
    </Stack>
  );
}
