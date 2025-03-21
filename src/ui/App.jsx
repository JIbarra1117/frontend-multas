// import { Routes, Route, Navigate } from "react-router-dom";
// import GestionMultas from "./pages/multas/GestionMultas";
// import { Dashboard, Auth } from "./layouts";

// function App() {
//   return (
//     <Routes>
//       <Route path="/dashboard/*" element={<Dashboard />} />
//       <Route path="/multas" element={<GestionMultas />} />
//       <Route path="/auth/*" element={<Auth />} />
//       <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
//     </Routes>
//   );
// }

// export default App;
import { Routes, Route, Navigate } from "react-router-dom";
import GestionMultas from "./pages/multas/GestionMultas";
import { Dashboard, Auth } from "./layouts";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
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
            <GestionMultas />
          </ProtectedRoute>
        }
      />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
