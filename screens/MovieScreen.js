import { View, Text, ScrollView, TouchableOpacity, Platform, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc';
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native';
import { ChevronLeftIcon, MagnifyingGlassIcon, ChatBubbleLeftIcon, HeartIcon } from 'react-native-heroicons/outline';
import { Image } from 'react-native';

var { width, height } = Dimensions.get('window')

const MovieScreen = () => {
    const { params: item } = useRoute();
    const [isFavorite, setIsFavorite] = useState(false)
    const movieName = 'amn amani  th  akdjo'

    const ios = Platform.OS == 'ios'
    const navigation = useNavigation()
    useEffect(() => {

    }, [item])

    return (
        <ScrollView
            contentContainerStyle={{ paddig: 20 }}
            className="flex-1 bg-neutral-900"
        >
            {/* Button and  Chat */}
            <View className='w-full'>
                <SafeAreaView style={ios ? tw`-mb-2` : tw`-mb-3`}>

                    <View style={tw`flex-row justify-between items-center mx-4 m-2`}>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ChevronLeftIcon size='50' strokeWidth={2} color='white' />

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                            <HeartIcon size='30' color={isFavorite ? 'white' : 'red'} strokeWidth={2} color='white' />

                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
                <View>
                    <Image
                        source={require('../assets/images/img2.webp')}
                        style={{ width, height: height * 0.55 }}
                    />



                </View>

            </View>
            {/* Movie details */}
            <View className=" space-y-3">
                {/* titke */}
                <Text className="text-white text-center text-3xl font-bold tracking-wider">
                    {movieName}
                </Text>
                {/* titke */}
                <Text className="text-neutral-400 font-semibold text-base text-center">
                    Released * 2020
                </Text>
                {/* genre */}
                <View className="flex-row justify-center mx-4 space-x-2">

                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Action .
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Thriller.
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Comedy.
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