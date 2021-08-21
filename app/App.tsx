import { observer } from 'mobx-react';
import React,{createContext, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator, View } from 'react-native';
import Layout from './src/components/Layout/Layout';
import { useAxios } from './src/hooks';
import {Home} from './src/pages/Home';
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

    if(loading)
    {
      return(
        <View style={styles.contianer}>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>)
    }
    else{
      <View style={styles.contianer}>
        <Layout>
          <RootStoreContext.Provider value= {rootStore}>
            <Home/>
          </RootStoreContext.Provider>
        </Layout> 
    </View>
    }
})

 

export default App;

const styles = StyleSheet.create({
  contianer:{
    flex:1
  }
})