import React, { Component, RefObject } from 'react';
import myPromise from '../Common/data/MyCustomData';
import Filter from './Fliter';

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
  count: number; // like this
  title : string,
  categories : string[],
  salesData : MonthSale[],
};

interface YearSale {
  title : string,
  categories : string[],
  salesData : MonthSale[],
}

class Graph2 extends React.Component<MyClassComponentProps,MyState> {

  private customRef : RefObject<HTMLDivElement> =React.createRef();

  componentDidUpdate():void{

  
    console.log("최초에는 불리지 않지만, 갱신될떄.")
  }
  componentWillUnmount(): void {
    console.log("마운트 해제,")
  }

  constructor(props: MyClassComponentProps) {
    super(props);
    this.state = {
      count: 0,
      title : "default",
      categories : ["default"],
      salesData :[{month : "none",values : [1,2,3]} ]
    };
    this.setCounter = this.setCounter.bind(this);

  }

  componentDidMount(): void {
    const fetchData = async () : Promise<void>=> {
      const data = await myPromise as YearSale;
      this.setState(prev=>{
        return {
          count : prev.count,
          title : data.title,
          categories : data.categories,
          salesData : data.salesData
        }
      })
    }
    fetchData()
    
  }

  setCounter(params: number) {
    this.setState((prevState) => ({count : prevState.count + params}))
    
  }
  
   
  render() {
    console.log(this.state);
    return (

        <Filter></Filter>
    );
  }
}
export default Graph2;