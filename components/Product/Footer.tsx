import { View, Text, TouchableOpacity, Platform } from "react-native";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";
import { COLORS } from "../../constants";
import { Buybtn } from "./Buybtn";
const ios = Platform.OS == "ios";

export default function Footer({ volume }: any) {
	return (
		<View className={`space-y-3 ${ios ? "mb-6" : "mb-3"}`}>
			<View className="flex-row justify-between items-center px-4 mb-2">
				<View className="flex-row items-center space-x-1">
					<Text className="text-base text-gray-700 font-semibold opacity-60">Volume</Text>
					<Text className="text-base text-black font-semibold"> {volume}</Text>
				</View>
				<View className="flex-row items-center space-x-4 border-gray-500 border rounded-full p-1 px-4">
					<TouchableOpacity>
						<MinusIcon size="20" strokeWidth={3} color={COLORS.text} />
					</TouchableOpacity>
					<Text style={{ color: COLORS.text }} className="font-extrabold text-lg">
						2
					</Text>
					<TouchableOpacity>
						<PlusIcon size="20" strokeWidth={3} color={COLORS.text} />
					</TouchableOpacity>
				</View>
			</View>
			<Buybtn />
		</View>
	);
}
