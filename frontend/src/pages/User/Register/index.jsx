import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { signUP } from '../../../api/request';
import styles from "../Register/index.module.css";



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

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

            const response = await signUP(user);
            console.log("API Response:", response); // API yanıtını kontrol etmek için log
            // ...

        } catch (error) {
            console.error("API Call Error:", error);
            // Hata mesajını daha detaylı inceleyebilir ve hatanın kaynağını daha iyi anlamak için loglayabilirsiniz.
        } finally {
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
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

    // const formik = useFormik({
    //     initialValues: {
    //         imageURL: "",
    //         name: "",
    //         description: ""
    //     },
    // })


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
                                window.location.href = "http://localhost:3000"
                            }} />
                            <img src="https://my.account.sony.com/central/signin/9fe91826ca150e7fa133749535fa2ed86e5c1b70/assets/images/logo_playstation.png" alt="" />
                        </div>
                    </div>
                    <label className={styles.RegisterLabel}>
                        Sign in to PlayStation with one of your Sony account
                    </label>
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
                                onChange={handleInputChange
                                }
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
                            <Link
                                className={styles.RegisterLink}
                                onClick={() => {
                                    navigate('/login');
                                }}
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;