import {FaTimes} from 'react-icons/fa' //importamos el icono para borrar una tarea

const Task = ({task , onDelete}) => {
    return (
        <div className='task'>
          <h3>{task.text} <FaTimes style={ {color : 'red' , cursor:'pointer'}} 
          /*le asignamos al evento onClick un funcion que utilice la funcion onDelete y le pasamos el id del task al cual se le hizo click*/onClick={() => onDelete(task.id)}/></h3>  
          <p>{task.day}</p>

        </div>

    )
}

export default Task
