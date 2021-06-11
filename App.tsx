import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';

import { ApolloProvider } from '@apollo/client';
import { client } from './graphql';
import AuthProvider from './context/AuthProvider';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
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
  }
}
