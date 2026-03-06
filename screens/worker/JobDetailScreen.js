import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const PRIMARY_BLUE = "#1E90FF";
const GRAY_TEXT = "#6B7280";
const GRAY_LIGHT = "#9CA3AF";
const CARD_BG = "#F0F9FF";

// Chuẩn hóa job từ Explore hoặc Home list + gán data mẫu cho phần detail
function getJobDetailData(job) {
  if (!job) return getDefaultDetail();
  const fromExplore = "amountLabel" in job;
  const iconBg = job.iconBg || job.iconColor || "#1E90FF";
  const companyName = job.company || "Creative Studio";
  const companyShort = (companyName.match(/\b(\w)/g) || ["CS"]).join("").slice(0, 2).toUpperCase();
  return {
    id: job.id,
    title: job.title || "Event Photographer - 2 Day Gig",
    company: companyName,
    companyShort,
    location: job.location || "New York, NY",
    icon: job.icon || "camera-outline",
    iconBg,
    isUrgentHire: job.isUrgentHire ?? true,
    escrowAmount: fromExplore ? (job.amount || "$600") : (job.price || "$600"),
    escrowDescription: `100% of funds (${fromExplore ? (job.amount || "$600") : (job.price || "$600")}) are held safely in escrow upon hiring. Payment is released automatically as you hit milestones.`,
    description: job.description || "We are looking for a professional photographer to cover our annual 2-day creative summit. You will be responsible for capturing keynote sessions, networking mixes, and high-quality portraits of speakers. The atmosphere is fast-paced, and we need someone who can capture the energy of the event while maintaining a low profile.",
    requirements: job.requirements || [
      "3+ years event photography experience",
      "Own professional DSLR/mirrorless kit",
      "Ability to deliver edited highlights within 24h",
    ],
    milestones: job.milestones || [
      { title: "Day 1: Setup & Morning Keynotes", points: "200 FAF Pts", description: "Submission of first 50 unaudited highlight shots.", value: "$200 USD" },
      { title: "Day 2: Full Event Coverage", points: "200 FAF Pts", description: "Coverage of networking event and closing ceremony.", value: "$200 USD" },
      { title: "Final Delivery & Gallery", points: "200 FAF Pts", description: "High-res edited files uploaded to studio portal.", value: "$200 USD" },
    ],
    companyRating: job.companyRating ?? 4.9,
    totalReviews: job.totalReviews ?? 124,
    successRate: job.successRate ?? "100%",
    activeGigs: job.activeGigs ?? 4,
    responseTime: job.responseTime || "Under 2 hours",
    paymentVerified: job.paymentVerified ?? true,
  };
}

function getDefaultDetail() {
  return getJobDetailData({
    id: 0,
    title: "Event Photographer - 2 Day Gig",
    company: "Creative Studio",
    location: "New York, NY",
    icon: "camera-outline",
    iconBg: "#D4A574",
  });
}

