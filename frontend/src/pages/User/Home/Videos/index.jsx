import React from 'react'
import styles from "./index.module.css"

const Videos = () => {
    return (
        <div>
            <h2 style={{textAlign:"center"}}>Müştəri Məmnuniyyəti</h2>
            <div className={styles.videoParent}>
                <video className={styles.video} width="320" height="240" controls>
                    <source src="oneminute.mp4" type="video/mp4" />
                </video>
                <video className={styles.video} width="320" height="240" controls>
                    <source src="oneminute.mp4" type="video/mp4" />
                </video>
                <video className={styles.video} width="320" height="240" controls>
                    <source src="oneminute.mp4" type="video/mp4" />
                </video>
                <video className={styles.video} width="320" height="240" controls>
                    <source src="oneminute.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Videos
