import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";
import { ServicosPendentes } from "../ServicosPendentes";
import { FiltrosProgramacao } from "../ServicosPendentes/filtros";

export function SideProgramacao() {
    const [openProgramacao, setOpenProgramacao] = useState<boolean>(false);

    return <>
        <div className="mt-2 ml-2 p-2 rounded-md bg-casan-green-600 h-screen sticky top-0">
            <Button
                icon={<FaCalendarPlus />}
                onClick={() => setOpenProgramacao(true)}
                tooltip="Programar Serviços" />
        </div>
        <Sidebar visible={openProgramacao} position="left" className="p-sidebar-md" onHide={() => setOpenProgramacao(false)}>
            <FiltrosProgramacao />
            <ServicosPendentes />
        </Sidebar>
    </>
}