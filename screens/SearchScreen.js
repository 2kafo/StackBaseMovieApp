import { View, Text, SafeAreaView, TextInput, Dimensions, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { fallback, image185, searchMovie } from '../api/movieDB'

var { width, height } = Dimensions.get('window')

export default function SearchScreen() {
    const navigation = useNavigation()
    const [results, setResults] = useState([])
    const [movieName, setMovieName] = useState('')
    const [loading, setLoading] = useState('')
    // const movieName = 'Amani movie'

    const handleSearch = value => {
        console.log('value: ', value)
        if (value && value.length) {
            setLoading(true)
            searchMovie({
                query: value,
                include_adult: 'false',
                language: 'en-US',
                page: '1',
            }).then(data => {
                setLoading(false)
                // console.log("Got dat",data)
                if(data && data.results) setResults(data.results)
                console.log("results", results)

            })
                
        }else{
            setLoading(false)
            setResults({})
        }
    }

    return (
        <SafeAreaView className="bg-neutral-800 flex-1 -mb-2` : tw`-mb-3">

            <View className="m-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
                <TextInput
                    placeholder='Search Movie'
                    placeholderTextColor={'lightgray'}
                    // value={movieName}
                    onChangeText={handleSearch}
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider "
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                >
                    <XMarkIcon size={'25'} color={'white'} />
                </TouchableOpacity>
            </View>
            {/* Result */}
            {
                results.length > 0 ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        className='space-y-3'
                    >
                        <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
                        <View className='flex-row justify-between flex-wrap'>
                            {
                                results.map((item, index) => {
                                    return (
                                        <TouchableWithoutFeedback
                                            key={index}
                                            onPress={() => navigation.push('Movie', item)}
                                        >
                                            <View className='spaace-y-2 mb-4'>
                                                <Image
                                                    // source={require('../assets/images/img2.webp')}
                                                    source={{uri: image185(item.poster_path || fallback)}}
                                                    style={{
                                                        width: width * 0.44,
                                                        height: height * 0.3,
                                                    }}
                                                    className="rounded-3xl"
                                                />
                                                <Text className="text-neutral-300 ml-1 text-center">
                                                    {
                                                        item.length > 22 ? item.slice(0, 14) + '...' : item.name
                                                    }
                                                </Text>
                                            </View>

                                        </TouchableWithoutFeedback>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                ) : (
                    <View className="flex-row justify-center">
                        <Image
                            source={require('../assets/images/img2.webp')}
                            style={{
                                width: width * .99,
                                height: height * 0.8,
                            }}

                            className="h-96 w-96"
                        />
                    </View>
                )
            }

        </SafeAreaView>

    )
}