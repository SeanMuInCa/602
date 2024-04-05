import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LinkStyle = styled.a`
    color: white;
    text-decoration: none;
`;

const List = styled.div.attrs({
    className: 'navbar-nav me-auto'
})``;
const Links = ()=>{
    return (
        <>
            <LinkStyle className="navbar-brand" as={Link} to="/">CWEB602 MERN Application</LinkStyle>
            <List>
            <LinkStyle className="nav-link" as={Link} to="/music/list">List Albums</LinkStyle>
            <LinkStyle className="nav-link" as={Link} to="/music/create">Create Album</LinkStyle>
            </List>
            
        </>
    )
}

export default Links;
