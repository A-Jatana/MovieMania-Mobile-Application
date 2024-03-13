import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios? '': 'mt-3'; // top margin for android devices
export default function MovieScreen() {
    let movieName = "A Haunting in Venice";
    const {params: item} = useRoute();
    const [liked, setLiked] = useState(false);
    const navigation = useNavigation();
    useEffect(()=>{
        //call the movie details API

    }, [item])
  return (
    <ScrollView
        contentContainerStyle={{paddingBottom: 20}}
        className="flex-1 bg-midnight-blue"
    >
        {/* back button and movie poster*/}
        <View className="w-full">
            <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
                <TouchableOpacity onPress={()=> navigation.goBack()} className="rounded-xl p-1">
                    <ChevronLeftIcon size={25} strokeWidth={2.5} color="#D3D3D3" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> setLiked(!liked)}>
                    <HeartIcon size="35" color={liked? "red" : color="#D3D3D3" }/>
                </TouchableOpacity>
            </SafeAreaView>

            <View>
                <Image
                    source={require('../assets/images/haunting_venice_poster.png')}
                    style={{
                        width: width,
                        height: height*0.55,
                    }}
                />
                <LinearGradient
                    colors={['transparent', 'rgba(25,25,112,0.8)', 'rgba(25,25,112,1)']}
                    style={{width, height: height*0.40}}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0"
                />
            </View>
        </View>
        {/* movie details */}
        <View style={{marginTop: -(height*0.09)}} className="space-y-3">
            {/*title*/}
            <Text className="text-white text-center text-3xl font-bold tracking-wider">
                {movieName}
            </Text>
            {/*release date, duration*/}
            <Text className="text-gray-icon font-semibold text-base text-center">
                    2023 • 103 mins
            </Text>

            {/*genres*/}
            <View className="flex-row justify-center mx-4 space-x-2">
                <Text className="text-gray-icon font-semibold text-base text-center">
                    Mystery • 
                </Text>
                <Text className="text-gray-icon font-semibold text-base text-center">
                    Thriller • 
                </Text>
                <Text className="text-gray-icon font-semibold text-base text-center">
                    Suspense
                </Text>
            </View>

            {/*description*/}
            <Text className="text-gray-icon mx-4 tracking-wide">
                Now retired and living in self-imposed exile in the world's most glamorous city, Poirot reluctantly attends a seance at a decaying, haunted palazzo. He soons gets thrust into a sinister world of shadows and secrets when one of the guests is murdered.
            </Text>
        </View>


    </ScrollView>
  )
}