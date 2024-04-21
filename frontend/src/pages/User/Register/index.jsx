import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from "../Register/index.module.css"
import { signUP, getUsers } from '../../../api/request';
import * as Yup from "yup"
import { useFormik } from "formik"
import CloseIcon from '@mui/icons-material/Close';



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event);

        if (name.trim() === "" || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            return;
        }

        if (password !== confirmPassword) {
            return;
        }

        const user = {
            name: name,
            password: password,
            email: email
        };

        try {
            const response = await signUP(user);
            console.log(response.data);

            if (response.data.auth) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Qeydiyyat olundu',
                    showConfirmButton: false,
                    timer: 1200
                });
                const token = response.data.token;
                await getUsers(token);
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }

        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const formik = useFormik({
        initialValues: {
            imageURL: "",
            name: "",
            description: ""
        },
    })


    return (
        <>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className={styles.parentRegister}>
                <form className={styles.formRegister} onSubmit={handleSubmit}>
                    <div>
                        <div className={styles.logoContainer}>
                            <CloseIcon className={styles.closeIcon} onClick={() => {
                                window.location.href = "/"
                            }} />
                        </div>
                    </div>
                    <div className={styles.RegisterInput}>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className={styles.RegisterButtons}>
                        <div className={styles.Register}>
                            <button
                                type="submit"
                                className={`${styles.RegisterButton} ${name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' ? styles.disabledButton : ''}`}
                                disabled={name.trim() === '' || email.trim() === '' || password.trim() === '' || password !== confirmPassword}
                            >
                                Sign Up
                            </button>
                        </div>
                        <div>
                            <label>Do you have an account?</label>
                            <a
                                className={styles.RegisterLink}
                                onClick={() => {
                                    navigate('/login');
                                }}
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;