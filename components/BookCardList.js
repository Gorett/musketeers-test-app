import React from 'react';

import BookCard from "./BookCard";

import styles from '../styles/components/BookCardList.less';

// TODO load data from service
const bookListMock = [
    {
        id: '123hfas',
        title: 'In Search of Lost Time',
        author: 'Marcel Proust',
        lentAt: null,
        returnedAt: null,
        borrower: 'Will Smith',
    },
    {
        id: '4h12k1s',
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel Garcia Marquez',
        lentAt: null,
        returnedAt: null,
        borrower: 'Matt Damon',
    }];

export const BookCardList = () => {

    const getListTitle = () => {
        let listTitle = 'No lent books found';

        if(Array.isArray(bookListMock) && bookListMock.length) {
            listTitle = `You have lent ${bookListMock.length} books to friends`;
        }

        return listTitle;
    };

    return (
        <div className={styles['book-card-list']}>
            <header>
                <p>{getListTitle()}</p>
                <p className={styles.purple}>Lent to:</p>
            </header>

            {bookListMock.map(book => (
                <BookCard key={`${book.id}-key`} {...book} />
            ))}
        </div>
    );
};

export default BookCardList;
