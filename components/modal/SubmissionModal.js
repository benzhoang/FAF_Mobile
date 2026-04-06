import React from "react";
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
const EMERALD = "#34d399";

export default function SubmissionModal({
  visible,
  onClose,
  selectedCheckpoint,
  submissionData,
  setSubmissionData,
  selectedFile,
  onPickFile,
  onRemoveFile,
  onSubmit,
  submitting = false,
  uploadingFile = false,
  title = "Nộp bài làm",
}) {
  const safeData = submissionData || { work_link: "", description: "" };
  const canEdit = typeof setSubmissionData === "function";
  const setField = (key, value) => {
    if (!canEdit) return;
    setSubmissionData({ ...safeData, [key]: value });
  };

  const disabled = !!submitting || !!uploadingFile;

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
            <Text style={styles.milestoneContext}>
              Giai đoạn: {selectedCheckpoint?.name}
            </Text>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>
                Link kết quả / Tài nguyên (GitHub, Drive, v.v.)
              </Text>
              <TextInput
                style={styles.input}
                value={safeData.work_link}
                onChangeText={(v) => setField("work_link", v)}
                placeholder="https://..."
                placeholderTextColor={TEXT_MUTED}
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.filePickerHeader}>
                <Text style={styles.inputLabel}>
                  Hoặc tải lên hình ảnh từ điện thoại
                </Text>
                {selectedFile && (
                  <TouchableOpacity onPress={onRemoveFile}>
                    <Text style={styles.removeFileText}>Xóa</Text>
                  </TouchableOpacity>
                )}
              </View>

              <TouchableOpacity
                style={[
                  styles.filePickerBtn,
                  selectedFile && styles.filePickerBtnActive,
                ]}
                onPress={onPickFile}
              >
                <Ionicons
                  name={selectedFile ? "image" : "cloud-upload-outline"}
                  size={24}
                  color={selectedFile ? EMERALD : CYAN_ACCENT}
                />
                <Text
                  style={[
                    styles.filePickerBtnText,
                    selectedFile && { color: EMERALD },
                  ]}
                >
                  {selectedFile
                    ? `Đã chọn: ${selectedFile.fileName || "Ảnh bài làm"}`
                    : "Chọn hình ảnh bài làm"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Ghi chú đính kèm</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={safeData.description}
                onChangeText={(v) => setField("description", v)}
                multiline
                numberOfLines={4}
                placeholder="Ghi chú cho đối tác xem..."
                placeholderTextColor={TEXT_MUTED}
              />
            </View>

            <TouchableOpacity
              style={[styles.submitBtn, disabled && styles.btnDisabled]}
              onPress={onSubmit}
              disabled={disabled}
            >
              {disabled ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.submitBtnText}>Xác nhận nộp bài</Text>
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
  milestoneContext: {
    color: TEXT_MUTED,
    fontSize: 13,
    marginBottom: 16,
    fontWeight: "600",
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
  filePickerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  filePickerBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: BG_BASE,
    borderRadius: 14,
    height: 56,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#1e293b",
    borderStyle: "dashed",
    gap: 12,
  },
  filePickerBtnActive: {
    borderColor: EMERALD,
    backgroundColor: EMERALD + "05",
    borderStyle: "solid",
  },
  filePickerBtnText: {
    color: TEXT_MUTED,
    fontSize: 14,
    fontWeight: "600",
    flex: 1,
  },
  removeFileText: {
    color: "#f43f5e",
    fontSize: 12,
    fontWeight: "700",
  },
});
