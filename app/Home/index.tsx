import { useState } from "react";
import { Text, View } from "react-native";

import SmartButton from "@/components/smartbutton/SmartButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    // flex-1 takes full screen height
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-row justify-between mt-4 mx-2 ">
        <Text className="text-3xl font-bold ">
          <Text>Project</Text>
          <Text className="text-green-800">May🍎</Text>
        </Text>
      </View>
      <View className="flex-1 flex-col justify-between">
        <View>
          <View className="flex flex-row justify-center mt-24 mx-4">
            <Text className="text-3xl ">
              <Text>Get instant nutrition facts 🔎</Text>
            </Text>
          </View>
          <View className="flex flex-row justify-center mx-4">
            <Text className="text-3xl ">
              <Text>Explore what's in your food 🧐</Text>
            </Text>
          </View>
          <View className="flex flex-row justify-center mx-4">
            <Text className="text-3xl ">
              <Text>Transform your eating habits 💪🏼</Text>
            </Text>
          </View>
        </View>
        <View></View>
        <View className="flex flex-col items-center">
          <SmartButton title="Scan Barcode" className="w-96 mb-2" />
          <SmartButton title="Login with Google" className="w-96" />
        </View>
      </View>
    </SafeAreaView>
  );
}
