import { View, Text, FlatList, Button, Alert } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../styles';

export default function UserListPage({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Registration/api/users/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleEdit = (user) => {
    navigation.navigate("EditUser", { user });
  };

  const handleDelete = (id) => {
  /*  Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this user?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            axios
              .delete(`http://127.0.0.1:8000/Registration/api/users/${id}/`)
              .then(() => {
                // Update the users list after deletion
                setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
                Alert.alert("User deleted successfully");
              })
              .catch((err) => {
                Alert.alert("Error deleting user", err.message);
              });
          },
        },
      ]
    ); */

    axios.delete(`http://127.0.0.1:8000/Registration/api/users/${id}/`)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registered Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.nameText}>Firstname: {item.first_name}</Text>
            <Text style={styles.nameText}>Lastname: {item.last_name}</Text>
            <Text style={styles.detailText}>Email: {item.email}</Text>

            <View>
              <Button title="Edit" color="#7DDA58" onPress={() => handleEdit(item)} />
              <Button title="Delete" color="#DA5858" onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
}
