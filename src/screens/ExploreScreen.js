import React, { useState } from "react";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import COLORS from "../constants/colors";

import PlaceCard from "../components/PlaceCard";

import {
  nearbyPlaces,
  restaurants,
} from "../data/mockData";

export default function ExploreScreen({ navigation }) {
  const [category, setCategory] = useState("Places");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Nearby</Text>

        <Text style={styles.subtitle}>
          Discover places around you
        </Text>
      </View>

      <View style={styles.categories}>
        {["Places", "Restaurants", "Activities"].map(
          (item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.category,
                category === item && styles.activeCategory,
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === item &&
                    styles.activeCategoryText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>

      {category === "Restaurants" ? (
        <View>
          {restaurants.map((restaurant) => (
            <TouchableOpacity
              key={restaurant.id}
              style={styles.restaurant}
              onPress={() =>
                navigation.navigate("PlaceDetails", {
                  place: restaurant,
                })
              }
            >
              <View>
                <Text style={styles.restaurantName}>
                  🍽️ {restaurant.name}
                </Text>

                <Text style={styles.restaurantInfo}>
                  {restaurant.cuisine} •{" "}
                  {restaurant.distance}
                </Text>
              </View>

              <Text style={styles.rating}>
                ⭐ {restaurant.rating}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View>
          <Text style={styles.sectionTitle}>
            Recommended Near You
          </Text>

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
        </View>
      )}
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

  categories: {
    flexDirection: "row",
    marginTop: 25,
    marginBottom: 25,
  },

  category: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginRight: 10,
  },

  activeCategory: {
    backgroundColor: COLORS.primary,
  },

  categoryText: {
    color: COLORS.textSecondary,
    fontWeight: "600",
  },

  activeCategoryText: {
    color: COLORS.white,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
    marginBottom: 15,
  },

  restaurant: {
    backgroundColor: COLORS.white,
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  restaurantName: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.text,
  },

  restaurantInfo: {
    marginTop: 5,
    color: COLORS.textSecondary,
  },

  rating: {
    fontWeight: "600",
  },
});