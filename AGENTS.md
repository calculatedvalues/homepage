# AGENTS.md - Proje Durumu

## Proje: Bülent Ünlüsü Portfolio Sitesi

Vite + React (JavaScript) ile oluşturulmuş tek sayfalı portfolyo web sitesi.

## Komutlar

- `npm run dev` - Geliştirme sunucusunu başlat
- `npm run build` - Production build al
- `npm run preview` - Build'i önizle

## Klasör Yapısı

```
homepage/
├── public/
│   └── profile.png          # Header'daki profil fotoğrafı
├── src/
│   ├── App.jsx              # Ana bileşen (Header, Nav, Sidebar, Content, Footer)
│   ├── App.css              # Tüm stiller
│   ├── index.css            # Global stiller
│   └── main.jsx             # Giriş noktası
├── index.html
├── package.json
└── readme.md                # Orijinal şartname dosyası (değiştirme!)
```

## Yapılanlar

- [x] Vite + React (JavaScript) kurulumu
- [x] Header: sol fotoğraf + orta "BÜLENT ÜNLÜSÜ" (`#27104e` arkaplan)
- [x] Navigation Bar: 5 buton (`#64379f` arkaplan)
- [x] Left Sidebar: 5 link (`#9854cb` arkaplan)
- [x] Content: tıklanan linke göre içerik değişir
- [x] Footer: `bulentunlusu.com © 2026`
- [x] readme.md geri yüklendi (Vite template üzerine yazmıştı)

## Kullanılan Renk Paleti

- `#27104e` - Header, Footer, ikon arkaplanı
- `#64379f` - Navbar arkaplanı, vurgu metinleri
- `#9854cb` - Sidebar arkaplanı
- `#ddacf5` - Header yazısı, navbar buton yazısı, alt çizgi
- `#75e8e7` - Aktif buton, foto borderı, ikon rengi

## İçerik Sayfaları

| Key | Başlık | İçerik |
|-----|--------|--------|
| home | Ana Sayfa | Bina Otomasyon Uzmanı |
| experience | İş Tecrübeleri | 6 iş deneyimi listesi |
| about | Hakkında | Kısa biyografi |
| education | Eğitim | Haydarpaşa Endüstri Meslek Lisesi |
| contact | İletişim | Linkedin, Instagram, e-posta linkleri |

## Yapılacaklar / Fikirler

- (Henüz yapılmadı)
