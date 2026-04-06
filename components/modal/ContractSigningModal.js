import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BG_BASE = "#020617";
const BG_SURFACE = "#090e17";
const TEXT_PRIMARY = "#FFFFFF";
const TEXT_SECONDARY = "#e2e8f0";
const TEXT_MUTED = "#94a3b8";
const CYAN_ACCENT = "#22d3ee";

export default function ContractSigningModal({
  visible,
  otp,
  setOtp,
  onCancel,
  onSubmit,
  signing = false,
  accentColor = CYAN_ACCENT,
  confirmColor = "#34d399",
}) {
  return (
    <Modal visible={!!visible} animationType="fade" transparent>
      <View style={styles.alertOverlay}>
        <View style={styles.alertDialog}>
          <View
            style={[
              styles.alertIconWrap,
              { backgroundColor: String(accentColor) + "20" },
            ]}
          >
            <Ionicons name="keypad" size={40} color={accentColor} />
          </View>
          <Text style={styles.alertTitle}>KÝ HỢP ĐỒNG</Text>
          <Text style={styles.alertMessage}>
            Vui lòng nhập mã OTP đã được gửi tới email của bạn để xác thực ký
            kết.
          </Text>

          <TextInput
            style={styles.otpInput}
            value={otp}
            onChangeText={setOtp}
            placeholder="6 chữ số"
            placeholderTextColor={TEXT_MUTED}
            keyboardType="numeric"
            maxLength={6}
          />

          <View style={styles.alertBtnRow}>
            <TouchableOpacity style={styles.alertCancelBtn} onPress={onCancel}>
              <Text style={styles.alertCancelText}>HỦY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.alertOKButton,
                { backgroundColor: confirmColor, flex: 1, marginTop: 0 },
              ]}
              onPress={onSubmit}
              disabled={signing}
            >
              {signing ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.alertOKText}>KÝ KẾT</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  otpInput: {
    width: "100%",
    backgroundColor: BG_BASE,
    borderRadius: 14,
    height: 56,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "800",
    color: CYAN_ACCENT,
    letterSpacing: 8,
    borderWidth: 1,
    borderColor: "#1e293b",
    marginBottom: 24,
    marginTop: 10,
  },
  alertOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  alertDialog: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: BG_SURFACE,
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  alertIconWrap: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: TEXT_PRIMARY,
    marginBottom: 10,
    letterSpacing: 1,
  },
  alertMessage: {
    fontSize: 14,
    color: TEXT_SECONDARY,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  alertBtnRow: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  alertCancelBtn: {
    flex: 1,
    height: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: BG_BASE,
    borderWidth: 1,
    borderColor: "#1e293b",
  },
  alertCancelText: {
    color: TEXT_SECONDARY,
    fontSize: 15,
    fontWeight: "700",
  },
  alertOKButton: {
    width: "100%",
    height: 50,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  alertOKText: {
    fontSize: 15,
    fontWeight: "800",
    color: "#FFF",
    letterSpacing: 1,
  },
});
