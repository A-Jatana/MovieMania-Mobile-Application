import React from 'react'
import { View, Text, Dimensions, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import { useState } from 'react';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');


export default function SearchScreen() {
    const navigation = useNavigation();
    const [searchResults, setSearchResults] = useState([1,2,3,4])
  return (
    <SafeAreaView className="flex-1 bg-midnight-blue">    
        <View
            className="mx-4 mb-3 flex-row justify-between items-center border border-golden-yellow rounded-full">
                <TextInput
                    placeholder="Search for movies..."
                    placeholderTextColor="#D3D3D3"
                    className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
                />

                <TouchableOpacity
                    onPress={()=> navigation.navigate('Home')}
                    className="rounded-full p-3 m-1 bg-golden-yellow"
                >
                    <XMarkIcon size="25" color="white"/>
                </TouchableOpacity>
        </View>

        {/* Search results */}
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 10}}
            className="space-y-3">
                <Text className="text-white font-semibold ml-1">We found {searchResults.length} movies matching your query</Text>
                <View className="flex-row flex-wrap justify-between">
                    {
                        searchResults.map((item, index) => { 
                            return (
                                <TouchableWithoutFeedback
                                    key={index}
                                    onPress={()=> navigation.navigate('Movie', item)}
                                >
                                     <Image className="rounded-3xl"
                                        source={require('../assets/images/haunting_venice_poster.png')}
                                        style={{width: width * 0.44, height: height * 0.3}}
                                    />

                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </View>
        </ScrollView>
    </SafeAreaView>
    )
}
