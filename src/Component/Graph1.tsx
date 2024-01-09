import React, { Component, RefObject } from 'react';
import myPromise from '../Common/data/MyCustomData';
import Chart from "react-apexcharts";
import styled from 'styled-components';
import { Radio, FormControl, FormControlLabel, RadioGroup as MuiRadioGroup } from '@mui/material';

type MyClassComponentProps = {}

interface MyProps  {
  // using `interface` is also ok
  message: string;
};
interface MonthSale {
  month : string,
  values : number[]
}
interface MyState  {
  count: number; 
  width : number,
  title : string,
  categories : String[],
  salesData : MonthSale[],
};

interface YearSale {
  title : string,
  categories : string[],
  salesData : MonthSale[],
}

const FlexDiv = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

class Graph1 extends React.Component<MyClassComponentProps,MyState> {

  private customRef : RefObject<HTMLDivElement> =React.createRef();

  componentDidUpdate():void{


  
    console.log("최초에는 불리지 않지만, 갱신될떄.")
  }
  componentWillUnmount(): void {
    window.removeEventListener('resize', this.updateWindowWidth);
    console.log("마운트 해제,")
  }

  constructor(props: MyClassComponentProps) {
    super(props);
    this.state = {
      count: 0,
      title : "default",
      width : window.innerWidth,
      categories : ["default"],
      salesData :[{month : "none",values : [1,2,3]} ]
    };
    this.setCounter = this.setCounter.bind(this);
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
  }

  componentDidMount(): void {
    const fetchData = async () : Promise<void>=> {
      const data = await myPromise as YearSale;
      this.setState(prev=>{
        return {
          count : prev.count,
          width : window.innerWidth,
          title : data.title,
          categories : data.categories,
          salesData : data.salesData
        }
      })
    }
    fetchData()
    this.updateWindowWidth(); // 초기값 설정
    window.addEventListener('resize', this.updateWindowWidth);
  }

  setCounter(params: number) {
    this.setState((prevState) => ({count : prevState.count + params}))
    
  }
  
  updateWindowWidth = () => {
    this.setState({ width: window.innerWidth });
  };
   
  render() {
    const idx = this.state.count
    const categories = this.state.salesData.map(data=>{
      return data.month
    })
    const series_data = this.state.salesData.map(data=>{
      return data.values[idx]
    })

    const options = {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: categories
      }
    }
    const series = [
      {
        name: this.state.title,
        data: series_data
      }
    ]
    const changeCategory = (idx : number) =>{
      this.setState(prev =>{ 
        console.log(prev)
        return {...prev, count: idx}})
    }
    const changeCategory2 = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState(prev => {
        return {...prev, count: parseInt(event.target.value, 10) }});
    };
    return (
      <FlexDiv>
        <div style={{flex : 1,paddingLeft : "20px" }}>
          <FormControl component="fieldset">
              <MuiRadioGroup
                row = {window.innerWidth  <=600 ? true :false}
                aria-label="categories"
                name="categories"
                value={idx.toString()}
                onChange={(e) =>{
                  changeCategory2(e)
                }}
              >
                {this.state.categories.map((category, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={idx.toString()}
                    control={<Radio />}
                    label={category}
                  />
                ))}
              </MuiRadioGroup>
            </FormControl>
          {/* <ul>
          {this.state.categories.map((category,idx)=>{
            return <Li onClick={()=>changeCategory(idx)}>{category}</Li>
          })}
          </ul> */}

        </div>
        <div style={{ flex : 3,padding: "5%"}}>
          <h2>{this.state.categories[idx]}</h2>
          <div style={{margin : "auto",width : "100%"}}>
            <Chart   
              options={options}
              series={series}
              type="line"
              width="70%"
            ></Chart>
          </div>
          <div>
            총 수익 : {series_data.reduce((acc,prev) => acc+prev)}
          </div>
        </div>
      </FlexDiv>
    );
  }
}
export default Graph1;