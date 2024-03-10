import { View, Text, ScrollView, TouchableOpacity, Platform, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc';
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native';
import { ChevronLeftIcon, MagnifyingGlassIcon, ChatBubbleLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { Image } from 'react-native';
import { fetchMovieDetails, image342, image500 } from '../api/movieDB';

var { width, height } = Dimensions.get('window')

const MovieScreen = () => {
    const { params: item } = useRoute();
    const [isFavorite, setIsFavorite] = useState(false)
    const [movie, setMovie] = useState({})
    const movieName = 'amn amani  th  akdjo'

    const ios = Platform.OS == 'ios'
    const navigation = useNavigation()
    console.log('item id: ', item.id)
    useEffect(() => {
        getMovieDetails(item.id)
    }, [item])

    const getMovieDetails = async (id) => {
        try {
            const data = await fetchMovieDetails(id);

            if (data) setMovie(data);
            console.log(movie)
        } catch (error) {
            console.error("Error fetching trending movie:", error);
        }
    }

    return (
        <ScrollView
            contentContainerStyle={{ paddig: 20 }}
            className="flex-1 bg-neutral-900"
        >
            {/* Button and  Chat */}
            <View className='w-full'>
                <SafeAreaView style={ios ? tw`-mb-2` : tw`-mb-3`}>

                    <View style={tw`flex-row justify-between items-center m-4 m-2`}>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ChevronLeftIcon size='50' strokeWidth={2} color='white' />

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.push('FavoriteScreen')}>

                            <Text className='text-white'>
                                <HeartIcon size='30' color={isFavorite ? 'white' : 'red'} className='bg-white' strokeWidth={2} />
                                {movie.vote_count}</Text>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
                <View>
                    <Image
                        // source={require('../assets/images/img2.webp')} 

                        source={{ url: image342(movie.poster_path) }}

                        style={{ width, height: height * 0.55 }}
                    />



                </View>

            </View>
            {/* Movie details */}
            <View className=" space-y-3">
                {/* titke */}
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movie.title}
                </Text>
                {/* titke */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                {movie.status}* {movie.release_date}
                </Text>
                {/* genre */}
                <View className="flex-row justify-center mx-4 space-x-2">

                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Know More in Community
                    </Text>

                    <TouchableOpacity>
                        <ChatBubbleLeftIcon size='30' strokeWidth={2} color='white' />
                    </TouchableOpacity>
                </View>
                {/* Decription */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    Husika na kichwa cha habari hapo juu . Mimi Tumaini Peter Kafonogo , Afisa tabibu
                    mwenye lesseni yenye usajili namba MCTER 17342  Niliemaliza masomo yangu kwenye chuo cha afya shirikishi cha City collage kilichopo kigamboni

                </Text>

            </View>


        </ScrollView>
    )
}

export default MovieScreen