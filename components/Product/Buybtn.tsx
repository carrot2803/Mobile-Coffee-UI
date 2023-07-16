import { View, Text, TouchableOpacity, Platform } from "react-native";
import { ShoppingBag } from "react-native-feather";
import { COLORS } from "../../constants";
const ios = Platform.OS == "ios";

export function Buybtn() {
	return (
		<View className="flex-row justify-between px-4">
			<TouchableOpacity className="p-4 rounded-full border border-gray-400">
				<ShoppingBag color="gray" />
			</TouchableOpacity>
			<TouchableOpacity style={{ backgroundColor: COLORS.bgLight }} className="p-4 rounded-full flex-1 ml-4">
				<Text className="text-center text-white text-base font-semibold">Buy now</Text>
			</TouchableOpacity>
		</View>
	);
}
