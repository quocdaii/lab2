import React from "react";
import HomeScreen from "./src/HomeScreen";
import DetailsScreen from "./src/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Drawer, PaperProvider } from "react-native-paper";
import CustomNavigationBar from "./src/CustomNavigationBar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyDrawer from "./src/MyDrawer";
import CustomDrawerNavigation from "./src/CustomDrawerNavigation";
import MyBottomTabs from "./src/MyBottomTabs";

const Stack = createStackNavigator();

const App=()=> {
    return (
        <PaperProvider>
           <NavigationContainer>
                {/* <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        header: (props) => <CustomNavigationBar {...props} />,
                        }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                </Stack.Navigator> */}
                 {/* <MyDrawer/> */}
                <MyBottomTabs/>
            </NavigationContainer>
        </PaperProvider>
);
}
export default App;