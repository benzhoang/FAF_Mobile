import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({
  placeholder = "Search gigs, tasks, companies...",
  value,
  onChangeText,
  onFilterPress,
  editable = true,
  showFilter = false,
  iconColor = "#9CA3AF",
  placeholderTextColor = "#9CA3AF",
  containerStyle,
  inputStyle,
}) {
  return (
    <View style={[styles.searchBar, containerStyle]}>
      <Ionicons name="search" size={20} color={iconColor} />
      <TextInput
        style={[styles.searchInput, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
      />
      {showFilter && (
        <TouchableOpacity onPress={onFilterPress}>
          <Ionicons name="options-outline" size={22} color={iconColor} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 16,
    gap: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#111827",
    padding: 0,
  },
});
