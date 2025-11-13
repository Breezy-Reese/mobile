import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { useRouter } from "expo-router";

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

// Mock applied jobs with status
const mockAppliedJobs = [
  { id: "1", status: "Under Review", appliedDate: "2023-10-01" },
  { id: "101", status: "Interview Scheduled", appliedDate: "2023-09-28" },
  { id: "102", status: "Rejected", appliedDate: "2023-09-25" },
];

export default function StatusScreen() {
  const router = useRouter();
  const [accountVerified, setAccountVerified] = useState(false); // Mock verification status

  const allJobsData = [...topJobs, ...allJobs];

  const appliedJobsWithDetails = mockAppliedJobs.map(applied => {
    const job = allJobsData.find(j => j.id === applied.id);
    return { ...applied, ...job };
  });

  const renderAppliedJob = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobTitle}>{item.title}</Text>
      <Text style={styles.jobCompany}>{item.company}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
      <Text style={styles.appliedDate}>Applied: {item.appliedDate}</Text>
    </View>
  );

  const handleVerifyAccount = () => {
    // Mock verification process
    setAccountVerified(true);
    alert("Account verified successfully!");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Application Status</Text>

      <View style={styles.verificationSection}>
        <Text style={styles.verificationTitle}>Account Verification</Text>
        <Text style={styles.verificationStatus}>
          Status: {accountVerified ? "Verified" : "Not Verified"}
        </Text>
        {!accountVerified && (
          <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyAccount}>
            <Text style={styles.verifyButtonText}>Verify Account</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.sectionTitle}>Applied Jobs</Text>
      {appliedJobsWithDetails.length > 0 ? (
        <FlatList
          data={appliedJobsWithDetails}
          renderItem={renderAppliedJob}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <Text style={styles.noJobsText}>No applications yet.</Text>
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Back to Jobs</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b132b", padding: 20 },
  header: { fontSize: 28, fontWeight: "bold", color: "#fff", marginBottom: 20 },
  verificationSection: { backgroundColor: "#1c2541", padding: 15, borderRadius: 10, marginBottom: 20 },
  verificationTitle: { fontSize: 20, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  verificationStatus: { fontSize: 16, color: "#bbb", marginBottom: 10 },
  verifyButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  verifyButtonText: { color: "#fff", fontWeight: "bold" },
  sectionTitle: { fontSize: 22, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  jobItem: {
    backgroundColor: "#1c2541",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  jobTitle: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  jobCompany: { color: "#bbb", fontSize: 14, marginBottom: 5 },
  status: { color: "#28a745", fontSize: 14, fontWeight: "bold" },
  appliedDate: { color: "#bbb", fontSize: 12 },
  noJobsText: { color: "#bbb", fontSize: 16, textAlign: "center", marginTop: 20 },
  backButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: { color: "#fff", fontWeight: "bold" },
});
