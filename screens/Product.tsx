import { View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Body, Footer } from "../components/Product";

export default function Product(props: any) {
	const item = props.route.params;
	return (
		<View className="flex-1">
			<StatusBar style="light" />
			<Image
				source={require("../assets/images/beansBackground2.png")}
				style={{ height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
				className="w-full absolute"
			/>
			<Body image={item.image} stars={item.stars} name={item.name} price={item.price} desc={item.desc} />
			<Footer volume={item.volume} />
		</View>
	);
}
