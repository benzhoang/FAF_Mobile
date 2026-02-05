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
import SearchBar from "../components/SearchBar";

const PRIMARY_BLUE = "#1E90FF";
const GRAY_TEXT = "#6B7280";
const GRAY_LIGHT = "#9CA3AF";

const CONVERSATIONS = [
  {
    id: 1,
    name: "Creative Studios",
    lastMessage: "Thanks for applying! We'd like to schedule an interview.",
    time: "2h ago",
    unread: true,
    avatarBg: "#D4A574",
  },
  {
    id: 2,
    name: "Private Owner",
    lastMessage: "Are you available tomorrow for the dog walk?",
    time: "Yesterday",
    unread: false,
    avatarBg: "#F97316",
  },
  {
    id: 3,
    name: "Apex Media",
    lastMessage: "Your portfolio looks great. Let's discuss the project.",
    time: "2d ago",
    unread: false,
    avatarBg: "#1E90FF",
  },
];

export default function MessageScreen() {
  const navigation = useNavigation();

  const handleConversation = (item) => {
    // navigation.navigate('Chat', { conversationId: item.id }) when Chat screen is added
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Messages</Text>
        </View>

        {/* Search */}
        <SearchBar placeholder="Search conversations..." editable={false} />

        {/* Conversation list */}
        {CONVERSATIONS.length > 0 ? (
          <View style={styles.list}>
            {CONVERSATIONS.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.conversationItem}
                onPress={() => handleConversation(item)}
                activeOpacity={0.7}
              >
                <View
                  style={[styles.avatar, { backgroundColor: item.avatarBg }]}
                >
                  <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
                </View>
                <View style={styles.conversationBody}>
                  <View style={styles.conversationTop}>
                    <Text style={styles.conversationName} numberOfLines={1}>
                      {item.name}
                    </Text>
                    <Text style={styles.conversationTime}>{item.time}</Text>
                  </View>
                  <View style={styles.conversationBottom}>
                    <Text
                      style={[
                        styles.lastMessage,
                        item.unread && styles.lastMessageUnread,
                      ]}
                      numberOfLines={2}
                    >
                      {item.lastMessage}
                    </Text>
                    {item.unread && <View style={styles.unreadDot} />}
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={20} color={GRAY_LIGHT} />
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.emptyState}>
            <View style={styles.emptyIconWrap}>
              <Ionicons
                name="chatbubbles-outline"
                size={64}
                color={GRAY_LIGHT}
              />
            </View>
            <Text style={styles.emptyTitle}>No messages yet</Text>
            <Text style={styles.emptySubtitle}>
              When you apply to jobs or get replies, they'll show up here.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 30,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
  },
  list: {
    gap: 0,
  },
  conversationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    gap: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
  },
  conversationBody: {
    flex: 1,
    minWidth: 0,
  },
  conversationTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  conversationName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    flex: 1,
  },
  conversationTime: {
    fontSize: 12,
    color: GRAY_LIGHT,
    marginLeft: 8,
  },
  conversationBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  lastMessage: {
    fontSize: 14,
    color: GRAY_TEXT,
    flex: 1,
  },
  lastMessageUnread: {
    fontWeight: "600",
    color: "#111827",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: PRIMARY_BLUE,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  emptyIconWrap: {
    marginBottom: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 14,
    color: GRAY_TEXT,
    textAlign: "center",
    lineHeight: 20,
  },
});
