import React, { useState } from 'react'; 
import { View, Text, Button, TextInput } from 'react-native'; 
import Styles from '../styles.js'; 

export default function RegisterPage({navigation}) {
    const [formData, setFormData] = useState({
        first_name: "", 
        last_name: "",
        email: "",
        password: "",
        gender: "",
    });

    const handleChange = (field, value) => {
        setFormData({...formData, [field]:value})
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>User Registration</Text> 

            <TextInput
                style={Styles.input} 
                placeholder="First Name"
                value={formData.first_name}
                onChangeText={(text) => handleChange("first_name",text)}
            />

            <TextInput
                style={Styles.input} 
                placeholder="Last Name"
                value={formData.last_name}
                onChangeText={(text) => handleChange("last_name",text)}
            />
                
            <TextInput
                style={Styles.input} 
                placeholder="Email"
                value={formData.email}
                onChangeText={(text) => handleChange("email",text)}
            />
            
            <TextInput
                style={Styles.input} 
                placeholder="Password"
                value={formData.password}
                secureTextEntry={true}
                onChangeText={(text) => handleChange("password",text)}
            />

            <TextInput
                style={Styles.input} 
                placeholder="Gender"
                value={formData.gender}
                onChangeText={(text) => handleChange("gender",text)}
            />

            <View style={Styles.buttonWrapper}> 
                <Button
                    title="Submit"
                    onPress={() => navigation.navigate("Review", {formData})}
                />
            </View>

        </View>
    )
}
