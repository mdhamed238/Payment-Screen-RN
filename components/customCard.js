import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const Card = ({ text, leftIcon, rightIcon, onPress }) => {
	return (
		<>
			<TouchableOpacity
				activeOpacity={0.5}
				style={styles.card}
				onPress={onPress}
			>
				{leftIcon}
				<Text style={styles.text}>{text}</Text>
				{rightIcon}
			</TouchableOpacity>
		</>
	);
};

const styles = StyleSheet.create({
	card: {
		width: '100%',
		height: 64,
		borderRadius: 12,
		backgroundColor: colors.gray100,
		marginBottom: 10,
		paddingHorizontal: 16,
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
	text: {
		flex: 1,
		fontFamily: 'PoppinsMedium',
		fontSize: 16,
		color: colors.gray700,
	},
});

export default Card;
