# Entrega Telegram'nt
---

La entrega del proyecto es un **clon** de *Whatsapp*, llamado **Telegram'nt**.

Deploy Vecer: `https://telegramnt.vercel.app/`

A medida que iba armando el proyecto, iba descubriendo cosas nuevas para mi y buscaba diferentes explicaciones y ejemplos para lograr entenderlo lo más que pueda. Hice uso de la IA en el proceso, e irem mencionando como lo hice.
---

## Nuevos conocimientos
### A.

Una de las cosas que fui aprendiendo fueron *formas* de llevar a cabo diferentes proyectos.


Una de ellas es el que vi en la cursada: 
  - Cada componente (y si necesita, su .css) guardardo en una carpeta con el mismo nombre, dento de una carpeta general de **Componentes**
  *también hay una carpeta dedicada a los componentes que sean icons*
---

### B.

Despues de leer atentamente y comprender bien el uso de las medidas `px` `rem` y `em`, quise dejar mi proyecto acorde, usando medidas
`rem` para:
 - *Layouts* 
 - *Spacing*
 - *Tipografías*
`px` para:
  - *Bordes*
  - *Shadows*
  - *Detalles pequeños*
---

### C.

En el proceso vi (y quería implementarlo) que si en mi `.css` global de mi proyecto pongo:

```jsx
  html {
    font-size: 62.5%
  }
```

podría tener el mejor manero de las medidas `rem` ya que de esa manera es mas cómodo de leer:

```jsx
/*
  1rem = 10px
  1.6rem = 16px
  2.4rem = 24px 
*/
```

Pero no lo termine implementado porque lei que *podría* traer problemas con librerias que esperen `1rem = 16px`.
---

### C.2
En cambio con lo que si me quede, es con un **Escalado 4x** para mi proyecto:

`4`
`8`
`12`
`16`
`20`
`24`
---

### D.

Aprendi en cambio algo más que me gustaría implementarlo en mis futuros proyectos, y es el uso de `clamp(min, pref, max)`.

```css
  h1{
    font-size: clamp(1.8rem, 4vw, 3rem);
  }
```

`1.8rem`  *nunca más chico que esto*
`4vw`     *tamaño ideal*
`3rem`    *nunca más grande que esto*

*...y asi escale mejor el responsive*
---

### E.

Aprendi tambien el uso del componente `<Outlet />` de la libreria de `react-router`, asi como el uso de `Route` como concepto de *Padre* e *Hijo*.
Tambien la creacion de un **Hook** personalizado *(`useWindowsSize`)*.
Estos tres temas los voy a explicar mas abajo.
---

### F.
La forma en la que averigue para darle funcionalidad a mi `<SearchBar>` fue con el uso del **Hook** `<userSearchParams>`.

Al principio era muy facil perderme por no sabes *que* valores se estaban pasando como parametros, pero luego de varios `console.log()` ubicados en varias partes para ir rastreando los datos que se iban pasando, pude entenderlo bien y termino quedando de la siguiente manera:

```jsx
export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q') || '';
  
  const handleChange = (e) => {
    const text = e.target.value;
    if(text){
      setSearchParams({q: text});
    } else {
      setSearchParams({});
    }
  }

  return (
    <div className="searchBar-component">
      <div className="searchBar-container">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <input className="inputSearchBar" type="text" placeholder="Buscar un chat o iniciar uno nuevo" value={query} onChange={handleChange} />
      </div>  
    </div>
  )
}
```

## Complicaciones

### A.
Tanto mi *Screen* `HomeScreen` como `ContactScreen`, renderizaban el componente `<ContactSidebar />`, lo que podria causar un *parpadeo* al desmontarse y volverse al montar el `sidebar`.

**Solucion:**

Primero cree un nuevo componente `<MainLayout />` que estaria enlazado en la ruta raiz *`('/')`*.
Aca fue donde conoci un componente de la libreria de `react-router`, y es el `<Outlet />`. Use la IA para que me explicara y detallara este componente y como se usa correctamente para asi tenerlo lo mas claro posible, y para entenderlo de cierta manera, seria como un *agujero inteligente*.

Vi que para el correcto uso de `<Outlet />`, hay que crear una `Route` *"Padre"*, y dentro, las rutas *"Hijas"* que en este caso van a terminar renderizando las *Screens* `<HomeScreen />` y `<ContactScreen />`.

```jsx
function App() {
  return (
    <ContactsContextProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="contact/:contact_id" element={<ContactScreen />} />
        </Route>
      </Routes>
    </ContactsContextProvider>
  );
}
```

*aca mi cabeza hizo un clic, ya que anteriormente yo usaba el componente Route como una etiqueta de autocierre `<Route />`. Y no lo habia pensado ni visto hasta el momento que se podia usar tambien como una etiqueta de apertura y cierre `<Route> </Route>`. Con esto termine de comprender como funciona `<Outlet />`*

De esta manera, mi ruta **Padre** seria mi componente `<Outlet />`, que renderizaria `<HomeScreen>` o `<ContactScreen>` segun corresponda.
---

### B.
Cuando llego el momento de hacer el *responsive*, no sabia como implementar bien para que detecte y muestre correctamente el componente que tiene que renderizar dependiendo de ancho de la pantalla.

**Solucion:**

Esto me llevo mucho tiempo tratar de encontrarle una solucion. Tras pedir ayuda a la IA, me aconsejo y genero un *Hook* que me ayuda a verificar si una medida es *mobile* o no, devolvieron `true` o `false` respectivamente.

```jsx
export default function useWindowSize() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
```

Por un lado, aca pude terminar de entender el funcionamiento del **useEffect()** ya que nunca me habia quedado muy claro.
Por otro lado, conoci el metodo de `windows.innerWidth`, que toma el ancho actual de la pantalla *(en px)* y la compara con 768, siendo este el valor iniciar `isMobile`, modificandose cada vez que se escucha el evento `"resize"` y ejecutando el *handleResize* despues de renderizarse el componente *(gracias al **useEffect**)*

De esta manera aplique condicionales a mi `<MainLayout />`.

```jsx
export default function MainLayout() {
  const isMobile = useWindowSize();
  const { contact_selected } = useContext(ContactsContext);

  return (
    <div className="asideMain-container">
      {(!isMobile || !contact_selected ) && (
        <>
          <aside className="aside-navBtn">
            <SideNav />
          </aside>

          <aside className="aside-contacts">
            <ContactSidebar />
            <div className="line-bottom"></div>
          </aside>  
        </>
      )}

      {(!isMobile || contact_selected) && (
        <main className="main">
          <Outlet />
        </main>
      )}
    </div>
  );
}

```

---
### B.1

Esto me genero otro problema, y es que cuando seleccionaba un contacto, el chat no se mostraba.
Este mismo problema tambien lo estaba teniendo en mi componente `<ChatHeader />`, en el hay `<button>` con una flecha, la cual se encargaria de renderizar nuevamente los contactos, haciendo uso del *Hook* `<useNavigate />` para volver a la ruta raiz, pero esto no estaba funcionando como esperaba.

**Solucion:**

Resulta que las rutas si estaban cambiando, pero nunca se estaban actualizando los estados, por lo que no pasaban los condicionales del `<MainLayout />` y no se renderizaban los componentes.

La solucion en este caso fue sencilla. Agregue al `provider` de mi  `<ContactsContext />` es *state* y su debido *setter* para ser llamado en `<ContactItem />` y `<ChatHeader />`.


Aclaracion: si esta aclaracion esta aca es porque todavia no termine el responsive.