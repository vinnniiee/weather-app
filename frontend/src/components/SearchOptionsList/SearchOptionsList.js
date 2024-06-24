import "./css/SearchOptionsList.css";
export default function SearchOptionsList(props) {

  const selectCityHandler=  (cityDisplayName,city)=>{
    // console.log("select city handler...")
    props.setCity(cityDisplayName);
    props.setSearchItem(city);
    props.setSearchOptions([]);
  }
  let key=0;
  const searchList = props.options.map((city) => 
  {    
    const cityDisplayName = `${city.name}${city.state ? `, ${city.state}` : null}, ${city.country}`
    return (<div key={key++}>
      <p className="search-options-list-item item" onClick={e=> selectCityHandler(cityDisplayName,city)}>
        {cityDisplayName}
      </p>
    </div>)
 } );
  return <div className="search-options-list">{searchList}</div>;
}