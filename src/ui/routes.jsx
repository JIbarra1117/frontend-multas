import {
  ArchiveBoxXMarkIcon,
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "./pages/dashboard";
import RegistrarMultas from "./pages/multas/RegistrarMultas";
import ApproveMultas from "./pages/multas/ApproveMultas";
import { SignIn, SignUp } from "./pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Inicio",
        path: "/inicio",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Resumen",
        path: "/resumen",
        element: <Tables />,
      },
      {
        icon: <ArchiveBoxXMarkIcon {...icon} />,
        name: "Registrar multas",
        path: "/gestion-multas",
        element: <RegistrarMultas />,
      },
      {
        icon: <CheckCircleIcon {...icon} />,
        name: "Aprobar multas",
        path: "/aprobar-multas",
        element: <ApproveMultas />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "Notificaciones",
        path: "/notificaciones",
        element: <Notifications />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
