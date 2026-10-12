
import { View, Text, StyleSheet } from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={s.screen}>
      <Text style={s.title}>Saved Places</Text>
      <Text style={s.subtitle}>Keep the destinations you want to visit in one place.</Text>
      <View style={s.card}>
        <Text style={s.emoji}>♡</Text>
        <Text style={s.heading}>Your favorites will appear here</Text>
        <Text style={s.body}>
          This screen is ready for saved destinations. We'll connect it to persistent storage in the next stage.
        </Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F8F6', padding: 22 },
  title: { fontSize: 29, fontWeight: '800', color: '#20352F' },
  subtitle: { color: '#697771', marginTop: 8, lineHeight: 22 },
  card: { marginTop: 28, backgroundColor: '#FFFFFF', borderRadius: 20, padding: 25, alignItems: 'center', borderWidth: 1, borderColor: '#E6ECE8' },
  emoji: { fontSize: 44, color: '#167D72' },
  heading: { fontSize: 18, fontWeight: '800', color: '#20352F', textAlign: 'center', marginTop: 15 },
  body: { color: '#697771', textAlign: 'center', lineHeight: 22, marginTop: 10 },
});
