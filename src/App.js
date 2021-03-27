import Header from './components/Header' //importamos el componenete header que se encuentra ddentro de la carpeta components
import Task from './components/Tasks'
import {useState} from 'react'
import './style.css';
import Tasks from './components/Tasks';
function App() {
// const name = 'Lisandro'; //se pueden definir funciones o variables
 
//A continuacion definimos un state en lugar definir un array fuera del componenete parap oder utilizarlo apra cargar las tareas
  //Definimos una variable abrimos brackets y lo primero que definimos es el nombre del state  y segundo una funcion para actualizar el state 
  const [task, setTasks] = useState([ //aca definimos un array de objetos llamado task o tareas en español que sera utilizado como el state por defecto ya que llamamos al a useState y le asignaos el array de objetos
    {
    id: 1,
    text: 'Cita con el dentista',
    day: 'Miercoles 31 a las 09 am',
    reminder: true
    },
    {
       id: 2,
       text: 'Reunion de la Facultad',
       day: 'jueves 01 a las 14 pm',
       reminder: true
    },
    {
        id: 3,
        text: 'Compras del super',
        day: 'lunes 29 a las 12 am',
        reminder: false
        }
    ])
     //Creo una funcion para eliminar una tarea o task
     const deleteTask = (id)=>{
        setTasks(task.filter((task) =>task.id !== id)) //invocamos la funcion setTask para modificar el state de task utilizando la funcion .filter de js para poder filtrar los objetos cuya propiedad id sea diferente al id ingresado como parametro en al funcion deleteTask
     }


  return ( //Este metodo return solo puede devolver un elemento de cualquier tipo pero siempre va aser un solo elemento , si agrego toro div debajo del primero va a fallar al copilar lo mismo si pongo dos h1 sin ningun div o algo por el estilo
    <div className="container">
    <Header />  {/*  Aca lo utilizamos invocandolo como si fuera una etiqueta html que se cierra al crearse similar a un br o hr */}
      {/* <h2>Buenos dias  {name}</h2> y luego utilizarlos en el codigo de la siguiente manera  */}
      {/* <h2> {name=='Lisandro' ?'hola' : 'chau'}</h2> o de esta forma utilizar funciones tambien como una condicional o cualquier otra */}
     {task.length > 0 ?<Task tasks={task} onDelete={deleteTask}/> :<h4>No hay tareas para realizar</h4>}{/* Creamos la propiedad onDelete que cuando sea ejecutada ejecutara al funcion deleteTask definida mas erriba en este componenet*/}
    </div>
  );
}

export default App;
