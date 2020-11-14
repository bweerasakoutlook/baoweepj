import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MenuScreen from './screens/MenuScreen';
import ProductScreen from './screens/ProductScreen';
import DetailScreen from './screens/DetailScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0096DA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'หน้าหลัก'}}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{title: 'เกี่ยวกับเรา'}}
      />
   <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{title: 'Register'}}
      />
    </Stack.Navigator>
  );
}

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0096DA',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{title: 'Product'}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{title: 'Product Detail'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerPosition="left"
        drawerContent={(props) => <MenuScreen {...props} />}>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="ProductStack" component={ProductStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
