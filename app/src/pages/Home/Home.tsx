import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { RootStoreContext } from '../../../App';
import { CompletedSets } from '../../components';
import { Title } from '../../components/Title';
import { DrawerNavigatorParams } from '../../interfaces';

type HomeScreenRouteProp = RouteProp<DrawerNavigatorParams,'Start'>;
type HomeScreenNavigationProp = DrawerNavigationProp<DrawerNavigatorParams,'Start'>;
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
}
})