import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';


const Landing = lazy(() => import(/* webpackChunkName: "LandingPage" */ './../views/landing/Landing'));
const Login = lazy(() => import(/* webpackChunkName: "LoginPage" */ './../views/login'));
const MonedaGsad = lazy(() => import(/* webpackChunkName: "MonedaGsad" */ '../components/moneda'));

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Landing />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/moneda"
          element={
            <MonedaGsad />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { status } = useSelector((state: RootState) => state.auth);
  if (status === 'not-authenticated') {
    return <Navigate to="/login" />;
  } else if (status === 'checking') {
    return <div>Checking...</div>;
  }
  return children;
};
