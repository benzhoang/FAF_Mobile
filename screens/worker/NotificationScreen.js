import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PRIMARY_BLUE = "#1E90FF";
const GRAY_TEXT = "#6B7280";
const GRAY_LIGHT = "#9CA3AF";

const SAMPLE_NOTIFICATIONS = [
  {
    id: "1",
    type: "order",
    title: "Order confirmed",
    message: "Order #FAF-2024-001 has been confirmed. Expected delivery in 2-3 days.",
    time: "10 min ago",
    read: false,
  },
  {
    id: "2",
    type: "promo",
    title: "20% off promotion",
    message: "Valid for orders over $50. Code: SAVE20. Expires Feb 28.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    type: "system",
    title: "App update available",
    message: "A new version is ready with improved features.",
    time: "Yesterday",
    read: true,
  },
  {
    id: "4",
    type: "order",
    title: "Order out for delivery",
    message: "Order #FAF-2024-002 is on its way. ETA: 2:00 PM today.",
    time: "Yesterday",
    read: true,
  },
  {
    id: "5",
    type: "promo",
    title: "Cart reminder",
    message: "You have 3 items in your cart. Complete your order to get free shipping.",
    time: "2 days ago",
    read: true,
  },
];

function getIconForType(type) {
  switch (type) {
    case "order":
      return "cart-outline";
    case "promo":
      return "pricetag-outline";
    case "system":
      return "information-circle-outline";
    default:
      return "notifications-outline";
  }
}

function NotificationItem({ item }) {
  return (
    <TouchableOpacity
      style={[styles.item, !item.read && styles.itemUnread]}
      activeOpacity={0.7}
    >
      <View style={styles.iconWrap}>
        <Ionicons
          name={getIconForType(item.type)}
          size={24}
          color={PRIMARY_BLUE}
        />
      </View>
      <View style={styles.content}>
        <Text style={[styles.itemTitle, !item.read && styles.itemTitleUnread]}>
          {item.title}
        </Text>
        <Text style={styles.itemMessage} numberOfLines={2}>
          {item.message}
        </Text>
        <Text style={styles.itemTime}>{item.time}</Text>
      </View>
      {!item.read && <View style={styles.unreadDot} />}
    </TouchableOpacity>
  );
}

export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={SAMPLE_NOTIFICATIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="notifications-off-outline" size={48} color={GRAY_LIGHT} />
            <Text style={styles.emptyText}>Chưa có thông báo</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  itemUnread: {
    backgroundColor: "#EFF6FF",
    borderColor: "#BFDBFE",
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#DBEAFE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 4,
  },
  itemTitleUnread: {
    color: "#1E40AF",
    fontWeight: "700",
  },
  itemMessage: {
    fontSize: 13,
    color: GRAY_TEXT,
    lineHeight: 18,
    marginBottom: 6,
  },
  itemTime: {
    fontSize: 12,
    color: GRAY_LIGHT,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: PRIMARY_BLUE,
    marginTop: 6,
    marginLeft: 8,
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: GRAY_TEXT,
    marginTop: 12,
  },
});
