import {TextInput, FlatList, StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator, Button} from "react-native"
import React, {useState, useEffect} from 'react'
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export default function ContentScreen({navigation}) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(false);
    const [input, setInput] = useState("");
    
        useEffect(() => {
            const load = async () => {
                setLoading(true);
                
                try{
                    let response = await fetch('https://dummyjson.com/posts')
                    
                    if(!response.ok){
                        setError(true)
                        throw new Error("bad response")
                    }
                    const data = await response.json()
                    setData(data)
                    setLoading(false);
                    setPost(true)
                    setError(false)
                }
                catch(error){
                    setError(true)
                    throw new error("failed to fetch")
                }
            }
            load()
        }, [])

        const filterSearch = (post) => {
            if(input.length > 2 && post.title.includes(input.toLowerCase())){
                return <Button title={post.title} onPress={() => navigation.navigate("Details", post)}/>
            }
            return <></>
        }

        return (
            <View style={styles.container}>
                {loading? (<ActivityIndicator size="small" color="#0000ff" />):<></>}
                {post? (<SafeAreaProvider>
                        <SafeAreaView>
                        <TextInput
                        onChangeText={setInput}
                        value={input}
                        placeholder="Search..."
                        keyboardType="text"
                        />
                        <FlatList
                            data={data.posts}
                            renderItem={({item}) => filterSearch(item)}
                            keyExtractor={item => item.id}
                        /> 
                    </SafeAreaView>
                    </SafeAreaProvider> ): <></>}
                    
                {error? (<View><Text style={styles.bigtext}>An error occured</Text></View>): <></>}</View>
        )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e0e0',

        justifyContent: 'center',
        paddingInline: 32,
        flex: 1
    },
    title: {
        fontSize: 64,
        fontWeight: 'bold',
        padding: 30,

    },
    column: {
        flexDirection: 'column',
        rowGap: 16,
    },
    empty: {
        padding: 0,
        margin: 0
    }
});
