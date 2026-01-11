import './Botao.style.css';

export function Botao ({ children, ...rest }) {
    return (
        <button className='botao' {...rest}>
            {children}
        </button>
    )
}