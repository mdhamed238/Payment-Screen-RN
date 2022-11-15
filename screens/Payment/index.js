import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import colors from '../../constants/colors';
import Card from '../../components/customCard';

const PaymentScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.screen}>
			<View style={styles.arrow}>
				<Ionicons
					name='arrow-back-outline'
					size={24}
					color={colors.black}
				/>
			</View>
			<View style={styles.header}>
				<Text style={styles.title}>Choose Payment option</Text>
			</View>
			<View style={styles.form}>
				<Card
					text='Credit card'
					rightIcon={
						<FontAwesome5
							name='credit-card'
							size={24}
							color={colors.purple}
						/>
					}
					onPress={() =>
						navigation.navigate('Checkout', {
							paymentOption: 'debit',
						})
					}
				/>
				<Card
					text='Internal Banking'
					rightIcon={
						<Image
							source={require('../../assets/icons/building-columns-solid.png')}
							style={{
								width: 24,
								height: 24,
							}}
						/>
					}
				/>
				<Card
					leftIcon={
						<Image
							source={require('../../assets/logo/bankily.png')}
							style={{
								width: 56,
								height: 56,
								resizeMode: 'contain',
							}}
						/>
					}
					rightIcon={
						<Image
							source={require('../../assets/logo/bpm.png')}
							style={{
								width: 40,
								height: 40,
							}}
						/>
					}
				/>
				<Card
					leftIcon={
						<Image
							source={require('../../assets/logo/masrivy.png')}
							style={{
								width: 40,
								height: 40,
								resizeMode: 'contain',
							}}
						/>
					}
					rightIcon={
						<Image
							source={require('../../assets/logo/bmci.png')}
							style={{
								width: 40,
								height: 40,
								resizeMode: 'contain',
							}}
						/>
					}
				/>
				<Card
					leftIcon={
						<Image
							source={require('../../assets/logo/sedad.png')}
							style={{
								width: 92,
								height: 92,
								resizeMode: 'contain',
							}}
						/>
					}
					rightIcon={
						<Image
							source={require('../../assets/logo/bmi-icon.png')}
							style={{
								width: 40,
								height: 40,
								resizeMode: 'contain',
							}}
						/>
					}
				/>
				<Card
					type='add'
					leftIcon={
						<Ionicons
							name='add'
							size={24}
							color={colors.gray700}
							style={{
								marginLeft: 48,
							}}
						/>
					}
					text='Add another option'
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 160,
		backgroundColor: '#fff',
	},
	arrow: {
		position: 'absolute',
		top: 50,
		left: 20,
		padding: 7,
		borderRadius: 30,
		backgroundColor: colors.gray100,
	},
	header: {
		// marginBottom: 50,
	},
	title: {
		fontFamily: 'PoppinsSemiBold',
		fontSize: 24,
	},
	form: {
		width: '80%',
		marginTop: 50,
	},
});

export default PaymentScreen;
