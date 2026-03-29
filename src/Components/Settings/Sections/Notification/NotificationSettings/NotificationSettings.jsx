import React from 'react'
import SwitchRow from '../../../Shared/SwitchRow/SwitchRow'

export default function NotificationSettings() {
  return (
    <div>
      <div>
        <p>Mensajes</p>
        <SwitchRow title='Notificaciones de mensajes' description='Se muestran notificaiones de mensajes nuevos.' />
        <SwitchRow title='Mostrar vista previa' />
        <SwitchRow title='Mostrar notificaciones de reacciones' />
        <SwitchRow title='Sincronizacion en segundo plano' description='Sincroniza los mensajes en segundo plano para obtener un rendimiento mas rapido' />
      </div>
      <div>
        <p>Tonos de notificaciones</p>
        <SwitchRow title='Sonidos para mensajes entrantes' description='Se reproduce un sonido cuando hay mensajes entrantes.' />
        <SwitchRow title='Sonidos para mensajes salientes' description='Se reproduce un sonido cuando hay mensajes salientes' />
      </div>
    </div>
  )
}
