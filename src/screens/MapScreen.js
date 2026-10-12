import React, {
    useEffect,
    useState,
  } from "react";
  
  import {
    View,
    Text,
    StyleSheet,
    Alert,
  } from "react-native";
  
  import MapView, {
    Marker,
  } from "react-native-maps";
  
  import COLORS from "../constants/colors";
  
  import {
    getCurrentLocation,
  } from "../services/locationService";
  
  export default function MapScreen({
    route,
  }) {
    const [location, setLocation] =
      useState(null);
  
    useEffect(() => {
      loadLocation();
    }, []);
  
    const loadLocation = async () => {
      try {
        const current =
          await getCurrentLocation();
  
        setLocation(current);
      } catch (error) {
        Alert.alert(
          "Location Error",
          "Unable to get your current location."
        );
      }
    };
  
    if (!location) {
      return (
        <View style={styles.loading}>
          <Text>
            Getting your location...
          </Text>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.08,
            longitudeDelta: 0.08,
          }}
          showsUserLocation
          showsMyLocationButton
        >
          <Marker
            coordinate={location}
            title="You are here"
            description="Your current location"
          />
        </MapView>
  
        <View style={styles.info}>
          <Text style={styles.infoTitle}>
            📍 Your Location
          </Text>
  
          <Text style={styles.infoText}>
            {location.latitude.toFixed(5)},{" "}
            {location.longitude.toFixed(5)}
          </Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    map: {
      flex: 1,
    },
  
    loading: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  
    info: {
      position: "absolute",
      bottom: 30,
      left: 20,
      right: 20,
      backgroundColor: COLORS.white,
      padding: 16,
      borderRadius: 16,
      elevation: 5,
    },
  
    infoTitle: {
      fontSize: 16,
      fontWeight: "700",
      color: COLORS.text,
    },
  
    infoText: {
      marginTop: 5,
      color: COLORS.textSecondary,
    },
  });