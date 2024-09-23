import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Activity, Bookmark, Grid, List, Plus, PlusSquare, User } from 'react-native-feather';
import { View } from 'react-native';
import { useUser } from '../Context/UserContext';
import RecipeScreen from '../Screens/Recipes/RecipeScreen';
import FavoritesScreent from '../Screens/Favorites/FavoritesScreent';
import AccountScreen from '../Screens/Accounts/AccountScreen';
import ActivityScreen from '../Screens/Activity/ActivityScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import LoginScreen from '../Screens/Authentication/LoginScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const { currentUser } = useUser(); // Access currentUser from UserContext

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Feed"
          component={RecipeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                <Grid style={{ marginTop: 12 }} stroke={focused ? 'black' : 'gray'} height={20} width={20} />
              </View>
            ),
          }}
        />

        {currentUser ? (
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreent}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                  <Bookmark style={{ marginTop: 12 }} stroke={focused ? 'black' : 'gray'} height={20} width={20} />
                </View>
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name="AuthFavorites"
            component={LoginScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                  <Bookmark style={{ marginTop: 12 }} stroke={focused ? 'black' : 'gray'} height={20} width={20} />
                </View>
              ),
            }}
          />
        )}      

        {currentUser ? (
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                  <Plus style={{ marginTop: 12 }} stroke={focused ? 'black' : 'gray'} height={20} width={20} />
                </View>
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name="AuthAccount"
            component={LoginScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                  <Plus style={{ marginTop: 12 }} stroke={focused ? 'black' : 'gray'} height={20} width={20} />
                </View>
              ),
            }}
          />
        )}      

        {currentUser ? (
          <Tab.Screen
            name="Accounts"
            component={ActivityScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                  <Activity style={{ marginTop: 12 }} stroke={focused ? 'black' : 'gray'} height={20} width={20} />
                </View>
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name="AuthAccounts"
            component={LoginScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                  <Activity style={{ marginTop: 12 }} stroke={focused ? 'black' : 'gray'} height={20} width={20} />
                </View>
              ),
            }}
          />
        )}      

        {/* Conditionally render either the AuthStack or ProfileStack based on currentUser */}
        {currentUser ? (
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                  <User style={{ marginTop: 12 }} stroke={focused ? 'black' : 'gray'} height={20} width={20} />
                </View>
              ),
            }}
          />
        ) : (
          <Tab.Screen
            name="AuthProfile"
            component={LoginScreen} // Show the AuthStack when user is not logged in
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({ focused }) => (
                <View style={{ width: 22, height: 22, alignItems: 'center' }}>
                  <User style={{ marginTop: 12 }} stroke={focused ? 'black' : 'gray'} height={20} width={20} />
                </View>
              ),
            }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
