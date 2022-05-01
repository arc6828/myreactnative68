import React, { useState } from "react";
import { View, Button, Text, TextInput, TouchableOpacity } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('80');
    const [height, setHeight] = useState('180');
    const [bmi, setBmi] = useState('0');

    console.log("STATE : ", weight, height, bmi);

    const onPressButton = () => {
        console.log("PRESS!!!");
        let output = weight / (height / 100 * height / 100);
        setBmi(output.toFixed(2));
        // console.log("BMI (เก่า)" , bmi );
        // console.log("BMI (ใหม่)" , output );
    }

    return (
        <View>
            {/* ก้อนที่ 1 */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
                <TextInput
                    value={weight}
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Input your Weight …"
                    // onChangeText={function(newWeight){ setWeight(newWeight); }}                    
                    onChangeText={(newWeight) => setWeight(newWeight)}
                />
            </View>
            {/* ก้อนที่ 2 */}
            <View style={{ backgroundColor: "white", padding: 20, marginVertical: 10, borderRadius: 10, height: 150, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
                <TextInput
                    value={height}
                    style={{ fontSize: 20 }}
                    keyboardType="numeric"
                    placeholder="Input your Height …"
                    onChangeText={(newHeight) => setHeight(newHeight)}
                />
            </View>
            {/* ก้อนที่ 3 */}
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
                {/* ซ้าย */}
                <View style={{ flex: 1, backgroundColor: "white", marginRight: 10, height: 100, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>{bmi}</Text>
                </View>
                {/* ขวา */}
                <View style={{ flex: 1, backgroundColor: "white", marginLeft: 10, height: 100, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 20 }}>Normal</Text>
                </View>
            </View>
            {/* <Button title="Calculate" onPress={onPressButton} /> */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 10, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
