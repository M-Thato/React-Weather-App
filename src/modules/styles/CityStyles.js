import styled from "styled-components";

// City Page
export const City = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    box-shadow: 0 3px 6px 0 #555;
    padding: 20px 10px;
    border-radius: 4px;
    width: 380px;
    font-family: Montserrat;
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.2)
    );
`;

// Navigation Button
export const NavButtons = styled.div`
    display: flex;
    display: flex;
    justify-content: flex-end; /* Align buttons to the right */
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

// Page Headers
export const PageLabel = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin: 0.7em auto 0 auto;
`;
export const SubLabel = styled.span`
    font-size: 13px;
    font-weight: 600;
    font-style: italic;
    margin: 10px auto;
    
`;

// Select Location Element
export const LocationInfo = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: bold;
    margin: 2em auto 0 auto;
    height: 250px; 
    overflow-y: scroll;
    padding: 0 2em;
    

    & button{
        cursor: pointer;
        margin-bottom: 2em;
        text-align: center;
        font-size: 13px;
        font-weight: 500;
        background: none;
        border: none;
        font-family: Montserrat;
    }
    & button:hover{
        color: gray;
    }
`;