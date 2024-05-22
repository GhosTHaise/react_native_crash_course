import { View, Text } from 'react-native'
import React from 'react'

const VideoCard = ({ video: { title, thumbnail, video, users: { username, avatar } } }) => {
    return (
        <View>
            <Text>VideoCard</Text>
        </View>
    )
}

export default VideoCard