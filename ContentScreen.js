import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import AnswerButton from "./components/button";
import AnswerText from "./components/text";
import * as data from "./data/data.json"


export default function ContentScreen({navigation}) {

    const [stateName, setStateName] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TrIvIa</Text>
            <Text>Answer:</Text>
            <Text>{stateName}</Text>
            <View style={styles.column}>
                <FlatList
                    data={data.questions}
                    renderItem={({item}) => {
                        return (
                            <View style={styles.empty}>
                                <AnswerText content={item.question}/>
                                <AnswerButton function={() => {
                                    navigation.navigate("Answer", {answer: item.answer})
                                }} answer={item.answer}/>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
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
