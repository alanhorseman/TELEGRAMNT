import OptionRow from "../../../Shared/OptionRow/OptionRow";
import SwitchRow from "../../../Shared/SwitchRow/SwitchRow";

export default function PrivacySettings() {
  
  return (
    <div>
      <div>
        <p>Quien puede ver mi informacion personal</p>
        <OptionRow title='Hora de ult. vez y En linea' description='' to='/settings/privacy/last-seen' />
        <OptionRow title='Foto de perfil' description='' to='/settings/privacy/profile-photo' />
        <OptionRow title='Info.' description='' to='/settings/privacy/info' />
        <OptionRow title='Estado' description='' to='/settings/privacy/state' />
        <SwitchRow title='Confirmacion de lectura' description='Si desactivas las confirmacion de lectura, no podras enviarlas ni recibirlas. Las confirmaciones de lectura se enviaran siempre en los chats en grupo.' />
      </div>
      <div>
        <p>Mensajes temporales</p>
        <OptionRow title='Duracion predeterminada de los mensajes' description='' to='/settings/privacy/messages-duration' />
        <div></div>
        <OptionRow title='Grupos' description='' to='/settings/privacy/groups' />
        <OptionRow title='Contactos bloqueados' description='' to='/settings/privacy/blocked-contacts' />
        <OptionRow title='Bloqueo de aplicacion' description='' to='/settings/privacy/app-blocked' />
      </div>
      <div>
        <p>Opciones avanzadas</p>
        <SwitchRow title='Bloquear mensajes de cuentas desconocidas' description='A fin de proteger tu cuenta y mejorar el rendimiento del dispositivo, Whatsapp bloqueara los mensajes de cuentas desconocidas si superan un determinado volumen' />
        <SwitchRow title='Desactivar vistas previas de enlaces' description='Para ayudar a evitar que sitios web de terceros puedan deducir tu direccion IP, ya no se generaran vistas previas de los enlaces que compartas en los chats.' />
      </div>
    </div>
  )
}
