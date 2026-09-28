import {StyleSheet, Text, View} from "react-native"

export default function AnswerScreen({route}) {
    const {r} = route;
    let answer = ""
    if (route.params != null)
        answer = route.params.answer ? route.params.answer : "";
    return (
        <View style={styles.container}>
            <Text style={styles.bigtext}>{answer ? answer : "nope"}</Text>
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