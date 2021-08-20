import React from 'react';
import {
   SafeAreaView,
   StatusBar,
   useColorScheme,
} from 'react-native';

import {
   Colors,
} from 'react-native/Libraries/NewAppScreen';
import Layout from './src/components/Layout/Layout';
import { useAxios } from './src/hooks';
import Home from './src/pages/Home';


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
    <SafeAreaView style={backgroundStyle}>
      <Home/>
      {/* <Layout>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        
      </Layout> */}
    </SafeAreaView>
  );
};

 

export default App;
