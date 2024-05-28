import { Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'

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
            </ScrollView>
        </SafeAreaView>
    )
}

export default Create