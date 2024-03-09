import React, { useState } from 'react'
import { View, Text, SafeAreaView, ScrollView,StatusBar, Platform, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import TrendingMovie from '../components/TrendingMovie';
import MovieList from '../components/MovieList';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const [trendingMovies, setTrendingMovies] = useState([1,2,3,4,5,6,])
  const [upComing, setUpComing] = useState([1,2,3,4,5,6,])
  const [topRated, setTopRated] = useState([1,2,3,4,5,6,])
  const navigation = useNavigation()

  const ios = Platform.OS == 'ios'
  return (

    <View style={tw`flex-1 bg-neutral-800 `}>
      {/* Search and button */}
      <SafeAreaView style={ios ? tw`-mb-2` : tw`-mb-3`}>
        <StatusBar style="light" />
        <View style={tw`flex-row justify-between items-center mx-4`}>
          <Bars3CenterLeftIcon size='50' strokeWidth={2} color='white' />
          <Text style={tw`text-white text-3xl font-bold`}>
            Movies

          </Text>
          <TouchableOpacity onPress={()=> navigation.navigate('SearchScreen')}>
            <MagnifyingGlassIcon size='30' strokeWidth={2} color='white' />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}>
        {/* trending moviee */}
        <TrendingMovie data={trendingMovies} />
        {/* Up coming movies */}
        <MovieList title={'Up Coming ' } data={upComing}/>
        {/* Up coming movies */}
        <MovieList title={'Top Rated ' } data={upComing}/>
      </ScrollView>
    </View>


  )
}

