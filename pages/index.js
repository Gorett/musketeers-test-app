import React, { useReducer } from 'react';

import BookCardListContainer from '../containers/BookCardListContainer';
import PageHeader from '../components/PageHeader';
import ModalConductor from '../containers/ModalConductorContainer';

import modalReducer, { initialState } from '../reducers/modal';
import ModalContext from '../contexts/modal';
import { openModal } from '../actions';

import styles from '../styles/pages/index.less'

const IndexPage = () => {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    const handleCLick = () => dispatch(openModal());

    return (
        <ModalContext.Provider value={{ store: state, dispatch }} >
            <div id="index-page" className={styles['index-page']}>
                <PageHeader title="Books that I have lent to friends"/>
                <BookCardListContainer />
                <footer>
                    <button onClick={handleCLick}>Add new book</button>
                </footer>

                <ModalConductor />
            </div>
        </ModalContext.Provider>
    )
};

export default IndexPage;
