import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import COLORS from "../constants/colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>V</Text>
      </View>

      <Text style={styles.name}>My Travel Profile</Text>

      <Text style={styles.subtitle}>
        Your personal travel preferences
      </Text>

      <View style={styles.stats}>
        <View>
          <Text style={styles.number}>5</Text>
          <Text style={styles.label}>Trips</Text>
        </View>

        <View>
          <Text style={styles.number}>28</Text>
          <Text style={styles.label}>Places</Text>
        </View>

        <View>
          <Text style={styles.number}>76</Text>
          <Text style={styles.label}>Photos</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Favorite Categories
        </Text>

        <Text style={styles.preference}>
          🌄 Nature        ⭐⭐⭐⭐⭐
        </Text>

        <Text style={styles.preference}>
          🍽️ Food          ⭐⭐⭐⭐⭐
        </Text>

        <Text style={styles.preference}>
          🏛️ History       ⭐⭐⭐
        </Text>

        <Text style={styles.preference}>
          🛍️ Shopping      ⭐⭐⭐⭐
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    padding: 20,
    paddingTop: 80,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: "800",
  },

  name: {
    marginTop: 15,
    fontSize: 23,
    fontWeight: "800",
    color: COLORS.text,
  },

  subtitle: {
    marginTop: 5,
    color: COLORS.textSecondary,
  },

  stats: {
    width: "100%",
    marginTop: 30,
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  number: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "800",
    color: COLORS.primary,
  },

  label: {
    textAlign: "center",
    marginTop: 4,
    color: COLORS.textSecondary,
  },

  card: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 18,
    padding: 20,
    marginTop: 20,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
    color: COLORS.text,
  },

  preference: {
    paddingVertical: 9,
    color: COLORS.textSecondary,
    fontSize: 15,
  },
});