import React, { useContext } from 'react';

import { BookCardList } from '../components/BookCardList';

import ModalContext from '../contexts/modal';
import { openModal as openModalAction } from '../actions';

const BookCardListContainer = props => {
    const { dispatch } = useContext(ModalContext);

    return <BookCardList {...props} openModal={() => dispatch(openModalAction())} />
};

export default BookCardListContainer;
