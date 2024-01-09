import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";


const _Hr = styled.hr`
    height: 0.5px;
    background-color: grey;
`
class SalesStat extends React.Component{

    render(): React.ReactNode {
        return (
            <div>
                <Header></Header>
                <_Hr/>
                <Outlet/>
            </div>
        )
    }

}

export default SalesStat;