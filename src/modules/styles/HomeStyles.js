import styled from "styled-components";

// Home Page
export const Home = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 3px 6px 0 #555;
    padding: 20px 10px;
    border-radius: 4px;
    width: 380px;
    font-family: Montserrat;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.3)
    );
`;

// Page Header
export const AppLabel = styled.span`
  font-size: 26px;
  font-weight: bold;
  font-family: 'Bruno Ace SC', 'Sans Serif';
`;

// Page Logo
export const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`;

// Zip code prompt
export const PromptLabel = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin: 10px auto;
`;

// Search Box
export const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: solid 1px black;
    border-radius: 2px;
    font-size: 18px;
    font-weight: bold;
    margin: 20px auto;

    & input{
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
        background: transparent;
    }

    & button{
        padding: 10px;
        font-size: 14px;
        color: white;
        background: black;
        border: none;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }
`;