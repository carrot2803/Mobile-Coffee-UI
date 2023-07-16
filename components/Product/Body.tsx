import { SafeAreaView } from "react-native-safe-area-context";
import { StarIcon } from "react-native-heroicons/solid";
import Sizebtn from "./Sizebtn";
import { View, Text } from "react-native";
import { COLORS } from "../../constants";
import { Header } from "./Header";

type bodyProps = { image: any; stars: string; name: string; price: string; desc: string };

export default function Body({ image, stars, name, price, desc }: bodyProps) {
	return (
		<SafeAreaView className="space-y-4 flex-1">
			<Header image={image} />
			<View
				style={{ backgroundColor: COLORS.bgLight }}
				className="flex-row justify-center items-center mx-4 rounded-3xl p-1 px-2 space-x-1 opacity-90 w-16"
			>
				<StarIcon size="15" color="white" />
				<Text className="text-base font-semibold text-white">{stars}</Text>
			</View>
			<View className="px-4 flex-row justify-between items-center">
				<Text style={{ color: COLORS.text }} className="text-3xl font-semibold">
					{name}
				</Text>
				<Text style={{ color: COLORS.text }} className="text-lg font-semibold">
					$ {price}
				</Text>
			</View>
			<Sizebtn />
			<View className="px-4 space-y-2">
				<Text style={{ color: COLORS.text }} className="text-lg font-bold">
					About
				</Text>
				<Text className="text-gray-600">{desc}</Text>
			</View>
		</SafeAreaView>
	);
}
