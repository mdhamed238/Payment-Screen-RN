import React, { useCallback, useEffect, useState } from 'react';
import {
	View,
	SafeAreaView,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import {
	Ionicons,
	FontAwesome,
	FontAwesome5,
	EvilIcons,
} from '@expo/vector-icons';
import colors from '../../constants/colors';
import CustomInput from '../../components/customInput';
import Card from '../../components/customCard';
import validator from 'validator';
import formatCreditCard from '../../validators/creditCard';
import expiryFormat from '../../validators/expiryDate';

const CheckoutScreen = ({ navigation }) => {
	const [cardNumber, setCardNumber] = useState('');
	const [isCreditValid, setCreditValid] = useState(false);
	const [expdate, setExpDate] = useState('');
	const [cvv, setCvv] = useState('');
	const [username, setUsername] = useState('');
	const [date, setDate] = useState(new Date());
	const [datePickerVisible, setDatePickerVisible] = useState(false);

	const showPicker = useCallback((value) => setDatePickerVisible(value), []);

	const onValueChange = useCallback(
		(event, newDate) => {
			const selectedDate = newDate || date;

			showPicker(false);
			setDate(selectedDate);
		},
		[date, showPicker]
	);
	return (
		<SafeAreaView style={styles.screen}>
			<TouchableOpacity
				style={styles.arrow}
				activeOpacity={0.5}
				onPress={() => navigation.goBack()}
			>
				<Ionicons
					name='arrow-back-outline'
					size={24}
					color={colors.black}
				/>
			</TouchableOpacity>
			<View style={styles.header}>
				<Text style={styles.title}>Credit card</Text>
			</View>
			<View style={styles.form}>
				<CustomInput
					name='Card Number'
					value={formatCreditCard(cardNumber)}
					onChange={(value) => setCardNumber(value)}
					maxLength={19}
					keyboardType='numeric'
					icon={
						<Image
							source={require('../../assets/logo/Mastercard.png')}
							style={{
								width: 32,
								height: 32,
								resizeMode: 'contain',
							}}
						/>
					}
				/>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 20,
					}}
				>
					<CustomInput
						name='Expiry date'
						maxLength={7}
						keyboardType='numeric'
						value={expiryFormat(expdate)}
						onChange={(value) => setExpDate(value)}
						style={{ width: 120 }}
					/>
					<CustomInput
						name='CVV'
						keyboardType={'numeric'}
						secureTextEntry={true}
						maxLength={3}
						value={cvv}
						onChange={(value) => setCvv(value)}
						style={{
							width: 100,
						}}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingTop: 160,
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
	text: {
		fontFamily: 'PoppinsMedium',
		fontSize: 14,
	},
	form: {
		width: '80%',
		marginTop: 50,
	},
	datePickerView: {},
	datePicker: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 12,
		borderRadius: 12,
		// height: 72,
		backgroundColor: colors.gray100,
	},
});

export default CheckoutScreen;
