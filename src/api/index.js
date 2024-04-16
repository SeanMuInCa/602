import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
    'Content-Type': 'application/json',
});
const GET_ALL_ALBUM = '/music';
let header = {};

const setHeader = () => {
    header = {
        headers:{
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    }
}


const getAlbumList = async () => api.get(GET_ALL_ALBUM, header);
const getAlbumById = async (id) => api.get(GET_ALL_ALBUM + `/${id}`, header);
const insertAlbum = async (data) => api.post(GET_ALL_ALBUM, data);

const updateAlbum = async (id,data) => api.put(GET_ALL_ALBUM + `/${id}`, data, header);
const deleteAlbum = async (id) => api.delete(GET_ALL_ALBUM + `/${id}`, header);

const register = async (body) => api.post('/register', body, header);
const login = async(body) => {
    const res = await api.post('/login',body, header);
    sessionStorage.setItem('token', res.data.token);
    setHeader();
    return res;
}



const albumAPI = {
    getAlbumList,getAlbumById,insertAlbum,updateAlbum,deleteAlbum,register,login
}

export default albumAPI;