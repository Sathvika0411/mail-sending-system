import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SMTPSettings from "./pages/SMTPSettings";
import Compose from "./pages/Compose";
import SentMails from "./pages/SentMails";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home"; // <-- NEW

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* <-- NEW */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/smtp"
          element={
            <PrivateRoute>
              <SMTPSettings />
            </PrivateRoute>
          }
        />
        <Route
          path="/compose"
          element={
            <PrivateRoute>
              <Compose />
            </PrivateRoute>
          }
        />
        <Route
          path="/sent"
          element={
            <PrivateRoute>
              <SentMails />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
