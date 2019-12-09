import React, {useState} from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name,
        genre,
        authorId
      },
      refetchQueries: [{query: getBooksQuery}]
    });

    setName('');
    setGenre('');
  }

  const displayAuthors = () => {
    return loading ? <option disabled>Loading authors...</option> : 
      data.authors.map(({id, name}) => 
        <option key={id} value={id}>{ name }</option> 
      )
  }

  return(
    <form id="add-book" onSubmit={(e) => onSubmit(e)}>
      <div className="field" onChange={(e) => setName(e.target.value)}>
          <label>Book name:</label>
          <input type="text" value={name} />
      </div>
      <div className="field" onChange={(e) => setGenre(e.target.value)}>
          <label>Genre:</label>
          <input type="text" value={genre}  />
      </div>
      <div className="field" onChange={(e) => setAuthorId(e.target.value)}>
          <label>Author:</label>
          <select>
              <option>Select author</option>
              {displayAuthors()}
          </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;