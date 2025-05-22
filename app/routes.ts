import { type RouteConfig, route,layout } from "@react-router/dev/routes";

export default [
    layout("routes/admin/admin-layout.tsx", [
        route('Dashboard', 'routes/admin/Dashboard.tsx'),
        route('users', 'routes/admin/users.tsx')

    ]),
        
] satisfies RouteConfig;
