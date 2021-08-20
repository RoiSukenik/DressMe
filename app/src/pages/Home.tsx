import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Layout from '../components/Layout/Layout';
import { ItemNav } from '../navigations';
import { Shoe } from './Shoe';
import { Pants } from './Pants';
import { Shirt } from './Shirt';
import Title from '../components/Layout/Title/Title';
import CompletedSets from '../components/CompletedSets';

export default function Home() {
  return (
    <View style={styles.continer}>
        <Title text={"Dress Me Up!"}/>
        <CompletedSets  completed={1}/>
        {/* <NavigationContainer>
            <ItemNav.Navigator>
                <ItemNav.Screen name="Shoe" component={Shoe}/>
                <ItemNav.Screen name="Pants" component={Pants}/>
                <ItemNav.Screen name="Shirt" component={Shirt}/>
            </ItemNav.Navigator>
        </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
    continer:{
        justifyContent:"center",
        flexDirection:"column"
    },
    title:{
        flex:2
    },
    completedSets:{
       
    }
})
