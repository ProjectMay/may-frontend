import { Placeholder } from '@/components/placeholder/Placeholder';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Placeholder />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
