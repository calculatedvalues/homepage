import { useState } from 'react'
import './App.css'

const pages = {
  home: {
    title: 'Ana Sayfa',
    content: <p><strong>Bina Otomasyon Uzmanı</strong></p>
  },
  experience: {
    title: 'İş Tecrübeleri',
    content: (
      <ul className="job-list">
        <li><strong>Yazılım Departman Şefi</strong> – Umetek Mühendislik – 2011</li>
        <li><strong>Proje Müdürü</strong> – Satek Mühendislik – 2007-2010</li>
        <li><strong>Proje Sorumlusu</strong> – SCS Tesisat – 2000-2005</li>
        <li><strong>Otomasyon Süpervizörü</strong> – Alsem Servis</li>
        <li><strong>Otomasyon Süpervizörü</strong> – Alarko Almüt – 1990-1992</li>
        <li><strong>Elektrik Teknisyeni</strong> – Güçberk Elektro – 1987-1990</li>
      </ul>
    )
  },
  about: {
    title: 'Hakkında',
    content: (
      <p>
        1970 yılında Elazığ'da doğdum. İlk-Orta-Lise eğitimimi Konya ve İstanbul'da tamamladım.
      </p>
    )
  },
  education: {
    title: 'Eğitim',
    content: (
      <p>
        <strong>Haydarpaşa Endüstri Meslek Lisesi</strong> – Elektrik Bölümü – 1987
      </p>
    )
  },
  contact: {
    title: 'İletişim',
    content: (
      <ul className="contact-list">
        <li>
          <span className="contact-icon contact-icon--linkedin">in</span>
          <a href="https://linkedin.com/in/bulentunlusu" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/bulentunlusu
          </a>
        </li>
        <li>
          <span className="contact-icon contact-icon--instagram">ig</span>
          <a href="https://instagram.com/bulentunlusu" target="_blank" rel="noopener noreferrer">
            instagram.com/bulentunlusu
          </a>
        </li>
        <li>
          <span className="contact-icon contact-icon--email">@</span>
          <a href="mailto:info@bulentunlusu.com">
            info@bulentunlusu.com
          </a>
        </li>
      </ul>
    )
  }
}

const navItems = [
  { key: 'home', label: 'Ana Sayfa' },
  { key: 'experience', label: 'İş Tecrübeleri' },
  { key: 'about', label: 'Hakkında' },
  { key: 'education', label: 'Eğitim' },
  { key: 'contact', label: 'İletişim' }
]

function App() {
  const [activePage, setActivePage] = useState('home')

  const page = pages[activePage]

  return (
    <div className="app">
      <header className="header">
        <img src="/profile.png" alt="Bülent Ünlüsü" className="header-photo" />
        <div className="header-title">BÜLENT ÜNLÜSÜ</div>
      </header>

      <nav className="navbar">
        {navItems.map(item => (
          <button
            key={item.key}
            className={`nav-btn${activePage === item.key ? ' active' : ''}`}
            onClick={() => setActivePage(item.key)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="main-layout">
        <aside className="sidebar">
          {navItems.map(item => (
            <button
              key={item.key}
              className={`sidebar-btn${activePage === item.key ? ' active' : ''}`}
              onClick={() => setActivePage(item.key)}
            >
              {item.label}
            </button>
          ))}
        </aside>

        <main className="content">
          <h2>{page.title}</h2>
          {page.content}
        </main>
      </div>

      <footer className="footer">
        bulentunlusu.com &copy; 2026
      </footer>
    </div>
  )
}

export default App
