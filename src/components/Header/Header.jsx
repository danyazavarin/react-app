import logo from '/vite.svg'
import {useEffect, useState} from "react";
// import './Header.css'
import styled from "styled-components";

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #cccccc;
    background: #fafafa;
`

export default function Header() {
    const [now, setNow] = useState(new Date());
    useEffect(() => {
        setInterval(() => setNow(new Date()), 1000);
    }, [now]);

    return (
        <HeaderContainer>
            <img src={logo} alt="logo"/>
            <h3 style={{marginBottom: '0'}}>My react site</h3>
            <span>Time is: {now.toLocaleTimeString()}</span>
        </HeaderContainer>
    )
}