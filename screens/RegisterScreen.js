import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AIR_BLUE = "#0EA5E9";
const AIR_SKY = "#E0F2FE";
const GRAY_TEXT = "#6B7280";
const GRAY_BORDER = "#E5E7EB";

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  return (
    <View style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.navigate("Main")}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Logo and Header */}
          <View style={styles.headerContainer}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.welcomeTitle}>Create your account</Text>
            <View style={styles.subtitleContainer}>
              <Text style={styles.welcomeSubtitle}>
                Join the future of work.{" "}
              </Text>
            </View>
          </View>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            {/* Full Name */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>FULL NAME</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Jane Doe"
                  placeholderTextColor={GRAY_TEXT}
                  value={fullName}
                  onChangeText={setFullName}
                  autoCapitalize="words"
                />
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={GRAY_TEXT}
                  style={styles.inputIcon}
                />
              </View>
            </View>

            {/* Email Address */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>EMAIL ADDRESS</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="jane@example.com"
                  placeholderTextColor={GRAY_TEXT}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={GRAY_TEXT}
                  style={styles.inputIcon}
                />
              </View>
            </View>

            {/* Password */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>PASSWORD</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Enter your password"
                  placeholderTextColor={GRAY_TEXT}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.inputIcon}
                >
                  <Ionicons
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    size={20}
                    color={GRAY_TEXT}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Confirm Password */}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>CONFIRM PASSWORD</Text>
              <View style={styles.inputFieldContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Confirm your password"
                  placeholderTextColor={GRAY_TEXT}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={styles.inputIcon}
                >
                  <Ionicons
                    name={
                      showConfirmPassword ? "eye-outline" : "eye-off-outline"
                    }
                    size={20}
                    color={GRAY_TEXT}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Terms and Privacy Policy */}
          <View style={styles.termsContainer}>
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setAgreeToTerms(!agreeToTerms)}
            >
              <View style={styles.checkbox}>
                {agreeToTerms && (
                  <Ionicons name="checkmark" size={14} color={AIR_BLUE} />
                )}
              </View>
            </TouchableOpacity>
            <View style={styles.termsTextContainer}>
              <Text style={styles.termsText}>I agree to the </Text>
              <TouchableOpacity>
                <Text style={styles.termsLink}>Terms</Text>
              </TouchableOpacity>
              <Text style={styles.termsText}> and </Text>
              <TouchableOpacity>
                <Text style={styles.termsLink}>Privacy</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Create Account Button */}
          <TouchableOpacity
            style={styles.createAccountButton}
            onPress={() => navigation?.navigate("Login")}
          >
            <Text style={styles.createAccountButtonText}>Create Account</Text>
            <Ionicons name="arrow-forward" size={18} color="#FFF" />
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR CONTINUE WITH</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Social Login Buttons */}
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <View style={styles.googleIconContainer}>
                <Text style={styles.googleIcon}>G</Text>
              </View>
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkedInButton}>
              <Ionicons name="logo-linkedin" size={24} color="#FFF" />
              <Text style={styles.linkedInButtonText}>LinkedIn</Text>
            </TouchableOpacity>
          </View>

          {/* Already have account link */}
          <View style={styles.loginLinkContainer}>
            <Text style={styles.welcomeSubtitle}>
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => navigation?.navigate("Login")}>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 40,
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
    marginBottom: 4,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#000",
    marginBottom: 2,
    textAlign: "center",
  },
  subtitleContainer: {
    justifyContent: "center",
    marginBottom: 2,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: GRAY_TEXT,
    textAlign: "center",
  },
  loginLinkContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  loginLink: {
    fontSize: 14,
    color: AIR_BLUE,
    fontWeight: "600",
  },
  accountTypeContainer: {
    flexDirection: "row",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
  },
  accountTypeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    gap: 8,
  },
  accountTypeButtonActive: {
    backgroundColor: AIR_SKY,
    borderWidth: 1,
    borderColor: AIR_BLUE,
  },
  accountTypeText: {
    fontSize: 16,
    fontWeight: "600",
    color: GRAY_TEXT,
  },
  accountTypeTextActive: {
    color: "#000",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 8,
  },
  inputWrapper: {
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#000",
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  inputFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: GRAY_BORDER,
    paddingHorizontal: 16,
    height: 46,
  },
  inputField: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingVertical: 0,
  },
  inputIcon: {
    marginLeft: 8,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  checkboxContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: GRAY_BORDER,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  termsTextContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  termsText: {
    fontSize: 14,
    color: "#000",
  },
  termsLink: {
    fontSize: 14,
    color: AIR_BLUE,
    fontWeight: "600",
  },
  createAccountButton: {
    backgroundColor: AIR_BLUE,
    borderRadius: 12,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    shadowColor: AIR_BLUE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    gap: 8,
  },
  createAccountButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: GRAY_BORDER,
  },
  dividerText: {
    fontSize: 12,
    color: GRAY_TEXT,
    marginHorizontal: 16,
    fontWeight: "600",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    gap: 12,
  },
  socialButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: GRAY_BORDER,
    height: 46,
    gap: 8,
  },
  googleIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: GRAY_BORDER,
  },
  googleIcon: {
    fontSize: 14,
    fontWeight: "700",
    color: "#4285F4",
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  linkedInButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AIR_BLUE,
    borderRadius: 12,
    height: 46,
    gap: 8,
  },
  linkedInButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
  copyrightText: {
    fontSize: 12,
    color: GRAY_TEXT,
    textAlign: "center",
  },
});
