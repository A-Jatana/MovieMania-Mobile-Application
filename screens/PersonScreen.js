import { View, Text, Dimensions, Platform, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';

var {width, height} = Dimensions.get('window');
const ios = Platform.OS === 'ios';
const verticalMargin = ios? '': 'my-3'; // top margin for android devices
export default function PersonScreen() {
    const navigation = useNavigation();
    const [liked, setLiked] = React.useState(false);
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
        </View>


    </ScrollView>
  )
}