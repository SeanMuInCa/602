import { useNavigate } from "react-router";
import albumAPI from "../api";
import { AuthForm } from "../components";


const Register = ()=>{
    const nav = useNavigate();

    const registerUser = async (username, password) =>{
        const data = await albumAPI.register({username, password});
        console.log(data);
        console.log("Account created");
        nav('/');
    }
    return (
        <AuthForm formType="Register" onSubmit={registerUser}></AuthForm>
    )
}
export default Register;