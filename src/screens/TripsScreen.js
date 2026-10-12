import React from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import COLORS from "../constants/colors";

import TripCard from "../components/TripCard";

import { trips } from "../data/mockData";

export default function TripsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Trips</Text>

          <Text style={styles.subtitle}>
            Plan and manage your adventures
          </Text>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("CreateTrip")}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>
        Upcoming & Previous
      </Text>

      {trips.map((trip) => (
        <TripCard
          key={trip.id}
          trip={trip}
          onPress={() =>
            navigation.navigate("TripDetails", {
              trip,
            })
          }
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.text,
  },

  subtitle: {
    marginTop: 5,
    color: COLORS.textSecondary,
  },

  addButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  addText: {
    color: COLORS.white,
    fontSize: 28,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 15,
  },
});