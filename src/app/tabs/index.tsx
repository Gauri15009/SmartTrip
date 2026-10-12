
import { router } from 'expo-router';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

const destinations = [
  { name: 'Goa', detail: 'Beaches and sunsets', emoji: '🏝️' },
  { name: 'Manali', detail: 'Mountains and adventure', emoji: '🏔️' },
  { name: 'Jaipur', detail: 'Forts and culture', emoji: '🏰' },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.brand}>SmartTrip ✦</Text>
      <Text style={styles.heading}>Your next adventure</Text>
      <Text style={styles.subtitle}>
        Plan better trips, discover new places, and keep every detail together.
      </Text>

      <View style={styles.hero}>
        <Text style={styles.heroLabel}>YOUR TRAVEL, ORGANIZED</Text>
        <Text style={styles.heroTitle}>Where will you go next?</Text>
        <Text style={styles.heroText}>
          Create an itinerary that works for you.
        </Text>
        <Pressable
          style={styles.primaryButton}
          onPress={() => router.push('/create-trip')}
        >
          <Text style={styles.primaryButtonText}>+ Create a trip</Text>
        </Pressable>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Explore destinations</Text>
        <Pressable onPress={() => router.navigate('/tabs/explore')}>
          <Text style={styles.link}>See all</Text>
        </Pressable>
      </View>

      {destinations.map((place) => (
        <Pressable
          key={place.name}
          style={styles.destination}
          onPress={() => router.navigate('/tabs/explore')}
        >
          <View style={styles.destinationIcon}>
            <Text style={styles.emoji}>{place.emoji}</Text>
          </View>
          <View style={styles.destinationInfo}>
            <Text style={styles.destinationName}>{place.name}</Text>
            <Text style={styles.destinationDetail}>{place.detail}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      ))}

      <Text style={styles.note}>
        Sample destinations · Connect a travel API later for live information.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F8F6' },
  content: { padding: 22, paddingBottom: 36 },
  brand: { color: '#167D72', fontSize: 18, fontWeight: '800', marginBottom: 20 },
  heading: { color: '#20352F', fontSize: 29, fontWeight: '800' },
  subtitle: { color: '#697771', fontSize: 15, lineHeight: 23, marginTop: 8, marginBottom: 22 },
  hero: { backgroundColor: '#176B60', borderRadius: 22, padding: 22, marginBottom: 28 },
  heroLabel: { color: '#C6E7DB', fontSize: 11, fontWeight: '700', letterSpacing: 1.2 },
  heroTitle: { color: '#FFFFFF', fontSize: 25, fontWeight: '800', marginTop: 14 },
  heroText: { color: '#E0F0EA', fontSize: 14, marginTop: 8, marginBottom: 20 },
  primaryButton: { backgroundColor: '#FFFFFF', padding: 14, borderRadius: 12, alignSelf: 'flex-start' },
  primaryButtonText: { color: '#176B60', fontWeight: '800' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionTitle: { color: '#20352F', fontSize: 19, fontWeight: '800' },
  link: { color: '#167D72', fontWeight: '700' },
  destination: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 14, marginBottom: 12, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E6ECE8' },
  destinationIcon: { backgroundColor: '#EAF4EF', width: 54, height: 54, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  emoji: { fontSize: 27 },
  destinationInfo: { flex: 1, marginLeft: 14 },
  destinationName: { color: '#20352F', fontSize: 16, fontWeight: '800' },
  destinationDetail: { color: '#78837D', fontSize: 13, marginTop: 5 },
  arrow: { color: '#167D72', fontSize: 28 },
  note: { color: '#87918C', fontSize: 12, lineHeight: 18, marginTop: 10 },
});
