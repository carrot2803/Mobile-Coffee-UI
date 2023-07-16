import { View, Text } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";

type textProps = { name: string; stars: string; volume: string };

export const CText = ({ name, stars, volume }: textProps) => {
	return (
		<View className="space-y-3 mt-3">
			<Text className="text-3xl text-white font-semibold z-10">{name}</Text>
			<View
				style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
				className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16"
			>
				<StarIcon size="15" color="white" />
				<Text className="text-base font-semibold text-white">{stars}</Text>
			</View>
			<View className="flex-row space-x-1 z-10 mb-6">
				<Text className="text-base text-white font-semibold opacity-60">Volume</Text>
				<Text className="text-base text-white font-semibold"> {volume}</Text>
			</View>
		</View>
	);
};
