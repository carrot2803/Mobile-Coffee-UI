import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { COLORS } from "../../constants";

export default function Sizebtn() {
	const [size, setSize] = useState("small");

	const renderButton = (buttonSize: string) => (
		<TouchableOpacity
			onPress={() => setSize(buttonSize)}
			style={{ backgroundColor: size === buttonSize ? COLORS.bgLight : "rgba(0,0,0,0.07)" }}
			className="p-3 px-8 rounded-full"
		>
			<Text className={size === buttonSize ? "text-white" : "text-gray-700"}>
				{buttonSize.charAt(0).toUpperCase() + buttonSize.slice(1)}
			</Text>
		</TouchableOpacity>
	);

	return (
		<View className="px-4 space-y-2">
			<Text style={{ color: COLORS.text }} className="text-lg font-bold">
				Coffee size
			</Text>
			<View className="flex-row justify-between">
				{renderButton("small")}
				{renderButton("medium")}
				{renderButton("large")}
			</View>
		</View>
	);
}
