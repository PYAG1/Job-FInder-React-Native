import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Indexcl from "./indexcl";
import { ScreenHeaderBtn } from './components';
import {COLORS, icons,images,SIZES}from './constants';



export default function App() {
    const Stack = createNativeStackNavigator();
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="home" component={Indexcl} options={{
              headerShadowVisible:false,
              headerLeft:()=>{
                return  <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
              },
              headerRight:()=>{
              return  <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
            },
            headerTitle:""
            }}/>
        </Stack.Navigator>
        
    </NavigationContainer>
   
    )

   

}


