import {View, Text, TextInput, Button} from "react-native";
import {useState} from "react";
import axios from "axios";
import styles from "../styles";


export default function EditUserPage({route}){
    const {user} = route.params;

    const [first_name, setFirstName] = useState(user.first_name);
    const [last_name, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);
    const [gender, setGender] = useState(user.gender);
    const [password, setPassword] = useState(user.password);

    const handleUpdate = () => {
        if (!first_name || !last_name || !email || !gender || !password) {
            window.alert("Error", "Please fill up all required fields");
            return;
        }

        axios
            .put(`http://127.0.0.1:8000/Registration/api/users/${user.id}/`, {
                first_name: first_name,
                last_name: last_name,
                email: email,
                gender: gender,
                password: password,
            })
            .then(() => {
                window.alert("Success", "User updated successfully");
            })
            .catch(() => {
                console.error("Error updating user");
                window.alert("Error", "There was an error updating the user");
            });

    }
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>Edit User Page</Text>

            <TextInput style={styles.input}
            value={first_name}
            onChangeText={setFirstName}/>

            <TextInput style={styles.input}
            value={last_name}
            onChangeText={setLastName}/>

             <TextInput style={styles.input}
            value={email}
            onChangeText={setEmail}/>

           <TextInput style={styles.input}
            value={gender}
            onChangeText={setGender}/>

            <TextInput style={styles.input}
            value={password}
            onChangeText={setPassword}/>

            <View>
                <Button style={styles.buttonWrapper}
                title="Update User"
                onPress={handleUpdate}/>
            </View>

        </View>
    );
}