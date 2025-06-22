import React, { createContext, useState } from 'react';

// 🔗 Global context oluşturuluyor
export const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  // 👤 Avatar bilgileri
  const [avatar, setAvatar] = useState({
    hair: null,
    eyes: null,
    outfit: null,
    accessory: null,
    equipment: null,
    vehicle: null
  });

  // 🧠 Quiz skoru (toplam doğru cevap)
  const [score, setScore] = useState(0);

  // ✅ Tamamlanan görevlerin takibi (ülke_kategori formatında)
  const [completedCategories, setCompletedCategories] = useState({});

  // 🎯 Görev işaretleme
  const markTaskCompleted = (country, category) => {
    const key = `${country}_${category}`;
    setCompletedCategories(prev => ({
      ...prev,
      [key]: true
    }));
  };

  // ♻️ Avatar ve skor resetleme fonksiyonu
  const resetAvatar = () => {
    setAvatar({
      hair: null,
      eyes: null,
      outfit: null,
      accessory: null,
      equipment: null,
      vehicle: null
    });
    setScore(0);
    setCompletedCategories({});
  };

  return (
    <AvatarContext.Provider value={{
      avatar,
      setAvatar,
      score,
      setScore,
      resetAvatar,
      completedCategories,
      setCompletedCategories,
      markTaskCompleted // ✅ dışa aktarıldı
    }}>
      {children}
    </AvatarContext.Provider>
  );
};