export default function JobDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const job = getJobDetailData(route.params?.job);
  const [descExpanded, setDescExpanded] = useState(true);
  const [reqExpanded, setReqExpanded] = useState(false);
  const [favorited, setFavorited] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16, marginRight: 8 }}>
          <TouchableOpacity onPress={() => setFavorited((f) => !f)} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Ionicons
              name={favorited ? "heart" : "heart-outline"}
              size={24}
              color={favorited ? "#EF4444" : "#111827"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Ionicons name="share-outline" size={24} color="#111827" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, favorited]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Urgent badge + title */}
        {job.isUrgentHire && (
          <View style={styles.urgentBadge}>
            <Text style={styles.urgentBadgeText}>Urgent Hire</Text>
          </View>
        )}
        <Text style={styles.title}>{job.title}</Text>
        <View style={styles.metaRow}>
          <Ionicons name="business-outline" size={16} color={GRAY_TEXT} />
          <Text style={styles.companyText}>{job.company}</Text>
          <Ionicons name="checkmark-circle" size={16} color={PRIMARY_BLUE} />
          <Text style={styles.dot}>•</Text>
          <Ionicons name="location-outline" size={16} color={GRAY_TEXT} />
          <Text style={styles.locationText}>{job.location}</Text>
        </View>

        {/* FAF Secure Escrow */}
        <View style={styles.card}>
          <Ionicons name="shield-checkmark" size={28} color={PRIMARY_BLUE} />
          <View style={styles.cardTextWrap}>
            <Text style={styles.cardTitle}>FAF Secure Escrow</Text>
            <Text style={styles.cardDesc}>{job.escrowDescription}</Text>
          </View>
        </View>

        {/* Job Description (expandable) */}
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => setDescExpanded(!descExpanded)}
          activeOpacity={0.7}
        >
          <Text style={styles.sectionTitle}>Job Description</Text>
          <Ionicons
            name={descExpanded ? "chevron-up" : "chevron-down"}
            size={20}
            color={GRAY_TEXT}
          />
        </TouchableOpacity>
        {descExpanded && (
          <Text style={styles.bodyText}>{job.description}</Text>
        )}

        {/* Requirements (expandable) */}
        <TouchableOpacity
          style={styles.sectionHeader}
          onPress={() => setReqExpanded(!reqExpanded)}
          activeOpacity={0.7}
        >
          <Text style={styles.sectionTitle}>Requirements</Text>
          <Ionicons
            name={reqExpanded ? "chevron-up" : "chevron-down"}
            size={20}
            color={GRAY_TEXT}
          />
        </TouchableOpacity>
        {reqExpanded && (
          <View style={styles.reqList}>
            {job.requirements.map((r, i) => (
              <View key={i} style={styles.reqItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bodyText}>{r}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Payment Milestones */}
        <Text style={styles.sectionTitleStandalone}>Payment Milestones</Text>
        <View style={styles.timeline}>
          {job.milestones.map((m, i) => (
            <View key={i} style={styles.timelineItem}>
              <View style={styles.timelineDot} />
              {i < job.milestones.length - 1 && <View style={styles.timelineLine} />}
              <View style={styles.timelineContent}>
                <Text style={styles.milestoneTitle}>{m.title}</Text>
                <Text style={styles.milestonePoints}>{m.points}</Text>
                <Text style={styles.milestoneDesc}>{m.description}</Text>
                <Text style={styles.milestoneValue}>VALUED AT {m.value}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Company card */}
        <View style={[styles.card, styles.companyCard]}>
          <View style={[styles.avatar, { backgroundColor: "#F97316" }]}>
            <Text style={styles.avatarText}>{job.companyShort}</Text>
          </View>
          <View style={styles.companyInfo}>
            <View style={styles.companyNameRow}>
              <Text style={styles.companyName}>{job.company} Inc.</Text>
              <Ionicons name="checkmark-circle" size={18} color={PRIMARY_BLUE} />
            </View>
            <Text style={styles.ratingText}>
              {job.companyRating} ({job.totalReviews} reviews)
            </Text>
            <View style={styles.statsRow}>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>SUCCESS RATE</Text>
                <Text style={styles.statValue}>{job.successRate}</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>ACTIVE GIGS</Text>
                <Text style={styles.statValue}>{job.activeGigs}</Text>
              </View>
            </View>
            <Text style={styles.metaLabel}>Response Time</Text>
            <Text style={styles.metaValue}>{job.responseTime}</Text>
            <Text style={styles.metaLabel}>Payment Method</Text>
            <View style={styles.verifiedRow}>
              <View style={styles.greenDot} />
              <Text style={styles.metaValue}>Verified</Text>
            </View>
          </View>
        </View>

        {/* Disclaimer */}
        <View style={styles.disclaimer}>
          <Ionicons name="information-circle-outline" size={18} color={GRAY_TEXT} />
          <Text style={styles.disclaimerText}>
            By applying, you agree to the FAF Short-term Contract Terms and Escrow Policy. Your profile will be shared with the employer.
          </Text>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* Apply button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.applyBtn}
          onPress={() => {}}
          activeOpacity={0.8}
        >
          <Text style={styles.applyBtnText}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  urgentBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 10,
  },
  urgentBadgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#1E40AF",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 4,
    marginBottom: 20,
  },
  companyText: { fontSize: 14, fontWeight: "600", color: "#111827" },
  dot: { fontSize: 14, color: GRAY_LIGHT },
  locationText: { fontSize: 14, color: GRAY_TEXT },
  card: {
    flexDirection: "row",
    backgroundColor: CARD_BG,
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E0F2FE",
  },
  cardTextWrap: { flex: 1, marginLeft: 12 },
  cardTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: PRIMARY_BLUE,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    color: GRAY_TEXT,
    lineHeight: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  sectionTitleStandalone: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 14,
    color: GRAY_TEXT,
    lineHeight: 22,
    marginBottom: 16,
  },
  reqList: { marginBottom: 16 },
  reqItem: { flexDirection: "row", marginBottom: 6 },
  bullet: { fontSize: 14, color: GRAY_TEXT, marginRight: 8 },
  timeline: { marginBottom: 20 },
  timelineItem: { flexDirection: "row", marginBottom: 4 },
  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: GRAY_LIGHT,
    marginTop: 6,
    marginRight: 12,
  },
  timelineLine: {
    position: "absolute",
    left: 4,
    top: 16,
    bottom: -8,
    width: 2,
    backgroundColor: "#E5E7EB",
  },
  timelineContent: { flex: 1, paddingBottom: 16 },
  milestoneTitle: { fontSize: 14, fontWeight: "700", color: "#111827", marginBottom: 2 },
  milestonePoints: { fontSize: 14, fontWeight: "600", color: PRIMARY_BLUE, marginBottom: 4 },
  milestoneDesc: { fontSize: 13, color: GRAY_TEXT, lineHeight: 18, marginBottom: 2 },
  milestoneValue: { fontSize: 11, fontWeight: "600", color: GRAY_LIGHT, letterSpacing: 0.5 },
  companyCard: { alignItems: "flex-start" },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: { fontSize: 16, fontWeight: "700", color: "#FFF" },
  companyInfo: { flex: 1, marginLeft: 12 },
  companyNameRow: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 4 },
  companyName: { fontSize: 15, fontWeight: "700", color: "#111827" },
  ratingText: { fontSize: 13, color: GRAY_TEXT, marginBottom: 8 },
  statsRow: { flexDirection: "row", gap: 20, marginBottom: 8 },
  stat: {},
  statLabel: { fontSize: 10, fontWeight: "600", color: GRAY_LIGHT, letterSpacing: 0.5 },
  statValue: { fontSize: 14, fontWeight: "700", color: "#111827" },
  metaLabel: { fontSize: 11, fontWeight: "600", color: GRAY_LIGHT, marginTop: 4 },
  metaValue: { fontSize: 13, color: "#111827", marginBottom: 2 },
  verifiedRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  greenDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#10B981" },
  disclaimer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    marginBottom: 12,
  },
  disclaimerText: {
    flex: 1,
    fontSize: 12,
    color: GRAY_TEXT,
    lineHeight: 18,
  },
  bottomSpacer: { height: 100 },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  applyBtn: {
    backgroundColor: PRIMARY_BLUE,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  applyBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },
});
