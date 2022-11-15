import React, { useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentScreen from './screens/Payment/index';
import CheckoutScreen from './screens/Checkout';

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
		PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
		PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
		PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
	});

	/* useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]); */

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					animation: 'slide_from_right',
				}}
			>
				<Stack.Screen name='Payment' component={PaymentScreen} />
				<Stack.Screen name='Checkout' component={CheckoutScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
