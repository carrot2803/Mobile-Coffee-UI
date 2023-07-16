import { View, Dimensions, Platform } from "react-native";
import { data, dataProps } from "../../constants";
import Carousel from "react-native-snap-carousel";
import Card from "../Card";

const { width } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function Cards() {
	return (
		<View className={`overflow-visible flex justify-center flex-1 ${ios ? "mt-10" : ""}`}>
			<View>
				{/* @ts-ignore */}
				<Carousel
					containerCustomStyle={{ overflow: "visible" }}
					data={data}
					renderItem={({ item }: { item: any }) => <Card item={item} />}
					firstItem={1}
					loop={true}
					inactiveSlideScale={0.75}
					inactiveSlideOpacity={0.75}
					sliderWidth={width}
					itemWidth={width * 0.63}
					slideStyle={{ display: "flex", alignItems: "center" }}
				/>
			</View>
		</View>
	);
}
