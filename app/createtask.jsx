import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native'
import Colors from './Utils/Colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';

export default function CreateTask() {
    const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(false);
    const [dateTimeValue, setDateTimeValue] = useState(new Date())
    const { height, width } = useWindowDimensions();

    const showDatePicker = () => {
        setDateTimePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDateTimePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDateTimeValue(date)
        console.warn("selected date: ", dateTimeValue)
        hideDatePicker();
    };

    return (
        <View style={{ padding: 10, height: height }}>
            <StatusBar style="dark" />
            <View style={styles.themeIdentifier}></View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.header}>Create New Task</Text>
                <View style={styles.wrapper}>
                    <View>
                        <Text style={styles.taskName}>Task Name</Text>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.writeTaskWrapper} >
                            <TextInput style={styles.input} placeholder={"Input your task name"} placeholderTextColor="grey" />
                        </KeyboardAvoidingView>
                    </View>

                    <View>
                        <Text style={styles.subTaskName}>Sub Task(s)</Text>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.writeTaskWrapper} >
                            <TextInput style={styles.input} placeholder={"Input your sub task"} placeholderTextColor="grey" />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.writeTaskWrapper} >
                            <TextInput style={styles.input} placeholder={"Input your sub task"} placeholderTextColor="grey" />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.writeTaskWrapper} >
                            <TextInput style={styles.input} placeholder={"Input your sub task"} placeholderTextColor="grey" />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.writeTaskWrapper} >
                            <TextInput style={styles.input} placeholder={"Input your sub task"} placeholderTextColor="grey" />
                        </KeyboardAvoidingView>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles.writeTaskWrapper} >
                            <TextInput style={styles.input} placeholder={"Input your sub task"} placeholderTextColor="grey" />
                        </KeyboardAvoidingView>

                        <TouchableOpacity style={{ width: "25%" }}>
                            <Text style={styles.addSubTask}>Add Sub Task</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={[styles.selectTimeTitle, styles.taskName]}>Select Time and Date</Text>
                        <View style={styles.dateTime}>
                            <Text style={styles.dateTimeValue}>{dateTimeValue ? dateTimeValue.toTimeString : "2025-09-06 12:15 AM"}</Text>
                            <TouchableOpacity activeOpacity={1} onPress={showDatePicker}>
                                <Image style={styles.calenderImage} source={require("../assets/images/calender.png")} />
                            </TouchableOpacity>
                        </View>

                        <DateTimePickerModal
                            isVisible={isDateTimePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                            themeVariant="dark"
                        // positiveButton={{label: 'OK', textColor: 'green'}}
                        />
                    </View>

                    <View>
                        <Text style={[styles.taskDescription, styles.taskName]}>Description</Text>
                        {/* <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.writeTaskWrapper} > */}
                        <TextInput multiline={true} numberOfLines={10} placeholder={"Input your task description..."}
                            placeholderTextColor="grey" style={[styles.input, styles.descriptionInput]} />
                        {/* </KeyboardAvoidingView> */}
                    </View>

                    {/* select theme */}
                    <View>
                        <Text style={[styles.taskDescription, styles.taskName]}>Select Theme</Text>
                        <View style={styles.themeContainer}>
                            {/* purple theme */}
                            <TouchableOpacity>
                                <View style={styles.purpleTheme}></View>
                            </TouchableOpacity>
                            {/* yellow theme */}
                            <TouchableOpacity>
                                <View style={styles.yellowTheme}></View>
                            </TouchableOpacity>
                            {/* blue theme */}
                            <TouchableOpacity>
                                <View style={styles.blueTheme}></View>
                            </TouchableOpacity>
                            {/* green theme */}
                            <TouchableOpacity>
                                <View style={styles.greenTheme}></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* divider */}
                <View style={{ marginVertical: 20 }}></View>

                <TouchableOpacity style={styles.createTask} activeOpacity={0.7}>
                    <Text style={styles.createTaskButton}>Create Task</Text>
                </TouchableOpacity>
            </ScrollView>
            {/* <TouchableOpacity style={styles.createTask} activeOpacity={0.7}>
                <Text style={styles.createTaskButton}>Create Task</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    themeIdentifier: {
        height: 5,
        backgroundColor: Colors.PURPLE,
        marginBottom: 10,
        borderRadius: 10,
    },
    header: {
        color: Colors.BLACKISH,
        fontFamily: "outfit-medium",
        fontSize: 25,
    },
    wrapper: {
        marginTop: 20,
    },
    taskName: {
        fontFamily: "outfit",
        fontSize: 20,
        color: Colors.BLACKISH
    },
    input: {
        marginTop: 10,
        borderColor: Colors.GRAY,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: "100%",
        color: Colors.BLACKISH,
        fontSize: 15,
    },
    subTaskName: {
        fontFamily: "outfit",
        fontSize: 20,
        color: Colors.BLACKISH,
        marginTop: 10,
    },
    addSubTask: {
        marginTop: 10,
        fontFamily: "outfit",
        color: Colors.BLUE,
    },
    selectTimeTitle: {
        marginTop: 10,
    },
    dateTime: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        borderColor: Colors.GRAY,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: "100%",
        color: Colors.BLACKISH
    },
    dateTimeValue: {
        alignSelf: "center",
        fontSize: 15,
        color: Colors.BLACKISH,
    },
    calenderImage: {
        objectFit: "contain",
        width: 30,
        height: 30,
        paddingRight: 70,
    },
    taskDescription: {
        marginTop: 10,
    },
    descriptionInput: {
        height: 150,
        textAlignVertical: "top"
    },
    createTask: {
        backgroundColor: Colors.BLUE,
        borderRadius: 15,
        padding: 15,
        // position: "absolute",
        // bottom: 50,
        width: "100%",
        // marginLeft: 10,
        marginBottom: 10
    },
    createTaskButton: {
        color: Colors.WHITE,
        textAlign: "center",
        fontFamily: "outfit-medium",
        fontSize: 15
    },
    themeContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 7,
        flexWrap: "wrap",
        marginTop: 10,
    },
    purpleTheme: {
        backgroundColor: Colors.PURPLE,
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    yellowTheme: {
        backgroundColor: Colors.YELLOW,
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    blueTheme: {
        backgroundColor: Colors.BLUE,
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    greenTheme: {
        backgroundColor: "green",
        width: 40,
        height: 40,
        borderRadius: 50,
    },
})