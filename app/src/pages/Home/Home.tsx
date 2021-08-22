import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { Paragraph } from 'react-native-paper';
import { RootStoreContext } from '../../../App';
import { CompletedSets } from '../../components';
import { Title } from '../../components/Title';
import { DrawerNavigatorParams } from '../../interfaces';
import { ItemTabNavigator, TabNavigator } from '../../navigations';
import { PantsList } from '../Pants';
import { ShirtList } from '../Shirt';
import { ShoeList } from '../Shoe';

type HomeScreenRouteProp = RouteProp<DrawerNavigatorParams,'Home'>;
type HomeScreenNavigationProp = DrawerNavigationProp<DrawerNavigatorParams,'Home'>;
type Props = {
    route: HomeScreenRouteProp;
    navigation: HomeScreenNavigationProp;
    loading:boolean
};
const Home = observer(({route,navigation,loading}:Props) => {

  let {setStore}  = useContext(RootStoreContext);

  if(loading) {
    return(
      <View style={styles.activtyContainer}>
        <ActivityIndicator animating={loading} style={styles.activityIndicator} size="small" color="#0000ff" />
      </View>
     
    )
  }else{
  return (
    <View style={styles.continer}>
        <Title text={"Dress Me Up!"}/>
        <CompletedSets  completed={setStore.completedSets}/> 
        <Paragraph style={styles.paragraph}>
          {"This app will allow you to build your own custom set of cloths to wear!\n All based on what you like most!\n Feel like Adidas? Just type it and we will find it for you!\n So just use swipe left, and start building!"}
        </Paragraph>  
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
}});

export default Home

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
},
paragraph:{
  fontWeight:'bold',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  fontFamily:'Ariel'
}
})