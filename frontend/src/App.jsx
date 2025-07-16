import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Home from '@pages/Home/Home';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`preloader ${!loading ? 'hidden' : ''}`}>
        <div className="preloader-logo">BEA</div>
      </div>

      {!loading && (
        <Router>
          <Header />
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
