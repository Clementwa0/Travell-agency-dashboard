import { Outlet } from "react-router"
import { Navbar } from "~/components";
import { MobileSidebar } from "~/components";
import pkg from '@syncfusion/ej2-react-navigations';
const {SidebarComponent} = pkg;

const AdminLayout = () => {
    return (
        <div className="admin-layout">
            <MobileSidebar/>
            <aside className="w-full max-w-[300px] hidden lg:block fixed relative z-10">
                <SidebarComponent width={270} enableGestures={false} >
                    <Navbar />
                </SidebarComponent>
            </aside>
            <aside className="children">

                <Outlet />
            </aside>

        </div>
    );
}

export default AdminLayout;