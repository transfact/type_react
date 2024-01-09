import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
  & {
    display: flex;
    position: relative;
    padding: 5%;
    justify-content: space-between;
  }
  @media screen and (max-width: 600px) {
   
      flex-direction: column;
 
  }
`

class App extends React.Component{

  render(){
    return (  

    <main style={{display : 'flex', position : "relative"}}>
      <section style={{width : "100%"}}>
          <FlexDiv  >
            <div style={{margin : "5%"}}>
              <h1 style={{fontSize : "50px"}}>
                Draw your Graphs<br/>
                Effortlessly<br/> 
              </h1>
              <p style={{fontSize : "15px", color : "gray", maxWidth :"400px", minWidth : "200px"}}>
                Graphify는 테스트로 그래프를 그릴 수 있는 웹사이트입니다. 데이터 시각화를 손쉽게 구현하고 확인하세요.
              </p>
            </div>
            <div style={{margin : "5%"}}>
              <img
                height="300px"
                src="/graph.jpg"
                width="500px"
              />
            </div>
          </FlexDiv>
      </section>
    </main>
)
  }
  


}



export default App;
