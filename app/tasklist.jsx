import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from './Utils/Colors';

export default function tasklist() {
    return (
        <View>
            <ScrollView style={{ paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                {/* ongoing div*/}
                <View style={styles.ongoingSection}>
                    <Text style={styles.ongoingText}>Ongoing Task(s)</Text>
                </View>
                {/* ongoing ends*/}

                {/* ongoing task list div*/}
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
                            <Image style={styles.taskClockImage} source={require("../assets/images/time1.png")} />
                            <Text style={styles.taskClockTime}>10:45 AM</Text>
                        </View>

                        <View style={styles.taskDateSection}>
                            <Image style={styles.taskCalander} source={require("../assets/images/calender.png")} />
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
                            <Image style={styles.taskClockImage} source={require("../assets/images/time1.png")} />
                            <Text style={styles.taskClockTime}>10:45 AM</Text>
                        </View>

                        <View style={styles.taskDateSection}>
                            <Image style={styles.taskCalander} source={require("../assets/images/calender.png")} />
                            <Text style={styles.taskDueDate}>Monday, April 8</Text>
                        </View>
                    </View>

                    <View style={[styles.taskSection, styles.ongoingExp]}>
                        <View style={styles.taskPrioritySection}>
                            <Text style={styles.taskPriorityName}>Medium</Text>
                            <View style={styles.taskPercentageSection}>
                                <Text style={styles.taskPercentage}>82</Text>
                                <Text style={styles.percentage}>%</Text>
                            </View>
                        </View>

                        <Text style={styles.taskTitle}>Graphics design for client</Text>
                        <View style={styles.taskTimeSection}>
                            <Image style={styles.taskClockImage} source={require("../assets/images/time1.png")} />
                            <Text style={styles.taskClockTime}>10:45 AM</Text>
                        </View>

                        <View style={styles.taskDateSection}>
                            <Image style={styles.taskCalander} source={require("../assets/images/calender.png")} />
                            <Text style={styles.taskDueDate}>Monday, April 8</Text>
                        </View>
                    </View>
                </View>
                {/* ongoing task list ends*/}


                {/* completed tasks div*/}
                <View style={styles.ongoingSection}>
                    <Text style={styles.ongoingText}>Completed Task(s)</Text>
                </View>
                {/* completed tasks ends*/}

                {/* completed task list div*/}
                <View>
                    <View style={styles.completedTaskSection}>
                        <View style={styles.taskPrioritySection}>
                            <Text style={styles.taskPriorityName}>High</Text>
                            <View style={styles.taskPercentageSection}>
                                <Text style={styles.taskPercentage}>82</Text>
                                <Text style={styles.percentage}>%</Text>
                            </View>
                        </View>

                        <Text style={styles.taskTitle}>Salon App Wireframe</Text>
                        <View style={styles.taskTimeSection}>
                            <Image style={styles.taskClockImage} source={require("../assets/images/time1.png")} />
                            <Text style={styles.taskClockTime}>10:45 AM</Text>
                        </View>

                        <View style={styles.taskDateSection}>
                            <Image style={styles.taskCalander} source={require("../assets/images/calender.png")} />
                            <Text style={styles.taskDueDate}>Monday, April 8</Text>
                        </View>
                    </View>

                    <View style={styles.completedTaskSection}>
                        <View style={styles.taskPrioritySection}>
                            <Text style={styles.taskPriorityName}>Medium</Text>
                            <View style={styles.taskPercentageSection}>
                                <Text style={styles.taskPercentage}>82</Text>
                                <Text style={styles.percentage}>%</Text>
                            </View>
                        </View>

                        <Text style={styles.taskTitle}>Build a task management app</Text>
                        <View style={styles.taskTimeSection}>
                            <Image style={styles.taskClockImage} source={require("../assets/images/time1.png")} />
                            <Text style={styles.taskClockTime}>10:45 AM</Text>
                        </View>

                        <View style={styles.taskDateSection}>
                            <Image style={styles.taskCalander} source={require("../assets/images/calender.png")} />
                            <Text style={styles.taskDueDate}>Monday, April 8</Text>
                        </View>
                    </View>

                    <View style={styles.completedTaskSection}>
                        <View style={styles.taskPrioritySection}>
                            <Text style={styles.taskPriorityName}>Medium</Text>
                            <View style={styles.taskPercentageSection}>
                                <Text style={styles.taskPercentage}>82</Text>
                                <Text style={styles.percentage}>%</Text>
                            </View>
                        </View>

                        <Text style={styles.taskTitle}>Graphics design for client</Text>
                        <View style={styles.taskTimeSection}>
                            <Image style={styles.taskClockImage} source={require("../assets/images/time1.png")} />
                            <Text style={styles.taskClockTime}>10:45 AM</Text>
                        </View>

                        <View style={styles.taskDateSection}>
                            <Image style={styles.taskCalander} source={require("../assets/images/calender.png")} />
                            <Text style={styles.taskDueDate}>Monday, April 8</Text>
                        </View>
                    </View>
                </View>
                {/* completed task list ends*/}

                <View style={{ marginVertical: 15 }}></View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    completedTaskSection: {
        backgroundColor: Colors.PURPLE,
        width: "100%",
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
    },
    ongoingSection: {
        marginVertical: 10,
    },
    ongoingText: {
        fontSize: 27,
        color: Colors.BLACKISH,
        fontFamily: "outfit-medium",
    },
    taskSection: {
        backgroundColor: "green",
        width: "100%",
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
    },
    ongoingExp: {
        backgroundColor: Colors.YELLOW,
    },
    taskPrioritySection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    taskPriorityName: {
        color: Colors.BLACKISH,
        fontFamily: "outfit",
        alignSelf: "center",
        backgroundColor: Colors.WHITE,
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
        fontFamily: "poppins-medium",
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