# 📱 Entrega Telegram'nt

La entrega del proyecto es un **clon** de *Whatsapp*, llamado **Telegram'nt**.

**Deploy Vercel:** `https://telegramnt.vercel.app/`

---

> [!NOTE]
> A medida que iba armando el proyecto, iba descubriendo cosas nuevas para mi y buscaba diferentes explicaciones y ejemplos para lograr entenderlo lo más que pueda. Hice uso de la IA en el proceso, e iré mencionando como lo hice.

---

## 📚 Nuevos conocimientos

### A. Estructura de componentes
Una de las cosas que fui aprendiendo fueron *formas* de llevar a cabo diferentes proyectos. Una de ellas es el que vi en la cursada: 

* Cada componente (y si necesita, su `.css`) guardado en una carpeta con el mismo nombre, dentro de una carpeta general de **Componentes**.
* También hay una carpeta dedicada a los componentes que sean **icons**.

---

### B. Uso de medidas REM y PX
Después de leer atentamente y comprender bien el uso de las medidas `px`, `rem` y `em`, quise dejar mi proyecto acorde, usando medidas:

| Unidad | Uso en el proyecto |
| :--- | :--- |
| **`rem`** | Layouts, Spacing y Tipografías |
| **`px`** | Bordes, Shadows y Detalles pequeños |

---

### C. Configuración del HTML font-size
En el proceso vi (y quería implementarlo) que si en el `.css` global de mi proyecto pongo:

```css
html {
  font-size: 62.5%;
}
```

Podría tener un mejor manejo de las medidas `rem` ya que de esa manera es más cómodo de leer:

```css
/*
  1rem = 10px
  1.6rem = 16px
  2.4rem = 24px 
*/
```

Pero no lo terminé implementado porque leí que *podría* traer problemas con librerías que esperen `1rem = 16px`.

---

### C.2 Escalado 4x
En cambio con lo que sí me quedé, es con un **Escalado 4x** para mi proyecto:
`4` | `8` | `12` | `16` | `20` | `24`

---

### D. Uso de `clamp()`
Aprendí en cambio algo más que me gustaría implementarlo en mis futuros proyectos, y es el uso de `clamp(min, pref, max)`.

```css
h1 {
  font-size: clamp(1.8rem, 4vw, 3rem);
}
```

* **`1.8rem`**: *nunca más chico que esto*
* **`4vw`**: *tamaño ideal*
* **`3rem`**: *nunca más grande que esto*

*...y así escala mejor el responsive.*

---

### E. React Router y Custom Hooks
Aprendí también el uso del componente `<Outlet />` de la librería de `react-router`, así como el uso de `Route` como concepto de *Padre* e *Hijo*.
También la creación de un **Hook** personalizado `(useWindowsSize)`. Estos tres temas los voy a explicar más abajo.

---

### F. Implementación de SearchBar
La forma en la que averigüé para darle funcionalidad a mi `<SearchBar>` fue con el uso del **Hook** `useSearchParams`.

Al principio era muy fácil perderme por no saber *qué* valores se estaban pasando como parámetros, pero luego de varios `console.log()` ubicados en varias partes para ir rastreando los datos que se iban pasando, pude entenderlo bien y terminó quedando de la siguiente manera:

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
        <input 
          className="inputSearchBar" 
          type="text" 
          placeholder="Buscar un chat o iniciar uno nuevo" 
          value={query} 
          onChange={handleChange} 
        />
      </div>  
    </div>
  )
}
```

---

## 🛠️ Complicaciones

### A. Renderizado del Sidebar
Tanto mi *Screen* `HomeScreen` como `ContactScreen`, renderizaban el componente `<ContactSidebar />`, lo que podría causar un *parpadeo* al desmontarse y volverse a montar el `sidebar`.

**Solución:**
Primero creé un nuevo componente `<MainLayout />` que estaría enlazado en la ruta raíz `('/')`. Acá fue donde conocí un componente de la librería de `react-router`, y es el `<Outlet />`. Usé la IA para que me explicara y detallara este componente y cómo se usa correctamente para así tenerlo lo más claro posible, y para entenderlo de cierta manera, sería como un *agujero inteligente*.

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

*Acá mi cabeza hizo un clic, ya que anteriormente yo usaba el componente Route como una etiqueta de autocierre `<Route />`. Y no lo había pensado ni visto hasta el momento que se podía usar también como una etiqueta de apertura y cierre `<Route> </Route>`. Con esto terminé de comprender cómo funciona `<Outlet />`.*

De esta manera, mi ruta **Padre** sería mi componente `<Outlet />`, este *agujero inteligente* que renderizaría `<HomeScreen>` o `<ContactScreen>` según corresponda.

---

### B. Manejo del Responsive
Cuando llegó el momento de hacer el *responsive*, no sabía cómo implementar bien para que detecte y muestre correctamente el componente que tiene que renderizar dependiendo del ancho de la pantalla.

**Solución:**
Esto me llevó mucho tiempo tratar de encontrarle una solución. Tras pedir ayuda a la IA, me aconsejó y generó un *Hook* que me ayuda a verificar si una medida es *mobile* o no, devolviendo `true` o `false` respectivamente.

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

Por un lado, acá pude terminar de entender el funcionamiento del **useEffect()** ya que nunca me había quedado muy claro. Por otro lado, conocí el método de `window.innerWidth`, que toma el ancho actual de la pantalla *(en px)* y la compara con 768, siendo el resultado un valor *Booleano* que sera a su vez, el valor inicial de `isMobile`, modificándose cada vez que se escucha el evento `"resize"`.

De esta manera apliqué condicionales a mi `<MainLayout />`:

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

### B.1 Actualización de Estados
Esto me generó otro problema, y es que cuando seleccionaba un contacto, el chat no se mostraba. Este mismo problema también lo estaba teniendo en mi componente `<ChatHeader />`, en él hay un `<button>` con una flecha, la cual se encargaría de renderizar nuevamente los contactos, haciendo uso del *Hook* `useNavigate` para volver a la ruta raíz, pero esto no estaba funcionando como esperaba.

**Solución:**
Resulta que las rutas sí estaban cambiando, pero nunca se estaban actualizando los estados, por lo que no pasaban los condicionales del `<MainLayout />` y no se renderizaban los componentes.

La solución en este caso fue sencilla. Agregué al `provider` de mi `<ContactsContext />` el *state* y su debido *setter* para ser llamado en `<ContactItem />` y `<ChatHeader />`.

> **Aclaración:** Los iconos no tienen funcionalidad, son puramente visual. Por supuesto mi objetivo si quiero que esto sea parte de mi Portfolio, voy a agregarle funcionalidad en el futuro.