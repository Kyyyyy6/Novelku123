import React, { useState, useEffect } from 'react';
import './style.css'; // Menggunakan file CSS yang sama untuk styling

// Komponen NovelCard
const NovelCard = ({ title, author, synopsis, link }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="novel-card">
                <div className="card-title-aesthetic">
                    <h3>{title}</h3>
                </div>
                <p className="author">{author}</p>
                <p className="synopsis">{synopsis}</p>
                <a href={link} className="btn-read">Baca Sekarang</a>
            </div>
        </div>
    );
};

// Data Novel
const novelData = [
    { id: 1, title: "Bayangan di Jendela Kaca", author: "Penulis A", synopsis: "Kisah epik tentang petualangan di dunia sihir yang hilang...", link: "novel-1.html" },
    { id: 2, title: "Puisi Hujan di Kota Senja", author: "Penulis B", synopsis: "Sebuah misteri yang harus dipecahkan sebelum desa tenggelam dalam kegelapan...", link: "novel-2.html" },
    { id: 3, title: "Matahari yang Enggan Terbit", author: "Penulis C", synopsis: "Perjalanan seorang anak mencari cahaya di tengah dunia yang diselimuti kabut...", link: "novel-3.html" },
];

const App = () => {
    // State untuk Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effect untuk memuat tema dari Local Storage saat komponen dimuat
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark-mode') {
            setIsDarkMode(true);
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, []);

    // Handler untuk mengganti tema
    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        
        if (newMode) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    };

    // Teks tombol
    const buttonText = isDarkMode ? '🌙 Mode Gelap' : '☀️ Mode Terang';

    // Perhatikan: Bootstrap 5 JS tetap diimpor di index.html atau di CDN.
    // Navbar mobile dihandle oleh Bootstrap.

    return (
        <>
            <header>
                {/* Navbar Bootstrap */}
                <nav className="navbar navbar-expand-lg navbar-dark sticky-top navbar-custom">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Novel Estetik</a>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="#">Beranda</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Kategori</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Terbaru</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Tentang Kami</a></li>
                            </ul>
                            <div className="d-flex align-items-center">
                                {/* Tombol Toggle Tema React */}
                                <button 
                                    id="theme-toggle" 
                                    className="btn btn-sm btn-theme-toggle"
                                    onClick={toggleTheme} // Event handler React
                                >
                                    {buttonText}
                                </button> 
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="container">
                <h2 className="mt-4 mb-4">✨ Novel Pilihan Estetik</h2>
                
                {/* Grid Novel Menggunakan Bootstrap dan map data */}
                <section className="row g-4 pb-5"> 
                    {novelData.map(novel => (
                        <NovelCard 
                            key={novel.id} 
                            title={novel.title} 
                            author={novel.author} 
                            synopsis={novel.synopsis} 
                            link={novel.link} 
                        />
                    ))}
                </section>
            </main>

            <footer>
                <p>&copy; 2025 Novel Estetik. Semua Hak Dilindungi.</p>
            </footer>
        </>
    );
};

export default App;
