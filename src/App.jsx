import React, {useState} from 'react';
import styled from 'styled-components'

const theme = {
  green: {
    default: '#21D19F',
    hover: '#45B69C'
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width:100%;
`

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 4px lightgray;
  color: white;
  cursor: pointer;
  display: inline;
  font-size: 2em;
  margin: 0px 50px;
  margin-top: 50vh;
  outline: 0;
  /*padding: 15px;*/
  text-transform: uppercase;
  transition: ease background-color 300ms;
  width: 20%;
  &:hover {
      background-color: ${props => theme[props.theme].hover};
    }
  }
`
Button.defaultProps ={
  theme: 'green'
}

const ButtonToggle = styled(Button)`
  opacity: .5;
  ${({active}) => active&& `
  opacity: 1;
  `}
`;

const types = ['BTN1', 'BTN2', 'BTN3'];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return <>
    {types.map(type=>(
      <ButtonToggle
        active={active === type}
        onClick={() => setActive(type)}>
          {type}
      </ButtonToggle>
    ))}
  </>
}

export default function App() {

  return (
    <>
      <Container>
        <ToggleGroup/>
      </Container>
    </>
  )
}