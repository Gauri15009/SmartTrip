import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import COLORS from "../constants/colors";

import { saveData } from "../services/storageService";

export default function CreateTripScreen({
  navigation,
}) {
  const [name, setName] = useState("");
  const [destination, setDestination] =
    useState("");
  const [startDate, setStartDate] =
    useState("");
  const [endDate, setEndDate] =
    useState("");
  const [budget, setBudget] =
    useState("");

  const [selectedInterests, setSelectedInterests] =
    useState([]);

  const interests = [
    "Nature",
    "Food",
    "Adventure",
    "Shopping",
    "History",
    "Photography",
  ];

  const toggleInterest = (interest) => {
    if (
      selectedInterests.includes(interest)
    ) {
      setSelectedInterests(
        selectedInterests.filter(
          (item) => item !== interest
        )
      );
    } else {
      setSelectedInterests([
        ...selectedInterests,
        interest,
      ]);
    }
  };

  const createTrip = async () => {
    if (
      !name ||
      !destination ||
      !startDate ||
      !endDate
    ) {
      Alert.alert(
        "Missing Information",
        "Please fill in the required fields."
      );

      return;
    }

    const trip = {
      id: Date.now().toString(),
      name,
      destination,
      startDate,
      endDate,
      budget: Number(budget) || 0,
      interests: selectedInterests,
      places: 0,
      photos: 0,
      rating: 0,
    };

    await saveData(
      `trip_${trip.id}`,
      trip
    );

    Alert.alert(
      "Trip Created",
      "Your trip has been created successfully.",
      [
        {
          text: "View Trip",
          onPress: () =>
            navigation.replace(
              "TripDetails",
              { trip }
            ),
        },
      ]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        Plan a New Trip
      </Text>

      <Text style={styles.subtitle}>
        Create your personalized travel plan
      </Text>

      <Text style={styles.label}>
        Trip Name *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Goa Weekend"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>
        Destination *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. Goa, India"
        value={destination}
        onChangeText={setDestination}
      />

      <Text style={styles.label}>
        Start Date *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. 20 Dec 2026"
        value={startDate}
        onChangeText={setStartDate}
      />

      <Text style={styles.label}>
        End Date *
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. 24 Dec 2026"
        value={endDate}
        onChangeText={setEndDate}
      />

      <Text style={styles.label}>
        Budget
      </Text>

      <TextInput
        style={styles.input}
        placeholder="e.g. 10000"
        keyboardType="numeric"
        value={budget}
        onChangeText={setBudget}
      />

      <Text style={styles.label}>
        What are you interested in?
      </Text>

      <View style={styles.interests}>
        {interests.map((interest) => {
          const selected =
            selectedInterests.includes(
              interest
            );

          return (
            <TouchableOpacity
              key={interest}
              style={[
                styles.interest,
                selected &&
                  styles.selectedInterest,
              ]}
              onPress={() =>
                toggleInterest(interest)
              }
            >
              <Text
                style={[
                  styles.interestText,
                  selected &&
                    styles.selectedInterestText,
                ]}
              >
                {interest}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={createTrip}
      >
        <Text style={styles.buttonText}>
          Create Trip
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  title: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.text,
  },

  subtitle: {
    marginTop: 6,
    color: COLORS.textSecondary,
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 8,
  },

  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  interests: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },

  interest: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  selectedInterest: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },

  interestText: {
    color: COLORS.textSecondary,
    fontWeight: "600",
  },

  selectedInterestText: {
    color: COLORS.white,
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 17,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 25,
    marginBottom: 40,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "700",
  },
});