import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001/api'
});

const GET_ALL_ALBUM = '/music';


const getAlbumList = () => api.get(GET_ALL_ALBUM);
const getAlbumById = (id) => api.get(GET_ALL_ALBUM + `/${id}`);
const insertAlbum = (data) => api.post(GET_ALL_ALBUM, data);

const updateAlbum = (id,data) => api.put(GET_ALL_ALBUM + `/${id}`, data);
const deleteAlbum = (id) => api.delete(GET_ALL_ALBUM + `/${id}`);

const albumAPI = {
    getAlbumList,getAlbumById,insertAlbum,updateAlbum,deleteAlbum
}

export default albumAPI;