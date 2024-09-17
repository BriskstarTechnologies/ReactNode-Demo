import { Suspense, lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import AdminLayout from '../layouts/admin';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import RoleBasedGuard from '../guards/RoleBasedGuard';
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// config
import { PATH_AFTER_LOGIN_ADMIN } from '../config';
// components
import LoadingScreen from '../components/LoadingScreen';
// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );
};

export default function MainRouter() {
    return useRoutes([
        {
            path: '/',
            children: [
                {
                    path: '/',
                    element: (
                        <GuestGuard>
                            <Login />
                        </GuestGuard>
                    ),
                },
                {
                    path: 'login',
                    element: (
                        <GuestGuard>
                            <Login />
                        </GuestGuard>
                    ),
                },
                { path: 'thank-you/:name', element: <ThankYou /> },
                { path: 'reset-password', element: <ResetPassword /> },
            ],
        },

        // Admin Routes
        {
            path: 'admin',
            element: (
                <AuthGuard>
                    <AdminLayout />
                </AuthGuard>
            ),
            children: [
                { element: <Navigate to={PATH_AFTER_LOGIN_ADMIN} replace />, index: true },
                {
                    path: 'dashboard',
                    element: <AdminDashboard />
                },
                {
                    path: 'categories',
                    children: [
                        {
                            element: <Navigate to="/admin/categories/list" replace />,
                            index: true
                        },
                        {
                            path: 'list',
                            element: (
                                <RoleBasedGuard accessibleRoles={['admin']}>
                                    <ADCategory />
                                </RoleBasedGuard>
                            ),
                        },
                        {
                            path: 'add',
                            element: (
                                <RoleBasedGuard accessibleRoles={['admin']}>
                                    <ADCategoryForm />
                                </RoleBasedGuard>
                            ),
                        },
                        {
                            path: 'edit/:id',
                            element: (
                                <RoleBasedGuard accessibleRoles={['admin']}>
                                    <ADCategoryForm />
                                </RoleBasedGuard>
                            ),
                        },
                    ],
                },
                {
                    path: 'blogs',
                    children: [
                        {
                            element: <Navigate to="/admin/blogs/list" replace />,
                            index: true
                        },
                        {
                            path: 'list',
                            element: (
                                <RoleBasedGuard accessibleRoles={['admin']}>
                                    <ADBlog />
                                </RoleBasedGuard>
                            ),
                        },
                        {
                            path: 'add',
                            element: (
                                <RoleBasedGuard accessibleRoles={['admin']}>
                                    <ADBlogForm />
                                </RoleBasedGuard>
                            ),
                        },
                        {
                            path: 'edit/:id',
                            element: (
                                <RoleBasedGuard accessibleRoles={['admin']}>
                                    <ADBlogForm />
                                </RoleBasedGuard>
                            ),
                        },
                    ],
                },
            ],
        },

        // Main Routes
        {
            path: '*',
            element: <LogoOnlyLayout />,
            children: [
                { path: '500', element: <Page500 /> },
                { path: '404', element: <NotFound /> },
                { path: 'coming-soon', element: <ComingSoon /> },
                { path: '*', element: <Navigate to="/404" replace /> },
            ],
        },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}

/* ======================================== AUTHENTICATION ======================================== */
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const ThankYou = Loadable(lazy(() => import('../pages/auth/ThankYou')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));

/* ======================================== Admin ======================================== */
// DASHBOARD
const AdminDashboard = Loadable(lazy(() => import('../pages/admin/Dashboard')));

// CATEGORY
const ADCategory = Loadable(lazy(() => import('../pages/admin/Category/CategoryList')));
const ADCategoryForm = Loadable(lazy(() => import('../pages/admin/Category/CategoryAddEdit')));

// BLOG
const ADBlog = Loadable(lazy(() => import('../pages/admin/Blog/BlogList')));
const ADBlogForm = Loadable(lazy(() => import('../pages/admin/Blog/BlogAddEdit')));

// MAIN
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
