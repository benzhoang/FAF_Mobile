import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const AIR_BLUE = '#0EA5E9';
const AIR_SKY = '#E0F2FE';
const GRAY_BORDER = '#E5E7EB';

export default function MainScreen({ navigation }) {
    const navigate = useNavigation();
    const navigateToLogin = () => {
        navigate.navigate('Login');
    }
    const navigateToRegister = () => {
        navigate.navigate('Register');
    }
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        {/* Central Content Container */}
        <View style={styles.centralContent}>
          {/* Logo and Text */}
          <View style={styles.heroContainer}>
            {/* Logo Box */}
            <View style={styles.logoBox}>
              <Ionicons name="briefcase" size={48} color="#FFF" />
            </View>

            {/* Platform Name */}
            <Text style={styles.platformName}>FAF</Text>

            {/* Slogan */}
            <Text style={styles.slogan}>Connecting talent with purpose.</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
    marginBottom: 40,
  },
  globeButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  heroContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoBox: {
    width: 120,
    height: 120,
    borderRadius: 24,
    backgroundColor: AIR_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: AIR_BLUE,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  platformName: {
    fontSize: 48,
    fontWeight: '800',
    color: '#000',
    marginBottom: 12,
    letterSpacing: 1,
  },
  slogan: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    fontWeight: '500',
    paddingHorizontal: 40,
  },
  buttonsContainer: {
    width: '100%',
    gap: 16,
  },
  signInButton: {
    width: '100%',
    height: 56,
    borderRadius: 16,
    backgroundColor: AIR_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: AIR_BLUE,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  signInButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  createAccountButton: {
    width: '100%',
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: GRAY_BORDER,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  createAccountButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
