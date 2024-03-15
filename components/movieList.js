import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

var {width, height} = Dimensions.get('window');
export default function MovieList({title, hideSeeAll, data}) {
    let movieName = "A Haunting in Venice";
    const navigation = useNavigation();
  return (
    <View className="mb-8 space-y-4">
        <View className="mx-4 flex-row justify-between items-center">
            <Text className="text-gray-icon text-xl">{title}</Text>
            {
                hideSeeAll? null: 
                <TouchableOpacity>
                    <Text className="text-electric-blue text-lg">See all</Text>
                </TouchableOpacity>
            }

        </View>
        {/* Movies list */}
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                data.map((item, index)=>{
                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={()=> navigation.push('Movie', item)}
                        >
                            <View className="space-y-1 mr-4">
                                <Image
                                    source={require('../assets/images/haunting_venice_poster.png')}
                                    style={{
                                        width: width*0.33,
                                        height: height*0.22,
                                    }}
                                    className="rounded-3xl"
                                />
                                <Text className="text-white ml-1">
                                    {
                                        movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName // truncate movie name if it's too long
                                    }
                                </Text>
                            </View>
                            
                        </TouchableWithoutFeedback>
                    )
                })
            }

            </ScrollView>
    </View>
    

  )
}