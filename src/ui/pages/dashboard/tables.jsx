import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getHistorialMultas } from "../../../application/multas/getHistorialMultas";
import { useAuth } from "../../../ui/context/AuthContext";
import { getHistorialMultasPorUsuario } from "../../../application/multas/getHistorialMultasPorUsuario";
import { motion } from "framer-motion";

export function Tables() {
  const { token } = useAuth();
  const [historial, setHistorial] = useState([]);
  const [resumenByUser, setResumenByUser] = useState([]);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(() => {
    const hoy = new Date(); return hoy.toISOString().split("T")[0]; // yyyy-mm-dd 
  });
  const historialFiltrado = historial.filter((multa) => {
    const fechaMulta = new Date(multa.fecha_aplicacion).toISOString().split("T")[0]; return fechaMulta === fechaSeleccionada;
  });

  useEffect(() => {
    const cargar = async () => {
      const historialRegistroMultas = await getHistorialMultas(token);
      const historialRegistroMultasPorUsuario = await getHistorialMultasPorUsuario(token);
      setResumenByUser(historialRegistroMultasPorUsuario);
      setHistorial(historialRegistroMultas);
    };
    cargar();
  }, [token]);

  return (
    <motion.div key="form" className="col-span-full" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }} transition={{ duration: 0.4 }}>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-8 p-6"
        >
          <Typography variant="h6" color="white">
            Multas por Usuario
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Usuario", "Total", "Aprobadas", "Pendientes", "Total a Pagar"].map((header) => (
                  <th key={header} className="border-b border-blue-gray-50 py-3 px-8 text-left">
                    <Typography variant="small" className="text-[11px] font-bold uppercase text-blue-gray-400">
                      {header}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {resumenByUser.map(({ usuario_id, nombre, total_multas, aprobadas, pendientes }, index) => {
                const totalPagar = (aprobadas * 0.25).toFixed(2);
                const cellStyle = `py-3 px-8 ${index < resumenByUser.length - 1 ? "border-b border-blue-gray-50" : "border-b border-blue-gray-50"}`;
                return (
                  <tr key={usuario_id}>
                    <td className={cellStyle}>
                      <Typography className="text-sm font-medium text-blue-gray-700">
                        {nombre}
                      </Typography>
                    </td>
                    <td className={cellStyle}>{total_multas}</td>
                    <td className={cellStyle}>{aprobadas}</td>
                    <td className={cellStyle}>{pendientes}</td>
                    <td className={`${cellStyle} text-center `}>${totalPagar}</td>
                  </tr>
                );
              })}

              {/* Fila de Totales */}
              <tr className="bg-gray-100 font-bold text-xl">
                <td className="py-3 px-8 border-t border-blue-gray-50 ">
                  <Typography className=" text-blue-gray-700 font-bold text-xl">TOTAL</Typography>
                </td>
                <td className="py-3 px-8 border-t border-blue-gray-50">
                  {resumenByUser.reduce((acc, { total_multas }) => acc + total_multas, 0)}
                </td>
                <td className="py-3 px-8 border-t border-blue-gray-50">
                  {resumenByUser.reduce((acc, { aprobadas }) => parseInt(acc) + parseInt(aprobadas), 0)}
                </td>
                <td className="py-3 px-8 border-t border-blue-gray-50">
                  {resumenByUser.reduce((acc, { pendientes }) => parseInt(acc) + parseInt(pendientes), 0)}
                </td>
                <td className="py-3 px-8 border-t border-blue-gray-50 text-center ">
                  ${resumenByUser.reduce((acc, { aprobadas }) => acc + aprobadas * 0.25, 0).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </CardBody>
      </Card>

        <Card>
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-8 p-6 flex justify-between items-center"
          >
            <Typography variant="h6" color="white">
              Historial de Multas por Registro
            </Typography>
            <div className="flex items-center gap-2">
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
              <label className="text-white text-sm">Filtrar por fecha:</label>
              <input
                type="date"
                className="rounded px-2 py-1 text-sm text-gray-700"
                value={fechaSeleccionada}
                onChange={(e) => setFechaSeleccionada(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {[
                    "Multado",
                    "Autor",
                    "Multa",
                    "Descripción",
                    "Fecha",
                    "Aprobado",
                  ].map((el) => (
                    <th
                      key={el}
                      className="border-b border-blue-gray-50 py-3 px-8 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {historialFiltrado.map((r) => {
                  const baseStyle = "py-3 px-8 border-b border-blue-gray-50";
                  return (
                    <tr key={r.id}>
                      <td className={baseStyle}>
                        <Typography className="text-sm font-medium text-blue-gray-700">
                          {r.usuarioMultado?.nombre}
                        </Typography>
                      </td>
                      <td className={baseStyle}>
                        <Typography className="text-sm text-blue-gray-700">
                          {r.usuarioAutor?.nombre}
                        </Typography>
                      </td>
                      <td className={baseStyle}>
                        <Typography className="text-sm text-blue-gray-700">
                          {r.tipoMulta?.descripcion}
                        </Typography>
                      </td>
                      <td className={baseStyle}>
                        <Typography className="text-sm text-blue-gray-600">
                          {r.descripcion}
                        </Typography>
                      </td>
                      <td className={baseStyle}>
                        <Typography className="text-xs text-blue-gray-500">
                          {new Date(r.fecha_aplicacion).toLocaleString()}
                        </Typography>
                      </td>
                      <td className={baseStyle}>
                        <Chip
                          value={r.aprobado ? "Aprobado" : "Pendiente"}
                          color={r.aprobado ? "green" : "amber"}
                          size="sm"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </motion.div >

  );
}

export default Tables;
