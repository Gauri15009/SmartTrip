import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import COLORS from "../constants/colors";

export default function SectionHeader({
  title,
  action,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {action && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.action}>
            {action}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  title: {
    fontSize: 19,
    fontWeight: "700",
    color: COLORS.text,
  },

  action: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});