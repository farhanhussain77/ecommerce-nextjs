import Header from "@/components/admin/header";
import Sidebar from "@/components/admin/sidebar";
import { AuthProvider } from "@/context/Auth";
import { ReactNode } from "react";

const AdminLayout = ({children}: {children: ReactNode}) => {
    return (
        <AuthProvider>
            <div className="flex bg-gray-100">
                <Sidebar />
                <div className="w-full">
                    <Header />
                    <div className="flex justify-center mt-10 px-6">
                        <div className="w-full">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AuthProvider>
    )
};

export default AdminLayout;