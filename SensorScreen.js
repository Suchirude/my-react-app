import { Accelerometer } from 'expo-sensors';
import { useEffect, useState } from 'react';
import * as paper from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SensorScreen(){
    const [{x, y, z}, setSensorValues] = useState({x:0, y:0, z:0});
    const [subscription, setSubscription] = useState(null);
    const subscribe = () => {
        setSubscription(Accelerometer.addListener(setSensorValues));
    }
    Accelerometer.setUpdateInterval(100);
    const unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null)
    }
    useEffect(() => {
        subscribe();
        return () => unsubscribe();
    }, []);

    return(
        <SafeAreaView style={{padding:20}}>
            <paper.Text>X: {x}</paper.Text>
            <paper.Text>Y: {y}</paper.Text>
            <paper.Text>Z: {z}</paper.Text>
            <paper.Button onPress={subscription ? unsubscribe : subscribe}>Toggle measurements</paper.Button>
        </SafeAreaView>
    )
}
