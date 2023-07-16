import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PlusIcon } from "react-native-heroicons/outline";
import { COLORS, dataProps } from "../../constants";

export default function Addbtn({ item }: { item: dataProps }) {
	const nav: any = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => nav.navigate("Product", { ...item })}
			style={btn.s}
			className="p-4 bg-white rounded-full"
		>
			<PlusIcon size="25" strokeWidth={2} color={COLORS.bgDark} />
		</TouchableOpacity>
	);
}

const btn = StyleSheet.create({
	s: { shadowColor: "black", shadowRadius: 40, shadowOffset: { width: -20, height: -10 }, shadowOpacity: 1 },
});
