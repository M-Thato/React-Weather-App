// Import all necessary dependecies, functions or styles
import React, { useState } from 'react';
import Cities from './Cities';
import * as Styled from './styles/HomeStyles'

const HomeComponent = () => {

    // Initialize a state variable called 'zipCode' and a function 'setZipCode' to update it
    // and initialize a state variable called 'showCityComponent' and a function 'setShowCityComponent' 
    // to update it. It is initially set to 'false'.

    const [zipCode, setZipCode] = useState();
    const [showCityComponent, setShowCityComponent] = useState(false);

    // Define a function 'handleSubmit' that takes an event object 'e' as a parameter
    // Prevent the default form submission behavior
    // Set the 'showCityComponent' state variable to 'true'

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowCityComponent(true);
    };

    return (    
        <>
            {/* If 'showCityComponent' is 'false', render the following JSX */}
            {!showCityComponent && (
                <>
                    <Styled.Home>
                        <Styled.AppLabel>SKYY WATCH <br/> Weather App</Styled.AppLabel>
                        <Styled.WeatherLogo src="/icons/perfect-day.svg" />
                        <Styled.PromptLabel>Enter the Zip Code of Your City</Styled.PromptLabel>

                        {/* Bind the 'zipCode' state variable to the input field's value
                            and update the 'zipCode' state variable with the input's value */}

                        <Styled.SearchBox onSubmit={handleSubmit}>
                            <input
                                placeholder="Zip Code"
                                value={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}
                            />
                            <button type="submit">Search</button>
                        </Styled.SearchBox>
                    </Styled.Home>
                </>
            )}
            {/* If 'showCityComponent' is 'true', render the 'Cities' component and pass the 'zipCode' value as a prop */}
            {showCityComponent && (<Cities zipCode={zipCode}/>)}
        </>
    );
};
// Export The Component
export default HomeComponent;    