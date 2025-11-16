<!-- portfolio -->
<!-- tags: React, NextJs, Javascript -->

# 🛍️ Fanthom Store - Responsive Web App


**Fanthom Store** adalah aplikasi e-commerce responsif berbasis **Next.js** yang secara otomatis menyesuaikan antarmuka untuk perangkat **desktop** dan **mobile**.  
Proyek ini mengimplementasikan **SSR (Server-Side Rendering)** dengan deteksi perangkat sehingga layout, data, dan asset bisa dioptimalkan sesuai device.

---

## ✨ Fitur Utama

- **Deteksi perangkat otomatis** menggunakan User-Agent
- **SSR** untuk SEO yang lebih baik & pengiriman HTML sesuai device
- UI berbeda untuk **desktop** dan **mobile**
- Katalog produk dengan gambar, harga, dan judul
- **Optimasi performa** untuk mobile (data & gambar lebih ringan)
- Desain modern dan clean dengan **Tailwind CSS**

---

## 🖥️ Tampilan Versi Desktop

- **Layout full-width** yang memanfaatkan seluruh lebar layar
- **Grid multi kolom** untuk menampilkan banyak produk
- Gambar besar & jelas
- Efek hover pada kartu produk
- Informasi produk lebih lengkap
- Optimasi untuk penggunaan mouse

---

## 📱 Tampilan Versi Mobile

- **Layout ringkas** untuk layar kecil
- **Single column** untuk fokus konten
- Kartu produk sederhana namun informatif
- Gambar lebih kecil untuk loading lebih cepat
- Navigasi bawah (*bottom navigation*) yang ramah sentuhan

---

## 🚀 Instalasi & Menjalankan Proyek

1. **Clone repository**
```bash
git clone <repository-url>
```
2. **Install Depedency**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open http://localhost:3000 in your browser**

## Project Structure
```bash
fanthom-store/
├── src/
│   ├── app/         # Next.js app directory
│   ├── components/  # Reusable components
│   ├── styles/      # Global styles
│   └── types/       # TypeScript types
├── public/          # Static assets
└── ...config files
```

## Testing
### Pengujian Desktop
1. Buka aplikasi di browser desktop
2. Aplikasi akan otomatis menyesuaikan ke tampilan desktop

### Pengujian Mobile
**Menggunakan perangkat mobile asli:**
1.Buka URL aplikasi yang sudah dideploy di perangkat mobile
2. Atau gunakan IP lokal: http://your-ip:3000

**Menggunakan Chrome DevTools:**
1. Tekan F12 untuk membuka DevTools
2. Klik ikon Toggle Device Toolbar (atau tekan Ctrl+Shift+M)
3. Pilih preset perangkat mobile dari dropdown
