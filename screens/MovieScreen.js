import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const topMargin = ios? '': 'mt-3'; // top margin for android devices
export default function MovieScreen() {
    const {params: item} = useRoute();
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
                <TouchableOpacity>
                    <HeartIcon size="35" color="#D3D3D3"/>
                </TouchableOpacity>
            </SafeAreaView>

        </View>

    </ScrollView>
  )
}