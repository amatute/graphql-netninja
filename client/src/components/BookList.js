import React from 'react'
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getBooksQuery = gql`
  {
    books{
      id
      name
    }
  }
`;

const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery);

  const displayBooks = () => {
    return loading ? <div>Loading books...</div> : 
    data.books.map(({id, name}) => (
      <li key={id}>
        {name}
      </li>
      ));
  }

  return (
    <div>
      <ul>
        { displayBooks() }
      </ul>
    </div>
  )
}

export default BookList;
