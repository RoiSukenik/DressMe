import React ,{useContext}from 'react';
import { ActivityIndicator, StyleSheet, View} from 'react-native';
import { ItemTabNavigator, TabNavigator } from '../../navigations';
import {   observer } from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RootStoreContext } from '../../../App';
import { PantsList, ShirtList, ShoeList } from '..';
import { CompletedSets, Title } from '../../components';
import { RouteProp } from '@react-navigation/native';
import { DrawerNavigatorParams } from '../../interfaces';
import { DrawerNavigationProp } from '@react-navigation/drawer';


type StartScreenRouteProp = RouteProp<DrawerNavigatorParams,'Start'>;
type StatrtScreenNavigationProp = DrawerNavigationProp<DrawerNavigatorParams,'Start'>;
type Props = {
    route: StartScreenRouteProp;
    navigation: StatrtScreenNavigationProp;
};

const Start=observer(({route,navigation}:Props)=>{

  let {setStore}  = useContext(RootStoreContext);

    return (
      <View style={styles.continer}>
          <Title text={"Build Your Sets!"}/>
          <CompletedSets  completed={setStore.completedSets}/>
            <ItemTabNavigator>
              <TabNavigator.Screen 
                name="ShoeList" 
                component={ShoeList} 
                options={{
                    title: 'Choose Your Shoe!',
                    headerTitleStyle:{ textAlign: 'center'},
                    tabBarLabel: 'Shoe',
                    tabBarIcon: ({size,color}) => (
                      <Icon name="shoe-prints" size={size} color={color}/>
                    ),
                  }}   
              />
              <TabNavigator.Screen 
                name="PantsList" 
                component={PantsList}
                options={{
                  title: 'Choose Your Pants!',
                  headerTitleStyle:{ textAlign: 'center'},
                  tabBarLabel: 'Shoe',
                  tabBarIcon: ({size,color}) => (
                    <Icon name="shoe-prints" size={size} color={color}/>
                  ),
                }}   
              />
              <TabNavigator.Screen 
                name="ShirtList" 
                component={ShirtList}
                options={{
                    title: 'Choose Your Shirt!',
                    headerTitleStyle:{ textAlign: 'center'},
                    tabBarLabel: 'Shirt',
                    tabBarIcon: ({size,color}) => (
                      <Icon name="tshirt" size={size} color={color}/>
                    ),
                  }}   
              />
              </ItemTabNavigator>  
      </View>
    );
  });

export default Start;
const styles = StyleSheet.create({
    continer:{
        flex:1,
    },
    activtyContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})
