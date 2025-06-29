import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type PlaceholderProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
};

export function Placeholder({
    style,
    lightColor,
    darkColor,
    ...props
}: PlaceholderProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return (
        <Text style={[{ color }, styles.default, style]} {...props}>
            This is some placeholder text.
        </Text>
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
});
