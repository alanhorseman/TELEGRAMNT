import SearchBar from "../../SearchBar/SearchBar";
import SidebarHeader from "../../SidebarHeader/SidebarHeader";
import SidebarTemplate from "../../SidebarTemplate/SidebarTemplate";
import OptionRow from "../Shared/OptionRow/OptionRow";

export default function SettingsSidebar() {
  return (
    <SidebarTemplate
      header={<SidebarHeader title='Ajustes' to='/'/>}
      searchBar={<SearchBar placeholder='Buscar en los ajustes' />}
    >
      <OptionRow title='Cuenta' description='Notificaciones de seguridad, informacion de la cuenta' to='/settings/account'/>
      <OptionRow title='Privacidad' description='Contactos bloqueados, mensajes temporasles' to='/settings/privacy'/>
      <OptionRow title='Chats' description='Tema, fondo, ajustes del chat' to='/settings/chats' />
      <OptionRow title='Notificaciones' description='Notificaciones de mensajes' to='/settings/notification' />
      <OptionRow title='Atajos del teclado' description='Acciones rapidas' to='' />
      <OptionRow title='Ayuda y comentarios' description='Centro de ayuda, contactanos, politica de privacidad' to='/settings/help-feedback' />
      <OptionRow title='Cerrar sesion' />
    </SidebarTemplate>
  )
}