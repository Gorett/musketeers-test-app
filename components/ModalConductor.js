import React from 'react';
import Modal from 'react-modal';

import styles from '../styles/components/ModalConductor.less';

Modal.setAppElement('#index-page');

const customStyles = {
    content: {
        padding: '0',
        margin: '0',
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
            <header className={styles['modal-header']}>
                <h3>{title}</h3>
            </header>
            <section>

            </section>
            <footer className={styles['modal-footer']}>
                <button className={`${styles.btn} ${styles['secondary-btn']}`} onClick={closeModal}>Cancel</button>
                <button className={`${styles.btn} ${styles['primary-btn']}`} onClick={() => {}}>Save</button>
            </footer>
        </Modal>
    )
;

export default ModalConductor;
