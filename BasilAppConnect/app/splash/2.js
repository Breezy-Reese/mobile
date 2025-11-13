import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Splash2() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#182848" }}>
      <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>Find Job Opportunities Easily with Basil's JobConnect</Text>
      <Text style={{ color: "#fff", marginVertical: 10 }}>Employers post, Employees apply</Text>
      <Button title="Next" onPress={() => router.push("/splash/3")} />
    </View>
  );
}