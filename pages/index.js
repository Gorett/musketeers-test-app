import React, { useReducer } from 'react';

import BookCardListContainer from '../containers/BookCardListContainer';
import PageHeader from '../components/PageHeader';
import ModalConductor from '../components/ModalConductor';

import modalReducer, { initialState } from '../reducers/modal';
import ModalContext from '../contexts/modal';

import styles from '../styles/pages/index.less'

const IndexPage = () => {
    const [state, dispatch] = useReducer(modalReducer, initialState);

    return (
        <ModalContext.Provider value={{ store: state, dispatch }} >
            <div id="index-page" className={styles['index-page']}>
                <PageHeader title="Books that I have lent to friends"/>
                <BookCardListContainer />
                <footer>
                    <button>Add new book</button>
                </footer>

                <ModalConductor />
            </div>
        </ModalContext.Provider>
    )
};

export default IndexPage;
