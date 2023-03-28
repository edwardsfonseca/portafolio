import React from 'react'
import '../style/contact.css'
export const Contact = () => {
  return (
    <div class="row contacto">
      <div class="col-md-6 login-form-1">
        <h3>Formulario de Contacto</h3>

        <form >
          <label>Nombre</label>
          <input type="text" class="form-control" placeholder="Tu nombre" name="user_name" />
          <label>Correo electrónico</label>
          <input type="email" class="form-control" placeholder="Tu correo electrónico" name="user_email" />
          <label>Mensaje</label>
          <textarea class="form-control" placeholder="Mensaje" name="message" />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}
