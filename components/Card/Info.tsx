import { View, Text, Platform, StyleSheet } from "react-native";
import { COLORS, dataProps } from "../../constants";
import { CText } from "./CText";
import Addbtn from "./Addbtn";
const ios = Platform.OS == "ios";

export default function Info({ item }: { item: dataProps }) {
	return (
		<View className={`px-5 flex-1 justify-between ${ios ? "mt-5" : ""}`}>
			<CText name={item.name} stars={item.stars} volume={item.volume} />
			<View style={[info.m2, info.color]} className="flex-row justify-between items-center mb-5">
				<Text className="text-white font-bold text-lg">$ {item.price}</Text>
				<Addbtn item={item} />
			</View>
		</View>
	);
}

const info = StyleSheet.create({
	color: { backgroundColor: ios ? COLORS.bgDark : "transparent" },
	m2: { shadowColor: COLORS.bgDark, shadowRadius: 25, shadowOffset: { width: 0, height: 40 }, shadowOpacity: 0.8 },
});
