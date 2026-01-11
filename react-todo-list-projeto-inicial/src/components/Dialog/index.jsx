import {  useEffect, useRef } from 'react';
import './Dialog.style.css'
export function Dialog({ isOpen, onClose, children }) {

    // const dialog = document.querySelector("dialog");
    // useRef é o jeito react de buscar elementos no DOM!

    const dialogRef = useRef(null);
    const inputRef = useRef('')

    useEffect(() => {
        if (isOpen) {
            showDialog()
        } else {
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
            <dialog ref={dialogRef} className='dialog'>
                <div className="btn-close-wapper">
                    <button autoFocus onClick={onClose} className='btn-close'>
                        <img src="../public/close.png" alt="botao de fechar" />
                    </button>
                </div>
                <div className="body">
                    {children}
                </div>
            </dialog>
        </>
    )
}