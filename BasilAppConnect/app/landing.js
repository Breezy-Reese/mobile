import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

const topJobs = [
  { id: "1", title: "Software Engineer", company: "TechCorp", description: "Develop and maintain software applications.", requirements: "Bachelor's in CS, 3+ years experience.", salary: "$80k-$120k" },
  { id: "2", title: "UI/UX Designer", company: "DesignPro", description: "Design user interfaces and experiences.", requirements: "Portfolio, 2+ years experience.", salary: "$60k-$90k" },
  { id: "3", title: "Project Manager", company: "BizGroup", description: "Manage projects and teams.", requirements: "PMP certification, 5+ years experience.", salary: "$90k-$130k" },
];

const allJobs = [
  { id: "101", title: "Marketing Specialist", company: "MarketPlus", description: "Handle marketing campaigns.", requirements: "Degree in Marketing, 2+ years.", salary: "$50k-$70k" },
  { id: "102", title: "Data Analyst", company: "DataWise", description: "Analyze data and provide insights.", requirements: "Degree in Statistics, SQL knowledge.", salary: "$65k-$85k" },
  { id: "103", title: "HR Manager", company: "PeopleFirst", description: "Manage human resources.", requirements: "HR certification, 4+ years.", salary: "$75k-$100k" },
  { id: "104", title: "Frontend Developer", company: "CodeBase", description: "Build frontend interfaces.", requirements: "React, JS experience.", salary: "$70k-$100k" },
];

const { width } = Dimensions.get("window");

export default function LandingScreen() {
  const router = useRouter();
  const { logout } = useAuth();
  const [appliedJobs, setAppliedJobs] = useState([]); // Track applied jobs

  const handleApply = (jobId, jobTitle) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]); // new array reference
      router.push(`/apply/${jobId}`);
    } else {
      alert(`Already applied to ${jobTitle}`);
    }
  };

  // Top Jobs item
  const renderTopJob = ({ item }) => {
    const isApplied = appliedJobs.includes(item.id);
    return (
      <TouchableOpacity style={styles.topJobCard} onPress={() => router.push(`/job/${item.id}`)}>
        <Text style={styles.topJobTitle}>{item.title}</Text>
        <Text style={styles.topJobCompany}>{item.company}</Text>

        {/* APPLY BUTTON */}
        <TouchableOpacity
          style={[styles.applyButton, isApplied ? styles.appliedButton : null]}
          onPress={(e) => {
            e.stopPropagation(); // Prevent navigation on apply press
            handleApply(item.id, item.title);
          }}
        >
          <Text style={styles.applyButtonText}>{isApplied ? "Applied" : "Apply"}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  // All Jobs item
  const renderJobItem = ({ item }) => {
    const isApplied = appliedJobs.includes(item.id);
    return (
      <TouchableOpacity style={styles.jobItem} onPress={() => router.push(`/job/${item.id}`)}>
        <Text style={styles.jobTitle}>{item.title}</Text>
        <Text style={styles.jobCompany}>{item.company}</Text>
        <TouchableOpacity
          style={[styles.applyButton, isApplied ? styles.appliedButton : null]}
          onPress={(e) => {
            e.stopPropagation(); // Prevent navigation on apply press
            handleApply(item.id, item.title);
          }}
        >
          <Text style={styles.applyButtonText}>{isApplied ? "Applied" : "Apply"}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, Basil! 🎉</Text>

      <Text style={styles.sectionTitle}>Top Jobs</Text>
      <FlatList
        data={topJobs}
        renderItem={renderTopJob}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        contentContainerStyle={{ paddingVertical: 20 }}
        extraData={appliedJobs} // <-- MUST include this
      />

      <Text style={styles.sectionTitle}>All Jobs</Text>
      <FlatList
        data={allJobs}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        extraData={appliedJobs} // <-- MUST include this
      />

      {appliedJobs.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Applied Jobs</Text>
          <FlatList
            data={allJobs.filter(job => appliedJobs.includes(job.id))}
            renderItem={renderJobItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            extraData={appliedJobs}
          />
        </>
      )}

      <TouchableOpacity style={styles.statusButton} onPress={() => router.push("/status")}>
        <Text style={styles.statusButtonText}>Application Status</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={() => {
        logout();
        router.push("/Authentication/login");
      }}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b132b", padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#fff", marginVertical: 10 },

  // Top jobs carousel
  topJobCard: {
    backgroundColor: "#1c2541",
    width: width * 0.7,
    marginRight: 15,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    height: 140,
    justifyContent: "center",
  },

  topJobTitle: { color: "#fff", fontWeight: "bold", fontSize: 16, textAlign: "center" },
  topJobCompany: { color: "#bbb", fontSize: 14, textAlign: "center", marginBottom: 10 },

  // All jobs list
  jobItem: {
    backgroundColor: "#1c2541",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  jobTitle: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  jobCompany: { color: "#bbb", fontSize: 14, marginBottom: 10 },

  applyButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  appliedButton: {
    backgroundColor: "#28a745", // green when applied
  },
  applyButtonText: { color: "#fff", fontWeight: "bold" },

  // Status button
  statusButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  statusButtonText: { color: "#fff", fontWeight: "bold" },

  // Logout button
  logoutButton: {
    backgroundColor: "Red",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  logoutButtonText: { color: "#fff", fontWeight: "bold" },
});
