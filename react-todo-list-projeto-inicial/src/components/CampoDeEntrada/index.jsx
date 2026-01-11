import './CampoDeEntrada.style.css';

export function CampoDeEntrada({...rest}) {
    return (
        <>
            <input type="text" className='field' {...rest}/>

        </>
    )
}