import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import COLORS from "../constants/colors";

import TripCard from "../components/TripCard";
import PlaceCard from "../components/PlaceCard";

import { trips, nearbyPlaces } from "../data/mockData";
import { getCurrentLocation } from "../services/locationService";

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    loadLocation();
  }, []);

  const loadLocation = async () => {
    try {
      const currentLocation = await getCurrentLocation();

      setLocation(currentLocation);
    } catch (error) {
      Alert.alert(
        "Location Required",
        "Please allow location access to explore nearby places."
      );
    }
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning 👋</Text>

          <Text style={styles.title}>
            Where are you going?
          </Text>
        </View>

        <View style={styles.locationIcon}>
          <Text>📍</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.locationBox}
        onPress={loadLocation}
      >
        <Text style={styles.locationTitle}>
          Current Location
        </Text>

        {location ? (
          <Text style={styles.locationText}>
            {location.latitude.toFixed(4)},{" "}
            {location.longitude.toFixed(4)}
          </Text>
        ) : (
          <Text style={styles.locationText}>
            Getting your location...
          </Text>
        )}
      </TouchableOpacity>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming Trip</Text>

        <TouchableOpacity onPress={() => navigation.navigate("Trips")}>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      {trips.length > 0 && (
        <TripCard
          trip={trips[0]}
          onPress={() =>
            navigation.navigate("TripDetails", {
              trip: trips[0],
            })
          }
        />
      )}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          Explore Nearby
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Explore")}
        >
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {nearbyPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onPress={() =>
              navigation.navigate("PlaceDetails", {
                place,
              })
            }
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate("CreateTrip")}
      >
        <Text style={styles.createButtonText}>
          + Plan a New Trip
        </Text>
      </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  greeting: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  title: {
    marginTop: 5,
    fontSize: 26,
    fontWeight: "800",
    color: COLORS.text,
  },

  locationIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.white,
    alignItems: "center",
    justifyContent: "center",
  },

  locationBox: {
    backgroundColor: COLORS.primary,
    padding: 18,
    borderRadius: 16,
    marginTop: 22,
  },

  locationTitle: {
    color: "#DBEAFE",
    fontSize: 13,
  },

  locationText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "600",
    marginTop: 5,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 28,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "700",
    color: COLORS.text,
  },

  seeAll: {
    color: COLORS.primary,
    fontWeight: "600",
  },

  createButton: {
    backgroundColor: COLORS.text,
    padding: 17,
    borderRadius: 15,
    marginTop: 28,
    marginBottom: 40,
    alignItems: "center",
  },

  createButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
});