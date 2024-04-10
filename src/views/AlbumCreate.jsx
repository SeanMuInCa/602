import { EditForm } from "../components";
import albumAPI from '../api/index'
import { useNavigate } from "react-router";

const AlbumCreate = ()=>{
    const navigate = useNavigate();
    const handleAlbumCreate = (album, artist, year, artwork)=>{
        const data = {album, artist, year, artwork};
        console.log(data);
        albumAPI.insertAlbum(data).then(()=>{
            console.log(data);
            navigate('/music/list')
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <EditForm formType="Create" onSubmit={handleAlbumCreate}></EditForm>
    )
}

export default AlbumCreate;