import React, { useContext } from 'react';
import Modal from 'react-modal';

import ModalContext from '../contexts/modal';

Modal.setAppElement('#index-page');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export const ModalConductor = () => {
    const { store } = useContext(ModalContext);

    return (
        <Modal
            contentLabel="Book Modal"
            isOpen={store.isModalOpen}
            style={customStyles}
        >
            <h2>ModalConductor</h2>
        </Modal>
    )
};

export default ModalConductor;
