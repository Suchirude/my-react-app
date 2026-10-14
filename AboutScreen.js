import {ActivityIndicator, StyleSheet, Text, View, Button, Platform} from "react-native"
import React, {useState, useEffect} from 'react'
import { FlatList } from "react-native";

export default function AboutScreen() {
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [retry, setRetry] = useState(0);
    const [error, setError] = useState(false);
    const [post, setPost] = useState(false);

    useEffect(() => {
        const loadPokemon = async () => {
            setLoading(true);
            let randomNumber = Math.floor(Math.random()*1026)
            try{
                let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomNumber.toString())
                
                if(!response.ok){
                    setError(true)
                    throw new Error("bad response")
                }
                const data = await response.json()
                setPokemonData(data)
                setLoading(false);
                setPost(true)
                setError(false)
            }
            catch(error){
                setError(true)
                throw new error("failed to fetch")
            }
        }
        loadPokemon()
    }, [retry])
    return (
        <View style={styles.container}>
            <Text style={styles.bigtext}>Pokemon</Text>
            {loading? (<ActivityIndicator size="small" color="#0000ff" />):<></>}
            {post? (<FlatList
                    data={[pokemonData]}
                    renderItem={({item}) => <Pokemon pokemonName={item.name} pokemonHeight={item.height} pokemonWeight={item.weight} pokemonType={item.types[0].type.name}/>}
                    keyExtractor={item => item.id}
                />  ): <></>}
            {error? (
                <View>
                    <Text style={styles.bigtext}>An error occured</Text>
                    <Button style={{flex: 1}} title="Retry" onPress={() => setRetry(retry+1)}/> 
                </View>): <></>}
        </View>
    )
}



const Pokemon = ({pokemonName, pokemonHeight, pokemonWeight, pokemonType}) => {
    return(<View>                    
        <Text style={styles.bigtext}>Name: {pokemonName}</Text>
        <Text style={styles.bigtext}>Height: {pokemonHeight}</Text>
        <Text style={styles.bigtext}>Weight: {pokemonWeight}</Text>
        <Text style={styles.bigtext}>Type: {pokemonType}</Text>
    </View>)
}

const styles = StyleSheet.create({
    bigtext: {
        padding: 16,
        fontSize: 32,
            ...Platform.select({
            android: {
                color: 'green',
            },
            ios: {
                color: 'red',
            },
            default: {
                color: 'blue',
            },
        }),
    },
    container: {
        backgroundColor: '#e5e0e0',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})