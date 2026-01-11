import { Botao } from '../Botao';
import { CampoDeEntrada } from '../CampoDeEntrada';
import './TodoForm.style.css';

export function TodoForm({ onSubmit }) {

    return (
        <form className='todo-form' action={onSubmit}>
            <CampoDeEntrada placeholder='Digite o item que deseja adicionar' />
            <Botao>Salvar item</Botao>
        </form>
    )

}