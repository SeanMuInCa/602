import { useRef,useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { EditForm } from "../components";
import albumAPI from '../api'
const AlbumUpdate = ()=>{
    const {id} = useParams();

    const calledAPI = useRef(false);

    const navigate = useNavigate();

    const [oldAlbum, setOldAlbum] = useState({});

    const updateAlbumHandler = async(album,artist,year,artwork)=>{
        const body = {album,artist,year,artwork};
        albumAPI.updateAlbum(id, body).then(()=>{
            alert("updated success")
            navigate('/music/list');
        }).catch((err)=>{
            console.log(err);
        });
    }

    useEffect(() => {
        if(!calledAPI.current){
            albumAPI.getAlbumById(id).then((res)=>{
                setOldAlbum(res.data.data);
            }).catch((err)=>{
                console.log(err);
            })
        }
    }, []);

    return (
        <EditForm 
            formType="Update"
            aName={oldAlbum.album}
            aArtist={oldAlbum.artist}
            aYear={oldAlbum.year}
            aArt={oldAlbum.artwork}
            onSubmit={updateAlbumHandler}></EditForm>
    )
}
export default AlbumUpdate;