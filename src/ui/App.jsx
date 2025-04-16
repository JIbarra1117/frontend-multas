import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "./layouts";
import RegistrarMultas from "./pages/multas/RegistrarMultas";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import SessionExpired from "./pages/auth/SessionExpired";

function App() {
  // console.log("🟢 App cargado");
  return (
    <>
      <Routes>
        {/* Rutas protegidas */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/multas"
          element={
            <ProtectedRoute>
              <RegistrarMultas />
            </ProtectedRoute>
          }
        />

        {/* Rutas públicas */}
        <Route
          path="/auth/*"
          element={
            <PublicRoute>
              <Auth />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/session-expired"
          element={
            <PublicRoute>
              <SessionExpired />
            </PublicRoute>
          }
        />

        {/* Redirección general */}
        <Route path="*" element={<Navigate to="/dashboard/inicio" replace />} />
      </Routes>
    </>
  );
}

export default App;