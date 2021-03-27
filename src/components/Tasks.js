import Task from '../components/Task'

const Tasks = ({tasks, onDelete}) => {
 
    return (
        <>
           {tasks.map((task) => ( //creamos una lista con la funcion .map de js
                <Task key={task.id} task={task} onDelete={onDelete}/> //desplegamos el texto que contiene cada objeto task y tambien le asignamos un valor unico a la propiedad key de la etiqueta Taks para evitar errores en este caso usamos la propeidad id de cada objeto ya ques diferente y unica y le pasamos la propiedad onDelete que es una funcion
           ))} 
        </>
    )
}

export default Tasks
