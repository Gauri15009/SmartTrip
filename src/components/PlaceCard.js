import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import COLORS from "../constants/colors";

export default function PlaceCard({ place, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: place.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{place.name}</Text>

        <Text style={styles.type}>{place.type}</Text>

        <View style={styles.row}>
          <Text style={styles.distance}>
            📍 {place.distance}
          </Text>

          <Text style={styles.rating}>
            ⭐ {place.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 220,
    marginRight: 14,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 2,
  },

  image: {
    width: "100%",
    height: 130,
  },

  content: {
    padding: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
  },

  type: {
    marginTop: 4,
    fontSize: 13,
    color: COLORS.textSecondary,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  distance: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },

  rating: {
    fontSize: 12,
    fontWeight: "600",
  },
});