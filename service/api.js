import axios from "axios";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Android emulator: 10.0.2.2 trỏ về localhost của máy host. Thiết bị thật: dùng IP máy (vd 192.168.1.x)
const API_BASE_URL =
  Platform.OS === "android"
    ? "http://10.0.2.2:5000/api"
    : "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor gắn token vào request nếu có
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (_) {}
    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * GET /api/users/me - Lấy profile user hiện tại (cần token)
 */
export const getCurrentUserProfile = async () => {
  try {
    const response = await api.get("/users/me");

    const data = response.data;

    if (data.code === 0 && data.data) {
      return {
        success: true,
        data: data.data,
        message: data.message,
      };
    }

    return {
      success: false,
      error: data.errorMessage || data.message || "Lấy thông tin user thất bại",
      errorCode: data.errorCode,
    };
  } catch (error) {
    const errMsg =
      error.response?.data?.message ||
      error.response?.data?.errorMessage ||
      error.message ||
      "Lấy thông tin user thất bại";
    return {
      success: false,
      error: errMsg,
      status: error.response?.status,
    };
  }
};

/**
 * POST /api/auth/register - Đăng ký tài khoản mới
 * @param {string} email
 * @param {string} password
 * @param {string} role - VD: "employer"
 * @param {string} fullName
 */
export const register = async (email, password, role, fullName) => {
  try {
    const response = await api.post("/auth/register", {
      email,
      password,
      role,
      fullName,
    });

    const data = response.data;

    if (data.code === 0 && data.data) {
      return {
        success: true,
        data: data.data,
        message: data.message,
      };
    }

    return {
      success: false,
      error: data.errorMessage || data.message || "Đăng ký thất bại",
      errorCode: data.errorCode,
    };
  } catch (error) {
    const errMsg =
      error.response?.data?.message ||
      error.response?.data?.errorMessage ||
      error.message ||
      "Đăng ký thất bại";
    return {
      success: false,
      error: errMsg,
      status: error.response?.status,
    };
  }
};

/**
 * POST /api/auth/login - Đăng nhập
 * @param {string} email
 * @param {string} password
 */
export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const data = response.data;

    // Backend trả về { token: "..." } (Swagger)
    if (data.token) {
      return {
        success: true,
        data: { accessToken: data.token },
        message: "Đăng nhập thành công",
      };
    }

    return {
      success: false,
      error:
        data.error || data.errorMessage || data.message || "Đăng nhập thất bại",
      errorCode: data.errorCode,
    };
  } catch (error) {
    const errMsg =
      error.response?.data?.error ||
      error.response?.data?.message ||
      error.response?.data?.errorMessage ||
      error.message ||
      "Đăng nhập thất bại";
    return {
      success: false,
      error: errMsg,
      status: error.response?.status,
    };
  }
};

/**
 * POST /api/auth/verify-otp - Xác thực OTP kích hoạt tài khoản
 * @param {string} email
 * @param {string} otp
 */
export const verifyOtp = async (email, otp) => {
  try {
    const response = await api.post("/auth/verify-otp", {
      email,
      otp,
    });

    const data = response.data;

    if (data.code === 0 && data.data) {
      return {
        success: true,
        data: data.data,
        message: data.message,
      };
    }

    return {
      success: false,
      error: data.errorMessage || data.message || "Xác thực OTP thất bại",
      errorCode: data.errorCode,
    };
  } catch (error) {
    const errMsg =
      error.response?.data?.message ||
      error.response?.data?.errorMessage ||
      error.message ||
      "Xác thực OTP thất bại";
    return {
      success: false,
      error: errMsg,
      status: error.response?.status,
    };
  }
};

/**
 * POST /api/auth/resend-otp - Gửi lại OTP
 * @param {string} email
 */
export const resendOtp = async (email) => {
  try {
    const response = await api.post("/auth/resend-otp", {
      email,
    });

    const data = response.data;

    if (data.code === 0 && data.data) {
      return {
        success: true,
        data: data.data,
        message: data.message,
      };
    }

    return {
      success: false,
      error: data.errorMessage || data.message || "Gửi lại OTP thất bại",
      errorCode: data.errorCode,
    };
  } catch (error) {
    const errMsg =
      error.response?.data?.message ||
      error.response?.data?.errorMessage ||
      error.message ||
      "Gửi lại OTP thất bại";
    return {
      success: false,
      error: errMsg,
      status: error.response?.status,
    };
  }
};
