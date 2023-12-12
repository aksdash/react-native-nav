import { NavigationContainer } from "@react-navigation/native";
import Feed from "./components/Feed";
import Notification from "./components/Notification";
import Setting from "./components/Setting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeDetailsScreen from "./components/screens/homestack/HomeDetailsScreen";
import Payment from "./components/screens/drawer/payment";

const Tab = createBottomTabNavigator()

const HomeStack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()

function DrawerGroup(){
    return(
        <Drawer.Navigator screenOptions={{headerShown : false}}>
            <Drawer.Screen name = "HomeStackGroup" component={HomeStackGroup} ></Drawer.Screen>
            <Drawer.Screen name = "Payments" component={Payment} options={{headerShown:true}}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

function HomeStackGroup() {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name = "Tab" component= {TabGroup} options={{headerShown:false}}/>
            <HomeStack.Screen name = "HomeDetailScreen" component={HomeDetailsScreen} options={{presentation: "modal"}}/>
        </HomeStack.Navigator>
    )
}

function TabGroup(){
    return(
        <Tab.Navigator
            screenOptions={({route, navigation}) => ({
                tabBarIcon : ({color, focused,size}) => {
                  let iconName;
                  if(route.name === "Feed"){
                    iconName = focused ? "home" : "home-outline"
                  }else if (route.name === "Notification"){
                    iconName = focused ? "ios-notifications" : "notifications-outline" 
                  }else if (route.name === "Setting"){
                    iconName = focused ? "settings" : "ios-settings-sharp"
                  }
                  return <Ionicons name={iconName} size={24} color="black" />

                },
                tabBarActiveTintColor : "green",
                tabBarInactiveTintColor: "gray"

            })}
        >
            <Tab.Screen name="Feed" component={Feed} options={{tabBarLabel : "Home"}}></Tab.Screen>
            <Tab.Screen name="Notification" component={Notification}></Tab.Screen>
            <Tab.Screen name="Setting" component={Setting}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
          <DrawerGroup />
        </NavigationContainer>
    )
}