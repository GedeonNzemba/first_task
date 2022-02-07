import React, {useState} from "react";
import styled from "styled-components";

export const HomeButtonFancy:React.FC = () => {

    const [onMouseDown, setOnMouseDown] = useState(false)

    return (
        <Container >
            <button 
                className={`fancyButton ${onMouseDown ? ' longPress' : ''}`}
                onMouseDown={() => setOnMouseDown(prevState => prevState = true)}
                onMouseUp={() => setOnMouseDown(prevState => prevState = false)}
            >
                Hold Button
            </button>

            <span className="tooltip">Long Press Me !</span>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: fit-content;

    & .fancyButton {
        padding: .8rem 1.6rem;
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        border: unset;
        border-radius: 4px;
        color: #fff;
        background-color: #000;
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        text-transform: uppercase;
        height: fit-content;
        transition: .5s ease-out;
        @media (max-width: 599px) {
            width: 100%;
          }

        &.longPress {
            background-color: #f91100!important;
            color: #fff!important
        }

        &:hover {
            cursor: pointer;
            color: #000;
            background: #fff;
            transition: .5s ease-in;
        }
    }

    & span.tooltip {
        text-align: center;
        visibility: hidden;
        position: absolute;
        bottom: -4rem;
        left: -4rem;
        background-color: #000;
        color: #fff;
        font-size: 1rem;
        font-family: "Roboto",sans-serif;
        font-weight: 400;
        width: 100%;
        padding: 0.5rem 0.8rem;
        border-radius: 8px;

        @media (max-width: 599px) {
            left: 50%;
            transform: translate(-50%, -50%);
        }

       

    }

    &:hover .tooltip {
        visibility: visible!important;
        z-index: 1;
    }

`