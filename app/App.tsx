import { NavigationContainer } from '@react-navigation/native';
import { observer } from 'mobx-react';
import React,{createContext, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper'
import Layout from './src/components/Layout/Layout';
import { useAxios } from './src/hooks';
import RootStackNavigator, { RootStack } from './src/navigations/RootStackNavigatior';
import Main from './src/pages/Main';
import { Success } from './src/pages/Success';
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
  
  const {Screen} = RootStack;
  if(error) {
    <View>
      <Text>Error While Loading Data... Please Try Again Later!</Text>
    </View>
  }else{
  return(
    <PaperProvider>
      <Layout>
        <RootStoreContext.Provider value= {rootStore}>
          <NavigationContainer>
            <RootStackNavigator>
              <Screen name="Main" component={Main}/>
              <Screen name="Success" component={Success}/>
            </RootStackNavigator>
          </NavigationContainer>
        </RootStoreContext.Provider>
      </Layout> 
    </PaperProvider> 
  )
}})

 

export default App;

const styles = StyleSheet.create({
  contianer:{
    flex:1
  }
})