import { View, Text, Image, Dimensions, Platform } from "react-native";
import { BellIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { COLORS } from "../../constants";

export const Avatar = () => {
	return (
		<View className="mx-4 flex-row justify-between items-center">
			<Image source={require("../../assets/images/avatar.png")} className="h-9 w-9 rounded-full" />

			<View className="flex-row items-center space-x-2">
				<MapPinIcon size="25" color={COLORS.bgLight} />
				<Text className="font-semibold text-base">New York, NYC</Text>
			</View>
			<BellIcon size="27" color="black" />
		</View>
	);
};
