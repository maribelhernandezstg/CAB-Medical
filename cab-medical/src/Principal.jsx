import { useModal } from './assets/js/modal.js'; 
import Modal from './assets/modalCita.jsx'; 
import './assets/css/principal.css'; 
import imagedoctor from './assets/images/doctor.png';
import medical1 from './assets/images/medical1.jpg';
import medical2 from './assets/images/medical2.jpg';

function Principal() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <main style={{ fontFamily: "'Poppins', sans-serif" }}>
      <nav className="header">
        <div className="header-content">
            <h1>Dr. Santiago Herrera López</h1>
            <h4>Dermatología estética.</h4>
            <button className="appointment-button" onClick={openModal}>
              Agenda tu cita hoy
            </button>
        </div>

        <img src={imagedoctor} className="main-image" />
    </nav>
    {isModalOpen && (
        <Modal onClose={closeModal}>
        </Modal>
      )}
        
      <section className="about">

        <div className="about-content">
        <h2>Especialista en Cuidado y Estética de la Piel</h2>
        <p>
            El Dr. Santiago Herrera es un especialista en dermatología estética con un enfoque
            innovador en el cuidado de la piel. Se dedica a personalizar tratamientos para mejorar la apariencia y salud de cada paciente, utilizando
            tecnología de vanguardia y productos de alta calidad. Su objetivo es realzar la belleza natural mientras garantiza resultados seguros y efectivos.
        </p>
    </div>
      </section>
      <section className="locations">
        <h2>Ubicaciones y Contacto</h2>
        <div className="location-cards">
          <div className="card">
          <img src={medical1} />
            <h4>Centro Médico Vitalis</h4>
            <h5>Dirección:</h5>
            <p>
            Clínica Altavista, en el Boulevard Solaris 486, Ciudad Lúmina.
            </p>
            <h5>Horario:</h5>
            <p>Lunes, Miércoles y Viernes de 9:00 am a 6:00 pm</p>
          </div>
          <div className="card">
          <img src={medical2} />
            <h4>Clínica de Especialidades Sanare</h4>
            <h5>Dirección:</h5>
            <p>
             Avenida de los Sauces 112, Colonia San Cristóbal, Ciudad Jardín.
            </p>
            <h5>Horario:</h5>
            <p>Martes y Jueves de 9:00 am a 6:00 pm</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Principal;
