export const getSearchOptions = async (city) => {
  try{
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  // console.log(regionNames.of("GB")); // "United States"

  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=145673b1519161888db4ab06e306bdcb`
  );
  const data = await response.json();
    // console.log(data);
  const searchOptions = data.map((city) => {
    return {
      name: city.name,
      state: city.state?city.state:null,
      country: regionNames.of(city.country),
      lat:city.lat,
      lon:city.lon
    };
  });
//   console.log(searchOptions);
  return searchOptions;
  }catch(err ){
      return [];
  }
};
