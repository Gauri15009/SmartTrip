
import { useState } from 'react';
import { router } from 'expo-router';
import { View, Text, TextInput, Pressable, ScrollView, Alert, StyleSheet } from 'react-native';

export default function CreateTripScreen() {
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');

  function saveTrip() {
    if (!name.trim() || !destination.trim() || !startDate.trim() || !endDate.trim()) {
      Alert.alert('Missing details', 'Enter a trip name, destination, start date and end date.');
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      Alert.alert('Invalid dates', 'Use YYYY-MM-DD for both dates.');
      return;
    }

    if (end < start) {
      Alert.alert('Check your dates', 'The end date must be on or after the start date.');
      return;
    }

    Alert.alert(
      'Trip details validated',
      'Your trip form is working. Persistent trip saving is the next implementation step.',
      [{ text: 'OK', onPress: () => router.back() }]
    );
  }

  return (
    <ScrollView style={s.screen} contentContainerStyle={s.content}>
      <Pressable onPress={() => router.back()}>
        <Text style={s.back}>‹ Back</Text>
      </Pressable>
      <Text style={s.title}>Create a trip</Text>
      <Text style={s.subtitle}>Add the details to start planning your journey.</Text>

      <Text style={s.label}>Trip name *</Text>
      <TextInput style={s.input} value={name} onChangeText={setName} placeholder="e.g. Summer holiday" />

      <Text style={s.label}>Destination *</Text>
      <TextInput style={s.input} value={destination} onChangeText={setDestination} placeholder="e.g. Goa, India" />

      <Text style={s.label}>Start date * (YYYY-MM-DD)</Text>
      <TextInput style={s.input} value={startDate} onChangeText={setStartDate} placeholder="2026-12-10" />

      <Text style={s.label}>End date * (YYYY-MM-DD)</Text>
      <TextInput style={s.input} value={endDate} onChangeText={setEndDate} placeholder="2026-12-15" />

      <Text style={s.label}>Notes (optional)</Text>
      <TextInput style={[s.input, s.notes]} value={notes} onChangeText={setNotes} placeholder="Activities, budget or reminders" multiline />

      <Pressable style={s.button} onPress={saveTrip}>
        <Text style={s.buttonText}>Validate trip details</Text>
      </Pressable>
      <Text style={s.footnote}>Next: save trips locally and display them on the My Trips screen.</Text>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F5F8F6' },
  content: { padding: 22, paddingBottom: 40 },
  back: { color: '#167D72', fontSize: 16, fontWeight: '700', marginBottom: 22 },
  title: { color: '#20352F', fontSize: 29, fontWeight: '800' },
  subtitle: { color: '#697771', marginTop: 8, marginBottom: 22, lineHeight: 22 },
  label: { color: '#30443B', fontWeight: '700', marginBottom: 8, marginTop: 15 },
  input: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#DDE6E0', borderRadius: 12, padding: 14, fontSize: 15 },
  notes: { minHeight: 100, textAlignVertical: 'top' },
  button: { backgroundColor: '#176B60', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 25 },
  buttonText: { color: '#FFFFFF', fontWeight: '800' },
  footnote: { color: '#87918C', fontSize: 12, lineHeight: 18, marginTop: 15 },
});
