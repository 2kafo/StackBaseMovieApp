import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, StatusBar, Platform, TouchableOpacity } from 'react-native'
import tw from 'twrnc';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import TrendingMovie from '../components/TrendingMovie';
import MovieList from '../components/MovieList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/Loading';
import { fetchTopRated, fetchTrendingMovie, fetchUpcoming } from '../api/movieDB';
import axios from 'axios';



export default function HomeScreen() {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [upComing, setUpComing] = useState([])
  const [topRated, setTopRated] = useState([])
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)

  const ios = Platform.OS == 'ios'

  useEffect(() => {
    getTrendingMovie();
    getUpcomingMovie();
    getTopratedMovie();
  }, [])

  const getTrendingMovie = async () => {
    try {
      const data = await fetchTrendingMovie();

      if (data && data.results) setTrendingMovies(data.results);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching trending movie:", error);
    }
  }

  const getUpcomingMovie = async () => {
    try {
      const data = await fetchUpcoming();
      if (data && data.results) setUpComing(data.results);

    } catch (error) {
      console.error("Error fetching trending movie:", error);
    }
  }

  const getTopratedMovie = async () => {
    try {
      const data = await fetchTopRated();
       
      if (data && data.results) setTopRated(data.results);

    } catch (error) {
      console.error("Error fetching trending movie:", error);
    }
  }
  return (

    <View style={tw`flex-1 bg-neutral-800 `}>
      {/* Search and button */}
      <SafeAreaView style={ios ? tw`-mb-2` : tw`-mb-3`}>
        <StatusBar style="light" />
        <View style={tw`flex-row justify-between items-center m-4`}>
          <Bars3CenterLeftIcon size='50' strokeWidth={2} color='white' />
          <Text style={tw`text-white text-3xl font-bold`}>
            Movies

          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
            <MagnifyingGlassIcon size='30' strokeWidth={2} color='white' />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {
        loading ? (
          <Loading />
        ) : (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}>
            {/* trending moviee */}
            <TrendingMovie data={trendingMovies} />

            {/* Up coming movies */}
            <MovieList title={'Up Coming '} data={upComing} />
            {/* Up coming movies */}
            <MovieList title={'Top Rated '} data={topRated} />
          </ScrollView>
        )
      }

    </View>


  )
}

