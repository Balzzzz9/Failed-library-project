//Button.jsx

import React, { useState } from 'react'


const Button = () => {
  const [library, setLibrary] = useState([])
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [patronId, setPatronId] = useState('');
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);

  const handleClick = () =>{
    if(!title || !author || !isbn) {
      alert("Please fill all fields.")
      return;
    }
    const newBook = {
      title,
      author,
      isbn,
    };

    setLibrary([...library, newBook]);

    setTitle('');
    setAuthor('');
    setIsbn('');

    alert(`Added: ${newBook.title}`);
  }

  const handleRemoveBook = () => {
    const updatedLibrary = library.filter((_, index) =>  index !== selectedBookIndex);
    if (updatedLibrary.length === library.length) {
      alert("No book found.");
    } else {
      setLibrary(updatedLibrary);
      alert(`Removed Book: ${library[selectedBookIndex].title}`)
      setSelectedBookIndex(null);
    }
  };

  const handleCheckout = () => {
    if (!patronId) {
      alert("Please enter a Patron ID.");
      return;
    }
    if (selectedBookIndex === null) {
      alert("Please select a book to check out.");
      return;
    }
    alert(`Book Checked Out: ${library[selectedBookIndex].title} by Patron ID: ${patronId}`);
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="m-2 p-1 border-gray-300"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="m-2 p-1 border border-gray-300"
      />
      <input
        type="text"
        placeholder="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        className="m-2 p-2 border-gray-300"
      />

      <input
        type="text"
        placeholder="Patron ID"
        value={patronId}
        onChange={(e) => setPatronId(e.target.value)}
        className="m-2 p-2 border-gray-300"
      />
      <button 
      onClick={handleClick}
      className="flex flex-row m-auto bg-slate-900 text-white p-2 rounded hover:font-bold hover:bg-green-800">
        Add Book
      </button>

      <button
        onClick={handleRemoveBook}
        className="flex flex-row m-auto bg-red-600 text-white p-2 rounded hover:font-bold hover:bg-red-800 m-2"
        >
          Remove Book
        </button>

      <button
        onClick={handleCheckout}
        className="flex flex-row m-auto bg-blue-600 text-white p-2 rounded hover:font-bold hover:bg-blue-800 m-2">
          Checkout Book
        </button>
      <ul>
        {library.map((book, index) => (
          <li key={index} onClick={() => setSelectedBookIndex(index)}
          style={{cursor: 'pointer', background: selectedBookIndex === index ? '#e0f7fa' : 'transparent' }}>
            <strong>{book.title}</strong> by {book.author} (ISBN: {book.isbn})
          </li>
        ))}
      </ul>
    </div>
  )

}


export default Button
