import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/screens/Home';
import Login from './app/screens/Login';
import ProductDetails, { Params as ProductDetailsParams } from './app/screens/ProductDetails';
import ProductAdd from './app/screens/ProductAdd';

const stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: ProductDetailsParams;
  ProductAdd: undefined;
};



function App(): React.JSX.Element {
  return  (

    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
        <stack.Screen 
        name='Login' 
        component={Login} 
        />
        <stack.Screen 
        name='Home' 
        component={Home}
        />
        <stack.Screen 
        name='ProductDetails' 
        component={ProductDetails}
        />
        <stack.Screen
        name='ProductAdd'
        component={ProductAdd}
        />
        
      </stack.Navigator>
    </NavigationContainer>

);
  
}

export default App;
