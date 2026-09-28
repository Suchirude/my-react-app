import {StyleSheet, Text, View} from "react-native"


export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.bigtext}>This app was developed by me, myself, and I. It was built using React
                Native</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bigtext: {
        padding: 16,
        fontSize: 32
    },
    container: {
        backgroundColor: '#e5e0e0',
        flex: 1
    }
})