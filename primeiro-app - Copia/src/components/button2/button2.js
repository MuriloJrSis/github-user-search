import './button2.css'

const Button = ({label='Clique aqui 2'}) => {
    return <button className='btn'>{label}</button>
}

//props default nao funcionou dessa forma por causa da versao react
Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button

