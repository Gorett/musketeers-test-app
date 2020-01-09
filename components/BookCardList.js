import React from 'react';

import styles from '../styles/components/BookCardList.less';

// TODO load data from service
const bookListMock = [{
    title: 'In Search of Lost Time',
    author: 'Marcel Proust',
    lentAt: '',
    returnedAt: null,
    borrower: 'Will Smith',
},
    {
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel Garcia Marquez',
        lentAt: '',
        returnedAt: '',
        borrower: 'Matt Damon',
    }];

export const BookCardList = () => (<div className={styles['book-card-list']}>Book Card List</div>);

export default BookCardList;
