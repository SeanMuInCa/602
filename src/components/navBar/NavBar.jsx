import Logo from "./Logo";
import  Links  from "./Links";
import { styled } from "styled-components";

const Container = styled.div.attrs({
    className: "container"
})``;

const Nav = styled.nav.attrs({
    className: "navbar navbar-dark navbar-expand-lg"
})`
    background-color: #4506AF;
    padding: 20px;
`;

const NavBar = ()=>{
    return (
        <Container>
            <Nav>
                <Logo></Logo>
                <Links></Links>
            </Nav>
        </Container>
    )
}

export default NavBar;