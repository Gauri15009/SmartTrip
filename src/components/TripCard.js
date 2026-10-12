import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import COLORS from "../constants/colors";

export default function TripCard({ trip, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: trip.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{trip.name}</Text>

        <Text style={styles.destination}>
          📍 {trip.destination}
        </Text>

        <Text style={styles.date}>
          {trip.startDate} - {trip.endDate}
        </Text>

        <View style={styles.bottom}>
          <Text style={styles.info}>
            {trip.places} places
          </Text>

          <Text style={styles.info}>
            ⭐ {trip.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 170,
  },

  content: {
    padding: 16,
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.text,
  },

  destination: {
    marginTop: 6,
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  date: {
    marginTop: 6,
    fontSize: 13,
    color: COLORS.textLight,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },

  info: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textSecondary,
  },
});