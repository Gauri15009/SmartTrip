
import { useMemo, useState } from 'react';
import { View, Text, TextInput, ScrollView, Pressable, StyleSheet } from 'react-native';

const places = [
  { name: 'Goa', category: 'Beach', description: 'Coastal escapes and sunsets', emoji: '🏝️' },
  { name: 'Manali', category: 'Nature', description: 'Mountain views and adventure', emoji: '🏔️' },
  { name: 'Jaipur', category: 'Culture', description: 'Historic forts and colorful markets', emoji: '🏰' },
  { name: 'Mumbai', category: 'City', description: 'Food, landmarks and city life', emoji: '🌆' },
  { name: 'Munnar', category: 'Nature', description: 'Green hills and tea gardens', emoji: '🌿' },
];

export default function ExploreScreen() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(
    () => places.filter((p) =>
      (category === 'All' || p.category === category) &&
      `${p.name} ${p.description}`.toLowerCase().includes(query.toLowerCase())
    ),
    [query, category]
  );

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Text style={s.title}>Explore</Text>
      <Text style={s.subtitle}>Find a place for your next adventure.</Text>
      <TextInput
        style={s.search}
        placeholder="Search destinations..."
        value={query}
        onChangeText={setQuery}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.filters}>
        {['All', 'Beach', 'Nature', 'Culture', 'City'].map((item) => (
          <Pressable key={item} onPress={() => setCategory(item)}
            style={[s.chip, category === item && s.activeChip]}>
            <Text style={[s.chipText, category === item && s.activeChipText]}>{item}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <Text style={s.count}>{filtered.length} destinations</Text>
      {filtered.map((p) => (
        <View key={p.name} style={s.card}>
          <Text style={s.emoji}>{p.emoji}</Text>
          <View style={{ flex: 1 }}>
            <Text style={s.name}>{p.name}</Text>
            <Text style={s.description}>{p.description}</Text>
            <Text style={s.category}>{p.category}</Text>
          </View>
        </View>
      ))}
      {filtered.length === 0 && <Text style={s.empty}>No matches. Try another search.</Text>}
      <Text style={s.footnote}>These are sample listings, not live availability or travel prices.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F8F6' },
  content: { padding: 22, paddingBottom: 35 },
  title: { fontSize: 29, fontWeight: '800', color: '#20352F' },
  subtitle: { fontSize: 15, color: '#697771', marginTop: 8, marginBottom: 20 },
  search: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#E1E9E4', borderRadius: 14, padding: 15, fontSize: 15 },
  filters: { marginTop: 16, maxHeight: 45 },
  chip: { paddingHorizontal: 16, paddingVertical: 10, backgroundColor: '#E8EFEB', borderRadius: 20, marginRight: 8 },
  activeChip: { backgroundColor: '#176B60' },
  chipText: { color: '#40554D', fontWeight: '600' },
  activeChipText: { color: '#FFFFFF' },
  count: { marginTop: 22, marginBottom: 12, fontWeight: '700', color: '#68766F' },
  card: { flexDirection: 'row', alignItems: 'center', gap: 16, backgroundColor: '#FFFFFF', padding: 18, borderRadius: 16, marginBottom: 12, borderWidth: 1, borderColor: '#E6ECE8' },
  emoji: { fontSize: 35 },
  name: { fontSize: 17, fontWeight: '800', color: '#20352F' },
  description: { color: '#697771', fontSize: 13, marginTop: 4 },
  category: { color: '#167D72', fontSize: 12, marginTop: 7, fontWeight: '700' },
  empty: { padding: 24, textAlign: 'center', color: '#697771' },
  footnote: { fontSize: 12, color: '#87918C', marginTop: 15, lineHeight: 18 },
});
