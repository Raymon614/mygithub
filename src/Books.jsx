import React, { useState } from "react";
import Book from "./Book";
import SearchFilter from "./SearchFilter";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([
    {
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "Paradise Lost",
      author: "John Milton",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "Frankeenstein",
      author: "Mary Shelley",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "Dracula",
      author: "Bram Stoker",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "Macbeth",
      author: "William Shakespeare",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      dueDate: getRandomDueDate(),
      status: "Checked Out",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      status: "Available",
    },
    {
      title: "The Lord of the Rings",
      author: " J.R.R. Tolkien",
      status: "Available",
    },
    { title: "The Odyssey", author: "Homer", status: "Available" },
    {
      title: "Romeo and Juliet",
      author: "William Shakespeare",
      status: "Available",
    },
  ]);

  const [filteredBooks, setFilteredBooks] = useState(books);

  function getRandomDueDate() {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30);
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + randomDays);
    return dueDate.toISOString().split("T")[0];
  }

  const toggleStatus = (index) => {
    setBooks((prevBooks) => {
      const newBooks = [...prevBooks];
      newBooks[index].status =
        newBooks[index].status === "Checked Out" ? "Available" : "Checked Out";
      if (newBooks[index].status === "Checked Out") {
        newBooks[index].dueDate = getRandomDueDate();
      } else {
        delete newBooks[index].dueDate;
      }
      return newBooks;
    });
  };

  return (
    <div className="container">
      <h1>Books</h1>
      <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <Book
              key={index}
              index={index}
              book={book}
              toggleStatus={toggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
