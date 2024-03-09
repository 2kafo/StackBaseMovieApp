import { View, Text, SafeAreaView, TextInput, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'

var { width, height } = Dimensions.get('window')

export default function SearchScreen() {
    const navigation = useNavigation()
    const [results, setResults] = useState([1, 2, 3, 4, 5])

    return (
        <SafeAreaView className="bg-neutral-800 flex-1 -mb-2` : tw`-mb-3">

            <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
                <TextInput
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider "
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <XMarkIcon size={'25'} color={'white'} />
                </TouchableOpacity>
            </View>
            {/* Result */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                className='space-y-3'
            >
                <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
                <View className='flex-row justify-between flex-wrap'>
                    {
                        results.map((item, index) => {
                           return(
                            <TouchableWithoutFeedback
                            key={index}
                            onPress={() => navigation.push('Movie', item)}
                        >
                            <View className='spaace-y-2 mb-4'>
                                <Image
                                    source={require('../assets/images/img2.webp')}
                                    style={{
                                        width: width * 0.44,
                                        height: height * 0.3,
                                    }}
                                    className="rounded-3xl"
                                />
                                <Text className="text-neutral-300 ml-1 text-center">
                                    MovieName
                                </Text>
                            </View>

                        </TouchableWithoutFeedback>
                           )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}