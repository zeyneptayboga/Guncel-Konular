import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AvatarContext } from '../context/AvatarContext';

const SummaryScreen = ({ route, navigation }) => {
  const { avatar } = useContext(AvatarContext);
  const { country } = route.params || { country: 'Bilinmeyen Ülke' };

  const nextSuggestion = ['Türkiye', 'Brezilya', 'Norveç'][Math.floor(Math.random() * 3)];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Macera Tamamlandı!</Text>
      <Text style={styles.summaryText}>
        {country} ülkesinde harika bir keşif yaptın. Görevleri başarıyla tamamladın!
      </Text>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>👤 Avatar Bilgileri</Text>
        <Text>🧑 Saç: {avatar.hair || 'Belirtilmedi'}</Text>
        <Text>👁️ Göz: {avatar.eyes || 'Belirtilmedi'}</Text>
        <Text>👕 Kıyafet: {avatar.outfit || 'Belirtilmedi'}</Text>
        <Text>🎒 Aksesuar: {avatar.accessory || 'Belirtilmedi'}</Text>
      </View>

      <View style={styles.block}>
        <Text style={styles.blockTitle}>🧳 Ekipman ve Araç</Text>
        <Text>🔍 Ekipman: {avatar.equipment || 'Belirtilmedi'}</Text>
        <Text>✈️ Araç: {avatar.vehicle || 'Belirtilmedi'}</Text>
      </View>

      <Text style={styles.next}>
        🧭 Sıradaki hedefin: <Text style={styles.nextHighlight}>{nextSuggestion}</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.buttonText}>🌍 Haritaya Dön</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50'
  },
  summaryText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#34495e'
  },
  block: {
    backgroundColor: '#ecf0f1',
    padding: 18,
    borderRadius: 12,
    marginVertical: 10,
    elevation: 2
  },
  blockTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2980b9'
  },
  next: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    marginVertical: 25
  },
  nextHighlight: {
    color: '#e67e22',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default SummaryScreen;
