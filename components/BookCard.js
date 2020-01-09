import React from 'react';

import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import styles from '../styles/components/BookCard.less';

export const BookCard = ({ book, index, onEditClick }) => {
    const getTimeRange = () => {
        let timeRange = '';

        if (book.lentAt) {
            timeRange = `${book.lentAt} - ${book.returnedAt ? book.returnedAt : 'open'}`
        }

        return timeRange;
    };

    return (
        <div className={styles['book-card']}>
            <div className={styles['book-card-index']}>
                <p>{index}</p>
            </div>
            <div className={styles['book-card-info']}>
                <h3>{book.title}</h3>
                <p>from {book.author}</p>
            </div>
            <div className={styles['book-card-actions']}>
                <IconButton
                    aria-label="edit"
                    className={styles['actions-group']}
                    size="small"
                    onClick={() => onEditClick(book.id)}
                >
                    <EditIcon />
                </IconButton>
                <p className={styles['book-borrower']}>{book.borrower}</p>
                <p className={styles['date-range']}>{getTimeRange()}</p>
            </div>
        </div>
    );
};

export default BookCard;
