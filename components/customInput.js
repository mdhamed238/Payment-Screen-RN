import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const CustomInput = ({
	name,
	placeholder,
	value,
	onChange,
	icon,
	keyboardType,
	maxLength,
	secureTextEntry,
	style,
}) => {
	return (
		<View>
			<Text style={styles.title}>{name}</Text>
			<View style={{ ...styles.inputView, ...style }}>
				<TextInput
					style={styles.input}
					placeholder={placeholder}
					autoCapitalize='none'
					autoCorrect={false}
					keyboardType={keyboardType}
					secureTextEntry={secureTextEntry}
					value={value}
					onChangeText={(text) => onChange(text)}
					maxLength={maxLength}
				/>
				{icon}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputView: {
		width: '100%',
		borderRadius: 12,
		backgroundColor: colors.gray100,
		marginBottom: 10,
		padding: 12,
		flexDirection: 'row',
		alignItems: 'center',
		/* 	shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 2, */
	},
	input: {
		flex: 1,
		fontFamily: 'Poppins',
		fontSize: 16,
		color: '#333',
	},
	title: {
		fontFamily: 'PoppinsMedium',
		fontSize: 14,
		color: colors.black,
		marginBottom: 5,
	},
});

export default CustomInput;
