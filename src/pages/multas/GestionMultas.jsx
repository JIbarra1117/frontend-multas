import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  Option,
  Typography,
} from "@material-tailwind/react";

const API_URL = "http://localhost:3000";

export default function GestionMultas() {
  const [usuarios, setUsuarios] = useState([]);
  const [multas, setMultas] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState("");
  const [nuevaMulta, setNuevaMulta] = useState("");
  const [idMultado, setIdMultado] = useState("");
  const [idAutor, setIdAutor] = useState("");
  const [idMulta, setIdMulta] = useState("");

  useEffect(() => {
    fetchUsuarios();
    fetchMultas();
    fetchHistorial();
  }, []);

  const fetchUsuarios = async () => {
    const res = await fetch(`${API_URL}/usuarios`);
    const data = await res.json();
    setUsuarios(data);
  };

  const fetchMultas = async () => {
    const res = await fetch(`${API_URL}/multas`);
    const data = await res.json();
    setMultas(data);
  };

  const fetchHistorial = async () => {
    const res = await fetch(`${API_URL}/multas/historial`);
    const data = await res.json();
    setHistorial(data);
  };

  const addUser = async () => {
    if (!nuevoUsuario) return;
    await fetch(`${API_URL}/usuarios`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: nuevoUsuario }),
    });
    setNuevoUsuario("");
    fetchUsuarios();
  };

  const addFine = async () => {
    if (!nuevaMulta) return;
    await fetch(`${API_URL}/multas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: nuevaMulta }),
    });
    setNuevaMulta("");
    fetchMultas();
  };

  const applyFine = async () => {
    if (!idMultado || !idAutor || !idMulta) return;
    await fetch(`${API_URL}/multas/aplicar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_multado: idMultado,
        id_autor: idAutor,
        id_multa: idMulta,
      }),
    });
    fetchHistorial();
  };

  return (
    <div className="flex flex-col items-center space-y-6  min-h-screen p-10">
      <Typography variant="h3" className="">
        📜 Gestión de Multas
      </Typography>

      {/* Sección de Usuarios */}
      <Card className="w-full max-w-lg   shadow-lg">
        <CardHeader variant="gradient" color="blue" className="p-4 text-center">
          <Typography variant="h5" color="white">
            Usuarios
          </Typography>
        </CardHeader>
        <CardBody className="space-y-4">
          <Input
            label="Nuevo usuario"
            color="blue"
            value={nuevoUsuario}
            onChange={(e) => setNuevoUsuario(e.target.value)}
          />
          <Button color="blue" fullWidth onClick={addUser}>
            Agregar Usuario
          </Button>
          <ul className="space-y-1">
            {usuarios.map((u) => (
              <li key={u.id} className="bg-gray-700 p-2 rounded">
                {u.nombre}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>

      {/* Sección de Tipos de Multas */}
      <Card className="w-full max-w-lg   shadow-lg">
        <CardHeader variant="gradient" color="red" className="p-4 text-center">
          <Typography variant="h5" color="white">
            Tipos de Multas
          </Typography>
        </CardHeader>
        <CardBody className="space-y-4">
          <Input
            label="Nueva multa"
            color="red"
            value={nuevaMulta}
            onChange={(e) => setNuevaMulta(e.target.value)}
          />
          <Button color="red" fullWidth onClick={addFine}>
            Agregar Multa
          </Button>
          <ul className="space-y-1">
            {multas.map((m) => (
              <li key={m.id} className="bg-gray-700 p-2 rounded">
                {m.nombre}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>

      {/* Sección Aplicar Multas */}
      <Card className="w-full max-w-lg   shadow-lg">
        <CardHeader variant="gradient" color="green" className="p-4 text-center">
          <Typography variant="h5" color="white">
            Aplicar Multas
          </Typography>
        </CardHeader>
        <CardBody className="space-y-4">
          <Select label="Selecciona al multado" color="green" onChange={setIdMultado}>
            {usuarios.map((u) => (
              <Option key={u.id} value={u.id}>
                {u.nombre}
              </Option>
            ))}
          </Select>
          <Select label="Selecciona al autor" color="green" onChange={setIdAutor}>
            {usuarios.map((u) => (
              <Option key={u.id} value={u.id}>
                {u.nombre}
              </Option>
            ))}
          </Select>
          <Select label="Selecciona la multa" color="green" onChange={setIdMulta}>
            {multas.map((m) => (
              <Option key={m.id} value={m.id}>
                {m.nombre}
              </Option>
            ))}
          </Select>
          <Button color="green" fullWidth onClick={applyFine}>
            Aplicar Multa
          </Button>
        </CardBody>
      </Card>

      {/* Sección Historial */}
      <Card className="w-full max-w-lg   shadow-lg">
        <CardHeader variant="gradient" color="gray" className="p-4 text-center">
          <Typography variant="h5" color="white">
            Historial de Multas
          </Typography>
        </CardHeader>
        <CardBody className="space-y-2">
          <ul className="space-y-1">
            {historial.map((h) => (
              <li key={h.id} className="bg-gray-700 p-2 rounded">
                {h.autor} multó a {h.multado} por {h.multa} el {h.fecha}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
