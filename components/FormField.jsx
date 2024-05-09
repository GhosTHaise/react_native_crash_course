import { View, Text } from 'react-native'
import React from 'react'

const FormField = ({
    title,
    value,
    handleChangeText,
    otherStyles,
    keyboardType
}) => {
    return (
        <View className='space-y-2'>
            <Text className='text-base text-gray-100 font-pmedium'>
                FormField
            </Text>
        </View>
    )
}

export default FormField