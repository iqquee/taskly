import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Color from "../../Utils/Colors"
import { useFonts } from 'expo-font';
import Colors from '../../Utils/Colors';

export default function HomeScreen() {
    return (
        <View>
            <View>
                <Text style={{
                    color: Color.GRAY,
                    fontSize: 18,
                    fontFamily: "outfit"
                    }}>
                        Welcome Back!!!
                    </Text>
            </View>
            <View>
                <Text style={{
                    fontSize: 35,
                    width: "60%",
                    fontFamily:"outfit-medium",
                }}>
                    Manage Your Daily Task
                </Text>
            </View>

            <View style={styles.colonList}>
                {/* first div */}
                <View style={{
                    backgroundColor: Colors.PURPLE,
                    width: "48%",
                    padding: 15,
                    borderRadius: 20,
                }}>
                    <View style={{
                            width: "60%",
                            alignItems: "center",
                            backgroundColor: Color.WHITE,
                            borderRadius: 20,
                            padding: 10,
                        }}>
                            <Image source={require("../../../assets/images/good1.png")}
                                style={{
                                    objectFit: "contain",
                                    width: 60,
                                    height:60,
                                }}
                            />
                    </View> 

                    <Text style={{
                        marginTop: 20,
                        color: Colors.WHITE,
                        fontFamily: "outfit-medium",
                        fontSize: 23,
                    }}>
                        App Branding Redesign
                    </Text>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Image source={require("../../../assets/images/task-list-icon.png")}
                        style={{
                            objectFit: "contain",
                            width: 15,
                            height:15,
                        }}
                        />
                        <Text style={{
                            color: Colors.WHITE,
                            marginLeft: 5,
                            fontSize: 14,
                        }}>10 task</Text>
                    </View>
                </View>
                {/* first div ends */}

                {/* second div */}
                <View style={{
                    backgroundColor: Colors.YELLOW,
                    width: "48%",
                    padding: 15,
                    borderRadius: 20,
                    height: 85
                }}>
                    <View>
                            <Image source={require("../../../assets/images/clock.png")}
                                style={{
                                    objectFit: "contain",
                                    width: 60,
                                    height:60,
                                    position: "absolute",
                                    right: -5,
                                    top: -40
                                }}
                            />
                    </View> 

                    <View >
                        <Text style={{
                            color: Colors.WHITE,
                            fontFamily: "outfit-medium",
                            fontSize: 50,
                        }}>
                            15
                        </Text>
                        <Text style={{
                            color: Colors.WHITE,
                            fontFamily: "outfit-medium",
                            position: "absolute",
                            bottom: 10,
                            left: 40,
                        }}>
                            Completed
                        </Text>
                    </View>
                </View>
                {/* second div ends */}

                {/* third div */}
                <View style={{
                    backgroundColor: Colors.BLUE,
                    width: "48%",
                    padding: 15,
                    borderRadius: 20,
                    height: 85,
                    marginTop: 15
                }}>

                    <View >
                        <Text style={{
                            color: Colors.WHITE,
                            fontFamily: "outfit-medium",
                            fontSize: 50,
                        }}>
                            15
                        </Text>
                        <Text style={{
                            color: Colors.WHITE,
                            fontFamily: "outfit-medium",
                            position: "absolute",
                            bottom: 10,
                            left: 40,
                        }}>
                            Available
                        </Text>
                    </View>
                </View>
                {/* third div ends */}
                
                 {/* forth div */}
                <View style={{
                    backgroundColor: Colors.PURPLE,
                    width: "48%",
                    padding: 15,
                    borderRadius: 20,
                }}>
                    <View style={{
                            width: "60%",
                            alignItems: "center",
                            backgroundColor: Color.WHITE,
                            borderRadius: 20,
                            padding: 10,
                        }}>
                            <Image source={require("../../../assets/images/good1.png")}
                                style={{
                                    objectFit: "contain",
                                    width: 60,
                                    height:60,
                                }}
                            />
                    </View> 

                    <Text style={{
                        marginTop: 20,
                        color: Colors.WHITE,
                        fontFamily: "outfit-medium",
                        fontSize: 23,
                    }}>
                        App Branding Redesign
                    </Text>
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Image source={require("../../../assets/images/task-list-icon.png")}
                        style={{
                            objectFit: "contain",
                            width: 15,
                            height:15,
                        }}
                        />
                        <Text style={{
                            color: Colors.WHITE,
                            marginLeft: 5,
                            fontSize: 14,
                        }}>10 task</Text>
                    </View>
                </View>
                {/* forth div ends */}
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    colonList: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
        justifyContent: "space-between"
    }
})