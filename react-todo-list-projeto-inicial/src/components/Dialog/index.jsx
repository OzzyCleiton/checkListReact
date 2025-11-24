import { useRef, useState } from 'react';
import './Dialog.style.css'
export function Dialog() {

    // const dialog = document.querySelector("dialog");
    // useRef é o jeito react de buscar elementos no DOM!

    const dialogRef = useRef(null);
    const contadorRef = useRef(0);
    const [estado, setEstado] = useState(0)

    function incrementador() {


        setEstado(contadorRef.current++)
        console.log(estado);

    }

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
                <p>Você clicou {estado} vezes</p>
                <button onClick={incrementador}>Contador</button>
            </dialog>
            <button onClick={showButton}>Show the dialog</button>
        </>
    )
}