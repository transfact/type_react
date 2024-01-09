import React from "react";

import styles from "../Common/csv/Header.module.css"
import Button from '@mui/material/Button';
import styled from "@emotion/styled";
import { useNavigate, NavigateFunction } from "react-router-dom";

const NewButton = styled(Button)`
    height: 100%;
    line-height: 55px;
    margin-right: 10px;
    font-weight: bold;
    color : black;
    &:hover{
        background-color: gray;
    }
    @media screen and (max-width: 500px) {
        font-size: small;
    }
`


class Header extends React.Component<{navigate : NavigateFunction}> {
    constructor(props: any) {
        super(props);
        this.LinkClick = this.LinkClick.bind(this);
    }

    LinkClick = (e: React.MouseEvent<HTMLButtonElement>, url : string) => {
        this.props.navigate(url);
    }
    


    render(): React.ReactNode {
        return (
            <div className={styles.header_container}>
                <NewButton  variant="text" onClick={(e)=>(this.LinkClick(e,"/"))}>HOME</NewButton>
                <div style={{height : "100%", paddingRight : "30px"}}>
                    <NewButton  variant="text" onClick={(e)=>(this.LinkClick(e,"/salesGraphMonth"))}>Graph1</NewButton>
                    <NewButton  variant="text"  onClick={(e)=>(this.LinkClick(e,"/salesProductMonth"))}>Graph2</NewButton>
                </div>
            </div>
        )

    }
}
function withNavigation(Component: any): (props: any) => JSX.Element {
    return props => <Component {...props} navigate={useNavigate()} />;
  }
  
export default withNavigation(Header);