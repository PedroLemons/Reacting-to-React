import TextBox from '../TextBox/TextBox'
import './Form.css'

export const Form = () => {

    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card de colaborador</h2>
                <TextBox label="Nome" placeholder="Digite seu Nome" />
                <TextBox label="Cargo" placeholder="Digite seu Cargo" />
                <TextBox label="Imagem" placeholder="Digite o endereço da Imagem" />
            </form>
        </section>
    )

}