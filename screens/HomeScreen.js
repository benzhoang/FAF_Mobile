import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AIR_BLUE = "#0EA5E9";
const AIR_SKY = "#E0F2FE";
const GRAY_TEXT = "#9CA3AF";
const GRAY_BORDER = "#E5E7EB";

export default function HomeScreen({ navigation }) {
  const [jobType, setJobType] = useState("Short-term");

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Freelance UI Designer",
      company: "TechFlow Studio",
      location: "Remote",
      price: "$800",
      priceType: "FIXED PRICE",
      icon: "game-controller-outline",
      iconColor: "#9333EA",
      badges: [
        { text: "Escrow Secured", color: "#10B981", icon: "checkmark" },
        { text: "Urgent", color: "#F3F4F6", textColor: "#6B7280" },
      ],
      action: "View Details",
    },
    {
      id: 2,
      title: "Junior React Developer",
      company: "Innovate Corp",
      location: "Hybrid",
      price: "$65k",
      priceType: "PER YEAR",
      icon: "code-outline",
      iconColor: "#D97706",
      badges: [
        { text: "Direct Hire", color: AIR_BLUE, icon: "diamond-outline" },
        { text: "Full-time", color: "#FFF", textColor: "#6B7280" },
      ],
      action: "Apply Now",
    },
    {
      id: 3,
      title: "SEO Content Writer",
      company: "GreenLiving",
      location: "Remote",
      price: "$150",
      priceType: "FIXED PRICE",
      icon: "document-text-outline",
      iconColor: "#EC4899",
      badges: [
        { text: "Escrow Secured", color: "#10B981", icon: "checkmark" },
        { text: "1 week", color: "#F3F4F6", textColor: "#6B7280" },
      ],
      action: "View Details",
    },
  ];

  return (
    <View style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoText}>F</Text>
            </View>
            <Text style={styles.brandText}>FAF</Text>
          </View>
          <View style={styles.topRightIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={24} color="#000" />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileButton}>
              <Ionicons name="person" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>
            Your Career, <Text style={styles.heroTitleBlue}>Your Terms.</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Find secure short-term gigs or build your long-term future.
          </Text>

          {/* Banner Image */}
          <View style={styles.bannerContainer}>
            <View style={styles.bannerImage}>
              <View style={styles.bannerOverlay}>
                <Text style={styles.bannerOverlayText}>New Opportunities</Text>
              </View>
            </View>
          </View>

          {/* Get Started Button */}
          <TouchableOpacity style={styles.getStartedButton}>
            <Text style={styles.getStartedText}>Get Started</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Job Type Selector */}
        <View style={styles.jobTypeContainer}>
          <TouchableOpacity
            style={[
              styles.jobTypeButton,
              jobType === "Short-term" && styles.jobTypeButtonActive,
            ]}
            onPress={() => setJobType("Short-term")}
          >
            <Ionicons
              name="flash"
              size={20}
              color={jobType === "Short-term" ? AIR_BLUE : GRAY_TEXT}
            />
            <Text
              style={[
                styles.jobTypeText,
                jobType === "Short-term" && styles.jobTypeTextActive,
              ]}
            >
              Short-term
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.jobTypeButton,
              jobType === "Long-term" && styles.jobTypeButtonActive,
            ]}
            onPress={() => setJobType("Long-term")}
          >
            <Ionicons
              name="briefcase-outline"
              size={20}
              color={jobType === "Long-term" ? AIR_BLUE : GRAY_TEXT}
            />
            <Text
              style={[
                styles.jobTypeText,
                jobType === "Long-term" && styles.jobTypeTextActive,
              ]}
            >
              Long-term
            </Text>
          </TouchableOpacity>
        </View>

        {/* Featured Opportunities */}
        <View style={styles.featuredHeader}>
          <Text style={styles.featuredTitle}>Featured Opportunities</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Job Cards */}
        <View style={styles.jobsContainer}>
          {jobs.map((job) => (
            <View key={job.id} style={styles.jobCard}>
              <View style={styles.jobCardHeader}>
                <View
                  style={[styles.jobIcon, { backgroundColor: job.iconColor }]}
                >
                  <Ionicons name={job.icon} size={24} color="#FFF" />
                </View>
                <View style={styles.jobPriceContainer}>
                  <Text style={styles.jobPrice}>{job.price}</Text>
                  <Text style={styles.jobPriceType}>{job.priceType}</Text>
                </View>
              </View>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobCompany}>
                {job.company} • {job.location}
              </Text>
              <View style={styles.badgesContainer}>
                {job.badges.map((badge, index) => (
                  <View
                    key={index}
                    style={[
                      styles.badge,
                      {
                        backgroundColor: badge.color,
                      },
                    ]}
                  >
                    {badge.icon && (
                      <Ionicons
                        name={badge.icon}
                        size={12}
                        color={badge.textColor || "#FFF"}
                        style={styles.badgeIcon}
                      />
                    )}
                    <Text
                      style={[
                        styles.badgeText,
                        { color: badge.textColor || "#FFF" },
                      ]}
                    >
                      {badge.text}
                    </Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity style={styles.jobActionButton}>
                <Text style={styles.jobActionText}>{job.action}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Verify Your Profile Section */}
        <View style={styles.verifySection}>
          <View style={styles.verifyBackground}>
            <View style={styles.verifyOverlay}>
              <Text style={styles.verifyTitle}>Verify Your Profile</Text>
              <Text style={styles.verifySubtitle}>Get 3x more visibility</Text>
              <TouchableOpacity style={styles.verifyButton}>
                <Text style={styles.verifyButtonText}>Verify Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AIR_SKY,
    paddingTop: 30,
  },
  container: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: AIR_SKY,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: AIR_BLUE,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFF",
  },
  brandText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#000",
  },
  topRightIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconButton: {
    position: "relative",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D97706",
    alignItems: "center",
    justifyContent: "center",
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#000",
    marginBottom: 8,
  },
  heroTitleBlue: {
    color: AIR_BLUE,
  },
  heroSubtitle: {
    fontSize: 14,
    color: GRAY_TEXT,
    marginBottom: 20,
  },
  bannerContainer: {
    marginBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: 180,
    borderRadius: 20,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
    position: "relative",
  },
  bannerOverlay: {
    position: "absolute",
    bottom: 16,
    left: 16,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  bannerOverlayText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
  getStartedButton: {
    backgroundColor: AIR_BLUE,
    borderRadius: 12,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: AIR_BLUE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    gap: 8,
  },
  getStartedText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  jobTypeContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 4,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  jobTypeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  jobTypeButtonActive: {
    backgroundColor: AIR_SKY,
    borderWidth: 1,
    borderColor: AIR_BLUE,
  },
  jobTypeText: {
    fontSize: 16,
    fontWeight: "600",
    color: GRAY_TEXT,
  },
  jobTypeTextActive: {
    color: AIR_BLUE,
  },
  featuredHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#000",
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "600",
    color: AIR_BLUE,
  },
  jobsContainer: {
    paddingHorizontal: 20,
    gap: 16,
    marginBottom: 24,
  },
  jobCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  jobCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  jobIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  jobPriceContainer: {
    alignItems: "flex-end",
  },
  jobPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#000",
  },
  jobPriceType: {
    fontSize: 12,
    color: GRAY_TEXT,
    marginTop: 2,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
  },
  jobCompany: {
    fontSize: 14,
    color: GRAY_TEXT,
    marginBottom: 12,
  },
  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 4,
  },
  badgeIcon: {
    marginRight: 2,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  jobActionButton: {
    paddingVertical: 8,
  },
  jobActionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280",
  },
  verifySection: {
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 20,
    overflow: "hidden",
  },
  verifyBackground: {
    width: "100%",
    height: 200,
    backgroundColor: "#1F2937",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  verifyOverlay: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  verifyTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FFF",
    marginBottom: 8,
    textAlign: "center",
  },
  verifySubtitle: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 20,
    textAlign: "center",
  },
  verifyButton: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
});
