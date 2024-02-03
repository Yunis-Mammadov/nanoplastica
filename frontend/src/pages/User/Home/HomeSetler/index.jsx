// import React, { useEffect, useState } from 'react';
// import { getAllSetler } from '../../../../api/request';
// import styles from './index.module.css';
// import Countdown from '../Countdown';

// const Setler = () => {

//     const [setler, setSetler] = useState([]);
//     const [filteredItems, setFilteredItems] = useState([]);


//     useEffect(() => {
//         getAllSetler().then(data => {
//             setSetler(data);
//             setFilteredItems(data);
//         });
//     }, [])


//     return (
//         <div style={{ marginTop: "100px" }}>
//             <a className={styles.linkSetler} href="/setler">
//                 <h2 style={{ width: "100%", textAlign: "center" }}>Setlər</h2>
//             </a>
//             <div className={styles.parentColumn2}>
//                 <div className={styles.homeSetlerParent}>
//                     <div className={styles.card}>
//                         {/* <img className={styles.cardImg} src="/SetImg/setrevive3.jpg" alt='' /> */}
//                     </div>
//                     <div className={styles.card}>
//                         {/* <img className={styles.cardImg} src="/SetImg/setrevive2.jpg" alt='' /> */}
//                     </div>
//                     <div className={styles.card}>
//                         {/* <img className={styles.cardImg} src="/SetImg/setrevive1.jpg" alt='' /> */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Setler


import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
    maxWidth: 400,
    margin: "20px auto"
});

const HomeSetler = () => {
    return (
        <>
            <div style={{marginTop:"200px"}}>
                <h2 style={{textAlign:"center"}}>Setler</h2>
                <Grid container justifyContent="center" >
                    <Grid item xs={12} sm={6} md={4} >
                        <StyledCard>
                            <CardContent>
                                <img style={{ width: "100%" }} src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704006934/WhatsApp_Image_2023-12-28_at_23.23.43_sbalrp.jpg" alt="" />
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <StyledCard>
                            <CardContent>
                                <img style={{ width: "100%" }} src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704006917/WhatsApp_Image_2023-12-28_at_23.23.42_ip19cj.jpg" alt="" />
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <StyledCard>
                            <CardContent>
                                <img style={{ width: "100%" }} src="https://res.cloudinary.com/dsb3j1ozv/image/upload/v1704006933/WhatsApp_Image_2023-12-28_at_23.23.43_1_qqkgzq.jpg" alt="" />
                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default HomeSetler;
