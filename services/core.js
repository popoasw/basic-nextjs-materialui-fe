import axios from "axios";
import { handlePageParams } from "../utils/handleParams";
import { getStorage } from "../utils/storage";

const apiCore = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CORE_API_URL,
    timeout: 10000,
});

const getPTList = async () => {
    params = handlePageParams(params);
    return await apiCore.get(`/v1/pt`, 
    {
        headers: {
        //Authorization: `${getStorage("access_token")}`,
        },
        params,
    });
};
  
const getPTbyID = async (pID) => {
    return await apiCore.get(`/v1/pt/${pID}`, 
    {
        headers: {
        //Authorization: `${getStorage("access_token")}`,
        },
    });
};

export default {
    getPTList,
    getPTbyID,
};
  