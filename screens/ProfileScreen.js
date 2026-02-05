import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const PRIMARY_BLUE = "#1E90FF";
const GRAY_TEXT = "#6B7280";
const GRAY_LIGHT = "#9CA3AF";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  };

  const handleHistory = () => {
    // navigation.navigate('History') when History screen is added
  };

  const handleWallet = () => {
    // navigation.navigate('Wallet') when Wallet screen is added
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile header */}
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={48} color={GRAY_LIGHT} />
          </View>
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.userEmail}>user@example.com</Text>
          <TouchableOpacity style={styles.editBtn}>
            <Ionicons name="pencil" size={16} color={PRIMARY_BLUE} />
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Menu items */}
        <View style={styles.menuCard}>
          <MenuItem icon="person-outline" label="Personal Info" showBorder />
          <MenuItem
            icon="notifications-outline"
            label="Notifications"
            showBorder
          />
          <MenuItem
            icon="lock-closed-outline"
            label="Privacy & Security"
            showBorder
          />
          <MenuItem
            icon="time-outline"
            label="History"
            showBorder
            onPress={handleHistory}
          />
          <MenuItem
            icon="wallet-outline"
            label="Wallet"
            onPress={handleWallet}
          />
        </View>

        {/* Logout button */}
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={22} color="#EF4444" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function MenuItem({ icon, label, showBorder, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.menuItem, !showBorder && styles.menuItemLast]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Ionicons name={icon} size={22} color={GRAY_TEXT} />
      <Text style={styles.menuLabel}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color={GRAY_LIGHT} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 40,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  avatarWrap: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  userName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: GRAY_TEXT,
    marginBottom: 12,
  },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  editBtnText: {
    fontSize: 14,
    fontWeight: "600",
    color: PRIMARY_BLUE,
  },
  menuCard: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    gap: 12,
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#111827",
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#FEE2E2",
    gap: 8,
    marginTop: 30,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#EF4444",
  },
});
