import styled from "styled-components";

// Navigation Buttons
export const NavButtons = styled.form`
    display: flex;
    display: flex;
    justify-content: flex-end; /* Align buttons to the right */
    position: fixed;
    top: 35px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999; /* Ensure buttons are above other content */
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
export const Back = styled.div`
    & button{
        padding: 10px 13px;  
        margin-right: 20px;
    }
    & button:hover{
        opacity: 0.9;
    }
`;  