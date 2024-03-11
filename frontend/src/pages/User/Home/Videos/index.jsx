import React, { useState } from 'react';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import CloseIcon from '@mui/icons-material/Close';
import './styles.css';

const Videos = ({ videoId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="video-modal">
            <div className="open-button-container" onClick={openModal}>
                <div className="blinking-background">
                </div>
                <button className="open-button"><SlowMotionVideoIcon sx={{ fontSize: "80px" }} />
                </button>

            </div>
            {isOpen && (
                <div className="overlay" onClick={closeModal}>
                    <div className="modal">
                        <button className="closeButton" onClick={closeModal}><CloseIcon className="closeButtonIcon" style={{ fontSize: "28px", color:"white"}} /></button>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/NMu6PjdTIgk`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Videos;
