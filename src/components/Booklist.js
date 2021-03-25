import React, { useContext } from 'react';
import { BookContext } from '../contexts/Book.context';
import { ThemeContext } from '../contexts/Theme.context';

const BookList = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme =  isLightTheme ? light : dark;

    return ( 
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {
                    books.map((book) => (
                        <li style={{ background: theme.ui }}>{ book.title }</li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default BookList;