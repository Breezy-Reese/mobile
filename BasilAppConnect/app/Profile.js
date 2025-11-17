import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useRouter } from "expo-router";

// Example allJobs array (same as LandingScreen)
const allJobs = [
  { id: "1", title: "Software Engineer", company: "TechCorp" },
  { id: "2", title: "UI/UX Designer", company: "DesignPro" },
  { id: "3", title: "Project Manager", company: "BizGroup" },
  { id: "101", title: "Marketing Specialist", company: "MarketPlus" },
  { id: "102", title: "Data Analyst", company: "DataWise" },
  { id: "103", title: "HR Manager", company: "PeopleFirst" },
  { id: "104", title: "Frontend Developer", company: "CodeBase" },
];

export default function Profile({ appliedJobs = [] }) {
  const router = useRouter();

  // Example user data (replace with real API/state)
  const user = {
    name: "Basil Mutuku",
    email: "basil@example.com",
    role: "Employee",
    joined: "Nov 2025",
  };

  // Filter allJobs to get only applied jobs
  const appliedJobsList = allJobs.filter((job) => appliedJobs.includes(job.id));

  const renderAppliedJob = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobCompany}>{item.company}</Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>My Profile</Text>

      {/* User Info */}
      <View style={styles.infoCard}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Role</Text>
        <Text style={styles.value}>{user.role}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.label}>Joined</Text>
        <Text style={styles.value}>{user.joined}</Text>
      </View>

      {/* Applied Jobs */}
      <Text style={styles.appliedHeader}>Applied Jobs</Text>
      {appliedJobsList.length === 0 ? (
        <Text style={{ color: "#bbb", marginBottom: 20 }}>You haven’t applied to any jobs yet.</Text>
      ) : (
        <FlatList
          data={appliedJobsList}
          renderItem={renderAppliedJob}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      {/* Logout Button */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.push("/Authentication/Login")}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#0b132b",
    flexGrow: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  infoCard: {
    width: "100%",
    backgroundColor: "#1c2541",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  label: { color: "#bbb", fontSize: 14, marginBottom: 5 },
  value: { color: "#fff", fontSize: 16, fontWeight: "bold" },

  appliedHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginVertical: 15,
    alignSelf: "flex-start",
  },
  jobItem: {
    width: "100%",
    backgroundColor: "#1c2541",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  jobTitle: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  jobCompany: { color: "#bbb", fontSize: 14 },

  logoutButton: {
    backgroundColor: "#3a506b",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
