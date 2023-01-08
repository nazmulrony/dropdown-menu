import { StyleSheet, View } from "react-native";
import DropDown from "./components/DropDown";

export default function App() {
    return (
        <View style={styles.container}>
            <DropDown />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
