import { Text, View } from 'react-native';

import SmartButton from '@/components/smartbutton/SmartButton';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    const router = useRouter();

    return (
        // flex-1 takes full screen height
        <SafeAreaView className="flex-1" style={{ backgroundColor: Colors.light.background }}>
            <View className="flex-row justify-between mt-4 mx-2 ">
                <Text className="text-3xl font-bold ">
                    <Text>Project</Text>
                    <Text className="text-green-800">May🍎</Text>
                </Text>
            </View>
            <View className="flex-1 flex-col justify-center">
                <View>
                    <View className="flex flex-row justify-center mt-16 mx-4">
                        <Text className="text-3xl font-light" style={{ color: Colors.light.text }}>
                            <Text>Get instant nutrition facts.</Text>
                        </Text>
                    </View>
                    <View className="flex flex-row justify-center mx-4">
                        <Text className="text-3xl font-medium" style={{ color: Colors.light.text }}>
                            <Text>Explore what&apos;s in your food.</Text>
                        </Text>
                    </View>
                    <View className="flex flex-row justify-center mx-4">
                        <Text className="text-3xl font-bold" style={{ color: Colors.light.text }}>
                            <Text>Transform your eating habits.</Text>
                        </Text>
                    </View>
                </View>
                <View className="flex flex-row justify-center">
                    <LottieView
                        autoPlay
                        loop={false}
                        style={{ width: 450, height: 460 }}
                        source={require('../../assets/pantryapp.json')}
                    />
                </View>
                <View className="flex flex-col items-center">
                    <SmartButton
                        title="Scan Barcode"
                        className="w-96 mb-2"
                        onPress={() => router.push('/scan')}
                        // colorMode= dark | light
                    />
                    <SmartButton
                        title="Login with Google"
                        className="w-96"
                        onPress={() => router.push('/google-login')}
                        // colorMode= dark | light
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
