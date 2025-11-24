import { useRef } from 'react';
import './Dialog.style.css'
export function Dialog() {

    // const dialog = document.querySelector("dialog");
    // useRef é o jeito react de buscar elementos no DOM!

    const dialogRef = useRef(null);
    
    // "Show the dialog" button opens the dialog modally
    const showButton = () => {
        dialogRef.current.showModal();
    };

    // "Close" button closes the dialog
    const closeButton = () => {
        dialogRef.current.close();
    };
    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={closeButton}>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
            <button onClick={showButton}>Show the dialog</button>
        </>
    )
}