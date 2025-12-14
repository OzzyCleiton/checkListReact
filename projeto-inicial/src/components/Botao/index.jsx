import './Botao.estilo.css';

export function Botao({children, ...rest}) {
    return (
        <button {...rest} className='botao'>
            {children}
        </button>
    )
}