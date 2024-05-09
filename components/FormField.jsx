import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormField = ({
    title,
    placeholder,
    value,
    handleChangeText,
    otherStyles,
    keyboardType
}) => {
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base text-gray-100 font-pmedium'>
                {title}
            </Text>

            <View className='border-2 border-black-200 w-full h-16 px-4
             bg-black-100 rounded-2xl focus:border-secondary items-center'>
                <TextInput
                    className='flex-1 tetx-white font-psemibold text-base'
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry
                />
            </View>
        </View>
    )
}

export default FormField