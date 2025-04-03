import { useEffect, useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { useAuth } from "../../context/AuthContext";
import { getMultasCatalogo } from "../../../application/multas/getMultasCatalogo";
import { fetchUsuarios } from "../../../application/users/getUsuarios";
import { registrarMulta } from "../../../application/multas/createRegistroMulta";
import { motion, AnimatePresence } from "framer-motion";

function RegistrarMultas() {
  const { token, user } = useAuth();
  const [usuarios, setUsuarios] = useState([]);
  const [tiposMulta, setTiposMulta] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [multaId, setMultaId] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      const usuariosData = await fetchUsuarios(token);
      const multasData = await getMultasCatalogo(token);
      setUsuarios(usuariosData);
      setTiposMulta(multasData);
    };
    cargarDatos();
  }, [token]);

  const handleEnviarMulta = async () => {
    if (!usuarioSeleccionado || !multaId || !descripcion) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      await registrarMulta({
        descripcion,
        usuarioMultadoId: usuarioSeleccionado.id,
        usuarioAutorId: user.id,
        multaId: Number(multaId),
        token,
      });

      alert("✅ Multa registrada correctamente");
      setUsuarioSeleccionado(null);
      setDescripcion("");
      setMultaId("");
    } catch (error) {
      console.error(error);
      alert("❌ Error al registrar multa");
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {usuarios.map((u) => (
        <motion.div key={u.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} >
          <Card
            key={u.id}
            className="p-4 cursor-pointer hover:shadow-lg border"
            onClick={() => setUsuarioSeleccionado(u)}
          >
            <Typography variant="h6">{u.nombre}</Typography>
            <Typography className="text-sm text-gray-600">{u.email}</Typography>
          </Card>
        </motion.div>
      ))}

      {usuarioSeleccionado && (
        <motion.div key="form" className="col-span-full" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.4 }}>
          <Card className="col-span-full mt-6 p-6 border bg-blue-gray-50">
            <Typography variant="h6" className="mb-2">
              Registrar multa para {usuarioSeleccionado.nombre}
            </Typography>

            <div className="mb-4">
              <Select label="Tipo de Multa" value={multaId} onChange={setMultaId}>
                {tiposMulta.map((m) => (
                  <Option key={m.id} value={m.id.toString()}>
                    {m.descripcion}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="mb-4">
              <Input
                label="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleEnviarMulta} color="blue">
                Registrar Multa
              </Button>
              <Button onClick={() => setUsuarioSeleccionado(null)} color="red">
                Cancelar
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

export default RegistrarMultas;
