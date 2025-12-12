import { useEffect, useRef } from 'react';
import './Dialog.style.css'
export function Dialog({ isOpen, onClose }) {

    // const dialog = document.querySelector("dialog");
    // useRef é o jeito react de buscar elementos no DOM!

    const dialogRef = useRef(null);

    useEffect(() => {
            if (isOpen) {
                showDialog()
            }else{
                closeDialog()
            }

    }, [isOpen])
    
    // "Show the dialog" button opens the dialog modally
    const showDialog = () => {
        dialogRef.current.showModal();
    };

    // "Close" button closes the dialog
    const closeDialog = () => {
        dialogRef.current.close();
    };
    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={onClose}>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
        </>
    )
}