import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Splash3() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0f2027" }}>
      <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold" }}>Get Started Today!</Text>
      <Button title="Continue" onPress={() => router.push("/Authentication/login")} />
    </View>
  );
}