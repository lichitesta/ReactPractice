import Button from './Button'

const Header = (props) => {   //se puede pasar un prop atravez de app.js o colo carse una valor por default para el prop para poder darle mas dinamismo
   const onClick = () =>{
console.log('clik')

   }
   
   
    return (
       <header className='header'>
           <h1>Seguimiento de tareas </h1>
           <Button  color='green' text='Añadir' onClick={onClick}/>
           {/* <h1>{props.title}</h1> Asi se puede acceder a las propiedades de los props como por ejempleo en este caso a la propiedad title */}
         
       </header>
    )
}


Header.defaultProps = {     //asi se define un default para los props para desplegarse en casi que no sean definidos en la clase app.js o la clase que importe a header.js
    title: 'Seguimiento Tareas' //simplmenete creamos un objeto y le otorgamos un title determinado para que se muestre en casao que no se le asigne uno en el documento en el cual se importo  headers.js
}

export default Header
