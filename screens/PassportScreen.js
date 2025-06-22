import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { AvatarContext } from '../context/AvatarContext';

const initialVisited = [
  { country: 'Türkiye', completed: true },
  { country: 'Fransa', completed: true },
  { country: 'Japonya', completed: true },
  { country: 'İtalya', completed: false },
  { country: 'Brezilya', completed: false }
];

const PassportScreen = () => {
  const { avatar, score } = useContext(AvatarContext);
  const [visitedCountries] = useState(initialVisited);

  // 🏅 Rozet belirleme
  let badge = '🥉 Bronz Kaşif';
  if (score >= 8) badge = '🥇 Altın Kaşif';
  else if (score >= 5) badge = '🥈 Gümüş Kaşif';

  const renderItem = ({ item }) => (
    <View style={[styles.card, item.completed && styles.cardCompleted]}>
      <Text style={styles.country}>{item.country}</Text>
      <Text style={item.completed ? styles.done : styles.pending}>
        {item.completed ? '✔ Tamamlandı' : '⏳ Beklemede'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛂 Kaşif Pasaportu</Text>

      <FlatList
        data={visitedCountries}
        renderItem={renderItem}
        keyExtractor={(item) => item.country}
        contentContainerStyle={styles.list}
      />

      <View style={styles.scoreBlock}>
        <Text style={styles.scoreTitle}>🏅 Toplam Doğru Cevap</Text>
        <Text style={styles.scoreText}>{score} ✅</Text>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.infoTitle}>👤 Avatar Özeti</Text>
        <Text>🧑 Saç: {avatar.hair || 'Seçilmedi'}</Text>
        <Text>👁️ Göz: {avatar.eyes || 'Seçilmedi'}</Text>
        <Text>👕 Kıyafet: {avatar.outfit || 'Seçilmedi'}</Text>
        <Text>🎒 Aksesuar: {avatar.accessory || 'Seçilmedi'}</Text>
        <Text>🔍 Ekipman: {avatar.equipment || 'Seçilmedi'}</Text>
        <Text>✈️ Araç: {avatar.vehicle || 'Seçilmedi'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50'
  },
  list: { paddingBottom: 20 },
  card: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2
  },
  cardCompleted: {
    backgroundColor: '#d4efdf',
    borderColor: '#2ecc71',
    borderWidth: 1
  },
  country: { fontSize: 18, color: '#34495e' },
  done: { color: 'green', fontWeight: 'bold' },
  pending: { color: 'gray', fontStyle: 'italic' },
  scoreBlock: {
    backgroundColor: '#eafaf1',
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
    elevation: 2,
    borderColor: '#27ae60',
    borderWidth: 1
  },
  scoreTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#130f40',
    marginBottom: 5
  },
  scoreText: {
    fontSize: 22,
    color: '#27ae60',
    fontWeight: 'bold'
  },
  badgeText: {
    fontSize: 18,
    marginTop: 10,
    color: '#e67e22',
    fontWeight: 'bold'
  },
  infoBlock: {
    marginTop: 30,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 3
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2980b9'
  }
});

export default PassportScreen;
