import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, Image, TouchableOpacity } from 'react-native'
import Colors from './Utils/Colors';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useState } from "react";

export default function CreateTask() {
    const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(false);
    const [dateTimeValue, setDateTimeValue] = useState("")
    
    const showDatePicker = () => {
        setDateTimePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDateTimePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDateTimeValue(date)
        hideDatePicker();
    };

    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.header}>Create New Task</Text>
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.taskName}>Task Name</Text>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.writeTaskWrapper} >
                        <TextInput style={styles.input} placeholder={"input your task name"} />
                    </KeyboardAvoidingView>
                </View>

                <View>
                    <Text style={[styles.selectTimeTitle, styles.taskName]}>Select Time and Date</Text>
                    <View style={styles.dateTime}>
                        <Text style={styles.dateTimeValue}>2024-04/03  10:59AM</Text>
                        <TouchableOpacity activeOpacity={1} onPress={showDatePicker}>
                            <Image style={styles.calenderImage} source={require("../assets/images/calender.png")} />
                        </TouchableOpacity>
                    </View>
                    
                    <DateTimePickerModal
                        isVisible={isDateTimePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    // positiveButton={{label: 'OK', textColor: 'green'}}
                    />
                </View>

                <View>
                    <Text style={[styles.taskDescription, styles.taskName]}>Description</Text>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.writeTaskWrapper} >
                        <TextInput multiline={true} style={styles.input} placeholder={"input your task name"} />
                    </KeyboardAvoidingView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 20
    },
    input: {
        marginTop: 5,
        borderBottomColor: Colors.BLACKISH,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: "100%",
        color: Colors.BLACKISH,
        fontSize: 15
    },
    selectTimeTitle: {
        marginTop: 10,
    },
    dateTime: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
        borderBottomColor: Colors.BLACKISH,
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
    }
})