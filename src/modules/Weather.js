// Import all necessary dependecies, functions or styles
import React, { useState } from 'react';
import Cities from './Cities';
import * as Styled from './styles/WeatherStyles'

const { handleHomeClick, HandleBackClick } = require('./functions/HandleClicks');

// Define a function/component WeatherInfo.
// This function will display certain weather details of a certain area.

const WeatherInfo = (props) => {
    const { name, value } = props;
    return (
        <Styled.InfoContainer>
            <Styled.InfoIcon src={Styled.WeatherInfoIcons[name]}/>
            <Styled.InfoLabel>
                {value}
                <span>{name}</span>
            </Styled.InfoLabel>
        </Styled.InfoContainer>
    );
};

// Define a function/component 'WeatherComponent' that will display all the retrieved weather data.
const WeatherComponent = ({ weather, zipCode }) => {

    // Initialize a variable called 'currentWeather' and fetch the weather data from the City component as a prop.
    // Initialize a variable called 'isDay' to check if the selected City is in day time or night time.
    // Initialize a state variable called 'isBackClicked' and a function 'setIsBackClicked' to update it.

    const currentWeather = weather.list[1];
    const isDay = currentWeather?.weather[0].icon?.includes('d');
    const [isBackClicked, setIsBackClicked] = useState(false);

    // Get the 4-day weather forecast for the selected city at 12 PM (excluding today).
    const futureWeatherList = weather.list.filter(item => {
        const date = new Date(item.dt_txt);
        return date.getHours() === 12;
    }).slice(1);

    // Initialize a variable called 'currentDate' to get the current day from the weather data.
    // Define a function 'filteredWeather' to get the 3-hour weather forecast for the today day only.

    const currentDate = new Date().toISOString().slice(0, 10);
    const filteredWeather = weather.list.filter(
        (item) => item.dt_txt.slice(0, 10) === currentDate
    ).slice(1);

    // Get the time from the weather data to display the sunrise and sunset time in South African Time.
    const getTime = (timeStamp) => {
        const date = new Date(timeStamp * 1000);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    // Initialize a state variable 'unit' and a function 'setUnit' to update it. The default/initial value is 'metric.
    // This variable will determine with temperature units are being used currently.
    // Define a function 'handleUnitChange' that will change the value of the unit variable.
    // Define a function 'getTemperature' that will get the temperature of the selected city depending on the units selected.

    const [unit, setUnit] = useState('metric');

    const handleUnitChange = (event) => {
        setUnit(event.target.value);
    };

    const getTemperature = (temp) => {
        if (unit === 'imperial') {
            return `${Math.floor(Math.floor(temp - 273.15)* 9 / 5 + 33)}°F`;
        } else {
            return `${Math.floor(temp - 273.15)}°C`;
        }
    };

    // Define a function 'handleBackClick' to display the City component when Back is clicked.
    // When the function is called, it will set the variable 'isBackClicked' to true.

    const handleBackClick = () => {
        setIsBackClicked(true);
    };

    // If the state variable 'isBackClicked' is set to true, the City component will be displayed
    if (isBackClicked) {
        return (
            <Cities zipCode={zipCode}/>
        );
    }

    return (
        <Styled.Weather>
            {/* Back and home buttons */}
            <Styled.NavButtons>
                <Styled.BackButton><button onClick={handleBackClick}><i class='fas fa-arrow-left'></i></button></Styled.BackButton>
                <Styled.HomeButton><button onClick={handleHomeClick}><i class='fas fa-home'></i></button></Styled.HomeButton>        
            </Styled.NavButtons> 

            {/* City Location */}
            <Styled.Location>{`${weather?.city?.name}, ${weather?.city?.country}`}</Styled.Location>

            {/* Basic Weather Conditions */}
            <Styled.WeatherCondition>
                <Styled.Condition>
                    <Styled.Temp>
                        <span>{getTemperature(currentWeather?.main?.temp)}</span>
                        {` | ${currentWeather?.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`}
                    </Styled.Temp>                
                    <p>Feels Like {getTemperature(currentWeather?.main?.feels_like)}</p>
                </Styled.Condition>
                <Styled.WeatherIcon src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`} />
            </Styled.WeatherCondition>

            {/* Radio Buttons To Choose Preffered Units (Fahrenheit/Celsius) */}
            <Styled.TempUnits>
                <Styled.Metric>
                    <input
                        type='radio'
                        id='metric'
                        name='radioGroup'
                        value='metric'
                        checked={unit === 'metric'}
                        onChange={handleUnitChange}
                    />
                    <label htmlFor='metric'>Celsius</label>
                </Styled.Metric>
                <Styled.Imperial>
                    <input
                        type='radio'
                        id='imperial'
                        name='radioGroup'
                        value='imperial'
                        checked={unit === 'imperial'}
                        onChange={handleUnitChange}
                    />
                    <label htmlFor='imperial'>Fahrenheit</label>
                </Styled.Imperial>        
            </Styled.TempUnits>

            {/* Detailed Weather Conditions (Wind, Humidity etc.)  */}
            <Styled.WeatherInfoContainer>
                <WeatherInfo 
                    name={isDay ? "sunset" : "sunrise"} 
                    value={getTime(weather?.city[isDay ? "sunset" : "sunrise"])}/>
                <WeatherInfo name="humidity" value={currentWeather?.main?.humidity}/>
                <WeatherInfo name="wind" value={currentWeather?.wind?.speed}/>
                <WeatherInfo name="pressure" value={currentWeather?.main?.pressure}/>
            </Styled.WeatherInfoContainer> 

            {/* 3-hour Forecast For Today (only shows available data from the time the data is retrieved) 
                NOTE: This element will not show if there is no more forecast data for the day (Stops after 9 PM)*/}
            {filteredWeather.length > 0 && (
                <>
                    <div style={{width: '80%'}}><hr/></div>
                    <Styled.LaterTag>Later Today:</Styled.LaterTag>
                    
                    <Styled.LaterToday>
                        {filteredWeather.map((item) => (
                            <Styled.FutureWeatherItem>
                                <Styled.FutureWeather key={item.dt}>
                                    <Styled.FutureDate>{item.dt_txt.slice(11, 16)}</Styled.FutureDate>
                                    <Styled.FutureIcon src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                                    <Styled.FutureTemperature>{getTemperature(item.main.temp)}</Styled.FutureTemperature>
                                </Styled.FutureWeather>
                            </Styled.FutureWeatherItem>
                        ))}
                    </Styled.LaterToday>

                    <div style={{width: '80%'}}><hr/></div>
                </>
            )}

            {/* 4-day Weather Forecast Basic Details */}
            <Styled.FutureWeatherContainer>
                    <Styled.FutureWeatherList>
                        {futureWeatherList.map((futureWeather, index) => (
                            <Styled.FutureWeatherItem>
                                <Styled.FutureWeather key={index}>
                                    <Styled.FutureDate>{new Date(futureWeather.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}</Styled.FutureDate>
                                    <Styled.FutureIcon src={`https://openweathermap.org/img/wn/${futureWeather.weather[0].icon}@2x.png`} />
                                    <Styled.FutureCondition>{futureWeather.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</Styled.FutureCondition>
                                    <Styled.FutureTemperature>{getTemperature(futureWeather.main.temp)}</Styled.FutureTemperature>
                                    <Styled.FutureFeelsLike>Feels Like {getTemperature(futureWeather.main.feels_like)}</Styled.FutureFeelsLike>
                                </Styled.FutureWeather>
                            </Styled.FutureWeatherItem>
                        ))}
                    </Styled.FutureWeatherList>
            </Styled.FutureWeatherContainer>
        </Styled.Weather> 
    );
};

export default WeatherComponent;