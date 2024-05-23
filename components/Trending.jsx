import { Text, FlatList } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable"

const TrendingItem = () => {
    return (
        <Animatable.View>

        </Animatable.View>
    )
}

const Trending = ({ posts }) => {
    const [activeItem, setActiveItem] = useState(posts[0])
    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.$id}
            horizontal
            renderItem={({ item }) => (
                <TrendingItem activeItem={activeItem} />
            )}
        />
    )
}

export default Trending