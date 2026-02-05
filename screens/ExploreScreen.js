import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";

const PRIMARY_BLUE = "#1E90FF";
const GRAY_TEXT = "#6B7280";
const GRAY_LIGHT = "#9CA3AF";
const CARD_WHITE = "#FFFFFF";

const FILTER_CHIPS = ["Points only", "Under 5 miles", "$$$ High Pay", "Remote"];

const JOBS = [
  {
    id: 1,
    title: "Event Photography Assist",
    company: "Creative Studios",
    location: "2.4 mi",
    timeAgo: "2h ago",
    icon: "camera-outline",
    iconBg: "#D4A574",
    tags: [
      {
        text: "Verified Escrow",
        icon: "checkmark-circle",
        color: PRIMARY_BLUE,
      },
      { text: "One-day", icon: "time-outline", color: PRIMARY_BLUE },
    ],
    amountLabel: "PAY AMOUNT",
    amount: "$150 / flat",
    amountIcon: null,
    buttonText: "Quick Apply →",
    buttonPrimary: true,
  },
  {
    id: 2,
    title: "Urgent Dog Walker",
    company: "Private Owner",
    location: "0.5 mi",
    timeAgo: "15m ago",
    icon: "paw-outline",
    iconBg: "#F97316",
    tags: [
      {
        text: "Verified Escrow",
        icon: "checkmark-circle",
        color: PRIMARY_BLUE,
      },
    ],
    amountLabel: "REWARD",
    amount: "500 Pts",
    amountIcon: "diamond",
    amountIconColor: "#F97316",
    buttonText: "Quick Apply",
    buttonPrimary: true,
  },
  {
    id: 3,
    title: "Junior Graphic Designer",
    company: "Apex Media",
    location: "Remote",
    timeAgo: "1d ago",
    icon: "color-palette-outline",
    iconBg: "#D4A574",
    tags: [
      { text: "Direct Connect", icon: "diamond-outline", color: PRIMARY_BLUE },
      { text: "Long-term", icon: null, color: "#9333EA", bg: true },
    ],
    amountLabel: "SALARY",
    amount: "$45k / yr",
    amountIcon: null,
    buttonText: "View Details",
    buttonPrimary: false,
  },
];

