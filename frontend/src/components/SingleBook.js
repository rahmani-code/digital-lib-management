import React, { useState } from "react";

const SingleBook = () => {
  // Sample data for now, will be fetched dynamically later
  const [book, setBook] = useState({
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    publishedYear: 1960,
    borrowedBy: null,
    dueDate: null,
    coverImage: "http://covers.openlibrary.org/b/isbn/0385472579-S.jpg", // Replace with actual API image later
  });

  // Handle Borrow button click
  const handleBorrow = () => {
    // This is where you'd connect with the backend
    if (!book.borrowedBy) {
      alert("Book borrowed successfully!");
      setBook((prev) => ({
        ...prev,
        borrowedBy: "User123", // Simulating a user ID
        dueDate: "2025-02-01", // Example due date
      }));
    } else {
      alert("This book is already borrowed!");
    }
  };

  // Handle Return button click
  const handleReturn = () => {
    // This is where you'd connect with the backend
    if (book.borrowedBy) {
      alert("Book returned successfully!");
      setBook((prev) => ({
        ...prev,
        borrowedBy: null,
        dueDate: null,
      }));
    } else {
      alert("This book is not borrowed!");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={book.coverImage} alt={book.title} style={styles.coverImage} />
      </div>
      <div style={styles.detailsContainer}>
        <h2>{book.title}</h2>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>Published Year:</strong> {book.publishedYear}
        </p>
        {book.borrowedBy ? (
          <p>
            <strong>Borrowed By:</strong> {book.borrowedBy}
          </p>
        ) : (
          <p>
            <strong>Status:</strong> Available
          </p>
        )}
        {book.dueDate && (
          <p>
            <strong>Due Date:</strong> {book.dueDate}
          </p>
        )}
        <div style={styles.buttonContainer}>
          {book.borrowedBy ? (
            <button style={styles.returnButton} onClick={handleReturn}>
              Return Book
            </button>
          ) : (
            <button style={styles.borrowButton} onClick={handleBorrow}>
              Borrow Book
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    position: "absloute",
  },
  imageContainer: {
    flex: "1",
    marginRight: "20px",
  },
  coverImage: {
    width: "150px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  detailsContainer: {
    flex: "2",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  borrowButton: {
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  returnButton: {
    padding: "10px 20px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default SingleBook;
