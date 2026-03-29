import OptionRow from "../../../Shared/OptionRow/OptionRow";
import SwitchRow from "../../../Shared/SwitchRow/SwitchRow";


export default function ChatsSettings() {
  return (
    <div>
      <div>
        <p>Pantalla</p>
        <OptionRow title='Tema' description='' to='' />
        <OptionRow title='Fondo' />
      </div>
      <div>
        <p>Ajustes de chats</p>
        <OptionRow title='Calidad de subida de los archivos multimedia' />
        <OptionRow title='Descarga automatica de archivos multimedia' />
        <SwitchRow title='Correcion ortografica' description='Revisa laortografia mientras escribes.' />
        <SwitchRow title='Reemplaza texto con emojis' description='El emoji reemplazara el texto especifico mientras escribes' />
        <SwitchRow title='Enter para enviar' description='Se enviara tu mensaje cuando presiones la tecla Enter.' />
      </div>
    </div>
  )
}
