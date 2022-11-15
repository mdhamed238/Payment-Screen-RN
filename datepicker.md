<View style={styles.datePickerView}>
    <Text style={{ fontFamily: 'PoppinsMedium' , fontSize: 14, marginBottom: 5, }}>
        Expiry date
    </Text>
    <View style={styles.datePicker}>
        <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.text}>{date}</Text>
            <Ionicons name='caret-down-outline' size={24} />
        </TouchableOpacity>
    </View>
</View>
