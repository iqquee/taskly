import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Utils/Colors';
import NavigationBar from "../../Component/NavigationBar"
import { Link } from 'expo-router'
import mockTaskData from '../../Utils/mockData'
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
    const [taskDropDownDisplay, setTaskDropDownDisplay] = useState("none")
    const [taskDropDownDisplayID, setTaskDropDownDisplayID] = useState(0)

    const showTaskDropDown = (taskID) => {
        if (taskDropDownDisplay === "none") {
            setTaskDropDownDisplay("flex")
            setTaskDropDownDisplayID(taskID)
        } else {
            setTaskDropDownDisplay("none")
            setTaskDropDownDisplayID(0)
        }
    }

    return (
        <View>
            <StatusBar style="dark" />
            <ScrollView style={{ padding: 10 }} showsVerticalScrollIndicator={false}>
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

                {/* ongoing div*/}
                <View style={styles.ongoingSection}>
                    <Text style={styles.ongoingText}>Ongoing</Text>
                    <TouchableOpacity style={{ alignSelf: "center" }}>
                        <Link href="tasklist" style={styles.viewAllText}>View all</Link>
                    </TouchableOpacity>
                </View>
                {/* ongoing ends*/}

                {/* task list div*/}
                <View>
                    {mockTaskData.map((taskList) => (
                        <View style={styles.taskSection}>
                            <View style={styles.taskPrioritySection}>
                                {
                                    taskList.priority === "low" &&
                                    <Text style={[styles.taskPriorityName, {  backgroundColor: "green",}]}>{taskList.priority}</Text>  
                                }
                                {
                                    taskList.priority === "meduim" &&
                                    <Text style={[styles.taskPriorityName, {  backgroundColor: Colors.YELLOW,}]}>{taskList.priority}</Text>  
                                }
                                {
                                    taskList.priority === "high" &&
                                    <Text style={[styles.taskPriorityName, {  backgroundColor: "red",}]}>{taskList.priority}</Text>  
                                }
                                <View style={styles.taskPercentageSection}>
                                    <Text style={styles.taskPercentage}>{taskList.percentage}</Text>
                                    <Text style={styles.percentage}>%</Text>
                                </View>
                            </View>

                            <Text style={styles.taskTitle}>{taskList.title}</Text>
                            {/* sub tasks */}
                            {taskDropDownDisplayID == taskList.id
                                &&
                                <View style={{ display: taskDropDownDisplay }}>
                                    {taskList.subTasks.map((subTask) => (
                                        <View style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}>
                                            <TouchableOpacity>
                                                {subTask.isDone
                                                    ? <Image style={[styles.taskClockImage, { width: 25, height: 25 }]} source={require("../../../assets/images/completed-task.png")} />
                                                    : <Image style={[styles.taskClockImage, { width: 25, height: 25 }]} source={require("../../../assets/images/pending-task.png")} />
                                                }
                                            </TouchableOpacity>
                                            <Text style={{ alignSelf: "center", fontSize: 18, fontFamily: "outfit" }}>{subTask.title}</Text>
                                        </View>
                                    ))}
                                    {/* divider */}
                                    <View style={{ marginBottom: 15 }}></View>
                                </View>
                            }
                            {/* sub tasks ends */}

                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <View>
                                    <View style={styles.taskTimeSection}>
                                        <Image style={styles.taskClockImage} source={require("../../../assets/images/time1.png")} />
                                        <Text style={styles.taskClockTime}>{taskList.time}</Text>
                                    </View>

                                    <View style={styles.taskDateSection}>
                                        <Image style={styles.taskCalander} source={require("../../../assets/images/calender.png")} />
                                        <Text style={styles.taskDueDate}>{taskList.date}</Text>
                                    </View>
                                </View>

                                {/* dropdown icon */}
                                <View style={{ alignSelf: "center" }}>
                                    <TouchableOpacity onPress={() => showTaskDropDown(taskList.id)}>
                                        <Image style={styles.taskCalander} source={require("../../../assets/images/dropdown.png")} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    ))}

                </View>

                <View style={{ marginVertical: 40 }}></View>
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
        backgroundColor: Colors.BLUE,
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
    viewAllText: {
        color: Colors.PURPLE,
        fontSize: 18,
        fontFamily: "outfit",
    },
    taskSection: {
        backgroundColor: Colors.WHITE,
        width: "100%",
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
        borderColor: Colors.PURPLE,
        borderWidth: 2
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
        padding: 5,
        borderRadius: 10,
    },
    taskPercentageSection: {
        display: "flex",
        flexDirection: "row"
    },
    taskPercentage: {
        color: Colors.BLACKISH,
        fontFamily: "poppins-medium",
        alignSelf: "center",
        fontSize: 18
    },
    percentage: {
        fontFamily: "poppins-semi-bold",
        fontSize: 25,
        color: Colors.BLACKISH
    },
    taskTitle: {
        color: Colors.BLACKISH,
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
        color: Colors.BLACKISH,
        marginLeft: 3,
        fontSize: 15,
        fontFamily: "outfit",
        alignSelf: "center"
    },
    taskDateSection: {
        display: "flex",
        flexDirection: "row",
        marginTop: 5
    },
    taskCalander: {
        objectFit: "contain",
        width: 20,
        height: 20,
        alignSelf: "center"
    },
    taskDueDate: {
        color: Colors.BLACKISH,
        marginLeft: 3,
        fontSize: 15,
        fontFamily: "outfit",
        alignSelf: "center"
    }
})