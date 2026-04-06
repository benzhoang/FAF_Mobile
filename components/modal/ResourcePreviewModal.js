import React from "react";
import {
  Modal,
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ResourcePreviewModal({
  visible,
  index,
  urls,
  onClose,
  closeIconColor = "#FFFFFF",
}) {
  const safeUrls = Array.isArray(urls) ? urls : [];
  const safeIndex = typeof index === "number" ? index : null;
  const currentUrl =
    safeIndex !== null && safeUrls[safeIndex] ? safeUrls[safeIndex] : null;

  return (
    <Modal
      visible={!!visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.dialog} onPress={(e) => e.stopPropagation()}>
          <TouchableOpacity
            onPress={onClose}
            style={styles.closeBtn}
            accessibilityLabel="Đóng"
          >
            <Ionicons name="close" size={24} color={closeIconColor} />
          </TouchableOpacity>

          {currentUrl ? (
            <>
              <Image
                source={{ uri: currentUrl }}
                style={styles.image}
                resizeMode="contain"
              />
              <Text style={styles.counter}>
                Ảnh {safeIndex + 1} / {safeUrls.length}
              </Text>
            </>
          ) : (
            <View style={styles.imageFallback} />
          )}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.82)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  dialog: {
    width: "100%",
    maxWidth: 420,
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: -6,
    right: -6,
    zIndex: 2,
    padding: 10,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.10)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.12)",
  },
  image: {
    width: "100%",
    height: 420,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  imageFallback: {
    width: "100%",
    height: 420,
    borderRadius: 14,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  counter: {
    marginTop: 12,
    color: "rgba(255,255,255,0.75)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    paddingHorizontal: 12,
  },
});
