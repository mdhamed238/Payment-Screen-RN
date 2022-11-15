import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import MonthPicker from 'react-native-month-year-picker';

const MonthPicker = ({ date, showPicker }) => {
	return (
		<View>
			{showPicker && (
				<MonthPicker
					onChange={onValueChange}
					value={date}
					minimumDate={new Date()}
					maximumDate={new Date(2025, 5)}
					locale='ko'
				/>
			)}
		</View>
	);
};

export default MonthPicker;
