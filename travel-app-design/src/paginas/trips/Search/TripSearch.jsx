import Portrait from '../../home/Portrait';
import SearchAppBar from './SearchBar';
//import SelectComponent from './SelectComponent';
import './searchStyle.css';
export const TripSearch = () => {
  return (
    <div>
        <Portrait 
            bannerClass="portrait-container2 search-banner"
            title="¡Explora sin límites!"
            className="content banner"
        />
        <div className="search-bar">
            <SearchAppBar />
        </div>
    </div>
  );
}
