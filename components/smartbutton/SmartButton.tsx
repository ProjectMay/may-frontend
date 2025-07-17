import { Colors } from '@/constants/Colors';
import { Pressable, Text } from 'react-native';

type colorMode = 'light' | 'dark';

type Props = {
    title: string;
    onPress: () => void;
    className?: string;
    colorMode: colorMode;
};

export default function SmartButton({ title, onPress, className = '', colorMode = 'dark' }: Props) {
    const colorSet = Colors[colorMode];
    return (
        <Pressable
            onPress={onPress}
            className={`px-8 py-4 rounded-3xl  ${className}`}
            style={{
                backgroundColor: colorSet.background,
            }}
        >
            <Text className="text-center font-semibold" style={{ color: colorSet.text }}>
                {title}
            </Text>
        </Pressable>
    );
}
