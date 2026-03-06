import { useSearchParams } from "react-router"
import SearchIcon from "../Icons/SearchIcon/SearchIcon";
import './SearchBar.css'

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
