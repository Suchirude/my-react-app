import {StyleSheet, Text, View} from "react-native"

export default function DetailsScreen({route}) {

    let hasData = route.params != null;
    let post = {}
    if(hasData)
        post = route.params;
    
    return (
        <View style={styles.container}>
            
            <Text style={styles.text}>Title: {post.title}</Text>
            <Text style={styles.text}>Body: {post.body}</Text>
            <Text style={styles.text}>Likes: {post.reactions.likes} Dislikes: {post.reactions.dislikes}</Text>
            
           
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 16,
        fontSize: 16
    },
    container: {
        backgroundColor: '#e5e0e0',
        flex: 1
    }
})