import {useState} from 'react'

const AddTask = ({onAdd}) => {
  const[text,setText] = useState('');
  const[day,setDay] = useState('');
  const[reminder,setReminder] = useState(false);
const onSubmit = (e) =>{
e.preventDefault();

if(!text){
alert('Porfavor Agregue Una Tarea')
return
}

onAdd({text,day ,reminder});
setText('');
setDay('');
setReminder(false);



}
    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className ='form-control'>
             <label htmlFor="">Tarea</label>
             <input type="text" placeholder='Agregar Tarea' value={text} 
             onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className ='form-control'>
             <label htmlFor="">Dia y hora </label>
             <input type="text" placeholder='Agregar Dia y Hora' value={day} 
             onChange={(e) => setDay(e.target.value)}/>
            </div>
    
            <div className ='form-control form-control-check'>
             <label htmlFor="">Recordatorio</label>
             <input type="checkbox" value={reminder} 
             onChange={(e) => setReminder(e.currentTarget.checked)}
             checked={reminder}
             />
            </div>

            <input type="submit" value="Agregar Tarea" className='btn btn-block'/>        
        </form>
    )
}

export default AddTask
