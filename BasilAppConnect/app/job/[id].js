import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

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

export default function JobDetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const allJobsData = [...topJobs, ...allJobs];
  const job = allJobsData.find(j => j.id === id);

  if (!job) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Job not found</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.salary}>{job.salary}</Text>

      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{job.description}</Text>

      <Text style={styles.sectionTitle}>Requirements</Text>
      <Text style={styles.requirements}>{job.requirements}</Text>

      <TouchableOpacity style={styles.applyButton} onPress={() => router.push(`/apply/${id}`)}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Back to Jobs</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b132b", padding: 20 },
  header: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  company: { fontSize: 20, color: "#bbb", marginBottom: 5 },
  salary: { fontSize: 18, color: "#28a745", marginBottom: 20 },
  sectionTitle: { fontSize: 22, fontWeight: "bold", color: "#fff", marginTop: 20, marginBottom: 10 },
  description: { fontSize: 16, color: "#ddd", lineHeight: 24 },
  requirements: { fontSize: 16, color: "#ddd", lineHeight: 24 },
  applyButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  applyButtonText: { color: "#fff", fontWeight: "bold", fontSize: 18 },
  backButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  backButtonText: { color: "#fff", fontWeight: "bold" },
  errorText: { fontSize: 24, color: "#fff", textAlign: "center", marginTop: 50 },
});
