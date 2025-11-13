import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Splash1() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#4b6cb7" }}>
      <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>Welcome to Basil’s Employer_Employee job Connect !</Text>
      <Text style={{ color: "#fff", marginVertical: 10 }}>Connecting Employers & Employees</Text>
      <Button title="Next" onPress={() => router.push("/splash/2")} />
    </View>
  );
}