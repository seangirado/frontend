import {View, Text, Button, Alert} from 'react-native';
import axios from 'axios';
import styles from '../styles';

export default function ReviewPage({route, navigation}) {
    const{formData} = route.params;
    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/Registration/api/register/", formData);
            Alert.alert("Success", "Registration completed successfully!");
            navigation.getBack();
        }catch (error){ 
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    }
    return (
        <View style={styles.reviewContainer}>    
            <Text style={styles.title}>Review Information</Text>

            <Text style={styles.input}>Firstname: {formData.first_name}</Text>
            <Text style={styles.input}>Lastname: {formData.last_name}</Text>
            <Text style={styles.input}>Email: {formData.email}</Text>
            <Text style={styles.input}>Password: {formData.password}</Text>
            <Text style={styles.input}>Gender: {formData.gender}</Text>

            <Button style={styles.buttonWrapper}
                title="Go Back to edit"
                onPress={() => navigation.goBack()}
            />
            <Button title="Submit" onPress={handleSubmit}/>
        </View>
    )
}