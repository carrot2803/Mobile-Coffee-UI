import { View, Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS, dataProps } from "../../constants";
import { Coffee } from "./Coffee";
import Info from "./Info";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function Card({ item }: { item: dataProps }) {
	return (
		<View style={[card.s, card.h]}>
			<Coffee img={item.image} />
			<Info item={item} />
		</View>
	);
}

const card = StyleSheet.create({
	s: { borderRadius: 40, backgroundColor: COLORS.bgDark, width: width * 0.65 },
	h: { height: ios ? height * 0.4 : height * 0.5 },
});
