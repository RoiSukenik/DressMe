import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React,{createContext, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper'

import Layout from './src/components/Layout/Layout';
import { useAxios } from './src/hooks';
import RootDrawerNavigator,{ RootDrawerNav} from './src/navigations/RootDrawerNavigator';

import { Home, Start } from './src/pages';


import {RootStore} from './src/store';
const rootStore = new RootStore();

export const RootStoreContext= createContext<RootStore>(rootStore)



const App = observer(() => {


  const { response, loading, error } = useAxios({
  url:'5e3940013200005e00ddf87e?mocky-delay=600ms',
  method:'get',
  })
  
  rootStore.dataStore.filterData(response)
  useEffect(() => {}, [loading])
  
  return(
    <PaperProvider>
      <Layout>
        <RootStoreContext.Provider value= {rootStore}>
          <NavigationContainer>
            <RootDrawerNavigator>
              <RootDrawerNav.Screen name="Home" component={Home}/>
              <RootDrawerNav.Screen name="Start" component={Start}/>
            </RootDrawerNavigator>
          </NavigationContainer>
        </RootStoreContext.Provider>
      </Layout> 
    </PaperProvider>
    
  )
})

 

export default App;

const styles = StyleSheet.create({
  contianer:{
    flex:1
  }
})