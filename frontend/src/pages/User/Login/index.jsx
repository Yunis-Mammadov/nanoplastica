import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { getUsers, signIN } from '../../../api/request';
import styles from '../Login/index.module.css';
import { useUserContext } from '../../../context/UserContext';



const Login = () => {
    const [user, setUser] = useUserContext();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (values, actions) => {
        const response = await signIN(values);
        console.log(response);
        if (response.auth) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            setUser(response.user);
            setIsLoggedIn(true);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Daxil Olundu!',
                showConfirmButton: false,
                timer: 1200
            });
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
        actions.resetForm();
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: handleSubmit
    })



    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className={styles.parentLogin}>
                <form className={styles.formLogin} onSubmit={formik.handleSubmit}>
                    <div>
                        <div>
                            <div className={styles.logoContainer}>
                                <CloseIcon className={styles.closeIcon} onClick={() => {
                                    window.location.href = "http://localhost:3000"
                                }} />
                                <img src="https://my.account.sony.com/central/signin/9fe91826ca150e7fa133749535fa2ed86e5c1b70/assets/images/logo_playstation.png" alt="" />
                            </div>
                        </div>
                        <label className={styles.loginLabel}>
                            Sign in to PlayStation with one of your Sony account
                        </label>
                    </div>
                    <div className={styles.loginInput}>
                        <div>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                        </div>
                    </div>
                    <div className={styles.loginButtons}>
                        <div className={styles.signIn}>
                            <button
                                type="submit"
                                className={styles.signInButton}
                            >
                                Sign In
                            </button>
                        </div>
                        <div>
                            <button onClick={() => {
                                window.location.href = "register";
                            }} className={styles.loginToRegister}>Create New Account</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;