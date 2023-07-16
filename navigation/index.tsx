import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "../screens/Product";
import { HomeTabs } from "./Tabs";

const Stack = createNativeStackNavigator();

export default function Nav() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: "white" } }}>
				<Stack.Screen name="Home" options={{ headerShown: false }} component={HomeTabs} />
				<Stack.Screen name="Product" options={{ headerShown: false }} component={Product} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
