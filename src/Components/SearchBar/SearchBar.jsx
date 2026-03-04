import { useSearchParams } from "react-router"

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
    <div>
      <input type="text" placeholder="Buscar un chat..." value={query} onChange={handleChange} />
    </div>
  )
}
