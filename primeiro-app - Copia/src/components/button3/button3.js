import './button3.css'

const sayHello = () => {
    console.log('Olá')
}

const Button3 = ({label='Clique aqui 3'}) => {
    return <button className='btn' onClick={sayHello}>{label}</button>
}

export default Button3

//evento no componente de função como atributo jsx