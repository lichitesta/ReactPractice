import PropTypes from 'prop-types' //se utiliza para definir el tipo de dato de las propiedades 

const Button = ({color , text , onClick}) => {
 

    return  <button onClick={onClick} style={{backgroundColor : color ,color:"white"}} className='btn'>{text}</button>    
}

Button.defaultProps = {
color :'white',
backgroundColor: 'black'



}

export default Button
Button.propTypes ={ //de esta menra asignamos el tipo de valor a las propiedades del boton
   text : PropTypes.string,//aca se define que el tipo de dato que va a aceptar la propiedad  text va ser unicamente string
   color: PropTypes.string,//igual al anterior pero con la propiedad color
   onClick: PropTypes.func, //aca definimos que la propiedad onClick siempre va aser una funcion

}
