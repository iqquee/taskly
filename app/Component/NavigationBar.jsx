import { View, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { Link } from 'expo-router';


export default function NavigationBar() {
    return (
        <View style={styles.wrapper}>
            <Link href="createtask" asChild>
                <TouchableOpacity activeOpacity={1} style={{ alignSelf: "center" }}>
                    <View style={styles.newTaskSection}>
                        <Text style={styles.newTaskImage}>+</Text>
                    </View>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: Colors.PURPLE,
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
    newTaskSection: {
        backgroundColor: Colors.PURPLE,
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
        // objectFit: "contain",
        width: 17,
        textAlign: "center",
        fontSize: 35,
        color: Colors.WHITE
    },
})