# Babacan Çiğköfte Küçükpark — Web Sitesi

Babacan Çiğköfte Küçükpark için açık temalı, premium editoryal görsel diline sahip, iştah açıcı ve mobilde kusursuz çalışan modern restoran web sitesi.

---

## 🎨 Tasarım Karakteri ve Renk Paleti

Tasarım tamamen açık temalı olarak kurgulanmış; editoryal restoran estetiği ile Küçükpark’ın canlı atmosferi harmanlanmıştır:

- **Ana Arka Plan:** `#FBF8F2` (Sıcak kırık beyaz)
- **Kart Yüzeyleri:** `#FFFFFF` (Temiz beyaz)
- **Vurgulu Bölüm Zemini:** `#F1E9DD` (Açık bej)
- **Ana Vurgu (CTA & Vurgular):** `#A92B25` (Koyu biber kırmızısı)
- **Yardımcı Vurgu (Tazelik):** `#66734A` (Zeytin yeşili)
- **Metin & Tipografi:** `#29231F` (Sıcak koyu kahve)
- **Tipografi:** Başlıklarda Türkçe destekli karakterli serif (`Playfair Display`), gövdede okunaklı modern sans-serif (`Plus Jakarta Sans`).

---

## 📍 Doğrulanmış İşletme Bilgileri

Tüm bilgiler doğrulanmış kaynaklar ve şube içi fotoğraflardan derlenmiştir:

- **İşletme Adı:** Babacan Çiğköfte Küçükpark
- **Konum:** Küçükpark, Bornova, İzmir
- **Çalışma Saatleri:** 10:30 – 00:30
- **Sipariş Telefonu:** 0553 918 85 57 (`tel:+905539188557`)
- **Instagram:** [@babacancigkofte_kucukpark](https://www.instagram.com/babacancigkofte_kucukpark/)
- **Harita Arama:** Google Maps üzerinden `"Babacan Çiğköfte Küçükpark Bornova İzmir"` sorgusu
- **Slogan:** “Dünya'nın İlk Çiğköfte Restoranı”

---

## 📸 Kullanılan Gerçek Görseller Envanteri

Sitede üçüncü taraf veya yapay ürün görselleri kullanılmamış, sadece işletmeye ait gerçek fotoğraflar yer almıştır:

1. `babacan-kanka-menu.jpg` (1024x1024): Kanka Menü — İki çiğköfte dürüm, köpüklü ayran, nane ve turşulu gerçek ürün fotoğrafı.
2. `babacan-citir-kova.jpg` (640x640): Babacan'ın Türkiye'de tek olan patentli Çıtır Kova kampanya görseli.
3. `babacan-taze-tezgah.jpg`: Küçükpark şubesi taze malzeme tezgâhı ve cadde manzarası.
4. `babacan-restoran-kasa-genel.jpg`: Küçükpark şubesi iç mekânı ve ışıklı kasa tezgâhı.
5. `babacan-afis-king-roll.jpg`: Şube içindeki King Roll ve Kova sunum posterleri.
6. `babacan-isikli-menu-panosu.jpg`: Şube içi ışıklı imza lezzetler panosu.

---

## 🛠️ Yerel Geliştirme ve Kurulum

### Gereksinimler
- Node.js 18+ (Node 20 veya 24 önerilir)
- npm

### 1. Bağımlılıkları Yükleyin
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### 3. Üretim Derlemesi ve Test
```bash
npm run build
npm run start
```

### 4. Kod Kontrolü (Lint)
```bash
npm run lint
```

---

## ⚙️ İşletme Bilgilerini Güncelleme

Menü öğeleri, çalışma saatleri, telefon numarası veya sosyal medya bağlantılarını değiştirmek için tek bir merkezi dosya bulunmaktadır:

👉 `src/data/restaurant.ts`

Bu dosyadaki değerleri güncellediğinizde; Header, Hero, Lezzetler, Galeri, İletişim, Footer, Mobil Alt Bar ve Schema JSON-LD otomatik olarak güncellenir.

---

## 🚀 Vercel Üzerinde Yayınlama

Proje Vercel ile %100 uyumludur. Sıfır sunucu sırrı (secret) ve sıfır harici veritabanı gerektirir:

1. [Vercel Dashboard](https://vercel.com/dashboard) adresine gidin.
2. **Add New...** -> **Project** seçeneğine tıklayın.
3. `CoskunerBerke/babacan` GitHub deposunu içe aktarın (Import).
4. Framework Preset: **Next.js** (otomatik tanınır).
5. Build Command: `next build` (varsayılan).
6. Output Directory: `.next` (varsayılan).
7. (İsteğe bağlı) Özel alan adınız varsa Environment Variables kısmına ekleyin:
   - `NEXT_PUBLIC_SITE_URL`: `https://siteniz.com`
8. **Deploy** butonuna tıklayın. Siteniz saniyeler içinde canlıya alınacaktır.
