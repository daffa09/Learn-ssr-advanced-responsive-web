<!-- portfolio -->
<!-- slug: fanthom-store-responsive-style -->
<!-- title: Gaya Responsif Fanthom Store -->
<!-- description: E-commerce responsif dengan deteksi user-agent -->
<!-- image: https://github.com/user-attachments/assets/e141316e-2c10-40cc-8d89-468e925522b6 -->
<!-- tags: React, NextJs, Javascript -->

# 🛍️ Fanthom Store - Aplikasi Web Responsif

**Fanthom Store** adalah aplikasi e-commerce responsif berbasis **Next.js** yang secara otomatis menyesuaikan antarmuka untuk perangkat **desktop** dan **mobile**.  
Proyek ini mengimplementasikan **SSR (Server-Side Rendering)** dengan deteksi perangkat sehingga tata letak, data, dan aset dapat dioptimalkan sesuai perangkat yang digunakan.

---

## ✨ Fitur Utama

- **Deteksi perangkat otomatis** menggunakan User-Agent.
- **SSR** untuk SEO yang lebih baik & pengiriman HTML sesuai perangkat.
- UI berbeda untuk **desktop** dan **mobile**.
- Katalog produk dengan gambar, harga, dan judul.
- **Optimasi performa** untuk mobile (data & gambar lebih ringan).
- Desain modern dan bersih dengan **Tailwind CSS**.

---

## 🖥️ Tampilan Versi Desktop

<img width="1863" height="784" alt="image" src="https://github.com/user-attachments/assets/e141316e-2c10-40cc-8d89-468e925522b6" />

- **Tata letak full-width** yang memanfaatkan seluruh lebar layar.
- **Grid multi kolom** untuk menampilkan banyak produk.
- Gambar besar & jelas.
- Efek hover pada kartu produk.
- Informasi produk lebih lengkap.
- Optimasi untuk penggunaan mouse.

---

## 📱 Tampilan Versi Mobile

<img width="378" height="541" alt="image" src="https://github.com/user-attachments/assets/251801cb-d365-424f-9bb7-197e4c40f225" />

- **Tata letak ringkas** untuk layar kecil.
- **Kolom tunggal** untuk fokus pada konten.
- Kartu produk sederhana namun informatif.
- Gambar lebih kecil untuk pemuatan yang lebih cepat.
- Navigasi bawah (*bottom navigation*) yang ramah sentuhan.

---

## 🚀 Instalasi & Menjalankan Proyek

1. **Clone repository**
```bash
git clone <repository-url>
```
2. **Install Dependensi**
```bash
npm install
# atau
yarn install
```

3. **Jalankan server pengembangan**
```bash
npm run dev
# atau
yarn dev
```

4. **Buka http://localhost:3000 di browser Anda**

## Struktur Proyek
```bash
fanthom-store/
├── src/
│   ├── app/         # Direktori app Next.js
│   ├── components/  # Komponen yang dapat digunakan kembali
│   ├── styles/      # Gaya global
│   └── types/       # Tipe TypeScript
├── public/          # Aset statis
└── ...file konfigurasi
```

## Pengujian
### Pengujian Desktop
1. Buka aplikasi di browser desktop.
2. Aplikasi akan otomatis menyesuaikan ke tampilan desktop.

### Pengujian Mobile
**Menggunakan perangkat mobile asli:**
1. Buka URL aplikasi yang sudah dideploy di perangkat mobile.
2. Atau gunakan IP lokal: http://ip-anda:3000

**Menggunakan Chrome DevTools:**
1. Tekan F12 untuk membuka DevTools.
2. Klik ikon Toggle Device Toolbar (atau tekan Ctrl+Shift+M).
3. Pilih preset perangkat mobile dari dropdown.
