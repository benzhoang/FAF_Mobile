import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AIR_BLUE = "#0EA5E9";
const AIR_SKY = "#E0F2FE";
const GRAY_BORDER = "#E5E7EB";
const GRAY_TEXT = "#6B7280";

export default function MainScreen({ navigation }) {
  const navigate = useNavigation();
  const navigateToLogin = () => {
    navigate.navigate("Login");
  };
  const navigateToRegister = () => {
    navigate.navigate("Register");
  };
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        {/* Central Content Container */}
        <View style={styles.centralContent}>
          {/* Logo and Header */}
          <View style={styles.headerContainer}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <Text style={styles.welcomeSubtitle}>
              Connecting talent with purpose.
            </Text>
          </View>

          {/* Buttons Container */}
          <View style={styles.buttonsContainer}>
            {/* Sign In Button */}
            <TouchableOpacity
              style={styles.signInButton}
              onPress={navigateToLogin}
            >
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Create Account Button */}
            <TouchableOpacity
              style={styles.createAccountButton}
              onPress={navigateToRegister}
            >
              <Text style={styles.createAccountButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AIR_SKY,
  },
  container: {
    flex: 1,
    backgroundColor: AIR_SKY,
    paddingHorizontal: 24,
  },
  centralContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  welcomeSubtitle: {
    fontSize: 14,
    color: GRAY_TEXT,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    width: "100%",
    gap: 16,
  },
  signInButton: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    backgroundColor: AIR_BLUE,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: AIR_BLUE,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  signInButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  createAccountButton: {
    width: "100%",
    height: 56,
    borderRadius: 16,
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: GRAY_BORDER,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  createAccountButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
