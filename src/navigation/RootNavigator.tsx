import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  // getFocusedRouteNameFromRoute,
  // type RouteProp,
} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  // type BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { TopNav } from '@design-system/index';
import {
  HomeScreen,
  SplashScreen,
  LoginScreen,
  SignupScreen,
  AccountManagementScreen,
} from '@screens/index';
import {
  RootStackParamList,
  // TabParamList,
  AuthStackParamList,
  HomeStackParamList,
} from './navigation.types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
// const Tab = createBottomTabNavigator<TabParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="AccountManagement" component={AccountManagementScreen} />
        {/* <RootStack.Screen name="Tabs" component={TabNavigator} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <TopNav />,
      }}
    >
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}

// function TabNavigator() {
//   return (
//     <Tab.Navigator
//       tabBar={(props) => <BotNav {...(props as any)} />}
//       screenOptions={{
//         headerShown: true,
//         header: () => <TopNav />,
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ title: '홈' }}
//       />
//     </Tab.Navigator>
//   );
// }
