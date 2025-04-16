// src/ui/pages/auth/SessionExpired.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

export default function SessionExpired() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/auth/sign-in");
    }, 10000); // Redirige automáticamente en 4 segundos

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black px-4">
      <Card className="w-full max-w-md p-6 shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
        <CardBody className="text-center">
          <Typography variant="h4" color="white" className="mb-4">
            Tu sesión ha expirado
          </Typography>
          <Typography color="white" className="mb-6 font-normal">
            Por seguridad, hemos cerrado tu sesión. Serás redirigido al inicio de sesión automáticamente.
          </Typography>
          <Button
            color="blue"
            onClick={() => navigate("/auth/sign-in")}
            className="w-full"
          >
            Iniciar sesión ahora
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
