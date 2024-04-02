import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';

export default function HomeScreen() {
    return (
        <View>
            <Text style={styles.welcomeBack}>Welcome Back!!!</Text>
            <Text style={styles.manageDailyTask}>Manage Your Daily Task</Text>

            <View style={styles.overview}>
                {/* first div */}
                <View style={styles.firstGrid}>
                    <View style={styles.goodMarker}>
                        <Image style={styles.firstGridImage} source={require("../../../assets/images/good1.png")} />
                    </View>
                    <Text style={styles.firstGridTaskName}>App Branding Redesign</Text>
                    <View style={styles.firstGridSubTaskSection}>
                        <Image style={styles.firstGridTaskListImage} source={require("../../../assets/images/task-list-icon.png")} />
                        <Text style={styles.numberOfCompletedSubTasks}>10 sub task(s)</Text>
                    </View>
                </View>
                {/* first div ends */}

                {/* second div */}
                <View style={styles.completedTaskSection}>
                    <View >
                        <View>
                            <Image style={styles.clockImage} source={require("../../../assets/images/clock.png")} />
                        </View>
                        <View >
                            <Text style={styles.completedTaskNumber}>15</Text>
                            <Text style={styles.completedTaskText}>Completed</Text>
                        </View>
                    </View>

                    <View style={styles.availableTaskSection}>
                        <View >
                            <Text style={styles.availableTaskNumber}>15</Text>
                            <Text style={styles.availableTaskText}>Available</Text>
                        </View>
                    </View>
                </View>
                {/* second div ends */}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    welcomeBack: {
        color: Colors.GRAY,
        fontSize: 18,
        fontFamily: "outfit"
    },
    manageDailyTask: {
        fontSize: 35,
        width: "60%",
        fontFamily: "outfit-medium",
    },
    overview: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        justifyContent: "space-between"
    },
    firstGrid: {
        backgroundColor: Colors.PURPLE,
        width: "48%",
        padding: 15,
        borderRadius: 20,
    },
    goodMarker: {
        width: "60%",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        borderRadius: 20,
        padding: 10,
    },
    firstGridImage: {
        objectFit: "contain",
        width: 60,
        height: 60,
    },
    firstGridTaskName: {
        marginTop: 20,
        color: Colors.WHITE,
        fontFamily: "outfit-medium",
        fontSize: 23,
    },
    firstGridSubTaskSection: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    firstGridTaskListImage: {
        objectFit: "contain",
        width: 15,
        height: 15,
    },
    numberOfCompletedSubTasks: {
        color: Colors.WHITE,
        marginLeft: 5,
        fontSize: 14,
    },
    completedTaskSection: {
        backgroundColor: Colors.YELLOW,
        width: "48%",
        padding: 15,
        borderRadius: 20,
        height: 85
    },
    clockImage: {
        objectFit: "contain",
        width: 60,
        height: 60,
        position: "absolute",
        right: -5,
        top: -40
    },
    completedTaskNumber: {
        color: Colors.WHITE,
        fontFamily: "outfit-medium",
        fontSize: 50,
    },
    completedTaskText: {
        color: Colors.WHITE,
        fontFamily: "outfit-medium",
        position: "absolute",
        bottom: 10,
        left: 40,
    },
    availableTaskSection: {
        backgroundColor: Colors.BLUE,
        width: "48%",
        padding: 15,
        borderRadius: 20,
        height: 85,
        marginTop: 15
    },
    availableTaskNumber: {
        color: Colors.WHITE,
        fontFamily: "outfit-medium",
        fontSize: 50,
    },
    availableTaskText: {
        color: Colors.WHITE,
        fontFamily: "outfit-medium",
        position: "absolute",
        bottom: 10,
        left: 40,
    }
})