import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { QRCodeCanvas } from "qrcode.react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selecionaEquipe, selectEquipeSelecionada } from "../../app/slices/equipes";
import { closeDialog, Dialogs, selectIsOpen } from "../../app/slices/ui";

export function DialogQRCode() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => selectIsOpen(state, Dialogs.QRCODE));
    const equipe = useSelector(selectEquipeSelecionada);

    return (
        <Dialog
            header="Equipe QRCODE"
            visible={isOpen}
            onHide={() => {
                dispatch(closeDialog(Dialogs.QRCODE))
                dispatch(selecionaEquipe(undefined))
            }}
        >
            {
                equipe ? (
                    <div className="w-full flex flex-col items-center justify-center gap-3 p-6">
                        <QRCodeCanvas value={equipe.code} size={300} />
                        <span className="font-bold text-5xl">{equipe.code.replace(/(\w{2})(\w{2})(\w{2})(\w{2})/, '$1-$2-$3-$4')}</span>
                        <Button className="w-full" label="Imprimir" />
                    </div>
                ) : null
            }
        </Dialog>
    )
}