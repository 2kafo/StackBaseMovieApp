import { View, Tex, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


export default function OpenAIChat() {
 
  return (
    <SafeAreaView className="bg-neutral-800 flex-1 -mb-2` : tw`-mb-3">
      <View className="m-4 align-bottom flex-row justify-between items-center border  border-neutral-500 rounded-full">
        <TextInput
          placeholder='Ask AI about Movie here'
          placeholderTextColor={'lightgray'}
          value={input}
          // onChangeText={(text) => handleText(text)}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider "
        />
        <TouchableOpacity
          onPress={handleInput}
          className="bg-white p-2"
        >
          <Text>submit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{output}</Text>
      </View>
    </SafeAreaView>
  )
}