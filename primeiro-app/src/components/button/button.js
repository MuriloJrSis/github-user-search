import './button.css'

const Button = () => {
    return <button className='btn'>Clique aqui</button>
}

export default Button
/*evento no componente 

const sayHello = () =>{
    console.log('olá')
}

const Button = ({label}) => {
    return <button onClick={sayHello}>{label}</button>
}

export default Button

//label nao tem significado especial no react pode ser titulo, descrição, rotulo, title, name, text
//ja no contexto de formulario ela existe como elemento html tag, para associar textos a input
*/
