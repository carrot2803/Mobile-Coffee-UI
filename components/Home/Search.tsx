import { View, TouchableOpacity, TextInput, Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const { height } = Dimensions.get("window");

export const Search = () => {
	return (
		<View className="mx-5 shadow" style={{ marginTop: height * 0.06 }}>
			<View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
				<TextInput placeholder="Search" className="p-4 flex-1 font-semibold text-gray-700" />
				<TouchableOpacity className="rounded-full p-2" style={{ backgroundColor: COLORS.bgLight }}>
					<MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
				</TouchableOpacity>
			</View>
		</View>
	);
};
