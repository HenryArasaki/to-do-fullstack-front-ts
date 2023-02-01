import { useAuth } from "../hooks/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const { data } = useAuth();
  console.log(data.user)

  return <>{data.user ? <AppRoutes /> : <AuthRoutes />}</>;
}
