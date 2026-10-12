import React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import COLORS from "../constants/colors";

export default function PlaceDetailsScreen({
  route,
  navigation,
}) {
  const place = route.params.place;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {place.image && (
        <Image
          source={{ uri: place.image }}
          style={styles.image}
        />
      )}

      <View style={styles.content}>
        <Text style={styles.title}>
          {place.name}
        </Text>

        <Text style={styles.type}>
          {place.type ||
            place.cuisine ||
            "Place"}
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.info}>
            ⭐ {place.rating}
          </Text>

          <Text style={styles.info}>
            📍 {place.distance}
          </Text>

          {place.price && (
            <Text style={styles.info}>
              {place.price}
            </Text>
          )}
        </View>

        <Text style={styles.description}>
          {place.description ||
            "A recommended place near your current destination. Add it to your trip and share your experience after visiting."}
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() =>
            navigation.navigate(
              "AddReview",
              { place }
            )
          }
        >
          <Text style={styles.primaryText}>
            📷 Visit & Review
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() =>
            navigation.navigate(
              "Map",
              { place }
            )
          }
        >
          <Text style={styles.secondaryText}>
            🗺️ View on Map
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            navigation.goBack();

          }}
        >
          <Text style={styles.addText}>
            + Add to My Trip
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  image: {
    width: "100%",
    height: 280,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.text,
  },

  type: {
    marginTop: 6,
    color: COLORS.textSecondary,
    fontSize: 15,
  },

  infoRow: {
    flexDirection: "row",
    gap: 18,
    marginTop: 18,
  },

  info: {
    fontWeight: "600",
    color: COLORS.text,
  },

  description: {
    marginTop: 20,
    lineHeight: 23,
    color: COLORS.textSecondary,
    fontSize: 15,
  },

  primaryButton: {
    backgroundColor: COLORS.primary,
    padding: 17,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 28,
  },

  primaryText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },

  secondaryButton: {
    backgroundColor: COLORS.white,
    padding: 17,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 12,
  },

  secondaryText: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: "700",
  },

  addButton: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 17,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 12,
    marginBottom: 40,
  },

  addText: {
    color: COLORS.primary,
    fontWeight: "700",
  },
});