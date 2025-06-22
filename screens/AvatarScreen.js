import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { AvatarContext } from '../context/AvatarContext';

const imageMap = {
  hair: {
    Kısa: require('../assets/avatar/hair/short-hair.png'),
    Uzun: require('../assets/avatar/hair/long-hair.png'),
    Kıvırcık: require('../assets/avatar/hair/curly-hair.png'),
  },
  eyes: {
    Mavi: require('../assets/avatar/eyes/blue-eyes.png'),
    Yeşil: require('../assets/avatar/eyes/green-eyes.png'),
    Kahverengi: require('../assets/avatar/eyes/brown-eyes.png'),
  },
  outfit: {
    'Macera Kıyafeti': require('../assets/avatar/outfit/adventure-outfit.png'),
    'Kaptan Kostümü': require('../assets/avatar/outfit/captain-outfit.png'),
    Klasik: require('../assets/avatar/outfit/classic-outfit.png'),
  },
  accessory: {
    Şapka: require('../assets/avatar/accessory/hat.png'),
    Gözlük: require('../assets/avatar/accessory/glasses.png'),
    'Sırt Çantası': require('../assets/avatar/accessory/backpack.png'),
  },
};

const options = {
  hair: ['Kısa', 'Uzun', 'Kıvırcık'],
  eyes: ['Mavi', 'Yeşil', 'Kahverengi'],
  outfit: ['Macera Kıyafeti', 'Kaptan Kostümü', 'Klasik'],
  accessory: ['Şapka', 'Gözlük', 'Sırt Çantası'],
};

const AvatarScreen = ({ navigation }) => {
  const { avatar, setAvatar } = useContext(AvatarContext);

  const allSelected = ['hair', 'eyes', 'outfit', 'accessory'].every(k => avatar[k]);

  const renderOption = (category, value) => (
    <TouchableOpacity
      key={value}
      style={[
        styles.optionButton,
        avatar[category] === value && styles.selectedOption
      ]}
      onPress={() => setAvatar(prev => ({ ...prev, [category]: value }))}
    >
      <Image source={imageMap[category][value]} style={styles.icon} />
      <Text>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Avatarını Oluştur</Text>

      {/* 👀 Önizleme */}
      <View style={styles.previewBox}>
        {['hair', 'eyes', 'outfit', 'accessory'].map((part) => {
          const value = avatar[part];
          return value && imageMap[part][value] ? (
            <Image key={part} source={imageMap[part][value]} style={styles.previewIcon} />
          ) : null;
        })}
      </View>

      {/* Seçenekler */}
      {Object.keys(options).map(category => (
        <View key={category} style={styles.categoryBlock}>
          <Text style={styles.categoryTitle}>{category.toUpperCase()}</Text>
          <View style={styles.optionList}>
            {options[category].map(value => renderOption(category, value))}
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={[styles.startButton, !allSelected && styles.disabledButton]}
        onPress={() => navigation.navigate('Equipment')}
        disabled={!allSelected}
      >
        <Text style={styles.startButtonText}>🚀 Keşfe Başla!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#ecf0f1' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#34495e' },
  previewBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
    flexWrap: 'wrap',
    gap: 12
  },
  previewIcon: {
    width: 50,
    height: 50,
    margin: 5
  },
  categoryBlock: { marginBottom: 15 },
  categoryTitle: { fontSize: 18, fontWeight: '600', marginBottom: 5, color: '#2c3e50' },
  optionList: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  optionButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: 100
  },
  selectedOption: {
    backgroundColor: '#3498db',
    borderColor: '#2980b9',
  },
  icon: { width: 40, height: 40, marginBottom: 5 },
  startButton: {
    marginTop: 30,
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  disabledButton: {
    backgroundColor: '#bdc3c7'
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default AvatarScreen;
