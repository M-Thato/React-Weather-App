import styled from "styled-components";

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg"
};

// Weather Page
export const Weather = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 3px 6px 0 #555;
    padding: 20px 10px;
    border-radius: 4px;
    width: 700px;
    font-family: Montserrat;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.2)
    );
`;

// Navigation Buttons
export const NavButtons = styled.form`
    display: flex;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;

    & button{
        font-size: 20px;
        border: none;
        background: white;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0.8;
    }
`;
export const HomeButton = styled.div`
  & button{
      padding: 10px;
    }
  & button:hover{
    opacity: 0.9;
  }
`;
export const BackButton = styled.div`
  & button{
    padding: 10px 13px;  
    margin-right: 20px;
  }
  & button:hover{
    opacity: 0.9;
  }
`;

// Weather Location Details
export const Location = styled.span`
    font-size: 28px;
    font-weight: bold;
    text-align: center;
`;

// Weather Conditions
export const WeatherCondition = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 10px auto 0 auto;
`;
export const Condition = styled.span`
    position: relative;
    top: 0.42em;
    margin: 10px auto;
    font-size: 14px;

    & span{
        font-size: 28px;
    }
`;
export const Temp = styled.div``;
export const WeatherIcon = styled.img`
    width: 100px;
    height: 100px;
    margin: 5px auto;
`;

// Weather Temperature Units
export const TempUnits = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
    justify-content: space-evenly;
    margin: 0 0 8px 0;
    font-size: 14px;
    font-weight: bold;

    & input{
        cursor: pointer;
    }
    & label{
        font-size: 13px;
        cursor: pointer;
    }
`;
export const Metric = styled.div`
    display: flex;
    align-items: center;
`;
export const Imperial = styled.div`
    display: flex;
    align-items: center;
`;

// Weather Information
export const WeatherInfoContainer = styled.div`
    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
`;
export const InfoContainer = styled.div`
    display: flex;
    margin: 5px 10px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;
export const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
`;
export const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 15px;

    & span {
        font-size: 12px;
        text-transform: capitalize;
    }
`;

// Weather Details for Later Today
export const LaterToday = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
`;
export const LaterTag = styled.div`
    margin-bottom: 1em;
    font-size: 13px;
    font-weight: bold;
`;

// Future Weather Details
export const FutureWeather = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
`;
export const FutureIcon = styled.img`
    height: 50px;
    width: 50px;
`;
export const FutureDate = styled.div``;
export const FutureCondition = styled.div`padding-bottom: 4px;`;
export const FutureTemperature = styled.div`padding-bottom: 4px;`;
export const FutureFeelsLike = styled.div``;
export const FutureWeatherContainer = styled.div`width: 100%;`;
export const FutureWeatherItem = styled.div``;
export const FutureWeatherList = styled.div`
    margin-top: 1em;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;