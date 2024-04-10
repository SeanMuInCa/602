import { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import styled from "styled-components";

import albumAPI from '../api';

const Div = styled.div.attrs({
    className: "ag-theme-apline"
})`
    margin: 0 auto;
    width: 65vw;
    height: 70vh;
`;
const updateAlbumHander = (e)=>{
    window.location.replace(`/music/update/${e.target.id}`);
}

const Update = styled.input.attrs((props)=>{
    return ({
        type: "button",
        className: "btn btn-primary",
        id: props.value,
        value: "Update",
        onClick: updateAlbumHander
    })
})`
    cursor: pointer;
    text-align: center;
    padding: 0 10px;
`;

const deleteAlbumHandler = (e)=>{
    if(window.confirm("Are you sure you want to delete?")){
        albumAPI.deleteAlbum(e.target.id).then(
            window.location.reload()
        ).catch((err)=>{console.log(err);});
    }
}

const Delete = styled.input.attrs((props)=>{
    return ({
        type: "button",
        className: "btn btn-danger",
        id: props.value,
        value: "Delete",
        onClick: deleteAlbumHandler
    })
})`
    cursor: pointer;
    text-align: center;
    padding: 0 10px;
`;

const getAlbumInfo = (params)=>{
    return params.data['_id']
};

const Albumlist = ()=>{
    const [albums, setAlbums] = useState();
    const calledAPI = useRef(false);

    const col = [
        {field: 'album'},
        {field: 'artist'},
        {field: 'year'},
        {field: 'artwork'},
        {
            cellRenderer: Update,
            width: 110,
            valueGetter: getAlbumInfo
        },
        {
            cellRenderer: Delete,
            width: 110,
            valueGetter: getAlbumInfo
        }
    ];

    useEffect(()=>{
        if(!calledAPI.current){
            calledAPI.current = true;
            albumAPI.getAlbumList().then((res)=>{
                setAlbums(res.data.data);
                console.log("api called");
            }).catch(console.error);
        }
    }, []);

    return (
        <Div>
            <AgGridReact
                rowData={albums}
                columnDefs={col} >
            </AgGridReact>
        </Div>
    );
}

export default Albumlist;