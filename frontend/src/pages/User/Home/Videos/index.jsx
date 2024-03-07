import { Grid } from '@mui/material'
import React from 'react'
import styles from './index.module.css'

const Vidoes = () => {
    return (
        <div>
            {/* <Grid container spacing={2} item margin={"30px auto"} xs={11}>
                <Grid item xs={12} sm={6} md={4}> */}
            <div className={styles.card}>
                {/* <video src='../../../../../public/instagram_vide01' /> */}
                {/* <video width="750" height="500" controls >
                    <source src="https://www.youtube.com/shorts/oTcabS-evW8" />
                </video> */}
                <div style={{ display: 'flex', justifyContent: 'center' ,margin:"60px"}}>
                    <iframe
                        
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Oflbho9ZG2U?start=103"
                        // src="https://www.youtube.com/shorts/oTcabS-evW8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" allowfullscreen></iframe>
                </div>
            </div>
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={6} md={4}> */}
            {/* <div className={styles.card}>
                        <video src='oneminute.mp4' />
                    </div> */}
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={6} md={4}> */}
            {/* <div className={styles.card}>
                        <video src='oneminute.mp4' />
                    </div> */}
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={6} md={4}> */}
            {/* <div className={styles.card}>
                        <video src='oneminute.mp4' />
                    </div> */}
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={6} md={4}> */}
            {/* <div className={styles.card}>
                        <video src='oneminute.mp4' />
                    </div> */}
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={6} md={4}> */}
            {/* <div className={styles.card}>
                        <video src="oneminute.mp4" />
                    </div> */}
            {/* </Grid> */}
            {/* </Grid> */}
        </div>
    )
}

export default Vidoes
