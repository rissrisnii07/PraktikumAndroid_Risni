//Risnianti Nurkhalifah_2210010104_PraktikumAndroid5BNrBjb
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const dataCard = require('@/assets/dataCard.json');

type Post = {
    id: number;
    sumberGambar: string;
    judul: string;
    keterangan: string;
};

export default function Detail() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const filteredData = dataCard.posts.filter((item: Post) => {
        return item.id === Number(id); // Gunakan casting yang lebih jelas
    });

    if (filteredData.length === 0) {
        return (
            <View style={styles.container}>
                <Text>Data not found</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: filteredData[0].sumberGambar }} // Gunakan format `{ uri: string }`
            />
            <View style={styles.bottom}>
                <Text style={styles.judul}>{filteredData[0].judul}</Text>
                <Text style={styles.keterangan}>{filteredData[0].keterangan}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bottom: {
        padding: 24,
        backgroundColor: "#fff",
        borderRadius: 24,
        position: "absolute",
        marginTop: 330,
        width: "100%",
        height: "100%",
    },
    image: {
        width: '100%',
        height: "60%",
    },
    judul: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
    },
    keterangan: {
        fontSize: 16,
        marginBottom: 24,
    },
});
