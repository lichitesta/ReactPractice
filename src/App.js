
import './style.css';
function App() {
const name = 'Lisandro'; //se pueden definir funciones o variables

  return ( //Este metodo return solo puede devolver un elemento de cualquier tipo pero siempre va aser un solo elemento , si agrego toro div debajo del primero va a fallar al copilar lo mismo si pongo dos h1 sin ningun div o algo por el estilo
    <div className="container">
      
      <h1> Seguimiento de tareas</h1>
      {/* <h2>Buenos dias  {name}</h2> y luego utilizarlos en el codigo de la siguiente manera  */}
    </div>
  );
}

export default App;
