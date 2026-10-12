
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={s.screen}>
      <Text style={s.title}>Profile & Settings</Text>
      <Text style={s.subtitle}>Make SmartTrip fit the way you travel.</Text>
      <View style={s.card}>
        <Text style={s.avatar}>👤</Text>
        <Text style={s.heading}>Your traveler profile</Text>
        <Text style={s.body}>Single-user mode · Your personal trip organizer</Text>
      </View>
      <View style={s.option}><Text style={s.optionText}>🌍  Preferred destinations</Text></View>
      <View style={s.option}><Text style={s.optionText}>🔔  Travel reminders</Text></View>
      <View style={s.option}><Text style={s.optionText}>🔒  Local data and privacy</Text></View>
      <Text style={s.footnote}>These settings are placeholders until preferences are connected to local storage.</Text>
    </View>
  );    
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F8F6', padding: 22 },
  title: { fontSize: 27, fontWeight: '800', color: '#20352F' },
  subtitle: { color: '#697771', marginTop: 8, lineHeight: 22 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 18, padding: 24, alignItems: 'center', marginTop: 25, marginBottom: 20 },
  avatar: { fontSize: 42 },
  heading: { fontSize: 18, fontWeight: '800', color: '#20352F', marginTop: 12 },
  body: { color: '#697771', marginTop: 8, textAlign: 'center' },
  option: { backgroundColor: '#FFFFFF', padding: 18, borderRadius: 14, marginBottom: 10 },
  optionText: { color: '#20352F', fontWeight: '600', fontSize: 15 },
  footnote: { color: '#87918C', fontSize: 12, lineHeight: 18, marginTop: 12 },
});
