import React from 'react';
import { StyleSheet, View} from 'react-native';
import { ItemTabNavigator, TabNavigator } from '../navigations';
import { Shoe } from './Shoe';
import { Pants } from './Pants';
import { Shirt } from './Shirt';
import Title from '../components/Layout/Title/Title';
import CompletedSets from '../components/CompletedSets';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <View style={styles.continer}>
        <Title text={"Dress Me Up!"}/>
        <CompletedSets  completed={1}/>
        <NavigationContainer>
            <ItemTabNavigator>
                <TabNavigator.Screen name="Shoe" component={Shoe}/>
                <TabNavigator.Screen name="Pants" component={Pants}/>
                <TabNavigator.Screen name="Shirt" component={Shirt}/>
            </ItemTabNavigator>
        </NavigationContainer>
        


    </View>
  );
}

const styles = StyleSheet.create({
    continer:{
        flex:1,
    },

})
