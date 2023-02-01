import Button from '../Button'
import Dropdown from '../Dropdown'
import TextBox from '../TextBox/TextBox'
import './Form.css'

export const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form enviado')
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de colaborador</h2>
                <TextBox label="Nome" placeholder="Digite seu Nome" />
                <TextBox label="Cargo" placeholder="Digite seu Cargo" />
                <TextBox label="Imagem" placeholder="Digite o endereço da Imagem" />
                <Dropdown label ="Time" itens={times} />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )

}