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
              <p style={{fontSize : "15px", color : "gray", width :"400px"}}>
                Graphify는 직관적이고 사용자 친화적인 인터페이스를 통해 간편하게 그래프를 그릴 수 있는 웹사이트입니다. <br/>데이터 시각화를 손쉽게 구현하고 확인하세요.
              </p>
            </div>
            <div style={{margin : "5%"}}>
              <img
                className="mx-auto aspect-[5/3] overflow-hidden rounded-xl object-cover"
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
