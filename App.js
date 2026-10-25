import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import ContentScreen from "./ContentScreen";
import CustomNavigationBar from "./CustomNavigationBar";
import DetailsScreen from "./DetailsScreen";
import LinkingScreen from "./LinkingScreen";
import SensorScreen from "./SensorScreen";
import LocationScreen from "./LocationScreen";

const Tab = createBottomTabNavigator()

export default function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator id={"nav"} initialRouteName="Home"
                           screenOptions={{
                               header: (props) => <CustomNavigationBar {...props} />,
                           }}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="About" component={AboutScreen}/>
                <Tab.Screen name="Content" component={ContentScreen}/>
                <Tab.Screen name="Details" component={DetailsScreen}/>
                <Tab.Screen name="Linking" component={LinkingScreen}/>
                <Tab.Screen name="Sensors" component={SensorScreen}/>
                <Tab.Screen name="Location" component={LocationScreen}/>
            </Tab.Navigator>
        </NavigationContainer>)
}
