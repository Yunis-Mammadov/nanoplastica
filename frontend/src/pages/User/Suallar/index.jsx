import React, { useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./index.module.css"
import { getAllSuallar } from '../../../api/request';

const Suallar = () => {
    const [suallar, setSuallar] = useState([])

    useEffect(() => {
        getAllSuallar().then(data => {
            setSuallar(data);
        });
    }, []);

    return (
        <div className={styles.parentSuallar}>
            <h2 style={{ marginBottom: "30px" }}>Ən Çox Verilən Suallar</h2>
            {suallar.map((sual) => (
                <Accordion className={styles.sualAccordion} key={sual.id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>{sual.sual}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{sual.cavab}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

export default Suallar
