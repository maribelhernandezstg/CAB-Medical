import './css/modal.css'; 
import { validateForm } from './js/validaciones.js';

function Modal({ children, onClose }) {
    const handleSubmit = (event) => {
        event.preventDefault(); 

        // Hace el llamado a la validacion
    if (validateForm(event.target)) {
        alert('Los datos han sido enviados con éxito.');
        event.target.reset(); 
        onClose(); 
      }
    };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}

          <h2>Agenda tu cita</h2>
          <p>Completa el formulario para agendar tu cita </p>
          <form onSubmit={handleSubmit}>
            <ul>
            <div className='formulario'>
                <label htmlFor="name" >Nombre:</label>
                <input type='text' id='nombre' required></input>
            </div>
            <div className='formulario'>
                <label htmlFor="correo"> Correo de contacto: </label>
                <input type='text' id='correo' required></input>
            </div>
            <div className='formulario'>
                <label htmlFor="telefono"> Teléfono o celular:</label>
                <input type='text' id='telefono' required></input>
            </div>
            <div className='formulario'>
                <label htmlFor="fechaNacimiento"> Fecha de nacimiento:</label>
                <input type='date' id='fechaNac' required></input>
            </div>
            </ul>
            <button className='botonAceptar' type='submit'>Aceptar</button>
          </form>
        <button className="modal-close" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Modal;
