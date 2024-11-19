//Risnianti Nurkhalifah_2210010104_PraktikumAndroid5BNrBjb
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="details/[id]"
                options={{
                    headerTitle: "Detail",
                    headerTransparent: true,
                    headerTintColor: "#fff",
                }}
            />
        </Stack>
    );
}
