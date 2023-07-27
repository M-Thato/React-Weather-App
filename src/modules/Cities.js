// Import all necessary dependecies, functions or styles
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Error404 from './Error404';
import checkCountryCode from './functions/HandleZipCode';
import Weather from './Weather';
import { handleHomeClick } from './functions/HandleClicks';
import * as Styled from './styles/CityStyles'

const CityComponent = ({ zipCode }) => {

    // Initialize a state variable called 'cityCountryArray' and a function 'setCityCountryArray' to update it. It is initially an empty array.
    // Initialize a state variable called 'isCitySelected' and a function 'setIsCitySelected' to update it. It is initially set to 'false'.
    // Initialize a state variable called 'CountryCode' and a function 'setCountryCode' to update it.
    // Initialize a state variable called 'isError' and a function 'setIsError' to update it. It is initially set to 'false'.
    // Initialize a state variable called 'weather' and a function 'setWeather' to update it. It is initially set to 'null'.
    
    const [cityCountryArray, setCityCountryArray] = useState([]); 
    const [isCitySelected, setIsCitySelected] = useState(false);
    const [CountryCode, setCountryCode] = useState();
    const [isError, setIsError] = useState(false);
    const [weather, setWeather] = useState(null);
    const API_KEY = "1e93f2835c27cfd35f59654be7680ebb";

    // Define an asynchronous function 'fetchData'
    // Call the 'checkCountryCode' function passing the 'zipCode' as a parameter and assign the result to the 'result' variable.
    // If the 'result' is undefined or an empty string,
    // Set the 'isError' state variable to 'true'.
    // Set the 'cityCountryArray' state variable to 'result'.
    // If an error occurs, set the 'isError' state variable to 'true'.

    useEffect(() => {
        const fetchData = async () => { 
            try {
                const result = await checkCountryCode(zipCode);

                if (result == undefined || result == "") {
                    setIsError(true);
                } else {
                    setCityCountryArray(result);
                }
            } catch (error) {
                setIsError(true);
            }
        };
        // Call the 'fetchData' function.
        fetchData(); 
        
    // Run the effect whenever the 'zipCode' changes.
    }, [zipCode]); 

    // Define an asynchronous function 'fetchWeather' that takes 'zipCode' and 'countryCode' as parameters
    // Send a GET request to the OpenWeatherMap API to fetch weather data based on the 'zipCode' and 'countryCode'
    // Set the 'weather' state variable to the response data
    // If an error occurs, set the 'isError' state variable to 'true'.

    const fetchWeather = async (zipCode, countryCode) => { 
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${countryCode}&appid=${API_KEY}`
            );
            setWeather(response.data);
        } catch (error) {
            setIsError(true); 
        }
    };

    // Define a function 'HandleCityClick' that takes 'countryCode' as a parameter
    // Set the 'isCitySelected' state variable to 'true'
    // Call the 'fetchWeather' function with the 'zipCode' and 'countryCode' as parameters
    // Set the 'CountryCode' state variable to 'countryCode'

    const HandleCityClick = (countryCode) => { 
        setIsCitySelected(true); 
        fetchWeather(zipCode, countryCode); 
        setCountryCode(countryCode); 
    };

    return (
        <>
            {/* If 'isCitySelected' and 'isError' are both 'false', render the following JSX */}
            {!isCitySelected && !isError ? (
                <Styled.City>
                    <Styled.NavButtons>
                        <Styled.HomeButton>
                            <button onClick={handleHomeClick}>
                                <i className="fas fa-home"></i>
                            </button>
                        </Styled.HomeButton>
                    </Styled.NavButtons>

                    <Styled.PageLabel>Cities That Match Your Zip Code</Styled.PageLabel>
                    <Styled.SubLabel>Click on Your City to Check the Weather</Styled.SubLabel>
                    
                    <Styled.LocationInfo>
                        {cityCountryArray.map((city) => (
                        <button
                            type="submit"
                            key={`${city.cityName}-${city.countryCode}`}
                            onClick={() => HandleCityClick(city.countryCode)}
                        >
                            {`${city.cityName}, ${city.countryCode.toUpperCase()}`}
                        </button>
                        ))}
                    </Styled.LocationInfo>
                </Styled.City>

            // If 'isError' is 'true', render the Error404 component
            ) : isError && (
                <Error404 isNoWeather={zipCode && CountryCode} zipCode={zipCode}/>
            )}
            {/* If 'isCitySelected' and 'weather' exist, render the Weather component */}
            {isCitySelected && weather && (
                <Weather weather={weather} zipCode={zipCode}/>
            )}
        </>
    );
};
// Export The Component
export default CityComponent;