import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

const profilImage = require('@/assets/images/risni.jpg');

export default function Profil() {
    return (
        <View style={styles.profil}>
            <Image source={profilImage} style={styles.gambarProfil} />
            <View style={styles.teksContainer}>
                <Text style={styles.teksTebal}>RISNIANTI NURKHALIFAH</Text>
                <Text>risnia.nkhff07@gmail.com</Text>
                <Text>087827705152</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gambarProfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginEnd: 12,
    },
    profil: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6,
        height: 72,
    },
    teksTebal: {
        fontWeight: "bold",
        fontSize: 18,
    },
    teksContainer: {
        justifyContent: "space-around",
        flex: 1,
        height: "100%",
    }
})
