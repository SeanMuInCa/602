import { useState, useEffect,useRef } from "react";
import {AgGridReact} from 'ag-grid-react'
import albumAPI from "../api";
import styled from 'styled-components'


const Div = styled.div.attrs({
    className: 'ag-theme-apline'
})`
    margin: 0 auto;
    width: 60vw;
    height: 70vh;
`;

const AlbumList = ()=>{
    const [albums, setalbums] = useState([]);
    const calledAPI = useRef(false);

    const col = [
        {field: 'album'},
        {field: 'artist'},
        {field: 'year'},
        {field: 'artwork'}
    ]
    useEffect( ()=>{
        if(!calledAPI.current){
            calledAPI.current = true;
            initData();
        }
    }, []);

    const initData = async ()=>{
        const data = await albumAPI.getAlbumList();
        setalbums(data.data.data);
    }
    return (
        <Div>
            <h1>Album List</h1>

            <AgGridReact rowData={albums} columnDefs={col}>

            </AgGridReact>
        </Div>
    );
}
export default AlbumList