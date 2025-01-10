// Validaciones para el formulario modal
export function validateForm(form) {
    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const telefono = form.telefono.value.trim();
    const fechaNac = form.fechaNac.value.trim();
  
    if (!nombre) {
      alert('Por favor, ingrese su nombre.');
      return false;
    }
  
    if (!correo || !/\S+@\S+\.\S+/.test(correo)) {
      alert('Debe ingresar un correo válido.');
      return false;
    }
  
    if (!telefono || !/^\d{10}$/.test(telefono)) {
      alert('El número de teléfono/celular debe ser de 10 dígitos.');
      return false;
    }
  
    if (!fechaNac) {
      alert('Por favor, seleccione su fecha de nacimiento.');
      return false;
    }
  
    return true;
  }
  