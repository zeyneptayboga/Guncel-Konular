import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const countries = [
  { name: 'Türkiye', flag: require('../assets/flags/turkey.png') },
  { name: 'Fransa', flag: require('../assets/flags/france.png') },
  { name: 'Japonya', flag: require('../assets/flags/japan.png') },
  { name: 'İtalya', flag: require('../assets/flags/italy.png') },
  { name: 'Brezilya', flag: require('../assets/flags/brazil.png') }
];

const MapScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🌍 Dünya Haritası</Text>
      <Text style={styles.subtitle}>Bir ülke seç ve görevlere başla!</Text>

      {countries.map((country, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={[
            styles.countryCard,
            country.name === 'Türkiye' && styles.featuredCard
          ]}
          onPress={() => navigation.navigate('CountryGame', { country: country.name })}
        >
          {country.flag && (
            <Image source={country.flag} style={styles.flag} />
          )}
          <Text style={styles.countryName}>{country.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50'
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20
  },
  countryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    width: '90%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4
  },
  featuredCard: {
    backgroundColor: '#ffeaa7',
    borderColor: '#fdcb6e',
    borderWidth: 1.5
  },
  flag: {
    width: 45,
    height: 30,
    marginRight: 15,
    resizeMode: 'contain'
  },
  countryName: {
    fontSize: 18,
    color: '#34495e',
    fontWeight: '500'
  }
});

export default MapScreen;
