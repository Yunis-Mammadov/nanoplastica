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

export const getAllSocialMediaLinks = async () => {
    let socialMediaLinks;
    await axios.get(`${BASE_URL}/api/socialMediaLinks`)
        .then((res) => {
            socialMediaLinks = res.data
        })
    return socialMediaLinks
}

export const getAllContact = async () => {
    let contact;
    await axios.get(`${BASE_URL}/api/contact`)
        .then((res) => {
            contact = res.data
        })
    return contact
}


export const getAllKeratin = async () => {
    let keratin;
    await axios.get(`${BASE_URL}/api/keratin`)
        .then((res) => {
            keratin = res.data
        })
    return keratin
}

export const getKeratinById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/keratin/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching keratin by id:", error);
        return null; 
    }
}


export const getAllSacQulluq = async () => {
    let sacqulluq;
    await axios.get(`${BASE_URL}/api/sacqulluq`)
        .then((res) => {
            sacqulluq = res.data
        })
    return sacqulluq
}

export const getSacQulluqById = async (id) => {
    let sacqulluq;
    await axios.get(`${BASE_URL}/api/sacqulluq/${id}`)
        .then((res) => {
            sacqulluq = res.data
        })
    return sacqulluq
}

export const getAllHavaFenleri = async () => {
    let havafenleri;
    await axios.get(`${BASE_URL}/api/havafenleri`)
        .then((res) => {
            havafenleri = res.data
        })
    return havafenleri
}

export const getAllUtuler = async () => {
    let utuler;
    await axios.get(`${BASE_URL}/api/utuler`)
        .then((res) => {
            utuler = res.data
        })
    return utuler
}

export const getAllSetler = async () => {
    let setler;
    await axios.get(`${BASE_URL}/api/setler`)
        .then((res) => {
            setler = res.data
        })
    return setler
}


export const getAllSuallar = async () => {
    let suallar;
    await axios.get(`${BASE_URL}/api/suallar`)
        .then((res) => {
            suallar = res.data
        })
    return suallar
}

export const signUP = async (payload) => {
    console.log('Gönderilen veriler:', payload);
    const response = await axios.post(`${BASE_URL}/api/user`, payload);
    console.log(response);
    return response;
};


export const getUsers = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/user`, {
            headers: {
                'x-access-token': token
            }
        });
        return response.data
    } catch (error) {
        throw error
    }
};

export const signIN = async (payload) => {
    const response = await axios.post(`${BASE_URL}/api/login`, payload);
    return response.data;
};


