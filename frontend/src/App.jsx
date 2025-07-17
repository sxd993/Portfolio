import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Home from '@pages/Home/Home';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    // Добавляем класс для отключения анимаций при переключении темы
    document.body.classList.add('theme-switching');
    
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    
    // Убираем класс через короткое время, чтобы анимации вернулись
    setTimeout(() => {
      document.body.classList.remove('theme-switching');
    }, 300);
  };

  return (
    <>
      <div className={`preloader ${!loading ? 'hidden' : ''}`}>
        <div className="preloader-logo">BEA</div>
      </div>

      {!loading && (
        <Router>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </Router>
      )}
    </>
  );
}

export default App;