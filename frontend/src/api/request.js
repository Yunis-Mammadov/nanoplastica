import axios from "axios"
import { BASE_URL } from "./baseURL";


export const getAllNavbarLinks = async () => {
    let navbarLinks;
    await axios.get(`${BASE_URL}/api/navbarlinks`)
    .then((res) => {
        navbarLinks = res.data
    })
    return navbarLinks
}