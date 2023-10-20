import { FaSearch } from "react-icons/fa";
export const Searchbar = () => {
  return (
    <div className="bar-container">
      <div className="search-container">
        <input type="text" 
          className="country-searchBar"
          name="country"
          placeholder="Buscar país"
        />
          <FaSearch className="search-icon"/>
      </div>
    </div>
  )
}
