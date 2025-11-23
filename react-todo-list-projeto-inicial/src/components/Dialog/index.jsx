import './Dialog.style.css'
import { useRef } from "react";

export function Dialog() {
    // no react pra pegar um elemento no DOM é usado um hook especifico, que é o useRef.
    // const dialog = document.querySelector("dialog");
    
    const dialogRef = useRef(null);

    // "Show the dialog" button opens the dialog modally
    const dialogOpen = () => {
        dialogRef.current.showModal();
    };

    // "Close" button closes the dialog
    const dialogClose = () => {
        dialogRef.current.close();
    };
    
    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={dialogClose}>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
            <button onClick={dialogOpen}> Show the dialog</button>
        </>

    )
}