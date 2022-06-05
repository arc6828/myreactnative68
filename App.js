// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Welcome from './screens/Welcome';
// import Ex1 from './screens/week2/Ex1';
// import Ex2 from './screens/week2/Ex2';
// import Travel from './screens/week3/Travel';
// import Health from './screens/week5/Health';
// import Home from './screens/week6/Home';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from './hooks/AuthContextProvider';
import BottomTab from './navigations/BottomTab';
import HomeStack from './navigations/HomeStack';
import RootStack from './navigations/RootStack';

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        {/* <HomeStack /> */}
        {/* <BottomTab /> */}
        <RootStack />
      </NavigationContainer>
    </AuthContextProvider>
  );
}