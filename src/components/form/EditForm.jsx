import { styled } from "styled-components";
import UserInput from "./UserInput";
import { useState } from "react";
const Form = styled.div.attrs({
    className: 'form-group'
})`
    max-width: 1080px;
    margin: auto;
`;

const Title = styled.h1.attrs({
    className: 'h1'
})``;

const Button = styled.input.attrs({
    className: 'btn btn-primary',

})``;

const CancelBtn = styled.input.attrs({
    className: 'btn btn-danger',

})`
    margin-left: 5px
`;

const EditForm = ({formType, aName="", aArtist="", aYear="", aArt="", onSubmit})=>{
    const [albumName, setalbumName] = useState();
    const [artistName, setArtistName] = useState();
    const [albumYear, setAlbumYear] = useState();
    const [albumArt, setAlbumArt] = useState();
    return (
        <Form>
        <Title>{formType} Album</Title>
        <label htmlFor="">Album Name: </label>
        <UserInput setValue={setalbumName} initialValue={aName} />
        <label htmlFor="">Album Artist: </label>
        <UserInput setValue={setArtistName} initialValue={aArtist} />
        <label htmlFor="">Release Year: </label>
        <UserInput setValue={setAlbumYear} initialValue={aYear} />
        <label htmlFor="">Artwork: </label>
        <UserInput setValue={setAlbumArt} initialValue={aArt} />

        <Button type="button" value={`${formType} Album`} onClick={()=>{onSubmit(albumName,artistName,albumYear,albumArt)}}></Button>
        <CancelBtn type="button" value="Cancel" ></CancelBtn>
    </Form>
    )
}

export default EditForm;