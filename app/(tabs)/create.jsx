import { Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { Video } from 'expo-av'

const Create = () => {
    const [form, setForm] = useState({
        title: "",
        video: null,
        thumbnail: null,
        prompt: null
    })

    return (
        <SafeAreaView
            className='bg-primary h-full'
        >
            <ScrollView
                className='px-3 my-6'
            >
                <Text className='text-2xl text-white font-psemibold'>
                    Upload Video
                </Text>

                <FormField
                    title="Video Title"
                    value={form.title}
                    placeholder="GGive your video a cache title ..."
                    handleChangeText={(e) => setForm({ ...form, title: e })}
                    otherStyles="mt-10"
                />

                <View className="mt-7 space-y-2">
                    <Text className='text-base text-gray-100 font-p-medium'>
                        Upload Video
                    </Text>
                    <TouchableOpacity>
                        {
                            form.video ?
                                <Video>

                                </Video>
                                :
                                (
                                    <View className="w-full h-40 px-4 bg-black-100 rounded-2xl
                                        justify-center items-center
                                    ">
                                        <View className="h-14 w-14 border border-dashed border-secondary-100 justify-center items-center">

                                        </View>
                                    </View>
                                )
                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Create