import { Pressable, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  className?: string;
};

export default function SmartButton({ title, onPress, className = "" }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`px-8 py-4 rounded-3xl bg-green-700 ${className}`}
    >
      <Text className="text-white text-center font-semibold">{title}</Text>
    </Pressable>
  );
}
