import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    // https://docs.expo.dev/versions/v51.0.0/sdk/camera/
    // expo-camera states
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    const [scanned, setScanned] = useState<boolean>(false);

    const [barcodeType, setBarcodeType] = useState<string>('');
    const [barcodeDataNumber, setBarcodeDataNumber] = useState<string>('');

    const handleBarCodeScanned = (barcodeType: string, barcodeData: string) => {
        setBarcodeType(barcodeType);
        setBarcodeDataNumber(barcodeData);
        setScanned(true);
        // this is where we start processing and using our barcodeData to retrieve information about the product.
    };

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View>
                <Text>
                    Project May values your privacy. We need permission to use your camera to scan
                    barcodes!
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing((current) => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <SafeAreaView className="flex-1 justify-evenly">
            <View className="flex flex-row justify-center font-bold">
                <Text className="text-4xl">Scan Product</Text>
            </View>
            <View className="mx-12">
                <CameraView
                    className=""
                    facing={facing}
                    barcodeScannerSettings={{
                        barcodeTypes: ['qr', 'upc_a', 'upc_e', 'ean13'],
                    }}
                    onBarcodeScanned={
                        scanned ? undefined : ({ type, data }) => handleBarCodeScanned(type, data)
                    }
                >
                    {/* Use an overlay container with flex */}
                    <View className="justify-end items-center py-56 mx-"></View>
                </CameraView>
            </View>
            <View className="mx-20">
                <TouchableOpacity
                    className="bg-white py-4 rounded-xl items-center"
                    onPress={toggleCameraFacing}
                >
                    <Text className="text-black font-bold ">Flip Camera</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Type: {barcodeType} </Text>
                <Text>Barcode Number: {barcodeDataNumber} </Text>
            </View>
        </SafeAreaView>
    );
}
