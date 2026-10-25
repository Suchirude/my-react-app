import { useState } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import * as paper from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking';

export default function LocationScreen() {
    const [location, setLocation] = useState(null);
    const [found, setFound] = useState(false);
    const [error, setError] = useState(false);


    async function getCurrentLocation() {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setError(true)
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setFound(true)
    }




  return (
    <SafeAreaView>
        <paper.Button onPress={() => {getCurrentLocation()}}>Location</paper.Button>
        {error? 
            <paper.Text>Something went wrong. Please give permission to access your location</paper.Text>
            : <></>    
        }
        {found ? 
            <View>
                <paper.Text>Location:</paper.Text>
                <paper.Text>Laditude: {location.coords.latitude}</paper.Text>
                <paper.Text>Longitude: {location.coords.longitude}</paper.Text>
                <paper.Button mode='text' onPress={() => Linking.openURL("geo:61,23")}>Go to location</paper.Button>
                
            </View>
            : <></>
        }
    </SafeAreaView>
  );
}

