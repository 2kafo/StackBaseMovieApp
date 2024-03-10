import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { image185 } from '../api/movieDB'

var { width, height } = Dimensions.get('window')

export default function MovieList({ title, data }) {
  

    const navigation = useNavigation()
    const movieName = 'amn amani  th  akdjo'
    
    return (
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-xl">{title}</Text>
                

            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 14 }}
            >
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => navigation.navigate('Movie', item)}
                            >
                                <View className="space-y-1 mr-4">
                                    <Image

                                        // source={require('../assets/images/img2.webp')}
                                        source={{uri: image185(item.poster_path)}}

                                        style={{
                                            width: width * 0.33,
                                            height: height * 0.22
                                        }}
                                        className="rounded-3xl"
                                    />
                               
                                <Text className='text-neutral-300 ml-1'>{
                                    item.title.length>14 ? item.title.slice(0,14)+'...':item.title
                                }</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }

            </ScrollView>
        </View >
    )
}