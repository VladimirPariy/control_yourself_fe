import {RoutePath} from '@/app/router/constant';
import {Navigate, useLocation} from 'react-router-dom';

export function ErrorPage() {
  const location = useLocation();

  if (location.pathname === '/') {
    return <Navigate to={RoutePath.LOGIN} />;
  }

  return (
    <div>
      <h1>Error</h1>
    </div>
  );
}
