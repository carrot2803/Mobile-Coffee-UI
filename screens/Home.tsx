import { Avatar, Categories, Cards, Search } from "../components/Home";
import { View, Image, Dimensions, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const { height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function Home() {
	return (
		<View className="flex-1 relative bg-white">
			<StatusBar />
			<Image
				source={require("../assets/images/beansBackground1.png")}
				style={{ height: height * 0.2 }}
				className="w-full absolute -top-5 opacity-10"
			/>
			<SafeAreaView className={ios ? "-mb-8" : ""}>
				<Avatar />
				<Search />
				<Categories />
			</SafeAreaView>
			<Cards />
		</View>
	);
}
