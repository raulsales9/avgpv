import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

export const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                value={username} 
                onChangeText={setUsername} 
                placeholder="Usuario" 
            />
            <TextInput 
                style={styles.input} 
                value={password} 
                onChangeText={setPassword} 
                placeholder="Contraseña" 
                secureTextEntry 
            />
            <View style={styles.button}>
                <Button title="Registrarse" color="#FFFFFF" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#F5F5F5',
    },
    input: {
        height: 40,
        borderColor: '#CCCCCC',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
    },
    button: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
});

export default Signup;
