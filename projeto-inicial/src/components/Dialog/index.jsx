import { useEffect, useRef, useState } from 'react';
import './Dialog.style.css'
import { Botao } from '../Botao';
export function Dialog({ isOpen, onClose }) {

    // const dialog = document.querySelector("dialog");
    // useRef é o jeito react de buscar elementos no DOM!

    const dialogRef = useRef(null);

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

    const [contador, setContador] = useState(0);
    
    function incrementa () {
        setContador(contador + 1);
    }

    function decrementa () {
        setContador(contador - 1);
    }
    

    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={onClose}>Close</button>
                <div>
                    <p>Clicou {contador} vezes</p>
                    <div className='btn-wapper'>
                        <Botao onClick={incrementa}>incrementa</Botao>
                        <Botao onClick={decrementa}>decrementa</Botao>
                    </div>

                </div>
            </dialog>
        </>
    )
}