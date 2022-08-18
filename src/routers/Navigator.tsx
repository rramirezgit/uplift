import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Landing, Login } from 'views';
// import { RootState } from 'store';

export const Navigation = () => {

    return (
        <Suspense>
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
                        path="/*"
                        element={
                            <RequireAuth>
                                <Landing />
                            </RequireAuth>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const { status } = useSelector((state: RootState) => state.auth);
    if (status === "not-authenticated") {
        return <Navigate to="/login" />;
    } else if (status === "checking") {
        return <div>Checking...</div>
    }
    return children;
};
