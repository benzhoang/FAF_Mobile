import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AIR_BLUE = "#0EA5E9";
const GRAY_TEXT = "#6B7280";
const GRAY_BORDER = "#E5E7EB";

const OTP_LENGTH = 6;

export default function OTPScreen({ navigation }) {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const inputRefs = useRef([]);

  const handleOtpChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length === OTP_LENGTH) {
      // TODO: call API verify OTP
      navigation?.navigate("Login");
    }
  };

  const handleResendOtp = () => {
    // TODO: call API resend OTP
  };

  const otpComplete = otp.every((d) => d !== "");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.safeArea}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Logo - giống LoginScreen */}
        <View style={styles.headerContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>Xác thực OTP</Text>
        <Text style={styles.description}>
          Chúng tôi đã gửi mã xác thực 6 chữ số đến email của bạn
        </Text>

        {/* OTP inputs */}
        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              style={[styles.otpBox, digit !== "" && styles.otpBoxFilled]}
              value={digit}
              onChangeText={(v) => handleOtpChange(v, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>

        {/* Verify button */}
        <TouchableOpacity
          style={[
            styles.verifyButton,
            !otpComplete && styles.verifyButtonDisabled,
          ]}
          onPress={handleVerify}
          disabled={!otpComplete}
          activeOpacity={0.8}
        >
          <Text style={styles.verifyButtonText}>Xác thực</Text>
          <Ionicons name="checkmark" size={22} color="#FFF" />
        </TouchableOpacity>

        {/* Resend OTP */}
        <View style={styles.resendRow}>
          <Text style={styles.resendLabel}>Không nhận được mã? </Text>
          <TouchableOpacity onPress={handleResendOtp} activeOpacity={0.7}>
            <Text style={styles.resendLink}>Gửi lại mã OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 56,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 44,
    left: 24,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    color: "#000",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: GRAY_TEXT,
    textAlign: "center",
    marginBottom: 32,
    paddingHorizontal: 16,
    lineHeight: 20,
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 28,
  },
  otpBox: {
    width: 48,
    height: 52,
    borderWidth: 2,
    borderColor: GRAY_BORDER,
    borderRadius: 12,
    fontSize: 22,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    backgroundColor: "#FFF",
  },
  otpBoxFilled: {
    borderColor: AIR_BLUE,
  },
  verifyButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AIR_BLUE,
    borderRadius: 12,
    height: 52,
    width: "100%",
    gap: 8,
    marginBottom: 24,
    shadowColor: AIR_BLUE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  verifyButtonDisabled: {
    opacity: 0.6,
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
  },
  resendRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  resendLabel: {
    fontSize: 14,
    color: GRAY_TEXT,
  },
  resendLink: {
    fontSize: 14,
    color: AIR_BLUE,
    fontWeight: "600",
  },
  backToLogin: {
    marginTop: "auto",
    paddingBottom: 32,
  },
  backToLoginText: {
    fontSize: 14,
    color: GRAY_TEXT,
  },
});
