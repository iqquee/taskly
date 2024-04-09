import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from './Utils/Colors';

export default function tasklist() {
    return (
        <View>
            <ScrollView style={{ padding: 10 }} showsVerticalScrollIndicator={false}>
                
                {/* completed tasks div*/}
                <View style={styles.ongoingSection}>
                    <Text style={styles.ongoingText}>Completed Task(s)</Text>
                </View>
                {/* completed tasks ends*/}

                {/* completed task list div*/}
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
                            <Image style={styles.taskClockImage} source={require("../assets/images/time1.png")} />
                            <Text style={styles.taskClockTime}>10:45 AM</Text>
                        </View>

                        <View style={styles.taskDateSection}>
                            <Image style={styles.taskCalander} source={require("../assets/images/calender.png")} />
                            <Text style={styles.taskDueDate}>Monday, April 8</Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginVertical: 40 }}></View>
                {/* ongoing task list ends*/}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    ongoingSection: {
        marginVertical: 10,
    },
    ongoingText: {
        fontSize: 27,
        color: Colors.BLACKISH,
        fontFamily: "outfit-medium",
    },
    taskSection: {
        backgroundColor: Colors.BLACKISH,
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
        backgroundColor: Colors.BLUE,
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