import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';

const Pagination = ({ options }) => {
	return (
		<>
			<View style={styles.card} onPress={onPress}>
				{options?.map((el, idx) => (
					<TouchableOpacity>
						<Text>{el?.text}</Text>
					</TouchableOpacity>
				))}
			</View>
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

export default Pagination;
