import React from 'react';
import './ModalConfirm.css'; // Add styling for the modal

const ModalConfirm = ({ isOpen, onConfirm, onCancel, message}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{message}</h2>
                <div className="modal-buttons">
                    <button onClick={onCancel}>No</button>
                    <button onClick={onConfirm}>Sí</button>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirm;