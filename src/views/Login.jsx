
import albumAPI from "../api";
import { AuthForm } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";


const LinkElement = styled.a`
    display: block;
    text-align: center;
`;


const Login = ()=>{
    const nav = useNavigate();

    const loginUser = async (username, password) =>{
        const data = await albumAPI.login({username, password});
        console.log(data);
        console.log("logged");
        nav('/music/list');
    }
    return (
        <>
            <AuthForm formType="Login" onSubmit={loginUser}></AuthForm>
            <LinkElement as={Link} to='/register'>Click here to register</LinkElement>
        </>
    )
}
export default Login;