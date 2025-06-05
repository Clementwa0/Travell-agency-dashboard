import { type RouteConfig, route,layout } from "@react-router/dev/routes";

export default [
    route('Signin','routes/root/Signin.tsx'),
    layout("routes/admin/admin-layout.tsx", [
        route('Dashboard', 'routes/admin/Dashboard.tsx'),
        route('users', 'routes/admin/UsersPage.tsx')

    ]),
        
] satisfies RouteConfig;
