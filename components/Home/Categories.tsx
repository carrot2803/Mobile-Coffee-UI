import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { COLORS, categories } from "../../constants";
import React, { useState } from "react";

export default function Categories() {
	const [activeCategory, setActiveCategory] = useState(1);

	return (
		<View className="px-5 mt-6">
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={categories}
				keyExtractor={(item) => item.id as any}
				className="overflow-visible"
				renderItem={({ item }) => {
					const isActive = item.id == activeCategory;
					let activeTextClass = isActive ? "text-white" : "text-gray-700";
					return (
						<TouchableOpacity
							onPress={() => setActiveCategory(item.id)}
							style={{ backgroundColor: isActive ? COLORS.bgLight : "rgba(0,0,0,0.07)" }}
							className="p-4 px-5 mr-2 rounded-full shadow"
						>
							<Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
}
