import './App.css';

const App = () => {
  const books = [
    { title: 'V.', read: true },
    { title: "Gravity's Rainbow", read: false },
    { title: 'The Crying of Lot 49', read: true },
  ];

  return (
    <>
      <h1>Book List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index} className={book.read ? 'read' : 'not-read'}>
            {book.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;