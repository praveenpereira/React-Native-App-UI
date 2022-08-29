import React from 'react';
import {View,Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import Detail from '../components/Detail';


const Stack = createStackNavigator();

const MainNavigator=()=>{
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Detail" component={Detail}/>
    </Stack.Navigator>
  )
}
export default MainNavigator;