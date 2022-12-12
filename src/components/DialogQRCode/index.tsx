import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { QRCodeCanvas } from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import { EquipeModel } from "../../model/Equipe"
import { selecionaEquipe, selectEquipeSelecionada } from "../../app/slices/equipes";
import { closeDialog, Dialogs, selectIsOpen } from "../../app/slices/ui";
import ReactToPrint, { useReactToPrint } from "react-to-print";

export function DialogQRCode() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => selectIsOpen(state, Dialogs.QRCODE));
    const equipe = useSelector(selectEquipeSelecionada);


    return (
        <Dialog
            header={equipe?.name}
            visible={isOpen}

            onHide={() => {
                dispatch(closeDialog(Dialogs.QRCODE))
                dispatch(selecionaEquipe(undefined))
            }}
        >
            {
                equipe ? (
                    <QrCodePrintable equipe={equipe} />
                ) : null
            }
        </Dialog>
    )
}

interface QrCodePrintableProps {
    equipe: EquipeModel
}

const QrCodePrintable = React.forwardRef(({ equipe }: QrCodePrintableProps, ref: any) => {

    const qrCodeRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => qrCodeRef.current,
    });
    return (
        <>
            <div ref={qrCodeRef} className="w-full flex flex-col items-center justify-center gap-3 p-6">
                <span className="font-bold text-4xl">{equipe.name}</span>
                <QRCodeCanvas value={equipe.code} size={300} />
                <span className="font-bold text-3xl">{equipe.code.replace(/(\w{2})(\w{2})(\w{2})(\w{2})/, '$1-$2-$3-$4')}</span>
            </div>
            <Button className="w-full" label="Imprimir" onClick={() => handlePrint()} />
        </>
    )
})