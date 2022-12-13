import { useState } from "react";

import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";

import { FaCalendarPlus } from "react-icons/fa";

import { ServicosPendentes } from "../ServicosPendentes";
import { FiltrosProgramacao } from "../ServicosPendentes/Filtros";

export function SideBarPendentes() {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false);

    return <>
        <div className="mt-2 ml-2 p-2 rounded-md bg-casan-green-600 h-screen sticky top-0">
            <Button
                icon={<FaCalendarPlus />}
                onClick={() => setOpenSidebar(true)}
                tooltip="Programar Serviços" />
        </div>
        <Sidebar visible={openSidebar} position="left" className="p-sidebar-md" onHide={() => setOpenSidebar(false)}>
            <FiltrosProgramacao />
            <ServicosPendentes />
        </Sidebar>
    </>
}