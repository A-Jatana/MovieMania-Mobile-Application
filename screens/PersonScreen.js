import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import MovieList from '../components/movieList';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const verticalMargin = ios? '': 'my-3'; // top margin for android devices
export default function PersonScreen() {
    const personName = "Kenneth Branagh";
    const navigation = useNavigation();
    const [liked, setLiked] = React.useState(false);
    const [personMovies, setPersonMovies] = React.useState([1,2,3,4])
  return (
    <ScrollView className="flex-1 bg-midnight-blue" contentContainerStyle={{paddingBottom: 20}}>
      {/* back button */}
      <SafeAreaView className="z-20 w-full flex-row justify-between items-center px-4 ">
            <TouchableOpacity onPress={()=> navigation.goBack()} className="rounded-xl p-1">
                <ChevronLeftIcon size={25} strokeWidth={2.5} color="#D3D3D3" />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> setLiked(!liked)}>
                <HeartIcon size="35" color={liked? "red" : color="#D3D3D3" }/>
            </TouchableOpacity>
        </SafeAreaView>

        {/* person details */}
        <View>
            <View className="flex-row justify-center"
                style={{
                    shadowColor: '#ADD8E6',
                    shadowRadius: 40,
                    shadowOffset: {width: 0, height: 5},
                    shadowOpacity: 1
                }}    
            >
               <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                    <Image source={require('../assets/images/kenneth_pic.png')} 
                        style={{height: height*0.43, width: width*0.74}}
                    />
                </View>
            </View>
            <View className="mt-6">
                <Text className="text-3xl text-white font-bold text-center">{personName}</Text>
                <Text className="text-base text-gray-icon text-center">Belfast, United Kingdom</Text>
            </View>

            <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-table-person rounded-full">
                <View className="border-r-2 border-r-electric-blue px-2 items-center">
                    <Text className="text-white font-semibold">Sex</Text>
                    <Text className="text-gray-icon text-sm">Male</Text>
                </View>
                <View className="border-r-2 border-r-electric-blue px-2 items-center">
                    <Text className="text-white font-semibold">Birthday</Text>
                    <Text className="text-gray-icon text-sm">1960-12-10</Text>
                </View>
                <View className="border-r-2 border-r-electric-blue px-2 items-center">
                    <Text className="text-white font-semibold">Primary Role</Text>
                    <Text className="text-gray-icon text-sm">Actor</Text>
                </View>
                <View className="px-2 items-center">
                    <Text className="text-white font-semibold">Followers</Text>
                    <Text className="text-gray-icon text-sm">9k</Text>
                </View>
            </View>

            <View className="my-6 mx-4 space-y-2">
                <Text className="text-white text-lg">About</Text>
                <Text className="text-gray-icon tracking-wide">
                    Sir Kenneth Charles Branagh is a British actor and filmmaker. Born in Belfast and raised primarily in Reading, Berkshire, Branagh trained at London's Royal Academy of Dramatic Art and served as its president from 2015 to 2024.
                </Text>
            </View>

            {/* movies */}
            <MovieList title={personName + ' Movies'} hideSeeAll={true} data={personMovies} />
        </View>


    </ScrollView>
  )
}