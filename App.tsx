import React, { useEffect } from 'react';
import {SafeAreaView,StatusBar, Text, View} from 'react-native';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';  
import { useUser } from './src/Context/UserContext';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';
import tailwind from 'twrnc';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

Amplify.configure(awsconfig);

function App(): React.JSX.Element {

  const {checkUserLoggedIn} = useUser()

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={tailwind`h-full w-full`}>
        <SafeAreaView style={tailwind`flex-1 bg-white`}>
          <BottomTabNavigation />
        </SafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;