export default function ExploreScreen() {
  const [jobType, setJobType] = useState("Short-term");

  return (
    <View style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Location row */}
        <View style={styles.locationRow}>
          <View style={styles.locationLeft}>
            <Text style={styles.labelSmall}>LOCATION</Text>
            <View style={styles.locationValueRow}>
              <Text style={styles.locationValue}>San Francisco, CA</Text>
              <Ionicons
                name="chevron-down"
                size={18}
                color={PRIMARY_BLUE}
                style={styles.chevron}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.bellBtn}>
            <Ionicons name="notifications" size={24} color="#EF4444" />
          </TouchableOpacity>
        </View>

        <SearchBar />

        {/* Job type toggle */}
        <View style={styles.toggleRow}>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              jobType === "Short-term" && styles.toggleBtnActive,
            ]}
            onPress={() => setJobType("Short-term")}
          >
            <Text
              style={[
                styles.toggleText,
                jobType === "Short-term" && styles.toggleTextActive,
              ]}
            >
              Short-term
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleBtn,
              jobType === "Long-term" && styles.toggleBtnActive,
            ]}
            onPress={() => setJobType("Long-term")}
          >
            <Text
              style={[
                styles.toggleText,
                jobType === "Long-term" && styles.toggleTextActive,
              ]}
            >
              Long-term
            </Text>
          </TouchableOpacity>
        </View>

        {/* Filter chips */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chipsScroll}
          contentContainerStyle={styles.chipsContent}
        >
          {FILTER_CHIPS.map((chip) => (
            <TouchableOpacity key={chip} style={styles.chip}>
              <Text style={styles.chipText}>{chip}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Section header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended for you</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Job cards */}
        <View style={styles.jobsList}>
          {JOBS.map((job) => (
            <View key={job.id} style={styles.jobCard}>
              <View style={styles.jobCardTop}>
                <View
                  style={[styles.jobIconWrap, { backgroundColor: job.iconBg }]}
                >
                  <Ionicons name={job.icon} size={24} color="#FFF" />
                </View>
                <View style={styles.jobCardMain}>
                  <View style={styles.jobTitleRow}>
                    <Text style={styles.jobTitle} numberOfLines={1}>
                      {job.title}
                    </Text>
                    <Text style={styles.jobTime}>{job.timeAgo}</Text>
                  </View>
                  <Text style={styles.jobMeta}>
                    {job.company} • {job.location}
                  </Text>
                  <View style={styles.tagsRow}>
                    {job.tags.map((tag, idx) => (
                      <View
                        key={idx}
                        style={[
                          styles.tag,
                          tag.bg && { backgroundColor: tag.color },
                        ]}
                      >
                        {tag.icon && (
                          <Ionicons
                            name={tag.icon}
                            size={12}
                            color={tag.bg ? "#FFF" : tag.color}
                            style={styles.tagIcon}
                          />
                        )}
                        <Text
                          style={[
                            styles.tagText,
                            tag.bg && { color: "#FFF" },
                            !tag.bg && { color: tag.color },
                          ]}
                        >
                          {tag.text}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
              <View style={styles.jobCardBottom}>
                <View>
                  <Text style={styles.amountLabel}>{job.amountLabel}</Text>
                  <View style={styles.amountRow}>
                    {job.amountIcon && (
                      <Ionicons
                        name={job.amountIcon}
                        size={16}
                        color={job.amountIconColor || GRAY_TEXT}
                        style={styles.amountIcon}
                      />
                    )}
                    <Text style={styles.amountValue}>{job.amount}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={[
                    styles.actionBtn,
                    job.buttonPrimary && styles.actionBtnPrimary,
                  ]}
                >
                  <Text
                    style={[
                      styles.actionBtnText,
                      job.buttonPrimary && styles.actionBtnTextPrimary,
                    ]}
                  >
                    {job.buttonText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: CARD_WHITE,
    paddingTop: 30,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  locationLeft: {},
  labelSmall: {
    fontSize: 11,
    fontWeight: "600",
    color: GRAY_LIGHT,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  locationValueRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationValue: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },
  chevron: {
    marginLeft: 4,
  },
  bellBtn: {
    padding: 4,
  },
  toggleRow: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 4,
    marginBottom: 14,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  toggleBtnActive: {
    backgroundColor: PRIMARY_BLUE,
  },
  toggleText: {
    fontSize: 15,
    fontWeight: "600",
    color: GRAY_TEXT,
  },
  toggleTextActive: {
    color: "#FFF",
  },
  chipsScroll: {
    marginBottom: 18,
  },
  chipsContent: {
    flexDirection: "row",
    gap: 10,
    paddingRight: 8,
  },
  chip: {
    backgroundColor: "#E5E7EB",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipText: {
    fontSize: 13,
    fontWeight: "500",
    color: GRAY_TEXT,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "600",
    color: PRIMARY_BLUE,
  },
  jobsList: {
    gap: 14,
  },
  jobCard: {
    backgroundColor: CARD_WHITE,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  jobCardTop: {
    flexDirection: "row",
    marginBottom: 14,
  },
  jobIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  jobCardMain: {
    flex: 1,
  },
  jobTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    flex: 1,
  },
  jobTime: {
    fontSize: 12,
    color: GRAY_LIGHT,
    marginLeft: 8,
  },
  jobMeta: {
    fontSize: 13,
    color: GRAY_TEXT,
    marginBottom: 8,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  tagIcon: {
    marginRight: 2,
  },
  tagText: {
    fontSize: 11,
    fontWeight: "600",
  },
  jobCardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
  },
  amountLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: GRAY_LIGHT,
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  amountRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountIcon: {
    marginRight: 4,
  },
  amountValue: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },
  actionBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#E5E7EB",
  },
  actionBtnPrimary: {
    backgroundColor: PRIMARY_BLUE,
  },
  actionBtnText: {
    fontSize: 13,
    fontWeight: "600",
    color: GRAY_TEXT,
  },
  actionBtnTextPrimary: {
    color: "#FFF",
  },
});
