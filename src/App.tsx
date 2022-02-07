import React, { useReducer, useState, createContext, memo} from "react";
import styled from "styled-components";
import Header from "./components/Header";
import { HomeButtonFancy } from "./components/Buttons/Buttons";
import "./App.css";

// ***** THE INPUT STATE OBJECT TO BE ATTACHED TO THE CONTEXT VALUE ****
interface State {
  bannerimage: string;
  yourImage: string;
  name: string;
  bannerTitle: string
}

// *** THE TYPE FOR EACH INPUT ELEMENT THAT THE REDUCER WILL CARRY ***
type stateType = {
  bannerimage: string;
  yourImage: string;
  name: string;
  bannerTitle: string;
};

// *** THE ACTIONS TYPE THAT WILL SAVE THE USER DATA AFTER TYPING ***
type actionType = {
  type: "SET_BANNER_IMAGE" | "SET_YOUR_IMAGE" | "SET_NAME" | "SET_BANNER_TITLE";
  payload: string;
};

// *** THE INITIAL VALUES OF THE FORM ELEMENTS ***
const initialState: stateType = {
  bannerimage: "",
  yourImage: "",
  name: "",
  bannerTitle: "",
};

function reducer(currentState: stateType, action: actionType) {
  if (action.type === "SET_BANNER_IMAGE") {
    return { ...currentState, bannerimage: action.payload };
    // console.log(newState);
  }

  if (action.type === "SET_YOUR_IMAGE") {
    return { ...currentState, yourImage: action.payload };
  }

  if (action.type === "SET_NAME") {
    return { ...currentState, name: action.payload };
  }

  if (action.type === "SET_BANNER_TITLE") {
    return { ...currentState, bannerTitle: action.payload };
  }

  return currentState;
}

export const UserContext = createContext<State | null>(null);

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChangeDetails = () => {
    setButtonClicked((prevState) => (prevState = true));
  };

  return (
    <UserContext.Provider value={state}>
      <Home>
        {/******  HEADER *******/}
        <Header />

        {/****** MAIN ********/}
        <Main>
          <Wrap>
            {buttonClicked ? (
              <FormWrapper onSubmit={(event:React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                setButtonClicked(prevState => prevState = false)
              }}>
                <Label>Banner Image</Label>
                <Input
                  type="text"
                  required
                  placeholder="Banner Image url"
                  name="bannerImage"
                  onChange={(e) => dispatch({ type: 'SET_BANNER_IMAGE', payload: e.target.value })}
                />
                <Label>Your Image</Label>
                <Input
                  type="text"
                  required
                  placeholder="Your Image url"
                  name="yourImage"
                  onChange={(e) => dispatch({ type: 'SET_YOUR_IMAGE', payload: e.target.value })}
                />
                <Label>Your Name</Label>
                <Input
                  type="text"
                  required
                  placeholder="Your Name"
                  name="yourName"
                  onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                />
                <Label>Banner Title</Label>
                <Input
                  type="text"
                  required
                  placeholder="Your Banner Title"
                  name="bannerTitle"
                  onChange={(e) => dispatch({ type: 'SET_BANNER_TITLE', payload: e.target.value })}
                />

                <InputBtn
                  type="submit"
                  value="Done"
                />
              </FormWrapper>
            ) : (
              <HomeBtn onClick={handleChangeDetails}>Change</HomeBtn>
            )}
            <HomeButtonFancy />
          </Wrap>
        </Main>
    </Home>
    </UserContext.Provider>
  );
};

export default memo(App);

const Home = styled.div`
  padding: 0;
  margin: 0;
  background-color: #f2f2f2;
`;

const Main = styled.main`
  padding: 3rem;
  @media (max-width: 599px) {
    padding: 2rem;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 599px) {
    flex-direction: column;
    justify-content: center;
  }
`;
// CHILD
const HomeBtn = styled.button`
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  border: unset;
  border-radius: 4px;
  color: #fff;
  background-color: #000;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  text-transform: uppercase;
  transition: 0.5s ease-out;

  @media (max-width: 599px) {
    width: 100%;
    margin-bottom: 3rem;
  }

  &:hover {
    cursor: pointer;
    color: #000;
    background: #fff;
    transition: 0.5s ease-in;
  }
`;

const FormWrapper = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  padding: 2rem;
  border-radius: 1.8rem;

  @media (max-width: 599px) {
    width: 100%;
    max-width: 90%;
    margin: 0 auto 3rem auto;
    padding: 1.3rem;
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-family: "Roboto", sans-serif;
`;

const Input = styled.input`
  margin-bottom: 1rem;
`;

const InputBtn = styled.input`
    padding: .8rem 1.6rem;
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
    background: #000;
    border: unset;
    color: #fff;required 
    border-radius: 4px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    transition: .5s ease-out;

    &:hover {
        cursor: pointer;
        color: #000;
        background: #c5c5c5;
        transition: .5s ease-in;
    }
    `;