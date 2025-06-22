import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { AvatarContext } from '../context/AvatarContext';

const countryTasks = {
  Türkiye: { flag: 'Türk bayrağı hangi figürleri içerir?', food: 'Hangisi Türk mutfağına aittir?', language: 'Türkçe "Merhaba" nedir?' },
  Fransa: { flag: 'Fransa bayrağı üç renkten oluşur. Renkler nelerdir?', food: 'Hangisi Fransız yemeğidir?', language: 'Fransızca "Merhaba" nedir?' },
  Japonya: { flag: 'Japon bayrağında hangi figür vardır?', food: 'Hangisi Japon yemeğidir?', language: 'Japonca "Teşekkür ederim" nedir?' },
  İtalya: { flag: 'İtalya bayrağında hangi renk yoktur?', food: 'Hangisi İtalyan yemeğidir?', language: 'İtalyanca "Günaydın" nedir?' },
  Brezilya: { flag: 'Brezilya bayrağındaki yazı nedir?', food: 'Hangisi Brezilya’ya ait bir yemektir?', language: 'Portekizce "Merhaba" nedir?' },
};

const CountryGameScreen = ({ route, navigation }) => {
  const { country } = route.params;
  const tasks = countryTasks[country];
  const { completedCategories, resetAvatar } = useContext(AvatarContext);

  const isTaskDone = (cat) => completedCategories[`${country}_${cat}`];
  const allDone = ['flag', 'food', 'language'].every(isTaskDone);

  const handleStart = (category) => {
    navigation.navigate('CategoryQuiz', {
      country,
      category,
    });
  };

  const handleComplete = () => {
    if (!allDone) {
      Alert.alert("Görevler Eksik", "Lütfen tüm görevleri tamamla (Bayrak, Yemek, Dil).");
      return;
    }

    const allCountries = Object.keys(countryTasks);
    const allTasksDone = allCountries.every(c =>
      ['flag', 'food', 'language'].every(k => completedCategories[`${c}_${k}`])
    );

    if (allTasksDone) {
      Alert.alert("🎉 Tüm Maceralar Tamamlandı!", "Harikaydın! Şimdi başa dönüyoruz!", [
        {
          text: "Baştan Başla",
          onPress: () => {
            resetAvatar();
            navigation.navigate('Splash');
          }
        }
      ]);
    } else {
      Alert.alert("Tebrikler!", `${country} görevini tamamladın.`, [
        {
          text: "Haritaya Dön",
          onPress: () => navigation.navigate('Summary', { country }),
        }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{country} Görevleri</Text>

      {['flag', 'food', 'language'].map((category) => (
        <TouchableOpacity
          key={category}
          style={styles.taskBlock}
          onPress={() => handleStart(category)}
        >
          <Text style={styles.taskTitle}>
            {category === 'flag' && '🟦 Bayrak Bilgisi'}
            {category === 'food' && '🍽️ Yöresel Yemek'}
            {category === 'language' && '🗣️ Dil Kartı'}
          </Text>
          <Text style={styles.taskText}>{tasks?.[category]}</Text>
          {isTaskDone(category) && (
            <Text style={styles.completedTag}>✔ Tamamlandı</Text>
          )}
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
        <Text style={styles.completeButtonText}>Görevi Tamamla</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 25, textAlign: 'center', color: '#2c3e50' },
  taskBlock: {
    marginBottom: 18,
    padding: 16,
    backgroundColor: '#ecf0f1',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3
  },
  taskTitle: { fontSize: 18, fontWeight: '600', marginBottom: 6, color: '#2980b9' },
  taskText: { fontSize: 16, color: '#34495e' },
  completedTag: { marginTop: 6, fontSize: 14, color: 'green', fontWeight: 'bold' },
  completeButton: {
    marginTop: 40,
    backgroundColor: '#2ecc71',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default CountryGameScreen;
