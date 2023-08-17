import { Outlet, Navigate } from 'react-router-dom';

interface IPropsRoute {
  authUser: boolean;
  redirectTo: string;
}

export default function ProtectedRouteUnauth({
  authUser,
  redirectTo,
}: IPropsRoute) {
  if (!authUser) {
    return <Navigate to={redirectTo} replace />;
  }
  return <Outlet />;
}
