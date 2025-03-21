// // export default App;
// import { Routes, Route, Navigate } from "react-router-dom";
// import GestionMultas from "./pages/multas/GestionMultas";
// import { Dashboard, Auth } from "./layouts";
// import ProtectedRoute from "./routes/ProtectedRoute";

// function App() {
//   return (
//     <Routes>
//       <Route
//         path="/dashboard/*"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/multas"
//         element={
//           <ProtectedRoute>
//             <GestionMultas />
//           </ProtectedRoute>
//         }
//       />
//       <Route path="/auth/*" element={<Auth />} />
//       <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
//     </Routes>
//   );
// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "./layouts";
import GestionMultas from "./pages/multas/GestionMultas";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
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
            <GestionMultas />
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

      {/* Redirección general */}
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;