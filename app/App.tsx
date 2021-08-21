import React from 'react';
import {
   SafeAreaView,
   StatusBar,
   useColorScheme,
   View,
} from 'react-native';

import {
   Colors,
} from 'react-native/Libraries/NewAppScreen';
import Layout from './src/components/Layout/Layout';
import { useAxios } from './src/hooks';
import {Home} from './src/pages/Home';
import RootStore from './src/store'


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const { response, loading, error } = useAxios({
  // url:'5e3940013200005e00ddf87e?mocky-delay=600ms',
  // method:'get',
  // })
  
  return (
      <Layout>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Home/>
      </Layout>
  );
};

 

export default App;
