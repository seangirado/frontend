import {View, Text, Button, Alert} from 'react-native';
import axios from 'axios';

export default function ReviewPage({route, navigation}) {
    const{formData} = route.params;
    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000//Registration/api/register/", formData);
            Alert.alert("Success", "Registration completed successfully!");
            navigation.getBack();
        }catch (error){ 
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    }
    return (
        <View>
            <Text>Review Information</Text>

            <Text>Firstname: {formData.first_name}</Text>
            <Text>Lastname: {formData.last_name}</Text>
            <Text>Email: {formData.email}</Text>
            <Text>Password: {formData.password}</Text>
            <Text>Gender: {formData.gender}</Text>

            <Button
                title="Go Back to edit"
                onPress={() => navigation.goBack()}
            />
            <Button title="Submit" onPress={handleSubmit}/>
        </View>
    )
}
