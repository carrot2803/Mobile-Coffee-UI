import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { COLORS } from "../constants";
import Home from "../screens/Home";
import { menuIcons } from "./Menu";

const Tab = createBottomTabNavigator();
const ios = Platform.OS == "ios";

export function HomeTabs() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarIcon: ({ focused }) => menuIcons(route, focused),
				tabBarStyle: {
					marginBottom: 20,
					height: 75,
					alignItems: "center",
					borderRadius: 100,
					marginHorizontal: 20,
					backgroundColor: COLORS.bgLight,
				},
				tabBarItemStyle: { marginTop: ios ? 30 : 0 },
			})}
		>
			<Tab.Screen name="home" component={Home} />
			<Tab.Screen name="favourite" component={Home} />
			<Tab.Screen name="cart" component={Home} />
		</Tab.Navigator>
	);
}
