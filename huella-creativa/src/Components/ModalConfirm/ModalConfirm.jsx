import React from 'react';
import './ModalConfirm.css'; // Add styling for the modal

const ModalConfirm = ({ isOpen, onConfirm, onCancel, message}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay-confirm">
            <div className="modal-content-confirm">
                <h2>{message}</h2>
                <div className="modal-buttons-confirm">
                    <button className="button-cancel" onClick={onCancel}>No</button>
                    <button className="button-confirm" onClick={onConfirm}>Sí</button>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirm;