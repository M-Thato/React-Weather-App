// Import all necessary dependecies, functions or styles
import React, { useState } from 'react';
import Cities from './Cities';
import * as Styled from './styles/ErrorStyles'
import { handleHomeClick } from './functions/HandleClicks';

const Error404 = ({ isNoWeather, zipCode }) => {

    // Initialize a state variable called 'isBackClicked' and a function 'setIsBackClicked' to update it. It is initially set to 'false'.
    const [isBackClicked, setIsBackClicked] = useState(false);

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
    <div style={{ textAlign: 'center' }}>
        <h1>ERROR 404 - Page Not Found</h1>
        <p style={{ textAlign: 'center' }}>
            {/* If there is no weather to show or if a zip code is not found, diplay the relevant error messages */}
            {isNoWeather ? (
                <>
                    <Styled.NavButtons>
                        <Styled.Back><button onClick={handleBackClick}><i class='fas fa-arrow-left'></i></button></Styled.Back>
                        <Styled.HomeButton><button onClick={handleHomeClick}><i class='fas fa-home'></i></button></Styled.HomeButton>        
                    </Styled.NavButtons> 
                    Sorry! :( <br /><br /> 
                    There is no weather information for this city/town. <br /><br /> 
                    Please try a different city/town.            
                </>
            ) : (
                <>
                    <Styled.NavButtons>
                        <Styled.HomeButton><button onClick={handleHomeClick}><i class='fas fa-home'></i></button></Styled.HomeButton>        
                    </Styled.NavButtons> 
                    Sorry! :( <br /><br /> 
                    The requested zip code could not be found. <br /><br /> 
                    Please try a different code.
                </>
            )}
        </p>
    </div>
  );
};
// Export The Component
export default Error404;