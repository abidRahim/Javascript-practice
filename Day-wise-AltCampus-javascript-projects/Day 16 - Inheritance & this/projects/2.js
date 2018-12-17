// The Cat

// Create an object that represents a cat. It should have properties for tiredness, hunger, lonliness and happiness
// Write methods that increase and decrease those properties.
// Write a method that prints out the cat's status in each area. (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
// Make the functions take arguments that increase or decrease arbitrary amounts

catFunction = {
  increase: function() {
    console.log( ++this.tiredness, ++this.hunger, ++this.lonliness, ++this.happiness );
  },
  decrease: function() {
    console.log( --this.tiredness, --this.hunger, --this.lonliness, --this.happiness);
  },
  thisMood: function() {
    console.log( this.name + " is very " + this.mood);
  }
}

function cat(tiredness, hunger, lonliness, happiness, name, mood) {
  var catObj = Object.create(catFunction);

  catObj.tiredness = tiredness;
  catObj.hunger = hunger;
  catObj.lonliness = lonliness;
  catObj.happiness = happiness;
  catObj.mood = mood;
  catObj.name = name;


  return catObj;
}

var catMood = cat(2, 3, 4, 5);



// 2nd
// An object-oriented book-list!catStatus: function() {
    
  

// Create a class BookList
// Create another class called Book


// BookLists should have the following properties:
  // 1. Number of books marked as read
  // 2. Number of books marked not read yet
  // 3. A reference to the next book to read (book object)
  // 4. A reference to the current book being read (book object)
  // 5. A reference to the last book read (book object)
  // 6. An array of all the Books

// Each Book should have several properties:
  // Title
  // Genre
  // Author
  // Read (true or false)
  // Read date, can be blank, otherwise needs to be a JS Date() object


// Every Booklist should have a few methods:
// .add(book)
  // should add a book to the books list.

// .finishCurrentBook()
  // should mark the book that is currently being read as "read"
  // Give it a read date of new Date(Date.now())
  // Change the last book read to be the book that just got finished
  // Change the current book to be the next book to be read
  // Change the next book to be read property to be the first unread book you find in the list of books

  class Booklist {
    constructor(readBooks, unreadBooks, nextBook, currentBook, lastBook, allBooks) {
      this.readBooks = readBooks;
      this.unreadBooks = unreadBooks;
      this.nextBook = nextBook;
      this.currentBook = currentBook;
      this.lastBook = lastBook;
      this.allBooks = allBooks;
    }
  
    addBook(title, genre, author, read) {
      var createBook = new Book(title, genre, author, read);
      return createBook;
    }
  
    finishCurrentBook(currentBook) {
      this.mark = "read";
      this.readBooks++;

    }
  }  
  class Book {
    constructor(title, genre, author, read) {
      this.title = title;
      this.genre = genre;
      this.author = author;
      this.read = read;
      this.readDate = new Date(Date.parse());
    }
  }