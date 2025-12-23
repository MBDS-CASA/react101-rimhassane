import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomeContent from './components/HomeContent.jsx';
import NotesContent from './components/NotesContent.jsx';
import EtudiantsContent from './components/EtudiantsContent.jsx';
import MatieresContent from './components/MatieresContent.jsx';
import AproposContent from './components/AproposContent.jsx';

function App() {
  return (
    <Router>
      <div id="root" className="min-vh-100 d-flex flex-column">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/notes" element={<NotesContent />} />
            <Route path="/etudiants" element={<EtudiantsContent />} />
            <Route path="/matieres" element={<MatieresContent />} />
            <Route path="/apropos" element={<AproposContent />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
