const checkCountryCode = async (zipCode) => {
  const apiUrl = `https://nominatim.openstreetmap.org/?postalcode=${zipCode}&format=json&addressdetails=1`;
  
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();

      if (Array.isArray(data)) {
        const cityCountryArray = data.reduce((acc, result) => {
          let city = result.address.city || result.address.town || result.address.county || result.address.state;
          let countryCode = result.address.country_code;
          if (city !== undefined) {
            acc.push({
              cityName: city,
              countryCode: countryCode
            });
          }
          return acc;
        }, []);
        return cityCountryArray;
      } else {
        return Promise.reject("Error404.js");
      }
    } else {
      return Promise.reject("Error404.js");
    }
  } catch (error) {
    console.error(error);
    return '404';
  }
};
export default checkCountryCode;