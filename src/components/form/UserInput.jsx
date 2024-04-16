import { styled } from "styled-components";


const Input = styled.input.attrs({
    className: "form-control"
})`
    margin: 5px 0;
`;
const UserInput = ({setValue, initialValue,type='text'})=>{
    return (
        <Input type={type} placeholder={initialValue} onChange={(e)=>{ setValue(e.target.value)}}></Input>
    )
}

export default UserInput;