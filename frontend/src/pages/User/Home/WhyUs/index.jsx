import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import { Box, Card } from '@mui/material';
import Grid from "@mui/material/Grid";
import React from 'react';
import styles from "./index.module.css";

const WhyUs = () => {
    return (
        <>
            <div style={{ marginTop: "70px" }}>
                <div className={styles.textParent}>
                    <h3 className={styles.textCenter}>Niyə bizi seçməlisiniz?</h3>
                </div>
                <Box>
                    <Grid container spacing={2} item margin={"100px auto"} xs={11}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card style={{
                                boxShadow: "none"
                            }} className={styles.whyUsCard}>
                                <div className={styles.cardDetail}>
                                    <StarIcon sx={{
                                        fontSize: "60px"
                                    }} />
                                    <h4>Qapıda Rəsmiləşdirmə</h4>
                                    <p className={styles.textCenter}> Keratin məhsullarında ən yüksək keyfiyyəti təmin edirik. Müştərilərimizin saç qayğısında etibarlı şəkildə istifadə edə biləcəyi məhsulları təqdim edirik</p>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card style={{
                                boxShadow: "none"
                            }} className={styles.whyUsCard}>
                                <div className={styles.cardDetail}>
                                    <InfoIcon style={{
                                        fontSize: "60px"
                                    }} className={styles.whyUsIcon} />
                                    <h4>6 ay ödənişsiz zəmanət</h4>
                                    <p className={styles.textCenter}>Keratin sahəsində uzun illərin təcrübəsi ilə müştərilərimizə saç qayğısı üzrə mütəxəssis rəhbərliyi təmin edirik</p>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{
                                boxShadow: "none"
                            }} className={styles.whyUsCard}>
                                <div className={styles.cardDetail}>
                                    <TagFacesIcon sx={{
                                        fontSize: "60px"
                                    }} className={styles.whyUsIcon} />
                                    <h4>Qızıl zəmanət +15% 18 ay</h4>
                                    <p className={styles.textCenter}>Müştəri dəstək komandamız hər zaman sizin qənaətiniz üçün bütün sual və təkliflərinizi dinləməyə hazırdır</p>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card sx={{
                                boxShadow: "none"
                            }} className={styles.whyUsCard}>
                                <div className={styles.cardDetail}>
                                    <TwoWheelerIcon sx={{
                                        fontSize: "60px"
                                    }} className={styles.whyUsIcon} />
                                    <h4>Pulsuz və Sürətli Çatdırılma</h4>
                                    <p className={styles.textCenter}>Sifarişlərinizi sürətli şəkildə qəbul edir, etibarlı çatdırılma vasitəsilə ünvanınıza çatdırırıq.</p>
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default WhyUs;
