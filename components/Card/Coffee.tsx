import { View, Image, Dimensions, Platform, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export const Coffee = ({ img }: any) => (
	<View style={[coffee.main, coffee.offset]} className="flex-row justify-center">
		<Image source={img} className="h-40 w-40" />
	</View>
);

const coffee = StyleSheet.create({
	main: { shadowColor: "black", shadowRadius: 30, marginTop: ios ? -(height * 0.08) : 15 },
	offset: { shadowOffset: { width: 0, height: 40 }, shadowOpacity: 0.8 },
});
