
import { router } from 'expo-router';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function TripsScreen() {
  return (
    <View style={s.screen}>
      <Text style={s.title}>My Trips</Text>
      <Text style={s.subtitle}>Plan, organize and manage your journeys.</Text>
      <View style={s.card}>
        <Text style={s.emoji}>🧳</Text>
        <Text style={s.cardTitle}>Your travel plans start here</Text>
        <Text style={s.description}>
          Create a trip with a destination, dates and notes. Your saved plans will appear here.
        </Text>
        <Pressable style={s.button} onPress={() => router.push('/create-trip')}>
          <Text style={s.buttonText}>+ Create your first trip</Text>
        </Pressable>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F8F6', padding: 22 },
  title: { fontSize: 29, fontWeight: '800', color: '#20352F' },
  subtitle: { color: '#697771', marginTop: 8, lineHeight: 22 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 20, padding: 24, marginTop: 28, alignItems: 'center', borderWidth: 1, borderColor: '#E6ECE8' },
  emoji: { fontSize: 44, marginBottom: 14 },
  cardTitle: { fontSize: 19, fontWeight: '800', color: '#20352F', textAlign: 'center' },
  description: { color: '#697771', textAlign: 'center', lineHeight: 22, marginTop: 10 },
  button: { backgroundColor: '#176B60', padding: 15, borderRadius: 12, marginTop: 22, alignSelf: 'stretch', alignItems: 'center' },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
});
