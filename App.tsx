/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './src/config/Env';
import {} from 'react-native';
import {
  AddToInventory,
  DispatchPage,
  ForgotPassword,
  InventoryHome,
  LoginPage,
  LoginWithNumber,
  NewPassword,
  OptVerification,
  OrderPage,
  ScanPage,
  SplashPage,
  TicketPage,
} from './src/pages';
import {useAppSelector} from './src/store/hooks';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHapticFeedback from './src/hooks/useHapticFeedback';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const {isLogin, user} = useAppSelector(state => state.userStore);
  const {triggerHaptic} = useHapticFeedback();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'transparent'}}
      edges={['left', 'right']}>
      <NavigationContainer onStateChange={() => triggerHaptic('impactMedium')}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // Hide header for a clean UI
            animation: 'slide_from_right', // Apply fade animation on navigation
          }}>
         {isLogin&&
         <>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={routes.SPLASH}
            component={SplashPage}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={routes.LOGIN}
            component={LoginPage}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={routes.FORGOTPASSWORD}
            component={ForgotPassword}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={routes.OTP}
            component={OptVerification}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={routes.NEWPASSWORD}
            component={NewPassword}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={routes.LOGINWITHNUMBER}
            component={LoginWithNumber}
          /></>
        //  <>
        //   <Stack.Screen
        //     options={{
        //       headerShown: false,
        //     }}
        //     name={routes.HOME}
        //     component={InventoryHome}
        //   />
        //   <Stack.Screen
        //     options={{
        //       headerShown: false,
        //     }}
        //     name={routes.TICKET}
        //     component={TicketPage}
        //   />
        //   <Stack.Screen
        //     options={{
        //       headerShown: false,
        //     }}
        //     name={routes.DISPATCHITEAM}
        //     component={DispatchPage}
        //   />
        //   <Stack.Screen
        //     options={{
        //       headerShown: false,
        //     }}
        //     name={routes.SCANPAGE}
        //     component={ScanPage}
        //   />
        //   <Stack.Screen
        //     options={{
        //       headerShown: false,
        //     }}
        //     name={routes.ORDERPAGE}
        //     component={OrderPage}
        //   />

        //   <Stack.Screen
        //     options={{
        //       headerShown: false,
        //     }}
        //     name={routes.ADDTOINVENTORY}
        //     component={AddToInventory}
        //   /> 
        // </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
