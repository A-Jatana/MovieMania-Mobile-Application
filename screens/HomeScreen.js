import { View, Text, Platform, TouchableOpacity, ScrollView } from 'react-native'
import { useFonts } from 'expo-font';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'


const ios = Platform.OS === 'ios'
export default function HomeScreen() {
    // Load custom fonts
    const [fontsLoaded] = useFonts({
      Audiowide: require('../assets/fonts/Audiowide-Regular.ttf'), // path to font file
    });

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
            <TouchableOpacity>
              <MagnifyingGlassIcon size="30" strokeWidth={2} color="#D3D3D3" />
            </TouchableOpacity>
        </View>
      </SafeAreaView>

      
    </View>
  )
}