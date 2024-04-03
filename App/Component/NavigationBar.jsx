import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function NavigationBar() {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity activeOpacity={1} style={{ justifyContent: "center" }}>
                <Image style={styles.homeImage} source={require("../../assets/images/blue-home-circle.png")} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={{ justifyContent: "center" }}>
                <View style={styles.newTaskSection}>
                    <Image style={styles.newTaskImage} source={require("../../assets/images/plus.png")} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={{ justifyContent: "center" }}>
                <Image style={styles.viewTasksImage} source={require("../../assets/images/blue-task-list.png")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.BLACKISH,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        height: 30,
        paddingVertical: 30,
        paddingHorizontal: 20,
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        bottom: 0,
    },
    homeImage: {
        objectFit: "contain",
        width: 50,
        alignSelf: "center"
    },
    newTaskSection: {
        backgroundColor: Colors.BLUE,
        borderRadius: 50,
        width: 70,
        height: 70,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -30,
        borderColor: Colors.WHITE,
        borderWidth: 5,
    },
    newTaskImage: {
        objectFit: "contain",
        width: 17,
    },
    viewTasksImage: {
        objectFit: "contain",
        width: 40,
        alignSelf: "center",
    }
})