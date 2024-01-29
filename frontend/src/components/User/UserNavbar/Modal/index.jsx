import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import * as React from 'react';
import { useMediaQuery } from '@mui/material';




const isExtraLargeStyle = {
    position: 'absolute',
    top: '20%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: "8vh",
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: "flex",
    border: "none",
    alignItems: "center",
    padding: "0 10px"
};

const isLargeStyle = {
    position: 'absolute',
    top: '20%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: "8vh",
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: "flex",
    border: "none",
    alignItems: "center",
    padding: "0 10px"
};

const isSmallStyle = {
    position: 'absolute',
    top: '20%',
    left: '65%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: "8vh",
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: "flex",
    border: "none",
    alignItems: "center",
    padding: "0 10px"
};

export default function TransitionsModal() {
    const isExtraLarge = useMediaQuery('(min-width:1100px)');
    const isLarge = useMediaQuery('(min-width:500px)');
    const isSmallScreen = useMediaQuery('(min-width:250px)');   
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setInputValue("");
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClearInput = (e) => {
        setInputValue("")
    }

    if (isExtraLarge) {
        return (
            <div>
                <Button sx={{ minWidth: "10px" }} onClick={handleOpen}><SearchIcon sx={{ color: "white" }} /></Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={isExtraLargeStyle}>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <InputBase
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        fontSize: "16px",
                                        paddingLeft: 1,
                                        paddingRight: inputValue ? '40px' : '15px',
                                        border: 'none'
                                    }}
                                    placeholder='Axtarış...'
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                {inputValue && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '10px',
                                            transform: 'translateY(-50%)',
                                            cursor: 'pointer'
                                        }}
                                        onClick={handleClearInput}
                                    >
                                        <ClearIcon />
                                    </div>
                                )}
                            </div>
                            <button
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    border: "none",
                                    width: "80px",
                                    height: "100%",
                                    position: "relative",
                                    left: "10px"
                                }}
                            >
                                <SearchIcon />
                            </button>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        );
    }

    if (isLarge && !isExtraLarge) {
        return (
            <div>
                <Button sx={{ minWidth: "10px" }} onClick={handleOpen}><SearchIcon sx={{ color: "white" }} /></Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={isLargeStyle}>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <InputBase
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        fontSize: "16px",
                                        paddingLeft: 1,
                                        paddingRight: inputValue ? '40px' : '15px',
                                        border: 'none'
                                    }}
                                    placeholder='Axtarış...'
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                {inputValue && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '10px',
                                            transform: 'translateY(-50%)',
                                            cursor: 'pointer'
                                        }}
                                        onClick={handleClearInput}
                                    >
                                        <ClearIcon />
                                    </div>
                                )}
                            </div>
                            <button
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    border: "none",
                                    width: "80px",
                                    height: "100%",
                                    position: "relative",
                                    left: "10px"
                                }}
                            >
                                <SearchIcon />
                            </button>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        );
    }
    if (isSmallScreen && !isExtraLarge && !isLarge) {
        return (
            <div>
                <Button sx={{ minWidth: "10px" }} onClick={handleOpen}><SearchIcon sx={{ color: "white" }} /></Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={open}>
                        <Box sx={isSmallStyle}>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <InputBase
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        fontSize: "16px",
                                        paddingLeft: 1,
                                        paddingRight: inputValue ? '40px' : '15px',
                                        border: 'none'
                                    }}
                                    placeholder='Axtarış...'
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                {inputValue && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            right: '10px',
                                            transform: 'translateY(-50%)',
                                            cursor: 'pointer'
                                        }}
                                        onClick={handleClearInput}
                                    >
                                        <ClearIcon />
                                    </div>
                                )}
                            </div>
                            <button
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                    border: "none",
                                    width: "80px",
                                    height: "100%",
                                    position: "relative",
                                    left: "10px"
                                }}
                            >
                                <SearchIcon />
                            </button>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        );
    }
}

