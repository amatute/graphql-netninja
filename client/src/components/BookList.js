import React, {useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries';
import { BookDetails } from './BookDetails';

const BookList = () => {
  const [bookSelected, setBookSelected] = useState(null);
  const { loading, data } = useQuery(getBooksQuery);

  const displayBooks = () => {
    return loading ? <div>Loading books...</div> : 
      data.books.map(({id, name}) => (
        <li key={id} onClick={(e) => {setBookSelected(id)}}>
          {name}
        </li>
      ));
  }

  return (
    <div>
      <ul>
        { displayBooks() }
      </ul>
      <BookDetails bookId={bookSelected}/>
    </div>
  )
}

export default BookList;
