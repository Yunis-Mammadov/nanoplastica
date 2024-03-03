import { Grid } from '@mui/material'
import React from 'react'
import styles from './index.module.css'

const Vidoes = () => {
    return (
        <div>
            <Grid container spacing={2} item margin={"30px auto"} xs={11}>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={styles.card}>
                        <video src='oneminute.mp4' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={styles.card}>
                        <video src='oneminute.mp4' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={styles.card}>
                        <video src='oneminute.mp4' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={styles.card}>
                        <video src='oneminute.mp4' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={styles.card}>
                        <video src='oneminute.mp4' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <div className={styles.card}>
                        <video src="oneminute.mp4" />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Vidoes
