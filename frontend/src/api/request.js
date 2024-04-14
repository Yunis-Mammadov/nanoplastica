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


export const getAllImgs = async () => {
    let imgs;
    await axios.get(`${BASE_URL}/api/imgs`)
        .then((res) => {
            imgs = res.data
        })
    return imgs
}

export const signUP = async (payload) => {
    console.log('Göndərilən:', payload);
    const response = await axios.post(`${BASE_URL}/api/user`, payload);
    return response;
};

export const getUsers = async (token) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/user`, {
            headers: {
                'x-access-token': token
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user info:", error);
        throw error;
    }
};


export const signIN = async (payload) => {
    const response = await axios.post(`${BASE_URL}/api/login`, payload);
    return response.data;
};




// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";
// import { LSGI_userToken } from "./localStorage";

// export const isLoginAuth = (WrappedComponent, PrivateOrPublic) => {
//     const Auth = (props) => {
//         const router = useRouter();
//         const isLogin = localStorage.getItem("userToken") !== null;

//         useEffect(() => {
//             console.log("ISLOGINAUTH", isLogin);

//             if (!isLogin && PrivateOrPublic === "private") {
//                 router.push("/login");
//             } else if (isLogin && PrivateOrPublic === "public") {
//                 router.push("/all-rooms");
//             }
//         }, [PrivateOrPublic]);

//         if (
//             (!isLogin && PrivateOrPublic === "private") ||
//             (isLogin && PrivateOrPublic === "public")
//         ) {
//             return null;
//         }

//         return <WrappedComponent {...props} />;
//     };

//     return Auth;
// };


// export const LSGI_userToken = ()=>{
//     // console.log("LSGI-USERTOKEN");
//     return localStorage.getItem("userToken")
// }

// export const LSSI_userToken = (accessToken)=>{
//     console.log('LSSI-USERTOKEN');
//     return localStorage.setItem("userToken",accessToken)
// }

