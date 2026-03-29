import './SidebarTemplate.css'

export default function SidebarTemplate({header, searchBar, children}) {
  return (
    <div className="sidebarTemplate">
      <header className="sidebarHeader">
        {header}
      </header>
      <section>
        {searchBar}
      </section>
      <main>
        {children}
      </main>
    </div>
  )
}
