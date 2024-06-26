import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { useFonts } from 'expo-font';
import { React, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'
import TrendingMovies from '../components/trendingMovies'
import MovieList from '../components/movieList'
import { useNavigation } from '@react-navigation/native';


const ios = Platform.OS === 'ios'
export default function HomeScreen() {
  // Trending movies
  const [trending, setTrending] = useState([1,2,3])
  // Coming soon movies
  const [comingSoon, setComingSoon] = useState([1,2,3])
  // highly rated movies
  const [highlyRated, setHighlyRated] = useState([1,2,3])
  const navigation = useNavigation();
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    Audiowide: require('../assets/fonts/Audiowide-Regular.ttf'), // path to font file
  });

  // Check if fonts are loaded before rendering
  if (!fontsLoaded) {
    return null; // or any loading indicator
  }

  return (
    <View className="flex-1 bg-midnight-blue">
      {/* search bar and logo */}
      <SafeAreaView className={ios? "-mb-2": "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4">
            <Bars3CenterLeftIcon size="30" strokeWidth={2} color="#D3D3D3" />
            <View className="flex-row justify-between items-center">
              <MaterialCommunityIcons name="movie-search" size={25} color="#7DF9FF" />
              <Text style={{ fontSize: 25, fontFamily: 'Audiowide', color: '#FFC000' }}>MovieMania</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <MagnifyingGlassIcon size="30" strokeWidth={2} color="#D3D3D3" />
            </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}
      >
        {/* Trending movies */}
        <TrendingMovies data={trending} />

        {/* Coming soon movies row */}
        <MovieList title="Coming Soon" data={comingSoon}/>

        {/* Highly rated movies row */}
        <MovieList title="Highly Rated" data={highlyRated}/>

      </ScrollView>

      
    </View>
  )
}