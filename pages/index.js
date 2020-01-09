import React from "react";
import BookCardList from '../components/BookCardList';
import PageHeader from '../components/PageHeader';

import styles from '../styles/pages/index.less'

const IndexPage = () => {
    return (
        <div className={styles['index-page']}>
            <PageHeader title="Books that I have lent to friends"/>
            <BookCardList />
            <footer>
                <button>Add new book</button>
            </footer>
        </div>
    )
};

export default IndexPage;
