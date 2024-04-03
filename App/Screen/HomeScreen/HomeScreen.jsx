import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors';
import NavigationBar from "../../Component/NavigationBar"

export default function HomeScreen() {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                    <View style={styles.secondGrid}>
                        <View style={styles.completedTaskSection}>
                            <Image style={styles.clockImage} source={require("../../../assets/images/clock.png")} />
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
                {/* <View style={{ backgroundColor: Colors.PINK, width: "100%", height: 10 }}></View> */}

                {/* ongoing div*/}
                <View style={styles.ongoingSection}>
                    <Text style={styles.ongoingText}>Ongoing</Text>
                    <TouchableOpacity style={{ alignSelf: "center" }}>
                        <Text style={styles.seeAllText}>See all</Text>
                    </TouchableOpacity>

                </View>
                {/* ongoing ends*/}

                {/* task list div*/}
                <View>
                    <View style={styles.taskSection}>
                        <View style={styles.taskPrioritySection}>
                            <Text style={styles.taskPriorityName}>Medium</Text>
                            <View style={styles.taskPercentageSection}>
                                <Text style={styles.taskPercentage}>82</Text>
                                <Text style={styles.percentage}>%</Text>
                            </View>
                        </View>

                        <Text style={styles.taskTitle}>Salon App Wireframe</Text>
                        <View style={styles.taskTimeSection}>
                            <Image style={styles.taskClockImage} source={require("../../../assets/images/time1.png")} />
                            <Text style={styles.taskClockTime}>10:45 AM</Text>
                        </View>

                        <View style={styles.taskDateSection}>
                            <Image style={styles.taskCalander} source={require("../../../assets/images/calender.png")} />
                            <Text style={styles.taskDueDate}>Monday, April 8</Text>
                        </View>
                    </View>

                    <View style={styles.taskSection}>
                        <View style={styles.taskPrioritySection}>
                            <Text style={styles.taskPriorityName}>Medium</Text>
                            <View style={styles.taskPercentageSection}>
                                <Text style={styles.taskPercentage}>82</Text>
                                <Text style={styles.percentage}>%</Text>
                            </View>
                        </View>

                        <Text style={styles.taskTitle}>Build a task management app</Text>
                        <View style={styles.taskTimeSection}>
                            <Image style={styles.taskClockImage} source={require("../../../assets/images/time1.png")} />
                            <Text style={styles.taskClockTime}>10:45 AM</Text>
                        </View>

                        <View style={styles.taskDateSection}>
                            <Image style={styles.taskCalander} source={require("../../../assets/images/calender.png")} />
                            <Text style={styles.taskDueDate}>Monday, April 8</Text>
                        </View>
                    </View>

                    <View style={styles.taskSection}>
                        <View style={styles.taskPrioritySection}>
                            <Text style={styles.taskPriorityName}>Medium</Text>
                            <View style={styles.taskPercentageSection}>
                                <Text style={styles.taskPercentage}>82</Text>
                                <Text style={styles.percentage}>%</Text>
                            </View>
                        </View>

                        <Text style={styles.taskTitle}>Graphics design for client</Text>
                        <View style={styles.taskTimeSection}>
                            <Image style={styles.taskClockImage} source={require("../../../assets/images/time1.png")} />
                            <Text style={styles.taskClockTime}>10:45 AM</Text>
                        </View>

                        <View style={styles.taskDateSection}>
                            <Image style={styles.taskCalander} source={require("../../../assets/images/calender.png")} />
                            <Text style={styles.taskDueDate}>Monday, April 8</Text>
                        </View>
                    </View>
                </View>
                
                <View style={{marginVertical:30}}></View>
                {/* task list ends*/}
            </ScrollView>
            <NavigationBar />
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
        color: Colors.BLACKISH
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
        justifyContent: "center",
    },
    goodMarker: {
        width: "50%",
        alignItems: "center",
        backgroundColor: Colors.WHITE,
        borderRadius: 20,
        padding: 10,
    },
    firstGridImage: {
        objectFit: "contain",
        width: 50,
        height: 50,
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
    secondGrid: {
        width: "48%",
    },
    completedTaskSection: {
        backgroundColor: Colors.YELLOW,
        width: "100%",
        padding: 15,
        borderRadius: 20,
        height: 100,
        justifyContent: "center",
    },
    clockImage: {
        objectFit: "contain",
        width: 60,
        height: 60,
        position: "absolute",
        right: 5,
        top: -30
    },
    completedTaskNumber: {
        color: Colors.WHITE,
        fontFamily: "outfit-medium",
        fontSize: 50,
    },
    completedTaskText: {
        color: Colors.WHITE,
        fontFamily: "outfit-bold",
        position: "absolute",
        bottom: 10,
        left: 40,
    },
    availableTaskSection: {
        backgroundColor: Colors.PINK,
        width: "100%",
        padding: 15,
        borderRadius: 20,
        height: 100,
        justifyContent: "center",
        marginTop: 10
    },
    availableTaskNumber: {
        color: Colors.WHITE,
        fontFamily: "outfit-medium",
        fontSize: 50,
    },
    availableTaskText: {
        color: Colors.WHITE,
        fontFamily: "outfit-bold",
        position: "absolute",
        bottom: 10,
        left: 40,
    },
    ongoingSection: {
        marginVertical: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    ongoingText: {
        fontSize: 27,
        color: Colors.BLACKISH,
        fontFamily: "outfit-medium",
    },
    seeAllText: {
        color: Colors.PURPLE,
        fontSize: 18,
        fontFamily: "outfit",
    },
    taskSection: {
        backgroundColor: Colors.BLUE,
        width: "100%",
        padding: 15,
        borderRadius: 20,
        marginBottom: 10
    },
    taskPrioritySection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    taskPriorityName: {
        color: Colors.WHITE,
        fontFamily: "outfit",
        alignSelf: "center",
        backgroundColor: Colors.GREENISH,
        padding: 5,
        borderRadius: 10,
    },
    taskPercentageSection: {
        display: "flex",
        flexDirection: "row"
    },
    taskPercentage: {
        color: Colors.WHITE,
        fontFamily: "outfit",
        alignSelf: "center",
        fontSize: 18
    },
    percentage: {
        color: Colors.WHITE,
        fontFamily: "outfit-bold",
        fontSize: 25,
    },
    taskTitle: {
        color: Colors.WHITE,
        fontFamily: "outfit-medium",
        fontSize: 20,
        marginTop: 5
    },
    taskTimeSection: {
        display: "flex",
        flexDirection: "row",
        marginTop: 3,
    },
    taskClockImage: {
        objectFit: "contain",
        width: 20,
        height: 20,
        alignSelf: "center"
    },
    taskClockTime: {
        color: Colors.WHITE,
        marginLeft: 3,
        fontSize: 15,
        fontFamily: "outfit",
        alignSelf: "center"
    },
    taskDateSection: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15
    },
    taskCalander: {
        objectFit: "contain",
        width: 20,
        height: 20,
        alignSelf: "center"
    },
    taskDueDate: {
        color: Colors.WHITE,
        marginLeft: 3,
        fontSize: 15,
        fontFamily: "outfit",
        alignSelf: "center"
    }
})