import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import quizData from '../data/quizData';
import { AvatarContext } from '../context/AvatarContext';

const CategoryQuizScreen = ({ route, navigation }) => {
  const { country, category } = route.params;
  const questions = quizData[country][category];

  const {
    setScore,
    completedCategories,
    setCompletedCategories
  } = useContext(AvatarContext); // ✅ Gerekli contextler

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const current = questions[currentIndex];

  const handleSelect = (option) => {
    setSelected(option);
    setShowResult(true);
    if (option === current.answer) {
      setCorrectCount((prev) => prev + 1);
      setScore((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);

      // ✅ Görev tamamlandı olarak işaretle
      setCompletedCategories((prev) => ({
        ...prev,
        [`${country}_${category}`]: true
      }));
    }
  };

  return (
    <View style={styles.container}>
      {!finished ? (
        <View>
          <Text style={styles.title}>{country} - {category.toUpperCase()}</Text>
          <Text style={styles.question}>Soru {currentIndex + 1}: {current.question}</Text>

          {['a', 'b', 'c'].map((key) => {
            const isSelected = selected === key;
            const isCorrect = current.answer === key;
            let optionStyle = styles.option;

            if (showResult) {
              if (isSelected && isCorrect) {
                optionStyle = styles.correct;
              } else if (isSelected && !isCorrect) {
                optionStyle = styles.incorrect;
              } else if (isCorrect) {
                optionStyle = styles.correct;
              }
            } else if (isSelected) {
              optionStyle = styles.selectedOption;
            }

            return (
              <TouchableOpacity
                key={key}
                style={optionStyle}
                disabled={showResult}
                onPress={() => handleSelect(key)}
              >
                <Text style={styles.optionText}>{key.toUpperCase()}) {current[key]}</Text>
              </TouchableOpacity>
            );
          })}

          {showResult && (
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextText}>
                {currentIndex + 1 === questions.length ? 'Bitir' : 'İleri'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Kategori Tamamlandı 🎉</Text>
          <Text style={styles.summary}>Toplam: {questions.length} soru</Text>
          <Text style={styles.summary}>✅ Doğru: {correctCount}</Text>
          <Text style={styles.summary}>❌ Yanlış: {wrongCount}</Text>
          <Text style={styles.summary}>📊 Başarı: %{Math.round((correctCount / questions.length) * 100)}</Text>

          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.goBack()}>
            <Text style={styles.nextText}>↩ Geri Dön</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  question: { fontSize: 18, marginBottom: 20 },
  option: {
    padding: 15,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: { backgroundColor: '#dcdde1' },
  correct: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  incorrect: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  optionText: { fontSize: 16, color: '#2c3e50' },
  nextButton: {
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  summary: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
    color: '#2c3e50'
  }
});

export default CategoryQuizScreen;
