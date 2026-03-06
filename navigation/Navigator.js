import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import MainScreen from "../screens/MainScreen";
import HomeScreen from "../screens/worker/HomeScreen";
import ExploreScreen from "../screens/worker/ExploreScreen";
import MessageScreen from "../screens/worker/MessageScreen";
import ProfileScreen from "../screens/worker/ProfileScreen";
import NotificationScreen from "../screens/worker/NotificationScreen";
import JobDetailScreen from "../screens/worker/JobDetailScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import OTPScreen from "../screens/auth/OTPScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigator() {
  const StackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTP"
          component={OTPScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: "Notification",
            headerStyle: { backgroundColor: "#FFF" },
            headerTitleStyle: { fontWeight: "600", fontSize: 18 },
            headerTintColor: "#111827",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="JobDetail"
          component={JobDetailScreen}
          options={{
            title: "Job Detail",
            headerStyle: { backgroundColor: "#FFF" },
            headerTitleStyle: { fontWeight: "600", fontSize: 18 },
            headerTintColor: "#111827",
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#FFFFFF" },
          tabBarActiveTintColor: "#1E90FF",
          tabBarInactiveTintColor: "#778899",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="list" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="envelope" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
