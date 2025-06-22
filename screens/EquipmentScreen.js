import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { AvatarContext } from '../context/AvatarContext';

const equipments = [
  { name: 'Dürbün', image: require('../assets/equipment/binoculars.png') },
  { name: 'Pusula', image: require('../assets/equipment/compass.png') },
  { name: 'Not Defteri', image: require('../assets/equipment/notebook.png') },
  { name: 'Fotoğraf Makinesi', image: require('../assets/equipment/camera.png') },
];

const vehicles = [
  { name: 'Sihirli Halı', emoji: '🧞‍♂️' },
  { name: 'Uçak', emoji: '✈️' },
  { name: 'Roket', emoji: '🚀' },
  { name: 'Balon', emoji: '🎈' },
];

const EquipmentScreen = ({ navigation }) => {
  const { avatar, setAvatar } = useContext(AvatarContext);
  const allSelected = avatar.equipment && avatar.vehicle;

  const handleNavigate = () => {
    if (!avatar.equipment || !avatar.vehicle) {
      Alert.alert("Eksik Seçim", "Lütfen hem ekipman hem de araç seç!");
    } else {
      navigation.navigate('Map');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🔍 Keşif Ekipmanını Seç</Text>
      <View style={styles.optionGroup}>
        {equipments.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.optionButton,
              avatar.equipment === item.name && styles.selected
            ]}
            onPress={() => setAvatar(prev => ({ ...prev, equipment: item.name }))}
          >
            {item.image && <Image source={item.image} style={styles.icon} />}
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>✈️ Keşif Aracını Seç</Text>
      <View style={styles.optionGroup}>
        {vehicles.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.optionButton,
              avatar.vehicle === item.name && styles.selected
            ]}
            onPress={() => setAvatar(prev => ({ ...prev, vehicle: item.name }))}
          >
            <Text style={styles.vehicleEmoji}>{item.emoji}</Text>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.confirmButton, !allSelected && styles.disabled]}
        onPress={handleNavigate}
      >
        <Text style={styles.confirmText}>Haritaya Git</Text>
      </TouchableOpacity>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#2c3e50'
  },
  optionGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30
  },
  optionButton: {
    backgroundColor: '#ecf0f1',
    padding: 12,
    borderRadius: 12,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: 130,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3
  },
  selected: {
    backgroundColor: '#3498db',
    borderColor: '#2980b9'
  },
  icon: {
    width: 45,
    height: 45,
    marginBottom: 5
  },
  vehicleEmoji: {
    fontSize: 36,
    marginBottom: 5
  },
  confirmButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
    width: '80%',
    alignItems: 'center'
  },
  disabled: {
    backgroundColor: '#bdc3c7'
  },
  confirmText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default EquipmentScreen;
