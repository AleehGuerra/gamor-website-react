import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { AuthProvider } from './AuthContext';

function App() {

  return (
    <AuthProvider>
<Router >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
    </AuthProvider>
  )
}

export default App
