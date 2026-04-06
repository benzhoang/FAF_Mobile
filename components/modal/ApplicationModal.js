import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BG_BASE = "#020617";
const BG_SURFACE = "#090e17";
const TEXT_PRIMARY = "#FFFFFF";
const TEXT_SECONDARY = "#e2e8f0";
const TEXT_MUTED = "#94a3b8";
const CYAN_ACCENT = "#22d3ee";

export default function ApplicationModal({
  visible,
  onClose,
  proposalData,
  setProposalData,
  onSubmit,
  submitting = false,
  title = "Gửi đề xuất",
}) {
  const safeData = proposalData || {
    total_amount: "",
    expected_days: "",
    cover_letter: "",
  };

  const canEdit = typeof setProposalData === "function";
  const setField = (key, value) => {
    if (!canEdit) return;
    setProposalData({ ...safeData, [key]: value });
  };

  const submitDisabled = useMemo(() => !!submitting, [submitting]);

  return (
    <Modal visible={!!visible} animationType="slide" transparent>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.modalOverlay}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={24} color={TEXT_PRIMARY} />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Giá đề xuất (Pts)</Text>
              <TextInput
                style={styles.input}
                value={safeData.total_amount}
                onChangeText={(v) => setField("total_amount", v)}
                keyboardType="numeric"
                placeholder="Nhập giá của bạn"
                placeholderTextColor={TEXT_MUTED}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Thời gian hoàn thành (Ngày)</Text>
              <TextInput
                style={styles.input}
                value={safeData.expected_days}
                onChangeText={(v) => setField("expected_days", v)}
                keyboardType="numeric"
                placeholder="Ví dụ: 3"
                placeholderTextColor={TEXT_MUTED}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Thư ngỏ</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={safeData.cover_letter}
                onChangeText={(v) => setField("cover_letter", v)}
                multiline
                numberOfLines={4}
                placeholder="Giới thiệu về kỹ năng và kinh nghiệm của bạn..."
                placeholderTextColor={TEXT_MUTED}
              />
            </View>

            <TouchableOpacity
              style={[styles.submitBtn, submitDisabled && styles.btnDisabled]}
              onPress={onSubmit}
              disabled={submitDisabled}
            >
              {submitting ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.submitBtnText}>Gửi ứng tuyển</Text>
              )}
            </TouchableOpacity>
            <View style={{ height: 40 }} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(2, 6, 23, 0.8)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: BG_SURFACE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    maxHeight: "90%",
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: TEXT_PRIMARY,
  },
  closeBtn: {
    padding: 4,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: TEXT_SECONDARY,
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    backgroundColor: BG_BASE,
    borderRadius: 12,
    padding: 14,
    color: TEXT_PRIMARY,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  textArea: {
    height: 120,
    textAlignVertical: "top",
  },
  submitBtn: {
    backgroundColor: CYAN_ACCENT,
    height: 54,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  submitBtnText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "800",
  },
  btnDisabled: {
    opacity: 0.6,
  },
});
