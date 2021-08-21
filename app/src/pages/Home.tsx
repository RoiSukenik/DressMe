import React ,{useContext, useState}from 'react';
import { StyleSheet, View} from 'react-native';
import { ItemTabNavigator, TabNavigator } from '../navigations';
import { Pants } from './Pants';
import { Shirt } from './Shirt';
import {   observer } from 'mobx-react';
import Title from '../components/Layout/Title/Title';
import CompletedSets from '../components/Layout/CompletedSets/CompletedSets';
import Icon, { FontAwesome5IconProps } from 'react-native-vector-icons/FontAwesome5';
import { RootStoreContext } from '../../App';
import { ShoeList } from './Shoe';



export const Home =observer(()=>{

  let {setStore}  = useContext(RootStoreContext);


  return (
    <View style={styles.continer}>
        <Title text={"Dress Me Up!"}/>
        <CompletedSets  completed={setStore.completedSets}/>
          <ItemTabNavigator>
            <TabNavigator.Screen 
              name="ShoeList" 
              component={ShoeList} 
              options={{
                  tabBarLabel: 'Shoe',
                  tabBarIcon: ({size,color}:FontAwesome5IconProps) => (
                    <Icon name="shoe-prints" size={size} color={color}/>
                  ),
                }}   
            />
            <TabNavigator.Screen 
              name="Pants" 
              component={Pants}
            />
            <TabNavigator.Screen 
              name="Shirt" 
              component={Shirt}
              options={{
                tabBarLabel: 'Shirts',
                tabBarIcon: ({size,color}:FontAwesome5IconProps) => (
                  <Icon name="tshirt" size={size} color={color}/>
                ),
              }}
            />
            </ItemTabNavigator>  
   
    </View>
  );

});

const styles = StyleSheet.create({
    continer:{
        flex:1,
    },

})
