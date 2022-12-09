import { Dialog } from "primereact/dialog";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeDialog, Dialogs, selectDialogs, selectIsOpen } from "../../app/slices/ui";

export function DialogQRCode() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => selectIsOpen(state, Dialogs.QRCODE));

    return (
        <Dialog
            header="Equipe QRCODE"
            visible={isOpen}
            onHide={() => dispatch(closeDialog(Dialogs.QRCODE))}>
            QRCODE
        </Dialog>
    )
}