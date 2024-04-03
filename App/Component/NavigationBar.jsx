import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

export default function NavigationBar() {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.homeImage} source={require("../../assets/images/home.png")} />
            <View style={styles.newTaskSection}>
                <TouchableOpacity>
                    <Image style={styles.newTaskImage} source={require("../../assets/images/plus.png")} />
                </TouchableOpacity>
            </View>
            <Image style={styles.viewTasksImage} source={require("../../assets/images/task.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.PURPLE,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: "100%",
        height: 30,
        paddingVertical: 30,
        paddingHorizontal: 10,
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        bottom: 0,
    },
    homeImage: {
        objectFit: "contain",
        width: 30,
        alignSelf:"center"
    },
    newTaskSection: {
        backgroundColor: Colors.WHITE,
        borderRadius: 50,
        width: 50,
        height: 50,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -15
    },
    newTaskImage: {
        objectFit: "contain",
        width: 15,
    },
    viewTasksImage: {
        objectFit: "contain",
        width: 30,
        alignSelf:"center",
    }
})