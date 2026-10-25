import { Link } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import * as paper from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export default function LinkingScreen(){
    return(
        <SafeAreaView>
            <paper.Text style={styles.text}>Contact me!</paper.Text>
            <paper.Button mode='text' onPress={() => Linking.openURL('tel:+358401234567')}>Call number</paper.Button>
            <paper.Button mode='text' onPress={() => Linking.openURL('sms:+358401234567')}>SMS number</paper.Button>
            <paper.Button mode='text' onPress={() => Linking.openURL('https:google.com')}>Open Google</paper.Button>
            <paper.Button mode='text' onPress={() => Linking.openURL('mailto:ole.schilde@gmail.com')}>Send Email</paper.Button>

        </SafeAreaView>
    )
}

const styles =  StyleSheet.create({
    text:{
        fontSize: 32
    }
})