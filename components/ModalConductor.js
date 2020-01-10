import React from 'react';
import Modal from 'react-modal';

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

export const ModalConductor = ({title, isModalOpen, closeModal}) => (
        <Modal
            contentLabel="Book Modal"
            isOpen={isModalOpen}
            style={customStyles}
        >
            <header>
                <h3>{title}</h3>
            </header>
            <section>

            </section>
            <footer>
                <button onClick={closeModal}>Cancel</button>
                <button onClick={() => {}}>Save</button>
            </footer>
        </Modal>
    )
;

export default ModalConductor;
