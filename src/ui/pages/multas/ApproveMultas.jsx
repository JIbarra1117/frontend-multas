// ✅ ui/pages/multas/AprobarMultas.jsx

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Chip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../../ui/context/AuthContext";
// import { getHistorialMultas } from "../../../application/multas/getHistorialMultas";
import { approveMulta } from "../../../application/multas/approveMulta";
import { getHistorialMultasPendientes } from "../../../application/multas/getHistorialMultasPendientes";

function AprobarMultas() {
    const { token, user } = useAuth();
    const [historial, setHistorial] = useState([]);
    const [loading, setLoading] = useState(false);

    const cargarHistorial = async () => {
        console.log(user)
        const data = await getHistorialMultasPendientes(token, user.id);
        setHistorial(data);
    };

    const handleAprobar = async (registroMultaId) => {
        try {
            setLoading(true);
            await approveMulta(registroMultaId, token);
            await cargarHistorial();
        } catch (error) {
            console.error("❌ Error al aprobar multa:", error.message);
        } finally {
            setLoading(false);
        }
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() => {
        cargarHistorial();
    }, [token]);

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12">
            <Card>
                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Aprobar Multas Pendientes
                    </Typography>
                </CardHeader>
                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                    <table className="w-full min-w-[640px] table-auto">
                        <thead>
                            <tr>
                                {["Multado", "Multa", "Descripción", "Autor", "Fecha", "Estado", "Acción"].map((el) => (
                                    <th
                                        key={el}
                                        className="border-b border-blue-gray-50 py-3 px-5 text-left"
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
                            {historial.map((multa) => {
                                const yaAprobo = multa.aprobadores?.includes(user.id);
                                const puedeAprobar = !multa.aprobado && !yaAprobo;

                                return (
                                    <tr key={multa.id}>
                                        <td className="py-3 px-5">
                                            <Typography className="text-sm font-medium text-blue-gray-700">
                                                {multa.usuarioMultado?.nombre}
                                            </Typography>
                                        </td>
                                        <td className="py-3 px-5">{multa.tipoMulta?.descripcion}</td>
                                        <td className="py-3 px-5">{multa.descripcion}</td>
                                        <td className="py-3 px-5">{multa.usuarioAutor?.nombre}</td>
                                        <td className="py-3 px-5 text-xs text-blue-gray-500">
                                            {new Date(multa.fecha_aplicacion).toLocaleString()}
                                        </td>
                                        <td className="py-3 px-5">
                                            <Chip
                                                value={multa.aprobado ? "Aprobado" : "Pendiente"}
                                                color={multa.aprobado ? "green" : "amber"}
                                                size="sm"
                                            />
                                        </td>
                                        <td className="py-3 px-5">
                                            {puedeAprobar ? (
                                                <Button
                                                    size="sm"
                                                    color="green"
                                                    disabled={loading}
                                                    onClick={() => handleAprobar(multa.id)}
                                                >
                                                    Aprobar
                                                </Button>
                                            ) : yaAprobo ? (
                                                <Typography className="text-xs text-gray-500">Ya aprobaste</Typography>
                                            ) : (
                                                ""
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
}

export default AprobarMultas;
