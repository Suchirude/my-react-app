import {Platform, StyleSheet, Text, View} from "react-native"
import PostText from './components/text'

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <PostText content="WELCOME to my fun trivia app"/>
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