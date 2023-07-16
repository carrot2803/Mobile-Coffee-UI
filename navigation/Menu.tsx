import { LogBox, View } from "react-native";
import { HomeIcon as Hline, HeartIcon as Hrtline, ShoppingBagIcon as Bline } from "react-native-heroicons/outline";
import { HomeIcon as HSolid, HeartIcon as HrtSolid, ShoppingBagIcon as BSolid } from "react-native-heroicons/solid";
import { COLORS } from "../constants";

LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

export const menuIcons = (route: { name: string }, f: boolean) => {
	let icon;

	if (route.name === "home")
		icon = f ? <HSolid size="30" color={COLORS.bgLight} /> : <Hline size="30" strokeWidth={2} color="white" />;
	else if (route.name === "favourite")
		icon = f ? <HrtSolid size="30" color={COLORS.bgLight} /> : <Hrtline size="30" strokeWidth={2} color="white" />;
	else if (route.name === "cart")
		icon = f ? <BSolid size="30" color={COLORS.bgLight} /> : <Bline size="30" strokeWidth={2} color="white" />;

	let btnClass = f ? "bg-white" : "";
	return <View className={"flex items-center rounded-full p-3 shadow " + btnClass}>{icon}</View>;
};
