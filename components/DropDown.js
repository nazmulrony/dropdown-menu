import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const DropDown = () => {
    const items = ["item-1", "item-2", "item-3", "item-4", "item-5"];
    const [selected, setSelected] = useState(items[0]);
    const [itemsIsVisible, setItemsIsVisible] = useState(false);

    const selectItemHandler = (item) => {
        setSelected(item);
        setItemsIsVisible(false);
    };
    return (
        <View>
            <Pressable
                style={styles.itemContainer}
                onPress={() =>
                    setItemsIsVisible(() => setItemsIsVisible(!itemsIsVisible))
                }
            >
                <TextInput style={styles.item} value={selected} />
                <AntDesign name="caretdown" size={12} color="black" />
            </Pressable>
            <View>
                {itemsIsVisible &&
                    items.map((item, index) => (
                        <View style={styles.selectItem} key={index}>
                            <Pressable
                                onPress={() => selectItemHandler(item)}
                                android_ripple={{ color: "#F6F8FA" }}
                            >
                                <Text style={styles.itemText}>{item}</Text>
                            </Pressable>
                        </View>
                    ))}
            </View>
        </View>
    );
};

export default DropDown;
const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
    },
    item: {
        marginRight: 8,
    },
    selectItem: {
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#F6F8FA",
    },
    itemText: {
        padding: 4,
    },
});
