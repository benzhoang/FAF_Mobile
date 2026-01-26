//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainScreen from '../screens/MainScreen';
import HomeScreen from '../screens/HomeScreen';

//const Tab = createBottomTabNavigator();


const Stack = createStackNavigator();

export default function Navigator() {

    const StackNavigator = () => {
        return (
            <Stack.Navigator>
                    <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        )
    }
    // const TabNavigator = () => {
    //     return (
    //         <Tab.Navigator
    //             screenOptions={{
    //                 headerShown: false,
    //                 tabBarStyle: { backgroundColor: '#8B5E3C' },
    //                 tabBarActiveTintColor: '#1E90FF',
    //                 tabBarInactiveTintColor: '#E0E0E0',
    //             }}
    //         >
    //             <Tab.Screen
    //                 name="Home"
    //                 component={HomeScreen}
    //                 options={{
    //                     tabBarIcon: ({ color }) => (<FontAwesome name="home" size={24} color={color} />)
    //                 }}
    //             />
    //             <Tab.Screen
    //                 name="Category"
    //                 component={CategoryScreen}
    //                 options={{
    //                     tabBarIcon: ({ color }) => (<FontAwesome name="list" size={24} color={color} />)
    //                 }}
    //             />
    //             <Tab.Screen
    //                 name="QR"
    //                 component={QRScreen}
    //                 options={{
    //                     tabBarIcon: ({ color }) => (<FontAwesome name="qrcode" size={24} color={color} />)
    //                 }}
    //             />
    //             <Tab.Screen
    //                 name="Profile"
    //                 component={ProfileScreen}
    //                 options={{
    //                     tabBarIcon: ({ color }) => (<FontAwesome name="user" size={24} color={color} />)
    //                 }}
    //             />
    //         </Tab.Navigator>
    //     );
    // }

    return (

        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );

}