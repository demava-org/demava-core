import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Proposals from './pages/Proposals';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/login', label: 'Login' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/proposals', label: 'Proposals' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 text-gray-800 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-3xl font-extrabold text-green-700 tracking-tight uppercase">Demava</span>
          <nav className="space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => navigate(link.to)}
                className={`px-5 py-2 rounded-md font-semibold transition-transform duration-150 ease-in-out focus:outline-none shadow-sm ${
                  location.pathname === link.to
                    ? 'bg-green-700 text-white scale-105'
                    : 'bg-green-500 text-white hover:bg-green-600 hover:scale-105'
                }`}
                style={{ minWidth: 110, textAlign: 'center' }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proposals" element={<Proposals />} />
        </Routes>
      </main>

      <footer className="bg-green-700 text-white py-8 mt-16 shadow-inner">
        <div className="container mx-auto text-center text-sm">
          © {new Date().getFullYear()} Demava · Voice of Democracy · Power to the People.
        </div>
      </footer>
    </div>
  );
}

export default App;
