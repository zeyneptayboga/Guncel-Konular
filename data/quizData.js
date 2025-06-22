const quizData = {
  Türkiye: {
    flag: [
      {
        question: "Türkiye bayrağında hangi figürler vardır?",
        a: "Ay ve yıldız",
        b: "Hilal ve haç",
        c: "Yıldız ve çekiç",
        answer: "a"
      },
      {
        question: "Türk bayrağının zemin rengi nedir?",
        a: "Kırmızı",
        b: "Beyaz",
        c: "Mavi",
        answer: "a"
      },
      {
        question: "Ay ve yıldız hangi renktedir?",
        a: "Kırmızı",
        b: "Sarı",
        c: "Beyaz",
        answer: "c"
      },
      {
        question: "Türk bayrağında olmayan şekil?",
        a: "Yıldız",
        b: "Hilal",
        c: "Çember",
        answer: "c"
      },
      {
        question: "Türk bayrağındaki yıldız kaç köşelidir?",
        a: "5",
        b: "6",
        c: "8",
        answer: "a"
      }
    ],
    food: [
      {
        question: "Hangisi Türk mutfağına aittir?",
        a: "Lahmacun",
        b: "Taco",
        c: "Sushi",
        answer: "a"
      },
      {
        question: "Türkiye'de sık tüketilen tatlı?",
        a: "Baklava",
        b: "Donut",
        c: "Tiramisu",
        answer: "a"
      },
      {
        question: "Hangisi bir Türk çorbasıdır?",
        a: "Ezogelin",
        b: "Miso",
        c: "Tom Yum",
        answer: "a"
      },
      {
        question: "Hangisi bir Türk içeceğidir?",
        a: "Ayran",
        b: "Fanta",
        c: "Smoothie",
        answer: "a"
      },
      {
        question: "Hangisi bir Türk kebabıdır?",
        a: "Döner",
        b: "Burger",
        c: "Pizza",
        answer: "a"
      }
    ],
    language: [
      {
        question: "Türkçe 'Merhaba' nedir?",
        a: "Hello",
        b: "Merhaba",
        c: "Bonjour",
        answer: "b"
      },
      {
        question: "'Teşekkür ederim' Türkçede nasıldır?",
        a: "Danke",
        b: "Gracias",
        c: "Teşekkür ederim",
        answer: "c"
      },
      {
        question: "'Evet' kelimesi Türkçede hangisidir?",
        a: "Yes",
        b: "Oui",
        c: "Evet",
        answer: "c"
      },
      {
        question: "'Hayır' Türkçede nasıl yazılır?",
        a: "Nein",
        b: "No",
        c: "Hayır",
        answer: "c"
      },
      {
        question: "Türkçe 'Görüşürüz' anlamına gelen kelime?",
        a: "Bye",
        b: "Görüşürüz",
        c: "Ciao",
        answer: "b"
      }
    ]
  },
  Fransa: {
    flag: [
      { question: "Fransa bayrağı hangi renklerden oluşur?", a: "Kırmızı - Sarı - Yeşil", b: "Mavi - Beyaz - Kırmızı", c: "Siyah - Beyaz - Mavi", answer: "b" },
      { question: "Fransa bayrağında hangi renk en soldadır?", a: "Mavi", b: "Beyaz", c: "Kırmızı", answer: "a" },
      { question: "Fransa bayrağı kaç renkten oluşur?", a: "İki", b: "Üç", c: "Dört", answer: "b" },
      { question: "Fransa'nın bayrağında olmayan renk hangisidir?", a: "Yeşil", b: "Beyaz", c: "Mavi", answer: "a" },
      { question: "Fransa bayrağının ortasındaki renk nedir?", a: "Kırmızı", b: "Mavi", c: "Beyaz", answer: "c" }
    ],
    food: [
      { question: "Hangisi geleneksel bir Fransız yemeğidir?", a: "Tacos", b: "Sushi", c: "Ratatouille", answer: "c" },
      { question: "Hangisi bir Fransız tatlısıdır?", a: "Baklava", b: "Crème Brûlée", c: "Cheesecake", answer: "b" },
      { question: "Fransız kruvasanının adı nedir?", a: "Croissant", b: "Bagel", c: "Brioche", answer: "a" },
      { question: "Fransız peyniri olmayan hangisi?", a: "Camembert", b: "Brie", c: "Cheddar", answer: "c" },
      { question: "Fransız çorbası hangisidir?", a: "Onion Soup", b: "Miso Soup", c: "Tomato Soup", answer: "a" }
    ],
    language: [
      { question: "Fransızca 'Merhaba' nedir?", a: "Hola", b: "Bonjour", c: "Ciao", answer: "b" },
      { question: "'Teşekkür ederim' Fransızca?", a: "Merci", b: "Gracias", c: "Danke", answer: "a" },
      { question: "Fransızca 'Evet' nedir?", a: "Oui", b: "Si", c: "Ja", answer: "a" },
      { question: "Fransızca 'Günaydın' nedir?", a: "Bonjour", b: "Bonsoir", c: "Bonne nuit", answer: "a" },
      { question: "Fransızca 'Hayır' nedir?", a: "No", b: "Nein", c: "Non", answer: "c" }
    ]
  },
  Japonya: {
    flag: [
      { question: "Japon bayrağında hangi şekil bulunur?", a: "Kırmızı daire", b: "Mavi yıldız", c: "Yeşil üçgen", answer: "a" },
      { question: "Bayrak zemin rengi?", a: "Beyaz", b: "Kırmızı", c: "Mavi", answer: "a" },
      { question: "Daire neyi temsil eder?", a: "Ay", b: "Güneş", c: "Dünya", answer: "b" },
      { question: "Kaç renk var?", a: "1", b: "2", c: "3", answer: "b" },
      { question: "Olmayan renk?", a: "Beyaz", b: "Kırmızı", c: "Sarı", answer: "c" }
    ],
    food: [
      { question: "Japon yemeği hangisi?", a: "Sushi", b: "Pizza", c: "Kebap", answer: "a" },
      { question: "Japon eriştesi?", a: "Spaghetti", b: "Udon", c: "Penne", answer: "b" },
      { question: "Japon çorbası?", a: "Miso", b: "Lentil", c: "Minestrone", answer: "a" },
      { question: "Yaygın malzeme?", a: "Zeytinyağı", b: "Soya sosu", c: "Mayonez", answer: "b" },
      { question: "Japon tatlısı?", a: "Mochi", b: "Baklava", c: "Donut", answer: "a" }
    ],
    language: [
      { question: "Japonca 'Merhaba' nedir?", a: "Bonjour", b: "Konnichiwa", c: "Ni Hao", answer: "b" },
      { question: "Japonca 'Teşekkür ederim' nedir?", a: "Arigatou", b: "Danke", c: "Gracias", answer: "a" },
      { question: "'Hayır' Japonca?", a: "No", b: "Iie", c: "Non", answer: "b" },
      { question: "'Evet' Japonca?", a: "Hai", b: "Sí", c: "Oui", answer: "a" },
      { question: "'Güle güle' Japonca?", a: "Sayonara", b: "Adiós", c: "Tschüss", answer: "a" }
    ]
  },
  İtalya: {
    flag: [
      { question: "İtalya bayrağı renkleri?", a: "Yeşil - Beyaz - Kırmızı", b: "Mavi - Beyaz - Kırmızı", c: "Siyah - Sarı - Kırmızı", answer: "a" },
      { question: "En soldaki renk?", a: "Kırmızı", b: "Yeşil", c: "Beyaz", answer: "b" },
      { question: "Kaç renk var?", a: "2", b: "3", c: "4", answer: "b" },
      { question: "Olmayan renk?", a: "Kırmızı", b: "Yeşil", c: "Mavi", answer: "c" },
      { question: "Ortadaki renk?", a: "Kırmızı", b: "Yeşil", c: "Beyaz", answer: "c" }
    ],
    food: [
      { question: "İtalyan yemeği?", a: "Pizza", b: "Sushi", c: "Tacos", answer: "a" },
      { question: "Makarna türü?", a: "Penne", b: "Ramen", c: "Fajita", answer: "a" },
      { question: "Tatlı?", a: "Tiramisu", b: "Cheesecake", c: "Baklava", answer: "a" },
      { question: "Peynir?", a: "Parmesan", b: "Cheddar", c: "Halloumi", answer: "a" },
      { question: "Çorba?", a: "Minestrone", b: "Tom Yum", c: "Miso", answer: "a" }
    ],
    language: [
      { question: "'Merhaba' İtalyanca?", a: "Ciao", b: "Hola", c: "Salut", answer: "a" },
      { question: "'Teşekkür ederim'?", a: "Gracias", b: "Grazie", c: "Danke", answer: "b" },
      { question: "'Evet'?", a: "Si", b: "Oui", c: "Hai", answer: "a" },
      { question: "'Hayır'?", a: "Non", b: "Nein", c: "No", answer: "c" },
      { question: "'Görüşürüz'?", a: "Adiós", b: "Tschüss", c: "Arrivederci", answer: "c" }
    ]
  },
  Brezilya: {
    flag: [
      { question: "Şekil hangisi?", a: "Yıldız", b: "Kare", c: "Daire", answer: "a" },
      { question: "Zemin rengi?", a: "Yeşil", b: "Mavi", c: "Sarı", answer: "a" },
      { question: "Yazı nedir?", a: "Paz e Amor", b: "Ordem e Progresso", c: "Liberdade", answer: "b" },
      { question: "Kaç renk?", a: "3", b: "4", c: "5", answer: "b" },
      { question: "Olmayan renk?", a: "Mavi", b: "Yeşil", c: "Kırmızı", answer: "c" }
    ],
    food: [
      { question: "Yemek?", a: "Feijoada", b: "Paella", c: "Gyro", answer: "a" },
      { question: "Peynirlisi?", a: "Pão de Queijo", b: "Borek", c: "Empanada", answer: "a" },
      { question: "Tatlı?", a: "Brigadeiro", b: "Baklava", c: "Tiramisu", answer: "a" },
      { question: "Et yemeği?", a: "Churrasco", b: "Schnitzel", c: "Kebab", answer: "a" },
      { question: "İçecek?", a: "Ayran", b: "Mate", c: "Caipirinha", answer: "c" }
    ],
    language: [
      { question: "Dil?", a: "İspanyolca", b: "Portekizce", c: "İngilizce", answer: "b" },
      { question: "'Merhaba' Portekizce?", a: "Hola", b: "Ciao", c: "Olá", answer: "c" },
      { question: "'Teşekkür ederim'?", a: "Obrigado", b: "Gracias", c: "Merci", answer: "a" },
      { question: "'Evet'?", a: "Sim", b: "Oui", c: "Sí", answer: "a" },
      { question: "'Hayır'?", a: "Não", b: "No", c: "Nein", answer: "a" }
    ]
  }
};

export default quizData;


