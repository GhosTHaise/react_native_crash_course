import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const VideoCard = ({ video: { title, thumbnail, video, users: { username, avatar } } }) => {
    return (
        <View className='flex-col items-center px-4 mb-14'>
            <View className='flex-row gap-3 items-start'>
                <View className='justify-center items-center flex-row flex-1'>
                    <View className='w-[46px] h-[46px] rounded-lg border 
                    border-secondary justify-center items-center p-0.5'>
                        <Image
                            source={{ uri: avatar }}
                            className='w-full h-full rounded-lg'
                            resizeMode='cover'
                        />
                    </View>
                    <View className='justify-center flex-1 ml-3 gap-y-1'>
                        <Text numberOfLines={1} className='text-white font-psemibold text-sm'>{title}</Text>
                        <Text numberOfLines={1} className='text-xs text-gray-100 font-pregular'>{username}</Text>
                    </View>
                </View>
                <Image
                    source={icons.menu}
                    className='w-5 h-5'
                    resizeMode='contain'
                />
            </View>
        </View>
    )
}

export default VideoCard