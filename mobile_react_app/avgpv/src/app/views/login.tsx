// Importa las dependencias necesarias
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';

import { StackNavigationProp } from '@react-navigation/stack';
type Props = {
    navigation: StackNavigationProp<{}>; // Puedes ajustar esto según tus rutas de navegación
  };
  
  const LoginScreen = ({  }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Nombre de Usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default LoginScreen;
