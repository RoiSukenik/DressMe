import React from 'react';
import { StyleSheet, View} from 'react-native';
import { ItemTabNavigator, TabNavigator } from '../navigations';
import { Shoe } from './Shoe';
import { Pants } from './Pants';
import { Shirt } from './Shirt';
import { observer } from 'mobx-react';
import Title from '../components/Layout/Title/Title';
import CompletedSets from '../components/Layout/CompletedSets/CompletedSets';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RootStore from '../store';

const {setStore} = new RootStore();

export const Home =observer(()=>{



    return (
      <View style={styles.continer}>
          <Title text={"Dress Me Up!"}/>
          <CompletedSets  completed={setStore.completedSets}/>
              <ItemTabNavigator>
                  <TabNavigator.Screen 
                      name="Shoe" 
                      component={Shoe} 
                      options={{
                          tabBarLabel: 'Shoe',
                          tabBarIcon: ({size,color}) => (
                            <Icon name="shoe-prints" size={size} color={color}/>
                          ),
                        }}/>
                  <TabNavigator.Screen 
                      name="Pants" 
                      component={Pants}/>
                  <TabNavigator.Screen 
                      name="Shirt" 
                      component={Shirt}
                      options={{
                        tabBarLabel: 'Shirts',
                        tabBarIcon: ({size,color}) => (
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
