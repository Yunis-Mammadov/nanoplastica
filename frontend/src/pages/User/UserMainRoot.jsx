import React from 'react'
import UserNavbar from '../../components/User/UserNavbar'
import { Outlet } from "react-router-dom"
import UserFooter from '../../components/User/UserFooter'

const UserMainRoot = () => {
    return (
        <>
            <div>
                <UserNavbar sx={{width:"100%"}} />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <UserFooter />
            </div>
        </>
    )
}

export default UserMainRoot
