import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';

import Navigation from './navigation';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql';
import AuthProvider from './context/AuthProvider';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import Loader from './components/Loader';

const Poppins = {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold
};

const App = () => {
  const isLoadingComplete = useCachedResources();
  const [fontsLoaded] = useFonts({ ...Poppins });

  if(!isLoadingComplete) return null;
  if(!fontsLoaded) return <Loader/>;

  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation/>
          <StatusBar translucent backgroundColor="transparent"/>
        </SafeAreaProvider>
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;