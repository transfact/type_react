
import React, { useState, useEffect } from "react";
const { tableau } = window;
declare global {
    interface Window {
      tableau: any; //
    }
  }
interface VizWithMethods {
    getWorkbook(): any; // getWorkbook의 반환 타입을 정확하게 알지 못할 때, any로 선언
    getActiveSheet(): any; // getActiveSheet의 반환 타입을 정확하게 알지 못할 때, any로 선언
  }
  
function Filter() {
    const [url] = useState("https://public.tableau.com/views/RegionalSampleWorkbook/College");
    const [viz, setViz] = useState(null);
    const [option, setOption] = useState("");
    const [optionList] = useState([
      {
        value: "",
        display: "All"
      },
      {
        value: "2013",
        display: "2013"
      },
      {
        value: "2014",
        display: "2014"
      }
    ]);
  
    const initViz = () => {
      console.log(optionList);
      let containerDiv = document.getElementById("container");
      const options = {
        "Academic Year": option
      };
      setViz(new tableau.Viz(containerDiv, url, options));
    };
  
    useEffect(initViz, []);
  

  
    return (
      <div>
        Tableu Graph
        <div style={setVizStyle} id="container" />
      </div>
    );
  }
  
  const setVizStyle = {
    margin: "25px",
    width: "70%",
    height: "70%"
  };
  
  
  
  export default Filter;