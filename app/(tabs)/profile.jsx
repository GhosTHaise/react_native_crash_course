import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import EmptyState from '../../components/EmptyState'
import { getUserPosts, searchPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
import VideoCard from '../../components/VideoCard'

import { useGlobalContext } from '../../context/globalProvider'
import { icons } from '../../constants'

const Profile = () => {
    const { user, setUser, setIsLoggedIn } = useGlobalContext();
    const { data: posts, refetch } = useAppwrite(() => getUserPosts(user.$id));

    const handleLogout = () => {

    }
    return (
        <SafeAreaView
            className='bg-primary h-full'
        >
            <FlatList
                data={posts}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <VideoCard
                        video={item}
                    />
                )}
                ListHeaderComponent={() => (
                    <View className='w-full justify-center items-center mt-6 mb-12 px-4'>
                        <TouchableOpacity
                            className='w-full items-end'
                            onPress={handleLogout}
                        >
                            <Image
                                source={icons.logout}
                                resizeMode='contain'
                                className='w-6 h-6'
                            />
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No Videos Found"
                        subtitle="No videos found for this search query ."
                    />
                )}
            />
        </SafeAreaView>
    )
}

export default Profile