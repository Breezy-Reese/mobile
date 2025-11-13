import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Success', `Welcome back, ${email}!`);
    router.push('/landing'); // navigate to landing page after login
  };

  const goToRegister = () => {
    router.push('/Authentication/Register'); // navigate to Register screen
  };

  const goToForgotPassword = () => {
    router.push('/Authentication/ForgotPassword'); // navigate to ForgotPassword screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Register" onPress={goToRegister} />
        <View style={{ width: 10 }} />
        <Button title="Forgot Password" onPress={goToForgotPassword} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', backgroundColor: '#f2f2f2', padding: 12, marginBottom: 15, borderRadius: 8 },
  button: { backgroundColor: '#0066cc', padding: 12, borderRadius: 8, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
