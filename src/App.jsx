import React, { useState } from 'react';
import styled from 'styled-components';
function App(props) {

  const [light , setLight ] = useState(false);

  return (
    <Main>
      <Container>
        <Title>Bulb</Title>
        <img src="https://www.starrynight.co.in/cdn/shop/products/segula_art_line_globe_uit_0158-2017_web_1200x.jpg?v=1601366950" alt="" />
        {
          light && <Light/>
        }
        <Switch onClick={()=> setLight(!light)}>{light? 'OFF' : 'ON'}</Switch>
      </Container>
    </Main>
  );
}

const Title = styled.h1`
    font-size : 1.5rem;
    color: gray
`
const Main = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width:100vw;
    height:100vh;
    gap:20px;
    
`
const Container = styled.div`
    dislay : flex;
    justify-content : center;
    flex-direction : column;
    align-items : center;
    text-align:center;
    gap:50px;
    border: 2px solid #333;
    padding:20px;
    position:relative;
`
const Light = styled.div`
  position: absolute;
   height: 70px;
    width: 70px;
    border-radius: 50%;
    top: 163px;
    left: 159px;
    background: radial-gradient(circle at 30% 30%, rgb(252, 252, 130 ,0.8), rgb(251, 251, 190));
    box-shadow: 0 0 50px rgba(295, 235, 6, 0.8);
`;
const Switch = styled.button`
  padding:10px 10px;
  cursor:pointer;
  width:100%

`
export default App;