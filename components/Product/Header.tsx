import { View, TouchableOpacity, Image, Platform, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { COLORS } from "../../constants";
const ios = Platform.OS == "ios";

export const Header = ({ image }: any) => {
	const nav = useNavigation();
	return (
		<>
			<View className="mx-4 flex-row justify-between items-center">
				<TouchableOpacity className=" rounded-full " onPress={() => nav.goBack()}>
					<ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
				</TouchableOpacity>
				<TouchableOpacity className=" rounded-full border-2 border-white p-2">
					<HeartIcon size="24" color="white" />
				</TouchableOpacity>
			</View>
			<View style={s.img} className="flex-row justify-center">
				<Image source={image} className="h-60 w-60" style={{ marginTop: ios ? 0 : 40 }} />
			</View>
		</>
	);
};

const s = StyleSheet.create({
	img: { shadowColor: COLORS.bgDark, shadowRadius: 30, shadowOffset: { width: 0, height: 30 }, shadowOpacity: 0.9 },
});
