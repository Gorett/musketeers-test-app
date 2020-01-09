import React from "react";
import BookCardList from '../components/BookCardList';


const IndexPage = () => {
    return (
        <div>
            <header>
                <h1>Books that I have lent to friends</h1>
            </header>
            <BookCardList />
            <footer>
                <button>Add new book</button>
            </footer>
        </div>
    )
};

export default IndexPage;
